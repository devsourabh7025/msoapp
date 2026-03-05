import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import { getCached, setCache, withTimeout } from "@/lib/sectionCache";

const CACHE_KEY = "knowledgeLab";
const FETCH_DEADLINE_MS = 12000;

const POSTS_LIMIT_FIRST = 5;
const POSTS_LIMIT_OTHERS = 3;

const defaultSubsections = [
  { id: "growth-playbooks", name: "Growth Playbooks", description: "Step-by-step guides on hiring, marketing, and legal.", enabled: true, posts: [] },
  { id: "investor-relations", name: "Investor Relations", description: "How to find and talk to VCs and Angel investors.", enabled: true, posts: [] },
  { id: "market-reports", name: "Market Reports", description: "Quarterly PDF downloads on regional industry trends.", enabled: true, posts: [] },
  { id: "tech-tutorials", name: "Tech Tutorials", description: "How to implement The AI Index trends into your business.", enabled: true, posts: [] },
  { id: "expert-columns", name: "Expert Columns", description: "Guest articles from industry veterans and researchers.", enabled: true, posts: [] },
];

const defaultResult = {
  content: { subsections: defaultSubsections },
  settings: { title: "The Knowledge Lab", subtitle: "Long-form educational content and playbooks." },
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

async function fetchFromDb() {
  await ensureConnected();

  const [contentData, settingsData] = await Promise.all([
    Settings.findOne({ key: "homepageKnowledgeLabContent" }).maxTimeMS(8000).lean(),
    Settings.findOne({ key: "homepageKnowledgeLabSettings" }).maxTimeMS(8000).lean(),
  ]);

  const v = contentData?.value;
  const s = settingsData?.value;
  return {
    content: { subsections: normalizeSubsections(v?.subsections) },
    settings: {
      title: s?.title || "The Knowledge Lab",
      subtitle: s?.subtitle || "Long-form educational content and playbooks.",
    },
  };
}

export async function getKnowledgeLabContent() {
  try {
    const result = await withTimeout(fetchFromDb(), FETCH_DEADLINE_MS);
    setCache(CACHE_KEY, result);
    return result;
  } catch (error) {
    console.error("Knowledge Lab fetch failed:", error.message);
    const cached = getCached(CACHE_KEY, { fallback: true });
    if (cached) return cached;
    return defaultResult;
  }
}
