"use client";

import { useState, useEffect } from "react";
import { Save, Layout, Plus, X, Trash2 } from "lucide-react";

export default function FooterCustomise() {
  const [saving, setSaving] = useState(false);
  const [footerContent, setFooterContent] = useState({
    description: "Maharashtra Startup Organisation - Empowering entrepreneurs and startups across Maharashtra with resources, funding opportunities, mentorship, and a thriving ecosystem for innovation and growth.",
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
    resources: [
      { title: "Startup Stories", url: "/?category=startup-stories" },
      { title: "Success Stories", url: "/?category=success-stories" },
      { title: "Funding & Investment", url: "/?category=funding" },
      { title: "Incubators", url: "/?category=incubators" },
      { title: "Technology", url: "/?category=technology" },
      { title: "Business Strategy", url: "/?category=business" },
      { title: "Innovation", url: "/?category=innovation" },
      { title: "Entrepreneurship", url: "/?category=entrepreneurship" },
    ],
    company: [
      { title: "About Us", url: "/about" },
      { title: "Contact", url: "/contact" },
      { title: "Our Mission", url: "/" },
      { title: "Team", url: "/" },
      { title: "Careers", url: "/" },
      { title: "Partners", url: "/" },
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
    ],
    legal: [
      { title: "Privacy Policy", url: "/privacy-policy" },
      { title: "Terms of Service", url: "/privacy-policy" },
      { title: "Support", url: "/contact" },
      { title: "FAQs", url: "/" },
      { title: "Cookie Policy", url: "/" },
      { title: "GDPR", url: "/" },
      { title: "Accessibility", url: "/" },
    ],
    copyright: "© {year} Maharashtra Startup Organisation. All rights reserved.",
    tagline: "Empowering Maharashtra's startup ecosystem since 2024",
    bottomLinks: [
      { title: "Privacy", url: "/privacy-policy" },
      { title: "Terms", url: "/privacy-policy" },
      { title: "Support", url: "/contact" },
      { title: "Sitemap", url: "/" },
    ],
  });

  useEffect(() => {
    const loadFooterContent = async () => {
      try {
        // Try to load from API first
        const response = await fetch("/api/settings/footer");
        if (response.ok) {
          const data = await response.json();
          if (data.footer) {
            setFooterContent(data.footer);
            return;
          }
        }
      } catch (error) {
        console.error("Error loading footer from API:", error);
      }

      // Use default values if API fails
      // (default values are already set in initial state)
    };

    loadFooterContent();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const response = await fetch("/api/settings/footer", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ footer: footerContent }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || errorData.message || "Failed to save footer settings";
        alert(`Error: ${errorMessage}`);
        setSaving(false);
        return;
      }

      const result = await response.json();
      alert(result.message || "Footer settings saved successfully!");
    } catch (error) {
      console.error("Error saving footer:", error);
      alert(`Failed to save footer settings: ${error.message || "Network error. Please check your connection and try again."}`);
    } finally {
      setSaving(false);
    }
  };

  const addLink = (section) => {
    setFooterContent((prev) => ({
      ...prev,
      [section]: [...(prev[section] || []), { title: "", url: "" }],
    }));
  };

  const updateLink = (section, index, field, value) => {
    setFooterContent((prev) => ({
      ...prev,
      [section]: prev[section].map((link, i) =>
        i === index ? { ...link, [field]: value } : link
      ),
    }));
  };

  const removeLink = (section, index) => {
    setFooterContent((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Footer Customisation</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Customize all footer settings and links
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="p-5 space-y-6">
            {/* Basic Information */}
            <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Basic Information
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Organization details</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                    Description
                  </label>
                  <textarea
                    value={footerContent.description || ""}
                    onChange={(e) => {
                      setFooterContent((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }));
                    }}
                    rows={3}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Organization description..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                    Contact Information
                  </label>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={footerContent.email || ""}
                        onChange={(e) => {
                          setFooterContent((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }));
                        }}
                        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="contact@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={footerContent.phone || ""}
                        onChange={(e) => {
                          setFooterContent((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }));
                        }}
                        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="+91 123 456 7890"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        value={footerContent.address || ""}
                        onChange={(e) => {
                          setFooterContent((prev) => ({
                            ...prev,
                            address: e.target.value,
                          }));
                        }}
                        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Mumbai, Maharashtra, India"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-3">
                    Social Media Links
                  </label>
                  <div className="space-y-3">
                    {["facebook", "twitter", "youtube", "instagram", "linkedin"].map((platform) => (
                      <div key={platform} className="flex items-center gap-3">
                        <label className="w-24 text-xs font-medium text-gray-700 dark:text-gray-300 capitalize">
                          {platform}
                        </label>
                        <input
                          type="url"
                          value={footerContent.socialLinks?.[platform] || ""}
                          onChange={(e) => {
                            setFooterContent((prev) => ({
                              ...prev,
                              socialLinks: {
                                ...prev.socialLinks,
                                [platform]: e.target.value,
                              },
                            }));
                          }}
                          className="flex-1 px-3 py-2 text-xs border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                          placeholder={`https://${platform}.com`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links Sections */}
            {[
              { key: "resources", label: "Resources Links" },
              { key: "company", label: "Company Links" },
              { key: "legal", label: "Legal & Support Links" },
              { key: "bottomLinks", label: "Bottom Bar Links" },
            ].map(({ key, label }) => (
              <div key={key} className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="mb-4 pb-3 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {label}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Manage {label.toLowerCase()}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => addLink(key)}
                    className="px-3 py-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors flex items-center gap-1.5"
                  >
                    <Plus size={12} />
                    Add Link
                  </button>
                </div>

                <div className="space-y-2">
                  {(footerContent[key] || []).map((link, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800/50 rounded border border-gray-200 dark:border-gray-700">
                      <input
                        type="text"
                        value={link.title || ""}
                        onChange={(e) => updateLink(key, index, "title", e.target.value)}
                        className="flex-1 px-2 py-1.5 text-xs border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Link Title"
                      />
                      <input
                        type="text"
                        value={link.url || ""}
                        onChange={(e) => updateLink(key, index, "url", e.target.value)}
                        className="flex-1 px-2 py-1.5 text-xs border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="/path or https://example.com"
                      />
                      <button
                        type="button"
                        onClick={() => removeLink(key, index)}
                        className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                  {(!footerContent[key] || footerContent[key].length === 0) && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center py-4">
                      No links added. Click "Add Link" to get started.
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Copyright Section */}
            <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Copyright & Tagline
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Footer bottom text</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Copyright Text (use {"{year}"} for current year)
                  </label>
                  <input
                    type="text"
                    value={footerContent.copyright || ""}
                    onChange={(e) => {
                      setFooterContent((prev) => ({
                        ...prev,
                        copyright: e.target.value,
                      }));
                    }}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="© {year} Organization Name. All rights reserved."
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Tagline
                  </label>
                  <input
                    type="text"
                    value={footerContent.tagline || ""}
                    onChange={(e) => {
                      setFooterContent((prev) => ({
                        ...prev,
                        tagline: e.target.value,
                      }));
                    }}
                    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Empowering Maharashtra's startup ecosystem since 2024"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-6 mt-6 border-t border-gray-200 dark:border-gray-700 px-5 pb-5">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs rounded transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? (
                <>
                  <div className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-white border-t-transparent"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save size={14} />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
