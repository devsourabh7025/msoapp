"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import RichTextEditor from "@/components/RichTextEditor";

export default function EditPost() {
  const router = useRouter();
  const params = useParams();
  const postId = params.id;
  const [activeTab, setActiveTab] = useState("content");
  const [loadingPost, setLoadingPost] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    category: "",
    featuredImage: "",
    status: "draft",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
  });
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load post data on mount
  useEffect(() => {
    if (postId) {
      fetchPost();
    }
  }, [postId]);

  const fetchPost = async () => {
    try {
      setLoadingPost(true);
      setError("");
      const response = await fetch(`/api/admin/posts/${postId}`);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Failed to load post" }));
        setError(errorData.error || "Failed to load post");
        setLoadingPost(false);
        return;
      }

      const data = await response.json();
      const post = data.post;

      if (post) {
        // Pre-fill form data
        setFormData({
          title: post.title || "",
          excerpt: post.excerpt || "",
          category: post.category || "",
          featuredImage: post.featuredImage || "",
          status: post.status || "draft",
          metaTitle: post.seo?.metaTitle || "",
          metaDescription: post.seo?.metaDescription || "",
          metaKeywords: post.seo?.metaKeywords || "",
          ogTitle: post.seo?.ogTitle || "",
          ogDescription: post.seo?.ogDescription || "",
          ogImage: post.seo?.ogImage || "",
        });

        // Load content - prefer HTML content from RichTextEditor, fallback to contentBlocks
        if (post.content && post.content.trim() !== "") {
          // Use HTML content directly
          setContent(post.content);
        } else if (post.contentBlocks && Array.isArray(post.contentBlocks) && post.contentBlocks.length > 0) {
          // Convert old contentBlocks format to HTML (for backward compatibility)
          // This is a simple conversion - in production you might want more sophisticated conversion
          const htmlContent = post.contentBlocks
            .map((block) => {
              if (block.type === "text") {
                let text = block.content || "";
                if (block.bold) text = `<strong>${text}</strong>`;
                if (block.italic) text = `<em>${text}</em>`;
                if (block.underline) text = `<u>${text}</u>`;
                if (block.color) text = `<span style="color: ${block.color}">${text}</span>`;
                return `<p>${text}</p>`;
              }
              if (block.type === "heading") {
                const level = block.level || 2;
                return `<h${level}>${block.content || ""}</h${level}>`;
              }
              if (block.type === "quote") {
                return `<blockquote>${block.content || ""}</blockquote>`;
              }
              if (block.type === "image") {
                return `<img src="${block.image || ""}" alt="${block.alt || ""}" style="max-width: 100%; height: auto;" />`;
              }
              if (block.type === "list") {
                const ListTag = block.ordered ? "ol" : "ul";
                const items = (block.content || []).map((item) => {
                  const itemText = typeof item === 'string' ? item : item?.text || "";
                  let itemHtml = itemText;
                  if (typeof item === 'object') {
                    if (item.bold) itemHtml = `<strong>${itemHtml}</strong>`;
                    if (item.italic) itemHtml = `<em>${itemHtml}</em>`;
                    if (item.underline) itemHtml = `<u>${itemHtml}</u>`;
                    if (item.color) itemHtml = `<span style="color: ${item.color}">${itemHtml}</span>`;
                  }
                  return `<li>${itemHtml}</li>`;
                }).join("");
                const heading = block.heading ? `<h3>${block.heading}</h3>` : "";
                return `${heading}<${ListTag}>${items}</${ListTag}>`;
              }
              return "";
            })
            .join("");
          setContent(htmlContent);
        } else {
          setContent("");
        }
      }
    } catch (err) {
      console.error("Error fetching post:", err);
      setError("Failed to load post. Please try again.");
    } finally {
      setLoadingPost(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        [fieldName]: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e, customData = null) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const dataToUse = customData || formData;

      // Validate that there's at least some content
      const textContent = content.replace(/<[^>]*>/g, "").trim();
      if (!textContent) {
        setError("Please add some content to your post");
        setLoading(false);
        return;
      }

      const seoData = {
        metaTitle: dataToUse.metaTitle || dataToUse.title,
        metaDescription: dataToUse.metaDescription || dataToUse.excerpt,
        metaKeywords: dataToUse.metaKeywords,
        ogTitle: dataToUse.ogTitle || dataToUse.title,
        ogDescription: dataToUse.ogDescription || dataToUse.excerpt,
        ogImage: dataToUse.ogImage || dataToUse.featuredImage,
        twitterCard: "summary_large_image",
      };

      const postData = {
        title: dataToUse.title,
        excerpt: dataToUse.excerpt,
        content: content,
        category: dataToUse.category,
        featuredImage: dataToUse.featuredImage,
        status: dataToUse.status,
        contentBlocks: [{ type: "text", content: content }], // Store as single block for compatibility
        seo: seoData,
      };

      const response = await fetch(`/api/admin/posts/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.error || data.message || "Failed to update post";
        const errorDetails = data.details || data.errorName || "";
        setError(`${errorMessage}${errorDetails ? ` (${errorDetails})` : ""}`);
        setLoading(false);
        return;
      }

      // Success - redirect
      router.push("/admin/posts");
      router.refresh();
    } catch (err) {
      console.error("Post update exception:", err);
      setError(`An error occurred: ${err.message || "Please try again."}`);
      setLoading(false);
    }
  };

  const categories = [
    "startup",
    "ecosystem",
    "funding",
    "technology",
    "guides",
    "tools",
    "legal",
    "marketing",
  ];

  if (loadingPost) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading post...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Edit Post</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Update your blog post with SEO optimization
        </p>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8">
            <button
              type="button"
              onClick={() => setActiveTab("content")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "content"
                  ? "border-red-500 text-red-600 dark:text-red-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              Content
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("seo")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "seo"
                  ? "border-red-500 text-red-600 dark:text-red-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              SEO
            </button>
          </nav>
        </div>

        {activeTab === "content" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                placeholder="Enter post title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Excerpt
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows={3}
                className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
                placeholder="Brief description of the post"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Featured Image
              </label>
              <input
                type="url"
                name="featuredImage"
                value={formData.featuredImage}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 mb-2"
                placeholder="Image URL"
              />
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">OR</span>
                <label className="flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, "featuredImage")}
                    className="hidden"
                  />
                  <span className="inline-block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer text-sm text-center">
                    Upload Image
                  </span>
                </label>
              </div>
              {formData.featuredImage && (
                <img
                  src={formData.featuredImage}
                  alt="Preview"
                  className="w-full max-w-md h-48 object-cover rounded-lg border border-gray-200 dark:border-gray-700 mt-2"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Content <span className="text-red-500">*</span>
              </label>
              <RichTextEditor
                value={content}
                onChange={setContent}
                placeholder="Start writing your post... You can format text by selecting it and using the toolbar buttons above."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>
        )}

        {activeTab === "seo" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Meta Title
              </label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                placeholder="SEO title (defaults to post title)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Meta Description
              </label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
                rows={3}
                className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
                placeholder="SEO description (defaults to excerpt)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Meta Keywords
              </label>
              <input
                type="text"
                name="metaKeywords"
                value={formData.metaKeywords}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                placeholder="Comma-separated keywords"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                OG Title
              </label>
              <input
                type="text"
                name="ogTitle"
                value={formData.ogTitle}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                placeholder="Open Graph title (defaults to post title)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                OG Description
              </label>
              <textarea
                name="ogDescription"
                value={formData.ogDescription}
                onChange={handleChange}
                rows={3}
                className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
                placeholder="Open Graph description (defaults to excerpt)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                OG Image
              </label>
              <input
                type="url"
                name="ogImage"
                value={formData.ogImage}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                placeholder="Open Graph image URL (defaults to featured image)"
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/25 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Updating..." : "Update Post"}
          </button>
        </div>
      </form>
    </div>
  );
}
