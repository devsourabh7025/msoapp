"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const defaultSubsections = [
  { id: "startup-narrative", name: "Startup Narrative", slug: "startup-narrative", enabled: true, posts: [] },
  { id: "fearless-fabulous", name: "Fearless & Fabulous", slug: "fearless-fabulous", enabled: true, posts: [] },
  { id: "social-impact", name: "Social Impact", slug: "social-impact", enabled: true, posts: [] },
  { id: "beyond-work", name: "Beyond Work", slug: "beyond-work", enabled: true, posts: [] },
  { id: "the-pivot", name: "The Pivot", slug: "the-pivot", enabled: true, posts: [] },
];

export default function MSONarrative({ initialContent, initialSettings }) {
  const [content, setContent] = useState(initialContent ?? null);
  const [settings, setSettings] = useState(initialSettings ?? null);
  const [loading, setLoading] = useState(!initialContent && !initialSettings);

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
    let isMounted = true;
    const load = async () => {
      try {
        const response = await axios.get("/api/settings/mso-narrative");
        if (!isMounted) return;
        if (response.data?.content) setContent(response.data.content);
        else setContent({ subsections: defaultSubsections });
        if (response.data?.settings) setSettings(response.data.settings);
        else setSettings({ title: "The MSO Narrative" });
      } catch (error) {
        if (isMounted) {
          setContent({ subsections: defaultSubsections });
          setSettings({ title: "The MSO Narrative" });
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

  const featuredSubsection = subsections[0];
  const featuredPost = featuredSubsection?.posts?.[0];
  const sidebarSubsections = subsections.slice(1, 3).filter((s) => Array.isArray(s.posts) && s.posts.length > 0);
  const belowSubsections = subsections.slice(3, 5).filter((s) => Array.isArray(s.posts) && s.posts.length > 0);

  const sectionTitle = settings?.title || "The MSO Narrative";

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

  return (
    <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/5">
      <div className="home-container pt-8 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-8 h-[3px] bg-red-600" />
          <h2 className="home-section-heading text-gray-900 dark:text-white">
            {sectionTitle}
          </h2>
          <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0">
          <div className={`col-span-1 ${sidebarSubsections.length > 0 ? "lg:col-span-8 lg:pr-6 lg:border-r border-gray-200 dark:border-white/10" : "lg:col-span-12"}`}>
            {featuredPost ? (
              <Link href={`/post?slug=${featuredPost.slug}`} className="group block">
                <article>
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {featuredPost.featuredImage ? (
                      <Image
                        src={featuredPost.featuredImage}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800" />
                    )}
                    <span className="absolute top-4 right-4 px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold tracking-wider uppercase rounded">
                      Trending
                    </span>
                    {getCategoryName(featuredPost.category) && (
                      <span className="absolute top-4 left-4 px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold tracking-wider uppercase">
                        {getCategoryName(featuredPost.category)}
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <h1 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold leading-[1.15] text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">
                      <span className="text-red-600 dark:text-red-400">{featuredSubsection?.name}:</span>{" "}
                      {featuredPost.title}
                    </h1>
                    {featuredPost.excerpt && (
                      <p className="mt-2.5 text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-2">
                        {featuredPost.excerpt}
                      </p>
                    )}
                    <div className="mt-3 flex items-center gap-2 text-[11px] tracking-wide uppercase text-gray-500 dark:text-gray-500">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {getAuthorName(featuredPost.author)}
                      </span>
                      {formatDate(featuredPost.publishedAt) && (
                        <>
                          <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600" />
                          <span>{formatDate(featuredPost.publishedAt)}</span>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ) : (
              <div className="border border-dashed border-gray-300 dark:border-white/10 p-12 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No featured post for {featuredSubsection?.name || "Startup Narrative"}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  Add posts in Admin → Customise → The MSO Narrative
                </p>
              </div>
            )}
          </div>

          {sidebarSubsections.length > 0 && (
            <div className="col-span-1 lg:col-span-4 lg:pl-6 mt-8 lg:mt-0 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-900 dark:text-white">
                    Latest Narrative
                  </span>
                  <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
                </div>

                <div className="space-y-5">
                  {sidebarSubsections.map((sub) => {
                    const posts = Array.isArray(sub.posts) ? sub.posts : [];
                    if (posts.length === 0) return null;
                    const slug = sub.slug || sub.id?.replace(/_/g, "-") || "";
                    return (
                      <div key={sub.id}>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-bold text-gray-900 dark:text-white">{sub.name}</h4>
                          {slug && (
                            <Link href={`/explore/${slug}`} className="text-[11px] font-bold text-red-600 dark:text-red-400 hover:underline">
                              View all
                            </Link>
                          )}
                        </div>
                        <ul className="space-y-2">
                          {posts.slice(0, 3).map((post, idx) => (
                            <li key={post._id || idx}>
                              <Link href={`/post?slug=${post.slug}`} className="group flex items-start gap-2 py-1">
                                <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-red-600 dark:bg-red-500" />
                                <div className="min-w-0 flex-1">
                                  <span className="text-[13px] font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                                    {post.title}
                                  </span>
                                  <span className="block text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                                    {getAuthorName(post.author)}
                                  </span>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {belowSubsections.length > 0 && (
          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/10">
            <div className={`grid gap-8 ${belowSubsections.length === 1 ? "grid-cols-1 max-w-2xl" : "grid-cols-1 md:grid-cols-2"}`}>
              {belowSubsections.map((sub) => {
                const posts = Array.isArray(sub.posts) ? sub.posts : [];
                const slug = sub.slug || sub.id?.replace(/_/g, "-") || "";
                return (
                  <div key={sub.id}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">{sub.name}</h4>
                      {slug && (
                        <Link href={`/explore/${slug}`} className="text-[11px] font-bold text-red-600 dark:text-red-400 hover:underline">
                          View all
                        </Link>
                      )}
                    </div>
                    <ul className="space-y-2">
                      {posts.slice(0, 3).map((post, idx) => (
                        <li key={post._id || idx}>
                          <Link href={`/post?slug=${post.slug}`} className="group flex items-start gap-2 py-1">
                            <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-red-600 dark:bg-red-500" />
                            <div className="min-w-0 flex-1">
                              <span className="text-[13px] font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                                {post.title}
                              </span>
                              <span className="block text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                                {getAuthorName(post.author)}
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
