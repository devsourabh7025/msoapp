"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function TrendingNow() {
  const [trendingContent, setTrendingContent] = useState([]);
  const [trendingSettings, setTrendingSettings] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;

    const loadTrendingContent = async () => {
      try {
        const response = await axios.get("/api/settings/trending", {
          cache: "no-store",
        });

        if (!isMounted) return;

        setTrendingContent(response.data?.trending || []);

        if (response.data?.settings) {
          setTrendingSettings(response.data.settings);
        }
      } catch (error) {
        if (isMounted) setTrendingContent([]);
      }
    };

    loadTrendingContent();
    return () => (isMounted = false);
  }, [pathname]);

  const getAuthorName = (author) => {
    if (!author) return "Editorial Team";
    if (typeof author === "object" && author?.name) return author.name;
    return author;
  };

  const getCategoryName = (cat) => {
    if (!cat) return null;
    if (typeof cat === "object" && cat?.name) return cat.name;
    if (typeof cat === "string") return cat;
    return null;
  };

  const trendingArticles = useMemo(() => {
    if (!Array.isArray(trendingContent)) return [];

    return trendingContent.slice(0, 6).map((post) => ({
      ...post,
      slug: post.slug || (post._id ? `post-${post._id}` : `post-${post.id}`),
      featuredImage: post.featuredImage || "/demo.png",
      category: post.category || "General",
      author: post.author || { name: "Editorial Team" },
    }));
  }, [trendingContent]);

  if (trendingSettings?.showSection === false) return null;

  const lead = trendingArticles[0];
  const secondary = trendingArticles.slice(1, 3);
  const list = trendingArticles.slice(3, 6);

  return (
    <section className="bg-gray-50 dark:bg-gray-950/80 border-b border-gray-100 dark:border-white/5">
      <div className="home-container py-10">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-8 h-[3px] bg-red-600" />
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white">
            {trendingSettings?.title || "Trending"}
          </h2>
          <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
        </div>

        {trendingArticles.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Lead trending story */}
            {lead && (
              <div className="col-span-1 lg:col-span-5 lg:pr-6 lg:border-r border-gray-200 dark:border-white/10">
                <Link href={`/post?slug=${lead.slug}`} className="group block">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={lead.featuredImage}
                      alt={lead.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <span className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center bg-red-600 text-white text-xs font-bold">
                      01
                    </span>
                  </div>
                  <div className="mt-4">
                    {getCategoryName(lead.category) && (
                      <span className="text-[10px] font-bold tracking-wider uppercase text-red-600 dark:text-red-400">
                        {getCategoryName(lead.category)}
                      </span>
                    )}
                    <h3 className="mt-1 text-xl font-extrabold leading-tight text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {lead.title}
                    </h3>
                    <p className="mt-2 text-[11px] tracking-wide uppercase text-gray-500">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{getAuthorName(lead.author)}</span>
                    </p>
                  </div>
                </Link>
              </div>
            )}

            {/* Secondary + list */}
            <div className="col-span-1 lg:col-span-7 lg:pl-6 mt-8 lg:mt-0">
              {/* Two secondary cards */}
              {secondary.length > 0 && (
                <div className="grid grid-cols-2 gap-5 pb-5 border-b border-gray-200 dark:border-white/10">
                  {secondary.map((article, index) => (
                    <Link
                      key={article._id || index}
                      href={`/post?slug=${article.slug}`}
                      className="group block"
                    >
                      <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <Image
                          src={article.featuredImage}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                        <span className="absolute top-2 left-2 w-6 h-6 flex items-center justify-center bg-white/95 dark:bg-gray-900/95 text-[10px] font-bold text-red-600">
                          {String(index + 2).padStart(2, "0")}
                        </span>
                      </div>
                      {getCategoryName(article.category) && (
                        <span className="mt-2.5 block text-[10px] font-bold tracking-wider uppercase text-red-600 dark:text-red-400">
                          {getCategoryName(article.category)}
                        </span>
                      )}
                      <h4 className="mt-1 text-sm font-semibold leading-snug text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {article.title}
                      </h4>
                      <p className="mt-1 text-[11px] text-gray-500">
                        {getAuthorName(article.author)}
                      </p>
                    </Link>
                  ))}
                </div>
              )}

              {/* Remaining as numbered list */}
              {list.length > 0 && (
                <div className="divide-y divide-gray-100 dark:divide-white/5 mt-1">
                  {list.map((article, index) => (
                    <Link
                      key={article._id || index}
                      href={`/post?slug=${article.slug}`}
                      className="group flex gap-4 py-3.5 first:pt-3"
                    >
                      <span className="text-2xl font-black text-gray-200 dark:text-gray-800 leading-none mt-0.5 select-none tabular-nums w-7 shrink-0 group-hover:text-red-200 dark:group-hover:text-red-900/50 transition-colors">
                        {String(index + 4).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        {getCategoryName(article.category) && (
                          <span className="text-[10px] font-bold tracking-wider uppercase text-red-600 dark:text-red-400">
                            {getCategoryName(article.category)}
                          </span>
                        )}
                        <h4 className="text-[13px] font-semibold leading-snug text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                          {article.title}
                        </h4>
                        <p className="mt-1 text-[11px] text-gray-500">
                          {getAuthorName(article.author)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-400 dark:text-gray-500 py-8 text-center">
            No trending posts selected
          </p>
        )}
      </div>
    </section>
  );
}
