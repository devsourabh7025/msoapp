"use client";

import { useState, useEffect } from "react";
import { Save } from "lucide-react";
import axios from "axios";

const defaultSubsections = [
  { id: "browse-startups", name: "Browse Startups", description: "A searchable directory of registered Maharashtra startups.", enabled: true, url: "" },
  { id: "funding-calculator", name: "Funding Calculator", description: "Tools for valuation estimates and runway tracking.", enabled: true, url: "" },
  { id: "global-corporate-db", name: "Global Corporate Database", description: "Searchable data for networking and intelligence.", enabled: true, url: "" },
  { id: "pitch-deck-gallery", name: "Pitch Deck Gallery", description: "A collection of successful decks for founder learning.", enabled: true, url: "" },
  { id: "talent-portal", name: "Talent Portal", description: "A niche job board for startup-specific roles in the region.", enabled: true, url: "" },
];

export default function ToolsDatabaseCustomise() {
  const [content, setContent] = useState({ subsections: defaultSubsections });
  const [settings, setSettings] = useState({
    title: "Tools & Database",
    subtitle: "Becoming an Essential Hub for founders.",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/settings/tools-database");
        const data = res.data;
        if (data?.content?.subsections?.length > 0) {
          setContent({ subsections: data.content.subsections });
        }
        if (data?.settings) {
          setSettings((prev) => ({
            ...prev,
            title: data.settings.title || "Tools & Database",
            subtitle: data.settings.subtitle || "Becoming an Essential Hub for founders.",
          }));
        }
      } catch (error) {
        console.error("Error loading Tools & Database:", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const updateSubsection = (index, field, value) => {
    setContent((prev) => {
      const next = [...prev.subsections];
      next[index] = { ...next[index], [field]: value };
      return { subsections: next };
    });
  };

  const toggleSubsection = (index) => {
    setContent((prev) => {
      const next = [...prev.subsections];
      next[index] = { ...next[index], enabled: !next[index].enabled };
      return { subsections: next };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await axios.put("/api/settings/tools-database", { content, settings }, { headers: { "Content-Type": "application/json" }, withCredentials: true });
      alert("Tools & Database section saved successfully!");
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || error.message || "Failed to save"}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-sm text-gray-500">Loading Tools & Database settings...</div>
      </div>
    );
  }

  const subsections = content.subsections || defaultSubsections;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Tools & Database</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Essential Hub for founders. Configure each tool: name, description, and link URL.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">Section Title</label>
              <input
                type="text"
                value={settings.title}
                onChange={(e) => setSettings((p) => ({ ...p, title: e.target.value }))}
                placeholder="Tools & Database"
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">Subtitle</label>
              <input
                type="text"
                value={settings.subtitle}
                onChange={(e) => setSettings((p) => ({ ...p, subtitle: e.target.value }))}
                placeholder="Becoming an Essential Hub for founders."
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Tools</h3>
              {subsections.map((sub, subIndex) => (
                <div key={sub.id} className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-3">
                    <input
                      type="checkbox"
                      id={`enabled-${sub.id}`}
                      checked={sub.enabled !== false}
                      onChange={() => toggleSubsection(subIndex)}
                      className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <span className="text-xs text-gray-500">Show on homepage</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Name</label>
                      <input
                        type="text"
                        value={sub.name}
                        onChange={(e) => updateSubsection(subIndex, "name", e.target.value)}
                        placeholder="Tool name"
                        className="w-full px-3 py-2 text-sm font-bold border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Description</label>
                      <textarea
                        value={sub.description}
                        onChange={(e) => updateSubsection(subIndex, "description", e.target.value)}
                        placeholder="Short description"
                        rows={2}
                        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Link URL</label>
                      <input
                        type="url"
                        value={sub.url || ""}
                        onChange={(e) => updateSubsection(subIndex, "url", e.target.value)}
                        placeholder="https://... or /path"
                        className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <p className="text-[11px] text-gray-500 mt-1">Leave empty to show as coming soon</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white text-sm font-bold rounded"
              >
                <Save size={16} />
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
