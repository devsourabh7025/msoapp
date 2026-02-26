"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function Recent() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecentPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "/api/public/posts?limit=6&sort=publishedAt",
        );

        if (Array.isArray(response.data?.posts)) {
          setRecentPosts(response.data.posts);
        } else {
          setRecentPosts([]);
        }
      } catch (error) {
        setRecentPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadRecentPosts();
  }, []);

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
    if (!date) return "";
    try {
      return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "";
    }
  };

  const normalizedPosts = useMemo(() => {
    return recentPosts.map((post) => ({
      ...post,
      slug: post.slug || (post._id ? `post-${post._id}` : `post-${post.id}`),
      featuredImage: post.featuredImage || "/demo.png",
      category: post.category || "General",
      publishedAt:
        post.publishedAt || post.createdAt || new Date().toISOString(),
    }));
  }, [recentPosts]);

  if (loading || normalizedPosts.length === 0) return null;

  const lead = normalizedPosts[0];
  const secondary = normalizedPosts.slice(1, 3);
  const list = normalizedPosts.slice(3, 6);

  return (
    <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/5">
      <div className="home-container py-10">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-8 h-[3px] bg-red-600" />
          <h2 className="home-section-heading text-gray-900 dark:text-white">
            Recent
          </h2>
          <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
          <Link
            href="/explore"
            className="text-[11px] font-bold tracking-wide uppercase text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors shrink-0"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Lead story */}
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
                  {getCategoryName(lead.category) && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold tracking-wider uppercase">
                      {getCategoryName(lead.category)}
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-extrabold leading-tight text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {lead.title}
                  </h3>
                  {lead.excerpt && (
                    <p className="mt-2 text-[14px] leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-2">
                      {lead.excerpt}
                    </p>
                  )}
                  <div className="mt-2 flex items-center gap-2 text-[11px] tracking-wide uppercase text-gray-500">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      {getAuthorName(lead.author)}
                    </span>
                    <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600" />
                    <span>{formatDate(lead.publishedAt)}</span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Secondary + list */}
          <div className="col-span-1 lg:col-span-7 lg:pl-6 mt-8 lg:mt-0">
            {/* Two secondary cards */}
            {secondary.length > 0 && (
              <div className="grid grid-cols-2 gap-5 pb-5 border-b border-gray-200 dark:border-white/10">
                {secondary.map((post, index) => (
                  <Link
                    key={post._id || index}
                    href={`/post?slug=${post.slug}`}
                    className="group block"
                  >
                    <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                      {getCategoryName(post.category) && (
                        <span className="absolute top-2 left-2 px-2 py-0.5 bg-white/95 dark:bg-gray-900/95 text-[10px] font-bold text-red-600">
                          {getCategoryName(post.category)}
                        </span>
                      )}
                    </div>
                    <h4 className="mt-2.5 text-sm font-semibold leading-snug text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {post.title}
                    </h4>
                    {post.excerpt && (
                      <p className="mt-1 text-[12px] leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="mt-1.5 flex items-center gap-2 text-[11px] text-gray-500">
                      <span>{getAuthorName(post.author)}</span>
                      <span className="w-1 h-1 bg-gray-300 dark:bg-gray-700" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Remaining as numbered list */}
            {list.length > 0 && (
              <div className="divide-y divide-gray-100 dark:divide-white/5 mt-1">
                {list.map((post, index) => (
                  <Link
                    key={post._id || index}
                    href={`/post?slug=${post.slug}`}
                    className="group flex gap-4 py-3.5 first:pt-3"
                  >
                    <span className="text-2xl font-black text-gray-200 dark:text-gray-800 leading-none mt-0.5 select-none tabular-nums w-7 shrink-0 group-hover:text-red-200 dark:group-hover:text-red-900/50 transition-colors">
                      {String(index + 4).padStart(2, "0")}
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
                      {post.excerpt && (
                        <p className="mt-1 text-[12px] leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="mt-1 flex items-center gap-2 text-[11px] text-gray-400 dark:text-gray-600">
                        <span>{getAuthorName(post.author)}</span>
                        <span className="w-1 h-1 bg-gray-300 dark:bg-gray-700" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
