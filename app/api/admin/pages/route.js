import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Page from "@/models/Page";
import User from "@/models/User";
import jwt from "jsonwebtoken";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

async function checkAdmin(request) {
  const token = request.cookies.get("token")?.value;
  if (!token) return { error: "Not authenticated", status: 401 };
  try {
    await ensureConnected();
    const decoded = jwt.verify(token, getJWTSecret());
    const user = await User.findById(decoded.userId).select("-password");
    if (!user || user.role !== "ADMIN") return { error: "Unauthorized - Admin access required", status: 403 };
    return { user };
  } catch {
    return { error: "Not authenticated", status: 401 };
  }
}

export async function GET(request) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) return NextResponse.json({ error: authCheck.error }, { status: authCheck.status });

  try {
    await ensureConnected();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const status = searchParams.get("status");

    const query = {};
    if (category) query.$or = [{ category }, { categories: category }];
    if (status) query.status = status;

    const pages = await Page.find(query).sort({ updatedAt: -1 }).lean();
    return NextResponse.json({ pages });
  } catch (error) {
    console.error("Error fetching pages:", error);
    return NextResponse.json({ error: "Failed to fetch pages" }, { status: 500 });
  }
}

export async function POST(request) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) return NextResponse.json({ error: authCheck.error }, { status: authCheck.status });

  try {
    await ensureConnected();
    let body;
    try { body = await request.json(); } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }
    const { title, content, category, categories, status } = body;

    if (!title?.trim()) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const cats = Array.isArray(categories) ? categories.filter(Boolean) : [];
    const singleCat = category?.trim() || "";

    if (!singleCat && cats.length === 0 && !content?.trim()) {
      return NextResponse.json({ error: "Provide content or at least one category" }, { status: 400 });
    }

    let baseSlug = title.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "page";
    let slug = baseSlug;
    let slugCounter = 1;
    while (await Page.findOne({ slug })) {
      slug = `${baseSlug}-${slugCounter}`;
      slugCounter++;
    }

    const pageData = {
      title: title.trim(),
      slug,
      content: content?.trim() || "",
      category: singleCat || (cats.length > 0 ? cats[0] : ""),
      categories: cats.length > 0 ? cats : (singleCat ? [singleCat] : []),
      status: status || "draft",
    };
    if (pageData.status === "published") pageData.publishedAt = new Date();

    const page = await Page.create(pageData);
    return NextResponse.json({ page: page.toObject ? page.toObject() : page, message: "Page created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error creating page:", error);
    let message = "Failed to create page";
    if (error.name === "ValidationError") {
      message = Object.values(error.errors)[0]?.message || "Invalid page data";
    } else if (error.code === 11000) {
      message = "A page with this slug already exists";
    } else if (error.message) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
