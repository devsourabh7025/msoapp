import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import { getCached, setCache, withTimeout } from "@/lib/sectionCache";

const CACHE_KEY = "newsIntel";
const FETCH_DEADLINE_MS = 25000;
const POSTS_LIMIT_FIRST = 5;
const POSTS_LIMIT_SIDEBAR = 3;

const defaultSubsections = [
  { id: "ai-index", name: "The AI Index", slug: "ai-index", enabled: true, posts: [] },
  { id: "corporate-intel", name: "Corporate Intel", slug: "corporate-intel", enabled: true, posts: [] },
  { id: "equity-intel", name: "Equity Intel", slug: "equity-intel", enabled: true, posts: [] },
  { id: "sector-deep-dives", name: "Sector Deep Dives", slug: "sector-deep-dives", enabled: true, posts: [] },
  { id: "policy-tracker", name: "Policy Tracker", slug: "policy-tracker", enabled: true, posts: [] },
];

const defaultResult = {
  content: { subsections: defaultSubsections },
  settings: { title: "News & Intel", subtitle: "" },
};

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
  return ids.map((id, idx) => {
    const existing = subsections.find((s) => s.id === id) || defaultSubsections.find((s) => s.id === id);
    const limit = idx === 0 ? POSTS_LIMIT_FIRST : POSTS_LIMIT_SIDEBAR;
    const rawPosts = Array.isArray(existing?.posts) ? existing.posts : [];
    const posts = rawPosts.slice(0, limit).map(optimizePost).filter(Boolean);
    const def = defaultSubsections.find((s) => s.id === id);
    return {
      id: existing?.id || id,
      name: (existing?.name || def?.name || id).slice(0, 120),
      slug: existing?.slug || def?.slug || id.replace(/_/g, "-"),
      enabled: existing?.enabled !== false,
      posts,
    };
  });
}

async function fetchFromDb() {
  await ensureConnected();

  const [contentData, settingsData] = await Promise.all([
    Settings.findOne({ key: "homepageNewsIntelContent" }).maxTimeMS(8000).lean(),
    Settings.findOne({ key: "homepageNewsIntelSettings" }).maxTimeMS(8000).lean(),
  ]);

  const v = contentData?.value;
  const s = settingsData?.value;
  return {
    content: { subsections: normalizeSubsections(v?.subsections) },
    settings: {
      title: s?.title || "News & Intel",
      subtitle: s?.subtitle || "",
    },
  };
}

export async function getNewsIntelContent() {
  try {
    const result = await withTimeout(fetchFromDb(), FETCH_DEADLINE_MS);
    setCache(CACHE_KEY, result);
    return result;
  } catch (error) {
    const cached = getCached(CACHE_KEY, { fallback: true });
    if (cached) {
      console.warn("News & Intel fetch timed out, using cache:", error.message);
      return cached;
    }
    console.error("News & Intel fetch failed:", error.message);
    return defaultResult;
  }
}
