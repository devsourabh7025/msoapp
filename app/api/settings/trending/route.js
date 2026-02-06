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

// GET - Fetch trending section data
export async function GET() {
  try {
    const dbOperation = async () => {
      await ensureConnected();

      const [trendingContentData, trendingSettingsData] = await Promise.all([
        Settings.findOne({ key: "homepageTrendingContent" }).maxTimeMS(5000),
        Settings.findOne({ key: "homepageSectionSettings" }).maxTimeMS(5000),
      ]);

      return { trendingContentData, trendingSettingsData };
    };

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Database operation timeout")), 8000);
    });

    const { trendingContentData, trendingSettingsData } = await Promise.race([
      dbOperation(),
      timeoutPromise,
    ]);

    // Get trending content
    let trendingContent = [];
    if (trendingContentData?.value && Array.isArray(trendingContentData.value)) {
      trendingContent = trendingContentData.value.map(optimizePostData);
    }

    // Get trending settings
    let trendingSettings = {
      title: "Trending Now",
      subtitle: "Latest stories making waves in Maharashtra's startup ecosystem",
      showSection: true,
    };

    if (trendingSettingsData?.value?.trending) {
      trendingSettings = {
        ...trendingSettings,
        ...trendingSettingsData.value.trending,
      };
    }

    return NextResponse.json({
      trending: trendingContent,
      settings: trendingSettings,
    });
  } catch (error) {
    console.error("Error fetching trending section:", error);
    return NextResponse.json(
      {
        trending: [],
        settings: {
          title: "Trending Now",
          subtitle: "Latest stories making waves in Maharashtra's startup ecosystem",
          showSection: true,
        },
      },
      { status: 200 }
    );
  }
}

// PUT - Update trending section data (admin only)
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
    const { trending, settings } = body;

    // Validate trending structure
    let trendingToSave = [];
    if (trending !== undefined && trending !== null) {
      if (Array.isArray(trending)) {
        // Optimize posts before saving
        trendingToSave = trending.map(optimizePostData);
      }
    }

    // Save trending content
    await Settings.findOneAndUpdate(
      { key: "homepageTrendingContent" },
      { value: trendingToSave },
      { upsert: true, new: true }
    );

    // Save trending settings if provided
    if (settings) {
      const settingsData = await Settings.findOne({ key: "homepageSectionSettings" });
      const currentSettings = settingsData?.value || {};
      
      await Settings.findOneAndUpdate(
        { key: "homepageSectionSettings" },
        {
          value: {
            ...currentSettings,
            trending: settings,
          },
        },
        { upsert: true, new: true }
      );
    }

    return NextResponse.json({
      message: "Trending section saved successfully",
      trending: trendingToSave,
      settings: settings || {
        title: "Trending Now",
        subtitle: "Latest stories making waves in Maharashtra's startup ecosystem",
        showSection: true,
      },
    });
  } catch (error) {
    console.error("Error saving trending section:", error);
    return NextResponse.json(
      { error: "Failed to save trending section" },
      { status: 500 }
    );
  }
}
