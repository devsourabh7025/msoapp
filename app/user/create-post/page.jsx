"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/RichTextEditor";

export default function CreatePost() {
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
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, [fieldName]: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e, customData = null) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const dataToUse = customData || formData;

      if (!dataToUse.title?.trim()) {
        setError("Please enter a title for your post");
        setLoading(false);
        return;
      }

      if (!dataToUse.category) {
        setError("Please select a category for your post");
        setLoading(false);
        return;
      }

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
        contentBlocks: [],
        seo: seoData,
      };

      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        setError(`Server returned ${response.status} with no details.`);
        setLoading(false);
        return;
      }

      if (!response.ok) {
        const errorMessage = data?.error || data?.message || `Failed to create post (${response.status})`;
        const errorDetails = data?.details || data?.errorName || "";
        setError(`${errorMessage}${errorDetails ? ` (${errorDetails})` : ""}`);
        setLoading(false);
        return;
      }

      router.push("/user");
      router.refresh();
    } catch (err) {
      console.error("Post creation exception:", err);
      setError(`An error occurred: ${err.message || "Please try again."}`);
      setLoading(false);
    }
  };

  const categories = [
    "technology", "business", "startups", "funding", "innovation",
    "entrepreneurship", "success-stories", "guides", "tools", "legal", "marketing",
  ];

  const tabs = [
    { id: "content", label: "Content" },
    { id: "seo", label: "SEO" },
    { id: "preview", label: "Preview" },
  ];

  const inputClass =
    "w-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-red-500 transition-colors";
  const labelClass =
    "block text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-1.5";

  return (
    <div className="max-w-5xl mx-auto space-y-5">
      <div>
        <h1 className="text-xl font-extrabold text-gray-900">Create New Post</h1>
        <p className="text-xs text-gray-400 mt-0.5">
          Write and publish your blog post with SEO optimization
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
          {error}
        </div>
      )}

      <div className="bg-white border border-gray-200">
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2.5 text-[12px] font-bold tracking-wider uppercase transition-colors ${
                activeTab === tab.id
                  ? "text-red-600 border-b-2 border-red-600 bg-red-50/30"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-5">
          {/* Content Tab */}
          {activeTab === "content" && (
            <div className="space-y-5">
              <div>
                <label className={labelClass}>
                  Post Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Enter post title"
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Excerpt</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={3}
                  className={inputClass}
                  placeholder="Brief description of your post"
                />
              </div>

              <div>
                <label className={labelClass}>
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass}>Featured Image</label>
                <div className="space-y-2">
                  <input
                    type="url"
                    name="featuredImage"
                    value={formData.featuredImage}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="https://example.com/image.jpg"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-gray-400">or</span>
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "featuredImage")}
                        className="hidden"
                      />
                      <span className="inline-block px-3 py-1.5 border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
                        Upload Image
                      </span>
                    </label>
                  </div>
                  {formData.featuredImage && (
                    <img
                      src={formData.featuredImage}
                      alt="Preview"
                      className="w-full max-w-md h-48 object-cover border border-gray-200"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  )}
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  Content <span className="text-red-500">*</span>
                </label>
                <RichTextEditor
                  value={content}
                  onChange={setContent}
                  placeholder="Start writing your post..."
                />
              </div>

              <div>
                <label className={labelClass}>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>
          )}

          {/* Preview Tab */}
          {activeTab === "preview" && (
            <div className="p-4">
              <div className="bg-gray-50 p-6 max-w-4xl mx-auto">
                <div className="mb-5 pb-3 border-b border-gray-200">
                  <h2 className="text-sm font-extrabold tracking-wide uppercase text-gray-900">
                    Post Preview
                  </h2>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    How your post will appear to readers
                  </p>
                </div>

                <div className="text-[11px] text-gray-400 flex items-center gap-2 mb-3 uppercase tracking-wider">
                  <span>Home</span>
                  <span>/</span>
                  <span className="capitalize">{formData.category || "Category"}</span>
                </div>

                <header className="space-y-2 mb-5">
                  <h1 className="text-2xl md:text-3xl font-extrabold leading-tight text-gray-900">
                    {formData.title || "Your Post Title"}
                  </h1>
                  {formData.excerpt && (
                    <p className="text-base text-gray-500 italic">{formData.excerpt}</p>
                  )}
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 uppercase tracking-wider">
                    <span>By Author</span>
                    <span className="w-1 h-1 bg-gray-300" />
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                </header>

                {formData.featuredImage && (
                  <div className="mb-5">
                    <img
                      src={formData.featuredImage}
                      alt={formData.title || "Featured"}
                      className="w-full h-64 md:h-96 object-cover"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  </div>
                )}

                <div className="prose prose-lg max-w-none">
                  <style dangerouslySetInnerHTML={{__html: `
                    .preview-content h1 { font-size: 2.25em; font-weight: 800; margin: 0.67em 0; color: #111827; }
                    .preview-content h2 { font-size: 1.875em; font-weight: 800; margin: 0.75em 0; color: #111827; }
                    .preview-content h3 { font-size: 1.5em; font-weight: 700; margin: 0.83em 0; color: #111827; }
                    .preview-content blockquote { border-left: 3px solid #dc2626; background: #f9fafb; padding: 1rem; margin: 1.5rem 0; color: #374151; }
                    .preview-content img { max-width: 100%; height: auto; margin: 1.5rem 0; }
                    .preview-content p { margin: 1rem 0; line-height: 1.75; }
                    .preview-content ul, .preview-content ol { margin: 1rem 0; padding-left: 2rem; }
                    .preview-content li { margin: 0.5rem 0; }
                  `}} />
                  {content ? (
                    <div
                      className="preview-content space-y-4 text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  ) : (
                    <div className="text-center py-10 text-gray-400 text-sm">
                      No content yet. Add content in the Content tab.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* SEO Tab */}
          {activeTab === "seo" && (
            <div className="space-y-5">
              <div className="bg-gray-50 border border-gray-200 p-3">
                <p className="text-[11px] text-gray-500">
                  <strong>Tip:</strong> SEO fields are optional. If left empty, they use your post title and excerpt.
                </p>
              </div>

              <div>
                <label className={labelClass}>Meta Title</label>
                <input
                  type="text"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="SEO title for search engines"
                  maxLength={60}
                />
                <p className="mt-1 text-[10px] text-gray-400">
                  {formData.metaTitle.length}/60 characters
                </p>
              </div>

              <div>
                <label className={labelClass}>Meta Description</label>
                <textarea
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleChange}
                  rows={3}
                  className={inputClass}
                  placeholder="SEO description for search engines"
                  maxLength={160}
                />
                <p className="mt-1 text-[10px] text-gray-400">
                  {formData.metaDescription.length}/160 characters
                </p>
              </div>

              <div>
                <label className={labelClass}>Meta Keywords</label>
                <input
                  type="text"
                  name="metaKeywords"
                  value={formData.metaKeywords}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Comma-separated keywords"
                />
              </div>

              <div className="border-t border-gray-200 pt-5">
                <h3 className="text-sm font-extrabold tracking-wide uppercase text-gray-900 mb-4">
                  Open Graph (Social Media)
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className={labelClass}>OG Title</label>
                    <input
                      type="text"
                      name="ogTitle"
                      value={formData.ogTitle}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Title for social media sharing"
                    />
                  </div>

                  <div>
                    <label className={labelClass}>OG Description</label>
                    <textarea
                      name="ogDescription"
                      value={formData.ogDescription}
                      onChange={handleChange}
                      rows={3}
                      className={inputClass}
                      placeholder="Description for social media sharing"
                    />
                  </div>

                  <div>
                    <label className={labelClass}>OG Image</label>
                    <div className="space-y-2">
                      <input
                        type="url"
                        name="ogImage"
                        value={formData.ogImage}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Image URL for social media"
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-gray-400">or</span>
                        <label className="cursor-pointer">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, "ogImage")}
                            className="hidden"
                          />
                          <span className="inline-block px-3 py-1.5 border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
                            Upload Image
                          </span>
                        </label>
                      </div>
                      {formData.ogImage && (
                        <img
                          src={formData.ogImage}
                          alt="OG Preview"
                          className="w-full max-w-md h-48 object-cover border border-gray-200"
                          onError={(e) => { e.target.style.display = "none"; }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-5 border-t border-gray-200">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e, { ...formData, status: "draft" });
                }}
                disabled={loading}
                className="px-4 py-2 border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Save Draft
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e, { ...formData, status: "pending" });
                }}
                disabled={loading}
                className="bg-red-600 text-white px-5 py-2 text-sm font-bold tracking-wide hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit for Review"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
