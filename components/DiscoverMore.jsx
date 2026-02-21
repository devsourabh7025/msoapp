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
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Big Title */}
        <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          Discover More
        </h2>
        <div className="h-px bg-black w-24 mb-16" />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-4">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="h-4 bg-gray-200 animate-pulse" />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16">
            {columns.map((colPosts, colIndex) => (
              <ul key={colIndex} className="space-y-6">
                {colPosts.map((post, index) => (
                  <li key={post._id || post.slug || index}>
                    <Link
                      href={`/post?slug=${post.slug}`}
                      className="block text-lg font-medium leading-snug hover:underline"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
