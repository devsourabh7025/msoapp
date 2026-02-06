import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Post from "@/models/Post";

// Public endpoint to fetch a single published post by slug
export async function GET(request, { params }) {
  try {
    await ensureConnected();
    
    const { slug } = await params;
    
    if (!slug) {
      return NextResponse.json(
        { error: "Slug is required" },
        { status: 400 }
      );
    }
    
    // Get published post by slug
    const post = await Post.findOne({ 
      slug: slug,
      status: "published" 
    })
      .populate("author", "name email")
      .select("-__v");

    if (!post) {
      // Check if post exists with different status for better error message
      const postExists = await Post.findOne({ slug: slug }).select("status title");
      if (postExists) {
        console.log(`Post found but status is "${postExists.status}", not "published"`);
        return NextResponse.json(
          { 
            error: "Post not found",
            message: `Post exists but is not published. Current status: ${postExists.status}`
          },
          { status: 404 }
        );
      }
      
      return NextResponse.json(
        { 
          error: "Post not found",
          message: `No post found with slug: ${slug}`
        },
        { status: 404 }
      );
    }

    // Get related posts (same category, excluding current post)
    const relatedPosts = await Post.find({
      category: post.category,
      status: "published",
      _id: { $ne: post._id }
    })
      .populate("author", "name email")
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(3)
      .select("title slug excerpt category featuredImage publishedAt author createdAt");

    // Convert Mongoose document to plain object to ensure proper serialization
    const postData = post.toObject ? post.toObject() : post;
    
    return NextResponse.json({ 
      post: postData,
      relatedPosts: relatedPosts || []
    });
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
