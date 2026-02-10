"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import MainLayout from "@/components/MainLayout";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  Bookmark,
  Clock,
  Facebook,
  MessageCircle,
  Share2,
  ThumbsUp,
  Twitter,
  User,
  Loader2,
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
        const response = await fetch(`/api/public/posts/${encodeURIComponent(slug)}`);
        
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

  useEffect(() => {
    if (post && post.slug) {
      fetchComments(post.slug);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  const fetchComments = async (postSlug) => {
    try {
      setCommentLoading(true);
      const response = await fetch(`/api/posts/${encodeURIComponent(postSlug)}/comments`);
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
      const response = await fetch(`/api/posts/${encodeURIComponent(slug)}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: commentContent.trim(),
        }),
      });

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
            <style dangerouslySetInnerHTML={{__html: `
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
            `}} />
            <div
              className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed prose prose-lg max-w-none post-content bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          </>
        );
      }
    }

    // Fallback: If contentBlocks exist and have meaningful structure (not just wrapper), render them
    // Only use contentBlocks if content is empty or doesn't contain HTML
    if ((!post.content || post.content.trim() === "" || !/<[^>]+>/.test(post.content)) && 
        post.contentBlocks && Array.isArray(post.contentBlocks) && post.contentBlocks.length > 0) {
      // Check if it's a real contentBlocks structure (has multiple blocks or complex structure)
      // vs just a wrapper [{ type: "text", content: html }]
      const firstBlock = post.contentBlocks[0];
      const isRealContentBlocks = post.contentBlocks.length > 1 || 
        (firstBlock && firstBlock.type !== "text") ||
        (firstBlock && firstBlock.type === "text" && firstBlock.content && !/<[^>]+>/.test(firstBlock.content));
      
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
                    fontWeight: block.bold ? 'bold' : 'normal',
                    fontStyle: block.italic ? 'italic' : 'normal',
                    textDecoration: block.underline ? 'underline' : 'none',
                    color: block.color || undefined,
                  };
                  return (
                    <p key={index} className="text-gray-700 dark:text-gray-300" style={textStyle}>
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
                    <div key={index} className="border rounded overflow-hidden">
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
                          const itemText = typeof item === 'string' ? item : item?.text || "";
                          const itemBold = typeof item === 'string' ? false : item?.bold || false;
                          const itemItalic = typeof item === 'string' ? false : item?.italic || false;
                          const itemUnderline = typeof item === 'string' ? false : item?.underline || false;
                          const itemColor = typeof item === 'string' ? "" : item?.color || "";
                          
                          const style = {
                            fontWeight: itemBold ? 'bold' : 'normal',
                            fontStyle: itemItalic ? 'italic' : 'normal',
                            textDecoration: itemUnderline ? 'underline' : 'none',
                            color: itemColor || undefined,
                          };
                          
                          return (
                            <li key={itemIndex} className="text-gray-700 dark:text-gray-300" style={style}>
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
                <Loader2 className="animate-spin mx-auto mb-4 text-blue-600" size={48} />
                <p className="text-gray-600 dark:text-gray-400">Loading post...</p>
              </div>
            </div>
          }
          right={<Sidebar />}
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
          right={<Sidebar />}
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
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                    {getAuthorName(post.author)
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2) || "ED"}
                  </div>
                  <div>
                    <span className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                      <User size={14} className="text-gray-500 dark:text-gray-400" />
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
                <div className="flex items-center gap-2 ml-auto">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-200 text-sm font-medium hover:scale-105 active:scale-95">
                    <Share2 size={16} /> Share
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-200 text-sm font-medium hover:scale-105 active:scale-95">
                    <Bookmark size={16} /> Save
                  </button>
                </div>
              </div>
            </header>

            {/* Hero Image */}
            {post.featuredImage && (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 dark:shadow-gray-900/50 ring-1 ring-gray-200/50 dark:ring-gray-700/50">
                <div className="aspect-video w-full relative">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    onError={(e) => {
                      e.target.src = "/demo.png";
                    }}
                  />
                </div>
              </div>
            )}

            {/* Content */}
            {renderContent()}

            {/* Share / Reactions */}
            <div className="flex flex-wrap items-center gap-3 border-y border-gray-200 dark:border-gray-700 py-6">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-700 text-blue-700 dark:text-blue-400 rounded-xl transition-all duration-200 text-sm font-semibold hover:scale-105 active:scale-95 shadow-sm">
                <ThumbsUp size={18} /> Like
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 hover:from-purple-100 hover:to-pink-100 dark:hover:from-gray-700 dark:hover:to-gray-700 text-purple-700 dark:text-purple-400 rounded-xl transition-all duration-200 text-sm font-semibold hover:scale-105 active:scale-95 shadow-sm">
                <Bookmark size={18} /> Save
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-50 to-red-50 dark:from-gray-800 dark:to-gray-800 hover:from-pink-100 hover:to-red-100 dark:hover:from-gray-700 dark:hover:to-gray-700 text-pink-700 dark:text-pink-400 rounded-xl transition-all duration-200 text-sm font-semibold hover:scale-105 active:scale-95 shadow-sm">
                <Share2 size={18} /> Share
              </button>
            </div>

            {/* Author Box */}
            {post.author && (
              <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 flex gap-5 items-center shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 backdrop-blur-sm">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                  {getAuthorName(post.author)
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2) || "ED"}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                    {getAuthorName(post.author)}
                  </h4>
                  {post.author?.bio && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {post.author.bio}
                    </p>
                  )}
                </div>
              </div>
            )}

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
                      className="bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl overflow-hidden group shadow-md shadow-gray-200/50 dark:shadow-gray-900/50 hover:shadow-xl hover:shadow-gray-300/50 dark:hover:shadow-gray-800/50 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={item.featuredImage || "/demo.png"}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = "/demo.png";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4 space-y-3">
                        <p className="text-sm font-bold leading-snug text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                          {item.title}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500 dark:text-gray-400">
                            {item.publishedAt
                              ? formatDate(item.publishedAt)
                              : formatDate(item.createdAt)}
                          </span>
                          {item.category && (
                            <span className="px-2.5 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-semibold">
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
              <div className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Comments ({comments.length})
                </h3>
              </div>

              {/* Comment Form - Only for logged-in users */}
              {user ? (
                <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-gray-200/50 dark:border-gray-700/50 p-6 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
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
                      <p className="text-xs text-gray-500 dark:text-gray-400">Leave a comment</p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmitComment} className="space-y-4">
                    <textarea
                      value={commentContent}
                      onChange={(e) => setCommentContent(e.target.value)}
                      placeholder="Share your thoughts..."
                      rows={5}
                      className="w-full px-5 py-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200 shadow-sm"
                      required
                    />
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={submittingComment || !commentContent.trim()}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95"
                      >
                        {submittingComment ? "Posting..." : "Post Comment"}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-gray-200/50 dark:border-gray-700/50 p-8 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 text-center">
                  <MessageCircle size={48} className="mx-auto mb-4 text-gray-400 dark:text-gray-500" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 font-medium">
                    Please login to leave a comment
                  </p>
                  <Link
                    href="/login"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95"
                  >
                    Login
                  </Link>
                </div>
              )}

              {/* Comments List */}
              {commentLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="animate-spin text-blue-600" size={32} />
                </div>
              ) : comments.length > 0 ? (
                <div className="space-y-5">
                  {comments.map((comment) => (
                    <div
                      key={comment._id}
                      className="bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0">
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
                <div className="text-center py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl">
                  <MessageCircle size={48} className="mx-auto mb-4 text-gray-300 dark:text-gray-600" />
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">No comments yet. Be the first to comment!</p>
                </div>
              )}
            </div>

          </article>
        }
        right={<Sidebar />}
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
                  <Loader2 className="animate-spin mx-auto mb-4 text-blue-600" size={48} />
                  <p className="text-gray-600 dark:text-gray-400">Loading post...</p>
                </div>
              </div>
            }
            right={<Sidebar />}
          />
          <Footer />
        </>
      }
    >
      <PostContent />
    </Suspense>
  );
}









