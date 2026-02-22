// "use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function HeroFeatured({ initialHeroData, initialHeroSettings }) {
  const [heroContent, setHeroContent] = useState(initialHeroData ?? null);
  const [heroSettings, setHeroSettings] = useState(initialHeroSettings ?? null);
  const [loading, setLoading] = useState(!initialHeroData);

  const getAuthorName = (author) => {
    if (!author) return "Editorial Team";
    if (typeof author === "object" && author?.name) {
      return author.name;
    }
    return author;
  };

  useEffect(() => {
    if (initialHeroData) return;
    let isMounted = true;

    const loadHeroContent = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/settings/hero");
        if (!isMounted) return;

        if (response.data?.hero) {
          setHeroContent(response.data.hero);
        } else {
          setHeroContent({
            mainArticle: null,
            topPicks: [],
            discussionTable: [],
          });
        }
        if (response.data?.settings) {
          setHeroSettings(response.data.settings);
        } else {
          setHeroSettings({
            title: "The Big Edit",
            showNewsletter: true,
            newsletterTitle: "Newsletter",
            newsletterPlaceholder: "Enter your Email",
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
          setHeroSettings({
            showNewsletter: true,
            newsletterTitle: "Newsletter",
            newsletterPlaceholder: "Enter your Email",
          });
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadHeroContent();
    return () => {
      isMounted = false;
    };
  }, [initialHeroData]);

  const { topPicks, mainArticle, discussionTableArticles } = useMemo(() => {
    // Use admin-selected posts from database (accept by _id, slug, or title)
    const main = heroContent?.mainArticle;
    const hasMain = main && (main._id || main.slug || main.title);
    return {
      topPicks: Array.isArray(heroContent?.topPicks)
        ? heroContent.topPicks
        : [],
      mainArticle: hasMain ? main : null,
      discussionTableArticles: Array.isArray(heroContent?.discussionTable)
        ? heroContent.discussionTable.slice(0, 4)
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
              <div className="h-6 bg-gray-200/80 dark:bg-gray-800  w-28" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] bg-gray-200/80 dark:bg-gray-800 "
                  />
                ))}
              </div>
              <div className="aspect-[21/10] bg-gray-200/80 dark:bg-gray-800 " />
            </div>
            <div className="lg:col-span-4 space-y-6">
              <div className="h-6 bg-gray-200/80 dark:bg-gray-800  w-36" />
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-20 h-20 shrink-0 bg-gray-200/80 dark:bg-gray-800 " />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200/80 dark:bg-gray-800 w-full" />
                      <div className="h-3 bg-gray-200/80 dark:bg-gray-800 w-24" />
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

  const sectionTitle = heroSettings?.title || "The Big Edit";
  const showNewsletter = heroSettings?.showNewsletter !== false;
  const newsletterTitle = heroSettings?.newsletterTitle || "Newsletter";
  const newsletterPlaceholder =
    heroSettings?.newsletterPlaceholder || "Enter your Email";
  const equityIntelPosts = discussionTableArticles.slice(0, 3);

  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* ================= TOP ROW (Title + Horizontal Posts) ================= */}
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Big Title */}
          <div className="col-span-12 lg:col-span-3">
            <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-none tracking-tight">
              {sectionTitle}
            </h2>
          </div>

          {/* Horizontal Posts */}
          <div className="col-span-12 lg:col-span-9">
            {topPicks.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {topPicks.slice(0, 4).map((post, index) => (
                  <Link
                    key={post._id || index}
                    href={`/post?slug=${post.slug}`}
                    className="group block"
                  >
                    <div className="relative w-full h-[110px] overflow-hidden bg-gray-100 dark:bg-gray-800">
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="300px"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                      )}
                    </div>

                    <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white leading-snug line-clamp-2 group-hover:underline">
                      {post.title}
                    </h3>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* ================= BOTTOM ROW (Main Article + Equity Intel) ================= */}
        <div className="grid grid-cols-12 gap-8 mt-8">
          {/* Main Article (Left) */}
          <div className="col-span-12 lg:col-span-8">
            {mainArticle ? (
              <Link
                href={`/post?slug=${mainArticle.slug}`}
                className="group block"
              >
                <article className="bg-white dark:bg-gray-950">
                  <div className="relative w-full h-[360px] overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {mainArticle.featuredImage ? (
                      <Image
                        src={mainArticle.featuredImage}
                        alt={mainArticle.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 70vw"
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                    )}
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Insight
                    </p>

                    <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight group-hover:underline">
                      {mainArticle.title}
                    </h1>

                    {mainArticle.excerpt && (
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                        {mainArticle.excerpt}
                      </p>
                    )}

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {getAuthorName(mainArticle.author)}
                    </p>
                  </div>
                </article>
              </Link>
            ) : (
              <div className="border border-gray-200 dark:border-white/10 p-10 text-center bg-gray-50 dark:bg-gray-900/30">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No main article selected
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  Set one in the admin panel
                </p>
              </div>
            )}
          </div>

          {/* Equity Intel + Newsletter (Right) */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* Equity Intel */}
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                Equity Intel
              </h3>

              {equityIntelPosts.length > 0 ? (
                <div className="space-y-4">
                  {equityIntelPosts.map((post, index) => (
                    <Link
                      key={post._id || index}
                      href={`/post?slug=${post.slug}`}
                      className="group flex gap-3"
                    >
                      <div className="relative shrink-0 w-16 h-16 overflow-hidden bg-gray-100 dark:bg-gray-800">
                        {post.featuredImage ? (
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="80px"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug line-clamp-2 group-hover:underline">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {getAuthorName(post.author)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No stories yet
                </p>
              )}
            </div>

            {/* Newsletter */}
            {showNewsletter && (
              <div className="border border-gray-200 dark:border-white/10 p-4 bg-white dark:bg-gray-950">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                  Sign Up For YourStory Newsletter
                </h4>

                <form
                  className="flex gap-2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder={newsletterPlaceholder}
                    className="flex-1 min-w-0 h-10 px-3 border border-gray-300 dark:border-white/20 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm outline-none"
                  />

                  <button
                    type="submit"
                    className="h-10 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


