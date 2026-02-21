"use client";

import { useState, useEffect } from "react";
import { Save, Globe } from "lucide-react";
import axios from "axios";

const LANGUAGES = [
  { value: "en", label: "English" },
  { value: "hi", label: "हिन्दी (Hindi)" },
  { value: "mr", label: "मराठी (Marathi)" },
  { value: "ta", label: "தமிழ் (Tamil)" },
  { value: "te", label: "తెలుగు (Telugu)" },
  { value: "bn", label: "বাংলা (Bengali)" },
  { value: "gu", label: "ગુજરાતી (Gujarati)" },
  { value: "kn", label: "ಕನ್ನಡ (Kannada)" },
  { value: "ml", label: "മലയാളം (Malayalam)" },
];

export default function SiteCustomise() {
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get("/api/settings/site", { withCredentials: true });
        if (res.data?.site?.language) {
          setLanguage(res.data.site.language);
        }
      } catch (e) {
        console.error("Error loading site settings:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await axios.put(
        "/api/settings/site",
        { language },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      alert(res.data?.message || "Site settings saved.");
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
        <span className="text-sm text-gray-500">Loading site settings...</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Site Settings</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Language and other site-wide options for the whole website
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6">
            <div className="mb-4 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
              <Globe size={18} className="text-red-600 dark:text-red-400" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Language</h2>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              Choose the default language for the website. This affects labels, dates, and future translations.
            </p>
            <div className="max-w-sm">
              <label htmlFor="site-language" className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                Website language
              </label>
              <select
                id="site-language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                {LANGUAGES.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
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
