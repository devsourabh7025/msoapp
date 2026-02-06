import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import jwt from "jsonwebtoken";
import User from "@/models/User";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

// Helper function to optimize post data - only return fields needed for display
function optimizePostData(post) {
  if (!post || typeof post !== 'object') return post;
  
  // Only keep essential fields for display
  const optimized = {
    _id: post._id,
    slug: post.slug,
    title: post.title,
    featuredImage: post.featuredImage,
    excerpt: post.excerpt,
    category: post.category,
    publishedAt: post.publishedAt,
  };
  
  // Handle author - can be object or string
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

// Recursively optimize all posts in content data
function optimizeContentData(content) {
  if (!content || typeof content !== 'object') {
    console.log("⚠️ optimizeContentData: Invalid content:", content);
    return content;
  }
  
  const optimized = { ...content };
  
  // Optimize hero section
  if (optimized.hero) {
    console.log("🔍 Optimizing hero section:", {
      hasMainArticle: !!optimized.hero.mainArticle,
      topPicksLength: optimized.hero.topPicks?.length || 0,
      discussionTableLength: optimized.hero.discussionTable?.length || 0,
    });
    
    if (optimized.hero.mainArticle) {
      optimized.hero.mainArticle = optimizePostData(optimized.hero.mainArticle);
    }
    if (Array.isArray(optimized.hero.topPicks)) {
      optimized.hero.topPicks = optimized.hero.topPicks.map(optimizePostData);
    }
    if (Array.isArray(optimized.hero.discussionTable)) {
      optimized.hero.discussionTable = optimized.hero.discussionTable.map(optimizePostData);
    }
  } else {
    console.log("⚠️ No hero section in content");
  }
  
  // Optimize spotlight section
  if (Array.isArray(optimized.spotlight)) {
    optimized.spotlight = optimized.spotlight.map(optimizePostData);
  }
  
  // Optimize featured section
  if (optimized.featured) {
    if (Array.isArray(optimized.featured.smbStories)) {
      optimized.featured.smbStories = optimized.featured.smbStories.map(optimizePostData);
    }
    if (Array.isArray(optimized.featured.herStories)) {
      optimized.featured.herStories = optimized.featured.herStories.map(optimizePostData);
    }
    if (Array.isArray(optimized.featured.socialStories)) {
      optimized.featured.socialStories = optimized.featured.socialStories.map(optimizePostData);
    }
  }
  
  // Optimize explore section
  if (Array.isArray(optimized.explore)) {
    optimized.explore = optimized.explore.map(optimizePostData);
  }
  
  // Optimize trending section
  if (Array.isArray(optimized.trending)) {
    optimized.trending = optimized.trending.map(optimizePostData);
  }
  
  return optimized;
}

// GET - Fetch homepage settings (public)
export async function GET() {
  try {
    // Add timeout wrapper for database operations
    const dbOperation = async () => {
      await ensureConnected();
      
      const [orderSettings, settingsData, contentData, heroContentData, spotlightContentData] = await Promise.all([
        Settings.findOne({ key: "homepageSectionOrder" }).maxTimeMS(5000),
        Settings.findOne({ key: "homepageSectionSettings" }).maxTimeMS(5000),
        Settings.findOne({ key: "homepageSectionContent" }).maxTimeMS(5000),
        Settings.findOne({ key: "homepageHeroContent" }).maxTimeMS(5000),
        Settings.findOne({ key: "homepageSpotlightContent" }).maxTimeMS(5000),
      ]);
      
      return { orderSettings, settingsData, contentData, heroContentData, spotlightContentData };
    };

    // Wrap with timeout
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Database operation timeout")), 8000);
    });

    const { orderSettings, settingsData, contentData, heroContentData, spotlightContentData } = await Promise.race([
      dbOperation(),
      timeoutPromise,
    ]);
    
    // Optimize content data to reduce payload size (excluding hero and spotlight - they're separate now)
    let optimizedContent = null;
    if (contentData?.value) {
      optimizedContent = optimizeContentData(contentData.value);
      // Remove hero and spotlight from content since they're stored separately
      if (optimizedContent.hero) {
        delete optimizedContent.hero;
      }
      if (optimizedContent.spotlight) {
        delete optimizedContent.spotlight;
      }
    } else {
      // Return empty structure so components know data exists but is empty
      optimizedContent = {
        featured: { smbStories: [], herStories: [], socialStories: [] },
        explore: [],
        trending: [],
      };
    }
    
    // Get hero content separately
    let optimizedHero = null;
    if (heroContentData?.value) {
      optimizedHero = {
        mainArticle: heroContentData.value.mainArticle ? optimizePostData(heroContentData.value.mainArticle) : null,
        topPicks: Array.isArray(heroContentData.value.topPicks) 
          ? heroContentData.value.topPicks.map(optimizePostData) 
          : [],
        discussionTable: Array.isArray(heroContentData.value.discussionTable) 
          ? heroContentData.value.discussionTable.map(optimizePostData) 
          : [],
      };
    } else {
      optimizedHero = {
        mainArticle: null,
        topPicks: [],
        discussionTable: [],
      };
    }
    
    // Get spotlight content separately
    let optimizedSpotlight = null;
    if (spotlightContentData?.value) {
      optimizedSpotlight = Array.isArray(spotlightContentData.value)
        ? spotlightContentData.value.map(optimizePostData)
        : [];
    } else {
      optimizedSpotlight = [];
    }
    
    // Debug logging after optimization
    console.log("🔍 Homepage API Response:", {
      hasOrder: !!orderSettings?.value,
      hasSettings: !!settingsData?.value,
      hasContent: !!contentData?.value,
      hasHeroContent: !!heroContentData?.value,
      hasSpotlightContent: !!spotlightContentData?.value,
      hero: {
        hasMainArticle: !!optimizedHero?.mainArticle,
        topPicksCount: optimizedHero?.topPicks?.length || 0,
        discussionTableCount: optimizedHero?.discussionTable?.length || 0,
      },
      spotlight: {
        count: optimizedSpotlight?.length || 0,
      },
    });
    
    return NextResponse.json({
      order: orderSettings?.value || null,
      settings: settingsData?.value || null,
      content: optimizedContent,
      hero: optimizedHero,
      spotlight: optimizedSpotlight,
    });
  } catch (error) {
    console.error("Error fetching homepage settings:", error);
    
    // Return empty data structure instead of error to prevent UI blocking
    return NextResponse.json({
      order: null,
      settings: null,
      content: null,
      error: error.message || "Failed to fetch homepage settings",
    }, { status: 200 }); // Return 200 with empty data so components can handle gracefully
  }
}

