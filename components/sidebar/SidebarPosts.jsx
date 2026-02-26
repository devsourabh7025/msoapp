"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function formatDate(date) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function SidebarPosts({ title = "Trending" }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch("/api/public/posts?limit=5&sort=viewsDesc");
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error("Error loading sidebar posts:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  return (
    <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
        <h4 className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-400">
          {title}
        </h4>
      </div>

      <div className="divide-y divide-gray-100 dark:divide-gray-800/50">
        {loading ? (
          [...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-3 p-4 animate-pulse">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 shrink-0" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-3 bg-gray-100 dark:bg-gray-800 w-full" />
                <div className="h-3 bg-gray-100 dark:bg-gray-800 w-2/3" />
                <div className="h-2 bg-gray-100 dark:bg-gray-800 w-20" />
              </div>
            </div>
          ))
        ) : posts.length > 0 ? (
          posts.map((post, i) => (
            <Link
              key={post._id || post.slug || i}
              href={`/post?slug=${post.slug}`}
              className="flex gap-3 p-4 group hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <span className="text-2xl font-black text-gray-200 dark:text-gray-800 leading-none w-6 shrink-0 pt-0.5">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold leading-snug text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                  {post.title}
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  {post.category && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                      {post.category}
                    </span>
                  )}
                  <span className="text-[10px] text-gray-400 dark:text-gray-500">
                    {formatDate(post.publishedAt)}
                  </span>
                </div>
              </div>
              {post.featuredImage && (
                <div className="relative flex-shrink-0 w-16 h-16 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
            </Link>
          ))
        ) : (
          <p className="text-xs text-gray-400 dark:text-gray-500 py-6 text-center">
            No posts yet
          </p>
        )}
      </div>
    </div>
  );
}
