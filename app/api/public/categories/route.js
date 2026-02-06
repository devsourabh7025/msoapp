import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Post from "@/models/Post";

// Public endpoint to fetch all unique categories from published posts
export async function GET() {
  try {
    // Check if Post model is available
    if (!Post) {
      console.error("Post model is not available");
      return NextResponse.json(
        { 
          error: "Database model not available", 
          categories: [],
          success: false 
        },
        { status: 200 } // Return 200 with empty array
      );
    }

    // Add timeout wrapper for database operations
    const dbOperation = async () => {
      await ensureConnected();
      
      // Get all unique categories from published posts with post counts
      const categories = await Post.aggregate([
        { $match: { status: "published" } },
        {
          $group: {
            _id: "$category",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            name: "$_id",
            count: 1,
          },
        },
        { $sort: { count: -1, name: 1 } },
      ], { maxTimeMS: 5000 });
      
      return categories;
    };

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Database operation timeout")), 10000);
    });

    const categories = await Promise.race([dbOperation(), timeoutPromise]);

    // Ensure we always return an array
    const categoriesArray = Array.isArray(categories) ? categories : [];

    console.log(`✅ Fetched ${categoriesArray.length} categories from database`);

    return NextResponse.json({ 
      categories: categoriesArray,
      success: true,
      count: categoriesArray.length
    });
  } catch (error) {
    console.error("❌ Error fetching categories:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code
    });
    
    // Return empty array on error instead of failing
    return NextResponse.json(
      { 
        error: error.message || "Failed to fetch categories", 
        categories: [],
        success: false,
        message: error.message,
        errorName: error.name
      },
      { status: 200 } // Return 200 with empty array so UI doesn't break
    );
  }
}
