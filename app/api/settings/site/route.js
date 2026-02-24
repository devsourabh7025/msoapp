import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import jwt from "jsonwebtoken";
import User from "@/models/User";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

const DEFAULT_SITE = {
  bodyFont: "Inter",
  headingFont: "Inter",
};

// GET - Fetch site settings (public, for fonts etc.)
export async function GET() {
  try {
    await ensureConnected();
    const doc = await Settings.findOne({ key: "site" }).maxTimeMS(5000);
    const value = doc?.value && typeof doc.value === "object" ? doc.value : {};
    return NextResponse.json({
      site: {
        bodyFont: value.bodyFont || DEFAULT_SITE.bodyFont,
        headingFont: value.headingFont || DEFAULT_SITE.headingFont,
      },
    });
  } catch (error) {
    console.error("Error fetching site settings:", error);
    return NextResponse.json({ site: DEFAULT_SITE }, { status: 200 });
  }
}

// PUT - Update site settings (admin or manager with customiseSite)
export async function PUT(request) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    const decoded = jwt.verify(token, getJWTSecret());
    await ensureConnected();
    const user = await User.findById(decoded.userId).select("-password managerPermissions").lean();
    if (!user) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    if (user.role === "ADMIN") {
      // Admin can always save
    } else if (user.role === "MANAGER") {
      const perms = Array.isArray(user.managerPermissions) ? user.managerPermissions : [];
      if (!perms.includes("customiseSite")) {
        return NextResponse.json({ error: "Manager needs customise permission" }, { status: 403 });
      }
    } else {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();
    const { bodyFont, headingFont } = body;

    const current = await Settings.findOne({ key: "site" }).maxTimeMS(5000);
    const currentValue = current?.value && typeof current.value === "object" ? current.value : {};
    const updated = {
      ...currentValue,
      bodyFont: typeof bodyFont === "string" && bodyFont.trim() ? bodyFont.trim() : (currentValue.bodyFont || "Inter"),
      headingFont: typeof headingFont === "string" && headingFont.trim() ? headingFont.trim() : (currentValue.headingFont || "Inter"),
    };

    await Settings.findOneAndUpdate(
      { key: "site" },
      { value: updated },
      { upsert: true, new: true }
    ).maxTimeMS(10000);

    return NextResponse.json({
      message: "Site settings saved successfully",
      site: { bodyFont: updated.bodyFont, headingFont: updated.headingFont },
    });
  } catch (error) {
    console.error("Error saving site settings:", error);
    return NextResponse.json({ error: "Failed to save site settings" }, { status: 500 });
  }
}
