"use client";

import React, { useState, useEffect } from "react";
import { Layout, Save, Search, X } from "lucide-react";
import axios from "axios";

export default function HeroCustomise() {
  // Hero content state
  const [heroContent, setHeroContent] = useState({
    mainArticle: null,
    topPicks: [],
    discussionTable: [],
  });

  // Hero settings state
  const [heroSettings, setHeroSettings] = useState({
    title: "The Big Edit",
    showNewsletter: true,
    newsletterTitle: "Newsletter",
    newsletterPlaceholder: "Enter your Email",
    showSection: true,
  });

  // Posts list for selection
  const [allPosts, setAllPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  const getAuthorLabel = (author) =>
    typeof author === "object" ? author?.name : author || "Unknown";

  // Show post selection UI
  const [showPostSelector, setShowPostSelector] = useState({
    heroMain: false,
    heroTopPicks: false,
    heroDiscussionTable: false,
  });

  // Fetch all posts for selection
  const fetchAllPosts = async () => {
    try {
      const response = await axios.get("/api/public/posts?limit=1000");
      if (response.data && response.data.posts) {
        setAllPosts(response.data.posts);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoadingPosts(false);
    }
  };

  // Load hero section data from API (with credentials so auth works if ever required)
  useEffect(() => {
    const loadHeroData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/settings/hero", {
          withCredentials: true,
          headers: { "Cache-Control": "no-cache" },
        });
        const data = response.data;
        if (data && typeof data === "object") {
          if (data.hero && typeof data.hero === "object") {
            setHeroContent({
              mainArticle: data.hero.mainArticle ?? null,
              topPicks: Array.isArray(data.hero.topPicks) ? data.hero.topPicks : [],
              discussionTable: Array.isArray(data.hero.discussionTable) ? data.hero.discussionTable : [],
            });
          }
          if (data.settings && typeof data.settings === "object") {
            setHeroSettings((prev) => ({ ...prev, ...data.settings }));
          }
        }
      } catch (error) {
        console.error("Error loading hero section:", error);
        // Keep initial state on error so form is still usable
      } finally {
        setLoading(false);
      }
    };

    loadHeroData();
    fetchAllPosts();
  }, []);

  // Handle settings change
  const handleSettingChange = (e) => {
    const { name, type, checked, value } = e.target;
    setHeroSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle save
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      // Cookies are automatically sent with axios requests, no need to manually set Authorization header
      const response = await axios.put(
        "/api/settings/hero",
        {
          hero: heroContent,
          settings: heroSettings,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Ensure cookies are sent
          timeout: 65000,
        }
      );

      alert(response.data.message || "Hero section saved successfully!");
    } catch (error) {
      console.error("Error saving hero section:", error);
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        "Failed to save hero section";
      alert(`Error: ${errorMessage}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-sm text-gray-500">Loading hero section...</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Hero Section</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Customize the hero section content and settings
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white dark:bg-slate-800  border border-gray-200 dark:border-gray-700">
          <div className="p-6">
            {/* Section Header */}
            <div className="mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Layout size={18} className="text-black" />
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Hero Section</h2>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Configure settings and content for the Hero section
              </p>
            </div>

            {/* Settings */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-200 dark:border-gray-700">
                <input
                  type="checkbox"
                  name="showSection"
                  id="hero-showSection"
                  checked={heroSettings.showSection}
                  onChange={handleSettingChange}
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                />
                <label htmlFor="hero-showSection" className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Show this section on homepage
                </label>
              </div>

              <div>
                <label htmlFor="hero-title" className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                  Section Title
                </label>
                <input
                  type="text"
                  id="hero-title"
                  name="title"
                  value={heroSettings.title}
                  onChange={handleSettingChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="showNewsletter"
                  id="hero-showNewsletter"
                  checked={heroSettings.showNewsletter}
                  onChange={handleSettingChange}
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                />
                <label htmlFor="hero-showNewsletter" className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Show Newsletter
                </label>
              </div>

              {heroSettings.showNewsletter && (
                <>
                  <div>
                    <label htmlFor="hero-newsletterTitle" className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                      Newsletter Title
                    </label>
                    <input
                      type="text"
                      id="hero-newsletterTitle"
                      name="newsletterTitle"
                      value={heroSettings.newsletterTitle}
                      onChange={handleSettingChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="hero-newsletterPlaceholder" className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                      Newsletter Placeholder
                    </label>
                    <input
                      type="text"
                      id="hero-newsletterPlaceholder"
                      name="newsletterPlaceholder"
                      value={heroSettings.newsletterPlaceholder}
                      onChange={handleSettingChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Content Section */}
            {loadingPosts ? (
              <div className="text-center py-8 text-sm text-gray-500">Loading posts...</div>
            ) : (
              <div className="space-y-6">
                {/* Main Featured Article */}
                <div className="bg-white dark:bg-gray-900 p-5  border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Main Featured Article
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Primary hero post</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setShowPostSelector((prev) => ({ ...prev, heroMain: !prev.heroMain }))}
                        className="px-4 py-2 text-xs font-medium bg-black hover:bg-gray-800 text-white rounded transition-colors"
                      >
                        {showPostSelector.heroMain ? "Cancel" : heroContent.mainArticle ? "Change Post" : "Select Post"}
                      </button>
                      {heroContent.mainArticle && (
                        <button
                          type="button"
                          onClick={() => {
                            setHeroContent((prev) => ({ ...prev, mainArticle: null }));
                            setShowPostSelector((prev) => ({ ...prev, heroMain: false }));
                          }}
                          className="px-4 py-2 text-xs font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>

                  {heroContent.mainArticle ? (
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-1 h-full bg-black  shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-2">
                            {heroContent.mainArticle.title}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <span className="px-2 py-0.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                              {heroContent.mainArticle.category || "Uncategorized"}
                            </span>
                            <span>•</span>
                            <span>{getAuthorLabel(heroContent.mainArticle.author)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded border border-gray-200 dark:border-gray-700 text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">No post selected</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Click "Select Post" to choose a featured article</p>
                    </div>
                  )}

                  {showPostSelector.heroMain && (
                    <div className="mt-4 bg-white dark:bg-gray-900  border border-gray-200 dark:border-gray-800 p-4">
                      <div className="mb-4">
                        <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                          Search Posts
                        </label>
                        <div className="relative">
                          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Type to search posts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-9 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                          />
                          {searchQuery && (
                            <button
                              type="button"
                              onClick={() => setSearchQuery("")}
                              className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                              <X size={16} />
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="max-h-64 overflow-y-auto border border-gray-200 dark:border-gray-800 rounded bg-white dark:bg-gray-900">
                        {searchQuery ? (
                          <>
                            {allPosts
                              .filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
                              .slice(0, 10)
                              .map((post) => {
                                const postDate = post.publishedAt || post.createdAt;
                                const formattedDate = postDate
                                  ? new Date(postDate).toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "short",
                                      day: "numeric",
                                    })
                                  : "No date";
                                return (
                                  <div
                                    key={post._id}
                                    onClick={() => {
                                      setHeroContent((prev) => ({
                                        ...prev,
                                        mainArticle: post,
                                      }));
                                      setShowPostSelector((prev) => ({ ...prev, heroMain: false }));
                                    }}
                                    className="p-3 border-b border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="w-1 h-12 bg-black  shrink-0"></div>
                                      <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1.5">
                                          {post.title}
                                        </div>
                                        <div className="flex items-center gap-2 flex-wrap text-xs text-gray-600 dark:text-gray-400">
                                          <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                                            {post.category || "Uncategorized"}
                                          </span>
                                          <span>•</span>
                                          <span>{getAuthorLabel(post.author)}</span>
                                          <span>•</span>
                                          <span>{formattedDate}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            {allPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                              <div className="p-8 text-center">
                                <p className="text-sm text-gray-500 dark:text-gray-400">No posts found</p>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Try a different search term</p>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="p-8 text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Start typing to search</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">Search posts by title to find the perfect featured article</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Top Picks Articles */}
                <div className="bg-white dark:bg-gray-900 p-5  border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Top Picks Articles</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Select up to 4 posts</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {heroContent.topPicks.length < 4 && (
                        <button
                          type="button"
                          onClick={() => setShowPostSelector((prev) => ({ ...prev, heroTopPicks: !prev.heroTopPicks }))}
                          className="px-4 py-2 text-xs font-medium bg-black hover:bg-gray-800 text-white rounded transition-colors"
                        >
                          {showPostSelector.heroTopPicks ? "Cancel" : "Add Post"}
                        </button>
                      )}
                      {heroContent.topPicks.length > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            setHeroContent((prev) => ({
                              ...prev,
                              topPicks: [],
                            }));
                          }}
                          className="px-4 py-2 text-xs font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors"
                        >
                          Clear All
                        </button>
                      )}
                    </div>
                  </div>

                  {heroContent.topPicks.length > 0 ? (
                    <div className="space-y-2 mb-4">
                      {heroContent.topPicks.map((post, index) => (
                        <div key={post._id} className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="w-6 h-6 rounded bg-black text-white flex items-center justify-center shrink-0 text-xs font-semibold">
                                {index + 1}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1 mb-1">
                                  {post.title}
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">
                                  <span className="px-2 py-0.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                                    {post.category || "Uncategorized"}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setHeroContent((prev) => ({
                                  ...prev,
                                  topPicks: prev.topPicks.filter((p) => p._id !== post._id),
                                }));
                              }}
                              className="p-1.5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors shrink-0"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded border border-gray-200 dark:border-gray-700 text-center mb-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">No posts selected</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Add up to 4 top pick articles</p>
                    </div>
                  )}

                  {heroContent.topPicks.length > 0 && (
                    <div className="text-center pt-3 border-t border-gray-200 dark:border-gray-800">
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        Selected: <span className="font-semibold text-gray-900 dark:text-white">{heroContent.topPicks.length} / 4</span>
                      </span>
                    </div>
                  )}

                  {showPostSelector.heroTopPicks && heroContent.topPicks.length < 4 && (
                    <div className="mt-4 bg-white dark:bg-gray-900  border border-gray-200 dark:border-gray-800 p-4">
                      <div className="mb-4">
                        <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">Search Posts</label>
                        <div className="relative">
                          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Type to search posts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-9 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                          />
                          {searchQuery && (
                            <button
                              type="button"
                              onClick={() => setSearchQuery("")}
                              className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                              <X size={16} />
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="max-h-64 overflow-y-auto border border-gray-200 dark:border-gray-800 rounded bg-white dark:bg-gray-900">
                        {searchQuery ? (
                          <>
                            {allPosts
                              .filter((post) => {
                                const isAlreadySelected = heroContent.topPicks.some((p) => p._id === post._id);
                                if (isAlreadySelected) return false;
                                return post.title.toLowerCase().includes(searchQuery.toLowerCase());
                              })
                              .slice(0, 10)
                              .map((post) => {
                                const postDate = post.publishedAt || post.createdAt;
                                const formattedDate = postDate
                                  ? new Date(postDate).toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "short",
                                      day: "numeric",
                                    })
                                  : "No date";
                                return (
                                  <div
                                    key={post._id}
                                    onClick={() => {
                                      setHeroContent((prev) => ({
                                        ...prev,
                                        topPicks: [...prev.topPicks, post],
                                      }));
                                      if (heroContent.topPicks.length + 1 >= 4) {
                                        setShowPostSelector((prev) => ({ ...prev, heroTopPicks: false }));
                                      }
                                    }}
                                    className="p-3 border-b border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="w-1 h-12 bg-black  shrink-0"></div>
                                      <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1.5">
                                          {post.title}
                                        </div>
                                        <div className="flex items-center gap-2 flex-wrap text-xs text-gray-600 dark:text-gray-400">
                                          <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                                            {post.category || "Uncategorized"}
                                          </span>
                                          <span>•</span>
                                          <span>{formattedDate}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            {allPosts.filter((post) => {
                              const isAlreadySelected = heroContent.topPicks.some((p) => p._id === post._id);
                              if (isAlreadySelected) return false;
                              return post.title.toLowerCase().includes(searchQuery.toLowerCase());
                            }).length === 0 && (
                              <div className="p-8 text-center">
                                <p className="text-sm text-gray-500 dark:text-gray-400">No posts found</p>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Try a different search term</p>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="p-8 text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Start typing to search</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">Search posts by title to add to top picks</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Discussion Table Articles */}
                <div className="bg-white dark:bg-gray-900 p-5  border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Discussion Table Articles</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Featured articles section (max 4 posts)</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setShowPostSelector((prev) => ({ ...prev, heroDiscussionTable: !prev.heroDiscussionTable }))}
                        className="px-4 py-2 text-xs font-medium bg-black hover:bg-gray-800 text-white rounded transition-colors"
                      >
                        {showPostSelector.heroDiscussionTable ? "Cancel" : "Add Post"}
                      </button>
                      {heroContent.discussionTable.length > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            setHeroContent((prev) => ({
                              ...prev,
                              discussionTable: [],
                            }));
                          }}
                          className="px-4 py-2 text-xs font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors"
                        >
                          Clear All
                        </button>
                      )}
                    </div>
                  </div>

                  {heroContent.discussionTable.length > 0 ? (
                    <div className="space-y-2 mb-4">
                      {heroContent.discussionTable.slice(0, 4).map((post) => (
                        <div key={post._id} className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="w-1 h-12 bg-black  shrink-0"></div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1 mb-1">
                                  {post.title}
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">
                                  <span>{getAuthorLabel(post.author)}</span>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setHeroContent((prev) => ({
                                  ...prev,
                                  discussionTable: prev.discussionTable.filter((p) => p._id !== post._id),
                                }));
                              }}
                              className="p-1.5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors shrink-0"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded border border-gray-200 dark:border-gray-700 text-center mb-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">No posts selected</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Add Discussion Table articles to display (max 4)</p>
                    </div>
                  )}

                  {heroContent.discussionTable.length > 0 && (
                    <div className="text-center pt-3 border-t border-gray-200 dark:border-gray-800">
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        Selected: <span className="font-semibold text-gray-900 dark:text-white">{heroContent.discussionTable.length} posts (max 4)</span>
                      </span>
                    </div>
                  )}

                  {showPostSelector.heroDiscussionTable && (
                    <div className="mt-4 bg-white dark:bg-gray-900  border border-gray-200 dark:border-gray-800 p-4">
                      <div className="mb-4">
                        <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">Search Posts</label>
                        <div className="relative">
                          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Type to search posts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-9 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                          />
                          {searchQuery && (
                            <button
                              type="button"
                              onClick={() => setSearchQuery("")}
                              className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                              <X size={16} />
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="max-h-64 overflow-y-auto border border-gray-200 dark:border-gray-800 rounded bg-white dark:bg-gray-900">
                        {searchQuery ? (
                          <>
                            {allPosts
                              .filter((post) => {
                                const isAlreadySelected = heroContent.discussionTable.some((p) => p._id === post._id);
                                if (isAlreadySelected) return false;
                                if (heroContent.discussionTable.length >= 4) return false;
                                return post.title.toLowerCase().includes(searchQuery.toLowerCase());
                              })
                              .slice(0, 10)
                              .map((post) => {
                                const postDate = post.publishedAt || post.createdAt;
                                const formattedDate = postDate
                                  ? new Date(postDate).toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "short",
                                      day: "numeric",
                                    })
                                  : "No date";
                                return (
                                  <div
                                    key={post._id}
                                    onClick={() => {
                                      const currentPosts = heroContent.discussionTable;
                                      if (currentPosts.length >= 4) {
                                        alert("Maximum 4 posts allowed in Discussion Table");
                                        return;
                                      }
                                      setHeroContent((prev) => ({
                                        ...prev,
                                        discussionTable: [...prev.discussionTable, post],
                                      }));
                                    }}
                                    className="p-3 border-b border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="w-1 h-12 bg-black  shrink-0"></div>
                                      <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1.5">
                                          {post.title}
                                        </div>
                                        <div className="flex items-center gap-2 flex-wrap text-xs text-gray-600 dark:text-gray-400">
                                          <span>{getAuthorLabel(post.author)}</span>
                                          <span>•</span>
                                          <span>{formattedDate}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            {allPosts.filter((post) => {
                              const isAlreadySelected = heroContent.discussionTable.some((p) => p._id === post._id);
                              if (isAlreadySelected) return false;
                              if (heroContent.discussionTable.length >= 4) return false;
                              return post.title.toLowerCase().includes(searchQuery.toLowerCase());
                            }).length === 0 && (
                              <div className="p-8 text-center">
                                <p className="text-sm text-gray-500 dark:text-gray-400">No posts found</p>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Try a different search term</p>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="p-8 text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Start typing to search</p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">Search posts by title to add to Discussion Table (max 4 posts)</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="flex justify-end pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-black to-black text-white px-4 py-1.5 text-xs rounded hover:from-gray-800 hover:to-gray-800 shadow-md shadow-red-500/25 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? (
                  <>
                    <div className="animate-spin  h-3.5 w-3.5 border-2 border-white border-t-transparent"></div>
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Save size={14} />
                    <span>Save Hero Changes</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
