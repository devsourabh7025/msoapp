"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import MainLayout from "@/components/MainLayout";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import PostAdBlock from "@/components/PostAdBlock";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  MessageCircle,
  ThumbsUp,
  User,
  Loader2,
  Eye,
  Share2,
} from "lucide-react";

function PostContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentLoading, setCommentLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [commentContent, setCommentContent] = useState("");
  const [submittingComment, setSubmittingComment] = useState(false);
  const [views, setViews] = useState(0);
  const [likesCount, setLikesCount] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/me");
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (!slug) {
      setError("Post slug is required");
      setLoading(false);
      return;
    }

    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const previewParam = searchParams.get("preview") === "true" ? "?preview=true" : "";
        const response = await fetch(
          `/api/public/posts/${encodeURIComponent(slug)}${previewParam}`,
          { credentials: "include", cache: "no-store" }
        );

        if (!response.ok) {
          if (response.status === 404) {
            setError("Post not found");
          } else {
            const errorData = await response.json().catch(() => ({}));
            setError(errorData.error || "Failed to load post");
          }
          setLoading(false);
          return;
        }

        const data = await response.json();
        if (data.post) {
          setPost(data.post);
          setRelatedPosts(data.relatedPosts || []);
          setViews(data.post.views ?? 0);
          setLikesCount(data.post.likesCount ?? 0);
          setUserLiked(data.post.userLiked ?? false);
        } else {
          setError("Post not found");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setError("Failed to load post. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // When user is logged in, fetch like status so it stays correct after refresh (cookie may not be sent on main post request)
  useEffect(() => {
    if (!user || !slug || !post) return;
    const fetchLikeStatus = async () => {
      try {
        const res = await fetch(`/api/posts/${encodeURIComponent(slug)}/like`, {
          credentials: "include",
          cache: "no-store",
        });
        if (res.ok) {
          const data = await res.json();
          setUserLiked(data.userLiked ?? false);
          setLikesCount(data.likesCount ?? 0);
        }
      } catch (err) {
        console.error("Failed to fetch like status:", err);
      }
    };
    fetchLikeStatus();
  }, [user, slug, post]);

  useEffect(() => {
    if (post && post.slug) {
      fetchComments(post.slug);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  const fetchComments = async (postSlug) => {
    try {
      setCommentLoading(true);
      const response = await fetch(
        `/api/posts/${encodeURIComponent(postSlug)}/comments`,
      );
      if (response.ok) {
        const data = await response.json();
        setComments(data.comments || []);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setCommentLoading(false);
    }
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login to comment");
      return;
    }
    if (!commentContent.trim()) {
      alert("Please enter a comment");
      return;
    }

    try {
      setSubmittingComment(true);
      const response = await fetch(
        `/api/posts/${encodeURIComponent(slug)}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: commentContent.trim(),
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        alert(errorData.error || "Failed to post comment");
        return;
      }

      const data = await response.json();
      // Refresh comments
      await fetchComments(slug);
      setCommentContent("");
      alert("Comment posted successfully!");
    } catch (error) {
      console.error("Error posting comment:", error);
      alert("Failed to post comment. Please try again.");
    } finally {
      setSubmittingComment(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getAuthorName = (author) => {
    if (!author) return "Editorial Team";
    if (typeof author === "object" && author?.name) {
      return author.name;
    }
    return author;
  };

  const renderContent = () => {
    if (!post) return null;

    // Check if we have HTML content (from RichTextEditor) - prioritize this
    if (post.content && post.content.trim() !== "") {
      // Check if content is HTML (contains HTML tags)
      const hasHtmlTags = /<[^>]+>/.test(post.content);

      if (hasHtmlTags) {
        // Render HTML content directly
        return (
          <>
            <style
              dangerouslySetInnerHTML={{
                __html: `
              .post-content {
                font-size: 1.125rem;
                line-height: 1.875;
                color: #374151;
              }
              .post-content h1 {
                font-size: 2.5rem;
                font-weight: 800;
                margin: 1.5em 0 0.75em 0;
                color: #111827;
                line-height: 1.2;
                letter-spacing: -0.02em;
              }
              .post-content h2 {
                font-size: 2rem;
                font-weight: 700;
                margin: 1.25em 0 0.625em 0;
                color: #111827;
                line-height: 1.3;
                letter-spacing: -0.01em;
              }
              .post-content h3 {
                font-size: 1.5rem;
                font-weight: 700;
                margin: 1em 0 0.5em 0;
                color: #111827;
                line-height: 1.4;
              }
              .post-content h4 {
                font-size: 1.25rem;
                font-weight: 600;
                margin: 0.875em 0 0.5em 0;
                color: #111827;
                line-height: 1.5;
              }
              .post-content h5 {
                font-size: 1.125rem;
                font-weight: 600;
                margin: 0.75em 0 0.5em 0;
                color: #111827;
                line-height: 1.5;
              }
              .post-content h6 {
                font-size: 1rem;
                font-weight: 600;
                margin: 0.75em 0 0.5em 0;
                color: #111827;
                line-height: 1.5;
              }
              .post-content blockquote,
              .post-content .quote-block {
                position: relative;
                border-left: 3px solid #dc2626;
                padding: 1.25em 1.5em;
                margin: 1.5em 0;
                font-style: italic;
                color: #4b5563;
                background: #fef2f2;
              }
              .post-content blockquote p,
              .post-content .quote-block p {
                margin: 0;
                padding: 0;
                font-size: 1.05em;
                line-height: 1.7;
              }
              .dark .post-content blockquote,
              .dark .post-content .quote-block {
                background: #1c1917;
                color: #d1d5db;
                border-left-color: #ef4444;
              }
              .post-content pre {
                background: #1c1917;
                padding: 1.25em;
                overflow-x: auto;
                font-family: 'Fira Code', 'Courier New', monospace;
                border: 1px solid #292524;
                margin: 1.5em 0;
              }
              .post-content code {
                background: #f5f5f4;
                padding: 0.2em 0.4em;
                font-family: 'Fira Code', 'Courier New', monospace;
                font-size: 0.875em;
                color: #dc2626;
              }
              .post-content pre code {
                background: transparent;
                padding: 0;
                color: #e2e8f0;
                font-weight: normal;
              }
              .post-content ul, .post-content ol {
                margin: 1.5em 0;
                padding-left: 2.5em;
              }
              .post-content ul {
                list-style-type: disc;
              }
              .post-content ol {
                list-style-type: decimal;
              }
              .post-content li {
                margin: 0.5em 0;
                line-height: 1.75;
              }
              .post-content img {
                max-width: 100%;
                height: auto;
                object-fit: contain;
                margin: 1.5em 0;
                display: inline-block;
              }
              .post-content .image-wrapper {
                margin: 2em 0;
                display: block;
                width: 100%;
              }
              .post-content .image-wrapper img {
                margin: 0;
              }
              .post-content .image-wrapper[style*="text-align: left"] {
                text-align: left;
              }
              .post-content .image-wrapper[style*="text-align: center"] {
                text-align: center;
              }
              .post-content .image-wrapper[style*="text-align: right"] {
                text-align: right;
              }
              .post-content a {
                color: #dc2626;
                text-decoration: none;
                font-weight: 500;
                border-bottom: 1px solid #fca5a5;
                transition: all 0.2s;
              }
              .post-content a:hover {
                color: #b91c1c;
                border-bottom-color: #dc2626;
              }
              .post-content p {
                margin: 1.5em 0;
                line-height: 1.875;
                font-size: 1.125rem;
              }
              .dark .post-content {
                color: #d1d5db;
              }
              .dark .post-content h1,
              .dark .post-content h2,
              .dark .post-content h3,
              .dark .post-content h4,
              .dark .post-content h5,
              .dark .post-content h6 {
                color: #f9fafb;
              }
              .dark .post-content code {
                background: #1e293b;
                color: #f87171;
              }
              .dark .post-content pre {
                background: #0f172a;
                border-color: #1e293b;
              }
            `,
              }}
            />
            <div
              className="post-content text-gray-700 dark:text-gray-300 leading-relaxed max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          </>
        );
      }
    }

    // Fallback: If contentBlocks exist and have meaningful structure (not just wrapper), render them
    // Only use contentBlocks if content is empty or doesn't contain HTML
    if (
      (!post.content ||
        post.content.trim() === "" ||
        !/<[^>]+>/.test(post.content)) &&
      post.contentBlocks &&
      Array.isArray(post.contentBlocks) &&
      post.contentBlocks.length > 0
    ) {
      // Check if it's a real contentBlocks structure (has multiple blocks or complex structure)
      // vs just a wrapper [{ type: "text", content: html }]
      const firstBlock = post.contentBlocks[0];
      const isRealContentBlocks =
        post.contentBlocks.length > 1 ||
        (firstBlock && firstBlock.type !== "text") ||
        (firstBlock &&
          firstBlock.type === "text" &&
          firstBlock.content &&
          !/<[^>]+>/.test(firstBlock.content));

      if (isRealContentBlocks) {
        return (
          <div className="space-y-6 text-gray-700 leading-relaxed">
            {post.contentBlocks.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p key={index} className="text-gray-700 dark:text-gray-300">
                      {block.content}
                    </p>
                  );
                case "text":
                  const textStyle = {
                    fontWeight: block.bold ? "bold" : "normal",
                    fontStyle: block.italic ? "italic" : "normal",
                    textDecoration: block.underline ? "underline" : "none",
                    color: block.color || undefined,
                  };
                  return (
                    <p
                      key={index}
                      className="text-gray-700 dark:text-gray-300"
                      style={textStyle}
                    >
                      {block.content}
                    </p>
                  );
                case "heading":
                  const HeadingTag = `h${block.level || 2}`;
                  const headingClasses = {
                    1: "text-4xl md:text-5xl",
                    2: "text-3xl md:text-4xl",
                    3: "text-2xl md:text-3xl",
                    4: "text-xl md:text-2xl",
                    5: "text-lg md:text-xl",
                    6: "text-base md:text-lg",
                  };
                  return (
                    <HeadingTag
                      key={index}
                      className={`font-bold text-gray-900 dark:text-white ${
                        headingClasses[block.level] || headingClasses[2]
                      }`}
                    >
                      {block.content}
                    </HeadingTag>
                  );
                case "image":
                  return (
                    <div key={index} className="border overflow-hidden">
                      <Image
                        src={block.image || "/demo.png"}
                        alt={block.alt || "Post image"}
                        width={1200}
                        height={720}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  );
                case "list":
                  const ListTag = block.ordered ? "ol" : "ul";
                  return (
                    <div key={index} className="space-y-3">
                      {block.heading && (
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {block.heading}
                        </h3>
                      )}
                      <ListTag
                        className={`${
                          block.ordered ? "list-decimal" : "list-disc"
                        } list-inside space-y-2 ml-4`}
                      >
                        {block.content?.map((item, itemIndex) => {
                          const itemText =
                            typeof item === "string" ? item : item?.text || "";
                          const itemBold =
                            typeof item === "string"
                              ? false
                              : item?.bold || false;
                          const itemItalic =
                            typeof item === "string"
                              ? false
                              : item?.italic || false;
                          const itemUnderline =
                            typeof item === "string"
                              ? false
                              : item?.underline || false;
                          const itemColor =
                            typeof item === "string" ? "" : item?.color || "";

                          const style = {
                            fontWeight: itemBold ? "bold" : "normal",
                            fontStyle: itemItalic ? "italic" : "normal",
                            textDecoration: itemUnderline
                              ? "underline"
                              : "none",
                            color: itemColor || undefined,
                          };

                          return (
                            <li
                              key={itemIndex}
                              className="text-gray-700 dark:text-gray-300"
                              style={style}
                            >
                              {itemText}
                            </li>
                          );
                        })}
                      </ListTag>
                    </div>
                  );
                case "quote":
                  return (
                    <blockquote
                      key={index}
                      className="border-l-4 border-red-500 bg-gray-50 dark:bg-gray-800 p-4 text-gray-800 dark:text-gray-200"
                    >
                      {block.content}
                    </blockquote>
                  );
                default:
                  return null;
              }
            })}
          </div>
        );
      }
    }

    // Final fallback: render content as plain text if no HTML detected
    return (
      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>{post.content || "No content available"}</p>
      </div>
    );
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <MainLayout
          left={
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <Loader2
                  className="animate-spin mx-auto mb-4 text-blue-600"
                  size={48}
                />
                <p className="text-gray-600 dark:text-gray-400">
                  Loading post...
                </p>
              </div>
            </div>
          }
          right={<Sidebar location="post" />}
        />
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Navbar />
        <MainLayout
          left={
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <p className="text-red-600 dark:text-red-400 text-lg mb-2">
                  {error || "Post not found"}
                </p>
                <Link
                  href="/"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Return to homepage
                </Link>
              </div>
            </div>
          }
          right={<Sidebar location="post" />}
        />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {post?.isPreview && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Preview Mode — This post is not published yet (status: {post.status})
          </span>
        </div>
      )}

      <MainLayout
        left={
          <article className="space-y-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold">
              <Link href="/" className="text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                Home
              </Link>
              <span className="text-gray-300 dark:text-gray-600">/</span>
              <span className="text-red-600 dark:text-red-400 capitalize">
                {post.category || "Post"}
              </span>
            </div>

            {/* Title + Meta */}
            <header className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-black leading-tight text-gray-900 dark:text-white tracking-tight">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed border-l-2 border-red-600 pl-4">
                  {post.excerpt}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-4 pt-4 pb-5 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 bg-red-600 flex items-center justify-center text-white font-bold text-xs">
                    {getAuthorName(post.author)
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2) || "ED"}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {getAuthorName(post.author)}
                    </span>
                    <div className="flex items-center gap-3 text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      {post.publishedAt && (
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {formatDate(post.publishedAt)}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Eye size={11} />
                        {views.toLocaleString()} views
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <button
                    onClick={async () => {
                      if (!user) { alert("Please login to like"); return; }
                      if (likeLoading) return;
                      setLikeLoading(true);
                      try {
                        const res = await fetch(`/api/posts/${encodeURIComponent(slug)}/like`, { method: "POST", credentials: "include" });
                        if (res.ok) { const data = await res.json(); setLikesCount(data.likesCount); setUserLiked(data.liked); }
                      } catch (err) { console.error("Like failed:", err); } finally { setLikeLoading(false); }
                    }}
                    disabled={likeLoading}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold border transition-all ${
                      userLiked
                        ? "bg-red-600 text-white border-red-600"
                        : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-red-600 hover:text-red-600"
                    }`}
                  >
                    <ThumbsUp size={13} fill={userLiked ? "currentColor" : "none"} />
                    {likesCount}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShareModalOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-red-600 hover:text-red-600 transition-all"
                  >
                    <Share2 size={13} />
                    Share
                  </button>
                </div>
              </div>
            </header>

            {shareModalOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                onClick={() => setShareModalOpen(false)}
                role="dialog"
                aria-modal="true"
                aria-label="Share post"
              >
                <div
                  className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-5 max-w-sm w-full mx-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-sm font-black text-gray-900 dark:text-white mb-3">Share this post</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(() => {
                      const url = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
                      const text = typeof window !== "undefined" ? encodeURIComponent(post?.title || "") : "";
                      return (
                        <>
                          <a href={`https://wa.me/?text=${text}%20${url}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold bg-[#25D366] text-white hover:opacity-90 transition-opacity">WhatsApp</a>
                          <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold bg-[#1877F2] text-white hover:opacity-90 transition-opacity">Facebook</a>
                          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold bg-[#0A66C2] text-white hover:opacity-90 transition-opacity">LinkedIn</a>
                          <a href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold bg-black text-white hover:opacity-90 transition-opacity">X / Twitter</a>
                        </>
                      );
                    })()}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={async () => {
                        const link = typeof window !== "undefined" ? window.location.href : "";
                        try {
                          if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(link); setShareCopied(true); setTimeout(() => setShareCopied(false), 2000); }
                          else { alert("Link: " + link); }
                        } catch { alert("Copy failed"); }
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold bg-red-600 text-white hover:bg-red-700 transition-colors"
                    >
                      <Share2 size={13} />
                      {shareCopied ? "Copied!" : "Copy Link"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShareModalOpen(false)}
                      className="px-3 py-2 text-xs font-bold border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {post.featuredImage && (
              <div className="relative overflow-hidden border border-gray-200 dark:border-gray-800">
                <div className="aspect-video w-full relative bg-gray-100 dark:bg-gray-900">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                    priority
                    onError={(e) => { e.target.src = "/demo.png"; }}
                  />
                </div>
              </div>
            )}

            {/* Top Ad */}
            <PostAdBlock position="top" />

            {/* Content */}
            {renderContent()}

            {relatedPosts.length > 0 && (
              <div className="pt-6 border-t border-gray-200 dark:border-gray-800 space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-400">
                  Related Stories
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedPosts.map((item) => (
                    <Link
                      key={item._id}
                      href={`/post?slug=${item.slug}`}
                      className="group border border-gray-200 dark:border-gray-800 hover:border-red-200 dark:hover:border-red-900 transition-colors"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                        <Image
                          src={item.featuredImage || "/demo.png"}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => { e.target.src = "/demo.png"; }}
                        />
                      </div>
                      <div className="p-3 space-y-1.5">
                        {item.category && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                            {item.category}
                          </span>
                        )}
                        <p className="text-sm font-bold leading-snug text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-gray-400 dark:text-gray-500">
                          {item.publishedAt ? formatDate(item.publishedAt) : formatDate(item.createdAt)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Comments Section */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800 space-y-5">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-400">
                Discussion ({comments.length})
              </h3>

              {user ? (
                <form onSubmit={handleSubmitComment} className="space-y-3">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="h-8 w-8 bg-red-600 flex items-center justify-center text-white font-bold text-[10px]">
                      {user.name?.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)}
                    </div>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{user.name}</span>
                  </div>
                  <textarea
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                    placeholder="Share your thoughts..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-red-600 dark:focus:border-red-400 resize-none transition-colors"
                    required
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={submittingComment || !commentContent.trim()}
                      className="px-5 py-2 bg-red-600 text-white text-xs font-bold tracking-wide hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submittingComment ? "Posting..." : "Post Comment"}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="border border-gray-200 dark:border-gray-800 p-6 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Login to join the discussion
                  </p>
                  <Link
                    href="/login"
                    className="inline-block px-5 py-2 bg-red-600 text-white text-xs font-bold tracking-wide hover:bg-red-700 transition-colors"
                  >
                    Login
                  </Link>
                </div>
              )}

              {commentLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="animate-spin text-red-600" size={24} />
                </div>
              ) : comments.length > 0 ? (
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment._id} className="flex gap-3 py-4 border-b border-gray-100 dark:border-gray-800/50 last:border-0">
                      <div className="h-8 w-8 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold text-[10px] flex-shrink-0">
                        {getAuthorName(comment.author).split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-gray-900 dark:text-white">
                            {getAuthorName(comment.author)}
                          </span>
                          <span className="text-[11px] text-gray-400 dark:text-gray-500">
                            {formatDate(comment.createdAt)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400 dark:text-gray-500 py-6 text-center">
                  No comments yet. Be the first to share your thoughts.
                </p>
              )}
            </div>
          </article>
        }
        right={<Sidebar location="post" />}
      />

      <Footer />
    </>
  );
}

export default function PostPage() {
  return (
    <Suspense
      fallback={
        <>
          <Navbar />
          <MainLayout
            left={
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <Loader2
                    className="animate-spin mx-auto mb-4 text-black dark:text-white"
                    size={48}
                  />
                  <p className="text-gray-600 dark:text-gray-400">
                    Loading post...
                  </p>
                </div>
              </div>
            }
            right={<Sidebar location="post" />}
          />
          <Footer />
        </>
      }
    >
      <PostContent />
    </Suspense>
  );
}
