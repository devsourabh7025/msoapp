"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

const defaultFooter = {
  brandName: "MSO",
  tagline: "Empowering Maharashtra's startup ecosystem with news, insights, and stories that matter.",
  address: "Pune, Maharashtra, India",
  email: "hello@mso.in",
  phone: "",
  socialLinks: {
    facebook: "",
    twitter: "",
    youtube: "",
    instagram: "",
    linkedin: "",
  },
  brands: [
    { label: "Equity Intel" },
    { label: "The AI Index" },
    { label: "Start-Up Narrative" },
    { label: "Fearless & Fabulous" },
    { label: "Social Impact" },
    { label: "Corporate Intel" },
    { label: "Beyond Work" },
    { label: "MSO Studio" },
  ],
  topics: [
    { label: "Practo" },
    { label: "Microsoft" },
    { label: "Ola" },
    { label: "Swiggy" },
    { label: "Zomato" },
    { label: "Uber" },
    { label: "Amazon" },
    { label: "Cred" },
  ],
  resources: [],
  company: [],
  legal: [],
  bottomLinks: [],
  copyright: "© {year} Maharashtra Startup Organisation. All rights reserved.",
  newsletter: {
    title: "Stay Informed",
    headline: "Get the daily briefing that matters",
    subtitle: "Startup breakthroughs, corporate strategy, and market moves — delivered in a five-minute read.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
  },
};

function mergeWithDefaults(saved) {
  if (!saved || typeof saved !== "object") return { ...defaultFooter };
  return {
    ...defaultFooter,
    ...saved,
    socialLinks: { ...defaultFooter.socialLinks, ...(saved.socialLinks || {}) },
    brands: Array.isArray(saved.brands) ? saved.brands : defaultFooter.brands,
    topics: Array.isArray(saved.topics) ? saved.topics : defaultFooter.topics,
    resources: Array.isArray(saved.resources) ? saved.resources : [],
    company: Array.isArray(saved.company) ? saved.company : [],
    legal: Array.isArray(saved.legal) ? saved.legal : [],
    bottomLinks: Array.isArray(saved.bottomLinks) ? saved.bottomLinks : [],
    newsletter: { ...defaultFooter.newsletter, ...(saved.newsletter || {}) },
  };
}

