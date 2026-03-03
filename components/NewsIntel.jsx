"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Newspaper, ChevronRight } from "lucide-react";

const defaultSubsections = [
  { id: "ai-index", name: "The AI Index", description: "", enabled: true, posts: [] },
  { id: "corporate-intel", name: "Corporate Intel", description: "", enabled: true, posts: [] },
  { id: "equity-intel", name: "Equity Intel", description: "", enabled: true, posts: [] },
  { id: "sector-deep-dives", name: "Sector Deep Dives", description: "", enabled: true, posts: [] },
  { id: "policy-tracker", name: "Policy Tracker", description: "", enabled: true, posts: [] },
];

const getAuthorName = (author) => {
  if (!author) return "Editorial Team";
  if (typeof author === "object" && author?.name) return author.name;
  return author;
};

const formatDate = (date) => {
  if (!date) return null;
  try {
    return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return null;
  }
};

export default function NewsIntel({ initialContent, initialSettings }) {
  const [content, setContent] = useState(initialContent ?? null);
  const [settings, setSettings] = useState(initialSettings ?? null);
  const [loading, setLoading] = useState(!initialContent && !initialSettings);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const response = await axios.get("/api/settings/news-intel");
        if (!isMounted) return;
        if (response.data?.content) setContent(response.data.content);
        else setContent({ subsections: defaultSubsections });
        if (response.data?.settings) setSettings(response.data.settings);
        else setSettings({ title: "News & Intel", subtitle: "" });
      } catch (error) {
        if (isMounted) {
          setContent({ subsections: defaultSubsections });
          setSettings({ title: "News & Intel", subtitle: "" });
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

  const subsectionsWithPosts = subsections.filter((s) => Array.isArray(s.posts) && s.posts.length > 0);
  const sectionTitle = settings?.title || "News & Intel";
  const sectionSubtitle = settings?.subtitle || "";

  if (loading) {
    return (
      <section className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-white/10">
        <div className="home-container py-10">
          <div className="animate-pulse">
            <div className="h-5 bg-gray-200 dark:bg-gray-800 w-36 mb-2" />
            <div className="h-3 bg-gray-200 dark:bg-gray-800 w-48 mb-8" />
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 w-32 mb-4" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded-lg" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (subsectionsWithPosts.length === 0) {
    return (
      <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/5">
        <div className="home-container pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-[3px] bg-red-600" />
            <div>
              <h2 className="home-section-heading text-gray-900 dark:text-white text-lg">{sectionTitle}</h2>
              {sectionSubtitle && (
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{sectionSubtitle}</p>
              )}
            </div>
            <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
          </div>
          <div className="border border-dashed border-red-200 dark:border-red-900/50 rounded-xl p-8 text-center bg-red-50/30 dark:bg-red-950/10">
            <p className="text-sm text-gray-600 dark:text-gray-400">No news and intel posts yet</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Add up to 3 posts per category in Admin → Customise → News & Intel
            </p>
          </div>
        </div>
      </section>
    );
  }

  const primarySubsection = subsectionsWithPosts[0];
  const primaryPosts = (primarySubsection?.posts || []).filter((p) => p.slug || p._id);
  const primaryLead = primaryPosts[0] || null;
  const primaryRest = primaryPosts.slice(1, 3);

  const sidebarItems = subsectionsWithPosts
    .slice(1)
    .flatMap((sub) => (sub.posts || []).map((p) => ({ ...p, subsectionName: sub.name })))
    .filter((p) => p.slug || p._id)
    .slice(0, 6);

  return (
    <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/5">
      <div className="home-container pt-8 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-8 h-[3px] bg-red-600" />
          <h2 className="home-section-heading text-gray-900 dark:text-white">
            {sectionTitle}
          </h2>
          {sectionSubtitle && (
            <span className="ml-2 text-[11px] text-gray-500 dark:text-gray-400">
              {sectionSubtitle}
            </span>
          )}
          <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0">
          <div className={`col-span-1 ${sidebarItems.length > 0 ? "lg:col-span-8 lg:pr-6 lg:border-r border-gray-200 dark:border-white/10" : "lg:col-span-12"}`}>
            {primaryLead ? (
              <Link
                href={`/post?slug=${primaryLead.slug || (primaryLead._id ? `post-${String(primaryLead._id)}` : "")}`}
                className="group block mb-6"
              >
                <article>
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {primaryLead.featuredImage ? (
                      <Image
                        src={primaryLead.featuredImage}
                        alt={primaryLead.title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                        <Newspaper className="w-10 h-10 text-slate-400 dark:text-slate-500/60" />
                      </div>
                    )}
                    <span className="absolute top-4 left-4 px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold tracking-wider uppercase rounded">
                      {primarySubsection?.name || "Top Story"}
                    </span>
                  </div>

                    <div className="mt-4">
                    <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">
                      {primaryLead.title}
                    </h3>
                    {primaryLead.excerpt && (
                      <p className="mt-2.5 text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-2">
                        {primaryLead.excerpt}
                      </p>
                    )}
                    <div className="mt-3 flex items-center gap-2 text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-500">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {getAuthorName(primaryLead.author)}
                      </span>
                      {formatDate(primaryLead.publishedAt) && (
                        <>
                          <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full" />
                          <span>{formatDate(primaryLead.publishedAt)}</span>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ) : null}

            {primaryRest.length > 0 && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {primaryRest.map((post) => {
                  const slug = post.slug || (post._id ? `post-${String(post._id)}` : "");
                  return (
                    <Link
                      key={post._id}
                      href={`/post?slug=${slug}`}
                      className="group flex gap-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/60 overflow-hidden hover:border-red-200 dark:hover:border-red-900/50 transition-colors"
                    >
                      <div className="relative w-24 sm:w-28 flex-shrink-0 aspect-[4/3] bg-gray-100 dark:bg-gray-800">
                        {post.featuredImage ? (
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
                            sizes="96px"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            <Newspaper className="w-6 h-6 text-gray-400 dark:text-gray-500/70" />
                          </div>
                        )}
                      </div>
                      <div className="py-2 pr-3 flex-1 min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-0.5">
                          {primarySubsection?.name || "News"}
                        </p>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                          {post.title}
                        </h4>
                        <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1">
                          {getAuthorName(post.author)}
                          {formatDate(post.publishedAt) && ` • ${formatDate(post.publishedAt)}`}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {sidebarItems.length > 0 && (
            <div className="col-span-1 lg:col-span-4 lg:pl-6 mt-8 lg:mt-0">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white">
                  Quick Intel
                </span>
                <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
              </div>

              <div className="space-y-3">
                {sidebarItems.map((post) => {
                  const slug = post.slug || (post._id ? `post-${String(post._id)}` : "");
                  return (
                    <Link
                      key={`${post._id}-${post.subsectionName}`}
                      href={`/post?slug=${slug}`}
                      className="group flex gap-3 rounded-lg px-2.5 py-2 hover:bg-red-50/50 dark:hover:bg-red-950/20 transition-colors"
                    >
                      <div className="mt-1 w-1 h-8 rounded-full bg-red-500/70 dark:bg-red-500/60 group-hover:bg-red-600 dark:group-hover:bg-red-400" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-red-600 dark:text-red-400 mb-0.5">
                          {post.subsectionName}
                        </p>
                        <h4 className="text-[13px] font-semibold leading-snug text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400">
                          {post.title}
                        </h4>
                        <p className="mt-0.5 text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1">
                          {getAuthorName(post.author)}
                        </p>
                      </div>
                      <ChevronRight
                        size={14}
                        className="mt-1 text-red-500/80 group-hover:text-red-600 dark:group-hover:text-red-400 group-hover:translate-x-0.5 transition-transform"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
