"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Edit, Trash2, Eye, PlusCircle } from "lucide-react";

export default function AdminPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/superadmin/posts");
      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Fetched ${data.posts?.length || 0} posts from database`);
        setPosts(data.posts || []);
      } else {
        const errorData = await response.json().catch(() => ({ error: "Failed to fetch posts" }));
        console.error("❌ Error fetching posts:", errorData);
        setPosts([]);
      }
    } catch (error) {
      console.error("❌ Error fetching posts:", error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return `${months[date.getMonth()]} ${date.getDate().toString().padStart(2, '0')}, ${date.getFullYear()}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Posts</h1>
          <p className="text-xs text-gray-500 mt-0.5">Manage your blog posts</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={async (e) => {
              if (!confirm("This will create 10 business-related dummy posts. Continue?")) return;
              const button = e.target.closest('button') || e.target;
              const originalText = button.innerHTML;
              try {
                button.disabled = true;
                button.innerHTML = '<span>Creating...</span>';
                
                const response = await fetch("/api/admin/seed-posts", {
                  method: "POST",
                });
                const data = await response.json();
                
                if (response.ok) {
                  alert(`Success! ${data.message}\nCreated: ${data.created} posts`);
                  await fetchPosts();
                } else {
                  alert(`Error: ${data.error}\n${data.details || ""}\nAttempted: ${data.attempted || 0}, Created: ${data.created || 0}`);
                  console.error("Seed posts error:", data);
                }
              } catch (error) {
                console.error("Error seeding posts:", error);
                alert(`Failed to seed posts: ${error.message}`);
              } finally {
                button.disabled = false;
                button.innerHTML = originalText;
              }
            }}
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PlusCircle size={16} />
            Seed Business Posts
          </button>
          <Link
            href="/admin/add-post"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 shadow-md shadow-red-500/25 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-200 font-medium text-sm"
          >
            <PlusCircle size={16} />
            Add New Post
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-3 text-white shadow-md shadow-blue-500/25">
          <div className="text-xs font-medium opacity-90">Total Posts</div>
          <div className="text-2xl font-bold mt-1">{posts.length}</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-3 text-white shadow-md shadow-green-500/25">
          <div className="text-xs font-medium opacity-90">Published</div>
          <div className="text-2xl font-bold mt-1">
            {posts.filter((p) => p.status === "published").length}
          </div>
        </div>
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg p-3 text-white shadow-md shadow-yellow-500/25">
          <div className="text-xs font-medium opacity-90">Drafts</div>
          <div className="text-2xl font-bold mt-1">
            {posts.filter((p) => p.status === "draft" || p.status === "pending").length}
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-3 text-white shadow-md shadow-purple-500/25">
          <div className="text-xs font-medium opacity-90">Categories</div>
          <div className="text-2xl font-bold mt-1">
            {new Set(posts.map((p) => p.category).filter(Boolean)).size}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100/50">
              <tr>
                <th className="px-3 py-2 text-left text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-3 py-2 text-left text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-3 py-2 text-left text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-3 py-2 text-left text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-3 py-2 text-left text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-3 py-2 text-left text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {posts.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-3 py-8 text-center text-sm text-gray-500">
                    No posts found. Create your first post to get started.
                  </td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr
                    key={post._id}
                    className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-colors"
                  >
                    <td className="px-3 py-2">
                      <div className="w-16 h-10 relative rounded overflow-hidden shadow-sm ring-1 ring-gray-200">
                        <Image
                          src={post.featuredImage || "/demo.png"}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="text-xs font-semibold text-gray-900 max-w-md line-clamp-2">
                        {post.title}
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-800">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <span className="text-xs text-gray-600">
                        {formatDate(post.publishedAt || post.createdAt)}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold ${
                          post.status === "published"
                            ? "bg-green-100 text-green-800"
                            : post.status === "draft"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {post.status ? post.status.charAt(0).toUpperCase() + post.status.slice(1) : "Draft"}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-1">
                        <Link
                          href={`/post?slug=${post.slug}`}
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition"
                          title="View"
                        >
                          <Eye size={14} />
                        </Link>
                        <Link
                          href={`/admin/edit-post/${post._id}`}
                          className="p-1.5 text-green-600 hover:bg-green-50 rounded transition"
                          title="Edit"
                        >
                          <Edit size={14} />
                        </Link>
                        <button
                          onClick={async () => {
                            if (!confirm("Are you sure you want to delete this post?")) return;
                            try {
                              const response = await fetch(`/api/superadmin/posts?postId=${post._id}`, {
                                method: "DELETE",
                              });
                              if (response.ok) {
                                await fetchPosts();
                                alert("Post deleted successfully!");
                              } else {
                                const data = await response.json();
                                alert(data.error || "Failed to delete post");
                              }
                            } catch (error) {
                              console.error("Error deleting post:", error);
                              alert("Failed to delete post");
                            }
                          }}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded transition"
                          title="Delete"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
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

