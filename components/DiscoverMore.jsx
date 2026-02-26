"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import axios from "axios";

export default function DiscoverMore() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDiscoverPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "/api/public/posts?limit=12&sort=viewsAsc",
        );

        setPosts(
          Array.isArray(response.data?.posts) ? response.data.posts : [],
        );
      } catch (error) {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadDiscoverPosts();
  }, []);

  const getCategoryName = (cat) => {
    if (!cat) return null;
    if (typeof cat === "object" && cat?.name) return cat.name;
    if (typeof cat === "string") return cat;
    return null;
  };

  const columns = useMemo(() => {
    const colCount = 3;
    const perCol = Math.ceil(posts.length / colCount);
    const result = [];

    for (let i = 0; i < colCount; i++) {
      result.push(posts.slice(i * perCol, (i + 1) * perCol));
    }

    return result;
  }, [posts]);

  if (!loading && posts.length === 0) return null;

  return (
    <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/5">
      <div className="home-container py-10">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="inline-block w-8 h-[3px] bg-red-600" />
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white">
            Discover More
          </h2>
          <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-3 px-0 md:px-6 first:pl-0 last:pr-0">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="h-4 bg-gray-100 dark:bg-gray-800 animate-pulse" />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {columns.map((colPosts, colIndex) => (
              <div
                key={colIndex}
                className={`${
                  colIndex > 0 ? "md:pl-6 md:border-l border-gray-200 dark:border-white/10" : ""
                } ${colIndex < columns.length - 1 ? "md:pr-6" : ""} ${
                  colIndex > 0 ? "mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 dark:border-white/5" : ""
                }`}
              >
                <div className="divide-y divide-gray-100 dark:divide-white/5">
                  {colPosts.map((post, index) => (
                    <Link
                      key={post._id || post.slug || index}
                      href={`/post?slug=${post.slug}`}
                      className="group flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                    >
                      <span className="text-lg font-black text-gray-200 dark:text-gray-800 leading-none mt-0.5 select-none w-5 shrink-0 group-hover:text-red-200 dark:group-hover:text-red-900/50 transition-colors tabular-nums">
                        {colIndex * Math.ceil(posts.length / 3) + index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        {getCategoryName(post.category) && (
                          <span className="text-[10px] font-bold tracking-wider uppercase text-red-600 dark:text-red-400">
                            {getCategoryName(post.category)}
                          </span>
                        )}
                        <h3 className="text-[13px] font-semibold leading-snug text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                          {post.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
