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
        <div className="animate-spin h-12 w-12 border-2 border-gray-300 border-t-black"></div>
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
            className="inline-flex items-center gap-1.5 bg-gray-800 text-white px-4 py-2 hover:bg-black transition font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed border border-gray-800"
          >
            <PlusCircle size={16} />
            Seed Business Posts
          </button>
          <Link
            href="/admin/add-post"
            className="inline-flex items-center gap-1.5 bg-black text-white px-4 py-2 hover:bg-gray-800 transition font-medium text-sm border border-black"
          >
            <PlusCircle size={16} />
            Add New Post
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-black p-3 text-white border border-black">
          <div className="text-xs font-medium opacity-90">Total Posts</div>
          <div className="text-2xl font-bold mt-1">{posts.length}</div>
        </div>
        <div className="bg-white p-3 text-black border border-black">
          <div className="text-xs font-medium opacity-90">Published</div>
          <div className="text-2xl font-bold mt-1">
            {posts.filter((p) => p.status === "published").length}
          </div>
        </div>
        <div className="bg-gray-100 p-3 text-black border border-gray-300">
          <div className="text-xs font-medium opacity-90">Drafts</div>
          <div className="text-2xl font-bold mt-1">
            {posts.filter((p) => p.status === "draft" || p.status === "pending").length}
          </div>
        </div>
        <div className="bg-gray-200 p-3 text-black border border-gray-400">
          <div className="text-xs font-medium opacity-90">Categories</div>
          <div className="text-2xl font-bold mt-1">
            {new Set(posts.map((p) => p.category).filter(Boolean)).size}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-300 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
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
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-3 py-2">
                      <div className="w-16 h-10 relative overflow-hidden border border-gray-300">
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
                      <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium bg-gray-100 text-gray-800 border border-gray-300">
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
                        className={`inline-flex items-center px-2 py-0.5 text-[10px] font-semibold border ${
                          post.status === "published"
                            ? "bg-white text-black border-black"
                            : post.status === "draft"
                            ? "bg-gray-100 text-gray-800 border-gray-400"
                            : "bg-gray-100 text-gray-800 border-gray-300"
                        }`}
                      >
                        {post.status ? post.status.charAt(0).toUpperCase() + post.status.slice(1) : "Draft"}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-1">
                        <Link
                          href={`/post?slug=${post.slug}`}
                          className="p-1.5 text-black hover:bg-gray-100 transition border border-transparent hover:border-gray-300"
                          title="View"
                        >
                          <Eye size={14} />
                        </Link>
                        <Link
                          href={`/admin/edit-post/${post._id}`}
                          className="p-1.5 text-gray-700 hover:bg-gray-100 transition border border-transparent hover:border-gray-300"
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
                          className="p-1.5 text-gray-600 hover:bg-gray-100 transition border border-transparent hover:border-gray-300"
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

