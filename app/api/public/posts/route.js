import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Post from "@/models/Post";

// Public endpoint to fetch published posts
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit")) || 10;
    const category = searchParams.get("category");
    const search = (searchParams.get("search") || "").trim();
    const sort = searchParams.get("sort") || "publishedAt";

    // Build query
    const query = { status: "published" };
    if (category) {
      query.category = { $regex: new RegExp(`^${category.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i") };
    }
    if (search.length >= 3) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { excerpt: { $regex: search, $options: "i" } },
      ];
    }

    // Build sort object
    let sortObj = { publishedAt: -1, createdAt: -1 };
    if (sort === "publishedAt") {
      sortObj = { publishedAt: -1, createdAt: -1 };
    } else if (sort === "createdAt") {
      sortObj = { createdAt: -1 };
    } else if (sort === "viewsAsc") {
      sortObj = { views: 1, publishedAt: -1 };
    } else if (sort === "viewsDesc") {
      sortObj = { views: -1, publishedAt: -1 };
    }
    
    // Add timeout wrapper for database operations
    const dbOperation = async () => {
      await ensureConnected();
      
      const posts = await Post.find(query)
        .populate("author", "name email")
        .sort(sortObj)
        .limit(Math.min(limit, 1000))
        .select("_id title slug excerpt category featuredImage publishedAt author createdAt")
        .maxTimeMS(15000)
        .lean();
      
      return posts;
    };

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Database operation timeout")), 30000);
    });

    const posts = await Promise.race([dbOperation(), timeoutPromise]);

    const headers = { "Content-Type": "application/json" };
    if (search.length >= 3 || category) {
      headers["Cache-Control"] = "public, s-maxage=300, stale-while-revalidate=600";
    }
    return NextResponse.json({ posts: posts || [] }, { headers });
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
