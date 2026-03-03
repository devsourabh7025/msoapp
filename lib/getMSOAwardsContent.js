import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import { getCached, setCache, withTimeout } from "@/lib/sectionCache";

const CACHE_KEY = "msoAwards";
const FETCH_DEADLINE_MS = 12000;

const defaultSubsections = [
  { id: "mso-maharashtra-50", name: "MSO Maharashtra 50", description: "The annual definitive list of the state's top startups.", enabled: true, posts: [] },
  { id: "solapur-icons", name: "Solapur Icons", description: "Recognizing industrial and digital leaders in Solapur.", enabled: true, posts: [] },
  { id: "impact-honors", name: "Impact Honors", description: "Celebrating founders driving major Social/ESG changes.", enabled: true, posts: [] },
  { id: "emerging-leader", name: "Emerging Leader", description: "Highlighting student founders and young entrepreneurs.", enabled: true, posts: [] },
  { id: "hall-of-fame", name: "The Hall of Fame", description: "A permanent archive of legendary Maharashtra business icons.", enabled: true, posts: [] },
];

const defaultResult = {
  content: { subsections: defaultSubsections },
  settings: { title: "MSO Awards", subtitle: "Building prestige and community authority." },
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
  return ids.map((id) => {
    const existing = subsections.find((s) => s.id === id) || defaultSubsections.find((s) => s.id === id);
    const rawPosts = Array.isArray(existing?.posts) ? existing.posts : [];
    const posts = rawPosts.slice(0, 1).map(normalizePost).filter(Boolean);
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
    Settings.findOne({ key: "homepageMSOAwardsContent" }).maxTimeMS(8000).lean(),
    Settings.findOne({ key: "homepageMSOAwardsSettings" }).maxTimeMS(8000).lean(),
  ]);

  const v = contentData?.value;
  const s = settingsData?.value;
  return {
    content: { subsections: normalizeSubsections(v?.subsections) },
    settings: {
      title: s?.title || "MSO Awards",
      subtitle: s?.subtitle || "Building prestige and community authority.",
    },
  };
}

export async function getMSOAwardsContent() {
  try {
    const result = await withTimeout(fetchFromDb(), FETCH_DEADLINE_MS);
    setCache(CACHE_KEY, result);
    return result;
  } catch (error) {
    console.error("MSO Awards fetch failed:", error.message);
    const cached = getCached(CACHE_KEY, { fallback: true });
    if (cached) return cached;
    return defaultResult;
  }
}
