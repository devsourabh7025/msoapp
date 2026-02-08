"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import axios from "axios";

export default function DiscoverMore() {
  const [categoriesWithPosts, setCategoriesWithPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDiscoverPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/public/posts?limit=100");
        const posts = response.data.posts || [];
        if (posts.length === 0) {
          setCategoriesWithPosts([]);
          setLoading(false);
          return;
        }
        const categoryMap = {};
        posts.forEach((post) => {
          if (post.category) {
            if (!categoryMap[post.category]) categoryMap[post.category] = [];
            categoryMap[post.category].push(post);
          }
        });
        const validCategories = Object.keys(categoryMap).filter((cat) => categoryMap[cat].length >= 3);
        const selectedCategories = validCategories.sort(() => Math.random() - 0.5).slice(0, 9);
        const categoriesData = selectedCategories.map((categoryName) => ({
          name: categoryName,
          posts: categoryMap[categoryName].sort(() => Math.random() - 0.5).slice(0, 3),
        }));
        setCategoriesWithPosts(categoriesData);
      } catch (error) {
        console.error("Error loading discover posts:", error);
        setCategoriesWithPosts([]);
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200/60 dark:border-white/10 p-4 animate-pulse">
                <div className="h-5 bg-gray-200/80 dark:bg-gray-800 rounded w-24 mb-3" />
                <div className="space-y-2">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-4 bg-gray-200/80 dark:bg-gray-800 rounded w-full" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : categoriesWithPosts.length > 0 ? (
          <div className="flex flex-wrap gap-6">
            {categoriesWithPosts.map((category, index) => (
              <div
                key={category.name || index}
                className="flex flex-col items-start"
              >
                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-violet-100 dark:bg-violet-500/20 text-violet-800 dark:text-violet-200 border border-violet-200/60 dark:border-violet-500/30 mb-3">
                  {category.name}
                </span>
                {category.posts?.length > 0 ? (
                  <ul className="flex flex-col gap-1.5">
                    {category.posts.map((post, postIndex) => (
                      <li key={post._id || post.slug || postIndex}>
                        <Link
                          href={`/post?slug=${post.slug}`}
                          className="group/link flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors line-clamp-1"
                        >
                          <span className="w-1 h-1 rounded-full bg-violet-400 dark:bg-violet-500 shrink-0 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          <span className="min-w-0 truncate">{post.title}</span>
                          <ChevronRight size={12} className="shrink-0 opacity-0 group-hover/link:opacity-100 transition-opacity text-violet-500" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-gray-400 dark:text-gray-500">No posts</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/60 dark:border-white/10 py-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">No posts yet</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Publish posts to see them here</p>
          </div>
        )}
      </div>
    </section>
  );
}
