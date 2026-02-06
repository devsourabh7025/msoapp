import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import jwt from "jsonwebtoken";
import User from "@/models/User";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

// Helper function to optimize post data
function optimizePostData(post) {
  if (!post || typeof post !== 'object') return post;
  
  const optimized = {
    _id: post._id,
    slug: post.slug,
    title: post.title,
    featuredImage: post.featuredImage,
    excerpt: post.excerpt,
    category: post.category,
    publishedAt: post.publishedAt,
  };
  
  if (post.author) {
    if (typeof post.author === 'object' && post.author.name) {
      optimized.author = { name: post.author.name };
    } else if (typeof post.author === 'string') {
      optimized.author = post.author;
    } else {
      optimized.author = { name: 'Editorial Team' };
    }
  }
  
  return optimized;
}

// GET - Fetch spotlight section data
export async function GET() {
  try {
    const dbOperation = async () => {
      await ensureConnected();

      const [spotlightContentData, spotlightSettingsData] = await Promise.all([
        Settings.findOne({ key: "homepageSpotlightContent" }).maxTimeMS(5000),
        Settings.findOne({ key: "homepageSectionSettings" }).maxTimeMS(5000),
      ]);

      return { spotlightContentData, spotlightSettingsData };
    };

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Database operation timeout")), 8000);
    });

    const { spotlightContentData, spotlightSettingsData } = await Promise.race([
      dbOperation(),
      timeoutPromise,
    ]);

    // Get spotlight content
    let spotlightContent = [];
    if (spotlightContentData?.value && Array.isArray(spotlightContentData.value)) {
      spotlightContent = spotlightContentData.value.map(optimizePostData);
    }

    // Get spotlight settings
    let spotlightSettings = {
      title: "Spotlight",
      subtitle: "Featured Stories & Insights",
      showSection: true,
    };

    if (spotlightSettingsData?.value?.spotlight) {
      spotlightSettings = {
        ...spotlightSettings,
        ...spotlightSettingsData.value.spotlight,
      };
    }

    return NextResponse.json({
      spotlight: spotlightContent,
      settings: spotlightSettings,
    });
  } catch (error) {
    console.error("Error fetching spotlight section:", error);
    return NextResponse.json(
      {
        spotlight: [],
        settings: {
          title: "Spotlight",
          subtitle: "Featured Stories & Insights",
          showSection: true,
        },
      },
      { status: 200 }
    );
  }
}

// PUT - Update spotlight section data (admin only)
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

    // Verify user is admin
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Unauthorized. Admin access required." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { spotlight, settings } = body;

    // Validate spotlight structure
    let spotlightToSave = [];
    if (spotlight !== undefined && spotlight !== null) {
      if (Array.isArray(spotlight)) {
        // Optimize posts before saving
        spotlightToSave = spotlight.map(optimizePostData);
      }
    }

    // Save spotlight content
    await Settings.findOneAndUpdate(
      { key: "homepageSpotlightContent" },
      { value: spotlightToSave },
      { upsert: true, new: true }
    );

    // Save spotlight settings if provided
    if (settings) {
      const settingsData = await Settings.findOne({ key: "homepageSectionSettings" });
      const currentSettings = settingsData?.value || {};
      
      await Settings.findOneAndUpdate(
        { key: "homepageSectionSettings" },
        {
          value: {
            ...currentSettings,
            spotlight: settings,
          },
        },
        { upsert: true, new: true }
      );
    }

    return NextResponse.json({
      message: "Spotlight section saved successfully",
      spotlight: spotlightToSave,
      settings: settings || {
        title: "Spotlight",
        subtitle: "Featured Stories & Insights",
        showSection: true,
      },
    });
  } catch (error) {
    console.error("Error saving spotlight section:", error);
    return NextResponse.json(
      { error: "Failed to save spotlight section" },
      { status: 500 }
    );
  }
}
