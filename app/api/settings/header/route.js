import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import jwt from "jsonwebtoken";
import User from "@/models/User";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

// GET - Fetch header settings (public)
export async function GET() {
  try {
    await ensureConnected();
    
    const headerSettings = await Settings.findOne({ key: "header" });
    
    if (!headerSettings) {
      // Return default header settings
      return NextResponse.json({
        header: {
          organizationName: "Maharashtra Startup Organisation",
          socialLinks: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            youtube: "https://youtube.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
          },
          menuItems: [
            { id: "home", type: "link", label: "Home", href: "/" },
            { id: "the-big-edit", type: "link", label: "The Big Edit", href: "/" },
            { id: "equity-intel", type: "link", label: "Equity Intel", href: "/explore/equity-intel" },
            { id: "dialogues", type: "link", label: "Dialogues", href: "/explore/dialogues" },
            { id: "special-reports", type: "link", label: "Special Reports", href: "/explore/special-reports" },
            { id: "center-stage", type: "link", label: "Center Stage", href: "/#center-stage" },
            { id: "the-builders", type: "link", label: "The Builders", href: "/explore/the-builders" },
            { id: "c-suite-intel", type: "link", label: "C-Suite Intel", href: "/explore/c-suite-intel" },
            { id: "intelligence", type: "link", label: "Intelligence", href: "/explore/intelligence" },
            { id: "the-front-page", type: "link", label: "The Front Page", href: "/#the-front-page" },
            { id: "sit-down", type: "link", label: "Sit Down", href: "/explore/sit-down" },
            { id: "discover", type: "link", label: "Discover", href: "/#discover" },
            { id: "more-insights", type: "link", label: "More Insights", href: "/#more-insights" },
            { id: "about", type: "link", label: "About", href: "/about" },
          ],
        },
      });
    }

    return NextResponse.json({
      header: headerSettings.value,
    });
  } catch (error) {
    console.error("Error fetching header settings:", error);
    return NextResponse.json(
      { error: "Failed to fetch header settings" },
      { status: 500 }
    );
  }
}

// PUT - Update header settings (admin only)
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
    const { header } = body;

    if (!header) {
      return NextResponse.json(
        { error: "Header data is required" },
        { status: 400 }
      );
    }

    await ensureConnected();
    
    // Update or create header settings
    const headerSettings = await Settings.findOneAndUpdate(
      { key: "header" },
      { value: header },
      { upsert: true, new: true }
    );

    return NextResponse.json({
      message: "Header settings saved successfully",
      header: headerSettings.value,
    });
  } catch (error) {
    console.error("Error saving header settings:", error);
    return NextResponse.json(
      { error: "Failed to save header settings" },
      { status: 500 }
    );
  }
}
