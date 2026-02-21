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

// GET - Fetch featured section data
export async function GET() {
  try {
    const dbOperation = async () => {
      await ensureConnected();

      const [featuredContentData, featuredSettingsData] = await Promise.all([
        Settings.findOne({ key: "homepageFeaturedContent" }).maxTimeMS(5000),
        Settings.findOne({ key: "homepageSectionSettings" }).maxTimeMS(5000),
      ]);

      return { featuredContentData, featuredSettingsData };
    };

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Database operation timeout")), 8000);
    });

    const { featuredContentData, featuredSettingsData } = await Promise.race([
      dbOperation(),
      timeoutPromise,
    ]);

    // Get featured content
    let featuredContent = {
      smbStories: [],
      herStories: [],
      socialStories: [],
    };

    if (featuredContentData?.value) {
      if (typeof featuredContentData.value === 'object' && !Array.isArray(featuredContentData.value)) {
        // New format: object with subsections
        featuredContent = {
          smbStories: Array.isArray(featuredContentData.value.smbStories)
            ? featuredContentData.value.smbStories.map(optimizePostData)
            : [],
          herStories: Array.isArray(featuredContentData.value.herStories)
            ? featuredContentData.value.herStories.map(optimizePostData)
            : [],
          socialStories: Array.isArray(featuredContentData.value.socialStories)
            ? featuredContentData.value.socialStories.map(optimizePostData)
            : [],
        };
      } else if (Array.isArray(featuredContentData.value)) {
        // Old format: single array - convert to new format
        const posts = featuredContentData.value.map(optimizePostData);
        featuredContent = {
          smbStories: posts.slice(0, 3),
          herStories: posts.slice(3, 8),
          socialStories: posts.slice(8),
        };
      }
    }

    // Get featured settings
    let featuredSettings = {
      title: "The Front Page",
      showSMBStory: true,
      showHerStory: true,
      showSocialStory: true,
      showSection: true,
    };

    if (featuredSettingsData?.value?.featured) {
      featuredSettings = {
        ...featuredSettings,
        ...featuredSettingsData.value.featured,
      };
    }

    return NextResponse.json({
      featured: featuredContent,
      settings: featuredSettings,
    });
  } catch (error) {
    console.error("Error fetching featured section:", error);
    return NextResponse.json(
      {
        featured: {
          smbStories: [],
          herStories: [],
          socialStories: [],
        },
        settings: {
          title: "The Front Page",
          showSMBStory: true,
          showHerStory: true,
          showSocialStory: true,
          showSection: true,
        },
      },
      { status: 200 }
    );
  }
}

// PUT - Update featured section data (admin only)
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
    const { featured, settings } = body;

    // Validate featured structure
    let featuredToSave = {
      smbStories: [],
      herStories: [],
      socialStories: [],
    };

    if (featured !== undefined && featured !== null) {
      if (typeof featured === 'object' && !Array.isArray(featured)) {
        // New format: object with subsections
        featuredToSave = {
          smbStories: Array.isArray(featured.smbStories)
            ? featured.smbStories.map(optimizePostData)
            : [],
          herStories: Array.isArray(featured.herStories)
            ? featured.herStories.map(optimizePostData)
            : [],
          socialStories: Array.isArray(featured.socialStories)
            ? featured.socialStories.map(optimizePostData)
            : [],
        };
      } else if (Array.isArray(featured)) {
        // Old format: single array - convert to new format
        const posts = featured.map(optimizePostData);
        featuredToSave = {
          smbStories: posts.slice(0, 3),
          herStories: posts.slice(3, 8),
          socialStories: posts.slice(8),
        };
      }
    }

    // Save featured content
    await Settings.findOneAndUpdate(
      { key: "homepageFeaturedContent" },
      { value: featuredToSave },
      { upsert: true, new: true }
    );

    // Save featured settings if provided
    if (settings) {
      const settingsData = await Settings.findOne({ key: "homepageSectionSettings" });
      const currentSettings = settingsData?.value || {};
      
      await Settings.findOneAndUpdate(
        { key: "homepageSectionSettings" },
        {
          value: {
            ...currentSettings,
            featured: settings,
          },
        },
        { upsert: true, new: true }
      );
    }

    return NextResponse.json({
      message: "Featured section saved successfully",
      featured: featuredToSave,
      settings: settings || {
        title: "The Front Page",
        showSMBStory: true,
        showHerStory: true,
        showSocialStory: true,
        showSection: true,
      },
    });
  } catch (error) {
    console.error("Error saving featured section:", error);
    return NextResponse.json(
      { error: "Failed to save featured section" },
      { status: 500 }
    );
  }
}
