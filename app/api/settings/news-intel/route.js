import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import jwt from "jsonwebtoken";
import User from "@/models/User";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

const defaultSubsections = [
  { id: "ai-index", name: "The AI Index", description: "", enabled: true, posts: [] },
  { id: "corporate-intel", name: "Corporate Intel", description: "", enabled: true, posts: [] },
  { id: "equity-intel", name: "Equity Intel", description: "", enabled: true, posts: [] },
  { id: "sector-deep-dives", name: "Sector Deep Dives", description: "", enabled: true, posts: [] },
  { id: "policy-tracker", name: "Policy Tracker", description: "", enabled: true, posts: [] },
];

const POSTS_LIMIT = 3;

function optimizePost(post) {
  if (!post || typeof post !== "object") return null;
  const id = post._id != null ? String(post._id) : post.id != null ? String(post.id) : null;
  if (!id) return null;
  const img = post.featuredImage;
  const featuredImage = typeof img === "string" && img.length < 2000 ? img : "";
  const optimized = {
    _id: id,
    title: (post.title || "").slice(0, 200),
    slug: post.slug || "",
    excerpt: (post.excerpt || "").slice(0, 300),
    featuredImage,
    category: typeof post.category === "string" ? post.category : "",
    publishedAt: post.publishedAt,
    createdAt: post.createdAt,
  };
  if (post.author) {
    if (typeof post.author === "object" && post.author.name) {
      optimized.author = { name: String(post.author.name).slice(0, 80) };
    } else if (typeof post.author === "string") {
      optimized.author = post.author.slice(0, 80);
    } else {
      optimized.author = { name: "Editorial Team" };
    }
  }
  return optimized;
}

function normalizeSubsections(subsections) {
  if (!Array.isArray(subsections) || subsections.length === 0) return defaultSubsections;
  const ids = defaultSubsections.map((s) => s.id);
  return ids.map((id) => {
    const existing = subsections.find((s) => s.id === id) || defaultSubsections.find((s) => s.id === id);
    const rawPosts = Array.isArray(existing?.posts) ? existing.posts : [];
    const posts = rawPosts.slice(0, POSTS_LIMIT).map(optimizePost).filter(Boolean);
    return {
      id: existing?.id || id,
      name: (existing?.name || defaultSubsections.find((s) => s.id === id)?.name || id).slice(0, 120),
      description: (existing?.description || "").slice(0, 500),
      enabled: existing?.enabled !== false,
      posts,
    };
  });
}

export async function GET() {
  try {
    await ensureConnected();
    const [contentData, settingsData] = await Promise.all([
      Settings.findOne({ key: "homepageNewsIntelContent" }).maxTimeMS(5000).lean(),
      Settings.findOne({ key: "homepageNewsIntelSettings" }).maxTimeMS(5000).lean(),
    ]);
    const v = contentData?.value;
    const subsections = normalizeSubsections(v?.subsections);
    const s = settingsData?.value;
    const settings = {
      title: s?.title || "News & Intel",
      subtitle: s?.subtitle || "",
    };
    return NextResponse.json({ content: { subsections }, settings });
  } catch (error) {
    console.error("Error fetching News & Intel:", error);
    return NextResponse.json(
      { content: { subsections: defaultSubsections }, settings: { title: "News & Intel", subtitle: "" } },
      { status: 200 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { content, settings } = body;
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Not authenticated", message: "Please log in to save settings" }, { status: 401 });
    }
    let decoded;
    try {
      decoded = jwt.verify(token, getJWTSecret());
    } catch (error) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    await ensureConnected();
    const user = await User.findById(decoded.userId);
    if (!user) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    const isAdmin = user.role === "ADMIN";
    const hasPermission = (user.managerPermissions || []).includes("customiseNewsIntel");
    if (!isAdmin && !hasPermission) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    if (content !== undefined && content !== null && Array.isArray(content.subsections)) {
      const optimizedContent = {
        subsections: content.subsections.map((sub) => {
          const rawPosts = Array.isArray(sub.posts) ? sub.posts : [];
          const posts = rawPosts.slice(0, POSTS_LIMIT).map(optimizePost).filter(Boolean);
          return {
            id: sub.id,
            name: (sub.name || "").slice(0, 120),
            description: (sub.description || "").slice(0, 500),
            enabled: sub.enabled !== false,
            posts,
          };
        }),
      };
      await Settings.findOneAndUpdate(
        { key: "homepageNewsIntelContent" },
        { value: optimizedContent },
        { upsert: true, new: true }
      ).maxTimeMS(15000);
      revalidatePath("/");
    }
    if (settings !== undefined && settings !== null) {
      await Settings.findOneAndUpdate(
        { key: "homepageNewsIntelSettings" },
        { value: { title: settings.title || "News & Intel", subtitle: settings.subtitle || "" } },
        { upsert: true, new: true }
      ).maxTimeMS(15000);
    }
    return NextResponse.json({ message: "News & Intel section saved successfully" });
  } catch (error) {
    console.error("Error saving News & Intel:", error);
    return NextResponse.json(
      { error: "Failed to save News & Intel settings", message: error.message },
      { status: 500 }
    );
  }
}
