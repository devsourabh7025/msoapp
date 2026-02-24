import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import User from "@/models/User";
import Post from "@/models/Post";
import jwt from "jsonwebtoken";

// Next.js: Get env vars at runtime
function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

// Middleware to check if user is ADMIN
async function checkAdmin(request) {
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return { error: "Not authenticated", status: 401 };
  }

  try {
    await ensureConnected(); // Connection should already exist from login
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

// Get single user with all details and posts
export async function GET(request, { params }) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) {
    return NextResponse.json(
      { error: authCheck.error },
      { status: authCheck.status }
    );
  }

  try {
    await ensureConnected(); // Connection should already exist from login
    const { userId } = await params;

    const userDoc = await User.findById(userId).select("-password").lean();
    if (!userDoc) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const perms = userDoc.managerPermissions;
    const managerPermissions = Array.isArray(perms) ? perms : [];
    console.log("[Permissions API] GET user", userId, "– raw managerPermissions:", userDoc.managerPermissions, "→ returning:", managerPermissions);
    const user = {
      ...userDoc,
      _id: userDoc._id?.toString?.() ?? userDoc._id,
      managerPermissions,
    };

    const posts = await Post.find({ author: userId })
      .sort({ createdAt: -1 })
      .select("title slug status category createdAt autoShareEnabled");

    return NextResponse.json(
      { user, posts },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

// Update user social media settings
export async function PUT(request, { params }) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) {
    return NextResponse.json(
      { error: authCheck.error },
      { status: authCheck.status }
    );
  }

  try {
    await ensureConnected(); // Connection should already exist from login
    const { userId } = await params;
    const body = await request.json();
    const { socialMediaSettings, autoShareEnabled } = body;

    const updateData = {};
    if (socialMediaSettings !== undefined)
      updateData.socialMediaSettings = socialMediaSettings;
    if (autoShareEnabled !== undefined)
      updateData.autoShareEnabled = autoShareEnabled;

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true }
    ).select("-password");

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      user,
      message: "User settings updated successfully",
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

