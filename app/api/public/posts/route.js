import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Post from "@/models/Post";

// Public endpoint to fetch published posts
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit")) || 10;
    const category = searchParams.get("category");
    const sort = searchParams.get("sort") || "publishedAt";
    
    // Build query
    const query = { status: "published" };
    if (category) {
      // Case-insensitive category matching using regex
      query.category = { $regex: new RegExp(`^${category}$`, "i") };
    }
    
    // Build sort object
    let sortObj = { publishedAt: -1, createdAt: -1 };
    if (sort === "publishedAt") {
      sortObj = { publishedAt: -1, createdAt: -1 };
    } else if (sort === "createdAt") {
      sortObj = { createdAt: -1 };
    }
    
    // Add timeout wrapper for database operations
    const dbOperation = async () => {
      await ensureConnected();
      
      // Get published posts with timeout
      const posts = await Post.find(query)
        .populate("author", "name email")
        .sort(sortObj)
        .limit(limit)
        .select("title slug excerpt category featuredImage publishedAt author createdAt")
        .maxTimeMS(5000);
      
      return posts;
    };

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Database operation timeout")), 10000);
    });

    const posts = await Promise.race([dbOperation(), timeoutPromise]);

    return NextResponse.json({ posts: posts || [] });
  } catch (error) {
    console.error("Error fetching public posts:", error);
    
    // Return empty array on error instead of failing
    return NextResponse.json(
      { 
        error: error.message || "Failed to fetch posts", 
        posts: [] 
      },
      { status: 200 } // Return 200 with empty array so UI doesn't break
    );
  }
}
