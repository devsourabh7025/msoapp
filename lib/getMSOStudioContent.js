import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import { getCached, setCache, withTimeout } from "@/lib/sectionCache";

const CACHE_KEY = "msoStudio";
const VIDEOS_LIMIT = 3;
const FETCH_DEADLINE_MS = 12000;

function getYoutubeVideoId(url) {
  if (!url || typeof url !== "string") return null;
  const trimmed = url.trim();
  const watchMatch = trimmed.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return watchMatch[1];
  const shortMatch = trimmed.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];
  const embedMatch = trimmed.match(/(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];
  return null;
}

function normalizeVideo(video) {
  if (!video || typeof video !== "object") return null;
  const url = typeof video.url === "string" ? video.url.trim() : "";
  let videoId = getYoutubeVideoId(url);
  if (!videoId && typeof video.videoId === "string" && /^[a-zA-Z0-9_-]{11}$/.test(video.videoId.trim())) {
    videoId = video.videoId.trim();
  }
  if (!videoId) return null;
  return {
    url: `https://www.youtube.com/watch?v=${videoId}`,
    videoId,
    title: (video.title || "").slice(0, 150) || `Video ${videoId}`,
  };
}

const defaultSubsections = [
  { id: "mso-podcast", name: "The MSO Podcast", slug: "mso-podcast", enabled: true, videos: [] },
  { id: "mso-tv-video", name: "MSO TV / Video", slug: "mso-tv-video", enabled: true, videos: [] },
  { id: "digital-magazine", name: "Digital Magazine", slug: "digital-magazine", enabled: true, videos: [] },
  { id: "docu-series", name: "Docu-Series", slug: "docu-series", enabled: true, videos: [] },
  { id: "live-sessions", name: "Live Sessions", slug: "live-sessions", enabled: true, videos: [] },
];

const defaultResult = {
  content: { subsections: defaultSubsections },
  settings: { title: "MSO Studio", subtitle: "Interactive, visual, and audio storytelling" },
};

function normalizeSubsections(subsections) {
  if (!Array.isArray(subsections) || subsections.length === 0) return defaultSubsections;
  const ids = defaultSubsections.map((s) => s.id);
  return ids.map((id) => {
    const existing = subsections.find((s) => s.id === id) || defaultSubsections.find((s) => s.id === id);
    const rawVideos = Array.isArray(existing?.videos) ? existing.videos : [];
    const videos = rawVideos.slice(0, VIDEOS_LIMIT).map(normalizeVideo).filter(Boolean);
    return {
      id: existing?.id || id,
      name: existing?.name || defaultSubsections.find((s) => s.id === id)?.name || id,
      slug: existing?.slug || id.replace(/_/g, "-"),
      enabled: existing?.enabled !== false,
      videos,
    };
  });
}

async function fetchFromDb() {
  await ensureConnected();

  const [contentData, settingsData] = await Promise.all([
    Settings.findOne({ key: "homepageMSOStudioContent" }).maxTimeMS(8000).lean(),
    Settings.findOne({ key: "homepageMSOStudioSettings" }).maxTimeMS(8000).lean(),
  ]);

  const v = contentData?.value;
  const s = settingsData?.value;
  return {
    content: { subsections: normalizeSubsections(v?.subsections) },
    settings: {
      title: s?.title || "MSO Studio",
      subtitle: s?.subtitle || "Interactive, visual, and audio storytelling",
    },
  };
}

export async function getMSOStudioContent() {
  try {
    const result = await withTimeout(fetchFromDb(), FETCH_DEADLINE_MS);
    setCache(CACHE_KEY, result);
    return result;
  } catch (error) {
    console.error("MSO Studio fetch failed:", error.message);
    const cached = getCached(CACHE_KEY, { fallback: true });
    if (cached) return cached;
    return defaultResult;
  }
}
