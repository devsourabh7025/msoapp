"use client";

import { useState, useEffect } from "react";
import { Save, Plus, X } from "lucide-react";
import axios from "axios";

const defaultSubsections = [
  { id: "mso-podcast", name: "The MSO Podcast", slug: "mso-podcast", enabled: true, videos: [] },
  { id: "mso-tv-video", name: "MSO TV / Video", slug: "mso-tv-video", enabled: true, videos: [] },
  { id: "digital-magazine", name: "Digital Magazine", slug: "digital-magazine", enabled: true, videos: [] },
  { id: "docu-series", name: "Docu-Series", slug: "docu-series", enabled: true, videos: [] },
  { id: "live-sessions", name: "Live Sessions", slug: "live-sessions", enabled: true, videos: [] },
];

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

export default function MSOStudioCustomise() {
  const [content, setContent] = useState({ subsections: defaultSubsections });
  const [settings, setSettings] = useState({
    title: "MSO Studio",
    subtitle: "Interactive, visual, and audio storytelling",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newVideoUrls, setNewVideoUrls] = useState({});
  const [newVideoTitles, setNewVideoTitles] = useState({});

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/settings/mso-studio");
        const data = res.data;
        if (data?.content?.subsections?.length > 0) {
          setContent({ subsections: data.content.subsections });
        }
        if (data?.settings) {
          setSettings((prev) => ({
            ...prev,
            title: data.settings.title || "MSO Studio",
            subtitle: data.settings.subtitle || "Interactive, visual, and audio storytelling",
          }));
        }
      } catch (error) {
        console.error("Error loading MSO Studio:", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const addVideoToSubsection = (subIndex, url, title) => {
    const displayTitle = (title ?? newVideoTitles[subIndex] ?? "").trim();
    const videoId = getYoutubeVideoId(url);
    if (!videoId) {
      alert("Please enter a valid YouTube URL (e.g. https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID)");
      return;
    }
    setContent((prev) => {
      const next = [...prev.subsections];
      const sub = next[subIndex];
      const videos = Array.isArray(sub.videos) ? sub.videos : [];
      if (videos.length >= VIDEOS_LIMIT) {
        alert(`Maximum ${VIDEOS_LIMIT} videos per subsection`);
        return prev;
      }
      if (videos.some((v) => v.videoId === videoId)) {
        alert("This video is already added");
        return prev;
      }
      next[subIndex] = {
        ...sub,
        videos: [...videos, { url: url.trim(), videoId, title: displayTitle || `Video ${videoId}` }],
      };
      return { subsections: next };
    });
    setNewVideoUrls((p) => ({ ...p, [subIndex]: "" }));
    setNewVideoTitles((p) => ({ ...p, [subIndex]: "" }));
  };

  const removeVideoFromSubsection = (subIndex, videoId) => {
    setContent((prev) => {
      const next = [...prev.subsections];
      next[subIndex] = {
        ...next[subIndex],
        videos: (next[subIndex].videos || []).filter((v) => v.videoId !== videoId),
      };
      return { subsections: next };
    });
  };

  const moveVideoInSubsection = (subIndex, fromIdx, toIdx) => {
    setContent((prev) => {
      const next = [...prev.subsections];
      const videos = [...(next[subIndex].videos || [])];
      if (toIdx < 0 || toIdx >= videos.length) return prev;
      [videos[fromIdx], videos[toIdx]] = [videos[toIdx], videos[fromIdx]];
      next[subIndex] = { ...next[subIndex], videos };
      return { subsections: next };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await axios.put("/api/settings/mso-studio", { content, settings }, { headers: { "Content-Type": "application/json" }, withCredentials: true });
      alert("MSO Studio section saved successfully!");
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || error.message || "Failed to save"}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-sm text-gray-500">Loading MSO Studio settings...</div>
      </div>
    );
  }

  const subsections = content.subsections || defaultSubsections;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">MSO Studio</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Add YouTube video links. Max {VIDEOS_LIMIT} videos per subsection. Supports youtube.com/watch?v=, youtu.be/, youtube.com/embed/
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">Section Title</label>
              <input
                type="text"
                value={settings.title}
                onChange={(e) => setSettings((p) => ({ ...p, title: e.target.value }))}
                placeholder="MSO Studio"
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">Subtitle</label>
              <input
                type="text"
                value={settings.subtitle}
                onChange={(e) => setSettings((p) => ({ ...p, subtitle: e.target.value }))}
                placeholder="Interactive, visual, and audio storytelling"
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Subsections & Videos</h3>
              {subsections.map((sub, subIndex) => (
                <div key={sub.id} className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                    {subIndex + 1}. {sub.name}
                    <span className="ml-2 text-[10px] font-normal text-gray-500 dark:text-gray-400">(max {VIDEOS_LIMIT} videos)</span>
                  </h4>

                  {(sub.videos || []).length > 0 && (
                    <div className="space-y-2 mb-4">
                      {sub.videos.map((video, idx) => (
                        <div key={video.videoId} className="flex items-center justify-between gap-3 bg-white dark:bg-gray-800 p-2.5 rounded border">
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <img
                              src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                              alt=""
                              className="w-16 h-9 object-cover rounded shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">{video.title}</div>
                              <div className="text-[11px] text-gray-500 dark:text-gray-400 truncate">{video.url}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              type="button"
                              onClick={() => moveVideoInSubsection(subIndex, idx, idx - 1)}
                              disabled={idx === 0}
                              className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-40"
                            >
                              ↑
                            </button>
                            <button
                              type="button"
                              onClick={() => moveVideoInSubsection(subIndex, idx, idx + 1)}
                              disabled={idx === sub.videos.length - 1}
                              className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-40"
                            >
                              ↓
                            </button>
                            <button
                              type="button"
                              onClick={() => removeVideoFromSubsection(subIndex, video.videoId)}
                              className="p-1 text-gray-500 hover:text-red-600"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {(sub.videos || []).length < VIDEOS_LIMIT && (
                    <div className="flex gap-2">
                      <input
                        type="url"
                        value={newVideoUrls[subIndex] || ""}
                        onChange={(e) => setNewVideoUrls((p) => ({ ...p, [subIndex]: e.target.value }))}
                        placeholder="Paste YouTube URL (e.g. https://youtu.be/VIDEO_ID)"
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                      <input
                        type="text"
                        placeholder="Title (optional)"
                        value={newVideoTitles[subIndex] || ""}
                        onChange={(e) => setNewVideoTitles((p) => ({ ...p, [subIndex]: e.target.value }))}
                        className="w-40 px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addVideoToSubsection(subIndex, newVideoUrls[subIndex] || "", newVideoTitles[subIndex] || "");
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => addVideoToSubsection(subIndex, newVideoUrls[subIndex] || "", newVideoTitles[subIndex] || "")}
                        className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium bg-red-600 hover:bg-red-700 text-white rounded"
                      >
                        <Plus size={14} />
                        Add Video
                      </button>
                    </div>
                  )}

                  {(sub.videos || []).length === 0 && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Paste a YouTube URL above and click Add Video</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white text-sm font-bold rounded"
              >
                <Save size={16} />
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
