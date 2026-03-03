"use client";

import { useState, useEffect } from "react";
import { Save, X } from "lucide-react";
import axios from "axios";
import PostSelectorWithSearch from "@/components/PostSelectorWithSearch";

const defaultSubsections = [
  { id: "growth-playbooks", name: "Growth Playbooks", description: "Step-by-step guides on hiring, marketing, and legal.", enabled: true, posts: [] },
  { id: "investor-relations", name: "Investor Relations", description: "How to find and talk to VCs and Angel investors.", enabled: true, posts: [] },
  { id: "market-reports", name: "Market Reports", description: "Quarterly PDF downloads on regional industry trends.", enabled: true, posts: [] },
  { id: "tech-tutorials", name: "Tech Tutorials", description: "How to implement The AI Index trends into your business.", enabled: true, posts: [] },
  { id: "expert-columns", name: "Expert Columns", description: "Guest articles from industry veterans and researchers.", enabled: true, posts: [] },
];

const POSTS_LIMIT = 1;

const getAuthorLabel = (author) =>
  typeof author === "object" ? author?.name : author || "Unknown";

export default function KnowledgeLabCustomise() {
  const [content, setContent] = useState({ subsections: defaultSubsections });
  const [settings, setSettings] = useState({
    title: "The Knowledge Lab",
    subtitle: "Long-form educational content and playbooks.",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [openSelectorFor, setOpenSelectorFor] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/settings/knowledge-lab");
        const data = res.data;
        if (data?.content?.subsections?.length > 0) {
          setContent({ subsections: data.content.subsections });
        }
        if (data?.settings) {
          setSettings((prev) => ({
            ...prev,
            title: data.settings.title || "The Knowledge Lab",
            subtitle: data.settings.subtitle || "Long-form educational content and playbooks.",
          }));
        }
      } catch (error) {
        console.error("Error loading Knowledge Lab:", error);
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
      next[subIndex] = { ...sub, posts: [post] };
      return { subsections: next };
    });
    setOpenSelectorFor(null);
  };

  const removePostFromSubsection = (subIndex) => {
    setContent((prev) => {
      const next = [...prev.subsections];
      next[subIndex] = { ...next[subIndex], posts: [] };
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
      await axios.put("/api/settings/knowledge-lab", { content, settings }, { headers: { "Content-Type": "application/json" }, withCredentials: true });
      alert("The Knowledge Lab section saved successfully!");
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || error.message || "Failed to save"}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-sm text-gray-500">Loading Knowledge Lab settings...</div>
      </div>
    );
  }

  const subsections = content.subsections || defaultSubsections;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">The Knowledge Lab</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Assign 1 post per category. Focus: Long-form educational content and playbooks.
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
                placeholder="The Knowledge Lab"
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">Subtitle</label>
              <input
                type="text"
                value={settings.subtitle}
                onChange={(e) => setSettings((p) => ({ ...p, subtitle: e.target.value }))}
                placeholder="Long-form educational content and playbooks."
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Categories (1 post each)</h3>
              {subsections.map((sub, subIndex) => (
                <div key={sub.id} className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3 flex-1">
                      <input
                        type="checkbox"
                        id={`enabled-${sub.id}`}
                        checked={sub.enabled !== false}
                        onChange={() => toggleSubsection(subIndex)}
                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <div className="flex-1">
                        <input
                          type="text"
                          value={sub.name}
                          onChange={(e) => updateSubsection(subIndex, "name", e.target.value)}
                          placeholder="Category name"
                          className="w-full px-3 py-2 text-sm font-bold border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-2"
                        />
                        <textarea
                          value={sub.description}
                          onChange={(e) => updateSubsection(subIndex, "description", e.target.value)}
                          placeholder="Description"
                          rows={2}
                          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                    {(sub.posts || []).length < POSTS_LIMIT && (
                      <button
                        type="button"
                        onClick={() => setOpenSelectorFor(openSelectorFor === subIndex ? null : subIndex)}
                        className="px-3 py-1.5 text-xs font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded shrink-0"
                      >
                        {openSelectorFor === subIndex ? "Cancel" : "Add Post"}
                      </button>
                    )}
                  </div>

                  {(sub.posts || []).length > 0 ? (
                    <div className="space-y-2 mb-2">
                      {sub.posts.map((post) => (
                        <div key={post._id} className="flex items-center justify-between gap-3 bg-white dark:bg-gray-800 p-2.5 rounded border">
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">{post.title}</div>
                              <div className="text-[11px] text-gray-500 dark:text-gray-400">{getAuthorLabel(post.author)}</div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removePostFromSubsection(subIndex)}
                            className="p-1 text-gray-500 hover:text-indigo-600 shrink-0"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">No post. Click &quot;Add Post&quot; to assign.</p>
                  )}

                  {openSelectorFor === subIndex && (
                    <PostSelectorWithSearch
                      onSelect={(post) => addPostToSubsection(subIndex, post)}
                      excludeIds={(sub.posts || []).map((p) => p._id)}
                      placeholder={`Search to add 1 post to ${sub.name}`}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white text-sm font-bold rounded"
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
