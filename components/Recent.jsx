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
      <section className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <div className="h-8 bg-gray-200 dark:bg-slate-700 rounded w-48 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-3 p-2">
                <div className="w-16 h-16 bg-gray-200 dark:bg-slate-700 rounded animate-pulse flex-shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-3/4 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded w-full animate-pulse"></div>
                  <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded w-2/3 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded w-1/2 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (normalizedPosts.length === 0) {
    return null; // Don't show section if no posts
  }

  return (
    <section className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Recent Posts
          </h2>
        </div>

        {/* Recent Posts - 2 per row with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {normalizedPosts.map((post, index) => (
            <Link
              key={post._id || post.id || index}
              href={`/post?slug=${post.slug}`}
              className="group flex gap-3 p-2 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors rounded"
            >
              {/* Image */}
              <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-gray-100 dark:bg-slate-700">
                {post.featuredImage ? (
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="64px"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-700"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors line-clamp-1 mb-1">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-1.5 leading-relaxed">
                    {post.excerpt.length > 120 ? post.excerpt.substring(0, 120) + '...' : post.excerpt}
                  </p>
                )}
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <span>{formatTimeAgo(post.publishedAt)}</span>
                  <span className="text-gray-300 dark:text-gray-600">•</span>
                  <span className="text-xs font-medium text-blue-500 dark:text-blue-400 uppercase tracking-wide truncate">
                    {post.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        {normalizedPosts.length >= 6 && (
          <div className="mt-4 text-center">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-medium transition-colors"
            >
              View All Posts
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
