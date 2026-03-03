import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import jwt from "jsonwebtoken";
import User from "@/models/User";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

const POSTS_LIMIT_SIDEBAR = 3;
const POSTS_LIMIT_FIRST = 5;

function optimizePostData(post) {
  if (!post || typeof post !== "object") return post;
  const id = post._id != null ? String(post._id) : post.id != null ? String(post.id) : post._id;
  const excerpt = typeof post.excerpt === "string" ? post.excerpt.slice(0, 150) : "";
  const img = post.featuredImage;
  const featuredImage = typeof img === "string" && img.length < 2000 ? img : "";
  const optimized = {
    _id: id,
    slug: post.slug || "",
    title: (post.title || "").slice(0, 200),
    featuredImage,
    excerpt,
    category: typeof post.category === "string" ? post.category : "",
    publishedAt: post.publishedAt,
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

const defaultSubsections = [
  { id: "marathi-special", name: "Marathi Special", slug: "marathi-special", enabled: true, posts: [] },
  { id: "solapur-special", name: "Solapur Special", slug: "solapur-special", enabled: true, posts: [] },
  { id: "district-spotlight", name: "District Spotlight", slug: "district-spotlight", enabled: true, posts: [] },
  { id: "tier-2-3-cities", name: "Tier 2 & 3 Cities", slug: "tier-2-3-cities", enabled: true, posts: [] },
  { id: "industrial-zones", name: "Industrial Zones", slug: "industrial-zones", enabled: true, posts: [] },
];

function normalizeSubsections(subsections) {
  if (!Array.isArray(subsections) || subsections.length === 0) return defaultSubsections;
  const ids = defaultSubsections.map((s) => s.id);
  return ids.map((id, idx) => {
    const existing = subsections.find((s) => s.id === id) || defaultSubsections.find((s) => s.id === id);
    const rawPosts = Array.isArray(existing?.posts) ? existing.posts : [];
    const limit = idx === 0 ? POSTS_LIMIT_FIRST : POSTS_LIMIT_SIDEBAR;
    const posts = rawPosts.slice(0, limit).map(optimizePostData);
    return {
      id: existing?.id || id,
      name: existing?.name || defaultSubsections.find((s) => s.id === id)?.name || id,
      slug: existing?.slug || id.replace(/_/g, "-"),
      enabled: existing?.enabled !== false,
      posts,
    };
  });
}

export async function GET() {
  try {
    await ensureConnected();

    const [contentData, settingsData] = await Promise.all([
      Settings.findOne({ key: "homepageRegionalSpecialsContent" }).maxTimeMS(5000).lean(),
      Settings.findOne({ key: "homepageRegionalSpecialsSettings" }).maxTimeMS(5000).lean(),
    ]);

    const v = contentData?.value;
    const subsections = normalizeSubsections(v?.subsections);

    const s = settingsData?.value;
    const settings = {
      title: s?.title || "Regional Specials",
      subtitle: s?.subtitle || "Hyper-local coverage that general news sites miss",
    };

    return NextResponse.json({ content: { subsections }, settings });
  } catch (error) {
    console.error("Error fetching Regional Specials:", error);
    return NextResponse.json(
      {
        content: { subsections: defaultSubsections },
        settings: { title: "Regional Specials", subtitle: "Hyper-local coverage that general news sites miss" },
      },
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
      return NextResponse.json(
        { error: "Not authenticated", message: "Please log in to save settings" },
        { status: 401 }
      );
    }

    let decoded;
    try {
      decoded = jwt.verify(token, getJWTSecret());
    } catch (error) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    await ensureConnected();
    const user = await User.findById(decoded.userId);
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    if (content !== undefined && content !== null && Array.isArray(content.subsections)) {
      const optimizedContent = {
        subsections: content.subsections.map((sub, idx) => {
          const rawPosts = Array.isArray(sub.posts) ? sub.posts : [];
          const limit = idx === 0 ? POSTS_LIMIT_FIRST : POSTS_LIMIT_SIDEBAR;
          const posts = rawPosts.slice(0, limit).map(optimizePostData);
          return {
            id: sub.id,
            name: sub.name,
            slug: sub.slug,
            enabled: sub.enabled !== false,
            posts,
          };
        }),
      };
      await Settings.findOneAndUpdate(
        { key: "homepageRegionalSpecialsContent" },
        { value: optimizedContent },
        { upsert: true, new: true }
      ).maxTimeMS(15000);
      revalidatePath("/");
    }

    if (settings !== undefined && settings !== null) {
      await Settings.findOneAndUpdate(
        { key: "homepageRegionalSpecialsSettings" },
        {
          value: {
            title: settings.title || "Regional Specials",
            subtitle: settings.subtitle || "Hyper-local coverage that general news sites miss",
          },
        },
        { upsert: true, new: true }
      ).maxTimeMS(15000);
    }

    return NextResponse.json({
      message: "Regional Specials section saved successfully",
    });
  } catch (error) {
    console.error("Error saving Regional Specials:", error);
    return NextResponse.json(
      { error: "Failed to save Regional Specials settings", message: error.message },
      { status: 500 }
    );
  }
}
