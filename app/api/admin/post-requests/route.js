import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Post from "@/models/Post";
import User from "@/models/User";
import jwt from "jsonwebtoken";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

async function checkAdmin(request) {
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return { error: "Not authenticated", status: 401 };
  }

  try {
    await ensureConnected();
    const JWT_SECRET = getJWTSecret();
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user || user.role !== "ADMIN") {
      return {
        error: "Unauthorized - Admin access required",
        status: 403,
      };
    }

    return { user };
  } catch (error) {
    return { error: "Not authenticated", status: 401 };
  }
}

// Get all pending posts
export async function GET(request) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) {
    return NextResponse.json(
      { error: authCheck.error },
      { status: authCheck.status }
    );
  }

  try {
    await ensureConnected();

    // Get all posts with pending status, excluding admin posts
    const posts = await Post.find({ status: "pending" })
      .populate("author", "name email role")
      .sort({ createdAt: -1 })
      .select("title slug excerpt category featuredImage status author createdAt contentBlocks");

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching pending posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch pending posts", posts: [] },
      { status: 500 }
    );
  }
}

// Approve or reject a post
export async function PUT(request) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) {
    return NextResponse.json(
      { error: authCheck.error },
      { status: authCheck.status }
    );
  }

  try {
    const body = await request.json();
    const { postId, action } = body;

    if (!postId || !action) {
      return NextResponse.json(
        { error: "Post ID and action are required" },
        { status: 400 }
      );
    }

    if (!["approve", "reject"].includes(action)) {
      return NextResponse.json(
        { error: "Invalid action. Use 'approve' or 'reject'" },
        { status: 400 }
      );
    }

    await ensureConnected();

    if (action === "approve") {
      // Approve: Change status to published
      const post = await Post.findByIdAndUpdate(
        postId,
        {
          $set: {
            status: "published",
            publishedAt: new Date(),
          },
        },
        { new: true }
      ).populate("author", "name email");

      if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }

      return NextResponse.json({
        post,
        message: "Post approved and published successfully",
      });
    } else {
      // Reject: Change status to draft (or delete - but we'll keep it as draft)
      const post = await Post.findByIdAndUpdate(
        postId,
        {
          $set: {
            status: "draft",
          },
        },
        { new: true }
      ).populate("author", "name email");

      if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }

      return NextResponse.json({
        post,
        message: "Post rejected successfully",
      });
    }
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}
