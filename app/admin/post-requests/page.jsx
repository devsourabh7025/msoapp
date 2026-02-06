"use client";

import { useState, useEffect } from "react";
import { Clock, Check, X as XIcon, Eye, User } from "lucide-react";
import Link from "next/link";

export default function PostRequests() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPendingPosts();
  }, []);

  const fetchPendingPosts = async () => {
    try {
      const response = await fetch("/api/admin/post-requests");
      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts || []);
      }
    } catch (error) {
      console.error("Error fetching pending posts:", error);
    } finally {
      setLoading(false);
    }
  };


  const handleApprove = async (postId) => {
    try {
      const response = await fetch("/api/admin/post-requests", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, action: "approve" }),
      });

      if (response.ok) {
        await fetchPendingPosts();
        setSelectedPost(null);
        alert("Post approved successfully!");
      } else {
        const data = await response.json();
        alert(data.error || "Failed to approve post");
      }
    } catch (error) {
      console.error("Error approving post:", error);
      alert("Failed to approve post");
    }
  };

  const handleReject = async (postId) => {
    if (!confirm("Are you sure you want to reject this post?")) {
      return;
    }

    try {
      const response = await fetch("/api/admin/post-requests", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, action: "reject" }),
      });

      if (response.ok) {
        await fetchPendingPosts();
        setSelectedPost(null);
        alert("Post rejected successfully!");
      } else {
        const data = await response.json();
        alert(data.error || "Failed to reject post");
      }
    } catch (error) {
      console.error("Error rejecting post:", error);
      alert("Failed to reject post");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-sm text-gray-500">Loading post requests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Post Requests</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Review and approve posts submitted by users
            </p>
          </div>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-12 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
            <Clock size={24} className="text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No Pending Requests
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            All post requests have been reviewed
          </p>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Pending Requests ({posts.length})
                </span>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {posts.map((post) => {
              const postDate = post.createdAt
                ? new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : "No date";
              return (
                <div
                  key={post._id}
                  className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-16 bg-blue-600 rounded-full shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 mb-1">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400 mb-2">
                            <div className="flex items-center gap-1.5">
                              <User size={12} />
                              <span>{post.author?.name || "Unknown User"}</span>
                            </div>
                            <span>•</span>
                            <span>{postDate}</span>
                            <span>•</span>
                            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                              {post.category || "Uncategorized"}
                            </span>
                          </div>
                          {post.excerpt && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
                              {post.excerpt}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleApprove(post._id)}
                          className="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors flex items-center gap-1.5"
                        >
                          <Check size={14} />
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(post._id)}
                          className="px-4 py-2 text-xs font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors flex items-center gap-1.5"
                        >
                          <XIcon size={14} />
                          Reject
                        </button>
                        <Link
                          href={`/post?slug=${post.slug}`}
                          target="_blank"
                          className="px-4 py-2 text-xs font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors flex items-center gap-1.5"
                        >
                          <Eye size={14} />
                          Preview
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
