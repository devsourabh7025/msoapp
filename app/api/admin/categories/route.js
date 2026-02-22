import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Category from "@/models/Category";
import Post from "@/models/Post";
import User from "@/models/User";
import jwt from "jsonwebtoken";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

// Middleware to check if user is ADMIN
async function checkAdmin(request) {
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return { error: "Not authenticated", status: 401 };
  }

  try {
    await ensureConnected();
    const JWT_SECRET = getJWTSecret();
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user || user.role !== "ADMIN") {
      return {
        error: "Unauthorized - Admin access required",
        status: 403,
      };
    }

    return { user };
  } catch (error) {
    return { error: "Not authenticated", status: 401 };
  }
}

// GET - Fetch all categories
export async function GET(request) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) {
    return NextResponse.json(
      { error: authCheck.error },
      { status: authCheck.status }
    );
  }

  try {
    await ensureConnected();
    
    const categories = await Category.find().sort({ name: 1 });
    
    // Get post count for each category
    const categoriesWithCounts = await Promise.all(
      categories.map(async (category) => {
        const postCount = await Post.countDocuments({ category: category.name });
        return {
          _id: category._id,
          name: category.name,
          slug: category.slug,
          description: category.description,
          postCount,
          createdAt: category.createdAt,
          updatedAt: category.updatedAt,
        };
      })
    );

    return NextResponse.json({ categories: categoriesWithCounts });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

// POST - Create a new category
export async function POST(request) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) {
    return NextResponse.json(
      { error: authCheck.error },
      { status: authCheck.status }
    );
  }

  try {
    await ensureConnected();
    const body = await request.json();
    const { name, description } = body;

    if (!name || name.trim() === "") {
      return NextResponse.json(
        { error: "Category name is required" },
        { status: 400 }
      );
    }

    // Check if category with same name already exists (escape regex special chars)
    const escapedName = name.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const existingCategory = await Category.findOne({
      name: { $regex: new RegExp(`^${escapedName}$`, "i") },
    });

    if (existingCategory) {
      return NextResponse.json(
        { error: "Category with this name already exists" },
        { status: 400 }
      );
    }

    // Generate slug from name
    let baseSlug = name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || `category-${Date.now()}`;
    let slug = baseSlug;
    let slugCounter = 1;
    while (await Category.findOne({ slug })) {
      slug = `${baseSlug}-${slugCounter}`;
      slugCounter++;
    }

    const category = await Category.create({
      name: name.trim(),
      slug,
      description: description || "",
    });

    return NextResponse.json(
      { category, message: "Category created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating category:", error);
    
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Category with this name or slug already exists" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create category", details: error.message },
      { status: 500 }
    );
  }
}

// PUT - Update a category
export async function PUT(request) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) {
    return NextResponse.json(
      { error: authCheck.error },
      { status: authCheck.status }
    );
  }

  try {
    await ensureConnected();
    const body = await request.json();
    const { categoryId, name, description } = body;

    if (!categoryId) {
      return NextResponse.json(
        { error: "Category ID is required" },
        { status: 400 }
      );
    }

    const category = await Category.findById(categoryId);
    if (!category) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    const oldName = category.name;

    // If name is being changed, check for duplicates
    if (name && name.trim() !== oldName) {
      const escapedName = name.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const existingCategory = await Category.findOne({
        name: { $regex: new RegExp(`^${escapedName}$`, "i") },
        _id: { $ne: categoryId },
      });

      if (existingCategory) {
        return NextResponse.json(
          { error: "Category with this name already exists" },
          { status: 400 }
        );
      }
    }

    // Update category
    if (name) {
      category.name = name.trim();
      // Regenerate slug when name changes
      let baseSlug = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `category-${Date.now()}`;
      let slug = baseSlug;
      let slugCounter = 1;
      while (await Category.findOne({ slug, _id: { $ne: categoryId } })) {
        slug = `${baseSlug}-${slugCounter}`;
        slugCounter++;
      }
      category.slug = slug;
    }
    if (description !== undefined) category.description = description;

    await category.save();

    // If name changed, update all posts with this category
    if (name && name.trim() !== oldName) {
      await Post.updateMany(
        { category: oldName },
        { $set: { category: name.trim() } }
      );
    }

    return NextResponse.json({
      category,
      message: "Category updated successfully",
    });
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json(
      { error: "Failed to update category", details: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Delete a category
export async function DELETE(request) {
  const authCheck = await checkAdmin(request);
  if (authCheck.error) {
    return NextResponse.json(
      { error: authCheck.error },
      { status: authCheck.status }
    );
  }

  try {
    await ensureConnected();
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");

    if (!categoryId) {
      return NextResponse.json(
        { error: "Category ID is required" },
        { status: 400 }
      );
    }

    const category = await Category.findById(categoryId);
    if (!category) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    // Check if category is used in any posts
    const postCount = await Post.countDocuments({ category: category.name });
    if (postCount > 0) {
      return NextResponse.json(
        { 
          error: `Cannot delete category. It is used in ${postCount} post(s). Please reassign or delete those posts first.` 
        },
        { status: 400 }
      );
    }

    await Category.findByIdAndDelete(categoryId);

    return NextResponse.json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { error: "Failed to delete category", details: error.message },
      { status: 500 }
    );
  }
}