export default function FooterCustomise() {
  const [saving, setSaving] = useState(false);
  const [footerContent, setFooterContent] = useState(defaultFooter);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/settings/footer");
        if (res.ok) {
          const data = await res.json();
          if (data.footer) setFooterContent(mergeWithDefaults(data.footer));
        }
      } catch (e) {
        console.error("Error loading footer:", e);
      }
    };
    load();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/settings/footer", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ footer: footerContent }),
        credentials: "include",
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        alert(data.error || data.message || "Failed to save");
        return;
      }
      alert(data.message || "Footer saved successfully.");
    } catch (err) {
      alert(err.message || "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const addItem = (section, item = { label: "", url: "" }) => {
    setFooterContent((prev) => ({
      ...prev,
      [section]: [...(prev[section] || []), item],
    }));
  };

  const updateItem = (section, index, field, value) => {
    setFooterContent((prev) => ({
      ...prev,
      [section]: (prev[section] || []).map((it, i) =>
        i === index ? { ...it, [field]: value } : it
      ),
    }));
  };

  const removeItem = (section, index) => {
    setFooterContent((prev) => ({
      ...prev,
      [section]: (prev[section] || []).filter((_, i) => i !== index),
    }));
  };

  const updateNewsletter = (field, value) => {
    setFooterContent((prev) => ({
      ...prev,
      newsletter: { ...(prev.newsletter || {}), [field]: value },
    }));
  };

  const linkSections = [
    { key: "resources", label: "Resources" },
    { key: "company", label: "Discover" },
    { key: "legal", label: "Legal & Support" },
    { key: "bottomLinks", label: "Bottom Bar Links" },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Footer</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          All footer content is editable. No static text — everything is saved and shown from here.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 divide-y divide-gray-200 dark:divide-gray-800">
          {/* Brand & contact */}
          <div className="p-5 space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Brand & Contact</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Brand name</label>
                <input
                  type="text"
                  value={footerContent.brandName ?? ""}
                  onChange={(e) => setFooterContent((p) => ({ ...p, brandName: e.target.value }))}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
                  placeholder="MSO"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Tagline</label>
                <input
                  type="text"
                  value={footerContent.tagline ?? ""}
                  onChange={(e) => setFooterContent((p) => ({ ...p, tagline: e.target.value }))}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
                  placeholder="Empowering Maharashtra's startup ecosystem..."
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Address / Location</label>
                <input
                  type="text"
                  value={footerContent.address ?? ""}
                  onChange={(e) => setFooterContent((p) => ({ ...p, address: e.target.value }))}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
                  placeholder="Pune, Maharashtra, India"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  value={footerContent.email ?? ""}
                  onChange={(e) => setFooterContent((p) => ({ ...p, email: e.target.value }))}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
                  placeholder="hello@mso.in"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Phone (optional)</label>
                <input
                  type="text"
                  value={footerContent.phone ?? ""}
                  onChange={(e) => setFooterContent((p) => ({ ...p, phone: e.target.value }))}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
                  placeholder="+91 ..."
                />
              </div>
            </div>
          </div>

          {/* Brands */}
          <div className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Brands column</h4>
              <button
                type="button"
                onClick={() => addItem("brands", { label: "" })}
                className="text-xs font-medium text-red-600 hover:text-red-700 flex items-center gap-1"
              >
                <Plus size={12} /> Add
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Labels shown in the Brands column. Optional URL makes it a link.</p>
            <div className="space-y-2">
              {(footerContent.brands || []).map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={item.label ?? ""}
                    onChange={(e) => updateItem("brands", i, "label", e.target.value)}
                    className="flex-1 px-2 py-1.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded"
                    placeholder="Label"
                  />
                  <input
                    type="text"
                    value={item.url ?? ""}
                    onChange={(e) => updateItem("brands", i, "url", e.target.value)}
                    className="flex-1 px-2 py-1.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded"
                    placeholder="URL (optional)"
                  />
                  <button type="button" onClick={() => removeItem("brands", i)} className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded">
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Topics */}
          <div className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Topics column</h4>
              <button
                type="button"
                onClick={() => addItem("topics", { label: "" })}
                className="text-xs font-medium text-red-600 hover:text-red-700 flex items-center gap-1"
              >
                <Plus size={12} /> Add
              </button>
            </div>
            <div className="space-y-2">
              {(footerContent.topics || []).map((item, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={item.label ?? ""}
                    onChange={(e) => updateItem("topics", i, "label", e.target.value)}
                    className="flex-1 px-2 py-1.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded"
                    placeholder="Label"
                  />
                  <input
                    type="text"
                    value={item.url ?? ""}
                    onChange={(e) => updateItem("topics", i, "url", e.target.value)}
                    className="flex-1 px-2 py-1.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded"
                    placeholder="URL (optional)"
                  />
                  <button type="button" onClick={() => removeItem("topics", i)} className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded">
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="p-5 space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Newsletter strip (red bar)</h4>
            {["title", "headline", "subtitle", "placeholder", "buttonText"].map((field) => (
              <div key={field}>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">{field}</label>
                <input
                  type="text"
                  value={footerContent.newsletter?.[field] ?? ""}
                  onChange={(e) => updateNewsletter(field, e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
                  placeholder={field}
                />
              </div>
            ))}
          </div>

          {/* Link sections */}
          {linkSections.map(({ key, label }) => (
            <div key={key} className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{label}</h4>
                <button
                  type="button"
                  onClick={() => addItem(key)}
                  className="text-xs font-medium text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  <Plus size={12} /> Add link
                </button>
              </div>
              <div className="space-y-2">
                {(footerContent[key] || []).map((link, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <input
                      type="text"
                      value={link.title ?? ""}
                      onChange={(e) => updateItem(key, i, "title", e.target.value)}
                      className="flex-1 px-2 py-1.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      value={link.url ?? ""}
                      onChange={(e) => updateItem(key, i, "url", e.target.value)}
                      className="flex-1 px-2 py-1.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded"
                      placeholder="URL"
                    />
                    <button type="button" onClick={() => removeItem(key, i)} className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded">
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Copyright */}
          <div className="p-5">
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Copyright (use {"{year}"} for current year)</label>
            <input
              type="text"
              value={footerContent.copyright ?? ""}
              onChange={(e) => setFooterContent((p) => ({ ...p, copyright: e.target.value }))}
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded"
              placeholder="© {year} Company. All rights reserved."
            />
          </div>

          {/* Social (optional) */}
          <div className="p-5 space-y-3">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Social links (optional)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["facebook", "twitter", "youtube", "instagram", "linkedin"].map((platform) => (
                <div key={platform} className="flex items-center gap-2">
                  <label className="w-20 text-xs text-gray-600 dark:text-gray-400 capitalize">{platform}</label>
                  <input
                    type="url"
                    value={footerContent.socialLinks?.[platform] ?? ""}
                    onChange={(e) =>
                      setFooterContent((p) => ({
                        ...p,
                        socialLinks: { ...(p.socialLinks || {}), [platform]: e.target.value },
                      }))
                    }
                    className="flex-1 px-2 py-1.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded"
                    placeholder={`https://${platform}.com/...`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 flex justify-end border-t border-gray-200 dark:border-gray-800">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded disabled:opacity-50"
            >
              <Save size={16} />
              {saving ? "Saving..." : "Save footer"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
