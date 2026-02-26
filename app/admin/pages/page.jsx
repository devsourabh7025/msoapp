"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Save, X, Copy, ExternalLink, FileText, ChevronLeft } from "lucide-react";
import RichTextEditor from "@/components/RichTextEditor";

export default function AdminPages() {
  const [pages, setPages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("list");
  const [editingPage, setEditingPage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    categories: [],
    status: "draft",
  });
  const [content, setContent] = useState("");
  const [catDropdown, setCatDropdown] = useState("");
  const [copiedSlug, setCopiedSlug] = useState(null);

  useEffect(() => {
    fetchPages();
    fetchCategories();
  }, []);

  const fetchPages = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/pages", { credentials: "include" });
      if (response.ok) {
        const data = await response.json();
        setPages(data.pages || []);
      } else setPages([]);
    } catch { setPages([]); } finally { setLoading(false); }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/admin/categories", { credentials: "include" });
      if (response.ok) {
        const data = await response.json();
        setCategories(data.categories || []);
      }
    } catch { setCategories([]); }
  };

  const getPagePath = (slug) => `/pages/${slug}`;

  const copyPath = async (slug) => {
    try {
      await navigator.clipboard.writeText(getPagePath(slug));
      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    } catch {}
  };

  const resetForm = () => {
    setFormData({ title: "", content: "", categories: [], status: "draft" });
    setContent("");
    setCatDropdown("");
    setEditingPage(null);
  };

  const openCreateForm = () => {
    resetForm();
    setView("form");
  };

  const openEditForm = async (page) => {
    setEditingPage(page);
    const cats = page.categories?.length > 0 ? page.categories : (page.category ? [page.category] : []);
    setFormData({
      title: page.title || "",
      content: page.content || "",
      categories: cats,
      status: page.status || "draft",
    });
    setContent(page.content || "");
    setView("form");
  };

  const addCategory = () => {
    if (!catDropdown || formData.categories.includes(catDropdown)) return;
    setFormData((prev) => ({ ...prev, categories: [...prev.categories, catDropdown] }));
    setCatDropdown("");
  };

  const removeCategory = (catName) => {
    setFormData((prev) => ({ ...prev, categories: prev.categories.filter((c) => c !== catName) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) { alert("Title is required"); return; }

    const payload = {
      title: formData.title,
      content: content,
      categories: formData.categories,
      category: formData.categories[0] || "",
      status: formData.status,
    };

    try {
      const url = editingPage ? `/api/admin/pages/${editingPage._id}` : "/api/admin/pages";
      const method = editingPage ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setView("list");
        resetForm();
        await fetchPages();
      } else {
        alert(data.error || "Failed to save page");
      }
    } catch {
      alert("Failed to save page");
    }
  };

  const handleDelete = async (pageId, pageTitle) => {
    if (!confirm(`Delete "${pageTitle}"?`)) return;
    try {
      const response = await fetch(`/api/admin/pages/${pageId}`, { method: "DELETE", credentials: "include" });
      if (response.ok) await fetchPages();
      else { const d = await response.json(); alert(d.error || "Failed to delete"); }
    } catch { alert("Failed to delete page"); }
  };

  const categoryOptions = [...new Set(categories.map((c) => c.name))].filter(Boolean);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin h-8 w-8 border-2 border-gray-300 border-t-red-600" />
      </div>
    );
  }

  if (view === "form") {
    return (
      <div className="space-y-4 max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <button onClick={() => { setView("list"); resetForm(); }} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              {editingPage ? "Edit Page" : "Create Page"}
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Add text content and/or assign categories
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5 space-y-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                Page Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:outline-none focus:border-red-600 transition-colors"
                placeholder="e.g., About Us, Technology, Terms of Service"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="px-3 py-2 text-sm border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:outline-none focus:border-red-600 transition-colors"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              Assign Categories (posts from these categories will show on this page)
            </label>

            {/* Dropdown + Add button */}
            {categoryOptions.length > 0 ? (
              <div className="flex items-center gap-2 mb-3">
                <select
                  value={catDropdown}
                  onChange={(e) => setCatDropdown(e.target.value)}
                  className="flex-1 max-w-xs px-3 py-2 text-sm border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:outline-none focus:border-red-600 transition-colors"
                >
                  <option value="">Select a category</option>
                  {categoryOptions
                    .filter((c) => !formData.categories.includes(c))
                    .map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
                <button
                  type="button"
                  onClick={addCategory}
                  disabled={!catDropdown}
                  className={`inline-flex items-center gap-1 px-4 py-2 text-xs font-bold transition-colors ${
                    catDropdown
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <Plus size={14} />
                  Add Category
                </button>
              </div>
            ) : (
              <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
                No categories found. Create categories in Admin → Categories first.
              </p>
            )}

            {/* Selected categories as removable tags */}
            {formData.categories.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {formData.categories.map((cat) => (
                  <span
                    key={cat}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800"
                  >
                    {cat}
                    <button
                      type="button"
                      onClick={() => removeCategory(cat)}
                      className="text-red-400 hover:text-red-700 dark:hover:text-red-200 transition-colors"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-[11px] text-gray-400 dark:text-gray-500">No categories selected</p>
            )}
          </div>

          {/* Content Editor */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              Page Content (optional — displayed above the posts)
            </label>
            <RichTextEditor
              value={content}
              onChange={setContent}
              placeholder="Write page content here... This text will appear above the category posts."
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => { setView("list"); resetForm(); }}
              className="px-4 py-2 text-xs font-bold border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              Cancel
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={(e) => {
                  setFormData((prev) => ({ ...prev, status: "draft" }));
                  setTimeout(() => handleSubmit(e), 0);
                }}
                className="px-4 py-2 text-xs font-bold border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                Save as Draft
              </button>
              <button
                type="button"
                onClick={(e) => {
                  setFormData((prev) => ({ ...prev, status: "published" }));
                  setTimeout(() => handleSubmit(e), 0);
                }}
                className="px-5 py-2 text-xs font-bold bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                {editingPage ? "Update & Publish" : "Create & Publish"}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Pages</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Create pages with text content and/or assign categories to show posts
          </p>
        </div>
        <button
          onClick={openCreateForm}
          className="inline-flex items-center gap-1.5 bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors font-bold text-xs tracking-wide"
        >
          <Plus size={14} />
          Add Page
        </button>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-950">
              <tr>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Title</th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Categories</th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Content</th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Path</th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800/50">
              {pages.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-3 py-12 text-center">
                    <FileText size={32} className="mx-auto text-gray-300 dark:text-gray-700 mb-2" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">No pages yet</p>
                  </td>
                </tr>
              ) : (
                pages.map((page) => {
                  const cats = page.categories?.length > 0 ? page.categories : (page.category ? [page.category] : []);
                  const hasContent = page.content && page.content.replace(/<[^>]*>/g, "").trim();
                  return (
                    <tr key={page._id} className="hover:bg-gray-50 dark:hover:bg-gray-950/50 transition-colors">
                      <td className="px-3 py-2.5">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{page.title}</span>
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex flex-wrap gap-1">
                          {cats.length > 0 ? cats.map((c) => (
                            <span key={c} className="px-1.5 py-0.5 text-[10px] font-bold bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800">
                              {c}
                            </span>
                          )) : (
                            <span className="text-[10px] text-gray-400">None</span>
                          )}
                        </div>
                      </td>
                      <td className="px-3 py-2.5">
                        {hasContent ? (
                          <span className="text-[10px] font-bold text-green-600 dark:text-green-400">Has content</span>
                        ) : (
                          <span className="text-[10px] text-gray-400">—</span>
                        )}
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-1">
                          <code className="text-[10px] text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-950 px-1.5 py-0.5 border border-gray-200 dark:border-gray-800 truncate max-w-[160px]">
                            {getPagePath(page.slug)}
                          </code>
                          <button onClick={() => copyPath(page.slug)} className="p-1 text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors" title="Copy">
                            <Copy size={11} />
                          </button>
                          {page.status === "published" && (
                            <a href={getPagePath(page.slug)} target="_blank" rel="noopener noreferrer" className="p-1 text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors" title="View">
                              <ExternalLink size={11} />
                            </a>
                          )}
                          {copiedSlug === page.slug && (
                            <span className="text-[9px] text-green-600 font-bold">Copied!</span>
                          )}
                        </div>
                      </td>
                      <td className="px-3 py-2.5">
                        <span className={`inline-flex px-2 py-0.5 text-[10px] font-bold border ${
                          page.status === "published"
                            ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                            : "bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700"
                        }`}>
                          {page.status}
                        </span>
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-1">
                          <button onClick={() => openEditForm(page)} className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors" title="Edit">
                            <Edit size={13} />
                          </button>
                          <button onClick={() => handleDelete(page._id, page.title)} className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors" title="Delete">
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
