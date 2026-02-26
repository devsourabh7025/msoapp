"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";

export default function CategoryPostsPage({ slug, pageTitle, fallbackTitle = "Posts" }) {
  const [page, setPage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("publishedAt");
  const [activeCat, setActiveCat] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) { setLoading(false); return; }
      try {
        setLoading(true);
        setNotFound(false);
        const pageRes = await fetch(`/api/public/pages/${encodeURIComponent(slug)}`);
        if (!pageRes.ok) {
          setPage(null); setPosts([]); setNotFound(pageRes.status === 404); setLoading(false); return;
        }
        const { page: p } = await pageRes.json();
        setPage(p);

        const cats = p?.categories?.length > 0 ? p.categories : (p?.category ? [p.category] : []);
        if (cats.length > 0) {
          const allPosts = [];
          for (const cat of cats) {
            const postsRes = await fetch(
              `/api/public/posts?category=${encodeURIComponent(cat)}&sort=${sortBy}&limit=100`
            );
            if (postsRes.ok) {
              const { posts: ps } = await postsRes.json();
              if (ps) allPosts.push(...ps);
            }
          }
          const uniqueMap = new Map();
          allPosts.forEach((p) => { if (!uniqueMap.has(p._id)) uniqueMap.set(p._id, p); });
          const unique = Array.from(uniqueMap.values());
          unique.sort((a, b) => {
            const da = new Date(a.publishedAt || a.createdAt);
            const db = new Date(b.publishedAt || b.createdAt);
            return sortBy === "createdAt" ? da - db : db - da;
          });
          setPosts(unique);
        } else { setPosts([]); }
      } catch (error) {
        console.error("Error fetching page posts:", error);
        setPage(null); setPosts([]);
      } finally { setLoading(false); }
    };
    fetchData();
  }, [slug, sortBy]);

  const getAuthorName = (author) => {
    if (!author) return "Editorial Team";
    if (typeof author === "object" && author?.name) return author.name;
    return author;
  };

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const pageCategories = useMemo(() => {
    return page?.categories?.length > 0 ? page.categories : (page?.category ? [page.category] : []);
  }, [page]);

  const filteredPosts = useMemo(() => {
    let result = posts;
    if (activeCat !== "all") result = result.filter((p) => p.category?.toLowerCase() === activeCat.toLowerCase());
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => p.title?.toLowerCase().includes(q) || p.excerpt?.toLowerCase().includes(q));
    }
    return result;
  }, [posts, searchQuery, activeCat]);

  const title = pageTitle || page?.title || fallbackTitle;
  const hasContent = page?.content && page.content.replace(/<[^>]*>/g, "").trim();
  const leadPost = filteredPosts[0];
  const restPosts = filteredPosts.slice(1);

  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-950">
        <h1 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Page Not Found</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Create this page in Admin → Pages and assign a category to show posts.
        </p>
        <Link href="/" className="px-4 py-2 bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition-colors">
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-end justify-between gap-4 mb-1">
            <div>
              {pageCategories.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {pageCategories.map((c) => (
                    <span key={c} className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-400">
                      {c}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="section-title text-gray-900 dark:text-white tracking-tight">
                {title}
              </h1>
            </div>
            {!loading && (
              <span className="text-xs text-gray-400 dark:text-gray-500 font-bold whitespace-nowrap pb-1">
                {filteredPosts.length} {filteredPosts.length === 1 ? "story" : "stories"}
              </span>
            )}
          </div>

          {/* Category tabs if multiple */}
          {pageCategories.length > 1 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              <button
                onClick={() => setActiveCat("all")}
                className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider border transition-all ${
                  activeCat === "all"
                    ? "bg-red-600 text-white border-red-600"
                    : "border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-red-600 hover:text-red-600"
                }`}
              >
                All
              </button>
              {pageCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider border transition-all ${
                    activeCat === c
                      ? "bg-red-600 text-white border-red-600"
                      : "border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-red-600 hover:text-red-600"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          {/* Search + Sort */}
          {pageCategories.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={16} />
                <input
                  type="text"
                  placeholder="Search stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-red-600 dark:focus:border-red-400 transition-colors"
                />
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-3 pr-8 py-2.5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-red-600 appearance-none transition-colors"
                >
                  <option value="publishedAt">Newest First</option>
                  <option value="createdAt">Oldest First</option>
                  <option value="viewsDesc">Most Read</option>
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Page Content (HTML from editor) */}
      {hasContent && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-200 dark:border-gray-800">
          <div
            className="prose prose-sm sm:prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
      )}

      {/* Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {loading ? (
          <div className="space-y-6">
            <div className="animate-pulse grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-900" />
              <div className="space-y-3 py-4">
                <div className="h-3 bg-gray-100 dark:bg-gray-900 w-20" />
                <div className="h-6 bg-gray-100 dark:bg-gray-900 w-3/4" />
                <div className="h-4 bg-gray-100 dark:bg-gray-900 w-full" />
              </div>
            </div>
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="space-y-8">
            {leadPost && (
              <Link
                href={`/post?slug=${leadPost.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8 border-b border-gray-200 dark:border-gray-800"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900">
                  {leadPost.featuredImage ? (
                    <Image src={leadPost.featuredImage} alt={leadPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 50vw" />
                  ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-800" />
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-400 mb-2">{leadPost.category}</span>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white leading-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-3">{leadPost.title}</h2>
                  {leadPost.excerpt && <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4">{leadPost.excerpt}</p>}
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 dark:text-gray-500">
                    <span className="font-bold text-gray-600 dark:text-gray-300">{getAuthorName(leadPost.author)}</span>
                    <span>·</span>
                    <span>{formatDate(leadPost.publishedAt || leadPost.createdAt)}</span>
                  </div>
                </div>
              </Link>
            )}

            {restPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
                {restPosts.map((post) => (
                  <Link key={post._id || post.id} href={`/post?slug=${post.slug}`} className="group border-b border-gray-100 dark:border-gray-800/50 pb-6 last:border-0">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900 mb-3">
                      {post.featuredImage ? (
                        <Image src={post.featuredImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      ) : (
                        <div className="w-full h-full bg-gray-200 dark:bg-gray-800" />
                      )}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-400">{post.category}</span>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1 mb-1.5 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">{post.title}</h3>
                    {post.excerpt && <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-2 leading-relaxed">{post.excerpt}</p>}
                    <div className="flex items-center gap-2 text-[11px] text-gray-400 dark:text-gray-500">
                      <span className="font-bold text-gray-600 dark:text-gray-300">{getAuthorName(post.author)}</span>
                      <span>·</span>
                      <span>{formatDate(post.publishedAt || post.createdAt)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-sm text-gray-400 dark:text-gray-500 mb-1">
              {searchQuery ? "No stories match your search" : pageCategories.length > 0 ? "No published stories in these categories yet" : "Assign categories to this page in Admin → Pages"}
            </p>
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-xs font-bold text-red-600 dark:text-red-400 hover:underline mt-2">Clear search</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
