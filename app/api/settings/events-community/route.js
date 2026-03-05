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
  { id: "mso-summits", name: "MSO Summits", slug: "mso-summits", description: "Flagship physical networking and award ceremonies.", enabled: true, posts: [] },
  { id: "webinars", name: "Webinars", slug: "webinars", description: "Virtual learning sessions on scaling and fundraising.", enabled: true, posts: [] },
  { id: "networking-meetups", name: "Networking Meetups", slug: "networking-meetups", description: "Curated founder-only dinners and mixers.", enabled: true, posts: [] },
  { id: "global-roadshows", name: "Global Roadshows", slug: "global-roadshows", description: "Tracking Maharashtra startups at international stages.", enabled: true, posts: [] },
  { id: "founder-forum", name: "The Founder Forum", slug: "founder-forum", description: "A gated community for MSO members to discuss challenges.", enabled: true, posts: [] },
];

const POSTS_LIMIT_FIRST = 5;
const POSTS_LIMIT_SIDEBAR = 3;

function normalizePost(post) {
  if (!post || typeof post !== "object") return null;
  const id = post._id;
  if (!id) return null;
  return {
    _id: id,
    title: (post.title || "").slice(0, 200),
    slug: post.slug || "",
    excerpt: (post.excerpt || "").slice(0, 300),
    featuredImage: post.featuredImage || "",
    category: post.category || "",
    author: post.author,
    publishedAt: post.publishedAt,
    createdAt: post.createdAt,
  };
}

function normalizeSubsections(subsections) {
  if (!Array.isArray(subsections) || subsections.length === 0) return defaultSubsections;
  const ids = defaultSubsections.map((s) => s.id);
  return ids.map((id, idx) => {
    const existing = subsections.find((s) => s.id === id) || defaultSubsections.find((s) => s.id === id);
    const limit = idx === 0 ? POSTS_LIMIT_FIRST : POSTS_LIMIT_SIDEBAR;
    const rawPosts = Array.isArray(existing?.posts) ? existing.posts : [];
    const posts = rawPosts.slice(0, limit).map(normalizePost).filter(Boolean);
    const def = defaultSubsections.find((s) => s.id === id);
    return {
      id: existing?.id || id,
      name: (existing?.name || def?.name || id).slice(0, 120),
      slug: existing?.slug || def?.slug || id.replace(/_/g, "-"),
      description: (existing?.description || def?.description || "").slice(0, 500),
      enabled: existing?.enabled !== false,
      posts,
    };
  });
}

export async function GET() {
  try {
    await ensureConnected();
    const [contentData, settingsData] = await Promise.all([
      Settings.findOne({ key: "homepageEventsCommunityContent" }).maxTimeMS(5000).lean(),
      Settings.findOne({ key: "homepageEventsCommunitySettings" }).maxTimeMS(5000).lean(),
    ]);
    const v = contentData?.value;
    const subsections = normalizeSubsections(v?.subsections);
    const s = settingsData?.value;
    const settings = {
      title: s?.title || "Events & Community",
      subtitle: s?.subtitle || "Turning readers into a networked community.",
    };
    return NextResponse.json({ content: { subsections }, settings });
  } catch (error) {
    console.error("Error fetching Events & Community:", error);
    return NextResponse.json(
      { content: { subsections: defaultSubsections }, settings: { title: "Events & Community", subtitle: "Turning readers into a networked community." } },
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
    const hasPermission = (user.managerPermissions || []).includes("customiseEventsCommunity");
    if (!isAdmin && !hasPermission) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    if (content !== undefined && content !== null && Array.isArray(content.subsections)) {
      const ids = defaultSubsections.map((s) => s.id);
      const optimizedContent = {
        subsections: ids.map((id, idx) => {
          const sub = content.subsections.find((s) => s.id === id) || defaultSubsections.find((s) => s.id === id);
          const limit = idx === 0 ? POSTS_LIMIT_FIRST : POSTS_LIMIT_SIDEBAR;
          const rawPosts = Array.isArray(sub?.posts) ? sub.posts : [];
          const posts = rawPosts.slice(0, limit).map(normalizePost).filter(Boolean);
          const def = defaultSubsections.find((s) => s.id === id);
          return {
            id: sub?.id || id,
            name: (sub?.name || def?.name || id).slice(0, 120),
            slug: sub?.slug || def?.slug || id.replace(/_/g, "-"),
            description: (sub?.description || def?.description || "").slice(0, 500),
            enabled: sub?.enabled !== false,
            posts,
          };
        }),
      };
      await Settings.findOneAndUpdate(
        { key: "homepageEventsCommunityContent" },
        { value: optimizedContent },
        { upsert: true, new: true }
      ).maxTimeMS(15000);
      revalidatePath("/");
    }
    if (settings !== undefined && settings !== null) {
      await Settings.findOneAndUpdate(
        { key: "homepageEventsCommunitySettings" },
        { value: { title: settings.title || "Events & Community", subtitle: settings.subtitle || "Turning readers into a networked community." } },
        { upsert: true, new: true }
      ).maxTimeMS(15000);
    }
    return NextResponse.json({ message: "Events & Community section saved successfully" });
  } catch (error) {
    console.error("Error saving Events & Community:", error);
    return NextResponse.json(
      { error: "Failed to save Events & Community settings", message: error.message },
      { status: 500 }
    );
  }
}
