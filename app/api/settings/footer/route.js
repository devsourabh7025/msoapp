import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import jwt from "jsonwebtoken";
import User from "@/models/User";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

// GET - Fetch footer settings (public)
export async function GET() {
  try {
    // Add timeout wrapper for database operations
    const dbOperation = async () => {
      await ensureConnected();
      const footerSettings = await Settings.findOne({ key: "footer" }).maxTimeMS(5000);
      return footerSettings;
    };

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Database operation timeout")), 10000);
    });

    const footerSettings = await Promise.race([dbOperation(), timeoutPromise]);
    
    if (!footerSettings || !footerSettings.value) {
      // Return default footer settings
      return NextResponse.json({
        footer: {
          description: "Maharashtra Startup Organisation - Empowering entrepreneurs and startups across Maharashtra with resources, funding opportunities, mentorship, and a thriving ecosystem for innovation and growth.",
          email: "contact@maharashtrastartup.org",
          phone: "+91 123 456 7890",
          address: "Mumbai, Maharashtra, India",
          socialLinks: {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            youtube: "https://youtube.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
          },
          resources: [],
          company: [],
          legal: [],
          bottomLinks: [],
          copyright: "© {year} Maharashtra Startup Organisation. All rights reserved.",
          tagline: "Empowering Maharashtra's startup ecosystem since 2024",
        },
      }, {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      });
    }

    return NextResponse.json({
      footer: footerSettings.value,
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error("Error fetching footer settings:", error);
    
    // Return default footer on error instead of failing
    return NextResponse.json({
      footer: {
        description: "Maharashtra Startup Organisation - Empowering entrepreneurs and startups across Maharashtra with resources, funding opportunities, mentorship, and a thriving ecosystem for innovation and growth.",
        email: "contact@maharashtrastartup.org",
        phone: "+91 123 456 7890",
        address: "Mumbai, Maharashtra, India",
        socialLinks: {
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          youtube: "https://youtube.com",
          instagram: "https://instagram.com",
          linkedin: "https://linkedin.com",
        },
        resources: [],
        company: [],
        legal: [],
        bottomLinks: [],
        copyright: "© {year} Maharashtra Startup Organisation. All rights reserved.",
        tagline: "Empowering Maharashtra's startup ecosystem since 2024",
      },
      error: error.message || "Failed to fetch footer settings",
    }, { status: 200 }); // Return 200 with default data so UI doesn't break
  }
}

// PUT - Update footer settings (admin only)
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
    const { footer } = body;

    if (!footer) {
      return NextResponse.json(
        { error: "Footer data is required" },
        { status: 400 }
      );
    }

    await ensureConnected();
    
    // Update or create footer settings
    const footerSettings = await Settings.findOneAndUpdate(
      { key: "footer" },
      { value: footer },
      { upsert: true, new: true }
    );

    console.log("✅ Footer settings saved successfully:", {
      key: footerSettings.key,
      hasValue: !!footerSettings.value,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "Footer settings saved successfully",
      footer: footerSettings.value,
    });
  } catch (error) {
    console.error("Error saving footer settings:", error);
    return NextResponse.json(
      { error: "Failed to save footer settings" },
      { status: 500 }
    );
  }
}
