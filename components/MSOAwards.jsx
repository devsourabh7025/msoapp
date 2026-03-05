"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const defaultSubsections = [
  { id: "mso-maharashtra-50", name: "MSO Maharashtra 50", slug: "mso-maharashtra-50", description: "The annual definitive list of the state's top startups.", enabled: true, posts: [] },
  { id: "solapur-icons", name: "Solapur Icons", slug: "solapur-icons", description: "Recognizing industrial and digital leaders in Solapur.", enabled: true, posts: [] },
  { id: "impact-honors", name: "Impact Honors", slug: "impact-honors", description: "Celebrating founders driving major Social/ESG changes.", enabled: true, posts: [] },
  { id: "emerging-leader", name: "Emerging Leader", slug: "emerging-leader", description: "Highlighting student founders and young entrepreneurs.", enabled: true, posts: [] },
  { id: "hall-of-fame", name: "The Hall of Fame", slug: "hall-of-fame", description: "A permanent archive of legendary Maharashtra business icons.", enabled: true, posts: [] },
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

export default function MSOAwards({ initialContent, initialSettings }) {
  const [content, setContent] = useState(initialContent ?? null);
  const [settings, setSettings] = useState(initialSettings ?? null);
  const [loading, setLoading] = useState(!initialContent && !initialSettings);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const response = await axios.get("/api/settings/mso-awards");
        if (!isMounted) return;
        if (response.data?.content) setContent(response.data.content);
        else setContent({ subsections: defaultSubsections });
        if (response.data?.settings) setSettings(response.data.settings);
        else setSettings({ title: "MSO Awards", subtitle: "Building prestige and community authority." });
      } catch (error) {
        if (isMounted) {
          setContent({ subsections: defaultSubsections });
          setSettings({ title: "MSO Awards", subtitle: "Building prestige and community authority." });
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
  const sectionTitle = settings?.title || "MSO Awards";
  const sectionSubtitle = settings?.subtitle || "Building prestige and community authority.";

  if (loading) {
    return (
      <section className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-white/10">
        <div className="home-container py-8">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-800 w-28 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i}>
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 w-32 mb-3" />
                  <div className="space-y-2">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="flex gap-2">
                        <div className="w-16 h-12 bg-gray-200 dark:bg-gray-800 shrink-0" />
                        <div className="flex-1 space-y-1">
                          <div className="h-3 bg-gray-200 dark:bg-gray-800 w-full" />
                          <div className="h-2.5 bg-gray-200 dark:bg-gray-800 w-20" />
                        </div>
                      </div>
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
        <div className="home-container pt-6 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-[3px] bg-amber-500" />
            <h2 className="home-section-heading text-gray-900 dark:text-white">{sectionTitle}</h2>
            {sectionSubtitle && <p className="text-[11px] text-gray-500 dark:text-gray-400">{sectionSubtitle}</p>}
            <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
          </div>
          <div className="border border-dashed border-gray-300 dark:border-white/10 rounded-lg p-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">No award posts yet</p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">Add posts in Admin → Customise → MSO Awards</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/5">
      <div className="home-container py-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-8 h-[3px] bg-amber-500" />
          <h2 className="home-section-heading text-gray-900 dark:text-white">{sectionTitle}</h2>
          {sectionSubtitle && <p className="text-[11px] text-gray-500 dark:text-gray-400">{sectionSubtitle}</p>}
          <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {subsectionsWithPosts.map((sub) => {
            const posts = Array.isArray(sub.posts) ? sub.posts : [];
            const slug = sub.slug || sub.id?.replace(/_/g, "-") || "";
            const firstPost = posts[0];
            const restPosts = posts.slice(1, 5);

            return (
              <div key={sub.id} className="border-b border-gray-100 dark:border-white/5 pb-6 last:border-b-0 last:pb-0 md:border-b-0 md:pb-0">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">{sub.name}</h3>
                  {slug && (
                    <Link href={`/explore/${slug}`} className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 hover:underline uppercase tracking-wide">
                      View all
                    </Link>
                  )}
                </div>

                <div className="space-y-3">
                  {firstPost && (
                    <Link
                      href={`/post?slug=${firstPost.slug || (firstPost._id ? `post-${String(firstPost._id)}` : "")}`}
                      className="group flex gap-3"
                    >
                      <div className="relative w-20 h-14 shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-800">
                        {firstPost.featuredImage ? (
                          <Image
                            src={firstPost.featuredImage}
                            alt={firstPost.title}
                            fill
                            className="object-cover group-hover:scale-[1.05] transition-transform duration-300"
                            sizes="80px"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[13px] font-semibold leading-snug text-gray-900 dark:text-white line-clamp-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          {firstPost.title}
                        </h4>
                        <p className="mt-0.5 text-[11px] text-gray-500 dark:text-gray-400">
                          {getAuthorName(firstPost.author)}
                          {formatDate(firstPost.publishedAt) && ` · ${formatDate(firstPost.publishedAt)}`}
                        </p>
                      </div>
                    </Link>
                  )}

                  {restPosts.map((post, idx) => (
                    <Link
                      key={post._id || idx}
                      href={`/post?slug=${post.slug || (post._id ? `post-${String(post._id)}` : "")}`}
                      className="group flex items-center gap-2 py-1.5 border-t border-gray-100 dark:border-white/5"
                    >
                      <span className="text-[10px] font-bold text-gray-300 dark:text-gray-600 tabular-nums w-4 shrink-0 group-hover:text-amber-400 dark:group-hover:text-amber-500 transition-colors">
                        {String(idx + 2).padStart(2, "0")}
                      </span>
                      <span className="text-[12px] font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {post.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
