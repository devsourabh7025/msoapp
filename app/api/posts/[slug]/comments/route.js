import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Comment from "@/models/Comment";
import Post from "@/models/Post";
import jwt from "jsonwebtoken";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

// Middleware to check if user is authenticated
async function checkAuth(request) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return { error: "Not authenticated", status: 401 };
    }

    const decoded = jwt.verify(token, getJWTSecret());
    await ensureConnected();
    
    const User = (await import("@/models/User")).default;
    const user = await User.findById(decoded.userId).select("-password");
    
    if (!user) {
      return { error: "User not found", status: 401 };
    }

    return { user };
  } catch (error) {
    return { error: "Not authenticated", status: 401 };
  }
}

// GET - Fetch comments for a post
export async function GET(request, { params }) {
  try {
    await ensureConnected();
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        { error: "Post slug is required" },
        { status: 400 }
      );
    }

    // Find the post by slug
    const post = await Post.findOne({ slug, status: "published" });
    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    // Get all approved comments for this post
    const comments = await Comment.find({
      post: post._id,
      status: "approved",
      parentComment: null, // Only top-level comments
    })
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    // Get reply counts for each comment
    const commentsWithReplies = await Promise.all(
      comments.map(async (comment) => {
        const replyCount = await Comment.countDocuments({
          parentComment: comment._id,
          status: "approved",
        });
        return {
          ...comment.toObject(),
          replyCount,
        };
      })
    );

    return NextResponse.json({
      comments: commentsWithReplies,
      total: commentsWithReplies.length,
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Failed to fetch comments", comments: [] },
      { status: 500 }
    );
  }
}

// POST - Create a new comment (requires authentication)
export async function POST(request, { params }) {
  const authCheck = await checkAuth(request);
  if (authCheck.error) {
    return NextResponse.json(
      { error: authCheck.error },
      { status: authCheck.status }
    );
  }

  try {
    await ensureConnected();
    const { slug } = await params;
    const body = await request.json();
    const { content, parentCommentId } = body;

    if (!content || content.trim() === "") {
      return NextResponse.json(
        { error: "Comment content is required" },
        { status: 400 }
      );
    }

    // Find the post by slug
    const post = await Post.findOne({ slug, status: "published" });
    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    // Create the comment
    const commentData = {
      post: post._id,
      author: authCheck.user._id,
      content: content.trim(),
      status: "approved", // Auto-approve comments (can be changed to "pending" for moderation)
    };

    // If this is a reply to another comment
    if (parentCommentId) {
      const parentComment = await Comment.findById(parentCommentId);
      if (!parentComment || parentComment.post.toString() !== post._id.toString()) {
        return NextResponse.json(
          { error: "Invalid parent comment" },
          { status: 400 }
        );
      }
      commentData.parentComment = parentCommentId;
    }

    const comment = await Comment.create(commentData);
    await comment.populate("author", "name email");

    return NextResponse.json(
      { comment, message: "Comment added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}
