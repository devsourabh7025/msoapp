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

// GET - Fetch hero section data
export async function GET() {
  try {
    const dbOperation = async () => {
      await ensureConnected();

      const [heroContentData, heroSettingsData] = await Promise.all([
        Settings.findOne({ key: "homepageHeroContent" }).maxTimeMS(5000),
        Settings.findOne({ key: "homepageSectionSettings" }).maxTimeMS(5000),
      ]);

      return { heroContentData, heroSettingsData };
    };

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Database operation timeout")), 8000);
    });

    const { heroContentData, heroSettingsData } = await Promise.race([
      dbOperation(),
      timeoutPromise,
    ]);

    // Get hero content
    let heroContent = null;
    if (heroContentData?.value) {
      heroContent = {
        mainArticle: heroContentData.value.mainArticle ? optimizePostData(heroContentData.value.mainArticle) : null,
        topPicks: Array.isArray(heroContentData.value.topPicks)
          ? heroContentData.value.topPicks.map(optimizePostData)
          : [],
        discussionTable: Array.isArray(heroContentData.value.discussionTable)
          ? heroContentData.value.discussionTable.map(optimizePostData)
          : [],
      };
    } else {
      heroContent = {
        mainArticle: null,
        topPicks: [],
        discussionTable: [],
      };
    }

    // Get hero settings
    const heroSettings = heroSettingsData?.value?.hero || {
      title: "Top Picks",
      showNewsletter: true,
      newsletterTitle: "Newsletter",
      newsletterPlaceholder: "Enter your Email",
      showSection: true,
    };

    return NextResponse.json({
      hero: heroContent,
      settings: heroSettings,
    });
  } catch (error) {
    console.error("Error fetching hero section:", error);
    return NextResponse.json(
      {
        hero: {
          mainArticle: null,
          topPicks: [],
          discussionTable: [],
        },
        settings: {
          title: "Top Picks",
          showNewsletter: true,
          newsletterTitle: "Newsletter",
          newsletterPlaceholder: "Enter your Email",
          showSection: true,
        },
      },
      { status: 200 }
    );
  }
}

// PUT - Update hero section data (admin only)
export async function PUT(request) {
  try {
    const body = await request.json();
    const { hero, settings } = body;

    // Verify authentication - check cookies first (like homepage API)
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json(
        { error: "Not authenticated", message: "Please log in to save settings" },
        { status: 401 }
      );
    }

    let decoded;
    try {
      decoded = jwt.verify(token, getJWTSecret());
    } catch (error) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Verify user is admin
    await ensureConnected();
    const user = await User.findById(decoded.userId);
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const saveOperation = async () => {
      const saveWithRetry = async (key, value, type, maxRetries = 2) => {
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
          try {
            console.log(`💾 Saving ${type} to database... (Attempt ${attempt}/${maxRetries})`);
            const result = await Settings.findOneAndUpdate(
              { key },
              { value },
              { upsert: true, new: true }
            ).maxTimeMS(15000);
            
            console.log(`✅ ${type} saved to database`);
            return result;
          } catch (error) {
            console.error(`❌ Failed to save ${type} to database (Attempt ${attempt}):`, error.message);
            if (attempt === maxRetries) {
              throw error;
            }
            await new Promise(resolve => setTimeout(resolve, 2000));
          }
        }
      };

      // Save hero content
      if (hero !== undefined && hero !== null) {
        const optimizedHero = {
          mainArticle: hero.mainArticle ? optimizePostData(hero.mainArticle) : null,
          topPicks: Array.isArray(hero.topPicks) ? hero.topPicks.map(optimizePostData) : [],
          discussionTable: Array.isArray(hero.discussionTable) ? hero.discussionTable.map(optimizePostData) : [],
        };
        await saveWithRetry("homepageHeroContent", optimizedHero, "hero content");
      }

      // Save hero settings
      if (settings !== undefined && settings !== null) {
        // Update homepageSectionSettings with hero settings
        const homepageSettings = await Settings.findOne({ key: "homepageSectionSettings" }).maxTimeMS(5000);
        const currentSettings = homepageSettings?.value || {};
        const updatedSettings = {
          ...currentSettings,
          hero: settings,
        };
        await saveWithRetry("homepageSectionSettings", updatedSettings, "hero settings");
      }
    };

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Database operation timeout")), 35000);
    });

    await Promise.race([saveOperation(), timeoutPromise]);

    return NextResponse.json({
      message: "Hero section saved successfully",
    });
  } catch (error) {
    console.error("Error saving hero section:", error);
    if (error.message?.includes("timeout")) {
      return NextResponse.json(
        { error: "Request timed out", message: "The operation took too long. Please try again." },
        { status: 504 }
      );
    }
    return NextResponse.json(
      { error: "Failed to save hero section", message: error.message },
      { status: 500 }
    );
  }
}
