import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import { getCached, setCache, withTimeout } from "@/lib/sectionCache";

const CACHE_KEY = "toolsDatabase";
const FETCH_DEADLINE_MS = 12000;

const defaultSubsections = [
  { id: "browse-startups", name: "Browse Startups", description: "A searchable directory of registered Maharashtra startups.", enabled: true, url: "" },
  { id: "funding-calculator", name: "Funding Calculator", description: "Tools for valuation estimates and runway tracking.", enabled: true, url: "" },
  { id: "global-corporate-db", name: "Global Corporate Database", description: "Searchable data for networking and intelligence.", enabled: true, url: "" },
  { id: "pitch-deck-gallery", name: "Pitch Deck Gallery", description: "A collection of successful decks for founder learning.", enabled: true, url: "" },
  { id: "talent-portal", name: "Talent Portal", description: "A niche job board for startup-specific roles in the region.", enabled: true, url: "" },
];

const defaultResult = {
  content: { subsections: defaultSubsections },
  settings: { title: "Tools & Database", subtitle: "Becoming an Essential Hub for founders." },
};

function normalizeSubsections(subsections) {
  if (!Array.isArray(subsections) || subsections.length === 0) return defaultSubsections;
  const ids = defaultSubsections.map((s) => s.id);
  return ids.map((id) => {
    const existing = subsections.find((s) => s.id === id) || defaultSubsections.find((s) => s.id === id);
    return {
      id: existing?.id || id,
      name: (existing?.name || defaultSubsections.find((s) => s.id === id)?.name || id).slice(0, 120),
      description: (existing?.description || defaultSubsections.find((s) => s.id === id)?.description || "").slice(0, 500),
      url: (existing?.url || "").slice(0, 500),
      enabled: existing?.enabled !== false,
    };
  });
}

async function fetchFromDb() {
  await ensureConnected();

  const [contentData, settingsData] = await Promise.all([
    Settings.findOne({ key: "homepageToolsDatabaseContent" }).maxTimeMS(8000).lean(),
    Settings.findOne({ key: "homepageToolsDatabaseSettings" }).maxTimeMS(8000).lean(),
  ]);

  const v = contentData?.value;
  const s = settingsData?.value;
  return {
    content: { subsections: normalizeSubsections(v?.subsections) },
    settings: {
      title: s?.title || "Tools & Database",
      subtitle: s?.subtitle || "Becoming an Essential Hub for founders.",
    },
  };
}

export async function getToolsDatabaseContent() {
  try {
    const result = await withTimeout(fetchFromDb(), FETCH_DEADLINE_MS);
    setCache(CACHE_KEY, result);
    return result;
  } catch (error) {
    console.error("Tools & Database fetch failed:", error.message);
    const cached = getCached(CACHE_KEY, { fallback: true });
    if (cached) return cached;
    return defaultResult;
  }
}
