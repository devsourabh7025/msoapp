"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/RichTextEditor";

export default function AddPost() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("content");
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

    // For now, we'll create a data URL. In production, upload to a service like Cloudinary
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

      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        const errorMessage = data.error || data.message || "Failed to create post";
        const errorDetails = data.details || data.errorName || "";
        setError(`${errorMessage}${errorDetails ? ` (${errorDetails})` : ""}`);
        console.error("Post creation error:", {
          status: response.status,
          error: data.error,
          errorName: data.errorName,
          details: data.details,
          fullData: data
        });
        setLoading(false);
        return;
      }

      // Success - redirect
      router.push("/admin/posts");
      router.refresh();
    } catch (err) {
      console.error("Post creation exception:", err);
      setError(`An error occurred: ${err.message || "Please try again."}`);
      setLoading(false);
    }
  };

  const categories = [
    "technology",
    "business",
    "startups",
    "funding",
    "innovation",
    "entrepreneurship",
    "success-stories",
    "guides",
    "tools",
    "legal",
    "marketing",
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Create New Post
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Write and publish your blog post with SEO optimization
        </p>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-3 py-2 rounded text-xs">
          {error}
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={() => setActiveTab("content")}
            className={`flex-1 px-4 py-2 text-xs font-medium transition-colors ${
              activeTab === "content"
                ? "text-red-600 dark:text-red-400 border-b-2 border-red-600 dark:border-red-400 bg-red-50 dark:bg-red-900/20"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Content
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("seo");
            }}
            className={`flex-1 px-4 py-2 text-xs font-medium transition-colors ${
              activeTab === "seo"
                ? "text-red-600 dark:text-red-400 border-b-2 border-red-600 dark:border-red-400 bg-red-50 dark:bg-red-900/20"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            SEO Settings
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`flex-1 px-4 py-2 text-xs font-medium transition-colors ${
              activeTab === "preview"
                ? "text-red-600 dark:text-red-400 border-b-2 border-red-600 dark:border-red-400 bg-red-50 dark:bg-red-900/20"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Preview
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {activeTab === "content" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Post Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="Enter post title"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Excerpt / Short Description
                </label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={2}
                  className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
                  placeholder="Brief description of your post"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() +
                        cat.slice(1).replace("-", " ")}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Featured Image
                </label>
                <div className="space-y-2">
                  <input
                    type="url"
                    name="featuredImage"
                    value={formData.featuredImage}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                    placeholder="https://example.com/image.jpg"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">OR</span>
                    <label className="flex-1">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "featuredImage")}
                        className="hidden"
                      />
                      <span className="inline-block w-full px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer text-xs text-center">
                        Upload Image
                      </span>
                    </label>
                  </div>
                  {formData.featuredImage && (
                    <img
                      src={formData.featuredImage}
                      alt="Preview"
                      className="w-full max-w-md h-32 object-cover rounded border border-gray-200 dark:border-gray-700"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  )}
                </div>
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
                  className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === "preview" && (
            <div className="p-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 max-w-4xl mx-auto">
                {/* Preview Header */}
                <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Post Preview
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    This is how your post will appear to readers
                  </p>
                </div>

                {/* Breadcrumbs */}
                <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2 mb-4">
                  <span>Home</span>
                  <span>/</span>
                  <span className="capitalize">{formData.category || "Category"}</span>
                </div>

                {/* Title + Meta */}
                <header className="space-y-3 mb-6">
                  <h1 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 dark:text-white">
                    {formData.title || "Your Post Title"}
                  </h1>
                  {formData.excerpt && (
                    <p className="text-lg text-gray-600 dark:text-gray-300 italic">
                      {formData.excerpt}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>By Author</span>
                    <span>•</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                </header>

                {/* Hero Image */}
                {formData.featuredImage && (
                  <div className="mb-6">
                    <img
                      src={formData.featuredImage}
                      alt={formData.title || "Featured"}
                      className="w-full h-64 md:h-96 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                )}

                {/* Content Preview */}
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <style dangerouslySetInnerHTML={{__html: `
                    .preview-content h1 {
                      font-size: 2.25em;
                      font-weight: bold;
                      margin: 0.67em 0;
                      color: #111827;
                    }
                    .preview-content h2 {
                      font-size: 1.875em;
                      font-weight: bold;
                      margin: 0.75em 0;
                      color: #111827;
                    }
                    .preview-content h3 {
                      font-size: 1.5em;
                      font-weight: bold;
                      margin: 0.83em 0;
                      color: #111827;
                    }
                    .preview-content h4 {
                      font-size: 1.25em;
                      font-weight: bold;
                      margin: 1em 0;
                      color: #111827;
                    }
                    .preview-content h5 {
                      font-size: 1.125em;
                      font-weight: bold;
                      margin: 1.17em 0;
                      color: #111827;
                    }
                    .preview-content h6 {
                      font-size: 1em;
                      font-weight: bold;
                      margin: 1.33em 0;
                      color: #111827;
                    }
                    .preview-content blockquote {
                      border-left: 4px solid #ef4444;
                      background-color: #f9fafb;
                      padding: 1rem;
                      margin: 1.5rem 0;
                      color: #374151;
                    }
                    .preview-content img {
                      max-width: 100%;
                      height: auto;
                      border-radius: 0.5rem;
                      margin: 1.5rem 0;
                    }
                    .preview-content p {
                      margin: 1rem 0;
                      line-height: 1.75;
                    }
                    .preview-content ul, .preview-content ol {
                      margin: 1rem 0;
                      padding-left: 2rem;
                    }
                    .preview-content li {
                      margin: 0.5rem 0;
                    }
                    .dark .preview-content h1,
                    .dark .preview-content h2,
                    .dark .preview-content h3,
                    .dark .preview-content h4,
                    .dark .preview-content h5,
                    .dark .preview-content h6 {
                      color: #f9fafb;
                    }
                    .dark .preview-content blockquote {
                      background-color: #1f2937;
                      color: #e5e7eb;
                    }
                  `}} />
                  {content ? (
                    <div
                      className="preview-content space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  ) : (
                    <div className="text-center py-12 text-gray-400 dark:text-gray-500">
                      <p>No content yet. Add content in the Content tab to see preview.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "seo" && (
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded p-3">
                <p className="text-xs text-red-800 dark:text-red-200">
                  <strong>Tip:</strong> SEO fields are optional. If left empty,
                  they will automatically use your post title and excerpt.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="SEO title for search engines"
                  maxLength={60}
                />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {formData.metaTitle.length}/60 characters
                </p>
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
                  className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="SEO description for search engines"
                  maxLength={160}
                />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {formData.metaDescription.length}/160 characters
                </p>
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
                  className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="Comma-separated keywords"
                />
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Open Graph (Social Media)
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      OG Title
                    </label>
                    <input
                      type="text"
                      name="ogTitle"
                      value={formData.ogTitle}
                      onChange={handleChange}
                      className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                      placeholder="Title for social media sharing"
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
                      className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                      placeholder="Description for social media sharing"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      OG Image
                    </label>
                    <div className="space-y-3">
                      <input
                        type="url"
                        name="ogImage"
                        value={formData.ogImage}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                        placeholder="Image URL for social media"
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          OR
                        </span>
                        <label className="flex-1">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, "ogImage")}
                            className="hidden"
                          />
                          <span className="inline-block px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer text-sm">
                            Upload Image
                          </span>
                        </label>
                      </div>
                      {formData.ogImage && (
                        <img
                          src={formData.ogImage}
                          alt="OG Preview"
                          className="w-full h-48 object-cover rounded-lg border border-gray-200 dark:border-gray-700"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              Cancel
            </button>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  const draftData = { ...formData, status: "draft" };
                  handleSubmit(e, draftData);
                }}
                disabled={loading}
                className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition disabled:opacity-50"
              >
                Save Draft
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/25 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Publishing..." : "Publish Post"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
