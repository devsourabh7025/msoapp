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
              .post-content h1 {
                font-size: 2.25em;
                font-weight: bold;
                margin: 0.67em 0;
                color: #111827;
              }
              .post-content h2 {
                font-size: 1.875em;
                font-weight: bold;
                margin: 0.75em 0;
                color: #111827;
              }
              .post-content h3 {
                font-size: 1.5em;
                font-weight: bold;
                margin: 0.83em 0;
                color: #111827;
              }
              .post-content h4 {
                font-size: 1.25em;
                font-weight: bold;
                margin: 1em 0;
                color: #111827;
              }
              .post-content h5 {
                font-size: 1.125em;
                font-weight: bold;
                margin: 1.17em 0;
                color: #111827;
              }
              .post-content h6 {
                font-size: 1em;
                font-weight: bold;
                margin: 1.33em 0;
                color: #111827;
              }
              .post-content blockquote,
              .post-content .quote-block {
                position: relative;
                border-left: 4px solid #3b82f6;
                padding: 1.5em 1.5em 1.5em 3em;
                margin: 1.5em 0;
                font-style: italic;
                color: #4b5563;
                background: linear-gradient(to right, #eff6ff 0%, #f0f9ff 100%);
                border-radius: 0.5em;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
              }
              .post-content blockquote::before,
              .post-content .quote-block::before {
                content: '"';
                position: absolute;
                left: 0.5em;
                top: 0.3em;
                font-size: 4em;
                line-height: 1;
                color: #3b82f6;
                opacity: 0.3;
                font-family: Georgia, serif;
              }
              .post-content blockquote p,
              .post-content .quote-block p {
                margin: 0;
                padding: 0;
                font-size: 1.1em;
                line-height: 1.6;
              }
              .dark .post-content blockquote,
              .dark .post-content .quote-block {
                background: linear-gradient(to right, #1e3a5f 0%, #1e293b 100%);
                color: #d1d5db;
                border-left-color: #60a5fa;
              }
              .dark .post-content blockquote::before,
              .dark .post-content .quote-block::before {
                color: #60a5fa;
              }
              .post-content pre {
                background: #f3f4f6;
                padding: 1em;
                border-radius: 0.5em;
                overflow-x: auto;
                font-family: monospace;
                border: 1px solid #e5e7eb;
              }
              .post-content code {
                background: #f3f4f6;
                padding: 0.2em 0.4em;
                border-radius: 0.25em;
                font-family: monospace;
                font-size: 0.9em;
              }
              .post-content ul, .post-content ol {
                margin: 1em 0;
                padding-left: 2em;
              }
              .post-content ul {
                list-style-type: disc;
              }
              .post-content ol {
                list-style-type: decimal;
              }
              .post-content img {
                max-width: 100%;
                height: auto;
                border-radius: 0.5em;
                margin: 0.5em 0;
                display: inline-block;
              }
              .post-content .image-wrapper {
                margin: 1em 0;
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
                color: #3b82f6;
                text-decoration: underline;
              }
              .post-content a:hover {
                color: #2563eb;
              }
              .post-content p {
                margin: 1em 0;
                line-height: 1.75;
              }
              .dark .post-content h1,
              .dark .post-content h2,
              .dark .post-content h3,
              .dark .post-content h4,
              .dark .post-content h5,
              .dark .post-content h6 {
                color: #f9fafb;
              }
              .dark .post-content blockquote {
                background: #1f2937;
                color: #d1d5db;
              }
              .dark .post-content pre,
              .dark .post-content code {
                background: #1f2937;
                color: #f9fafb;
              }
            `}} />
            <div
              className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed prose prose-lg max-w-none post-content"
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
          <article className="space-y-8">
            {/* Breadcrumbs */}
            <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
              <Link href="/" className="hover:text-red-500 dark:hover:text-red-400">
                Home
              </Link>
              <span>/</span>
              <span className="capitalize">{post.category || "Post"}</span>
            </div>

            {/* Title + Meta */}
            <header className="space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 dark:text-white">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="text-lg text-gray-600 dark:text-gray-300 italic">
                  {post.excerpt}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <User size={16} />
                  {getAuthorName(post.author)}
                </span>
                {post.publishedAt && (
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    {formatDate(post.publishedAt)}
                  </span>
                )}
                <div className="flex items-center gap-3 ml-auto text-gray-600 dark:text-gray-400">
                  <button className="flex items-center gap-1 hover:text-red-500 dark:hover:text-red-400">
                    <Share2 size={16} /> Share
                  </button>
                  <button className="flex items-center gap-1 hover:text-red-500 dark:hover:text-red-400">
                    <Bookmark size={16} /> Save
                  </button>
                </div>
              </div>
            </header>

            {/* Hero Image */}
            {post.featuredImage && (
              <div className="border rounded overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={1200}
                  height={720}
                  className="w-full h-auto object-cover"
                  priority
                  onError={(e) => {
                    e.target.src = "/demo.png";
                  }}
                />
              </div>
            )}

            {/* Content */}
            {renderContent()}

            {/* Share / Reactions */}
            <div className="flex flex-wrap items-center gap-4 border-y py-4 text-sm text-gray-600">
              <button className="flex items-center gap-2 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                <ThumbsUp size={16} /> Like
              </button>
              <button className="flex items-center gap-2 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                <Bookmark size={16} /> Save
              </button>
              <button className="flex items-center gap-2 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                <Share2 size={16} /> Share
              </button>
            </div>

            {/* Author Box */}
            {post.author && (
              <div className="border p-4 flex gap-4 items-center bg-gray-50 dark:bg-gray-800">
                <div className="h-14 w-14 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 font-semibold">
                  {getAuthorName(post.author)
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2) || "ED"}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {getAuthorName(post.author)}
                  </h4>
                  {post.author?.bio && (
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {post.author.bio}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* You Might Also Like */}
            {relatedPosts.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  You Might Also Like
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedPosts.map((item) => (
                    <Link
                      key={item._id}
                      href={`/post?slug=${item.slug}`}
                      className="border rounded overflow-hidden group dark:border-gray-700"
                    >
                      <div className="relative h-36 w-full">
                        <Image
                          src={item.featuredImage || "/demo.png"}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition"
                          onError={(e) => {
                            e.target.src = "/demo.png";
                          }}
                        />
                      </div>
                      <div className="p-3 space-y-2">
                        <p className="text-sm font-semibold leading-snug group-hover:text-red-500 dark:text-gray-100 dark:group-hover:text-red-400">
                          {item.title}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span>
                            {item.publishedAt
                              ? formatDate(item.publishedAt)
                              : formatDate(item.createdAt)}
                          </span>
                          {item.category && (
                            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
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
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Comments ({comments.length})
                </h3>
              </div>

              {/* Comment Form - Only for logged-in users */}
              {user ? (
                <div className="border p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 font-semibold text-sm">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {user.name}
                      </p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmitComment} className="space-y-3">
                    <textarea
                      value={commentContent}
                      onChange={(e) => setCommentContent(e.target.value)}
                      placeholder="Write your comment..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                      required
                    />
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={submittingComment || !commentContent.trim()}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submittingComment ? "Posting..." : "Post Comment"}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="border p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Please login to leave a comment
                  </p>
                  <Link
                    href="/login"
                    className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Login
                  </Link>
                </div>
              )}

              {/* Comments List */}
              {commentLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="animate-spin text-blue-600" size={24} />
                </div>
              ) : comments.length > 0 ? (
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div
                      key={comment._id}
                      className="border-b border-gray-200 dark:border-gray-700 pb-4"
                    >
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 font-semibold text-sm flex-shrink-0">
                          {getAuthorName(comment.author)
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()
                            .slice(0, 2)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                              {getAuthorName(comment.author)}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {formatDate(comment.createdAt)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                            {comment.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <MessageCircle size={32} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No comments yet. Be the first to comment!</p>
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









