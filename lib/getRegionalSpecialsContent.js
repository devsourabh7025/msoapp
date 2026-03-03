import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import { getCached, setCache, withTimeout } from "@/lib/sectionCache";

const CACHE_KEY = "regionalSpecials";
const POSTS_LIMIT_SIDEBAR = 3;
const POSTS_LIMIT_FIRST = 5;
const FETCH_DEADLINE_MS = 12000;

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

const defaultResult = {
  content: { subsections: defaultSubsections },
  settings: { title: "Regional Specials", subtitle: "Hyper-local coverage that general news sites miss" },
};

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

async function fetchFromDb() {
  await ensureConnected();

  const [contentData, settingsData] = await Promise.all([
    Settings.findOne({ key: "homepageRegionalSpecialsContent" }).maxTimeMS(8000).lean(),
    Settings.findOne({ key: "homepageRegionalSpecialsSettings" }).maxTimeMS(8000).lean(),
  ]);

  const v = contentData?.value;
  const s = settingsData?.value;
  return {
    content: { subsections: normalizeSubsections(v?.subsections) },
    settings: {
      title: s?.title || "Regional Specials",
      subtitle: s?.subtitle || "Hyper-local coverage that general news sites miss",
    },
  };
}

export async function getRegionalSpecialsContent() {
  try {
    const result = await withTimeout(fetchFromDb(), FETCH_DEADLINE_MS);
    setCache(CACHE_KEY, result);
    return result;
  } catch (error) {
    console.error("Regional Specials fetch failed:", error.message);
    const cached = getCached(CACHE_KEY, { fallback: true });
    if (cached) return cached;
    return defaultResult;
  }
}
