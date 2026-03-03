"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import {
  Edit,
  Trash2,
  Eye,
  ToggleLeft,
  ToggleRight,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const PAGE_SIZE = 10;

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", category: "", status: "draft", autoShareEnabled: false });

  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [authorFilter, setAuthorFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [stats, setStats] = useState(null);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  const fetchPosts = async (p = page) => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: String(p),
        limit: String(PAGE_SIZE),
        status: statusFilter,
        sort: sortOrder,
      });
      if (categoryFilter !== "all") params.set("category", categoryFilter);
      if (authorFilter !== "all") params.set("author", authorFilter);
      if (searchQuery.trim()) params.set("search", searchQuery.trim());
      const response = await fetch(`/api/superadmin/posts?${params}`);
      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts || []);
        setTotalCount(data.totalCount ?? 0);
        setTotalPages(data.totalPages ?? 0);
      } else {
        setPosts([]);
      }
    } catch { setPosts([]); } finally { setLoading(false); }
  };

  const fetchStatsAndMeta = async () => {
    try {
      const [statsRes, metaRes] = await Promise.all([
        fetch("/api/superadmin/posts/stats", { credentials: "include" }),
        fetch("/api/superadmin/posts/meta", { credentials: "include" }),
      ]);
      if (statsRes.ok) {
        const s = await statsRes.json();
        setStats(s);
      }
      if (metaRes.ok) {
        const m = await metaRes.json();
        setCategories(m.categories || []);
        setAuthors(m.authors || []);
      }
    } catch (e) {
      console.error("Error fetching stats/meta:", e);
    }
  };

  const prevFiltersRef = useRef(null);
  useEffect(() => { fetchStatsAndMeta(); }, []);
  useEffect(() => {
    const filters = [statusFilter, categoryFilter, authorFilter, sortOrder, searchQuery];
    const filtersChanged = prevFiltersRef.current && prevFiltersRef.current.some((f, i) => f !== filters[i]);
    prevFiltersRef.current = filters;
    fetchPosts(filtersChanged ? 1 : page);
    if (filtersChanged) setPage(1);
  }, [page, statusFilter, categoryFilter, authorFilter, sortOrder, searchQuery]);

  const handleEdit = (post) => {
    setEditingPost(post._id);
    setEditForm({ title: post.title, category: post.category, status: post.status, autoShareEnabled: post.autoShareEnabled || false });
  };

  const handleSave = async () => {
    try {
      const response = await fetch("/api/superadmin/posts", {
        method: "PUT", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: editingPost, ...editForm }),
      });
      if (response.ok) { await fetchPosts(); setEditingPost(null); }
      else { const d = await response.json(); alert(d.error || "Failed to update"); }
    } catch { alert("Failed to update post"); }
  };

  const handleDelete = async (postId) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      const response = await fetch(`/api/superadmin/posts?postId=${postId}`, { method: "DELETE" });
      if (response.ok) await fetchPosts();
      else { const d = await response.json(); alert(d.error || "Failed to delete"); }
    } catch { alert("Failed to delete post"); }
  };

  const toggleAutoShare = async (postId, currentValue) => {
    try {
      const response = await fetch("/api/superadmin/posts", {
        method: "PUT", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, autoShareEnabled: !currentValue }),
      });
      if (response.ok) await fetchPosts();
    } catch (error) { console.error("Error toggling auto-share:", error); }
  };

  const hasFilters = statusFilter !== "all" || categoryFilter !== "all" || authorFilter !== "all" || searchQuery.trim();
  const clearFilters = () => { setStatusFilter("all"); setCategoryFilter("all"); setAuthorFilter("all"); setSearchQuery(""); };

  const formatDate = (d) => { if (!d) return "—"; return new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }); };
  const authorName = (a) => { if (!a) return "Unknown"; return (a.accountType === "startup" || a.accountType === "company") ? (a.companyName || a.name) : a.name; };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-red-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  const sel = "h-9 px-3 text-sm border border-gray-200 bg-white text-gray-900 outline-none focus:border-red-500 transition-colors";

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-extrabold text-gray-900">All Posts</h1>
        <p className="text-xs text-gray-400 mt-0.5">Manage all posts, inline edit, and auto-sharing</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white border border-gray-200 p-3">
          <div className="text-[10px] font-bold tracking-wider uppercase text-gray-500">Total</div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">{stats?.total ?? totalCount}</div>
        </div>
        <div className="bg-white border border-gray-200 p-3">
          <div className="text-[10px] font-bold tracking-wider uppercase text-green-600">Published</div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">{stats?.published ?? 0}</div>
        </div>
        <div className="bg-white border border-gray-200 p-3">
          <div className="text-[10px] font-bold tracking-wider uppercase text-amber-600">Draft / Pending</div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">{(stats?.draft ?? 0) + (stats?.pending ?? 0)}</div>
        </div>
        <div className="bg-white border border-gray-200 p-3">
          <div className="text-[10px] font-bold tracking-wider uppercase text-gray-500">Auto-Share</div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">{stats?.autoShare ?? 0}</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[180px] max-w-xs">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search title or author..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-9 pl-9 pr-3 text-sm border border-gray-200 bg-white outline-none focus:border-red-500 transition-colors" />
        </div>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={sel}>
          <option value="all">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
          <option value="pending">Pending</option>
        </select>
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className={sel}>
          <option value="all">All Categories</option>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={authorFilter} onChange={(e) => setAuthorFilter(e.target.value)} className={sel}>
          <option value="all">All Authors</option>
          {authors.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
        </select>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className={sel}>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
        {hasFilters && (
          <button onClick={clearFilters} className="h-9 px-3 flex items-center gap-1 text-sm text-red-600 border border-red-200 hover:bg-red-50 transition-colors">
            <X size={14} /> Clear
          </button>
        )}
        <span className="text-[11px] text-gray-400 ml-auto">{posts.length} of {totalCount} posts</span>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">Title</th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">Author</th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">Category</th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">Date</th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">Status</th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">Auto-Share</th>
                <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {posts.length === 0 ? (
                <tr><td colSpan="7" className="px-3 py-8 text-center text-sm text-gray-400">{hasFilters ? "No posts match filters." : "No posts found."}</td></tr>
              ) : posts.map((post) => (
                <tr key={post._id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-3 py-2.5">
                    {editingPost === post._id ? (
                      <input type="text" value={editForm.title} onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                        className="w-full px-2 py-1 text-xs border border-gray-300 outline-none focus:border-red-500" />
                    ) : (
                      <div className="text-sm font-semibold text-gray-900 max-w-sm line-clamp-1">{post.title}</div>
                    )}
                  </td>
                  <td className="px-3 py-2.5">
                    <span className="text-[12px] font-medium text-gray-800">{authorName(post.author)}</span>
                    {(post.author?.accountType === "startup" || post.author?.accountType === "company") && (
                      <span className="ml-1 text-[9px] font-bold tracking-wide uppercase text-red-600">{post.author.accountType}</span>
                    )}
                  </td>
                  <td className="px-3 py-2.5">
                    {editingPost === post._id ? (
                      <input type="text" value={editForm.category} onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                        className="px-2 py-1 text-xs border border-gray-300 outline-none focus:border-red-500" />
                    ) : (
                      <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold tracking-wide uppercase bg-gray-100 text-gray-600">{post.category}</span>
                    )}
                  </td>
                  <td className="px-3 py-2.5">
                    <span className="text-[11px] text-gray-500">{formatDate(post.publishedAt || post.createdAt)}</span>
                  </td>
                  <td className="px-3 py-2.5">
                    {editingPost === post._id ? (
                      <select value={editForm.status} onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                        className="px-2 py-1 text-xs border border-gray-300 outline-none focus:border-red-500">
                        <option value="draft">Draft</option>
                        <option value="pending">Pending</option>
                        <option value="published">Published</option>
                      </select>
                    ) : (
                      <span className={`inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                        post.status === "published" ? "bg-green-50 text-green-700 border border-green-200"
                        : post.status === "pending" ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : "bg-gray-100 text-gray-600 border border-gray-200"
                      }`}>{post.status || "draft"}</span>
                    )}
                  </td>
                  <td className="px-3 py-2.5">
                    {editingPost === post._id ? (
                      <button onClick={() => setEditForm({ ...editForm, autoShareEnabled: !editForm.autoShareEnabled })} className="flex items-center gap-1.5">
                        {editForm.autoShareEnabled ? <ToggleRight size={20} className="text-green-600" /> : <ToggleLeft size={20} className="text-gray-300" />}
                        <span className="text-[11px] font-bold">{editForm.autoShareEnabled ? "On" : "Off"}</span>
                      </button>
                    ) : (
                      <button onClick={() => toggleAutoShare(post._id, post.autoShareEnabled)} className="flex items-center gap-1.5">
                        {post.autoShareEnabled ? <ToggleRight size={20} className="text-green-600" /> : <ToggleLeft size={20} className="text-gray-300" />}
                        <span className="text-[11px] font-bold">{post.autoShareEnabled ? "On" : "Off"}</span>
                      </button>
                    )}
                  </td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-1">
                      {editingPost === post._id ? (
                        <>
                          <button onClick={handleSave} className="p-1.5 text-green-600 hover:bg-green-50 transition-colors" title="Save">&#10003;</button>
                          <button onClick={() => setEditingPost(null)} className="p-1.5 text-gray-500 hover:bg-gray-100 transition-colors" title="Cancel">&#10005;</button>
                        </>
                      ) : (
                        <>
                          <Link href={`/post?slug=${post.slug}${post.status !== "published" ? "&preview=true" : ""}`} target="_blank" className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors" title="View"><Eye size={14} /></Link>
                          <button onClick={() => handleEdit(post)} className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors" title="Inline Edit"><Edit size={14} /></button>
                          <Link href={`/admin/edit-post/${post._id}`} className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors" title="Full Edit"><Edit size={14} /></Link>
                          <button onClick={() => handleDelete(post._id)} className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors" title="Delete"><Trash2 size={14} /></button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-3 py-2.5 border-t border-gray-200 bg-gray-50/50">
            <span className="text-[11px] text-gray-400">Page {page} of {totalPages}</span>
            <div className="flex items-center gap-1">
              <button disabled={page <= 1} onClick={() => setPage(page - 1)}
                className="p-1.5 border border-gray-200 text-gray-500 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                <ChevronLeft size={14} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
                .reduce((acc, p, i, arr) => { if (i > 0 && p - arr[i - 1] > 1) acc.push("..."); acc.push(p); return acc; }, [])
                .map((p, i) =>
                  p === "..." ? (
                    <span key={`e${i}`} className="px-1 text-gray-400 text-xs">...</span>
                  ) : (
                    <button key={p} onClick={() => setPage(p)}
                      className={`min-w-[28px] h-7 text-xs font-bold border transition-colors ${
                        p === page ? "bg-red-600 text-white border-red-600" : "border-gray-200 text-gray-600 hover:bg-gray-100"
                      }`}>{p}</button>
                  ),
                )}
              <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}
                className="p-1.5 border border-gray-200 text-gray-500 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
