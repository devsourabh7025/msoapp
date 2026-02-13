import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Post from "@/models/Post";

// Increment view count for a post
export async function POST(request, { params }) {
  try {
    await ensureConnected();
    
    const { slug } = await params;
    
    if (!slug) {
      return NextResponse.json(
        { error: "Slug is required" },
        { status: 400 }
      );
    }
    
    // Find and increment views for published posts only
    const post = await Post.findOneAndUpdate(
      { 
        slug: slug,
        status: "published" 
      },
      { 
        $inc: { views: 1 } 
      },
      { 
        new: true,
        select: "views title slug"
      }
    );

    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true,
      views: post.views 
    });
  } catch (error) {
    console.error("Error incrementing post views:", error);
    return NextResponse.json(
      { error: "Failed to increment views" },
      { status: 500 }
    );
  }
}
