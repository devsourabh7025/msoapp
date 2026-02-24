"use client";

import { useState, useEffect } from "react";
import { Save, Type } from "lucide-react";
import axios from "axios";

const FONT_OPTIONS = [
  { value: "Inter", label: "Inter", category: "sans" },
  { value: "Poppins", label: "Poppins", category: "sans" },
  { value: "Roboto", label: "Roboto", category: "sans" },
  { value: "Open Sans", label: "Open Sans", category: "sans" },
  { value: "Lato", label: "Lato", category: "sans" },
  { value: "Montserrat", label: "Montserrat", category: "sans" },
  { value: "Raleway", label: "Raleway", category: "sans" },
  { value: "Source Sans 3", label: "Source Sans 3", category: "sans" },
  { value: "Work Sans", label: "Work Sans", category: "sans" },
  { value: "DM Sans", label: "DM Sans", category: "sans" },
  { value: "Nunito", label: "Nunito", category: "sans" },
  { value: "Oswald", label: "Oswald", category: "sans" },
  { value: "Playfair Display", label: "Playfair Display", category: "serif" },
  { value: "Merriweather", label: "Merriweather", category: "serif" },
  { value: "Lora", label: "Lora", category: "serif" },
  { value: "PT Serif", label: "PT Serif", category: "serif" },
  { value: "Libre Baskerville", label: "Libre Baskerville", category: "serif" },
  { value: "Georgia", label: "Georgia", category: "system" },
  { value: "system-ui", label: "System UI", category: "system" },
];

export default function SiteCustomise() {
  const [bodyFont, setBodyFont] = useState("Inter");
  const [headingFont, setHeadingFont] = useState("Inter");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get("/api/settings/site", { withCredentials: true });
        if (res.data?.site) {
          if (res.data.site.bodyFont) setBodyFont(res.data.site.bodyFont);
          if (res.data.site.headingFont) setHeadingFont(res.data.site.headingFont);
        }
      } catch (e) {
        console.error("Error loading site settings:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // Load selected fonts for dropdown preview
  useEffect(() => {
    const fonts = [bodyFont, headingFont].filter((f) => f && !["system-ui", "Georgia"].includes(f));
    if (fonts.length === 0) return;
    const family = fonts.map((f) => `family=${encodeURIComponent(f.replace(/ /g, "+"))}:wght@400;600;700`).join("&");
    const url = `https://fonts.googleapis.com/css2?${family}&display=swap`;
    let link = document.getElementById("admin-font-preview");
    if (link) link.remove();
    link = document.createElement("link");
    link.id = "admin-font-preview";
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
    return () => {
      const l = document.getElementById("admin-font-preview");
      if (l) l.remove();
    };
  }, [bodyFont, headingFont]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await axios.put(
        "/api/settings/site",
        { bodyFont, headingFont },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      alert(res.data?.message || "Font settings saved.");
    } catch (err) {
      const msg = err.response?.data?.error || err.message || "Failed to save";
      alert(`Error: ${msg}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <span className="text-sm text-gray-500">Loading font settings...</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Font Settings</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Choose fonts for your website. Changes apply site-wide.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6">
            <div className="mb-4 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <Type size={18} className="text-red-600 dark:text-red-400" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Website Fonts</h2>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              Select fonts for headings (titles) and body text. Preview will update after saving.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="body-font" className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                  Body font (paragraphs, general text)
                </label>
                <select
                  id="body-font"
                  value={bodyFont}
                  onChange={(e) => setBodyFont(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  style={{ fontFamily: bodyFont === "system-ui" ? "system-ui" : bodyFont }}
                >
                  {FONT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="heading-font" className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                  Heading font (titles, headings)
                </label>
                <select
                  id="heading-font"
                  value={headingFont}
                  onChange={(e) => setHeadingFont(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  style={{ fontFamily: headingFont === "system-ui" ? "system-ui" : headingFont }}
                >
                  {FONT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 text-sm rounded-lg hover:from-red-600 hover:to-red-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? (
                  <>
                    <span className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-white border-t-transparent" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={16} />
                    Save
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
