"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Edit, Trash2, Eye, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UserPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = async () => {
    try {
      const postsResponse = await fetch("/api/posts");
      if (postsResponse.ok) {
        const postsData = await postsResponse.json();
        setPosts(postsData.posts || []);
      } else {
        const errorData = await postsResponse.json();
        if (postsResponse.status === 401 || postsResponse.status === 403) {
          router.push("/login");
          return;
        }
        console.error("Failed to fetch posts:", errorData.error);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      if (error.message?.includes("401") || error.message?.includes("403")) {
        router.push("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-red-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold text-gray-900">My Posts</h1>
          <p className="text-xs text-gray-400 mt-0.5">Manage your blog posts</p>
        </div>
        <Link
          href="/user/create-post"
          className="inline-flex items-center gap-1.5 bg-red-600 text-white px-4 py-2 text-sm font-bold tracking-wide hover:bg-red-700 transition-colors"
        >
          <PlusCircle size={16} />
          New Post
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white border border-gray-200 p-3">
          <div className="text-[10px] font-bold tracking-wider uppercase text-gray-500">Total Posts</div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">{posts.length}</div>
        </div>
        <div className="bg-white border border-gray-200 p-3">
          <div className="text-[10px] font-bold tracking-wider uppercase text-green-600">Published</div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">
            {posts.filter((p) => p.status === "published").length}
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-3">
          <div className="text-[10px] font-bold tracking-wider uppercase text-amber-600">Drafts</div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">
            {posts.filter((p) => p.status === "draft").length}
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-3">
          <div className="text-[10px] font-bold tracking-wider uppercase text-gray-500">Categories</div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">
            {new Set(posts.map((p) => p.category)).size}
          </div>
        </div>
      </div>

      {/* Posts Table */}
      {posts.length === 0 ? (
        <div className="bg-white border border-gray-200 p-10 text-center">
          <p className="text-sm text-gray-400 mb-4">You haven&apos;t created any posts yet.</p>
          <Link
            href="/user/create-post"
            className="inline-flex items-center gap-1.5 bg-red-600 text-white px-4 py-2 text-sm font-bold tracking-wide hover:bg-red-700 transition-colors"
          >
            <PlusCircle size={16} />
            Create Your First Post
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                    Title
                  </th>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                    Category
                  </th>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                    Date
                  </th>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                    Status
                  </th>
                  <th className="px-3 py-2.5 text-left text-[10px] font-bold tracking-wider uppercase text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {posts.map((post) => (
                  <tr
                    key={post._id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-3 py-2.5">
                      <div className="text-sm font-semibold text-gray-900 max-w-md line-clamp-1">
                        {post.title}
                      </div>
                    </td>
                    <td className="px-3 py-2.5">
                      <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold tracking-wide uppercase bg-gray-100 text-gray-600">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-3 py-2.5">
                      <span className="text-[11px] text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="px-3 py-2.5">
                      <span
                        className={`inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold tracking-wide uppercase ${
                          post.status === "published"
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : post.status === "pending"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-gray-100 text-gray-600 border border-gray-200"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-1">
                        <Link
                          href={`/post?slug=${post.slug}${post.status !== "published" ? "&preview=true" : ""}`}
                          target="_blank"
                          className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="View"
                        >
                          <Eye size={14} />
                        </Link>
                        <button
                          className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                          title="Edit"
                        >
                          <Edit size={14} />
                        </button>
                        <button
                          className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
