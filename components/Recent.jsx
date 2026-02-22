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

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Big Title */}
        <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          Recent
        </h2>
        <div className="h-px bg-black w-24 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {normalizedPosts.map((post, index) => (
            <Link
              key={post._id || index}
              href={`/post?slug=${post.slug}`}
              className="group flex gap-6 border-b pb-10"
            >
              {/* Image */}
              <div className="relative w-24 h-24 shrink-0 overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover grayscale"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wide mb-2">
                  {post.category}
                </p>

                <h3 className="text-lg font-bold leading-snug group-hover:underline">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-16">
          <Link
            href="/explore"
            className="text-sm font-bold uppercase tracking-wide border-b border-black pb-1 inline-block"
          >
            View all posts
          </Link>
        </div>
      </div>
    </section>
  );
}
