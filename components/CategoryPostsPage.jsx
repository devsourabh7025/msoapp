"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Search, Filter } from "lucide-react";

/**
 * Reusable page that shows posts from an assigned category.
 * Used by /pages/[slug] and /domain - no Customise needed.
 * Category is assigned when creating/editing the page in Admin → Pages.
 */
export default function CategoryPostsPage({ slug, pageTitle, fallbackTitle = "Posts" }) {
  const [page, setPage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("publishedAt");

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setNotFound(false);
        const pageRes = await fetch(`/api/public/pages/${encodeURIComponent(slug)}`);
        if (!pageRes.ok) {
          setPage(null);
          setPosts([]);
          setNotFound(pageRes.status === 404);
          setLoading(false);
          return;
        }
        const { page: p } = await pageRes.json();
        setPage(p);
        if (p?.category) {
          const postsRes = await fetch(
            `/api/public/posts?category=${encodeURIComponent(p.category)}&sort=${sortBy}&limit=100`
          );
          if (postsRes.ok) {
            const { posts: ps } = await postsRes.json();
            setPosts(ps || []);
          } else {
            setPosts([]);
          }
        } else {
          setPosts([]);
        }
      } catch (error) {
        console.error("Error fetching page posts:", error);
        setPage(null);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug, sortBy]);

  const getAuthorName = (author) => {
    if (!author) return "Editorial Team";
    if (typeof author === "object" && author?.name) return author.name;
    return author;
  };

  const formatTimeAgo = (date) => {
    if (!date) return "Recently";
    const now = new Date();
    const postDate = new Date(date);
    const diffInSeconds = Math.floor((now - postDate) / 1000);
    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    return postDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    const q = searchQuery.toLowerCase();
    return posts.filter(
      (post) =>
        post.title?.toLowerCase().includes(q) ||
        post.excerpt?.toLowerCase().includes(q) ||
        post.category?.toLowerCase().includes(q)
    );
  }, [posts, searchQuery]);

  const title = pageTitle || page?.title || fallbackTitle;
  const category = page?.category || "";

  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Create this page in Admin → Pages and assign a category to show posts.
        </p>
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-black text-white hover:bg-gray-800 transition"
        >
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {loading
              ? "Loading..."
              : `${filteredPosts.length} ${filteredPosts.length === 1 ? "post" : "posts"}`}
          </p>

          {category ? (
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white appearance-none"
                >
                  <option value="publishedAt">Newest First</option>
                  <option value="createdAt">Oldest First</option>
                </select>
              </div>
            </div>
          ) : (
            !loading && (
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Assign a category to this page in Admin → Pages to show posts.
              </p>
            )
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square bg-gray-200 dark:bg-slate-700"></div>
                <div className="mt-4 space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-slate-700 w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-slate-700 w-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post._id || post.id}
                href={`/post?slug=${post.slug || (post._id ? `post-${post._id}` : `post-${post.id}`)}`}
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-slate-800">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500 grayscale"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 dark:bg-slate-600"></div>
                  )}
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <Clock size={12} />
                    <span>{formatTimeAgo(post.publishedAt || post.createdAt)}</span>
                    <span className="text-gray-300">•</span>
                    <span className="font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="text-xs text-gray-500">{getAuthorName(post.author)}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">
              {searchQuery
                ? "No posts match your search"
                : category
                ? "No published posts in this category yet"
                : "Assign a category to this page in Admin → Pages"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
