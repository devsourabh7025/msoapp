"use client";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Play, X } from "lucide-react";

const defaultSubsections = [
  { id: "mso-podcast", name: "The MSO Podcast", slug: "mso-podcast", enabled: true, videos: [] },
  { id: "mso-tv-video", name: "MSO TV / Video", slug: "mso-tv-video", enabled: true, videos: [] },
  { id: "digital-magazine", name: "Digital Magazine", slug: "digital-magazine", enabled: true, videos: [] },
  { id: "docu-series", name: "Docu-Series", slug: "docu-series", enabled: true, videos: [] },
  { id: "live-sessions", name: "Live Sessions", slug: "live-sessions", enabled: true, videos: [] },
];

function VideoCard({ video, embedUrl }) {
  const [showModal, setShowModal] = useState(false);
  const title = video?.title || `Video ${video?.videoId || ""}`;
  const thumbUrl = `https://img.youtube.com/vi/${video?.videoId}/hqdefault.jpg`;

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="group block w-full text-left rounded overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-colors"
      >
        <div className="relative aspect-video">
          <img
            src={thumbUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
            </div>
          </div>
        </div>
        <div className="p-2">
          <h4 className="text-xs font-semibold text-gray-900 dark:text-white line-clamp-2">{title}</h4>
        </div>
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>
            <iframe
              src={embedUrl}
              title={title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function MSOStudio({ initialContent, initialSettings }) {
  const [content, setContent] = useState(initialContent ?? null);
  const [settings, setSettings] = useState(initialSettings ?? null);
  const [loading, setLoading] = useState(!initialContent && !initialSettings);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const response = await axios.get("/api/settings/mso-studio");
        if (!isMounted) return;
        if (response.data?.content) setContent(response.data.content);
        else setContent({ subsections: defaultSubsections });
        if (response.data?.settings) setSettings(response.data.settings);
        else setSettings({ title: "MSO Studio", subtitle: "Interactive, visual, and audio storytelling" });
      } catch (error) {
        if (isMounted) {
          setContent({ subsections: defaultSubsections });
          setSettings({ title: "MSO Studio", subtitle: "Interactive, visual, and audio storytelling" });
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();
    return () => { isMounted = false; };
  }, []);

  const subsections = useMemo(() => {
    const raw = content?.subsections;
    if (!Array.isArray(raw) || raw.length === 0) return defaultSubsections;
    return raw.filter((s) => s.enabled !== false);
  }, [content]);

  const subsectionsWithVideos = subsections.filter((s) => Array.isArray(s.videos) && s.videos.length > 0);
  const sectionTitle = settings?.title || "MSO Studio";
  const sectionSubtitle = settings?.subtitle || "Interactive, visual, and audio storytelling";

  if (loading) {
    return (
      <section className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-white/10">
        <div className="home-container py-5">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-800 w-28 mb-1.5" />
            <div className="h-3 bg-gray-200 dark:bg-gray-800 w-56 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-video bg-gray-200 dark:bg-gray-800 rounded" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (subsectionsWithVideos.length === 0) {
    return (
      <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/5">
        <div className="home-container pt-4 pb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-6 h-[2px] bg-red-600" />
            <h2 className="home-section-heading text-gray-900 dark:text-white text-lg">{sectionTitle}</h2>
            <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{sectionSubtitle}</p>
          <div className="border border-dashed border-gray-300 dark:border-white/10 rounded p-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">No videos yet</p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
              Add YouTube video links in Admin → Customise → MSO Studio
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/5">
      <div className="home-container pt-4 pb-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="inline-block w-6 h-[2px] bg-red-600" />
            <h2 className="home-section-heading text-gray-900 dark:text-white text-lg">
              {sectionTitle}
            </h2>
            <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 pl-8">
            {sectionSubtitle}
          </p>
        </div>

        <div className="space-y-5">
          {subsectionsWithVideos.map((sub) => {
            const videos = Array.isArray(sub.videos) ? sub.videos : [];
            const slug = sub.slug || sub.id?.replace(/_/g, "-") || "";

            return (
              <div key={sub.id}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">{sub.name}</h3>
                  {slug && (
                    <a
                      href={`https://www.youtube.com/results?search_query=${encodeURIComponent(sub.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-red-600 dark:text-red-400 hover:underline"
                    >
                      View more
                    </a>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {videos
                    .filter((v) => v && v.videoId)
                    .map((video, idx) => (
                      <VideoCard
                        key={video.videoId}
                        video={video}
                        embedUrl={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                      />
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
