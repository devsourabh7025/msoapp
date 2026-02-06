import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import jwt from "jsonwebtoken";
import User from "@/models/User";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

// GET - Fetch sidebar settings (public)
export async function GET() {
  try {
    await ensureConnected();
    
    const settings = await Settings.findOne({ key: "sidebarSettings" });
    
    return NextResponse.json({
      sidebar: settings?.value || null,
    });
  } catch (error) {
    console.error("Error fetching sidebar settings:", error);
    return NextResponse.json(
      { error: "Failed to fetch sidebar settings", sidebar: null },
      { status: 500 }
    );
  }
}

// PUT - Update sidebar settings (admin only)
export async function PUT(request) {
  try {
    // Check authentication
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    await ensureConnected();
    const JWT_SECRET = getJWTSecret();
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");
    
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Unauthorized. Admin access required." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { sidebar } = body;

    if (sidebar === undefined) {
      return NextResponse.json(
        { error: "Sidebar settings are required" },
        { status: 400 }
      );
    }

    // Update or create settings
    await Settings.findOneAndUpdate(
      { key: "sidebarSettings" },
      { value: sidebar },
      { upsert: true, new: true }
    );

    return NextResponse.json({
      message: "Sidebar settings saved successfully",
    });
  } catch (error) {
    console.error("Error saving sidebar settings:", error);
    return NextResponse.json(
      { error: "Failed to save sidebar settings" },
      { status: 500 }
    );
  }
}
