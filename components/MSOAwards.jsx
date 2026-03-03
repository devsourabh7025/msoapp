"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Award, ChevronRight } from "lucide-react";

const defaultSubsections = [
  { id: "mso-maharashtra-50", name: "MSO Maharashtra 50", description: "The annual definitive list of the state's top startups.", enabled: true, posts: [] },
  { id: "solapur-icons", name: "Solapur Icons", description: "Recognizing industrial and digital leaders in Solapur.", enabled: true, posts: [] },
  { id: "impact-honors", name: "Impact Honors", description: "Celebrating founders driving major Social/ESG changes.", enabled: true, posts: [] },
  { id: "emerging-leader", name: "Emerging Leader", description: "Highlighting student founders and young entrepreneurs.", enabled: true, posts: [] },
  { id: "hall-of-fame", name: "The Hall of Fame", description: "A permanent archive of legendary Maharashtra business icons.", enabled: true, posts: [] },
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
      <section className="bg-gradient-to-b from-amber-50/50 to-white dark:from-amber-950/20 dark:to-gray-950 border-b border-gray-200 dark:border-white/10">
        <div className="home-container py-10">
          <div className="animate-pulse">
            <div className="h-5 bg-gray-200 dark:bg-gray-800 w-32 mb-2" />
            <div className="h-3 bg-gray-200 dark:bg-gray-800 w-64 mb-8" />
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
      <section className="bg-gradient-to-b from-amber-50/50 to-white dark:from-amber-950/20 dark:to-gray-950 border-b border-gray-100 dark:border-white/5">
        <div className="home-container pt-8 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="home-section-heading text-gray-900 dark:text-white text-lg">{sectionTitle}</h2>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{sectionSubtitle}</p>
            </div>
          </div>
          <div className="border border-dashed border-amber-300 dark:border-amber-700/50 rounded-xl p-8 text-center bg-amber-50/30 dark:bg-amber-950/10">
            <p className="text-sm text-gray-600 dark:text-gray-400">No award posts yet</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Add 1 post per award category in Admin → Customise → MSO Awards
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-amber-50/50 to-white dark:from-amber-950/20 dark:to-gray-950 border-b border-gray-100 dark:border-white/5">
      <div className="home-container pt-8 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 text-amber-600 dark:text-amber-400" />
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
                className={`group block rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/50 hover:shadow-lg hover:border-amber-300/50 dark:hover:border-amber-600/30 transition-all duration-300 ${
                  isEven ? "" : ""
                }`}
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
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/20 flex items-center justify-center">
                        <Award className="w-12 h-12 text-amber-400 dark:text-amber-500/50" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-amber-500 text-white text-[10px] font-bold tracking-wider uppercase rounded">
                      {sub.name}
                    </div>
                  </div>
                  <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                    <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
                      {sub.name}
                    </p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-2 line-clamp-1">{sub.description}</p>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2 mb-2">
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
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 group-hover:gap-2 transition-all">
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
