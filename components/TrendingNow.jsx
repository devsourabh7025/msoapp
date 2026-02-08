"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Clock, ArrowRight } from "lucide-react";
import axios from "axios";

export default function TrendingNow() {
  const [trendingContent, setTrendingContent] = useState(null);
  const [trendingSettings, setTrendingSettings] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;

    const loadTrendingContent = async () => {
      try {
        // Fetch from dedicated trending API endpoint
        const response = await axios.get("/api/settings/trending", {
          cache: "no-store", // Always fetch fresh data
        });
        if (!isMounted) return;

        // Get trending posts from dedicated endpoint
        const trendingData = response.data?.trending;
        if (trendingData && Array.isArray(trendingData)) {
          setTrendingContent(trendingData);
        } else {
          setTrendingContent([]);
        }

        // Get trending settings
        if (response.data?.settings) {
          setTrendingSettings(response.data.settings);
        }
      } catch (error) {
        console.error("Error loading trending content from API:", error);
        if (isMounted) {
          setTrendingContent([]);
        }
      }
    };

    loadTrendingContent();

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

  const formatTimeAgo = (date) => {
    if (!date) return "Recently";
    const now = new Date();
    const postDate = new Date(date);
    const diffInSeconds = Math.floor((now - postDate) / 1000);
    
    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    return postDate.toLocaleDateString();
  };

  // Normalize and prepare trending articles
  const trendingArticles = useMemo(() => {
    if (!trendingContent || !Array.isArray(trendingContent) || trendingContent.length === 0) {
      return [];
    }

    return trendingContent.map((post) => ({
      ...post,
      slug: post.slug || (post._id ? `post-${post._id}` : `post-${post.id}`),
      featuredImage: post.featuredImage || "/demo.png",
      author: post.author || { name: "Editorial Team" },
      excerpt: post.excerpt || "",
      category: post.category || "Uncategorized",
      publishedAt: post.publishedAt || post.createdAt || new Date().toISOString(),
    }));
  }, [trendingContent]);

  // Don't render if section is hidden
  if (trendingSettings?.showSection === false) {
    return null;
  }

  // UI pattern: horizontal scroll strip (marquee-style)
  return (
    <section className="relative bg-gray-100 dark:bg-gray-900/80 py-12 border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500 text-white">
            <TrendingUp size={20} />
          </span>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {trendingSettings?.title || "Trending now"}
            </h2>
            {trendingSettings?.subtitle && (
              <p className="text-sm text-gray-500 dark:text-gray-400">{trendingSettings.subtitle}</p>
            )}
          </div>
        </div>
      </div>

      {trendingArticles.length > 0 ? (
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex gap-4 pb-2 min-w-max" style={{ scrollSnapType: "x mandatory" }}>
            {trendingArticles.map((article, index) => (
              <Link
                key={article._id || article.id || index}
                href={`/post?slug=${article.slug}`}
                className="group shrink-0 w-[280px] sm:w-[320px] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-orange-300 dark:hover:border-orange-500/50 transition-all duration-300"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-gray-700">
                  {article.featuredImage ? (
                    <Image
                      src={article.featuredImage}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="320px"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 dark:from-orange-600 dark:to-orange-700" />
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold shadow">
                      {index + 1}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <span className="text-xs text-white/90 uppercase tracking-wide">{article.category}</span>
                    <h3 className="text-base font-bold text-white line-clamp-2 mt-0.5 group-hover:text-orange-200 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Clock size={12} />
                    <span>{formatTimeAgo(article.publishedAt)}</span>
                  </div>
                  <ArrowRight size={16} className="text-orange-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center rounded-2xl bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">No trending posts selected</p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Choose posts in the admin panel</p>
        </div>
      )}
    </section>
  );
}
