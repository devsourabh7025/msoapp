import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Post from "@/models/Post";
import User from "@/models/User";
import jwt from "jsonwebtoken";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

async function getOptionalUser(request) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) return null;
    const decoded = jwt.verify(token, getJWTSecret());
    await ensureConnected();
    const user = await User.findById(decoded.userId).select("_id");
    return user;
  } catch {
    return null;
  }
}

// Public endpoint to fetch a single published post by slug
export async function GET(request, { params }) {
  try {
    await ensureConnected();
    
    const { slug } = await params;
    const slugTrimmed = typeof slug === "string" ? slug.trim() : slug;

    if (!slugTrimmed) {
      return NextResponse.json(
        { error: "Slug is required" },
        { status: 400 }
      );
    }

    // Increment views in DB (use native collection to ensure write)
    const collection = Post.collection;
    await collection.updateOne(
      { slug: slugTrimmed, status: "published" },
      { $inc: { views: 1 } }
    );

    // Second: fetch the post (with updated views)
    const post = await Post.findOne(
      { slug: slugTrimmed, status: "published" }
    )
      .populate("author", "name email")
      .select("-__v")
      .lean();

    const currentUser = await getOptionalUser(request);

    if (!post) {
      // Check if post exists with different status for better error message
      const postExists = await Post.findOne({ slug: slugTrimmed }).select("status title");
      if (postExists) {
        console.log(`Post found but status is "${postExists.status}", not "published"`);
        return NextResponse.json(
          { 
            error: "Post not found",
            message: `Post exists but is not published. Current status: ${postExists.status}`
          },
          { status: 404 }
        );
      }
      
      return NextResponse.json(
        { 
          error: "Post not found",
          message: `No post found with slug: ${slugTrimmed}`
        },
        { status: 404 }
      );
    }

    // Get related posts (same category, excluding current post)
    const relatedPosts = await Post.find({
      category: post.category,
      status: "published",
      _id: { $ne: post._id }
    })
      .populate("author", "name email")
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(3)
      .select("title slug excerpt category featuredImage publishedAt author createdAt");

    const postData = { ...post };
    if (postData.views === undefined || postData.views === null) {
      postData.views = 0;
    }
    const likedBy = postData.likedBy || [];
    postData.likesCount = likedBy.length;
    const currentUserId = currentUser?._id?.toString?.();
    postData.userLiked = !!(
      currentUserId &&
      likedBy.some((id) => (id && id.toString?.()) === currentUserId)
    );
    delete postData.likedBy;

    return NextResponse.json(
      { post: postData, relatedPosts: relatedPosts || [] },
      {
        headers: {
          "Cache-Control": "private, no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
