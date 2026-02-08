import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    await ensureConnected();

    // Find user by email
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Compare password using bcrypt directly
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const JWT_SECRET = getJWTSecret();
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Create response with user data (excluding password)
    const response = NextResponse.json({
      message: "Login successful",
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
    const protocol =
      request.headers.get("x-forwarded-proto") ||
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
    console.error("Login error:", error);
    // Provide more detailed error message in development
    const errorMessage = process.env.NODE_ENV === "development" 
      ? `Login failed: ${error.message}` 
      : "Failed to login";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
