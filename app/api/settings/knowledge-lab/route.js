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
  { id: "growth-playbooks", name: "Growth Playbooks", description: "Step-by-step guides on hiring, marketing, and legal.", enabled: true, posts: [] },
  { id: "investor-relations", name: "Investor Relations", description: "How to find and talk to VCs and Angel investors.", enabled: true, posts: [] },
  { id: "market-reports", name: "Market Reports", description: "Quarterly PDF downloads on regional industry trends.", enabled: true, posts: [] },
  { id: "tech-tutorials", name: "Tech Tutorials", description: "How to implement The AI Index trends into your business.", enabled: true, posts: [] },
  { id: "expert-columns", name: "Expert Columns", description: "Guest articles from industry veterans and researchers.", enabled: true, posts: [] },
];

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

const POSTS_LIMIT_FIRST = 5;
const POSTS_LIMIT_OTHERS = 3;

function normalizeSubsections(subsections) {
  if (!Array.isArray(subsections) || subsections.length === 0) return defaultSubsections;
  const ids = defaultSubsections.map((s) => s.id);
  return ids.map((id, idx) => {
    const existing = subsections.find((s) => s.id === id) || defaultSubsections.find((s) => s.id === id);
    const limit = idx === 0 ? POSTS_LIMIT_FIRST : POSTS_LIMIT_OTHERS;
    const rawPosts = Array.isArray(existing?.posts) ? existing.posts : [];
    const posts = rawPosts.slice(0, limit).map(normalizePost).filter(Boolean);
    return {
      id: existing?.id || id,
      name: (existing?.name || defaultSubsections.find((s) => s.id === id)?.name || id).slice(0, 120),
      description: (existing?.description || defaultSubsections.find((s) => s.id === id)?.description || "").slice(0, 500),
      enabled: existing?.enabled !== false,
      posts,
    };
  });
}

export async function GET() {
  try {
    await ensureConnected();
    const [contentData, settingsData] = await Promise.all([
      Settings.findOne({ key: "homepageKnowledgeLabContent" }).maxTimeMS(5000).lean(),
      Settings.findOne({ key: "homepageKnowledgeLabSettings" }).maxTimeMS(5000).lean(),
    ]);
    const v = contentData?.value;
    const subsections = normalizeSubsections(v?.subsections);
    const s = settingsData?.value;
    const settings = {
      title: s?.title || "The Knowledge Lab",
      subtitle: s?.subtitle || "Long-form educational content and playbooks.",
    };
    return NextResponse.json({ content: { subsections }, settings });
  } catch (error) {
    console.error("Error fetching Knowledge Lab:", error);
    return NextResponse.json(
      { content: { subsections: defaultSubsections }, settings: { title: "The Knowledge Lab", subtitle: "Long-form educational content and playbooks." } },
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
    const hasPermission = (user.managerPermissions || []).includes("customiseKnowledgeLab");
    if (!isAdmin && !hasPermission) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    if (content !== undefined && content !== null && Array.isArray(content.subsections)) {
      const ids = defaultSubsections.map((s) => s.id);
      const optimizedContent = {
        subsections: ids.map((id, idx) => {
          const sub = content.subsections.find((s) => s.id === id) || defaultSubsections.find((s) => s.id === id);
          const limit = idx === 0 ? POSTS_LIMIT_FIRST : POSTS_LIMIT_OTHERS;
          const rawPosts = Array.isArray(sub?.posts) ? sub.posts : [];
          const posts = rawPosts.slice(0, limit).map(normalizePost).filter(Boolean);
          const def = defaultSubsections.find((s) => s.id === id);
          return {
            id: sub?.id || id,
            name: (sub?.name || def?.name || id).slice(0, 120),
            description: (sub?.description || def?.description || "").slice(0, 500),
            enabled: sub?.enabled !== false,
            posts,
          };
        }),
      };
      await Settings.findOneAndUpdate(
        { key: "homepageKnowledgeLabContent" },
        { value: optimizedContent },
        { upsert: true, new: true }
      ).maxTimeMS(15000);
      revalidatePath("/");
    }
    if (settings !== undefined && settings !== null) {
      await Settings.findOneAndUpdate(
        { key: "homepageKnowledgeLabSettings" },
        { value: { title: settings.title || "The Knowledge Lab", subtitle: settings.subtitle || "Long-form educational content and playbooks." } },
        { upsert: true, new: true }
      ).maxTimeMS(15000);
    }
    return NextResponse.json({ message: "The Knowledge Lab section saved successfully" });
  } catch (error) {
    console.error("Error saving Knowledge Lab:", error);
    return NextResponse.json(
      { error: "Failed to save Knowledge Lab settings", message: error.message },
      { status: 500 }
    );
  }
}
