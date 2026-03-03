"use client";

import { useState, useEffect } from "react";
import { Save, X } from "lucide-react";
import axios from "axios";
import PostSelectorWithSearch from "@/components/PostSelectorWithSearch";

const defaultSubsections = [
  { id: "ai-index", name: "The AI Index", description: "", enabled: true, posts: [] },
  { id: "corporate-intel", name: "Corporate Intel", description: "", enabled: true, posts: [] },
  { id: "equity-intel", name: "Equity Intel", description: "", enabled: true, posts: [] },
  { id: "sector-deep-dives", name: "Sector Deep Dives", description: "", enabled: true, posts: [] },
  { id: "policy-tracker", name: "Policy Tracker", description: "", enabled: true, posts: [] },
];

const POSTS_LIMIT = 3;

const getAuthorLabel = (author) =>
  typeof author === "object" ? author?.name : author || "Unknown";

export default function NewsIntelCustomise() {
  const [content, setContent] = useState({ subsections: defaultSubsections });
  const [settings, setSettings] = useState({
    title: "News & Intel",
    subtitle: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [openSelectorFor, setOpenSelectorFor] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/settings/news-intel");
        const data = res.data;
        if (data?.content?.subsections?.length > 0) {
          setContent({ subsections: data.content.subsections });
        }
        if (data?.settings) {
          setSettings((prev) => ({
            ...prev,
            title: data.settings.title || "News & Intel",
            subtitle: data.settings.subtitle || "",
          }));
        }
      } catch (error) {
        console.error("Error loading News & Intel:", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const addPostToSubsection = (subIndex, post) => {
    setContent((prev) => {
      const next = [...prev.subsections];
      const sub = next[subIndex];
      if (!sub.posts) sub.posts = [];
      if (sub.posts.length >= POSTS_LIMIT) return prev;
      if (sub.posts.some((p) => p._id === post._id)) return prev;
      next[subIndex] = { ...sub, posts: [...sub.posts, post] };
      return { subsections: next };
    });
    setOpenSelectorFor(null);
  };

  const removePostFromSubsection = (subIndex, postId) => {
    setContent((prev) => {
      const next = [...prev.subsections];
      next[subIndex] = {
        ...next[subIndex],
        posts: (next[subIndex].posts || []).filter((p) => p._id !== postId),
      };
      return { subsections: next };
    });
  };

  const movePostInSubsection = (subIndex, fromIdx, toIdx) => {
    setContent((prev) => {
      const next = [...prev.subsections];
      const posts = [...(next[subIndex].posts || [])];
      if (toIdx < 0 || toIdx >= posts.length) return prev;
      [posts[fromIdx], posts[toIdx]] = [posts[toIdx], posts[fromIdx]];
      next[subIndex] = { ...next[subIndex], posts };
      return { subsections: next };
    });
  };

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
      await axios.put("/api/settings/news-intel", { content, settings }, { headers: { "Content-Type": "application/json" }, withCredentials: true });
      alert("News & Intel section saved successfully!");
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || error.message || "Failed to save"}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-sm text-gray-500">Loading News & Intel settings...</div>
      </div>
    );
  }

  const subsections = content.subsections || defaultSubsections;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">News & Intel</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Assign up to 3 posts per subsection. First select a category, then choose posts from that category.
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
                placeholder="News & Intel"
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">Subtitle (optional)</label>
              <input
                type="text"
                value={settings.subtitle}
                onChange={(e) => setSettings((p) => ({ ...p, subtitle: e.target.value }))}
                placeholder=""
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Subsections (3 posts each)</h3>
              {subsections.map((sub, subIndex) => (
                <div key={sub.id} className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3 flex-1">
                      <input
                        type="checkbox"
                        id={`enabled-${sub.id}`}
                        checked={sub.enabled !== false}
                        onChange={() => toggleSubsection(subIndex)}
                        className="w-4 h-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
                      />
                      <input
                        type="text"
                        value={sub.name}
                        onChange={(e) => updateSubsection(subIndex, "name", e.target.value)}
                        placeholder="Subsection name"
                        className="px-3 py-2 text-sm font-bold border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-slate-500"
                      />
                    </div>
                    {(sub.posts || []).length < POSTS_LIMIT && (
                      <button
                        type="button"
                        onClick={() => setOpenSelectorFor(openSelectorFor === subIndex ? null : subIndex)}
                        className="px-3 py-1.5 text-xs font-medium bg-slate-600 hover:bg-slate-700 text-white rounded shrink-0"
                      >
                        {openSelectorFor === subIndex ? "Cancel" : "Add Post"}
                      </button>
                    )}
                  </div>

                  {(sub.posts || []).length > 0 ? (
                    <div className="space-y-2 mb-2">
                      {sub.posts.map((post, idx) => (
                        <div key={post._id} className="flex items-center justify-between gap-3 bg-white dark:bg-gray-800 p-2.5 rounded border">
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <span className="text-xs font-mono text-gray-500 w-5">{idx + 1}</span>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">{post.title}</div>
                              <div className="text-[11px] text-gray-500 dark:text-gray-400">{getAuthorLabel(post.author)}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              type="button"
                              onClick={() => movePostInSubsection(subIndex, idx, idx - 1)}
                              disabled={idx === 0}
                              className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-40"
                            >
                              ↑
                            </button>
                            <button
                              type="button"
                              onClick={() => movePostInSubsection(subIndex, idx, idx + 1)}
                              disabled={idx === sub.posts.length - 1}
                              className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-40"
                            >
                              ↓
                            </button>
                            <button
                              type="button"
                              onClick={() => removePostFromSubsection(subIndex, post._id)}
                              className="p-1 text-gray-500 hover:text-slate-600"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">No posts. Click &quot;Add Post&quot; to assign (select category first).</p>
                  )}

                  {openSelectorFor === subIndex && (
                    <PostSelectorWithSearch
                      onSelect={(post) => addPostToSubsection(subIndex, post)}
                      excludeIds={(sub.posts || []).map((p) => p._id)}
                      placeholder={`Select category first, then add posts to ${sub.name}`}
                      requireCategoryFirst
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-700 disabled:opacity-60 text-white text-sm font-bold rounded"
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
