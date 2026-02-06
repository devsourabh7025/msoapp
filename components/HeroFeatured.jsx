"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function HeroFeatured() {
  const [heroContent, setHeroContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAuthorName = (author) => {
    if (!author) return "Editorial Team";
    if (typeof author === "object" && author?.name) {
      return author.name;
    }
    return author;
  };

  useEffect(() => {
    let isMounted = true;
    
    const loadHeroContent = async () => {
      try {
        setLoading(true);
        // Fetch hero section data from dedicated hero API endpoint
        const response = await axios.get("/api/settings/hero");
        if (!isMounted) return;
        
        if (response.data && response.data.hero) {
          // Hero section data comes from dedicated endpoint
          setHeroContent(response.data.hero);
        } else {
          setHeroContent({
            mainArticle: null,
            topPicks: [],
            discussionTable: [],
          });
        }
      } catch (error) {
        console.error("Error loading hero content from API:", error);
        if (isMounted) {
          setHeroContent({
            mainArticle: null,
            topPicks: [],
            discussionTable: [],
          });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadHeroContent();
    
    return () => {
      isMounted = false;
    };
  }, []);

  const { topPicks, mainArticle, discussionTableArticles } = useMemo(() => {
    // Only use admin-selected posts from database
    return {
      topPicks: heroContent?.topPicks && heroContent.topPicks.length > 0
        ? heroContent.topPicks
        : [],
      mainArticle: heroContent?.mainArticle && heroContent.mainArticle._id
        ? heroContent.mainArticle
        : null,
      discussionTableArticles: heroContent?.discussionTable && heroContent.discussionTable.length > 0
        ? heroContent.discussionTable.slice(0, 4) // Limit to 4 posts
        : [],
    };
  }, [heroContent]);

  if (loading) {
    return (
      <section className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              <div className="h-8 bg-gray-200 dark:bg-slate-700 w-32 rounded"></div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-32 bg-gray-200 dark:bg-slate-700 rounded"
                  ></div>
                ))}
              </div>
              <div className="h-64 bg-gray-200 dark:bg-slate-700 rounded"></div>
            </div>
            <div className="lg:col-span-4 space-y-6">
              <div className="h-8 bg-gray-200 dark:bg-slate-700 w-40 rounded"></div>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-24 bg-gray-200 dark:bg-slate-700 rounded"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Top Picks Section */}
          <div className="lg:col-span-8">
            {/* Top Picks Header */}
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold text-black dark:text-white">
                Top Picks
              </h2>
              <div className="relative">
                <span className="text-red-600 dark:text-red-500 text-2xl font-bold">
                  ★
                </span>
                <span className="absolute -top-1 -right-1 text-red-600 dark:text-red-500 text-xs">
                  Picks
                </span>
              </div>
            </div>

            {/* Top Picks - 4 Small Previews */}
            {topPicks.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {topPicks.map((post, index) => (
                  <Link
                    key={post._id || index}
                    href={`/post?slug=${post.slug}`}
                    className="group"
                  >
                    <div className="mb-2">
                      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-slate-800 rounded">
                        {post.featuredImage ? (
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:opacity-90 transition-opacity"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-500 dark:from-blue-600 dark:to-blue-700"></div>
                        )}
                      </div>
                    </div>
                    <h3 className="text-sm font-medium text-black dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-lg border border-gray-200 dark:border-slate-700 mb-8 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">No top picks selected</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Select posts in the admin panel to display them here</p>
              </div>
            )}

            {/* Main Featured Article */}
            {mainArticle ? (
              <Link
                href={`/post?slug=${mainArticle.slug}`}
                className="group block"
              >
                <div className="mb-2">
                  <span className="inline-block text-xs text-gray-600 dark:text-gray-400 font-medium">
                    ■ {mainArticle.category || "News"}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {mainArticle.title}
                </h1>
                {mainArticle.excerpt && (
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {mainArticle.excerpt}
                  </p>
                )}
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span>{getAuthorName(mainArticle.author)}</span>
                </div>
              </Link>
            ) : (
              <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-lg border border-gray-200 dark:border-slate-700 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">No main article selected</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Select a main article in the admin panel to display it here</p>
              </div>
            )}
          </div>

          {/* Right Column - Discussion Table Section */}
          <div className="lg:col-span-4">
            {/* Discussion Table Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-black dark:text-white relative inline-block">
                Discussion Table
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 dark:bg-green-600"></span>
              </h2>
            </div>

            {/* Discussion Table Articles List - Limited to 4 */}
            {discussionTableArticles.length > 0 ? (
              <div className="space-y-6">
                {discussionTableArticles.map((post, index) => (
                  <Link
                    key={post._id || index}
                    href={`/post?slug=${post.slug}`}
                    className="group flex gap-4"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-black dark:text-white leading-snug mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <span>{getAuthorName(post.author)}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-20 h-20 rounded overflow-hidden bg-gray-100 dark:bg-slate-800">
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-500 dark:from-blue-600 dark:to-blue-700"></div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">No Discussion Table articles selected</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Select posts in the admin panel to display them here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
