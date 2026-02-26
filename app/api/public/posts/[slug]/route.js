import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Post from "@/models/Post";
import User from "@/models/User";
import DailyView from "@/models/DailyView";
import MonthlyView from "@/models/MonthlyView";
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
    const user = await User.findById(decoded.userId).select("_id role");
    return user;
  } catch {
    return null;
  }
}

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

    const { searchParams } = new URL(request.url);
    const isPreview = searchParams.get("preview") === "true";
    const currentUser = await getOptionalUser(request);

    let post;

    if (isPreview && currentUser) {
      post = await Post.findOne({ slug: slugTrimmed })
        .populate("author", "name email")
        .select("-__v")
        .lean();

      if (post) {
        const isAuthor = post.author?._id?.toString() === currentUser._id.toString();
        const isAdmin = currentUser.role === "ADMIN" || currentUser.role === "MANAGER";
        if (!isAuthor && !isAdmin) {
          post = null;
        }
      }
    } else {
      await Post.collection.updateOne(
        { slug: slugTrimmed, status: "published" },
        { $inc: { views: 1 } }
      );

      post = await Post.findOne(
        { slug: slugTrimmed, status: "published" }
      )
        .populate("author", "name email")
        .select("-__v")
        .lean();

      if (post?._id) {
        const startOfToday = new Date();
        startOfToday.setUTCHours(0, 0, 0, 0);
        startOfToday.setUTCMilliseconds(0);
        const year = startOfToday.getUTCFullYear();
        const month = startOfToday.getUTCMonth() + 1; // 1-12
        await Promise.all([
          DailyView.findOneAndUpdate(
            { postId: post._id, date: startOfToday },
            { $inc: { count: 1 } },
            { upsert: true, new: true }
          ),
          MonthlyView.findOneAndUpdate(
            { postId: post._id, year, month },
            { $inc: { count: 1 } },
            { upsert: true, new: true }
          ),
        ]);
      }
    }

    if (!post) {
      const postExists = await Post.findOne({ slug: slugTrimmed }).select("status title");
      if (postExists) {
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

    if (isPreview) {
      postData.isPreview = true;
    }

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
