import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Job from "@/models/Job";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import mongoose from "mongoose";

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

export async function PUT(request, { params }) {
  const auth = await requireAdmin(request);
  if (auth.error) return NextResponse.json({ error: auth.error }, { status: auth.status });

  try {
    const { id } = await params;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid job ID" }, { status: 400 });
    }

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
      enabled,
    } = body;

    await ensureConnected();
    const update = {};
    if (title !== undefined) update.title = String(title).trim();
    if (company !== undefined) update.company = String(company).trim();
    if (location !== undefined) update.location = String(location).trim();
    if (type !== undefined) update.type = String(type).trim();
    if (industry !== undefined) update.industry = String(industry).trim();
    if (description !== undefined) update.description = String(description).trim();
    if (requirements !== undefined) update.requirements = String(requirements).trim();
    if (applyUrl !== undefined) update.applyUrl = String(applyUrl).trim();
    if (applyEmail !== undefined) update.applyEmail = String(applyEmail).trim();
    if (salary !== undefined) update.salary = String(salary).trim();
    if (experience !== undefined) update.experience = String(experience).trim();
    if (enabled !== undefined) update.enabled = !!enabled;

    const job = await Job.findByIdAndUpdate(id, { $set: update }, { new: true }).lean();
    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ job, message: "Job updated successfully" });
  } catch (error) {
    console.error("Error updating job:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update job" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const auth = await requireAdmin(request);
  if (auth.error) return NextResponse.json({ error: auth.error }, { status: auth.status });

  try {
    const { id } = await params;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid job ID" }, { status: 400 });
    }

    await ensureConnected();
    const job = await Job.findByIdAndDelete(id);
    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    return NextResponse.json(
      { error: error.message || "Failed to delete job" },
      { status: 500 }
    );
  }
}
