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
        const response = await fetch(
          `/api/public/posts/${encodeURIComponent(slug)}`,
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
                border-left: 4px solid #6366f1;
                padding: 1.75em 1.75em 1.75em 3.5em;
                margin: 2em 0;
                font-style: italic;
                color: #4b5563;
                background: linear-gradient(to right, #f0f9ff 0%, #f5f3ff 100%);
                border-radius: 1rem;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
              }
              .post-content blockquote::before,
              .post-content .quote-block::before {
                content: '"';
                position: absolute;
                left: 0.75em;
                top: 0.25em;
                font-size: 4.5em;
                line-height: 1;
                color: #6366f1;
                opacity: 0.2;
                font-family: Georgia, serif;
              }
              .post-content blockquote p,
              .post-content .quote-block p {
                margin: 0;
                padding: 0;
                font-size: 1.125em;
                line-height: 1.75;
              }
              .dark .post-content blockquote,
              .dark .post-content .quote-block {
                background: linear-gradient(to right, #1e293b 0%, #312e81 100%);
                color: #e2e8f0;
                border-left-color: #818cf8;
              }
              .dark .post-content blockquote::before,
              .dark .post-content .quote-block::before {
                color: #818cf8;
              }
              .post-content pre {
                background: #1e293b;
                padding: 1.5em;
                border-radius: 0.75rem;
                overflow-x: auto;
                font-family: 'Fira Code', 'Courier New', monospace;
                border: 1px solid #334155;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                margin: 1.5em 0;
              }
              .post-content code {
                background: #f1f5f9;
                padding: 0.25em 0.5em;
                border-radius: 0.375rem;
                font-family: 'Fira Code', 'Courier New', monospace;
                font-size: 0.9em;
                color: #dc2626;
                font-weight: 500;
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
                border-radius: 1rem;
                margin: 2em 0;
                display: inline-block;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
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
                color: #6366f1;
                text-decoration: none;
                font-weight: 500;
                border-bottom: 2px solid #c7d2fe;
                transition: all 0.2s;
              }
              .post-content a:hover {
                color: #4f46e5;
                border-bottom-color: #6366f1;
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
              className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed prose prose-lg max-w-none post-content bg-white dark:bg-gray-900 p-8"
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

      <MainLayout
        left={
          <article className="space-y-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <span className="text-gray-300 dark:text-gray-600">/</span>
              <span className="text-gray-700 dark:text-gray-300 capitalize font-medium">
                {post.category || "Post"}
              </span>
            </div>

            {/* Title + Meta */}
            <header className="space-y-5">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white tracking-tight">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light italic">
                  {post.excerpt}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-6 pt-4 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10  bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                    {getAuthorName(post.author)
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2) || "ED"}
                  </div>
                  <div>
                    <span className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                      <User
                        size={14}
                        className="text-gray-500 dark:text-gray-400"
                      />
                      {getAuthorName(post.author)}
                    </span>
                    {post.publishedAt && (
                      <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        <Clock size={12} />
                        {formatDate(post.publishedAt)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 ml-auto">
                  <span className="flex items-center gap-1.5">
                    <Eye size={14} />
                    {views.toLocaleString()} {views === 1 ? "view" : "views"}
                  </span>
                  <div className="flex items-center gap-3 p-2 bg-white dark:bg-black">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={async () => {
                          if (!user) {
                            alert("Please login to like");
                            return;
                          }
                          if (likeLoading) return;
                          setLikeLoading(true);
                          try {
                            const res = await fetch(`/api/posts/${encodeURIComponent(slug)}/like`, {
                              method: "POST",
                              credentials: "include",
                            });
                            if (res.ok) {
                              const data = await res.json();
                              setLikesCount(data.likesCount);
                              setUserLiked(data.liked);
                            }
                          } catch (err) {
                            console.error("Like failed:", err);
                          } finally {
                            setLikeLoading(false);
                          }
                        }}
                        disabled={likeLoading}
                        className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium border transition-all ${
                          userLiked
                            ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                            : "border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        <ThumbsUp size={14} fill={userLiked ? "currentColor" : "none"} />
                        {userLiked ? "Liked" : "Like"}
                      </button>
                      <span className="inline-flex items-center justify-center min-w-[2.25rem] px-2.5 py-1.5 text-sm font-medium border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white">
                        {likesCount} {likesCount === 1 ? "like" : "likes"}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShareModalOpen(true)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                    >
                      <Share2 size={14} />
                      Share
                    </button>
                  </div>
                  {(userLiked || likesCount > 0) && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {userLiked ? "You liked this" : `${likesCount} ${likesCount === 1 ? "person" : "people"} liked this`}
                    </span>
                  )}
                </div>
              </div>
            </header>

            {/* Share modal */}
            {shareModalOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                onClick={() => setShareModalOpen(false)}
                role="dialog"
                aria-modal="true"
                aria-label="Share post"
              >
                <div
                  className="bg-white dark:bg-black p-6 max-w-md w-full mx-4 shadow-lg rounded-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-lg font-bold text-black dark:text-white mb-3">Share this post</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 break-all">
                    {typeof window !== "undefined" ? window.location.href : ""}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(() => {
                      const url = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
                      const text = typeof window !== "undefined" ? encodeURIComponent(post?.title || "") : "";
                      return (
                        <>
                          <a
                            href={`https://wa.me/?text=${text}%20${url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-[#25D366] text-white hover:opacity-90 rounded-lg transition-opacity"
                            aria-label="Share on WhatsApp"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            WhatsApp
                          </a>
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-[#1877F2] text-white hover:opacity-90 rounded-lg transition-opacity"
                            aria-label="Share on Facebook"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            Facebook
                          </a>
                          <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-[#0A66C2] text-white hover:opacity-90 rounded-lg transition-opacity"
                            aria-label="Share on LinkedIn"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            LinkedIn
                          </a>
                          <button
                            type="button"
                            onClick={async () => {
                              const link = typeof window !== "undefined" ? window.location.href : "";
                              try {
                                if (navigator.clipboard?.writeText) {
                                  await navigator.clipboard.writeText(link);
                                  setShareCopied(true);
                                  setTimeout(() => setShareCopied(false), 2000);
                                } else {
                                  alert("Link: " + link);
                                }
                              } catch (err) {
                                alert("Copy failed. URL: " + link);
                              }
                            }}
                            className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] text-white hover:opacity-90 rounded-lg transition-opacity"
                            aria-label="Copy link for Instagram"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            {shareCopied ? "Copied!" : "Copy for Instagram"}
                          </button>
                        </>
                      );
                    })()}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={async () => {
                        const url = typeof window !== "undefined" ? window.location.href : "";
                        try {
                          if (navigator.clipboard?.writeText) {
                            await navigator.clipboard.writeText(url);
                            setShareCopied(true);
                            setTimeout(() => setShareCopied(false), 2000);
                          } else {
                            alert("Link: " + url);
                          }
                        } catch (err) {
                          alert("Copy failed. URL: " + url);
                        }
                      }}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-black dark:bg-white text-white dark:text-black hover:opacity-90 rounded-lg"
                    >
                      <Share2 size={16} />
                      {shareCopied ? "Copied!" : "Copy link"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShareModalOpen(false)}
                      className="px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Hero Image - object-cover + object-center handles different sizes correctly */}
            {post.featuredImage && (
              <div className="relative overflow-hidden shadow-2xl shadow-gray-200/50 dark:shadow-gray-900/50 ring-1 ring-gray-200/50 dark:ring-gray-700/50 rounded-xl">
                <div className="aspect-video w-full relative bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                    priority
                    onError={(e) => {
                      e.target.src = "/demo.png";
                    }}
                  />
                </div>
              </div>
            )}

            {/* Top Ad */}
            <PostAdBlock position="top" />

            {/* Content */}
            {renderContent()}

            {/* You Might Also Like */}
            {relatedPosts.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  You Might Also Like
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {relatedPosts.map((item) => (
                    <Link
                      key={item._id}
                      href={`/post?slug=${item.slug}`}
                      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-hidden group hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
                    >
                      <div className="relative aspect-square w-full overflow-hidden">
                        <Image
                          src={item.featuredImage || "/demo.png"}
                          alt={item.title}
                          fill
                          className="object-cover object-center group-hover:scale-110 transition-transform duration-500 grayscale"
                          onError={(e) => {
                            e.target.src = "/demo.png";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4 space-y-3">
                        <p className="text-sm font-bold leading-snug text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-200 line-clamp-2">
                          {item.title}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500 dark:text-gray-400">
                            {item.publishedAt
                              ? formatDate(item.publishedAt)
                              : formatDate(item.createdAt)}
                          </span>
                          {item.category && (
                            <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300  text-xs font-semibold">
                              {item.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Comments Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-gray-300 dark:border-gray-600">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  Comments ({comments.length})
                </h3>
              </div>

              {/* Comment Form - Only for logged-in users */}
              {user ? (
                <div className="bg-white dark:bg-black border border-gray-300 dark:border-gray-600 p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold text-sm">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Leave a comment
                      </p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmitComment} className="space-y-4">
                    <textarea
                      value={commentContent}
                      onChange={(e) => setCommentContent(e.target.value)}
                      placeholder="Share your thoughts..."
                      rows={5}
                      className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-500 resize-none"
                      required
                    />
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={submittingComment || !commentContent.trim()}
                        className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submittingComment ? "Posting..." : "Post Comment"}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-white dark:bg-black border border-gray-300 dark:border-gray-600 p-8 text-center">
                  <MessageCircle
                    size={48}
                    className="mx-auto mb-4 text-gray-600 dark:text-gray-400"
                  />
                  <p className="text-sm text-black dark:text-white mb-4 font-medium">
                    Please login to leave a comment
                  </p>
                  <Link
                    href="/login"
                    className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-sm font-semibold transition-all duration-200"
                  >
                    Login
                  </Link>
                </div>
              )}

              {/* Comments List */}
              {commentLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="animate-spin text-black dark:text-white" size={32} />
                </div>
              ) : comments.length > 0 ? (
                <div className="space-y-5">
                  {comments.map((comment) => (
                    <div
                      key={comment._id}
                      className="bg-white dark:bg-black border border-gray-300 dark:border-gray-600 p-5"
                    >
                      <div className="flex gap-4">
                        <div className="h-12 w-12 bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold text-sm flex-shrink-0">
                          {getAuthorName(comment.author)
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()
                            .slice(0, 2)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-bold text-gray-900 dark:text-white">
                              {getAuthorName(comment.author)}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {formatDate(comment.createdAt)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                            {comment.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white dark:bg-black border border-gray-300 dark:border-gray-600">
                  <MessageCircle
                    size={48}
                    className="mx-auto mb-4 text-gray-600 dark:text-gray-400"
                  />
                  <p className="text-sm text-black dark:text-white font-medium">
                    No comments yet. Be the first to comment!
                  </p>
                </div>
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
