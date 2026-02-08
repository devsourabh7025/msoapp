"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { User, ArrowRight } from "lucide-react";
import axios from "axios";

export default function Featured() {
  const [featuredContent, setFeaturedContent] = useState(null);
  const [featuredSettings, setFeaturedSettings] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;

    const loadFeaturedContent = async () => {
      try {
        // Fetch from dedicated featured API endpoint
        const response = await axios.get("/api/settings/featured", {
          cache: "no-store", // Always fetch fresh data
        });
        if (!isMounted) return;

        // Get featured posts from dedicated endpoint
        const featuredData = response.data?.featured;
        if (featuredData) {
          setFeaturedContent(featuredData);
        } else {
          setFeaturedContent({ smbStories: [], herStories: [], socialStories: [] });
        }

        // Get featured settings
        if (response.data?.settings) {
          setFeaturedSettings(response.data.settings);
        }
      } catch (error) {
        console.error("Error loading featured content from API:", error);
        if (isMounted) {
          setFeaturedContent({ smbStories: [], herStories: [], socialStories: [] });
        }
      }
    };

    loadFeaturedContent();

    return () => {
      isMounted = false;
    };
  }, [pathname]); // Refetch when pathname changes (navigation)

  const getAuthorName = (author) => {
    if (!author) return "Editorial Team";
    if (typeof author === "object" && author?.name) {
      return author.name;
    }
    return author;
  };

  // Load posts from separate subsections
  const { smbStories, herStories, socialStories } = useMemo(() => {
    // Handle both old format (array) and new format (object with subsections)
    let smb = [];
    let her = [];
    let social = [];

    if (featuredContent) {
      if (Array.isArray(featuredContent)) {
        // Old format: single array - distribute automatically for backward compatibility
        const normalizedPosts = featuredContent.map((post) => ({
          ...post,
          slug: post.slug || (post._id ? `post-${post._id}` : `post-${post.id}`),
          featuredImage: post.featuredImage || "/demo.png",
          author: post.author || { name: "Editorial Team" },
          excerpt: post.excerpt || "",
        }));
        smb = normalizedPosts.slice(0, 3);
        her = normalizedPosts.slice(3, 8);
        social = normalizedPosts.slice(8);
      } else if (typeof featuredContent === 'object') {
        // New format: object with subsections
        const normalizePost = (post) => ({
          ...post,
          slug: post.slug || (post._id ? `post-${post._id}` : `post-${post.id}`),
          featuredImage: post.featuredImage || "/demo.png",
          author: post.author || { name: "Editorial Team" },
          excerpt: post.excerpt || "",
        });

        smb = (featuredContent.smbStories || []).map(normalizePost);
        her = (featuredContent.herStories || []).map(normalizePost);
        social = (featuredContent.socialStories || []).map(normalizePost);
      }
    }

    return {
      smbStories: smb,
      herStories: her,
      socialStories: social,
    };
  }, [featuredContent]);

  // Don't render if section is hidden
  if (featuredSettings?.showSection === false) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-gray-50/80 dark:bg-gray-950/50 py-14 sm:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.03] via-transparent to-orange-500/[0.04] dark:from-amber-400/[0.04] dark:to-orange-400/[0.05] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header — 2026 style */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {featuredSettings?.title || "Featured"}
          </h2>
          <div className="mt-3 h-px w-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Column 1: SMB — Dark block UI pattern */}
          {featuredSettings?.showSMBStory !== false && (
            <div className="rounded-2xl overflow-hidden bg-gray-900 dark:bg-gray-950 border border-gray-700 dark:border-gray-800 shadow-xl">
              <div className="px-5 py-4 border-b border-gray-700 dark:border-gray-800">
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">SMB Story</h3>
              </div>
              <div className="p-4 space-y-3">
                {smbStories.length > 0 ? (
                  <>
                    <Link href={`/post?slug=${smbStories[0].slug}`} className="group block p-4 rounded-xl bg-gray-800/80 dark:bg-gray-800/50 border border-gray-700/50 hover:border-amber-500/40 transition-colors">
                      <h4 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-amber-300 transition-colors">
                        {smbStories[0].title}
                      </h4>
                      {smbStories[0].excerpt && (
                        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{smbStories[0].excerpt}</p>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{getAuthorName(smbStories[0].author)}</span>
                        <ArrowRight size={14} className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Link>
                    {smbStories.slice(1).map((story, index) => (
                      <Link
                        key={story._id || story.id || index}
                        href={`/post?slug=${story.slug}`}
                        className="group flex items-center gap-3 py-3 border-t border-gray-700/50 first:border-t-0"
                      >
                        <h4 className="text-sm font-medium text-gray-200 flex-1 min-w-0 line-clamp-1 group-hover:text-amber-300 transition-colors">
                          {story.title}
                        </h4>
                        <ArrowRight size={12} className="text-gray-500 group-hover:text-amber-400 shrink-0 transition-colors" />
                      </Link>
                    ))}
                  </>
                ) : (
                  <p className="text-sm text-gray-500 py-6 text-center">No SMB stories</p>
                )}
              </div>
            </div>
          )}

          {/* Column 2: Her Story — Soft card / avatar list UI pattern */}
          {featuredSettings?.showHerStory !== false && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/15 dark:bg-rose-400/15 text-rose-800 dark:text-rose-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 dark:bg-rose-400" />
                  Her Story
                </span>
              </div>
              {herStories.length > 0 ? (
                <div className="space-y-3">
                  {herStories.map((story, index) => (
                    <Link
                      key={story._id || story.id || index}
                      href={`/post?slug=${story.slug}`}
                      className="group flex gap-4 p-4 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700/50 shadow-sm hover:shadow-md hover:border-rose-300 dark:hover:border-rose-500/30 transition-all duration-300"
                    >
                      <div className="shrink-0 w-14 h-14 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                        {story.featuredImage ? (
                          <Image
                            src={story.featuredImage}
                            alt={story.title}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-rose-300 to-pink-400 dark:from-rose-600/50 dark:to-pink-600/50" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                          {story.title}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-500 dark:text-gray-400">
                          <User size={12} className="shrink-0 text-rose-500" />
                          <span className="truncate">{getAuthorName(story.author)}</span>
                        </div>
                      </div>
                      <ArrowRight size={14} className="shrink-0 text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity self-center" />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl bg-white/60 dark:bg-gray-900/60 border border-gray-200/60 dark:border-white/10 p-6 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">No Her stories</p>
                </div>
              )}
            </div>
          )}

          {/* Column 3: Social Story — Ranked list / leaderboard UI pattern */}
          {featuredSettings?.showSocialStory !== false && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 dark:bg-emerald-400/15 text-emerald-800 dark:text-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  Social Story
                </span>
              </div>
              {socialStories.length > 0 ? (
                <ul className="space-y-0 divide-y divide-gray-200 dark:divide-gray-700/50 rounded-2xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-900/50 overflow-hidden">
                  {socialStories.map((story, index) => (
                    <li key={story._id || story.id || index}>
                      <Link
                        href={`/post?slug=${story.slug}`}
                        className="group flex items-center gap-4 p-4 hover:bg-emerald-50/80 dark:hover:bg-emerald-500/10 transition-colors"
                      >
                        <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                          {index + 1}
                        </span>
                        {index === 0 && story.featuredImage ? (
                          <div className="shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                            <Image
                              src={story.featuredImage}
                              alt=""
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : null}
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex-1 min-w-0 line-clamp-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          {story.title}
                        </h4>
                        <ArrowRight size={14} className="shrink-0 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-2xl bg-white/60 dark:bg-gray-900/60 border border-gray-200/60 dark:border-white/10 p-6 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">No Social stories</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
