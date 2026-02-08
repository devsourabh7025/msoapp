import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import User from "@/models/User";
import jwt from "jsonwebtoken";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    await ensureConnected();

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Create new user
    const user = new User({
      name,
      email: email.toLowerCase(),
      password,
      role: "NORMAL_USER",
    });

    await user.save();

    // Generate JWT token
    const JWT_SECRET = getJWTSecret();
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Create response with user data (excluding password)
    const response = NextResponse.json({
      message: "Registration successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

    // Set HTTP-only cookie
    // In development, secure should be false (localhost doesn't use HTTPS)
    // In production (Vercel), secure should be true (HTTPS is used)
    const isProduction = process.env.NODE_ENV === "production";
    const protocol = request.headers.get("x-forwarded-proto") || 
                     (request.headers.get("host")?.includes("localhost") ? "http" : "https");
    const isHTTPS = protocol === "https";
    
    // Set cookie - secure only in production with HTTPS
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: isProduction && isHTTPS, // false in dev, true in production
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Registration error:", error);
    // Provide more detailed error message in development
    const errorMessage = process.env.NODE_ENV === "development" 
      ? `Registration failed: ${error.message}` 
      : "Failed to register user";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
