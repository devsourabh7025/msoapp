"use client";

import React, { useState, useEffect } from "react";
import { Star, Save, Search, X, Plus, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import axios from "axios";

export default function FeaturedCustomise() {
  // Featured content state
  const [featuredContent, setFeaturedContent] = useState({
    smbStories: [],
    herStories: [],
    socialStories: [],
  });

  // Featured settings state
  const [featuredSettings, setFeaturedSettings] = useState({
    title: "Featured",
    showSMBStory: true,
    showHerStory: true,
    showSocialStory: true,
    showSection: true,
  });

  // Posts list for selection
  const [allPosts, setAllPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Show post selection UI
  const [showPostSelector, setShowPostSelector] = useState({
    smb: false,
    her: false,
    social: false,
  });

  // Active subsection being edited
  const [activeSubsection, setActiveSubsection] = useState(null);

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

  // Load featured section data from API
  useEffect(() => {
    const loadFeaturedData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/settings/featured");
        if (response.data) {
          if (response.data.featured) {
            setFeaturedContent({
              smbStories: Array.isArray(response.data.featured.smbStories) ? response.data.featured.smbStories : [],
              herStories: Array.isArray(response.data.featured.herStories) ? response.data.featured.herStories : [],
              socialStories: Array.isArray(response.data.featured.socialStories) ? response.data.featured.socialStories : [],
            });
          }
          if (response.data.settings) {
            setFeaturedSettings(response.data.settings);
          }
        }
      } catch (error) {
        console.error("Error loading featured section:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedData();
    fetchAllPosts();
  }, []);

  // Handle settings change
  const handleSettingChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFeaturedSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle save
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await axios.put(
        "/api/settings/featured",
        {
          featured: featuredContent,
          settings: featuredSettings,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          timeout: 65000,
        }
      );

      alert(response.data.message || "Featured section saved successfully!");
    } catch (error) {
      console.error("Error saving featured section:", error);
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        "Failed to save featured section";
      alert(`Error: ${errorMessage}`);
    } finally {
      setSaving(false);
    }
  };

  // Filter posts based on search query
  const filteredPosts = searchQuery
    ? allPosts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Check if post is already in a subsection
  const isPostInSubsection = (postId, subsection) => {
    return featuredContent[subsection].some((post) => post._id === postId);
  };

  // Add post to subsection
  const addPostToSubsection = (post, subsection) => {
    if (!isPostInSubsection(post._id, subsection)) {
      setFeaturedContent((prev) => ({
        ...prev,
        [subsection]: [...prev[subsection], post],
      }));
      setSearchQuery("");
      setShowPostSelector((prev) => ({ ...prev, [subsection]: false }));
      setActiveSubsection(null);
    }
  };

  // Remove post from subsection
  const removePostFromSubsection = (postId, subsection) => {
    setFeaturedContent((prev) => ({
      ...prev,
      [subsection]: prev[subsection].filter((post) => post._id !== postId),
    }));
  };

  // Move post up/down in subsection
  const movePost = (index, direction, subsection) => {
    const newContent = [...featuredContent[subsection]];
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < newContent.length) {
      [newContent[index], newContent[newIndex]] = [
        newContent[newIndex],
        newContent[index],
      ];
      setFeaturedContent((prev) => ({
        ...prev,
        [subsection]: newContent,
      }));
    }
  };

  // Render subsection editor
  const renderSubsection = (subsection, title, key) => {
    const posts = featuredContent[subsection];
    const isActive = activeSubsection === subsection;

    return (
      <div key={key} className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {posts.length} post{posts.length !== 1 ? "s" : ""} selected
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveSubsection(isActive ? null : subsection);
                setShowPostSelector((prev) => ({ ...prev, [subsection]: !prev[subsection] }));
              }}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors"
            >
              <Plus size={16} />
              Add Post
            </button>
          </div>
        </div>

        {/* Post Selector */}
        {showPostSelector[subsection] && (
          <div className="mb-6 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Search Posts
              </label>
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Type to search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
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
                  {filteredPosts
                    .filter((post) => !isPostInSubsection(post._id, subsection))
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
                          onClick={() => addPostToSubsection(post, subsection)}
                          className="p-3 border-b border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-1 h-12 bg-purple-600 rounded-full shrink-0"></div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1.5">
                                {post.title}
                              </div>
                              <div className="flex items-center gap-2 flex-wrap text-xs text-gray-600 dark:text-gray-400">
                                <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                                  {post.category || "Uncategorized"}
                                </span>
                                <span>•</span>
                                <span>{post.author?.name || "Unknown"}</span>
                                <span>•</span>
                                <span>{formattedDate}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  {filteredPosts.filter((post) => !isPostInSubsection(post._id, subsection))
                    .length === 0 && (
                    <div className="p-8 text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">No posts found</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        Try a different search term
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Start typing to search
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    Search posts by title to add them to {title}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Posts List */}
        {posts.length > 0 ? (
          <div className="space-y-2">
            {posts.map((post, index) => (
              <div
                key={post._id}
                className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-8 h-8 rounded bg-purple-600 text-white flex items-center justify-center shrink-0 text-xs font-semibold">
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
                  <div className="flex items-center gap-2">
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => movePost(index, "up", subsection)}
                        className="p-1.5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                        title="Move up"
                      >
                        <ArrowUp size={14} />
                      </button>
                    )}
                    {index < posts.length - 1 && (
                      <button
                        type="button"
                        onClick={() => movePost(index, "down", subsection)}
                        className="p-1.5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                        title="Move down"
                      >
                        <ArrowDown size={14} />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => removePostFromSubsection(post._id, subsection)}
                      className="p-1.5 text-red-500 hover:text-red-700 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                      title="Remove"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded border border-gray-200 dark:border-gray-700 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">No posts in {title}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              Click "Add Post" to add posts to this subsection
            </p>
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Loading featured section...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
            <Star className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Featured Section
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Manage featured posts displayed in the featured section
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Settings Section */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Section Settings
          </h2>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="featured-title"
                className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
              >
                Section Title
              </label>
              <input
                type="text"
                id="featured-title"
                name="title"
                value={featuredSettings.title}
                onChange={handleSettingChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Column Visibility
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured-showSMBStory"
                  name="showSMBStory"
                  checked={featuredSettings.showSMBStory}
                  onChange={handleSettingChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600"
                />
                <label
                  htmlFor="featured-showSMBStory"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
                  Show SMB Story Column
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured-showHerStory"
                  name="showHerStory"
                  checked={featuredSettings.showHerStory}
                  onChange={handleSettingChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600"
                />
                <label
                  htmlFor="featured-showHerStory"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
                  Show Her Story Column
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured-showSocialStory"
                  name="showSocialStory"
                  checked={featuredSettings.showSocialStory}
                  onChange={handleSettingChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600"
                />
                <label
                  htmlFor="featured-showSocialStory"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
                  Show Social Story Column
                </label>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured-showSection"
                name="showSection"
                checked={featuredSettings.showSection}
                onChange={handleSettingChange}
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600"
              />
              <label
                htmlFor="featured-showSection"
                className="text-sm font-medium text-gray-900 dark:text-white"
              >
                Show Featured Section
              </label>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          {renderSubsection("smbStories", "SMB Story", "smb")}
          {renderSubsection("herStories", "Her Story", "her")}
          {renderSubsection("socialStories", "Social Story", "social")}
        </div>

        {/* Save Button */}
        <div className="flex justify-end gap-3">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save size={18} />
            {saving ? "Saving..." : "Save Featured Section"}
          </button>
        </div>
      </form>
    </div>
  );
}
