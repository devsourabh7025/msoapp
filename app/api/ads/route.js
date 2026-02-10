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

// GET - Fetch ads (public for homepage/post, admin for management)
export async function GET(request) {
  try {
    await ensureConnected();

    const { searchParams } = new URL(request.url);
    const location = searchParams.get("location"); // "homepage", "post", or null for all

    const settings = await Settings.findOne({ key: "ads" });
    const ads = settings?.value || [];

    // If location specified, filter ads for that location
    if (location) {
      const filteredAds = ads.filter(
        (ad) =>
          ad.enabled && (ad.location === location || ad.location === "both"),
      );
      return NextResponse.json({ ads: filteredAds });
    }

    return NextResponse.json({ ads });
  } catch (error) {
    console.error("Error fetching ads:", error);
    return NextResponse.json(
      { error: "Failed to fetch ads", ads: [] },
      { status: 500 },
    );
  }
}

// POST - Create new ad (admin only)
export async function POST(request) {
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
    const { name, location, type, imageUrl, code, link, alt, enabled } = body;

    if (!name || !location || !type) {
      return NextResponse.json(
        { error: "Name, location, and type are required" },
        { status: 400 },
      );
    }

    if (type === "image" && !imageUrl) {
      return NextResponse.json(
        { error: "Image URL is required for image ads" },
        { status: 400 },
      );
    }

    if (type === "code" && !code) {
      return NextResponse.json(
        { error: "Code is required for code ads" },
        { status: 400 },
      );
    }

    // Get existing ads
    const settings = await Settings.findOne({ key: "ads" });
    const ads = settings?.value || [];

    // Create new ad
    const newAd = {
      id: Date.now().toString(),
      name,
      location, // "homepage", "post", or "both"
      type, // "image" or "code"
      imageUrl: imageUrl || "",
      code: code || "",
      link: link || "",
      alt: alt || "Advertisement",
      enabled: enabled !== undefined ? enabled : true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    ads.push(newAd);

    // Update settings
    await Settings.findOneAndUpdate(
      { key: "ads" },
      { value: ads },
      { upsert: true, new: true },
    );

    return NextResponse.json({
      message: "Ad created successfully",
      ad: newAd,
    });
  } catch (error) {
    console.error("Error creating ad:", error);
    return NextResponse.json({ error: "Failed to create ad" }, { status: 500 });
  }
}

// PUT - Update ad (admin only)
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
    const { id, name, location, type, imageUrl, code, link, alt, enabled } =
      body;

    if (!id) {
      return NextResponse.json({ error: "Ad ID is required" }, { status: 400 });
    }

    // Get existing ads
    const settings = await Settings.findOne({ key: "ads" });
    const ads = settings?.value || [];

    // Find and update ad
    const adIndex = ads.findIndex((ad) => ad.id === id);
    if (adIndex === -1) {
      return NextResponse.json({ error: "Ad not found" }, { status: 404 });
    }

    // Update ad
    ads[adIndex] = {
      ...ads[adIndex],
      name: name !== undefined ? name : ads[adIndex].name,
      location: location !== undefined ? location : ads[adIndex].location,
      type: type !== undefined ? type : ads[adIndex].type,
      imageUrl: imageUrl !== undefined ? imageUrl : ads[adIndex].imageUrl,
      code: code !== undefined ? code : ads[adIndex].code,
      link: link !== undefined ? link : ads[adIndex].link,
      alt: alt !== undefined ? alt : ads[adIndex].alt,
      enabled: enabled !== undefined ? enabled : ads[adIndex].enabled,
      updatedAt: new Date().toISOString(),
    };

    // Update settings
    await Settings.findOneAndUpdate(
      { key: "ads" },
      { value: ads },
      { upsert: true, new: true },
    );

    return NextResponse.json({
      message: "Ad updated successfully",
      ad: ads[adIndex],
    });
  } catch (error) {
    console.error("Error updating ad:", error);
    return NextResponse.json({ error: "Failed to update ad" }, { status: 500 });
  }
}

// DELETE - Delete ad (admin only)
export async function DELETE(request) {
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

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Ad ID is required" }, { status: 400 });
    }

    // Get existing ads
    const settings = await Settings.findOne({ key: "ads" });
    const ads = settings?.value || [];

    // Filter out the ad
    const filteredAds = ads.filter((ad) => ad.id !== id);

    if (filteredAds.length === ads.length) {
      return NextResponse.json({ error: "Ad not found" }, { status: 404 });
    }

    // Update settings
    await Settings.findOneAndUpdate(
      { key: "ads" },
      { value: filteredAds },
      { upsert: true, new: true },
    );

    return NextResponse.json({
      message: "Ad deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting ad:", error);
    return NextResponse.json({ error: "Failed to delete ad" }, { status: 500 });
  }
}
