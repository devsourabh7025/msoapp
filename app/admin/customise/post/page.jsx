"use client";

import { useState, useEffect } from "react";
import { Save, FileText, ChevronRight, ChevronDown } from "lucide-react";

export default function PostCustomise() {
  const [postSettings, setPostSettings] = useState({
    showRelatedPosts: true,
    showComments: true,
    showSocialShare: true,
    showAuthorInfo: true,
    showDate: true,
    showCategory: true,
    relatedPostsCount: 3,
    commentsEnabled: true,
    socialShareButtons: {
      facebook: true,
      twitter: true,
      linkedin: false,
      whatsapp: false,
    },
  });

  const [expandedSections, setExpandedSections] = useState({
    display: true,
    relatedPosts: false,
    comments: false,
    socialShare: false,
  });

  useEffect(() => {
    const loadPostSettings = async () => {
      try {
        // Try to load from API first
        const response = await fetch("/api/settings/post");
        if (response.ok) {
          const data = await response.json();
          if (data.post) {
            setPostSettings(data.post);
            return;
          }
        }
      } catch (error) {
        console.error("Error loading post settings from API:", error);
      }

      // Use default values if API fails
      // (default values are already set in initial state)
    };

    loadPostSettings();
  }, []);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Save to database
      const response = await fetch("/api/settings/post", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post: postSettings,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        alert(errorData.error || "Failed to save post settings");
        return;
      }

      alert("Post settings saved successfully!");
    } catch (error) {
      console.error("Error saving post settings:", error);
      alert("Failed to save post settings");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Post Customisation</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Customize post page settings and display options
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="p-5">
            <div className="space-y-6">
              {/* Display Settings */}
              <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                <button
                  type="button"
                  onClick={() => toggleSection("display")}
                  className="w-full flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-800"
                >
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Display Settings
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      Control what information is shown on post pages
                    </p>
                  </div>
                  {expandedSections.display ? (
                    <ChevronDown size={16} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-400" />
                  )}
                </button>

                {expandedSections.display && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-xs font-semibold text-gray-900 dark:text-white">
                          Show Author Info
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          Display author name and information
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={postSettings.showAuthorInfo}
                          onChange={(e) =>
                            setPostSettings((prev) => ({
                              ...prev,
                              showAuthorInfo: e.target.checked,
                            }))
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-xs font-semibold text-gray-900 dark:text-white">
                          Show Date
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          Display publication date
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={postSettings.showDate}
                          onChange={(e) =>
                            setPostSettings((prev) => ({
                              ...prev,
                              showDate: e.target.checked,
                            }))
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-xs font-semibold text-gray-900 dark:text-white">
                          Show Category
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          Display post category
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={postSettings.showCategory}
                          onChange={(e) =>
                            setPostSettings((prev) => ({
                              ...prev,
                              showCategory: e.target.checked,
                            }))
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                )}
              </div>

              {/* Related Posts */}
              <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                <button
                  type="button"
                  onClick={() => toggleSection("relatedPosts")}
                  className="w-full flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-800"
                >
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Related Posts
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      Configure related posts section
                    </p>
                  </div>
                  {expandedSections.relatedPosts ? (
                    <ChevronDown size={16} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-400" />
                  )}
                </button>

                {expandedSections.relatedPosts && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-xs font-semibold text-gray-900 dark:text-white">
                          Show Related Posts
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          Display related posts section
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={postSettings.showRelatedPosts}
                          onChange={(e) =>
                            setPostSettings((prev) => ({
                              ...prev,
                              showRelatedPosts: e.target.checked,
                            }))
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    {postSettings.showRelatedPosts && (
                      <div>
                        <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                          Number of Related Posts
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value={postSettings.relatedPostsCount}
                          onChange={(e) =>
                            setPostSettings((prev) => ({
                              ...prev,
                              relatedPostsCount: parseInt(e.target.value) || 3,
                            }))
                          }
                          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Comments */}
              <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                <button
                  type="button"
                  onClick={() => toggleSection("comments")}
                  className="w-full flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-800"
                >
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Comments
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      Configure comments section
                    </p>
                  </div>
                  {expandedSections.comments ? (
                    <ChevronDown size={16} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-400" />
                  )}
                </button>

                {expandedSections.comments && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-xs font-semibold text-gray-900 dark:text-white">
                          Show Comments Section
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          Display comments on post pages
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={postSettings.showComments}
                          onChange={(e) =>
                            setPostSettings((prev) => ({
                              ...prev,
                              showComments: e.target.checked,
                            }))
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    {postSettings.showComments && (
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-xs font-semibold text-gray-900 dark:text-white">
                            Enable Comments
                          </label>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            Allow users to post comments
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={postSettings.commentsEnabled}
                            onChange={(e) =>
                              setPostSettings((prev) => ({
                                ...prev,
                                commentsEnabled: e.target.checked,
                              }))
                            }
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Social Share */}
              <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                <button
                  type="button"
                  onClick={() => toggleSection("socialShare")}
                  className="w-full flex items-center justify-between mb-4 pb-3 border-b border-gray-200 dark:border-gray-800"
                >
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Social Share
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      Configure social sharing buttons
                    </p>
                  </div>
                  {expandedSections.socialShare ? (
                    <ChevronDown size={16} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-400" />
                  )}
                </button>

                {expandedSections.socialShare && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-xs font-semibold text-gray-900 dark:text-white">
                          Show Social Share Buttons
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          Display social sharing options
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={postSettings.showSocialShare}
                          onChange={(e) =>
                            setPostSettings((prev) => ({
                              ...prev,
                              showSocialShare: e.target.checked,
                            }))
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    {postSettings.showSocialShare && (
                      <div className="space-y-3 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                        {["facebook", "twitter", "linkedin", "whatsapp"].map((platform) => (
                          <div key={platform} className="flex items-center justify-between">
                            <label className="text-xs font-medium text-gray-700 dark:text-gray-300 capitalize">
                              {platform}
                            </label>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={postSettings.socialShareButtons[platform] || false}
                                onChange={(e) =>
                                  setPostSettings((prev) => ({
                                    ...prev,
                                    socialShareButtons: {
                                      ...prev.socialShareButtons,
                                      [platform]: e.target.checked,
                                    },
                                  }))
                                }
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
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
