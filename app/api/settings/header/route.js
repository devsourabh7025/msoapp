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
            {
              id: "startups",
              type: "dropdown",
              label: "Startups",
              items: [
                { id: "startup-stories", label: "Startup Stories", href: "/?category=startups" },
                { id: "success-stories", label: "Success Stories", href: "/?category=success-stories" },
                { id: "funding", label: "Funding & Investment", href: "/?category=funding" },
                { id: "incubators", label: "Incubators & Accelerators", href: "/?category=incubators" },
              ],
            },
            {
              id: "resources",
              type: "dropdown",
              label: "Resources",
              items: [
                { id: "guides", label: "Startup Guides", href: "/?category=guides" },
                { id: "tools", label: "Tools & Templates", href: "/?category=tools" },
                { id: "legal", label: "Legal & Compliance", href: "/?category=legal" },
                { id: "marketing", label: "Marketing & Growth", href: "/?category=marketing" },
              ],
            },
            {
              id: "events",
              type: "dropdown",
              label: "Events",
              items: [
                { id: "workshops", label: "Workshops", href: "/?category=workshops" },
                { id: "conferences", label: "Conferences", href: "/?category=conferences" },
                { id: "networking", label: "Networking Events", href: "/?category=networking" },
                { id: "webinars", label: "Webinars", href: "/?category=webinars" },
              ],
            },
            {
              id: "community",
              type: "dropdown",
              label: "Community",
              items: [
                { id: "mentorship", label: "Mentorship", href: "/?category=mentorship" },
                { id: "partnerships", label: "Partnerships", href: "/?category=partnerships" },
                { id: "forums", label: "Forums & Discussions", href: "/?category=forums" },
                { id: "contact", label: "Contact Us", href: "/contact" },
              ],
            },
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
