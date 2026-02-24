import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import User from "@/models/User";
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

// Get all users
export async function GET(request) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) {
    return NextResponse.json(
      { error: authCheck.error },
      { status: authCheck.status }
    );
  }

  try {
    await ensureConnected(); // Connection should already exist from login
    const docs = await User.find({})
      .select("-password")
      .sort({ createdAt: -1 })
      .lean();

    const users = docs.map((u) => ({
      ...u,
      managerPermissions: Array.isArray(u.managerPermissions) ? u.managerPermissions : [],
    }));

    return NextResponse.json(
      { users },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

// Update user
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
    const { userId, name, email, role, autoShareEnabled, managerPermissions, socialMediaSettings } =
      body;

    await ensureConnected(); // Connection should already exist from login

    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (email !== undefined) updateData.email = email;
    // Allow role changes: NORMAL_USER, MANAGER. ADMIN only via create-superadmin route.
    if (role !== undefined) {
      if (role === "NORMAL_USER") {
        updateData.role = "NORMAL_USER";
      } else if (role === "MANAGER") {
        updateData.role = "MANAGER";
      } else if (role === "ADMIN") {
        return NextResponse.json(
          { error: "Cannot set ADMIN role via this route. Use /api/superadmin/create-superadmin instead." },
          { status: 403 }
        );
      } else {
        updateData.role = "NORMAL_USER";
      }
    }
    if (autoShareEnabled !== undefined)
      updateData.autoShareEnabled = autoShareEnabled;
    if (managerPermissions !== undefined) {
      updateData.managerPermissions = Array.isArray(managerPermissions)
        ? managerPermissions
        : [];
      console.log("[Permissions API] PUT updating userId", userId, "managerPermissions:", updateData.managerPermissions);
    }
    if (socialMediaSettings !== undefined)
      updateData.socialMediaSettings = socialMediaSettings;

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      {
        new: true,
        // Allow saving fields even if a stale dev model cache misses a schema path.
        strict: false,
      }
    ).select("-password");

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const updatedPerms = user.managerPermissions;
    if (managerPermissions !== undefined) {
      console.log("[Permissions API] PUT done – user.managerPermissions after save:", Array.isArray(updatedPerms) ? updatedPerms : updatedPerms);
    }
    return NextResponse.json({ user, message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

// Delete user
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
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "User ID required" }, { status: 400 });
    }

    await ensureConnected(); // Connection should already exist from login

    // Prevent deleting yourself
    const token = request.cookies.get("token")?.value;
    const JWT_SECRET = getJWTSecret();
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.userId === userId) {
      return NextResponse.json(
        { error: "Cannot delete your own account" },
        { status: 400 }
      );
    }

    await User.findByIdAndDelete(userId);

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
