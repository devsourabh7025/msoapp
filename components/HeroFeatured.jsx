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

  const getCategoryName = (cat) => {
    if (!cat) return null;
    if (typeof cat === "object" && cat?.name) return cat.name;
    if (typeof cat === "string") return cat;
    return null;
  };

  const formatDate = (date) => {
    if (!date) return null;
    try {
      return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return null;
    }
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
            title: "",
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
    const main = heroContent?.mainArticle;
    const hasMain = main && (main._id || main.slug || main.title);
    return {
      topPicks: Array.isArray(heroContent?.topPicks)
        ? heroContent.topPicks
        : [],
      mainArticle: hasMain ? main : null,
      discussionTableArticles: Array.isArray(heroContent?.discussionTable)
        ? heroContent.discussionTable.slice(0, 5)
        : [],
    };
  }, [heroContent]);

  if (loading) {
    return (
      <section className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-white/10">
        <div className="home-container py-10">
          <div className="animate-pulse">
            <div className="h-5 bg-gray-200 dark:bg-gray-800 w-32 mb-8" />
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-8">
                <div className="aspect-[16/9] bg-gray-200 dark:bg-gray-800" />
                <div className="mt-4 space-y-2">
                  <div className="h-6 bg-gray-200 dark:bg-gray-800 w-3/4" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 w-1/2" />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-20 h-14 shrink-0 bg-gray-200 dark:bg-gray-800" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 dark:bg-gray-800" />
                      <div className="h-3 bg-gray-200 dark:bg-gray-800 w-20" />
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
  const newsletterPlaceholder =
    heroSettings?.newsletterPlaceholder || "Enter your Email";

  return (
    <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/5">
      <div className="home-container pt-8 pb-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-8 h-[3px] bg-red-600" />
          <h2 className="home-section-heading text-gray-900 dark:text-white">
            {sectionTitle}
          </h2>
        </div>

        {/* Main grid: Hero + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0">
          {/* Lead story */}
          <div className="col-span-1 lg:col-span-8 lg:pr-6 lg:border-r border-gray-200 dark:border-white/10">
            {mainArticle ? (
              <Link
                href={`/post?slug=${mainArticle.slug}`}
                className="group block"
              >
                <article>
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {mainArticle.featuredImage ? (
                      <Image
                        src={mainArticle.featuredImage}
                        alt={mainArticle.title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800" />
                    )}
                    {getCategoryName(mainArticle.category) && (
                      <span className="absolute top-4 left-4 px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold tracking-wider uppercase">
                        {getCategoryName(mainArticle.category)}
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <h1 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold leading-[1.15] text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">
                      {mainArticle.title}
                    </h1>

                    {mainArticle.excerpt && (
                      <p className="mt-2.5 text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-2">
                        {mainArticle.excerpt}
                      </p>
                    )}

                    <div className="mt-3 flex items-center gap-2 text-[11px] tracking-wide uppercase text-gray-500 dark:text-gray-500">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {getAuthorName(mainArticle.author)}
                      </span>
                      {formatDate(mainArticle.publishedAt) && (
                        <>
                          <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600" />
                          <span>{formatDate(mainArticle.publishedAt)}</span>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ) : (
              <div className="border border-dashed border-gray-300 dark:border-white/10 p-12 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No lead story selected
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  Configure in admin panel
                </p>
              </div>
            )}
          </div>

          {/* Sidebar: Trending + Newsletter */}
          <div className="col-span-1 lg:col-span-4 lg:pl-6 mt-8 lg:mt-0">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white">
                Trending
              </span>
              <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
            </div>

            {discussionTableArticles.length > 0 ? (
              <div className="divide-y divide-gray-100 dark:divide-white/5">
                {discussionTableArticles.map((post, index) => (
                  <Link
                    key={post._id || index}
                    href={`/post?slug=${post.slug}`}
                    className="group flex gap-4 py-3.5 first:pt-0"
                  >
                    <span className="text-2xl font-black text-gray-200 dark:text-gray-800 leading-none mt-0.5 select-none tabular-nums w-7 shrink-0 group-hover:text-red-200 dark:group-hover:text-red-900/50 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      {getCategoryName(post.category) && (
                        <span className="text-[10px] font-bold tracking-wider uppercase text-red-600 dark:text-red-400">
                          {getCategoryName(post.category)}
                        </span>
                      )}
                      <h4 className="text-[13px] font-semibold leading-snug text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {post.title}
                      </h4>
                      <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-500">
                        {getAuthorName(post.author)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 dark:text-gray-500 py-4">
                No trending stories
              </p>
            )}

            {showNewsletter && (
              <div className="mt-6 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-5">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                  Stay informed
                </h4>
                <p className="text-[12px] text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">
                  Get the top stories delivered to your inbox every morning.
                </p>
                <form
                  className="flex gap-2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder={newsletterPlaceholder}
                    className="flex-1 min-w-0 h-9 px-3 border border-gray-300 dark:border-white/15 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm outline-none focus:border-red-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="h-9 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-wide uppercase transition-colors"
                  >
                    Go
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Top Picks strip */}
        {topPicks.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white">
                Top Picks
              </span>
              <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {topPicks.slice(0, 4).map((post, index) => (
                <Link
                  key={post._id || index}
                  href={`/post?slug=${post.slug}`}
                  className="group block"
                >
                  <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800" />
                    )}
                  </div>

                  {getCategoryName(post.category) && (
                    <span className="mt-2.5 block text-[10px] font-bold tracking-wider uppercase text-red-600 dark:text-red-400">
                      {getCategoryName(post.category)}
                    </span>
                  )}
                  <h3 className="mt-1 text-sm font-semibold leading-snug text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-500">
                    {getAuthorName(post.author)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
