import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Post from "@/models/Post";
import User from "@/models/User";
import jwt from "jsonwebtoken";

// Next.js: Get env vars at runtime
function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

// Allow ADMIN or MANAGER with the given permission (e.g. "posts")
async function checkAdminOrManager(request, requiredPermission) {
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return { error: "Not authenticated", status: 401 };
  }

  try {
    await ensureConnected();
    const JWT_SECRET = getJWTSecret();
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return { error: "Not authenticated", status: 401 };
    }
    if (user.role === "ADMIN") {
      return { user };
    }
    if (user.role === "MANAGER") {
      // null = any manager allowed (e.g. for dashboard GET); otherwise require permission
      if (!requiredPermission || (user.managerPermissions || []).includes(requiredPermission)) {
        return { user };
      }
    }
    return {
      error: "Unauthorized - Admin or Manager with permission required",
      status: 403,
    };
  } catch (error) {
    return { error: "Not authenticated", status: 401 };
  }
}

async function checkAdmin(request) {
  const result = await checkAdminOrManager(request, null);
  if (result.user && result.user.role === "ADMIN") return result;
  if (result.error) return result;
  return { error: "Unauthorized - Admin access required", status: 403 };
}

// Get posts with pagination (ADMIN or any MANAGER – dashboard loads for all managers)
export async function GET(request) {
  const authCheck = await checkAdminOrManager(request, null);
  if (authCheck.error) {
    return NextResponse.json(
      { error: authCheck.error },
      { status: authCheck.status }
    );
  }

  try {
    await ensureConnected();

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page")) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit")) || 10));
    const status = searchParams.get("status") || "all";
    const category = searchParams.get("category") || "";
    const author = searchParams.get("author") || "";
    const search = (searchParams.get("search") || "").trim();
    const sortOrder = searchParams.get("sort") || "newest";

    const dbOperation = async () => {
      const query = {};
      if (status !== "all") query.status = status;
      if (category) query.category = { $regex: new RegExp(`^${category.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i") };
      if (author) query.author = author;
      if (search) {
        query.$or = [
          { title: { $regex: search, $options: "i" } },
          { excerpt: { $regex: search, $options: "i" } },
        ];
      }

      const sortObj = sortOrder === "oldest" ? { createdAt: 1 } : { createdAt: -1 };
      const skip = (page - 1) * limit;

      // Use estimatedDocumentCount when no filters (much faster for large collections)
      const countPromise =
        Object.keys(query).length === 0
          ? Post.estimatedDocumentCount().maxTimeMS(3000)
          : Post.countDocuments(query).maxTimeMS(5000);

      // Minimal fields for admin list view only (exclude content, excerpt, featuredImage, etc.)
      const [posts, totalCount] = await Promise.all([
        Post.find(query)
          .populate("author", "name companyName accountType")
          .sort(sortObj)
          .skip(skip)
          .limit(limit)
          .select("_id title slug category status publishedAt author createdAt autoShareEnabled")
          .maxTimeMS(10000)
          .lean(),
        countPromise,
      ]);

      return {
        posts: posts || [],
        totalCount,
        page,
        limit,
        totalPages: Math.max(1, Math.ceil(totalCount / limit)),
      };
    };

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Database operation timeout")), 30000);
    });

    const result = await Promise.race([dbOperation(), timeoutPromise]);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts", posts: [], totalCount: 0, page: 1, limit: 10, totalPages: 0 },
      { status: 200 },
    );
  }
}

// Update post
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
    const { postId, title, category, status, autoShareEnabled } = body;

    await ensureConnected(); // Connection should already exist from login

    const updateData = {};
    if (title !== undefined) updateData.title = title;
    if (category !== undefined) updateData.category = category;
    if (status !== undefined) {
      updateData.status = status;
      if (status === "published" && !updateData.publishedAt) {
        updateData.publishedAt = new Date();
      }
    }
    if (autoShareEnabled !== undefined)
      updateData.autoShareEnabled = autoShareEnabled;

    const post = await Post.findByIdAndUpdate(
      postId,
      { $set: updateData },
      { new: true }
    ).populate("author", "name email");

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ post, message: "Post updated successfully" });
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

// Delete post
export async function DELETE(request) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) {
    return NextResponse.json(
      { error: authCheck.error },
      { status: authCheck.status }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("postId");

    if (!postId) {
      return NextResponse.json({ error: "Post ID required" }, { status: 400 });
    }

    await ensureConnected(); // Connection should already exist from login
    await Post.findByIdAndDelete(postId);

    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}
