"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Layout,
  Sparkles,
  Star,
  Save,
  TrendingUp,
  Clock,
  Eye,
  EyeOff,
  Plus,
  Trash2,
  Edit2,
  Search,
  X,
  Link as LinkIcon,
  ExternalLink,
} from "lucide-react";

// Section icons mapping
const sectionIcons = {
  hero: Layout,
  spotlight: Sparkles,
  featured: Star,
  trending: TrendingUp,
  header: Layout,
  footer: Layout,
};

export default function Customise() {
  const searchParams = useSearchParams();

  // Default section order (header and footer are always fixed, not in order)
  // Recent section is not included here as it's always shown and not customizable
  const defaultOrder = [
    { id: "hero", name: "Hero", component: "HeroFeatured", enabled: true },
    {
      id: "spotlight",
      name: "Spotlight",
      component: "SpotLight",
      enabled: true,
    },
    { id: "featured", name: "Featured", component: "Featured", enabled: true },
    {
      id: "trending",
      name: "Trending Now",
      component: "TrendingNow",
      enabled: true,
    },
  ];

  const [sectionOrder, setSectionOrder] = useState(defaultOrder);
  const [activeSection, setActiveSection] = useState(() => {
    // Get section from URL query param, default to "hero"
    return searchParams?.get("section") || "hero";
  });

  // Update active section when URL changes
  useEffect(() => {
    const section = searchParams?.get("section");
    if (section) {
      setActiveSection(section);
    }
  }, [searchParams]);

  // Section settings
  const [heroSettings, setHeroSettings] = useState({
    title: "Top Picks",
    showNewsletter: true,
    newsletterTitle: "Newsletter",
    newsletterPlaceholder: "Enter your Email",
    showSection: true,
  });

  const [spotlightSettings, setSpotlightSettings] = useState({
    title: "SpotLight",
    subtitle: "Featured Stories & Insights",
    showSection: true,
  });

  const [featuredSettings, setFeaturedSettings] = useState({
    title: "Featured",
    showSMBStory: true,
    showHerStory: true,
    showSocialStory: true,
    showSection: true,
  });

  const [trendingSettings, setTrendingSettings] = useState({
    title: "Trending Now",
    subtitle: "Latest stories making waves in Maharashtra's startup ecosystem",
    showSection: true,
  });

  const [headerSettings, setHeaderSettings] = useState({
    organizationName: "Maharashtra Startup Organisation",
    showSection: true,
  });

  const [footerSettings, setFooterSettings] = useState({
    description:
      "Maharashtra Startup Organisation - Empowering entrepreneurs and startups across Maharashtra with resources, funding opportunities, mentorship, and a thriving ecosystem for innovation and growth.",
    showSection: true,
  });

  // Section content data - loaded from server/database
  const [sectionContent, setSectionContent] = useState({
    hero: {
      mainArticle: null,
      topPicks: [],
      discussionTable: [],
    },
    spotlight: [],
    featured: {
      smbStories: [],
      herStories: [],
      socialStories: [],
    },
    trending: [],
    header: {
      organizationName: "Maharashtra Startup Organisation",
      socialLinks: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        youtube: "https://youtube.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    footer: {
      description:
        "Maharashtra Startup Organisation - Empowering entrepreneurs and startups across Maharashtra with resources, funding opportunities, mentorship, and a thriving ecosystem for innovation and growth.",
      email: "contact@maharashtrastartup.org",
      phone: "+91 123 456 7890",
      address: "Mumbai, Maharashtra, India",
      socialLinks: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        youtube: "https://youtube.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
  });

  // Posts list for selection
  const [allPosts, setAllPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [saving, setSaving] = useState(false);

  const [editingItem, setEditingItem] = useState(null);
  const [editingSection, setEditingSection] = useState(null);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Show post selection UI
  const [showPostSelector, setShowPostSelector] = useState({
    heroMain: false,
    heroTopPicks: false,
    heroDiscussionTable: false,
    spotlight: false,
    featured: false,
    trending: false,
  });

  // Fetch all posts for selection
  const fetchAllPosts = async () => {
    try {
      setLoadingPosts(true);
      const response = await fetch("/api/superadmin/posts");
      if (response.ok) {
        const data = await response.json();
        setAllPosts(data.posts || []);
      } else {
        console.error("Failed to fetch posts");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoadingPosts(false);
    }
  };

  // Load saved order and settings on mount (from database only - no localStorage)
  useEffect(() => {
    const loadHomepageSettings = async () => {
      try {
        // Load from database via API (no localStorage fallback)
        const response = await fetch("/api/settings/homepage");
        if (response.ok) {
          const data = await response.json();

          // Load order (exclude header, footer, discover, and ecosystem)
          if (data.order) {
            const filtered = data.order.filter(
              (s) =>
                s.id !== "discover" &&
                s.id !== "ecosystem" &&
                s.id !== "explore" &&
                s.id !== "header" &&
                s.id !== "footer",
            );
            setSectionOrder(filtered);
            const firstEnabled = filtered.find((s) => s.enabled);
            if (firstEnabled) {
              setActiveSection(firstEnabled.id);
            } else {
              setActiveSection("hero");
            }
          }

          // Load settings
          if (data.settings) {
            if (data.settings.hero) setHeroSettings(data.settings.hero);
            if (data.settings.spotlight)
              setSpotlightSettings(data.settings.spotlight);
            if (data.settings.featured)
              setFeaturedSettings(data.settings.featured);
            if (data.settings.trending)
              setTrendingSettings(data.settings.trending);
            if (data.settings.header) setHeaderSettings(data.settings.header);
            if (data.settings.footer) setFooterSettings(data.settings.footer);
          }

          // Load content (excluding hero and spotlight - they're separate now)
          if (data.content) {
            const contentWithoutHeroAndSpotlight = { ...data.content };
            delete contentWithoutHeroAndSpotlight.hero; // Remove hero since it's separate
            delete contentWithoutHeroAndSpotlight.spotlight; // Remove spotlight since it's separate
            delete contentWithoutHeroAndSpotlight.explore; // Explore section removed from admin
            setSectionContent((prev) => ({
              ...prev,
              ...contentWithoutHeroAndSpotlight,
            }));
          }

          // Load hero section separately
          if (data.hero) {
            console.log("✅ Loading hero content from API:", {
              hasMainArticle: !!data.hero.mainArticle,
              mainArticleId: data.hero.mainArticle?._id,
              mainArticleTitle: data.hero.mainArticle?.title,
              topPicksCount: data.hero.topPicks?.length || 0,
              topPicks:
                data.hero.topPicks?.map((p) => ({
                  id: p._id,
                  title: p.title,
                })) || [],
              discussionTableCount: data.hero.discussionTable?.length || 0,
              discussionTable:
                data.hero.discussionTable?.map((p) => ({
                  id: p._id,
                  title: p.title,
                })) || [],
            });
            setSectionContent((prev) => ({
              ...prev,
              hero: {
                mainArticle: data.hero.mainArticle || null,
                topPicks: Array.isArray(data.hero.topPicks)
                  ? data.hero.topPicks
                  : [],
                discussionTable: Array.isArray(data.hero.discussionTable)
                  ? data.hero.discussionTable
                  : [],
              },
            }));
          } else {
            console.log(
              "⚠️ No hero content found in API response, using empty structure",
            );
            // Ensure hero structure exists even if empty
            setSectionContent((prev) => ({
              ...prev,
              hero: {
                mainArticle: null,
                topPicks: [],
                discussionTable: [],
              },
            }));
          }

          // Load spotlight section separately
          if (data.spotlight) {
            setSectionContent((prev) => ({
              ...prev,
              spotlight: Array.isArray(data.spotlight) ? data.spotlight : [],
            }));
          }

          return; // Successfully loaded from API
        }
      } catch (error) {
        console.error("Error loading homepage settings from API:", error);
      }

      // Set empty state if API fails or no data
      // Use default empty structure
      console.log("⚠️ API failed or no data, setting empty structure");
      setSectionContent({
        hero: {
          mainArticle: null,
          topPicks: [],
          discussionTable: [],
        },
        spotlight: [],
        featured: {
          smbStories: [],
          herStories: [],
          socialStories: [],
        },
        trending: [],
      });
    };

    loadHomepageSettings();
    fetchAllPosts();
  }, []);

  // Debug: Log hero content changes
  useEffect(() => {
    console.log("🔍 Hero content state updated:", {
      hasHero: !!sectionContent.hero,
      mainArticle: sectionContent.hero?.mainArticle
        ? {
            id: sectionContent.hero.mainArticle._id,
            title: sectionContent.hero.mainArticle.title,
          }
        : null,
      topPicksCount: sectionContent.hero?.topPicks?.length || 0,
      discussionTableCount: sectionContent.hero?.discussionTable?.length || 0,
    });
  }, [sectionContent.hero]);

  const getSectionSettings = (sectionId) => {
    switch (sectionId) {
      case "hero":
        return heroSettings;
      case "spotlight":
        return spotlightSettings;
      case "featured":
        return featuredSettings;
      case "trending":
        return trendingSettings;
      case "header":
        return headerSettings;
      case "footer":
        return footerSettings;
      default:
        return {};
    }
  };

  const getSectionSetter = (sectionId) => {
    switch (sectionId) {
      case "hero":
        return setHeroSettings;
      case "spotlight":
        return setSpotlightSettings;
      case "featured":
        return setFeaturedSettings;
      case "trending":
        return setTrendingSettings;
      case "header":
        return setHeaderSettings;
      case "footer":
        return setFooterSettings;
      default:
        return () => {};
    }
  };

  const handleSettingChange = (sectionId, e) => {
    const { name, value, type, checked } = e.target;
    const setter = getSectionSetter(sectionId);
    setter((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleContentChange = (sectionId, field, value, itemId = null) => {
    setSectionContent((prev) => {
      const newContent = { ...prev };
      if (itemId !== null) {
        // Update existing item
        newContent[sectionId] = newContent[sectionId].map((item) =>
          item.id === itemId ? { ...item, [field]: value } : item,
        );
      } else {
        // Add new item
        const newId =
          Math.max(...(newContent[sectionId].map((i) => i.id) || [0]), 0) + 1;
        newContent[sectionId] = [
          ...(newContent[sectionId] || []),
          { id: newId, [field]: value },
        ];
      }
      return newContent;
    });
  };

  const handleAddItem = (sectionId, defaultFields) => {
    const newId =
      Math.max(...(sectionContent[sectionId]?.map((i) => i.id) || [0]), 0) + 1;
    setSectionContent((prev) => ({
      ...prev,
      [sectionId]: [
        ...(prev[sectionId] || []),
        { id: newId, ...defaultFields },
      ],
    }));
    setEditingItem(newId);
    setEditingSection(sectionId);
  };

  const handleDeleteItem = (sectionId, itemId) => {
    if (confirm("Are you sure you want to delete this item?")) {
      setSectionContent((prev) => ({
        ...prev,
        [sectionId]: prev[sectionId].filter((item) => item.id !== itemId),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const allSettings = {
      hero: heroSettings,
      spotlight: spotlightSettings,
      featured: featuredSettings,
      trending: trendingSettings,
      header: headerSettings,
      footer: footerSettings,
    };

    try {
      // Ensure hero section structure is correct before saving
      const contentToSave = { ...sectionContent };

      // Validate and ensure hero section structure
      if (!contentToSave.hero) {
        contentToSave.hero = {
          mainArticle: null,
          topPicks: [],
          discussionTable: [],
        };
      } else {
        // Ensure hero has all required fields
        if (!contentToSave.hero.topPicks) contentToSave.hero.topPicks = [];
        if (!contentToSave.hero.discussionTable)
          contentToSave.hero.discussionTable = [];
        // mainArticle can be null or an object
      }

      // Extract hero section to save separately
      const heroToSave = contentToSave.hero || {
        mainArticle: null,
        topPicks: [],
        discussionTable: [],
      };

      // Extract spotlight section to save separately
      const spotlightToSave = contentToSave.spotlight || [];

      // Remove hero and spotlight from content since they're saved separately
      delete contentToSave.hero;
      delete contentToSave.spotlight;

      // Prepare data to save
      const dataToSave = {
        order: sectionOrder,
        settings: allSettings,
        content: contentToSave,
        hero: heroToSave, // Hero section as separate setting
        spotlight: spotlightToSave, // Spotlight section as separate setting
      };

      // Log hero section data being saved
      console.log("💾 Saving hero section data (separate setting):", {
        hasHero: !!dataToSave.hero,
        mainArticle: dataToSave.hero?.mainArticle
          ? {
              id: dataToSave.hero.mainArticle._id,
              title: dataToSave.hero.mainArticle.title,
            }
          : null,
        topPicksCount: dataToSave.hero?.topPicks?.length || 0,
        topPicks:
          dataToSave.hero?.topPicks?.map((p) => ({
            id: p._id,
            title: p.title,
          })) || [],
        discussionTableCount: dataToSave.hero?.discussionTable?.length || 0,
        discussionTable:
          dataToSave.hero?.discussionTable?.map((p) => ({
            id: p._id,
            title: p.title,
          })) || [],
      });

      // Log data size for debugging
      const dataSize = JSON.stringify(dataToSave).length;
      console.log(
        `Saving homepage settings (${(dataSize / 1024).toFixed(2)} KB)`,
      );

      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 65000); // 65 seconds timeout to match server

      // Save to database only (no localStorage)
      // All section data (order, settings, content, hero, spotlight) is saved to MongoDB
      const response = await fetch("/api/settings/homepage", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (parseError) {
          console.error("Failed to parse error response:", parseError);
          errorData = { error: `Server error (${response.status})` };
        }

        // Handle partial save (206 status)
        if (response.status === 206 && errorData.partial) {
          const savedItems = errorData.saved?.join(", ") || "some items";
          alert(
            `⚠️ Partial Save: ${savedItems} were saved, but the operation timed out. Please try saving again to complete the operation.`,
          );
          setSaving(false);
          return;
        }

        const errorMessage =
          errorData.error ||
          errorData.message ||
          `Failed to save (Status: ${response.status})`;
        console.error("Save failed:", errorMessage, errorData);
        alert(`Error: ${errorMessage}`);
        setSaving(false);
        return;
      }

      const result = await response.json();
      console.log("Save successful:", result);
      alert(result.message || "Settings and content saved successfully!");
    } catch (error) {
      console.error("Error saving homepage settings:", error);
      console.error("Error details:", {
        name: error.name,
        message: error.message,
        stack: error.stack,
      });

      // Handle timeout errors specifically
      if (error.name === "AbortError" || error.message?.includes("timeout")) {
        alert(
          "Save operation timed out. The database connection is slow. Please try again. If the problem persists, check your MongoDB connection.",
        );
      } else {
        alert(
          `Failed to save homepage settings: ${error.message || "Network error. Please check your connection and try again."}`,
        );
      }
    } finally {
      setSaving(false);
    }
  };

  const renderSectionOptions = (section) => {
    const settings = getSectionSettings(section.id);
    const Icon = sectionIcons[section.id] || Layout;

    return (
      <div className="p-4 bg-white dark:bg-gray-900 space-y-4">
        {/* Show/Hide Toggle */}
        {settings.showSection !== undefined && (
          <div className="flex items-center gap-2 pb-3 border-b border-gray-200 dark:border-gray-700">
            <input
              type="checkbox"
              name="showSection"
              id={`${section.id}-showSection`}
              checked={settings.showSection}
              onChange={(e) => handleSettingChange(section.id, e)}
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <label
              htmlFor={`${section.id}-showSection`}
              className="text-xs font-medium text-gray-700 dark:text-gray-300"
            >
              Show this section on homepage
            </label>
          </div>
        )}

        {/* Hero Section Options - Only Post Selection */}
        {section.id === "hero" && (
          <>
            {loadingPosts ? (
              <div className="text-center py-8 text-sm text-gray-500">
                Loading posts...
              </div>
            ) : (
              <div className="space-y-6">
                {/* Main Featured Article */}
                <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Main Featured Article
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        Primary hero post
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {!sectionContent.hero?.mainArticle && (
                        <button
                          type="button"
                          onClick={() =>
                            setShowPostSelector((prev) => ({
                              ...prev,
                              heroMain: !prev.heroMain,
                            }))
                          }
                          className="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                        >
                          {showPostSelector.heroMain ? "Cancel" : "Select Post"}
                        </button>
                      )}
                      {sectionContent.hero?.mainArticle && (
                        <button
                          type="button"
                          onClick={() => {
                            setSectionContent((prev) => ({
                              ...prev,
                              hero: {
                                ...prev.hero,
                                mainArticle: null,
                              },
                            }));
                          }}
                          className="px-4 py-2 text-xs font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>

                  {sectionContent.hero?.mainArticle ? (
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-1 h-full bg-blue-600 rounded-full shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-2">
                            {sectionContent.hero.mainArticle.title}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <span className="px-2 py-0.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                              {sectionContent.hero.mainArticle.category ||
                                "Uncategorized"}
                            </span>
                            <span>•</span>
                            <span>
                              {sectionContent.hero.mainArticle.author?.name ||
                                "Unknown"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded border border-gray-200 dark:border-gray-700 text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        No post selected
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        Click "Select Post" to choose a featured article
                      </p>
                    </div>
                  )}

                  {showPostSelector.heroMain &&
                    !sectionContent.hero?.mainArticle && (
                      <div className="mt-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                        <div className="mb-4">
                          <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
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
                              className="w-full pl-10 pr-9 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
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
                                  const matchesSearch = post.title
                                    .toLowerCase()
                                    .includes(searchQuery.toLowerCase());
                                  return matchesSearch;
                                })
                                .slice(0, 10)
                                .map((post) => {
                                  const postDate =
                                    post.publishedAt || post.createdAt;
                                  const formattedDate = postDate
                                    ? new Date(postDate).toLocaleDateString(
                                        "en-US",
                                        {
                                          year: "numeric",
                                          month: "short",
                                          day: "numeric",
                                        },
                                      )
                                    : "No date";
                                  return (
                                    <div
                                      key={post._id}
                                      onClick={() => {
                                        setSectionContent((prev) => ({
                                          ...prev,
                                          hero: {
                                            ...prev.hero,
                                            mainArticle: post,
                                          },
                                        }));
                                        setShowPostSelector((prev) => ({
                                          ...prev,
                                          heroMain: false,
                                        }));
                                      }}
                                      className="p-3 border-b border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className="w-1 h-12 bg-blue-600 rounded-full shrink-0"></div>
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1.5">
                                            {post.title}
                                          </div>
                                          <div className="flex items-center gap-2 flex-wrap text-xs text-gray-600 dark:text-gray-400">
                                            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                                              {post.category || "Uncategorized"}
                                            </span>
                                            <span>•</span>
                                            <span>
                                              {post.author?.name || "Unknown"}
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
                                return post.title
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase());
                              }).length === 0 && (
                                <div className="p-8 text-center">
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    No posts found
                                  </p>
                                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                    Try a different search term
                                  </p>
                                </div>
                              )}
                              {allPosts.filter((post) => {
                                return post.title
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase());
                              }).length > 10 && (
                                <div className="p-3 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                                  Showing top 10 results. Refine your search for
                                  more specific results.
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="p-8 text-center">
                              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                Start typing to search
                              </p>
                              <p className="text-xs text-gray-400 dark:text-gray-500">
                                Search posts by title to find the perfect
                                featured article
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                </div>

                {/* Top Picks Articles */}
                <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Top Picks Articles
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        Select up to 4 posts
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {(sectionContent.hero?.topPicks || []).length < 4 && (
                        <button
                          type="button"
                          onClick={() =>
                            setShowPostSelector((prev) => ({
                              ...prev,
                              heroTopPicks: !prev.heroTopPicks,
                            }))
                          }
                          className="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                        >
                          {showPostSelector.heroTopPicks
                            ? "Cancel"
                            : "Add Post"}
                        </button>
                      )}
                      {(sectionContent.hero?.topPicks || []).length > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            setSectionContent((prev) => ({
                              ...prev,
                              hero: {
                                ...prev.hero,
                                topPicks: [],
                              },
                            }));
                          }}
                          className="px-4 py-2 text-xs font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors"
                        >
                          Clear All
                        </button>
                      )}
                    </div>
                  </div>

                  {(sectionContent.hero?.topPicks || []).length > 0 ? (
                    <div className="space-y-2 mb-4">
                      {(sectionContent.hero?.topPicks || []).map(
                        (post, index) => (
                          <div
                            key={post._id}
                            className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded border border-gray-200 dark:border-gray-700"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center shrink-0 text-xs font-semibold">
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
                                  setSectionContent((prev) => ({
                                    ...prev,
                                    hero: {
                                      ...prev.hero,
                                      topPicks:
                                        prev.hero?.topPicks?.filter(
                                          (p) => p._id !== post._id,
                                        ) || [],
                                    },
                                  }));
                                }}
                                className="p-1.5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors shrink-0"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  ) : (
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded border border-gray-200 dark:border-gray-700 text-center mb-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        No posts selected
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        Add up to 4 top pick articles
                      </p>
                    </div>
                  )}

                  {(sectionContent.hero?.topPicks || []).length > 0 && (
                    <div className="text-center pt-3 border-t border-gray-200 dark:border-gray-800">
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        Selected:{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {(sectionContent.hero?.topPicks || []).length} / 4
                        </span>
                      </span>
                    </div>
                  )}

                  {showPostSelector.heroTopPicks &&
                    (sectionContent.hero?.topPicks || []).length < 4 && (
                      <div className="mt-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                        <div className="mb-4">
                          <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
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
                              className="w-full pl-10 pr-9 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
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
                                  const isAlreadySelected =
                                    sectionContent.hero?.topPicks?.some(
                                      (p) => p._id === post._id,
                                    );
                                  if (isAlreadySelected) return false;
                                  return post.title
                                    .toLowerCase()
                                    .includes(searchQuery.toLowerCase());
                                })
                                .slice(0, 10)
                                .map((post) => {
                                  const postDate =
                                    post.publishedAt || post.createdAt;
                                  const formattedDate = postDate
                                    ? new Date(postDate).toLocaleDateString(
                                        "en-US",
                                        {
                                          year: "numeric",
                                          month: "short",
                                          day: "numeric",
                                        },
                                      )
                                    : "No date";
                                  return (
                                    <div
                                      key={post._id}
                                      onClick={() => {
                                        setSectionContent((prev) => ({
                                          ...prev,
                                          hero: {
                                            ...prev.hero,
                                            topPicks: [
                                              ...(prev.hero?.topPicks || []),
                                              post,
                                            ],
                                          },
                                        }));
                                        if (
                                          (sectionContent.hero?.topPicks || [])
                                            .length +
                                            1 >=
                                          4
                                        ) {
                                          setShowPostSelector((prev) => ({
                                            ...prev,
                                            heroTopPicks: false,
                                          }));
                                        }
                                      }}
                                      className="p-3 border-b border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className="w-1 h-12 bg-blue-600 rounded-full shrink-0"></div>
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
                                const isAlreadySelected =
                                  sectionContent.hero?.topPicks?.some(
                                    (p) => p._id === post._id,
                                  );
                                if (isAlreadySelected) return false;
                                return post.title
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase());
                              }).length === 0 && (
                                <div className="p-8 text-center">
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    No posts found
                                  </p>
                                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                    Try a different search term
                                  </p>
                                </div>
                              )}
                              {allPosts.filter((post) => {
                                const isAlreadySelected =
                                  sectionContent.hero?.topPicks?.some(
                                    (p) => p._id === post._id,
                                  );
                                if (isAlreadySelected) return false;
                                return post.title
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase());
                              }).length > 10 && (
                                <div className="p-3 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                                  Showing top 10 results. Refine your search for
                                  more specific results.
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="p-8 text-center">
                              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                Start typing to search
                              </p>
                              <p className="text-xs text-gray-400 dark:text-gray-500">
                                Search posts by title to add to top picks
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                </div>

                {/* Discussion Table Articles */}
                <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Discussion Table Articles
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        Featured articles section (max 4 posts)
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setShowPostSelector((prev) => ({
                            ...prev,
                            heroDiscussionTable: !prev.heroDiscussionTable,
                          }))
                        }
                        className="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                      >
                        {showPostSelector.heroDiscussionTable
                          ? "Cancel"
                          : "Add Post"}
                      </button>
                      {(sectionContent.hero?.discussionTable || []).length >
                        0 && (
                        <button
                          type="button"
                          onClick={() => {
                            setSectionContent((prev) => ({
                              ...prev,
                              hero: {
                                ...prev.hero,
                                discussionTable: [],
                              },
                            }));
                          }}
                          className="px-4 py-2 text-xs font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors"
                        >
                          Clear All
                        </button>
                      )}
                    </div>
                  </div>

                  {(sectionContent.hero?.discussionTable || []).length > 0 ? (
                    <div className="space-y-2 mb-4">
                      {(sectionContent.hero?.discussionTable || [])
                        .slice(0, 4)
                        .map((post) => (
                          <div
                            key={post._id}
                            className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded border border-gray-200 dark:border-gray-700"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <div className="w-1 h-12 bg-blue-600 rounded-full shrink-0"></div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1 mb-1">
                                    {post.title}
                                  </div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">
                                    <span>
                                      {post.author?.name || "Unknown Author"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  setSectionContent((prev) => ({
                                    ...prev,
                                    hero: {
                                      ...prev.hero,
                                      discussionTable:
                                        prev.hero?.discussionTable?.filter(
                                          (p) => p._id !== post._id,
                                        ) || [],
                                    },
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
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        No posts selected
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        Add Discussion Table articles to display (max 4)
                      </p>
                    </div>
                  )}

                  {(sectionContent.hero?.discussionTable || []).length > 0 && (
                    <div className="text-center pt-3 border-t border-gray-200 dark:border-gray-800">
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        Selected:{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {(sectionContent.hero?.discussionTable || []).length}{" "}
                          posts (max 4)
                        </span>
                      </span>
                    </div>
                  )}

                  {showPostSelector.heroDiscussionTable && (
                    <div className="mt-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                      <div className="mb-4">
                        <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
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
                            className="w-full pl-10 pr-9 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
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
                                const isAlreadySelected =
                                  sectionContent.hero?.discussionTable?.some(
                                    (p) => p._id === post._id,
                                  );
                                if (isAlreadySelected) return false;
                                // Limit to 4 posts
                                if (
                                  (sectionContent.hero?.discussionTable || [])
                                    .length >= 4
                                )
                                  return false;
                                return post.title
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase());
                              })
                              .slice(0, 10)
                              .map((post) => {
                                const postDate =
                                  post.publishedAt || post.createdAt;
                                const formattedDate = postDate
                                  ? new Date(postDate).toLocaleDateString(
                                      "en-US",
                                      {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                      },
                                    )
                                  : "No date";
                                return (
                                  <div
                                    key={post._id}
                                    onClick={() => {
                                      const currentPosts =
                                        sectionContent.hero?.discussionTable ||
                                        [];
                                      if (currentPosts.length >= 4) {
                                        alert(
                                          "Maximum 4 posts allowed in Discussion Table",
                                        );
                                        return;
                                      }
                                      setSectionContent((prev) => ({
                                        ...prev,
                                        hero: {
                                          ...prev.hero,
                                          discussionTable: [
                                            ...(prev.hero?.discussionTable ||
                                              []),
                                            post,
                                          ],
                                        },
                                      }));
                                    }}
                                    className="p-3 border-b border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="w-1 h-12 bg-blue-600 rounded-full shrink-0"></div>
                                      <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1.5">
                                          {post.title}
                                        </div>
                                        <div className="flex items-center gap-2 flex-wrap text-xs text-gray-600 dark:text-gray-400">
                                          <span>
                                            {post.author?.name ||
                                              "Unknown Author"}
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
                              const isAlreadySelected =
                                sectionContent.hero?.discussionTable?.some(
                                  (p) => p._id === post._id,
                                );
                              if (isAlreadySelected) return false;
                              if (
                                (sectionContent.hero?.discussionTable || [])
                                  .length >= 4
                              )
                                return false;
                              return post.title
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase());
                            }).length === 0 && (
                              <div className="p-8 text-center">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  No posts found
                                </p>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                  Try a different search term
                                </p>
                              </div>
                            )}
                            {allPosts.filter((post) => {
                              const isAlreadySelected =
                                sectionContent.hero?.discussionTable?.some(
                                  (p) => p._id === post._id,
                                );
                              if (isAlreadySelected) return false;
                              if (
                                (sectionContent.hero?.discussionTable || [])
                                  .length >= 4
                              )
                                return false;
                              return post.title
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase());
                            }).length > 10 && (
                              <div className="p-3 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                                Showing top 10 results. Refine your search for
                                more specific results.
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="p-8 text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                              Start typing to search
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">
                              Search posts by title to add to Discussion Table
                              (max 4 posts)
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {/* Spotlight Section Options - Post Selection */}
        {section.id === "spotlight" && (
          <>
            {loadingPosts ? (
              <div className="text-center py-8 text-sm text-gray-500">
                Loading posts...
              </div>
            ) : (
              <div className="space-y-6">
                {/* Spotlight Articles */}
                <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Spotlight Articles
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        Featured spotlight posts
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setShowPostSelector((prev) => ({
                            ...prev,
                            spotlight: !prev.spotlight,
                          }))
                        }
                        className="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                      >
                        {showPostSelector.spotlight ? "Cancel" : "Add Post"}
                      </button>
                      {(sectionContent.spotlight || []).length > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            setSectionContent((prev) => ({
                              ...prev,
                              spotlight: [],
                            }));
                          }}
                          className="px-4 py-2 text-xs font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors"
                        >
                          Clear All
                        </button>
                      )}
                    </div>
                  </div>

                  {(sectionContent.spotlight || []).length > 0 ? (
                    <div className="space-y-2 mb-4">
                      {(sectionContent.spotlight || []).map((post, index) => (
                        <div
                          key={post._id || index}
                          className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded border border-gray-200 dark:border-gray-700"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center shrink-0 text-xs font-semibold">
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
                                setSectionContent((prev) => ({
                                  ...prev,
                                  spotlight:
                                    prev.spotlight?.filter(
                                      (p) => p._id !== post._id,
                                    ) || [],
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
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        No posts selected
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        Add spotlight articles to display
                      </p>
                    </div>
                  )}

                  {(sectionContent.spotlight || []).length > 0 && (
                    <div className="text-center pt-3 border-t border-gray-200 dark:border-gray-800">
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        Selected:{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {(sectionContent.spotlight || []).length} posts
                        </span>
                      </span>
                    </div>
                  )}

                  {showPostSelector.spotlight && (
                    <div className="mt-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                      <div className="mb-4">
                        <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
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
                            className="w-full pl-10 pr-9 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
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
                                const isAlreadySelected =
                                  sectionContent.spotlight?.some(
                                    (p) => p._id === post._id,
                                  );
                                if (isAlreadySelected) return false;
                                return post.title
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase());
                              })
                              .slice(0, 10)
                              .map((post) => {
                                const postDate =
                                  post.publishedAt || post.createdAt;
                                const formattedDate = postDate
                                  ? new Date(postDate).toLocaleDateString(
                                      "en-US",
                                      {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                      },
                                    )
                                  : "No date";
                                return (
                                  <div
                                    key={post._id}
                                    onClick={() => {
                                      setSectionContent((prev) => ({
                                        ...prev,
                                        spotlight: [
                                          ...(prev.spotlight || []),
                                          post,
                                        ],
                                      }));
                                    }}
                                    className="p-3 border-b border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="w-1 h-12 bg-blue-600 rounded-full shrink-0"></div>
                                      <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1.5">
                                          {post.title}
                                        </div>
                                        <div className="flex items-center gap-2 flex-wrap text-xs text-gray-600 dark:text-gray-400">
                                          <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                                            {post.category || "Uncategorized"}
                                          </span>
                                          <span>•</span>
                                          <span>
                                            {post.author?.name || "Unknown"}
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
                              const isAlreadySelected =
                                sectionContent.spotlight?.some(
                                  (p) => p._id === post._id,
                                );
                              if (isAlreadySelected) return false;
                              return post.title
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase());
                            }).length === 0 && (
                              <div className="p-8 text-center">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  No posts found
                                </p>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                  Try a different search term
                                </p>
                              </div>
                            )}
                            {allPosts.filter((post) => {
                              const isAlreadySelected =
                                sectionContent.spotlight?.some(
                                  (p) => p._id === post._id,
                                );
                              if (isAlreadySelected) return false;
                              return post.title
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase());
                            }).length > 10 && (
                              <div className="p-3 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                                Showing top 10 results. Refine your search for
                                more specific results.
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="p-8 text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                              Start typing to search
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">
                              Search posts by title to add to spotlight
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {/* Featured Section Options */}
        {section.id === "featured" && (
          <>
            {loadingPosts ? (
              <div className="text-center py-8 text-sm text-gray-500">
                Loading posts...
              </div>
            ) : (
              <div className="space-y-6">
                {/* Helper function to render post selector for each subsection */}
                {(() => {
                  const renderSubsection = (
                    subsectionKey,
                    subsectionName,
                    subsectionDescription,
                  ) => {
                    const posts =
                      sectionContent.featured?.[subsectionKey] || [];
                    const selectorKey = `featured_${subsectionKey}`;
                    const isSelectorOpen =
                      showPostSelector[selectorKey] || false;

                    return (
                      <div
                        key={subsectionKey}
                        className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800"
                      >
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                              {subsectionName}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                              {subsectionDescription}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                setShowPostSelector((prev) => ({
                                  ...prev,
                                  [selectorKey]: !prev[selectorKey],
                                }))
                              }
                              className="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                            >
                              {isSelectorOpen ? "Cancel" : "Add Post"}
                            </button>
                            {posts.length > 0 && (
                              <button
                                type="button"
                                onClick={() => {
                                  setSectionContent((prev) => ({
                                    ...prev,
                                    featured: {
                                      ...(prev.featured || {
                                        smbStories: [],
                                        herStories: [],
                                        socialStories: [],
                                      }),
                                      [subsectionKey]: [],
                                    },
                                  }));
                                }}
                                className="px-4 py-2 text-xs font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors"
                              >
                                Clear All
                              </button>
                            )}
                          </div>
                        </div>

                        {posts.length > 0 ? (
                          <div className="space-y-2 mb-4">
                            {posts.map((post, index) => (
                              <div
                                key={post._id || index}
                                className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded border border-gray-200 dark:border-gray-700"
                              >
                                <div className="flex items-center justify-between gap-3">
                                  <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center shrink-0 text-xs font-semibold">
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
                                      setSectionContent((prev) => ({
                                        ...prev,
                                        featured: {
                                          ...(prev.featured || {
                                            smbStories: [],
                                            herStories: [],
                                            socialStories: [],
                                          }),
                                          [subsectionKey]: (
                                            prev.featured?.[subsectionKey] || []
                                          ).filter((p) => p._id !== post._id),
                                        },
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
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              No posts selected
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                              Add posts to {subsectionName.toLowerCase()}
                            </p>
                          </div>
                        )}

                        {posts.length > 0 && (
                          <div className="text-center pt-3 border-t border-gray-200 dark:border-gray-800">
                            <span className="text-xs text-gray-600 dark:text-gray-400">
                              Selected:{" "}
                              <span className="font-semibold text-gray-900 dark:text-white">
                                {posts.length} posts
                              </span>
                            </span>
                          </div>
                        )}

                        {isSelectorOpen && (
                          <div className="mt-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                            <div className="mb-4">
                              <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
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
                                  onChange={(e) =>
                                    setSearchQuery(e.target.value)
                                  }
                                  className="w-full pl-10 pr-9 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
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
                                      // Check if post is already selected in any featured subsection
                                      const allFeaturedPosts = [
                                        ...(sectionContent.featured
                                          ?.smbStories || []),
                                        ...(sectionContent.featured
                                          ?.herStories || []),
                                        ...(sectionContent.featured
                                          ?.socialStories || []),
                                      ];
                                      const isAlreadySelected =
                                        allFeaturedPosts.some(
                                          (p) => p._id === post._id,
                                        );
                                      if (isAlreadySelected) return false;
                                      return post.title
                                        .toLowerCase()
                                        .includes(searchQuery.toLowerCase());
                                    })
                                    .slice(0, 10)
                                    .map((post) => {
                                      const postDate =
                                        post.publishedAt || post.createdAt;
                                      const formattedDate = postDate
                                        ? new Date(postDate).toLocaleDateString(
                                            "en-US",
                                            {
                                              year: "numeric",
                                              month: "short",
                                              day: "numeric",
                                            },
                                          )
                                        : "No date";
                                      return (
                                        <div
                                          key={post._id}
                                          onClick={() => {
                                            setSectionContent((prev) => ({
                                              ...prev,
                                              featured: {
                                                ...(prev.featured || {
                                                  smbStories: [],
                                                  herStories: [],
                                                  socialStories: [],
                                                }),
                                                [subsectionKey]: [
                                                  ...(prev.featured?.[
                                                    subsectionKey
                                                  ] || []),
                                                  post,
                                                ],
                                              },
                                            }));
                                          }}
                                          className="p-3 border-b border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                                        >
                                          <div className="flex items-start gap-3">
                                            <div className="w-1 h-12 bg-blue-600 rounded-full shrink-0"></div>
                                            <div className="flex-1 min-w-0">
                                              <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1.5">
                                                {post.title}
                                              </div>
                                              <div className="flex items-center gap-2 flex-wrap text-xs text-gray-600 dark:text-gray-400">
                                                <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                                                  {post.category ||
                                                    "Uncategorized"}
                                                </span>
                                                <span>•</span>
                                                <span>
                                                  {post.author?.name ||
                                                    "Unknown"}
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
                                    const allFeaturedPosts = [
                                      ...(sectionContent.featured?.smbStories ||
                                        []),
                                      ...(sectionContent.featured?.herStories ||
                                        []),
                                      ...(sectionContent.featured
                                        ?.socialStories || []),
                                    ];
                                    const isAlreadySelected =
                                      allFeaturedPosts.some(
                                        (p) => p._id === post._id,
                                      );
                                    if (isAlreadySelected) return false;
                                    return post.title
                                      .toLowerCase()
                                      .includes(searchQuery.toLowerCase());
                                  }).length === 0 && (
                                    <div className="p-8 text-center">
                                      <p className="text-sm text-gray-500 dark:text-gray-400">
                                        No posts found
                                      </p>
                                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                        Try a different search term
                                      </p>
                                    </div>
                                  )}
                                  {allPosts.filter((post) => {
                                    const allFeaturedPosts = [
                                      ...(sectionContent.featured?.smbStories ||
                                        []),
                                      ...(sectionContent.featured?.herStories ||
                                        []),
                                      ...(sectionContent.featured
                                        ?.socialStories || []),
                                    ];
                                    const isAlreadySelected =
                                      allFeaturedPosts.some(
                                        (p) => p._id === post._id,
                                      );
                                    if (isAlreadySelected) return false;
                                    return post.title
                                      .toLowerCase()
                                      .includes(searchQuery.toLowerCase());
                                  }).length > 10 && (
                                    <div className="p-3 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                                      Showing top 10 results. Refine your search
                                      for more specific results.
                                    </div>
                                  )}
                                </>
                              ) : (
                                <div className="p-8 text-center">
                                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                    Start typing to search
                                  </p>
                                  <p className="text-xs text-gray-400 dark:text-gray-500">
                                    Search posts by title to add to{" "}
                                    {subsectionName.toLowerCase()}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  };

                  return (
                    <>
                      {renderSubsection(
                        "smbStories",
                        "SMB Story",
                        "Select posts for SMB Story column (first post will be featured)",
                      )}
                      {renderSubsection(
                        "herStories",
                        "Her Story",
                        "Select posts for Her Story column",
                      )}
                      {renderSubsection(
                        "socialStories",
                        "Social Story",
                        "Select posts for Social Story column (first post will be featured)",
                      )}
                    </>
                  );
                })()}
              </div>
            )}
          </>
        )}

        {/* Trending Now Section Options */}
        {section.id === "trending" && (
          <>
            {loadingPosts ? (
              <div className="text-center py-8 text-sm text-gray-500">
                Loading posts...
              </div>
            ) : (
              <div className="space-y-6">
                {/* Trending Articles */}
                <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Trending Articles
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        Select posts for trending section
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          setShowPostSelector((prev) => ({
                            ...prev,
                            trending: !prev.trending,
                          }))
                        }
                        className="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                      >
                        {showPostSelector.trending ? "Cancel" : "Add Post"}
                      </button>
                      {(sectionContent.trending || []).length > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            setSectionContent((prev) => ({
                              ...prev,
                              trending: [],
                            }));
                          }}
                          className="px-4 py-2 text-xs font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors"
                        >
                          Clear All
                        </button>
                      )}
                    </div>
                  </div>

                  {(sectionContent.trending || []).length > 0 ? (
                    <div className="space-y-2 mb-4">
                      {(sectionContent.trending || []).map((post, index) => (
                        <div
                          key={post._id || index}
                          className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded border border-gray-200 dark:border-gray-700"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center shrink-0 text-xs font-semibold">
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
                                setSectionContent((prev) => ({
                                  ...prev,
                                  trending:
                                    prev.trending?.filter(
                                      (p) => p._id !== post._id,
                                    ) || [],
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
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        No posts selected
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        Add trending articles to display
                      </p>
                    </div>
                  )}

                  {(sectionContent.trending || []).length > 0 && (
                    <div className="text-center pt-3 border-t border-gray-200 dark:border-gray-800">
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        Selected:{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {(sectionContent.trending || []).length} posts
                        </span>
                      </span>
                    </div>
                  )}

                  {showPostSelector.trending && (
                    <div className="mt-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                      <div className="mb-4">
                        <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
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
                            className="w-full pl-10 pr-9 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
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
                                const isAlreadySelected =
                                  sectionContent.trending?.some(
                                    (p) => p._id === post._id,
                                  );
                                if (isAlreadySelected) return false;
                                return post.title
                                  .toLowerCase()
                                  .includes(searchQuery.toLowerCase());
                              })
                              .slice(0, 10)
                              .map((post) => {
                                const postDate =
                                  post.publishedAt || post.createdAt;
                                const formattedDate = postDate
                                  ? new Date(postDate).toLocaleDateString(
                                      "en-US",
                                      {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                      },
                                    )
                                  : "No date";
                                return (
                                  <div
                                    key={post._id}
                                    onClick={() => {
                                      setSectionContent((prev) => ({
                                        ...prev,
                                        trending: [
                                          ...(prev.trending || []),
                                          post,
                                        ],
                                      }));
                                    }}
                                    className="p-3 border-b border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="w-1 h-12 bg-blue-600 rounded-full shrink-0"></div>
                                      <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1.5">
                                          {post.title}
                                        </div>
                                        <div className="flex items-center gap-2 flex-wrap text-xs text-gray-600 dark:text-gray-400">
                                          <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                                            {post.category || "Uncategorized"}
                                          </span>
                                          <span>•</span>
                                          <span>
                                            {post.author?.name || "Unknown"}
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
                              const isAlreadySelected =
                                sectionContent.trending?.some(
                                  (p) => p._id === post._id,
                                );
                              if (isAlreadySelected) return false;
                              return post.title
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase());
                            }).length === 0 && (
                              <div className="p-8 text-center">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  No posts found
                                </p>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                  Try a different search term
                                </p>
                              </div>
                            )}
                            {allPosts.filter((post) => {
                              const isAlreadySelected =
                                sectionContent.trending?.some(
                                  (p) => p._id === post._id,
                                );
                              if (isAlreadySelected) return false;
                              return post.title
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase());
                            }).length > 10 && (
                              <div className="p-3 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                                Showing top 10 results. Refine your search for
                                more specific results.
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="p-8 text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                              Start typing to search
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500">
                              Search posts by title to add to trending
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  // Get enabled sections in order, excluding discover and ecosystem
  const enabledSections = sectionOrder.filter(
    (section) =>
      section.enabled &&
      section.id !== "discover" &&
      section.id !== "ecosystem",
  );

  // Get the current section being edited
  const currentSection = enabledSections.find(
    (section) => section.id === activeSection,
  );

  // If no section found or section is not enabled, show first enabled section
  const displaySection = currentSection || enabledSections[0] || null;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          {displaySection
            ? `${displaySection.name} Section`
            : "Homepage Sections"}
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          {displaySection
            ? `Configure settings and content for the ${displaySection.name} section.`
            : "Select a section from the admin sidebar to edit its settings."}
        </p>
      </div>

      {displaySection ? (
        <form onSubmit={handleSubmit}>
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="p-6">
              {/* Render Only Active Section Options */}
              <div>
                <div className="mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    {React.createElement(
                      sectionIcons[displaySection.id] || Layout,
                      { size: 18, className: "text-red-600 dark:text-red-400" },
                    )}
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                      {displaySection.name}
                    </h2>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Configure settings and content for the {displaySection.name}{" "}
                    section
                  </p>
                </div>
                {renderSectionOptions(displaySection)}
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1.5 text-xs rounded hover:from-red-600 hover:to-red-700 shadow-md shadow-red-500/25 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {saving ? (
                    <>
                      <div className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-white border-t-transparent"></div>
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save size={14} />
                      <span>Save {displaySection.name} Changes</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              Please select a section from the admin sidebar to edit.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
