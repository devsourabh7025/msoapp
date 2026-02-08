"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import axios from "axios";

export default function Recent() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch recent published posts from API
    const loadRecentPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/public/posts?limit=6&sort=publishedAt");
        if (response.data.posts && Array.isArray(response.data.posts)) {
          setRecentPosts(response.data.posts);
        } else {
          setRecentPosts([]);
        }
      } catch (error) {
        console.error("Error loading recent posts:", error);
        setRecentPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadRecentPosts();
  }, []);

  const getAuthorName = (author) => {
    if (!author) return "Editorial Team";
    if (typeof author === "object" && author?.name) {
      return author.name;
    }
    return author;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTimeAgo = (date) => {
    if (!date) return "Recently";
    const now = new Date();
    const postDate = new Date(date);
    const diffInSeconds = Math.floor((now - postDate) / 1000);
    
    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    return formatDate(date);
  };

  // Normalize and prepare recent posts
  const normalizedPosts = useMemo(() => {
    return recentPosts.map((post) => ({
      ...post,
      slug: post.slug || (post._id ? `post-${post._id}` : `post-${post.id}`),
      featuredImage: post.featuredImage || "/demo.png",
      author: post.author || { name: "Editorial Team" },
      excerpt: post.excerpt || "",
      category: post.category || "Uncategorized",
      publishedAt: post.publishedAt || post.createdAt || new Date().toISOString(),
    }));
  }, [recentPosts]);

  if (loading) {
    return (
      <section className="relative overflow-hidden bg-gray-50/80 dark:bg-gray-950/50 py-10 sm:py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/[0.03] via-transparent to-amber-500/[0.03] dark:from-sky-400/[0.04] dark:to-amber-400/[0.04] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="h-6 bg-gray-200/80 dark:bg-gray-800 rounded-full w-32 animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200/60 dark:border-white/10 animate-pulse">
                <div className="w-20 h-20 shrink-0 rounded-xl bg-gray-200/80 dark:bg-gray-800" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200/80 dark:bg-gray-800 rounded w-3/4" />
                  <div className="h-3 bg-gray-200/80 dark:bg-gray-800 rounded w-full" />
                  <div className="h-3 bg-gray-200/80 dark:bg-gray-800 rounded w-2/3" />
                  <div className="h-3 bg-gray-200/80 dark:bg-gray-800 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (normalizedPosts.length === 0) {
    return null;
  }

  // UI pattern: timeline / left-accent list
  return (
    <section className="relative overflow-hidden bg-gray-50/80 dark:bg-gray-950/50 py-10 sm:py-12">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/[0.03] via-transparent to-amber-500/[0.03] dark:from-sky-400/[0.04] dark:to-amber-400/[0.04] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Recent posts
          </h2>
          <div className="mt-2 h-px w-12 rounded-full bg-gradient-to-r from-sky-500 to-amber-500 dark:from-sky-400 dark:to-amber-400" />
        </div>

        <div className="relative border-l-2 border-sky-200 dark:border-sky-900/80 pl-6 sm:pl-8 space-y-0">
          {normalizedPosts.map((post, index) => (
            <Link
              key={post._id || post.id || index}
              href={`/post?slug=${post.slug}`}
              className="group relative flex gap-4 py-6 border-b border-gray-200/60 dark:border-gray-800 last:border-0 last:pb-0"
            >
              <span className="absolute -left-[29px] sm:-left-[33px] top-8 w-3 h-3 rounded-full bg-sky-500 dark:bg-sky-400 ring-4 ring-gray-50 dark:ring-gray-950 group-hover:bg-amber-500 group-hover:ring-amber-100 dark:group-hover:ring-gray-900 transition-colors" />
              <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
                {post.featuredImage ? (
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="64px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/50 to-amber-500/50" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 mb-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1 mb-1">
                    {post.excerpt.length > 100 ? post.excerpt.substring(0, 100) + "…" : post.excerpt}
                  </p>
                )}
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>{formatTimeAgo(post.publishedAt)}</span>
                  <span>·</span>
                  <span className="font-medium text-sky-600 dark:text-sky-400 uppercase tracking-wide truncate">
                    {post.category}
                  </span>
                </div>
              </div>
              <ArrowRight size={16} className="shrink-0 text-sky-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all self-center" />
            </Link>
          ))}
        </div>

        {normalizedPosts.length >= 6 && (
          <div className="mt-8 text-center">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-sky-700 dark:text-sky-400 border border-sky-300 dark:border-sky-600/50 hover:bg-sky-50 dark:hover:bg-sky-500/10 transition-colors"
            >
              View all posts
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
