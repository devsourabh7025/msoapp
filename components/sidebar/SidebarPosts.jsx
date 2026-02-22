"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function SidebarPosts({ title = "You May Like" }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch(
          "/api/public/posts?limit=3&sort=viewsDesc"
        );
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
    <div className="border border-gray-300 dark:border-gray-600 overflow-hidden bg-white dark:bg-black">
      <div className="bg-black dark:bg-white px-6 py-4">
        <h4 className="font-bold text-sm text-white dark:text-black uppercase tracking-wider">
          {title}
        </h4>
      </div>

      <div className="p-5 space-y-5 bg-white dark:bg-black">
        {loading ? (
          [...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-4 animate-pulse">
              <div className="w-20 h-20 bg-gray-200 dark:bg-gray-800 shrink-0 border border-gray-300 dark:border-gray-600" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 w-full" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 w-24" />
              </div>
            </div>
          ))
        ) : posts.length > 0 ? (
          posts.map((post, i) => (
            <Link
              key={post._id || post.slug || i}
              href={`/post?slug=${post.slug}`}
              className="flex gap-4 group transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative flex-shrink-0 w-20 h-20 overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700 group-hover:ring-gray-900 dark:group-hover:ring-white transition-all duration-300">
                {post.featuredImage ? (
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 grayscale"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 dark:bg-gray-600" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold leading-snug text-black dark:text-white group-hover:underline line-clamp-2">
                  {post.title}
                </p>
                <span className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-1.5 mt-2">
                  <Clock size={12} className="opacity-70" />
                  <span>{formatDate(post.publishedAt)}</span>
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-300 py-4 text-center">
            No posts yet
          </p>
        )}
      </div>
    </div>
  );
}
