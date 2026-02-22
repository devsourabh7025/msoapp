import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Post from "@/models/Post";
import User from "@/models/User";
import jwt from "jsonwebtoken";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

async function checkAuth(request) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return { error: "Not authenticated", status: 401 };
    }

    const decoded = jwt.verify(token, getJWTSecret());
    await ensureConnected();
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return { error: "User not found", status: 401 };
    }

    return { user };
  } catch (error) {
    return { error: "Not authenticated", status: 401 };
  }
}

// GET - Return like status for current user (so client can fix state after refresh)
export async function GET(request, { params }) {
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
    if (!slug) {
      return NextResponse.json(
        { error: "Post slug is required" },
        { status: 400 }
      );
    }

    const post = await Post.findOne(
      { slug: slug.trim(), status: "published" }
    ).select("likedBy").lean();

    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    const likedBy = post.likedBy || [];
    const userIdStr = authCheck.user._id.toString();
    const userLiked = likedBy.some((id) => (id && id.toString?.()) === userIdStr);

    return NextResponse.json({
      userLiked,
      likesCount: likedBy.length,
    });
  } catch (error) {
    console.error("Error fetching like status:", error);
    return NextResponse.json(
      { error: "Failed to fetch like status" },
      { status: 500 }
    );
  }
}

// POST - Toggle like on a post (atomic update so it always persists)
export async function POST(request, { params }) {
  const authCheck = await checkAuth(request);
  if (authCheck.error) {
    return NextResponse.json(
      { error: authCheck.error },
      { status: authCheck.status }
    );
  }

  const { user } = authCheck;

  try {
    await ensureConnected();
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        { error: "Post slug is required" },
        { status: 400 }
      );
    }

    const slugTrimmed = typeof slug === "string" ? slug.trim() : slug;
    const userId = user._id;

    const post = await Post.findOne({ slug: slugTrimmed, status: "published" }).select("likedBy").lean();
    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    const likedBy = post.likedBy || [];
    const userIdStr = userId.toString();
    const hasLiked = likedBy.some((id) => (id && id.toString?.()) === userIdStr);

    const update = hasLiked
      ? { $pull: { likedBy: userId } }
      : { $addToSet: { likedBy: userId } };

    const updated = await Post.findOneAndUpdate(
      { slug: slugTrimmed, status: "published" },
      update,
      { new: true, runValidators: true }
    ).select("likedBy");

    const newCount = (updated?.likedBy?.length) ?? (hasLiked ? likedBy.length - 1 : likedBy.length + 1);

    return NextResponse.json({
      liked: !hasLiked,
      likesCount: newCount,
    });
  } catch (error) {
    console.error("Error toggling like:", error);
    return NextResponse.json(
      { error: "Failed to update like" },
      { status: 500 }
    );
  }
}
