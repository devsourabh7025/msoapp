import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Job from "@/models/Job";
import jwt from "jsonwebtoken";
import User from "@/models/User";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

async function requireAdmin(request) {
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return { error: "Not authenticated", status: 401 };
  }
  let decoded;
  try {
    decoded = jwt.verify(token, getJWTSecret());
  } catch {
    return { error: "Invalid token", status: 401 };
  }
  await ensureConnected();
  const user = await User.findById(decoded.userId).select("role managerPermissions");
  if (!user) return { error: "Forbidden", status: 403 };
  if (user.role === "ADMIN") return { user };
  if (user.role === "MANAGER" && (user.managerPermissions || []).includes("customiseTalentPortal")) {
    return { user };
  }
  return { error: "Forbidden", status: 403 };
}

export async function GET(request) {
  const auth = await requireAdmin(request);
  if (auth.error) return NextResponse.json({ error: auth.error }, { status: auth.status });

  try {
    await ensureConnected();
    const list = await Job.find({})
      .sort({ createdAt: -1 })
      .lean();
    return NextResponse.json({ list });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}

export async function POST(request) {
  const auth = await requireAdmin(request);
  if (auth.error) return NextResponse.json({ error: auth.error }, { status: auth.status });

  try {
    const body = await request.json();
    const {
      title,
      company,
      location,
      type,
      industry,
      description,
      requirements,
      applyUrl,
      applyEmail,
      salary,
      experience,
    } = body;

    if (!title?.trim() || !company?.trim()) {
      return NextResponse.json(
        { error: "Title and company are required" },
        { status: 400 }
      );
    }

    await ensureConnected();
    const job = await Job.create({
      title: title.trim(),
      company: company.trim(),
      location: (location || "").trim(),
      type: (type || "Full-time").trim(),
      industry: (industry || "").trim(),
      description: (description || "").trim(),
      requirements: (requirements || "").trim(),
      applyUrl: (applyUrl || "").trim(),
      applyEmail: (applyEmail || "").trim(),
      salary: (salary || "").trim(),
      experience: (experience || "").trim(),
      enabled: true,
    });

    return NextResponse.json({ job, message: "Job added successfully" });
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      { error: error.message || "Failed to add job" },
      { status: 500 }
    );
  }
}
