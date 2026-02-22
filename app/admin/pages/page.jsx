"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Save, X, Copy, ExternalLink } from "lucide-react";

export default function AdminPages() {
  const [pages, setPages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    status: "draft",
  });
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
      } else {
        setPages([]);
      }
    } catch (error) {
      console.error("Error fetching pages:", error);
      setPages([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      setCategoriesLoading(true);
      const response = await fetch("/api/admin/categories", { credentials: "include" });
      if (response.ok) {
        const data = await response.json();
        setCategories(data.categories || []);
      } else {
        setCategories([]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
    } finally {
      setCategoriesLoading(false);
    }
  };

  // Path only (e.g. /pages/domain) - user copies this and adds it where needed (menus, links, etc.)
  const getPagePath = (slug) => `/pages/${slug}`;

  const copyPath = async (slug) => {
    const path = getPagePath(slug);
    try {
      await navigator.clipboard.writeText(path);
      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.category.trim()) {
      alert("Title and category are required");
      return;
    }

    try {
      const response = await fetch("/api/admin/pages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        alert("Page created successfully!");
        setFormData({ title: "", category: "", status: "draft" });
        setShowAddForm(false);
        await fetchPages();
      } else {
        alert(data.error || "Failed to create page");
      }
    } catch (error) {
      console.error("Error creating page:", error);
      alert("Failed to create page. Check console for details.");
    }
  };

  const handleEdit = (page) => {
    setEditingId(page._id);
    setFormData({
      title: page.title,
      category: page.category,
      status: page.status || "draft",
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.category.trim()) {
      alert("Title and category are required");
      return;
    }

    try {
      const response = await fetch(`/api/admin/pages/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        alert("Page updated successfully!");
        setEditingId(null);
        setFormData({ title: "", category: "", status: "draft" });
        await fetchPages();
      } else {
        alert(data.error || "Failed to update page");
      }
    } catch (error) {
      console.error("Error updating page:", error);
      alert("Failed to update page");
    }
  };

  const handleDelete = async (pageId, pageTitle) => {
    if (!confirm(`Are you sure you want to delete the page "${pageTitle}"?`)) return;

    try {
      const response = await fetch(`/api/admin/pages/${pageId}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        alert("Page deleted successfully!");
        await fetchPages();
      } else {
        alert(data.error || "Failed to delete page");
      }
    } catch (error) {
      console.error("Error deleting page:", error);
      alert("Failed to delete page");
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ title: "", category: "", status: "draft" });
  };

  const categoryOptions = [
    ...new Set([
      ...categories.map((c) => c.name),
      ...(editingId ? pages.filter((p) => p._id === editingId).map((p) => p.category) : []),
    ]),
  ].filter(Boolean);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin h-12 w-12 border-2 border-gray-300 border-t-black"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Pages</h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Create category-based pages that show posts from the assigned category. Copy the page path (e.g. /pages/domain) and add it where you need it (header menu, footer, etc.).
          </p>
        </div>
        <button
          onClick={() => {
            setShowAddForm(true);
            setFormData({ title: "", category: "", status: "draft" });
          }}
          className="inline-flex items-center gap-1.5 bg-black text-white px-4 py-2 hover:bg-gray-800 transition font-medium text-sm border border-black"
        >
          <Plus size={16} />
          Add Page
        </button>
      </div>

      {/* Add Page Form */}
      {showAddForm && (
        <div className="bg-white border border-gray-300 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-900">Add New Page</h3>
            <button
              onClick={() => {
                setShowAddForm(false);
                setFormData({ title: "", category: "", status: "draft" });
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
          </div>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-900 mb-2">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="e.g., About Us, Terms of Service"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-900 mb-2">Category *</label>
              {categoryOptions.length > 0 ? (
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                >
                  <option value="">Select category</option>
                  {categoryOptions.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="e.g., about, terms, contact"
                  required
                />
              )}
              {!categoriesLoading && categoryOptions.length === 0 && (
                <p className="text-xs text-gray-500 mt-1">Type a category name, or create categories in Admin → Categories.</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-900 mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 bg-black text-white px-4 py-2 hover:bg-gray-800 transition font-medium text-sm border border-black"
              >
                <Save size={14} />
                Create Page
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  setFormData({ title: "", category: "", status: "draft" });
                }}
                className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Pages List */}
      <div className="bg-white border border-gray-300 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 text-left text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-3 py-2 text-left text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-3 py-2 text-left text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                  Page path (copy to add in menus, links)
                </th>
                <th className="px-3 py-2 text-left text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-3 py-2 text-left text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pages.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-3 py-8 text-center text-sm text-gray-500">
                    No pages found. Create your first page to get started.
                  </td>
                </tr>
              ) : (
                pages.map((page) => (
                  <tr key={page._id} className="hover:bg-gray-50 transition-colors">
                    {editingId === page._id ? (
                      <td colSpan={5} className="px-3 py-2">
                        <form onSubmit={handleUpdate} className="space-y-3 p-3 bg-gray-50 border border-gray-200">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[10px] font-semibold text-gray-700 mb-1">Title</label>
                              <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full px-2 py-1.5 text-xs border border-gray-300 focus:ring-1 focus:ring-black"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-semibold text-gray-700 mb-1">Category</label>
                              <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-2 py-1.5 text-xs border border-gray-300 focus:ring-1 focus:ring-black"
                                required
                              >
                                {categoryOptions.map((cat) => (
                                  <option key={cat} value={cat}>{cat}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <select
                              value={formData.status}
                              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                              className="px-2 py-1 text-xs border border-gray-300"
                            >
                              <option value="draft">Draft</option>
                              <option value="published">Published</option>
                            </select>
                            <button
                              type="submit"
                              className="p-1.5 text-gray-700 hover:bg-gray-200 transition border border-gray-300"
                              title="Save"
                            >
                              <Save size={14} />
                            </button>
                            <button
                              type="button"
                              onClick={cancelEdit}
                              className="p-1.5 text-gray-600 hover:bg-gray-200 transition border border-gray-300"
                              title="Cancel"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </form>
                      </td>
                    ) : (
                      <>
                        <td className="px-3 py-2">
                          <div className="text-xs font-semibold text-gray-900">{page.title}</div>
                        </td>
                        <td className="px-3 py-2">
                          <span className="text-xs text-gray-600">{page.category}</span>
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex items-center gap-1">
                            <code className="text-[10px] text-gray-700 bg-gray-100 px-2 py-1 border border-gray-300 truncate max-w-[200px]">
                              {getPagePath(page.slug)}
                            </code>
                            <button
                              onClick={() => copyPath(page.slug)}
                              className="p-1.5 text-black hover:bg-gray-100 transition border border-gray-300"
                              title="Copy path"
                            >
                              <Copy size={12} />
                            </button>
                            {page.status === "published" && (
                              <a
                                href={getPagePath(page.slug)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 text-black hover:bg-gray-100 transition border border-gray-300"
                                title="View page"
                              >
                                <ExternalLink size={12} />
                              </a>
                            )}
                          </div>
                          {copiedSlug === page.slug && (
                            <span className="text-[10px] text-gray-600 mt-0.5 block">Copied!</span>
                          )}
                        </td>
                        <td className="px-3 py-2">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 text-[10px] font-semibold border ${
                              page.status === "published"
                                ? "bg-white text-black border-black"
                                : "bg-gray-100 text-gray-800 border-gray-400"
                            }`}
                          >
                            {page.status}
                          </span>
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleEdit(page)}
                              className="p-1.5 text-gray-700 hover:bg-gray-100 transition border border-transparent hover:border-gray-300"
                              title="Edit"
                            >
                              <Edit size={14} />
                            </button>
                            <button
                              onClick={() => handleDelete(page._id, page.title)}
                              className="p-1.5 text-gray-600 hover:bg-gray-100 transition border border-transparent hover:border-gray-300"
                              title="Delete"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
