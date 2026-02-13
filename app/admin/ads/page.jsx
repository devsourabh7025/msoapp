"use client";

import { useState, useEffect } from "react";
import {
  Save,
  Edit2,
  Eye,
  EyeOff,
  Image as ImageIcon,
  Code,
  Upload,
} from "lucide-react";

export default function AdsManagement() {
  const [activeTab, setActiveTab] = useState("homepage"); // "homepage" | "post"
  const [homepageAdSettings, setHomepageAdSettings] = useState({
    maxAds: 5,
    adSpaces: [],
  });
  const [postAdSettings, setPostAdSettings] = useState({
    topAd: { type: "image", imageUrl: "", code: "", link: "", alt: "Advertisement", enabled: false },
    sidebarAd: { type: "image", imageUrl: "", code: "", link: "", alt: "Advertisement", enabled: false },
  });
  const [savingSettings, setSavingSettings] = useState(false);
  const [loadingSettings, setLoadingSettings] = useState(true);
  const [editingSpace, setEditingSpace] = useState(null);
  const [editingPostAd, setEditingPostAd] = useState(null); // "topAd" | "sidebarAd"
  const [showContentForm, setShowContentForm] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [contentFormData, setContentFormData] = useState({
    type: "image",
    imageUrl: "",
    code: "",
    link: "",
    alt: "Advertisement",
  });

  useEffect(() => {
    loadHomepageAdSettings();
    loadPostAdSettings();
  }, []);

  const loadPostAdSettings = async () => {
    try {
      const response = await fetch("/api/settings/post-ads");
      if (response.ok) {
        const data = await response.json();
        if (data.settings) {
          setPostAdSettings({
            topAd: { type: "image", imageUrl: "", code: "", link: "", alt: "Advertisement", enabled: false, ...data.settings.topAd },
            sidebarAd: { type: "image", imageUrl: "", code: "", link: "", alt: "Advertisement", enabled: false, ...data.settings.sidebarAd },
          });
        }
      }
    } catch (error) {
      console.error("Error loading post ad settings:", error);
    }
  };

  const loadHomepageAdSettings = async () => {
    try {
      setLoadingSettings(true);
      const response = await fetch("/api/settings/homepage-ads");
      if (response.ok) {
        const data = await response.json();
        if (data.settings) {
          const settings = data.settings;
          if (!settings.maxAds) {
            settings.maxAds = 5;
          }
          if (!settings.adSpaces || settings.adSpaces.length !== 5) {
            // Ensure exactly 5 ad spaces
            settings.adSpaces = [
              {
                spaceNumber: 1,
                type: "image",
                imageUrl: "",
                code: "",
                link: "",
                alt: "Advertisement",
                enabled: false,
              },
              {
                spaceNumber: 2,
                type: "image",
                imageUrl: "",
                code: "",
                link: "",
                alt: "Advertisement",
                enabled: false,
              },
              {
                spaceNumber: 3,
                type: "image",
                imageUrl: "",
                code: "",
                link: "",
                alt: "Advertisement",
                enabled: false,
              },
              {
                spaceNumber: 4,
                type: "image",
                imageUrl: "",
                code: "",
                link: "",
                alt: "Advertisement",
                enabled: false,
              },
              {
                spaceNumber: 5,
                type: "image",
                imageUrl: "",
                code: "",
                link: "",
                alt: "Advertisement",
                enabled: false,
              },
            ];
          }
          setHomepageAdSettings(settings);
        }
      }
    } catch (error) {
      console.error("Error loading homepage ad settings:", error);
    } finally {
      setLoadingSettings(false);
    }
  };

  const handleSaveHomepageSettings = async () => {
    try {
      setSavingSettings(true);
      const response = await fetch("/api/settings/homepage-ads", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ settings: homepageAdSettings }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        alert(errorData.error || "Failed to save ad spaces");
        return;
      }

      alert("Ad spaces saved successfully!");
    } catch (error) {
      console.error("Error saving ad spaces:", error);
      alert("Failed to save ad spaces");
    } finally {
      setSavingSettings(false);
    }
  };

  const updateAdSpace = (spaceNumber, field, value) => {
    setHomepageAdSettings((prev) => ({
      ...prev,
      adSpaces: prev.adSpaces.map((space) =>
        space.spaceNumber === spaceNumber
          ? { ...space, [field]: value }
          : space,
      ),
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB");
      return;
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    try {
      setUploadingImage(true);
      // Convert to base64 data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setContentFormData({
          ...contentFormData,
          imageUrl: reader.result,
        });
        setUploadingImage(false);
      };
      reader.onerror = () => {
        alert("Failed to read image file");
        setUploadingImage(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image");
      setUploadingImage(false);
    }
  };

  const handleEditContent = (space) => {
    setEditingPostAd(null);
    setEditingSpace(space);
    setContentFormData({
      type: space.type || "image",
      imageUrl: space.imageUrl || "",
      code: space.code || "",
      link: space.link || "",
      alt: space.alt || "Advertisement",
    });
    setShowContentForm(true);
  };

  const handleSaveContent = () => {
    if (editingPostAd) {
      handleSavePostAdContent();
      return;
    }
    if (!editingSpace) return;

    setHomepageAdSettings((prev) => ({
      ...prev,
      adSpaces: prev.adSpaces.map((space) =>
        space.spaceNumber === editingSpace.spaceNumber
          ? {
              ...space,
              type: contentFormData.type,
              imageUrl: contentFormData.imageUrl,
              code: contentFormData.code,
              link: contentFormData.link,
              alt: contentFormData.alt,
            }
          : space,
      ),
    }));

    setShowContentForm(false);
    setEditingSpace(null);
    setEditingPostAd(null);
    setContentFormData({
      type: "image",
      imageUrl: "",
      code: "",
      link: "",
      alt: "Advertisement",
    });
  };

  const toggleEnabled = (spaceNumber) => {
    updateAdSpace(
      spaceNumber,
      "enabled",
      !homepageAdSettings.adSpaces.find((s) => s.spaceNumber === spaceNumber)
        .enabled,
    );
  };

  const handleSavePostAdSettings = async () => {
    try {
      setSavingSettings(true);
      const response = await fetch("/api/settings/post-ads", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings: postAdSettings }),
      });
      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        alert(err.error || "Failed to save post ads");
        return;
      }
      alert("Post ads saved successfully!");
    } catch (error) {
      console.error("Error saving post ads:", error);
      alert("Failed to save post ads");
    } finally {
      setSavingSettings(false);
    }
  };

  const updatePostAd = (adKey, field, value) => {
    setPostAdSettings((prev) => ({
      ...prev,
      [adKey]: { ...prev[adKey], [field]: value },
    }));
  };

  const handleEditPostAd = (adKey) => {
    setEditingPostAd(adKey);
    const ad = postAdSettings[adKey];
    setContentFormData({
      type: ad.type || "image",
      imageUrl: ad.imageUrl || "",
      code: ad.code || "",
      link: ad.link || "",
      alt: ad.alt || "Advertisement",
    });
    setShowContentForm(true);
  };

  const handleSavePostAdContent = () => {
    if (!editingPostAd) return;
    setPostAdSettings((prev) => ({
      ...prev,
      [editingPostAd]: {
        ...prev[editingPostAd],
        type: contentFormData.type,
        imageUrl: contentFormData.imageUrl,
        code: contentFormData.code,
        link: contentFormData.link,
        alt: contentFormData.alt,
      },
    }));
    setShowContentForm(false);
    setEditingPostAd(null);
    setContentFormData({ type: "image", imageUrl: "", code: "", link: "", alt: "Advertisement" });
  };

  const togglePostAdEnabled = (adKey) => {
    updatePostAd(adKey, "enabled", !postAdSettings[adKey].enabled);
  };

  const hasContent = (space) => {
    return (
      (space.type === "image" && space.imageUrl) ||
      (space.type === "code" && space.code)
    );
  };

  if (loadingSettings) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">Loading ad spaces...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200 dark:border-gray-800 pb-4">
        <button
          onClick={() => setActiveTab("homepage")}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            activeTab === "homepage"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          Homepage Ads
        </button>
        <button
          onClick={() => setActiveTab("post")}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            activeTab === "post"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          Post Page Ads
        </button>
      </div>

      {activeTab === "homepage" && (
      <>
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Homepage Ad Spaces
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage 5 ad spaces that appear after every section on the homepage.
            Add content (code or image) to each space.
          </p>
        </div>

        {/* Max Ads Limit Setting */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-1">
                Maximum Ads to Show After Each Section
              </label>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Limit how many enabled ad spaces appear after each section (0-5)
              </p>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                max="5"
                value={homepageAdSettings.maxAds || 5}
                onChange={(e) =>
                  setHomepageAdSettings({
                    ...homepageAdSettings,
                    maxAds: parseInt(e.target.value) || 0,
                  })
                }
                className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-center font-semibold"
              />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                / {homepageAdSettings.adSpaces.filter((s) => s.enabled).length}{" "}
                enabled
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Spaces List */}
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Ad Spaces ({homepageAdSettings.adSpaces.length})
          </h3>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {homepageAdSettings.adSpaces.length === 0 ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              No ad spaces found. Click "Add Ad Space" to create one.
            </div>
          ) : (
            homepageAdSettings.adSpaces.map((space, index) => (
              <div
                key={space.spaceNumber}
                className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors ${
                  !space.enabled ? "opacity-60" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Space Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-bold text-sm">
                        Ad Space {space.spaceNumber}
                      </span>
                      {hasContent(space) ? (
                        <span className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">
                          {space.type === "image" ? (
                            <ImageIcon size={12} />
                          ) : (
                            <Code size={12} />
                          )}
                          {space.type === "image" ? "Image" : "Code"}
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded text-xs">
                          No Content
                        </span>
                      )}
                      {space.enabled ? (
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs font-medium">
                          Active
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded text-xs font-medium">
                          Disabled
                        </span>
                      )}
                    </div>
                    {hasContent(space) && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {space.type === "image" && space.imageUrl && (
                          <div className="flex items-center gap-2">
                            <img
                              src={space.imageUrl}
                              alt="Preview"
                              className="w-20 h-12 object-cover rounded border border-gray-200 dark:border-gray-700"
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                            <p className="truncate flex-1">
                              {space.imageUrl.length > 50
                                ? space.imageUrl.substring(0, 50) + "..."
                                : space.imageUrl}
                            </p>
                          </div>
                        )}
                        {space.type === "code" && space.code && (
                          <p className="font-mono truncate text-xs">
                            {space.code.substring(0, 80)}...
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleEnabled(space.spaceNumber)}
                      className={`p-2 rounded transition-colors ${
                        space.enabled
                          ? "text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
                          : "text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                      title={space.enabled ? "Disable" : "Enable"}
                    >
                      {space.enabled ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                    <button
                      onClick={() => handleEditContent(space)}
                      className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors"
                      title="Add/Edit Content (Image or Ad Code)"
                    >
                      <Edit2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Total Spaces:{" "}
            <span className="font-semibold">
              {homepageAdSettings.adSpaces.length}
            </span>{" "}
            | Enabled:{" "}
            <span className="font-semibold text-green-600">
              {homepageAdSettings.adSpaces.filter((s) => s.enabled).length}
            </span>{" "}
            | Max to Show:{" "}
            <span className="font-semibold text-blue-600">
              {homepageAdSettings.maxAds || 5}
            </span>
          </p>
          <button
            onClick={handleSaveHomepageSettings}
            disabled={savingSettings}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save size={16} />
            {savingSettings ? "Saving..." : "Save All Changes"}
          </button>
        </div>
      </div>
      </>
      )}

      {activeTab === "post" && (
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Post Page Ads
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Configure ads for the post page: top (above content) and sidebar.
            </p>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {["topAd", "sidebarAd"].map((adKey) => {
              const ad = postAdSettings[adKey];
              const label = adKey === "topAd" ? "Top Ad (above post content)" : "Sidebar Ad";
              const hasAdContent = (ad.type === "image" && ad.imageUrl?.trim()) || (ad.type === "code" && ad.code?.trim());
              return (
                <div key={adKey} className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{label}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {hasAdContent ? (ad.type === "image" ? "Image" : "Code") : "No content"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => togglePostAdEnabled(adKey)}
                      className={`p-2 rounded ${ad.enabled ? "text-green-600" : "text-gray-400"}`}
                      title={ad.enabled ? "Disable" : "Enable"}
                    >
                      {ad.enabled ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                    <button
                      onClick={() => handleEditPostAd(adKey)}
                      className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded"
                      title="Edit"
                    >
                      <Edit2 size={18} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={handleSavePostAdSettings}
              disabled={savingSettings}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50"
            >
              <Save size={16} />
              {savingSettings ? "Saving..." : "Save Post Ads"}
            </button>
          </div>
        </div>
      )}

      {/* Content Form Modal - shared for homepage and post ads */}
      {showContentForm && (editingSpace || editingPostAd) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {editingPostAd
                    ? `Post Ad - ${editingPostAd === "topAd" ? "Top" : "Sidebar"}`
                    : `Add Content to Ad Space ${editingSpace?.spaceNumber}`}
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Add an image or paste ad code (Google Ads, AdSense, etc.)
                </p>
              </div>
              <button
                onClick={() => {
                  setShowContentForm(false);
                  setEditingSpace(null);
                  setEditingPostAd(null);
                }}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Content Type *
                </label>
                <select
                  value={contentFormData.type}
                  onChange={(e) =>
                    setContentFormData({
                      ...contentFormData,
                      type: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="image">Image Advertisement</option>
                  <option value="code">Ad Code (Google Ads, HTML, JavaScript)</option>
                </select>
              </div>

              {contentFormData.type === "image" ? (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Image *
                    </label>
                    <div className="space-y-3">
                      <input
                        type="url"
                        value={contentFormData.imageUrl}
                        onChange={(e) =>
                          setContentFormData({
                            ...contentFormData,
                            imageUrl: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="https://example.com/image.jpg"
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          OR
                        </span>
                        <label className="flex-1">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            disabled={uploadingImage}
                          />
                          <span
                            className={`inline-flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer text-sm transition-colors ${uploadingImage ? "opacity-50 cursor-not-allowed" : ""}`}
                          >
                            <Upload size={16} />
                            {uploadingImage ? "Uploading..." : "Upload Image"}
                          </span>
                        </label>
                      </div>
                      {contentFormData.imageUrl && (
                        <div className="mt-3">
                          <img
                            src={contentFormData.imageUrl}
                            alt="Preview"
                            className="w-full max-w-md h-48 object-contain rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Enter image URL or upload an image file (max 5MB)
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Link URL (optional)
                    </label>
                    <input
                      type="url"
                      value={contentFormData.link}
                      onChange={(e) =>
                        setContentFormData({
                          ...contentFormData,
                          link: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="https://example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Alt Text
                    </label>
                    <input
                      type="text"
                      value={contentFormData.alt}
                      onChange={(e) =>
                        setContentFormData({
                          ...contentFormData,
                          alt: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Advertisement"
                    />
                  </div>
                </>
              ) : (
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Ad Code (Google Ads, HTML, JavaScript) *
                  </label>
                  <div className="mb-2 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <p className="text-xs text-blue-700 dark:text-blue-300 font-medium mb-1">
                      💡 How to add Google Ads or other ad codes:
                    </p>
                    <ul className="text-xs text-blue-600 dark:text-blue-400 space-y-1 list-disc list-inside">
                      <li>Copy the complete ad code from Google Ads, AdSense, or any ad network</li>
                      <li>Paste it directly into the textbox below</li>
                      <li>The code will be rendered exactly as provided</li>
                    </ul>
                  </div>
                  <textarea
                    value={contentFormData.code}
                    onChange={(e) =>
                      setContentFormData({
                        ...contentFormData,
                        code: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-mono text-sm"
                    rows={12}
                    placeholder='<!-- Paste your Google Ads code here -->&#10;&#10;<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>&#10;<ins class="adsbygoogle"&#10;     style="display:block"&#10;     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"&#10;     data-ad-slot="1234567890"&#10;     data-ad-format="auto"></ins>&#10;<script>&#10;     (adsbygoogle = window.adsbygoogle || []).push({});&#10;</script>&#10;&#10;<!-- Or paste any other HTML/JavaScript ad code -->'
                    required
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Paste your complete ad code here. Supports Google Ads, AdSense, and any HTML/JavaScript ad code.
                  </p>
                  {contentFormData.code && contentFormData.code.trim() && (
                    <div className="mt-2 p-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded">
                      <p className="text-xs text-green-700 dark:text-green-300">
                        ✓ Code detected ({contentFormData.code.length} characters)
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="flex gap-3 justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="button"
                  onClick={() => {
                    setShowContentForm(false);
                    setEditingSpace(null);
                    setEditingPostAd(null);
                  }}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveContent}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Save size={16} />
                  Save Content
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
