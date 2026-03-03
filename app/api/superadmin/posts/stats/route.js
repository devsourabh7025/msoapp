import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Post from "@/models/Post";
import User from "@/models/User";
import jwt from "jsonwebtoken";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

async function checkAdminOrManager(request) {
  const token = request.cookies.get("token")?.value;
  if (!token) return { error: "Not authenticated", status: 401 };
  try {
    await ensureConnected();
    const decoded = jwt.verify(token, getJWTSecret());
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return { error: "Not authenticated", status: 401 };
    if (user.role === "ADMIN") return { user };
    if (user.role === "MANAGER") return { user };
    return { error: "Unauthorized", status: 403 };
  } catch {
    return { error: "Not authenticated", status: 401 };
  }
}

export async function GET(request) {
  const authCheck = await checkAdminOrManager(request);
  if (authCheck.error) {
    return NextResponse.json({ error: authCheck.error }, { status: authCheck.status });
  }

  try {
    await ensureConnected();
    const [rows, autoShareCount] = await Promise.all([
      Post.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }, { $project: { status: "$_id", count: 1, _id: 0 } }]).maxTimeMS(5000),
      Post.countDocuments({ autoShareEnabled: true }).maxTimeMS(5000),
    ]);
    const stats = { total: 0, published: 0, draft: 0, pending: 0, autoShare: autoShareCount };
    rows.forEach((r) => {
      stats.total += r.count;
      if (r.status) stats[r.status] = r.count;
    });
    return NextResponse.json(stats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json({ total: 0, published: 0, draft: 0, pending: 0, autoShare: 0 });
  }
}
