"use client";

import { useState, useEffect } from "react";
import { Save, Layout, ChevronUp, ChevronDown, GripVertical, Eye, EyeOff } from "lucide-react";

export default function SidebarCustomise() {
  const defaultWidgets = [
    { id: "followUs", name: "Follow Us", enabled: true, order: 0 },
    { id: "sidebarPosts", name: "Sidebar Posts", enabled: true, order: 1 },
    { id: "advertisement", name: "Advertisement", enabled: true, order: 2 },
    { id: "sidebarTabs", name: "Sidebar Tabs", enabled: true, order: 3 },
    { id: "categories", name: "Categories", enabled: true, order: 4 },
    { id: "tagCloud", name: "Tag Cloud", enabled: true, order: 5 },
  ];

  const [sidebarSettings, setSidebarSettings] = useState({
    widgets: defaultWidgets,
    followUs: {
      title: "Follow Us",
      socialLinks: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        youtube: "https://youtube.com",
        instagram: "https://instagram.com",
      },
    },
    sidebarPosts: {
      title: "Smartphones",
      showCount: 3,
    },
    advertisement: {
      enabled: true,
      image: "",
      link: "",
      alt: "Advertisement",
    },
  });

  useEffect(() => {
    const loadSidebarSettings = async () => {
      try {
        // Try to load from API first
        const response = await fetch("/api/settings/sidebar");
        if (response.ok) {
          const data = await response.json();
          if (data.sidebar) {
            setSidebarSettings((prev) => ({
              ...prev,
              ...data.sidebar,
              widgets: data.sidebar.widgets || defaultWidgets,
            }));
            return;
          }
        }
      } catch (error) {
        console.error("Error loading sidebar settings from API:", error);
      }

      // No localStorage fallback - all data comes from server
    };

    loadSidebarSettings();
  }, []);

  const toggleWidget = (widgetId) => {
    setSidebarSettings((prev) => ({
      ...prev,
      widgets: prev.widgets.map((widget) =>
        widget.id === widgetId ? { ...widget, enabled: !widget.enabled } : widget
      ),
    }));
  };

  const moveWidget = (index, direction) => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === sidebarSettings.widgets.length - 1)
    ) {
      return;
    }
    setSidebarSettings((prev) => {
      const updated = [...prev.widgets];
      const newIndex = direction === "up" ? index - 1 : index + 1;
      [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
      // Update order values
      updated.forEach((widget, idx) => {
        widget.order = idx;
      });
      return { ...prev, widgets: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Save to database
      const response = await fetch("/api/settings/sidebar", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sidebar: sidebarSettings,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        alert(errorData.error || "Failed to save sidebar settings");
        return;
      }

      alert("Sidebar settings saved successfully!");
    } catch (error) {
      console.error("Error saving sidebar settings:", error);
      alert("Failed to save sidebar settings");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Sidebar Customisation</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Manage sidebar widgets and their settings
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="p-5">
            <div className="space-y-6">
              {/* Widget Management */}
              <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Widget Management
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Enable/disable and reorder sidebar widgets
                  </p>
                </div>

                <div className="space-y-2">
                  {sidebarSettings.widgets.map((widget, index) => (
                    <div
                      key={widget.id}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex flex-col gap-1">
                        <button
                          type="button"
                          onClick={() => moveWidget(index, "up")}
                          disabled={index === 0}
                          className="p-0.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed"
                          title="Move up"
                        >
                          <ChevronUp size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => moveWidget(index, "down")}
                          disabled={index === sidebarSettings.widgets.length - 1}
                          className="p-0.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed"
                          title="Move down"
                        >
                          <ChevronDown size={14} />
                        </button>
                      </div>

                      <GripVertical size={16} className="text-gray-400" />

                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {widget.name}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleWidget(widget.id)}
                        className={`p-2 rounded transition-colors ${
                          widget.enabled
                            ? "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-400"
                        }`}
                        title={widget.enabled ? "Disable widget" : "Enable widget"}
                      >
                        {widget.enabled ? <Eye size={16} /> : <EyeOff size={16} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Follow Us Settings */}
              {sidebarSettings.widgets.find((w) => w.id === "followUs")?.enabled && (
                <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Follow Us Widget
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      Configure social media links
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                        Widget Title
                      </label>
                      <input
                        type="text"
                        value={sidebarSettings.followUs?.title || "Follow Us"}
                        onChange={(e) =>
                          setSidebarSettings((prev) => ({
                            ...prev,
                            followUs: {
                              ...prev.followUs,
                              title: e.target.value,
                            },
                          }))
                        }
                        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-3">
                        Social Media Links
                      </label>
                      <div className="space-y-3">
                        {["facebook", "twitter", "youtube", "instagram"].map((platform) => (
                          <div key={platform} className="flex items-center gap-3">
                            <label className="w-24 text-xs font-medium text-gray-700 dark:text-gray-300 capitalize">
                              {platform}
                            </label>
                            <input
                              type="url"
                              value={
                                sidebarSettings.followUs?.socialLinks?.[platform] || ""
                              }
                              onChange={(e) =>
                                setSidebarSettings((prev) => ({
                                  ...prev,
                                  followUs: {
                                    ...prev.followUs,
                                    socialLinks: {
                                      ...prev.followUs.socialLinks,
                                      [platform]: e.target.value,
                                    },
                                  },
                                }))
                              }
                              className="flex-1 px-3 py-2 text-xs border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                              placeholder={`https://${platform}.com`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sidebar Posts Settings */}
              {sidebarSettings.widgets.find((w) => w.id === "sidebarPosts")?.enabled && (
                <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Sidebar Posts Widget
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      Configure sidebar posts display
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                        Widget Title
                      </label>
                      <input
                        type="text"
                        value={sidebarSettings.sidebarPosts?.title || "Smartphones"}
                        onChange={(e) =>
                          setSidebarSettings((prev) => ({
                            ...prev,
                            sidebarPosts: {
                              ...prev.sidebarPosts,
                              title: e.target.value,
                            },
                          }))
                        }
                        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                        Number of Posts to Show
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={sidebarSettings.sidebarPosts?.showCount || 3}
                        onChange={(e) =>
                          setSidebarSettings((prev) => ({
                            ...prev,
                            sidebarPosts: {
                              ...prev.sidebarPosts,
                              showCount: parseInt(e.target.value) || 3,
                            },
                          }))
                        }
                        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Advertisement Settings */}
              {sidebarSettings.widgets.find((w) => w.id === "advertisement")?.enabled && (
                <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Advertisement Widget
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      Configure advertisement display
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                        Advertisement Image URL
                      </label>
                      <input
                        type="url"
                        value={sidebarSettings.advertisement?.image || ""}
                        onChange={(e) =>
                          setSidebarSettings((prev) => ({
                            ...prev,
                            advertisement: {
                              ...prev.advertisement,
                              image: e.target.value,
                            },
                          }))
                        }
                        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="https://example.com/ad.jpg"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                        Advertisement Link
                      </label>
                      <input
                        type="url"
                        value={sidebarSettings.advertisement?.link || ""}
                        onChange={(e) =>
                          setSidebarSettings((prev) => ({
                            ...prev,
                            advertisement: {
                              ...prev.advertisement,
                              link: e.target.value,
                            },
                          }))
                        }
                        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="https://example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                        Alt Text
                      </label>
                      <input
                        type="text"
                        value={sidebarSettings.advertisement?.alt || "Advertisement"}
                        onChange={(e) =>
                          setSidebarSettings((prev) => ({
                            ...prev,
                            advertisement: {
                              ...prev.advertisement,
                              alt: e.target.value,
                            },
                          }))
                        }
                        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Advertisement"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs rounded transition-colors font-medium"
              >
                <Save size={14} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
