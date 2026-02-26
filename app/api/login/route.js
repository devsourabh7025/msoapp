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
    const { email, password, accountType } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    await ensureConnected();

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 },
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 },
      );
    }

    const storedType = user.accountType || "individual";
    const requestedType = accountType || "individual";

    if (storedType !== requestedType) {
      const typeLabels = {
        individual: "Individual",
        startup: "Startup",
        company: "Company",
      };
      return NextResponse.json(
        {
          error: `This account is registered as ${typeLabels[storedType] || storedType}. Please select "${typeLabels[storedType] || storedType}" to sign in.`,
        },
        { status: 403 },
      );
    }

    const JWT_SECRET = getJWTSecret();
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" },
    );

    const response = NextResponse.json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        accountType: storedType,
        companyName: user.companyName,
      },
    });

    const isProduction = process.env.NODE_ENV === "production";
    const protocol =
      request.headers.get("x-forwarded-proto") ||
      (request.headers.get("host")?.includes("localhost") ? "http" : "https");
    const isHTTPS = protocol === "https";

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: isProduction && isHTTPS,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    const errorMessage =
      process.env.NODE_ENV === "development"
        ? `Login failed: ${error.message}`
        : "Failed to login";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
