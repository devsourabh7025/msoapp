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
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || "all";
    const query = status !== "all" ? { status } : {};

    const [categories, authorRows] = await Promise.all([
      Post.distinct("category", query).maxTimeMS(5000).then((c) => c.filter(Boolean).sort()),
      Post.aggregate([
        { $match: query },
        { $group: { _id: "$author" } },
        { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "u" } },
        { $unwind: { path: "$u", preserveNullAndEmptyArrays: true } },
        {
          $project: {
            id: "$_id",
            name: {
              $cond: {
                if: { $in: ["$u.accountType", ["startup", "company"]] },
                then: { $ifNull: ["$u.companyName", "$u.name"] },
                else: "$u.name",
              },
            },
          },
        },
        { $match: { name: { $ne: null } } },
        { $sort: { name: 1 } },
        { $limit: 500 },
      ])
        .maxTimeMS(10000)
        .then((rows) => rows.map((r) => ({ id: r.id, name: r.name || "Unknown" }))),
    ]);

    return NextResponse.json({ categories, authors: authorRows });
  } catch (error) {
    console.error("Error fetching meta:", error);
    return NextResponse.json({ categories: [], authors: [] });
  }
}
