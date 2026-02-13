"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import axios from "axios";

export default function DiscoverMore() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDiscoverPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "/api/public/posts?limit=9&sort=viewsAsc"
        );
        const data = response.data.posts || [];
        setPosts(data);
      } catch (error) {
        console.error("Error loading discover posts:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    loadDiscoverPosts();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950/50 py-10 sm:py-12">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.03] via-transparent to-amber-500/[0.03] dark:from-violet-400/[0.04] dark:to-amber-400/[0.04] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Discover more
          </h2>
          <div className="mt-2 h-px w-12 rounded-full bg-gradient-to-r from-violet-500 to-amber-500 dark:from-violet-400 dark:to-amber-400" />
        </div>

        {loading ? (
          <div className="space-y-2">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="h-5 bg-gray-200/80 dark:bg-gray-800 rounded animate-pulse"
              />
            ))}
          </div>
        ) : posts.length > 0 ? (
          <ul className="flex flex-col gap-2">
            {posts.map((post, index) => (
              <li key={post._id || post.slug || index}>
                <Link
                  href={`/post?slug=${post.slug}`}
                  className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 dark:bg-violet-500 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="min-w-0 truncate">{post.title}</span>
                  <ChevronRight
                    size={14}
                    className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-violet-500"
                  />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/60 dark:border-white/10 py-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No posts yet
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Publish posts to see them here
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
