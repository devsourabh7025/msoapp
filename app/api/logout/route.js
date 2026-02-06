import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const response = NextResponse.json({ message: "Logout successful" });

    // Check if we're in production and using HTTPS
    const isProduction = process.env.NODE_ENV === "production";
    const protocol = request.headers.get("x-forwarded-proto") || 
                     (process.env.VERCEL_URL ? "https" : "http");
    const isHTTPS = protocol === "https";

    // Clear the token cookie
    response.cookies.set("token", "", {
      httpOnly: true,
      secure: isProduction && isHTTPS, // Secure in production with HTTPS
      sameSite: "lax",
      maxAge: 0,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Failed to logout" },
      { status: 500 }
    );
  }
}
