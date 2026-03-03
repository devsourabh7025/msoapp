"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Users, ChevronRight } from "lucide-react";

const defaultSubsections = [
  { id: "mso-summits", name: "MSO Summits", description: "Flagship physical networking and award ceremonies.", enabled: true, posts: [] },
  { id: "webinars", name: "Webinars", description: "Virtual learning sessions on scaling and fundraising.", enabled: true, posts: [] },
  { id: "networking-meetups", name: "Networking Meetups", description: "Curated founder-only dinners and mixers.", enabled: true, posts: [] },
  { id: "global-roadshows", name: "Global Roadshows", description: "Tracking Maharashtra startups at international stages.", enabled: true, posts: [] },
  { id: "founder-forum", name: "The Founder Forum", description: "A gated community for MSO members to discuss challenges.", enabled: true, posts: [] },
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
      <section className="bg-gradient-to-b from-violet-50/50 to-white dark:from-violet-950/20 dark:to-gray-950 border-b border-gray-200 dark:border-white/10">
        <div className="home-container py-10">
          <div className="animate-pulse">
            <div className="h-5 bg-gray-200 dark:bg-gray-800 w-40 mb-2" />
            <div className="h-3 bg-gray-200 dark:bg-gray-800 w-72 mb-8" />
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-24 h-20 bg-gray-200 dark:bg-gray-800 rounded-lg shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 w-1/3" />
                    <div className="h-3 bg-gray-200 dark:bg-gray-800 w-full" />
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
      <section className="bg-gradient-to-b from-violet-50/50 to-white dark:from-violet-950/20 dark:to-gray-950 border-b border-gray-100 dark:border-white/5">
        <div className="home-container pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            </div>
            <div>
              <h2 className="home-section-heading text-gray-900 dark:text-white text-lg">{sectionTitle}</h2>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{sectionSubtitle}</p>
            </div>
          </div>
          <div className="border border-dashed border-violet-300 dark:border-violet-700/50 rounded-xl p-8 text-center bg-violet-50/30 dark:bg-violet-950/10">
            <p className="text-sm text-gray-600 dark:text-gray-400">No event posts yet</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Add 1 post per category in Admin → Customise → Events & Community
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-violet-50/50 to-white dark:from-violet-950/20 dark:to-gray-950 border-b border-gray-100 dark:border-white/5">
      <div className="home-container pt-8 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6 text-violet-600 dark:text-violet-400" />
          </div>
          <div>
            <h2 className="home-section-heading text-gray-900 dark:text-white text-xl">{sectionTitle}</h2>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{sectionSubtitle}</p>
          </div>
        </div>

        <div className="space-y-6">
          {subsectionsWithPosts.map((sub, idx) => {
            const post = sub.posts?.[0];
            if (!post) return null;
            const isEven = idx % 2 === 0;

            return (
              <Link
                key={sub.id}
                href={`/post?slug=${post.slug}`}
                className={`group block rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/50 hover:shadow-lg hover:border-violet-300/50 dark:hover:border-violet-600/30 transition-all duration-300`}
              >
                <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="md:w-2/5 relative aspect-[4/3] md:aspect-auto md:min-h-[180px] bg-gray-100 dark:bg-gray-800">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-900/30 dark:to-violet-800/20 flex items-center justify-center">
                        <Users className="w-12 h-12 text-violet-400 dark:text-violet-500/50" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-violet-500 text-white text-[10px] font-bold tracking-wider uppercase rounded">
                      {sub.name}
                    </div>
                  </div>
                  <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                    <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-1">
                      {sub.name}
                    </p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-2 line-clamp-1">{sub.description}</p>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">{post.excerpt}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">
                        {getAuthorName(post.author)}
                        {formatDate(post.publishedAt) && ` • ${formatDate(post.publishedAt)}`}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-violet-600 dark:text-violet-400 group-hover:gap-2 transition-all">
                        Read <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
