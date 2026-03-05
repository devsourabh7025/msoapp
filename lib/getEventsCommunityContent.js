import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import { getCached, setCache, withTimeout } from "@/lib/sectionCache";

const CACHE_KEY = "eventsCommunity";
const FETCH_DEADLINE_MS = 12000;

const defaultSubsections = [
  { id: "mso-summits", name: "MSO Summits", slug: "mso-summits", description: "Flagship physical networking and award ceremonies.", enabled: true, posts: [] },
  { id: "webinars", name: "Webinars", slug: "webinars", description: "Virtual learning sessions on scaling and fundraising.", enabled: true, posts: [] },
  { id: "networking-meetups", name: "Networking Meetups", slug: "networking-meetups", description: "Curated founder-only dinners and mixers.", enabled: true, posts: [] },
  { id: "global-roadshows", name: "Global Roadshows", slug: "global-roadshows", description: "Tracking Maharashtra startups at international stages.", enabled: true, posts: [] },
  { id: "founder-forum", name: "The Founder Forum", slug: "founder-forum", description: "A gated community for MSO members to discuss challenges.", enabled: true, posts: [] },
];

const POSTS_LIMIT_FIRST = 5;
const POSTS_LIMIT_SIDEBAR = 3;

const defaultResult = {
  content: { subsections: defaultSubsections },
  settings: { title: "Events & Community", subtitle: "Turning readers into a networked community." },
};

function normalizePost(post) {
  if (!post || typeof post !== "object") return null;
  if (!post._id) return null;
  return {
    _id: post._id,
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

async function fetchFromDb() {
  await ensureConnected();

  const [contentData, settingsData] = await Promise.all([
    Settings.findOne({ key: "homepageEventsCommunityContent" }).maxTimeMS(8000).lean(),
    Settings.findOne({ key: "homepageEventsCommunitySettings" }).maxTimeMS(8000).lean(),
  ]);

  const v = contentData?.value;
  const s = settingsData?.value;
  return {
    content: { subsections: normalizeSubsections(v?.subsections) },
    settings: {
      title: s?.title || "Events & Community",
      subtitle: s?.subtitle || "Turning readers into a networked community.",
    },
  };
}

export async function getEventsCommunityContent() {
  try {
    const result = await withTimeout(fetchFromDb(), FETCH_DEADLINE_MS);
    setCache(CACHE_KEY, result);
    return result;
  } catch (error) {
    console.error("Events & Community fetch failed:", error.message);
    const cached = getCached(CACHE_KEY, { fallback: true });
    if (cached) return cached;
    return defaultResult;
  }
}
