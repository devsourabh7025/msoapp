"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const POSTS_LIMIT_FIRST = 5;
const POSTS_LIMIT_OTHERS = 3;

const defaultSubsections = [
  { id: "mso-summits", name: "MSO Summits", slug: "mso-summits", description: "Flagship physical networking and award ceremonies.", enabled: true, posts: [] },
  { id: "webinars", name: "Webinars", slug: "webinars", description: "Virtual learning sessions on scaling and fundraising.", enabled: true, posts: [] },
  { id: "networking-meetups", name: "Networking Meetups", slug: "networking-meetups", description: "Curated founder-only dinners and mixers.", enabled: true, posts: [] },
  { id: "global-roadshows", name: "Global Roadshows", slug: "global-roadshows", description: "Tracking Maharashtra startups at international stages.", enabled: true, posts: [] },
  { id: "founder-forum", name: "The Founder Forum", slug: "founder-forum", description: "A gated community for MSO members to discuss challenges.", enabled: true, posts: [] },
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

export default function EventsCommunity({ initialContent, initialSettings }) {
  const [content, setContent] = useState(initialContent ?? null);
  const [settings, setSettings] = useState(initialSettings ?? null);
  const [loading, setLoading] = useState(!initialContent && !initialSettings);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const response = await axios.get("/api/settings/events-community");
        if (!isMounted) return;
        if (response.data?.content) setContent(response.data.content);
        else setContent({ subsections: defaultSubsections });
        if (response.data?.settings) setSettings(response.data.settings);
        else setSettings({ title: "Events & Community", subtitle: "Turning readers into a networked community." });
      } catch (error) {
        if (isMounted) {
          setContent({ subsections: defaultSubsections });
          setSettings({ title: "Events & Community", subtitle: "Turning readers into a networked community." });
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
  const sectionTitle = settings?.title || "Events & Community";
  const sectionSubtitle = settings?.subtitle || "Turning readers into a networked community.";

  if (loading) {
    return (
      <section className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-white/10">
        <div className="home-container py-10">
          <div className="animate-pulse">
            <div className="h-5 bg-gray-200 dark:bg-gray-800 w-36 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 md:row-span-2 aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded-lg" />
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[3/2] bg-gray-200 dark:bg-gray-800 rounded-lg" />
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/2] bg-gray-200 dark:bg-gray-800 rounded-lg" />
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
            <h2 className="home-section-heading text-gray-900 dark:text-white">{sectionTitle}</h2>
            {sectionSubtitle && <p className="text-[11px] text-gray-500 dark:text-gray-400">{sectionSubtitle}</p>}
            <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
          </div>
          <div className="border border-dashed border-red-200 dark:border-red-900/50 rounded-xl p-8 text-center bg-red-50/30 dark:bg-red-950/10">
            <p className="text-sm text-gray-600 dark:text-gray-400">No event posts yet</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Add posts in Admin → Customise → Events & Community</p>
          </div>
        </div>
      </section>
    );
  }

  const firstSub = subsectionsWithPosts[0];
  const firstPosts = (firstSub?.posts || []).slice(0, POSTS_LIMIT_FIRST);
  const otherSubsections = subsectionsWithPosts.slice(1);

  return (
    <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/5">
      <div className="home-container pt-8 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-8 h-[3px] bg-red-600" />
          <h2 className="home-section-heading text-gray-900 dark:text-white">{sectionTitle}</h2>
          {sectionSubtitle && <p className="text-[11px] text-gray-500 dark:text-gray-400">{sectionSubtitle}</p>}
          <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
        </div>

        {/* First subsection: up to 5 posts — featured + grid */}
        {firstPosts.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">{firstSub.name}</h3>
              {(firstSub.slug || firstSub.id?.replace(/_/g, "-")) && (
                <Link
                  href={`/explore/${firstSub.slug || firstSub.id?.replace(/_/g, "-")}`}
                  className="text-[10px] font-semibold text-red-600 dark:text-red-400 hover:underline"
                >
                  View all →
                </Link>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {firstPosts[0] && (
                <Link
                  href={`/post?slug=${firstPosts[0].slug || (firstPosts[0]._id ? `post-${String(firstPosts[0]._id)}` : "")}`}
                  className="group md:col-span-2 md:row-span-2"
                >
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-xl">
                    {firstPosts[0].featuredImage ? (
                      <Image
                        src={firstPosts[0].featuredImage}
                        alt={firstPosts[0].title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-base sm:text-lg font-bold text-white line-clamp-2 group-hover:text-red-300 transition-colors">
                        {firstPosts[0].title}
                      </h4>
                      <p className="mt-1 text-[11px] text-white/80">
                        {formatDate(firstPosts[0].publishedAt) || getAuthorName(firstPosts[0].author)}
                      </p>
                    </div>
                  </div>
                </Link>
              )}
              {firstPosts.slice(1, 5).map((post, idx) => (
                <Link
                  key={post._id || idx}
                  href={`/post?slug=${post.slug || (post._id ? `post-${String(post._id)}` : "")}`}
                  className="group"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-[1.05] transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                    )}
                  </div>
                  <h4 className="mt-2 text-[13px] font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {post.title}
                  </h4>
                  <p className="mt-0.5 text-[11px] text-gray-500 dark:text-gray-400">
                    {formatDate(post.publishedAt) || getAuthorName(post.author)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Other subsections: up to 3 posts each — compact 3-column grid */}
        {otherSubsections.map((sub) => {
          const posts = (sub.posts || []).slice(0, POSTS_LIMIT_OTHERS);
          if (posts.length === 0) return null;
          const slug = sub.slug || sub.id?.replace(/_/g, "-") || "";
          return (
            <div key={sub.id} className="mt-8 first:mt-0">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">{sub.name}</h3>
                {slug && (
                  <Link href={`/explore/${slug}`} className="text-[10px] font-semibold text-red-600 dark:text-red-400 hover:underline">
                    View all →
                  </Link>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {posts.map((post, idx) => (
                  <Link
                    key={post._id || idx}
                    href={`/post?slug=${post.slug || (post._id ? `post-${String(post._id)}` : "")}`}
                    className="group flex gap-3 p-3 rounded-lg border border-gray-200 dark:border-white/10 hover:border-red-200 dark:hover:border-red-900/50 hover:bg-red-50/20 dark:hover:bg-red-950/10 transition-all"
                  >
                    <div className="relative w-20 h-16 shrink-0 overflow-hidden rounded bg-gray-100 dark:bg-gray-800">
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-[1.05] transition-transform"
                          sizes="80px"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[13px] font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {post.title}
                      </h4>
                      <p className="mt-0.5 text-[11px] text-gray-500 dark:text-gray-400">
                        {formatDate(post.publishedAt) || getAuthorName(post.author)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
