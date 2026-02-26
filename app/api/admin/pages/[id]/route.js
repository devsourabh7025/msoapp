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

export async function GET(request, { params }) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) return NextResponse.json({ error: authCheck.error }, { status: authCheck.status });
  try {
    await ensureConnected();
    const { id } = await params;
    const page = await Page.findById(id);
    if (!page) return NextResponse.json({ error: "Page not found" }, { status: 404 });
    return NextResponse.json({ page });
  } catch (error) {
    console.error("Error fetching page:", error);
    return NextResponse.json({ error: "Failed to fetch page" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) return NextResponse.json({ error: authCheck.error }, { status: authCheck.status });

  try {
    await ensureConnected();
    const { id } = await params;
    const body = await request.json();
    const { title, content, category, categories, status } = body;

    const page = await Page.findById(id);
    if (!page) return NextResponse.json({ error: "Page not found" }, { status: 404 });

    if (title !== undefined) page.title = title.trim();
    if (content !== undefined) page.content = content;
    if (category !== undefined) page.category = category.trim();
    if (categories !== undefined) {
      const cats = Array.isArray(categories) ? categories.filter(Boolean) : [];
      page.categories = cats;
      if (cats.length > 0 && !page.category) page.category = cats[0];
    }
    if (status) {
      page.status = status;
      if (status === "published" && !page.publishedAt) page.publishedAt = new Date();
    }

    await page.save();
    return NextResponse.json({ page, message: "Page updated successfully" });
  } catch (error) {
    console.error("Error updating page:", error);
    return NextResponse.json({ error: "Failed to update page" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) return NextResponse.json({ error: authCheck.error }, { status: authCheck.status });
  try {
    await ensureConnected();
    const { id } = await params;
    const page = await Page.findByIdAndDelete(id);
    if (!page) return NextResponse.json({ error: "Page not found" }, { status: 404 });
    return NextResponse.json({ message: "Page deleted successfully" });
  } catch (error) {
    console.error("Error deleting page:", error);
    return NextResponse.json({ error: "Failed to delete page" }, { status: 500 });
  }
}
