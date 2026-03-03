"use client";

import { useState, useEffect } from "react";
import { Save, X } from "lucide-react";
import axios from "axios";
import PostSelectorWithSearch from "@/components/PostSelectorWithSearch";

const defaultSubsections = [
  { id: "startup-narrative", name: "Startup Narrative", slug: "startup-narrative", enabled: true, posts: [] },
  { id: "fearless-fabulous", name: "Fearless & Fabulous", slug: "fearless-fabulous", enabled: true, posts: [] },
  { id: "social-impact", name: "Social Impact", slug: "social-impact", enabled: true, posts: [] },
  { id: "beyond-work", name: "Beyond Work", slug: "beyond-work", enabled: true, posts: [] },
  { id: "the-pivot", name: "The Pivot", slug: "the-pivot", enabled: true, posts: [] },
];

const POSTS_LIMIT_FIRST = 5;
const POSTS_LIMIT_SIDEBAR = 3;

const getAuthorLabel = (author) =>
  typeof author === "object" ? author?.name : author || "Unknown";

export default function MSONarrativeCustomise() {
  const [content, setContent] = useState({ subsections: defaultSubsections });
  const [settings, setSettings] = useState({ title: "The MSO Narrative" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [openSelectorFor, setOpenSelectorFor] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/settings/mso-narrative");
        const data = res.data;
        if (data?.content?.subsections?.length > 0) {
          setContent({ subsections: data.content.subsections });
        }
        if (data?.settings) {
          setSettings((prev) => ({
            ...prev,
            title: data.settings.title || "The MSO Narrative",
          }));
        }
      } catch (error) {
        console.error("Error loading MSO Narrative:", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  useEffect(() => {
    axios.get("/api/public/posts?limit=1000").then((r) => {
      if (r.data?.posts) setAllPosts(r.data.posts);
    }).catch(() => {});
  }, []);

  const getPostLimit = (subIndex) => (subIndex === 0 ? POSTS_LIMIT_FIRST : POSTS_LIMIT_SIDEBAR);

  const addPostToSubsection = (subIndex, post) => {
    const limit = getPostLimit(subIndex);
    setContent((prev) => {
      const next = [...prev.subsections];
      const sub = next[subIndex];
      if (!sub.posts) sub.posts = [];
      if (sub.posts.length >= limit) return prev;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await axios.put("/api/settings/mso-narrative", { content, settings }, { headers: { "Content-Type": "application/json" }, withCredentials: true });
      alert("The MSO Narrative section saved successfully!");
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || error.message || "Failed to save"}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-sm text-gray-500">Loading MSO Narrative settings...</div>
      </div>
    );
  }

  const subsections = content.subsections || defaultSubsections;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">The MSO Narrative</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Assign posts to each subsection. 1. Startup Narrative = hero (first post featured). 2–3 = sidebar. 4–5 = below.
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
                placeholder="The MSO Narrative"
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Subsections with posts */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Subsections & Posts</h3>
              {subsections.map((sub, subIndex) => (
                <div key={sub.id} className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                      {subIndex + 1}. {sub.name}
                      {subIndex === 0 && (
                        <span className="ml-2 text-[10px] font-normal text-gray-500 dark:text-gray-400">(First post = hero, max {POSTS_LIMIT_FIRST})</span>
                      )}
                      {subIndex > 0 && (
                        <span className="ml-2 text-[10px] font-normal text-gray-500 dark:text-gray-400">(max {POSTS_LIMIT_SIDEBAR})</span>
                      )}
                    </h4>
                    {(sub.posts || []).length < getPostLimit(subIndex) && (
                      <button
                        type="button"
                        onClick={() => setOpenSelectorFor(openSelectorFor === subIndex ? null : subIndex)}
                        className="px-3 py-1.5 text-xs font-medium bg-red-600 hover:bg-red-700 text-white rounded"
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
                              className="p-1 text-gray-500 hover:text-red-600"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">No posts. Click &quot;Add Post&quot; to assign.</p>
                  )}

                  {openSelectorFor === subIndex && (
                    <PostSelectorWithSearch
                      onSelect={(post) => addPostToSubsection(subIndex, post)}
                      excludeIds={(sub.posts || []).map((p) => p._id)}
                      placeholder={`Search to add posts to ${sub.name}`}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white text-sm font-bold rounded"
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
