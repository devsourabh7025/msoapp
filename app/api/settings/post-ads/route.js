import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import jwt from "jsonwebtoken";
import User from "@/models/User";

function getJWTSecret() {
  return (
    process.env.JWT_SECRET ||
    "your-super-secret-jwt-key-change-this-in-production"
  );
}

const defaultAd = {
  type: "image",
  imageUrl: "",
  code: "",
  link: "",
  alt: "Advertisement",
  enabled: false,
};

// GET - Fetch post ad settings (public)
export async function GET() {
  try {
    await ensureConnected();

    const settings = await Settings.findOne({ key: "postAdSettings" });

    const defaultSettings = {
      topAd: { ...defaultAd },
      sidebarAd: { ...defaultAd },
    };

    return NextResponse.json({
      settings: settings?.value || defaultSettings,
    });
  } catch (error) {
    console.error("Error fetching post ad settings:", error);
    return NextResponse.json(
      {
        settings: {
          topAd: { ...defaultAd },
          sidebarAd: { ...defaultAd },
        },
      },
      { status: 200 }
    );
  }
}

// PUT - Update post ad settings (admin only)
export async function PUT(request) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
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
    const { settings } = body;

    if (settings === undefined) {
      return NextResponse.json(
        { error: "Post ad settings are required" },
        { status: 400 }
      );
    }

    const topAd = {
      type: settings.topAd?.type || "image",
      imageUrl: settings.topAd?.imageUrl || "",
      code: settings.topAd?.code || "",
      link: settings.topAd?.link || "",
      alt: settings.topAd?.alt || "Advertisement",
      enabled: !!settings.topAd?.enabled,
    };

    const sidebarAd = {
      type: settings.sidebarAd?.type || "image",
      imageUrl: settings.sidebarAd?.imageUrl || "",
      code: settings.sidebarAd?.code || "",
      link: settings.sidebarAd?.link || "",
      alt: settings.sidebarAd?.alt || "Advertisement",
      enabled: !!settings.sidebarAd?.enabled,
    };

    await Settings.findOneAndUpdate(
      { key: "postAdSettings" },
      { value: { topAd, sidebarAd } },
      { upsert: true, new: true }
    );

    return NextResponse.json({
      message: "Post ad settings saved successfully",
    });
  } catch (error) {
    console.error("Error saving post ad settings:", error);
    return NextResponse.json(
      { error: "Failed to save post ad settings" },
      { status: 500 }
    );
  }
}
