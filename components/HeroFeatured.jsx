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
      <section className="relative overflow-hidden bg-gray-50/80 dark:bg-gray-950/50">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.03] via-transparent to-orange-500/[0.03] dark:from-amber-400/[0.04] dark:to-orange-400/[0.04] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="animate-pulse grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              <div className="h-6 bg-gray-200/80 dark:bg-gray-800 rounded-full w-28" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-[4/3] bg-gray-200/80 dark:bg-gray-800 rounded-2xl" />
                ))}
              </div>
              <div className="aspect-[21/10] bg-gray-200/80 dark:bg-gray-800 rounded-2xl" />
            </div>
            <div className="lg:col-span-4 space-y-6">
              <div className="h-6 bg-gray-200/80 dark:bg-gray-800 rounded-full w-36" />
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-20 h-20 shrink-0 bg-gray-200/80 dark:bg-gray-800 rounded-xl" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200/80 dark:bg-gray-800 rounded w-full" />
                      <div className="h-3 bg-gray-200/80 dark:bg-gray-800 rounded w-24" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gray-50/80 dark:bg-gray-950/50">
      {/* Subtle gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.04] via-transparent to-orange-500/[0.04] dark:from-amber-400/[0.05] dark:to-orange-400/[0.05] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left — Top Picks + Main Article */}
          <div className="lg:col-span-8 space-y-8">
            {/* Top Picks — 2026 pill + card grid */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 dark:bg-amber-400/15 text-amber-800 dark:text-amber-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400" />
                  Top Picks
                </span>
              </div>

              {topPicks.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  {topPicks.map((post, index) => (
                    <Link
                      key={post._id || index}
                      href={`/post?slug=${post.slug}`}
                      className="group group/card block"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800/80 shadow-sm ring-1 ring-gray-200/60 dark:ring-white/5 transition-all duration-300 group-hover/card:shadow-lg group-hover/card:ring-amber-500/20 dark:group-hover/card:ring-amber-400/20 group-hover/card:-translate-y-0.5">
                        {post.featuredImage ? (
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-500/30 dark:from-amber-500/20 dark:to-orange-600/20" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                      </div>
                      <h3 className="mt-2.5 text-sm font-semibold text-gray-900 dark:text-white leading-snug line-clamp-2 group-hover/card:text-amber-700 dark:group-hover/card:text-amber-400 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/60 dark:border-white/10 p-8 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">No top picks selected</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Choose posts in the admin panel to show here</p>
                </div>
              )}
            </div>

            {/* Main Article — hero card */}
            <div>
              {mainArticle ? (
                <Link href={`/post?slug=${mainArticle.slug}`} className="group block">
                  <article className="relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/60 dark:border-white/10 shadow-sm ring-1 ring-gray-200/40 dark:ring-white/5 transition-all duration-300 group-hover:shadow-xl group-hover:ring-amber-500/15 dark:group-hover:ring-amber-400/15">
                    {/* Optional hero image */}
                    {mainArticle.featuredImage && (
                      <div className="relative aspect-[21/9] sm:aspect-[3/1] overflow-hidden">
                        <Image
                          src={mainArticle.featuredImage}
                          alt={mainArticle.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 66vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                      </div>
                    )}
                    <div className={`relative z-10 ${mainArticle.featuredImage ? "absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white" : "p-6 sm:p-8"}`}>
                      <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium mb-3 ${mainArticle.featuredImage ? "bg-white/20 text-white/95" : "bg-amber-500/15 dark:bg-amber-400/15 text-amber-800 dark:text-amber-200"}`}>
                        {mainArticle.category || "Featured"}
                      </span>
                      <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 transition-colors ${mainArticle.featuredImage ? "text-white" : "text-gray-900 dark:text-white"} group-hover:text-amber-600 dark:group-hover:text-amber-400`}>
                        {mainArticle.title}
                      </h1>
                      {mainArticle.excerpt && (
                        <p className={`text-sm sm:text-base max-w-2xl leading-relaxed mb-4 ${mainArticle.featuredImage ? "text-white/90" : "text-gray-600 dark:text-gray-400"}`}>
                          {mainArticle.excerpt}
                        </p>
                      )}
                      <span className={`text-sm font-medium ${mainArticle.featuredImage ? "text-white/80" : "text-gray-500 dark:text-gray-400"}`}>
                        {getAuthorName(mainArticle.author)}
                      </span>
                    </div>
                    {!mainArticle.featuredImage && <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 dark:from-amber-400/5 dark:to-orange-400/5 pointer-events-none -z-0" aria-hidden />}
                  </article>
                </Link>
              ) : (
                <div className="rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/60 dark:border-white/10 p-10 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">No main article selected</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Set one in the admin panel</p>
                </div>
              )}
            </div>
          </div>

          {/* Right — Discussion Table */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 dark:bg-emerald-400/15 text-emerald-800 dark:text-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  Discussion
                </span>
              </div>

              {discussionTableArticles.length > 0 ? (
                <div className="space-y-3">
                  {discussionTableArticles.map((post, index) => (
                    <Link
                      key={post._id || index}
                      href={`/post?slug=${post.slug}`}
                      className="group flex gap-4 p-3 sm:p-4 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/60 dark:border-white/10 hover:border-amber-500/20 dark:hover:border-amber-400/20 hover:bg-white/80 dark:hover:bg-gray-900/80 transition-all duration-300"
                    >
                      <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-200/50 dark:ring-white/5">
                        {post.featuredImage ? (
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-emerald-400/40 to-teal-500/40 dark:from-emerald-500/30 dark:to-teal-600/30" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white leading-snug line-clamp-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{getAuthorName(post.author)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/60 dark:border-white/10 p-6 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">No discussion posts yet</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Add them in the admin panel</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
