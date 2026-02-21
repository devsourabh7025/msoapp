import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import jwt from "jsonwebtoken";
import User from "@/models/User";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

const DEFAULT_SITE = {
  language: "en",
};

// GET - Fetch site settings (public, for language etc.)
export async function GET() {
  try {
    await ensureConnected();
    const doc = await Settings.findOne({ key: "site" }).maxTimeMS(5000);
    const value = doc?.value && typeof doc.value === "object" ? doc.value : {};
    return NextResponse.json({
      site: {
        language: value.language || DEFAULT_SITE.language,
      },
    });
  } catch (error) {
    console.error("Error fetching site settings:", error);
    return NextResponse.json({ site: DEFAULT_SITE }, { status: 200 });
  }
}

// PUT - Update site settings (admin only)
export async function PUT(request) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    const decoded = jwt.verify(token, getJWTSecret());
    await ensureConnected();
    const user = await User.findById(decoded.userId).select("-password");
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();
    const { language } = body;

    const current = await Settings.findOne({ key: "site" }).maxTimeMS(5000);
    const currentValue = current?.value && typeof current.value === "object" ? current.value : {};
    const updated = {
      ...currentValue,
      language: typeof language === "string" && language.trim() ? language.trim() : currentValue.language || "en",
    };

    await Settings.findOneAndUpdate(
      { key: "site" },
      { value: updated },
      { upsert: true, new: true }
    ).maxTimeMS(10000);

    return NextResponse.json({
      message: "Site settings saved successfully",
      site: { language: updated.language },
    });
  } catch (error) {
    console.error("Error saving site settings:", error);
    return NextResponse.json({ error: "Failed to save site settings" }, { status: 500 });
  }
}
