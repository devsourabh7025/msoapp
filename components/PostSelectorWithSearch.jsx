"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Search, X } from "lucide-react";

const MIN_SEARCH_LENGTH = 3;
const DEBOUNCE_MS = 300;
const CACHE_TTL_MS = 5 * 60 * 1000;

const searchCache = new Map();

function getCacheKey(search, category) {
  return `${(search || "").toLowerCase().trim()}|${category || ""}`;
}

function getCached(key) {
  const entry = searchCache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.ts > CACHE_TTL_MS) {
    searchCache.delete(key);
    return null;
  }
  return entry.data;
}

function setCache(key, data) {
  searchCache.set(key, { data, ts: Date.now() });
}

const getAuthorLabel = (author) =>
  typeof author === "object" ? author?.name : author || "Unknown";

export default function PostSelectorWithSearch({ onSelect, excludeIds = [], placeholder, requireCategoryFirst = false }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef(null);

  useEffect(() => {
    fetch("/api/public/categories")
      .then((r) => r.json())
      .then((d) => {
        if (Array.isArray(d?.categories)) {
          setCategories(d.categories.map((c) => c.name).filter(Boolean));
        }
      })
      .catch(() => {});
  }, []);

  const fetchPosts = useCallback(async (search, category) => {
    const needsSearch = !requireCategoryFirst;
    if (needsSearch && search.length < MIN_SEARCH_LENGTH) {
      setPosts([]);
      return;
    }
    if (requireCategoryFirst && !category) {
      setPosts([]);
      return;
    }
    const effectiveSearch = requireCategoryFirst && search.length < MIN_SEARCH_LENGTH ? "" : search;
    const key = getCacheKey(effectiveSearch || "(category-only)", category);
    const cached = getCached(key);
    if (cached) {
      setPosts(cached);
      return;
    }
    setLoading(true);
    try {
      const params = new URLSearchParams({ limit: "25" });
      if (category) params.set("category", category);
      if (effectiveSearch.length >= MIN_SEARCH_LENGTH) params.set("search", effectiveSearch);
      const res = await fetch(`/api/public/posts?${params}`);
      const data = await res.json();
      const list = data?.posts || [];
      setCache(key, list);
      setPosts(list);
    } catch {
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, [requireCategoryFirst]);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const q = searchQuery.trim();
    const category = categoryFilter || "";
    if (requireCategoryFirst && !category) {
      setPosts([]);
      return;
    }
    if (!requireCategoryFirst && q.length < MIN_SEARCH_LENGTH) {
      setPosts([]);
      return;
    }
    debounceRef.current = setTimeout(() => {
      fetchPosts(q || " ", category);
    }, DEBOUNCE_MS);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchQuery, categoryFilter, fetchPosts, requireCategoryFirst]);

  const filtered = posts.filter((p) => !excludeIds.includes(p._id));

  const showCategoryFirst = requireCategoryFirst;
  const categoryRequiredNotMet = requireCategoryFirst && !categoryFilter;

  return (
    <div className="mt-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 rounded">
      <div className="mb-4 space-y-3">
        <label className="block text-xs font-semibold text-gray-900 dark:text-white">
          {showCategoryFirst ? "1. Select Category" : "Search Posts"}
        </label>
        <div className="flex gap-2 flex-wrap">
          {showCategoryFirst && (
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500 min-w-[180px]"
            >
              <option value="">Select category first...</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          )}
          <div className={`relative flex-1 min-w-[180px] ${!showCategoryFirst ? "" : ""}`}>
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={showCategoryFirst ? "2. Search within category (optional)..." : `Type ${MIN_SEARCH_LENGTH}+ letters to search by title...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={showCategoryFirst && !categoryFilter}
              className="w-full pl-10 pr-9 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-60 disabled:cursor-not-allowed"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>
          {!showCategoryFirst && (
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500 min-w-[140px]"
            >
              <option value="">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          )}
        </div>
      </div>
      <div className="max-h-48 overflow-y-auto border border-gray-200 dark:border-gray-800 rounded">
        {categoryRequiredNotMet ? (
          <div className="p-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">Select a category first</p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">
              Choose a category above, then search or browse posts from that category
            </p>
          </div>
        ) : !requireCategoryFirst && searchQuery.trim().length < MIN_SEARCH_LENGTH ? (
          <div className="p-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">{placeholder}</p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">
              Type at least {MIN_SEARCH_LENGTH} letters to search posts by title
            </p>
          </div>
        ) : requireCategoryFirst && categoryFilter && !searchQuery.trim() ? (
          loading ? (
            <div className="p-6 text-center">
              <div className="inline-block w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-xs text-gray-500 mt-2">Loading posts...</p>
            </div>
          ) : filtered.length > 0 ? (
            filtered.map((post) => {
              const date = post.publishedAt || post.createdAt;
              const formatted = date ? new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "No date";
              return (
                <div
                  key={post._id}
                  onClick={() => onSelect(post)}
                  className="p-3 border-b border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors last:border-b-0"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-10 bg-red-600 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1">{post.title}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {post.category || "Uncategorized"} • {getAuthorLabel(post.author)} • {formatted}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">No posts in this category</p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">Try a different category or add search</p>
            </div>
          )
        ) : loading ? (
          <div className="p-6 text-center">
            <div className="inline-block w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-xs text-gray-500 mt-2">Searching...</p>
          </div>
        ) : filtered.length > 0 ? (
          filtered.map((post) => {
            const date = post.publishedAt || post.createdAt;
            const formatted = date ? new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "No date";
            return (
              <div
                key={post._id}
                onClick={() => onSelect(post)}
                className="p-3 border-b border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors last:border-b-0"
              >
                <div className="flex items-start gap-3">
                  <div className="w-1 h-10 bg-red-600 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1">{post.title}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {post.category || "Uncategorized"} • {getAuthorLabel(post.author)} • {formatted}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">No posts found</p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">
              Try a different search or category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
