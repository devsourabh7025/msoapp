"use client";

import { useState, useEffect } from "react";
import { Save, X } from "lucide-react";
import axios from "axios";
import PostSelectorWithSearch from "@/components/PostSelectorWithSearch";

const defaultSubsections = [
  { id: "mso-summits", name: "MSO Summits", description: "Flagship physical networking and award ceremonies.", enabled: true, posts: [] },
  { id: "webinars", name: "Webinars", description: "Virtual learning sessions on scaling and fundraising.", enabled: true, posts: [] },
  { id: "networking-meetups", name: "Networking Meetups", description: "Curated founder-only dinners and mixers.", enabled: true, posts: [] },
  { id: "global-roadshows", name: "Global Roadshows", description: "Tracking Maharashtra startups at international stages.", enabled: true, posts: [] },
  { id: "founder-forum", name: "The Founder Forum", description: "A gated community for MSO members to discuss challenges.", enabled: true, posts: [] },
];

const POSTS_LIMIT = 1;

const getAuthorLabel = (author) =>
  typeof author === "object" ? author?.name : author || "Unknown";

export default function EventsCommunityCustomise() {
  const [content, setContent] = useState({ subsections: defaultSubsections });
  const [settings, setSettings] = useState({
    title: "Events & Community",
    subtitle: "Turning readers into a networked community.",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [openSelectorFor, setOpenSelectorFor] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/settings/events-community");
        const data = res.data;
        if (data?.content?.subsections?.length > 0) {
          setContent({ subsections: data.content.subsections });
        }
        if (data?.settings) {
          setSettings((prev) => ({
            ...prev,
            title: data.settings.title || "Events & Community",
            subtitle: data.settings.subtitle || "Turning readers into a networked community.",
          }));
        }
      } catch (error) {
        console.error("Error loading Events & Community:", error);
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
      await axios.put("/api/settings/events-community", { content, settings }, { headers: { "Content-Type": "application/json" }, withCredentials: true });
      alert("Events & Community section saved successfully!");
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || error.message || "Failed to save"}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-sm text-gray-500">Loading Events & Community settings...</div>
      </div>
    );
  }

  const subsections = content.subsections || defaultSubsections;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Events & Community</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Assign 1 post per category. Focus: Turning readers into a networked community.
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
                placeholder="Events & Community"
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">Subtitle</label>
              <input
                type="text"
                value={settings.subtitle}
                onChange={(e) => setSettings((p) => ({ ...p, subtitle: e.target.value }))}
                placeholder="Turning readers into a networked community."
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
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
                        className="w-4 h-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500"
                      />
                      <div className="flex-1">
                        <input
                          type="text"
                          value={sub.name}
                          onChange={(e) => updateSubsection(subIndex, "name", e.target.value)}
                          placeholder="Category name"
                          className="w-full px-3 py-2 text-sm font-bold border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-violet-500 mb-2"
                        />
                        <textarea
                          value={sub.description}
                          onChange={(e) => updateSubsection(subIndex, "description", e.target.value)}
                          placeholder="Description"
                          rows={2}
                          className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                      </div>
                    </div>
                    {(sub.posts || []).length < POSTS_LIMIT && (
                      <button
                        type="button"
                        onClick={() => setOpenSelectorFor(openSelectorFor === subIndex ? null : subIndex)}
                        className="px-3 py-1.5 text-xs font-medium bg-violet-600 hover:bg-violet-700 text-white rounded shrink-0"
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
                            className="p-1 text-gray-500 hover:text-violet-600 shrink-0"
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 disabled:opacity-60 text-white text-sm font-bold rounded"
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
