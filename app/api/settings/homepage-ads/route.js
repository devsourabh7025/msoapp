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

// GET - Fetch homepage ad settings (public)
export async function GET() {
  try {
    await ensureConnected();

    const settings = await Settings.findOne({ key: "homepageAdSettings" });

    const defaultSettings = {
      maxAds: 5, // Maximum number of ads to show after each section
      adSpaces: [
        {
          spaceNumber: 1,
          type: "image",
          imageUrl: "",
          code: "",
          link: "",
          alt: "Advertisement",
          enabled: false,
        },
        {
          spaceNumber: 2,
          type: "image",
          imageUrl: "",
          code: "",
          link: "",
          alt: "Advertisement",
          enabled: false,
        },
        {
          spaceNumber: 3,
          type: "image",
          imageUrl: "",
          code: "",
          link: "",
          alt: "Advertisement",
          enabled: false,
        },
        {
          spaceNumber: 4,
          type: "image",
          imageUrl: "",
          code: "",
          link: "",
          alt: "Advertisement",
          enabled: false,
        },
        {
          spaceNumber: 5,
          type: "image",
          imageUrl: "",
          code: "",
          link: "",
          alt: "Advertisement",
          enabled: false,
        },
      ],
    };

    return NextResponse.json({
      settings: settings?.value || defaultSettings,
    });
  } catch (error) {
    console.error("Error fetching homepage ad settings:", error);
    return NextResponse.json(
      { error: "Failed to fetch homepage ad settings", settings: null },
      { status: 500 },
    );
  }
}

// PUT - Update homepage ad settings (admin only)
export async function PUT(request) {
  try {
    // Check authentication
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
        { status: 403 },
      );
    }

    const body = await request.json();
    const { settings } = body;

    if (settings === undefined) {
      return NextResponse.json(
        { error: "Homepage ad settings are required" },
        { status: 400 },
      );
    }

    // Validate settings structure
    if (
      typeof settings.maxAds !== "number" ||
      settings.maxAds < 0 ||
      settings.maxAds > 5
    ) {
      return NextResponse.json(
        { error: "maxAds must be a number between 0 and 5" },
        { status: 400 },
      );
    }

    if (!Array.isArray(settings.adSpaces)) {
      return NextResponse.json(
        { error: "adSpaces must be an array" },
        { status: 400 },
      );
    }

    // Validate each ad space
    for (const space of settings.adSpaces) {
      if (!space.spaceNumber || typeof space.spaceNumber !== "number") {
        return NextResponse.json(
          { error: "Each ad space must have a valid spaceNumber" },
          { status: 400 },
        );
      }
      if (space.type && space.type !== "image" && space.type !== "code") {
        return NextResponse.json(
          { error: "Ad space type must be 'image' or 'code'" },
          { status: 400 },
        );
      }
    }

    // Ensure exactly 5 ad spaces
    if (settings.adSpaces.length !== 5) {
      return NextResponse.json(
        { error: "Must have exactly 5 ad spaces" },
        { status: 400 },
      );
    }

    // Update or create settings
    await Settings.findOneAndUpdate(
      { key: "homepageAdSettings" },
      { value: settings },
      { upsert: true, new: true },
    );

    return NextResponse.json({
      message: "Homepage ad settings saved successfully",
    });
  } catch (error) {
    console.error("Error saving homepage ad settings:", error);
    return NextResponse.json(
      { error: "Failed to save homepage ad settings" },
      { status: 500 },
    );
  }
}