// PUT - Update homepage settings (admin only)
export async function PUT(request) {
  try {
    // Check authentication
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json(
        { error: "Not authenticated", message: "Please log in to save settings" },
        { status: 401 }
      );
    }

    // Parse request body first
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error("Error parsing request body:", parseError);
      return NextResponse.json(
        { error: "Invalid request data", message: "Failed to parse request body" },
        { status: 400 }
      );
    }

    const { order, settings, content, hero, spotlight } = body;

    // Validate and normalize content structure before saving (hero and spotlight are separate now)
    if (content !== undefined && content !== null) {
      // Remove hero and spotlight from content since they're stored separately
      if (content.hero) {
        delete content.hero;
      }
      if (content.spotlight) {
        delete content.spotlight;
      }
      
      // Ensure featured section has correct structure
      if (content.featured && typeof content.featured === 'object') {
        if (!Array.isArray(content.featured.smbStories)) content.featured.smbStories = [];
        if (!Array.isArray(content.featured.herStories)) content.featured.herStories = [];
        if (!Array.isArray(content.featured.socialStories)) content.featured.socialStories = [];
      }
      
      // Ensure explore is an array
      if (content.explore !== undefined && !Array.isArray(content.explore)) {
        content.explore = [];
      }
      
      // Ensure trending is an array
      if (content.trending !== undefined && !Array.isArray(content.trending)) {
        content.trending = [];
      }
    }

    // Validate and normalize hero structure (separate setting)
    let heroToSave = null;
    if (hero !== undefined && hero !== null) {
      heroToSave = {
        mainArticle: hero.mainArticle || null,
        topPicks: Array.isArray(hero.topPicks) ? hero.topPicks : [],
        discussionTable: Array.isArray(hero.discussionTable) ? hero.discussionTable : [],
      };
    } else if (content?.hero) {
      // Fallback: if hero is in content, extract it
      heroToSave = {
        mainArticle: content.hero.mainArticle || null,
        topPicks: Array.isArray(content.hero.topPicks) ? content.hero.topPicks : [],
        discussionTable: Array.isArray(content.hero.discussionTable) ? content.hero.discussionTable : [],
      };
      delete content.hero; // Remove from content
    }

    // Validate and normalize spotlight structure (separate setting)
    let spotlightToSave = null;
    if (spotlight !== undefined && spotlight !== null) {
      spotlightToSave = Array.isArray(spotlight) ? spotlight : [];
    } else if (content?.spotlight) {
      // Fallback: if spotlight is in content, extract it
      spotlightToSave = Array.isArray(content.spotlight) ? content.spotlight : [];
      delete content.spotlight; // Remove from content
    }

    // Connect to database
    try {
      await ensureConnected();
    } catch (dbError) {
      console.error("Database connection error:", dbError);
      return NextResponse.json(
        { error: "Database connection failed", message: "Unable to connect to database. Please try again." },
        { status: 503 }
      );
    }

    // Verify JWT and user
    let decoded, user;
    try {
      const JWT_SECRET = getJWTSecret();
      decoded = jwt.verify(token, JWT_SECRET);
      user = await User.findById(decoded.userId).select("-password");
    } catch (authError) {
      console.error("Authentication error:", authError);
      return NextResponse.json(
        { error: "Authentication failed", message: "Invalid or expired session. Please log in again." },
        { status: 401 }
      );
    }
    
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Unauthorized", message: "Admin access required" },
        { status: 403 }
      );
    }

    // Update or create settings with timeout
    // Save updates sequentially to reduce connection load and avoid timeouts
    const saveResults = [];
    
    try {
      const saveOperation = async () => {
        // Save with retry logic for each operation
        // All data is saved to MongoDB Settings collection (no localStorage)
        const saveWithRetry = async (key, value, type, maxRetries = 2) => {
          for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
              console.log(`💾 Saving ${type} to database... (Attempt ${attempt}/${maxRetries})`);
              const result = await Settings.findOneAndUpdate(
                { key },
                { value },
                { upsert: true, new: true }
              ).maxTimeMS(15000); // 15 seconds per operation
              
              saveResults.push({ type, success: true });
              console.log(`✅ ${type} saved to database`);
              return result;
            } catch (error) {
              console.error(`❌ Failed to save ${type} to database (Attempt ${attempt}):`, error.message);
              if (attempt === maxRetries) {
                throw error; // Re-throw on final attempt
              }
              // Wait before retry
              await new Promise(resolve => setTimeout(resolve, 2000));
            }
          }
        };

        // Save section order to database (key: "homepageSectionOrder")
        if (order !== undefined) {
          await saveWithRetry("homepageSectionOrder", order, "order");
        }
        
        // Save section settings to database (key: "homepageSectionSettings")
        if (settings !== undefined) {
          await saveWithRetry("homepageSectionSettings", settings, "settings");
        }
        
        // Save section content to database (key: "homepageSectionContent")
        // Note: hero and spotlight are saved separately below
        if (content !== undefined) {
          // Optimize content data before saving (hero is separate now)
          const optimizedContent = optimizeContentData(content);
          await saveWithRetry("homepageSectionContent", optimizedContent, "content");
        }

        // Save hero section separately to database (key: "homepageHeroContent")
        if (heroToSave !== null) {
          // Optimize hero posts before saving
          const optimizedHero = {
            mainArticle: heroToSave.mainArticle ? optimizePostData(heroToSave.mainArticle) : null,
            topPicks: heroToSave.topPicks.map(optimizePostData),
            discussionTable: heroToSave.discussionTable.map(optimizePostData),
          };
          
          console.log("💾 Saving hero section to database (separate setting):", {
            heroSection: {
              hasMainArticle: !!optimizedHero?.mainArticle,
              mainArticleId: optimizedHero?.mainArticle?._id || null,
              mainArticleTitle: optimizedHero?.mainArticle?.title || null,
              topPicksCount: optimizedHero?.topPicks?.length || 0,
              topPicksIds: optimizedHero?.topPicks?.map(p => p._id) || [],
              discussionTableCount: optimizedHero?.discussionTable?.length || 0,
              discussionTableIds: optimizedHero?.discussionTable?.map(p => p._id) || [],
            },
          });
          await saveWithRetry("homepageHeroContent", optimizedHero, "hero");
        }

        // Save spotlight section separately to database (key: "homepageSpotlightContent")
        if (spotlightToSave !== null) {
          // Optimize spotlight posts before saving
          const optimizedSpotlight = spotlightToSave.map(optimizePostData);
          
          console.log("💾 Saving spotlight section to database (separate setting):", {
            spotlightSection: {
              count: optimizedSpotlight.length,
              postIds: optimizedSpotlight.map(p => p._id),
            },
          });
          await saveWithRetry("homepageSpotlightContent", optimizedSpotlight, "spotlight");
        }

        if (saveResults.length === 0) {
          throw new Error("No data provided");
        }
      };

      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Database operation timeout")), 60000); // Increased to 60 seconds total
      });

      await Promise.race([saveOperation(), timeoutPromise]);

      return NextResponse.json({
        message: "Homepage settings saved successfully",
        success: true,
      });
    } catch (dbOpError) {
      console.error("Database operation error:", dbOpError);
      console.error("Save results so far:", saveResults);
      
      // Check if it's a timeout
      if (dbOpError.message?.includes("timeout") || dbOpError.name === "MongoNetworkTimeoutError") {
        // If we saved some data, return partial success
        if (saveResults.length > 0) {
          return NextResponse.json(
            { 
              error: "Partial save completed", 
              message: `Some data was saved (${saveResults.length} of 3), but the operation timed out. Please try saving again.`,
              saved: saveResults.map(r => r.type),
              partial: true
            },
            { status: 206 } // 206 Partial Content
          );
        }
        
        return NextResponse.json(
          { error: "Request timed out", message: "The operation took too long. Please check your MongoDB connection and try again." },
          { status: 504 }
        );
      }
      
      // Re-throw to be caught by outer catch
      throw dbOpError;
    }
  } catch (error) {
    console.error("Error saving homepage settings:", error);
    console.error("Error stack:", error.stack);
    
    // Provide more specific error messages
    let errorMessage = "Failed to save homepage settings";
    let statusCode = 500;
    
    if (error.message?.includes("timeout") || error.name === "MongoNetworkTimeoutError") {
      errorMessage = "Request timed out. The database connection is slow. Please try again.";
      statusCode = 504;
    } else if (error.message?.includes("network") || error.name === "MongoNetworkError") {
      errorMessage = "Database connection error. Please check your connection and try again.";
      statusCode = 503;
    } else if (error.message?.includes("ECONNREFUSED")) {
      errorMessage = "Cannot connect to database server. Please check your database connection.";
      statusCode = 503;
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { error: errorMessage, message: errorMessage },
      { status: statusCode }
    );
  }
}
