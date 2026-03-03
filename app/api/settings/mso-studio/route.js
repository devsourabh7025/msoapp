import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import jwt from "jsonwebtoken";
import User from "@/models/User";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

const VIDEOS_LIMIT = 3;

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
    url: "https://www.youtube.com/watch?v=" + videoId,
    videoId,
    title: (video.title || "").slice(0, 150) || "Video " + videoId,
  };
}

const defaultSubsections = [
  { id: "mso-podcast", name: "The MSO Podcast", slug: "mso-podcast", enabled: true, videos: [] },
  { id: "mso-tv-video", name: "MSO TV / Video", slug: "mso-tv-video", enabled: true, videos: [] },
  { id: "digital-magazine", name: "Digital Magazine", slug: "digital-magazine", enabled: true, videos: [] },
  { id: "docu-series", name: "Docu-Series", slug: "docu-series", enabled: true, videos: [] },
  { id: "live-sessions", name: "Live Sessions", slug: "live-sessions", enabled: true, videos: [] },
];

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

export async function GET() {
  try {
    await ensureConnected();
    const [contentData, settingsData] = await Promise.all([
      Settings.findOne({ key: "homepageMSOStudioContent" }).maxTimeMS(5000).lean(),
      Settings.findOne({ key: "homepageMSOStudioSettings" }).maxTimeMS(5000).lean(),
    ]);
    const v = contentData?.value;
    const subsections = normalizeSubsections(v?.subsections);
    const s = settingsData?.value;
    const settings = {
      title: s?.title || "MSO Studio",
      subtitle: s?.subtitle || "Interactive, visual, and audio storytelling",
    };
    return NextResponse.json({ content: { subsections }, settings });
  } catch (error) {
    console.error("Error fetching MSO Studio:", error);
    return NextResponse.json(
      { content: { subsections: defaultSubsections }, settings: { title: "MSO Studio", subtitle: "Interactive, visual, and audio storytelling" } },
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
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    if (content !== undefined && content !== null && Array.isArray(content.subsections)) {
      const optimizedContent = {
        subsections: content.subsections.map((sub) => {
          const rawVideos = Array.isArray(sub.videos) ? sub.videos : [];
          const videos = rawVideos.slice(0, VIDEOS_LIMIT).map(normalizeVideo).filter(Boolean);
          return {
            id: sub.id,
            name: sub.name,
            slug: sub.slug,
            enabled: sub.enabled !== false,
            videos,
          };
        }),
      };
      await Settings.findOneAndUpdate(
        { key: "homepageMSOStudioContent" },
        { value: optimizedContent },
        { upsert: true, new: true }
      ).maxTimeMS(15000);
      revalidatePath("/");
    }
    if (settings !== undefined && settings !== null) {
      await Settings.findOneAndUpdate(
        { key: "homepageMSOStudioSettings" },
        { value: { title: settings.title || "MSO Studio", subtitle: settings.subtitle || "Interactive, visual, and audio storytelling" } },
        { upsert: true, new: true }
      ).maxTimeMS(15000);
    }
    return NextResponse.json({ message: "MSO Studio section saved successfully" });
  } catch (error) {
    console.error("Error saving MSO Studio:", error);
    return NextResponse.json(
      { error: "Failed to save MSO Studio settings", message: error.message },
      { status: 500 }
    );
  }
}
