import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import { getCached, setCache, withTimeout } from "@/lib/sectionCache";

const CACHE_KEY = "newsIntel";
const FETCH_DEADLINE_MS = 25000;
const POSTS_LIMIT = 3;

const defaultSubsections = [
  { id: "ai-index", name: "The AI Index", description: "", enabled: true, posts: [] },
  { id: "corporate-intel", name: "Corporate Intel", description: "", enabled: true, posts: [] },
  { id: "equity-intel", name: "Equity Intel", description: "", enabled: true, posts: [] },
  { id: "sector-deep-dives", name: "Sector Deep Dives", description: "", enabled: true, posts: [] },
  { id: "policy-tracker", name: "Policy Tracker", description: "", enabled: true, posts: [] },
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
