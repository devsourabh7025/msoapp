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

  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-b border-gray-200 dark:border-slate-700 py-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/20 dark:bg-orange-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="relative">
              <TrendingUp className="w-10 h-10 text-orange-500 dark:text-orange-400" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                {trendingSettings?.title || "Trending"}
                {!trendingSettings?.title && (
                  <span className="text-orange-500 dark:text-orange-400 ml-2">Now</span>
                )}
              </h2>
              {trendingSettings?.subtitle && (
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-1">
                  {trendingSettings.subtitle}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Trending Articles Grid - 2 columns on desktop, 1 on mobile */}
        {trendingArticles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Main Featured Article */}
              {trendingArticles[0] && (
                <Link
                  href={`/post?slug=${trendingArticles[0].slug}`}
                  className="group lg:col-span-1 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-slate-700">
                    {trendingArticles[0].featuredImage ? (
                      <Image
                        src={trendingArticles[0].featuredImage}
                        alt={trendingArticles[0].title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 dark:from-orange-600 dark:to-orange-700"></div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-500 dark:bg-orange-600 text-white text-xs font-bold rounded-full shadow-lg">
                        <TrendingUp size={12} />
                        #1 Trending
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                      <div className="flex items-center gap-3 text-white/80 text-xs mb-2">
                        <Clock size={12} />
                        <span>{formatTimeAgo(trendingArticles[0].publishedAt)}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white line-clamp-2 group-hover:text-orange-300 transition-colors">
                        {trendingArticles[0].title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    {trendingArticles[0].excerpt && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {trendingArticles[0].excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-orange-500 dark:text-orange-400 uppercase tracking-wide">
                          {trendingArticles[0].category}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{getAuthorName(trendingArticles[0].author)}</span>
                      </div>
                      <ArrowRight size={18} className="text-orange-500 dark:text-orange-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              )}

              {/* Secondary Featured Article */}
              {trendingArticles[1] && (
                <Link
                  href={`/post?slug=${trendingArticles[1].slug}`}
                  className="group lg:col-span-1 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-slate-700">
                    {trendingArticles[1].featuredImage ? (
                      <Image
                        src={trendingArticles[1].featuredImage}
                        alt={trendingArticles[1].title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-700"></div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500 dark:bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                        <TrendingUp size={12} />
                        #2 Trending
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                      <div className="flex items-center gap-3 text-white/80 text-xs mb-2">
                        <Clock size={12} />
                        <span>{formatTimeAgo(trendingArticles[1].publishedAt)}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white line-clamp-2 group-hover:text-blue-300 transition-colors">
                        {trendingArticles[1].title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    {trendingArticles[1].excerpt && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {trendingArticles[1].excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-blue-500 dark:text-blue-400 uppercase tracking-wide">
                          {trendingArticles[1].category}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{getAuthorName(trendingArticles[1].author)}</span>
                      </div>
                      <ArrowRight size={18} className="text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              )}
            </div>

            {/* Other Trending Articles - Horizontal Scroll on Mobile */}
            {trendingArticles.length > 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {trendingArticles.slice(2).map((article, index) => (
                  <Link
                    key={article._id || article.id || index}
                    href={`/post?slug=${article.slug}`}
                    className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-slate-700">
                      {article.featuredImage ? (
                        <Image
                          src={article.featuredImage}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-700"></div>
                      )}
                      <div className="absolute top-2 right-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-orange-500 dark:bg-orange-600 text-white text-xs font-bold rounded-full shadow-md">
                          {index + 3}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                        <Clock size={10} />
                        <span>{formatTimeAgo(article.publishedAt)}</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-orange-500 dark:text-orange-400 uppercase tracking-wide">
                          {article.category}
                        </span>
                        <ArrowRight size={14} className="text-orange-500 dark:text-orange-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center border border-gray-200 dark:border-slate-700">
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">No trending posts selected</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Select posts in the admin panel to display them here</p>
          </div>
        )}
      </div>
    </section>
  );
}
