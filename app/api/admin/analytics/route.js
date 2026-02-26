import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Post from "@/models/Post";
import DailyView from "@/models/DailyView";
import MonthlyView from "@/models/MonthlyView";
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
    const user = await User.findById(decoded.userId).select("role managerPermissions");
    if (!user || (user.role !== "ADMIN" && user.role !== "MANAGER"))
      return { error: "Unauthorized - Admin or Manager access required", status: 403 };
    return { user };
  } catch {
    return { error: "Not authenticated", status: 401 };
  }
}

export async function GET(request) {
  const authCheck = await checkAdminOrManager(request);
  if (authCheck.error)
    return NextResponse.json({ error: authCheck.error }, { status: authCheck.status });

  try {
    await ensureConnected();

    const now = new Date();
    const todayStr = now.toISOString().slice(0, 10);

    const totalResult = await Post.aggregate([
      { $match: { status: "published" } },
      { $group: { _id: null, total: { $sum: "$views" } } },
    ]);
    const totalViews = totalResult[0]?.total ?? 0;

    const todayResult = await DailyView.aggregate([
      { $addFields: { dateStr: { $dateToString: { format: "%Y-%m-%d", date: "$date" } } } },
      { $match: { dateStr: todayStr } },
      { $group: { _id: null, total: { $sum: "$count" } } },
    ]);
    const todayViews = todayResult[0]?.total ?? 0;

    const { searchParams } = new URL(request.url);
    const filterYear = searchParams.get("year") ? parseInt(searchParams.get("year"), 10) : null;

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthWiseMap = new Map();

    if (filterYear != null && !isNaN(filterYear)) {
      for (let m = 1; m <= 12; m++) {
        const key = `${filterYear}-${String(m).padStart(2, "0")}`;
        monthWiseMap.set(key, {
          month: key,
          label: `${monthNames[m - 1]} ${filterYear}`,
          views: 0,
        });
      }
    } else {
      const monthsBack = 12;
      const todayStartForRange = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0));
      for (let i = 0; i <= monthsBack; i++) {
        const y = todayStartForRange.getUTCFullYear();
        const monthIdx = todayStartForRange.getUTCMonth() - i;
        const year = monthIdx < 0 ? y - 1 : y;
        const month = monthIdx < 0 ? monthIdx + 12 + 1 : monthIdx + 1;
        const key = `${year}-${String(month).padStart(2, "0")}`;
        monthWiseMap.set(key, {
          month: key,
          label: `${monthNames[month - 1]} ${year}`,
          views: 0,
        });
      }
    }

    const monthWise = await MonthlyView.aggregate([
      ...(filterYear != null && !isNaN(filterYear) ? [{ $match: { year: filterYear } }] : []),
      {
        $group: {
          _id: { year: "$year", month: "$month" },
          views: { $sum: "$count" },
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } },
    ]);

    monthWise.forEach((row) => {
      const key = `${row._id.year}-${String(row._id.month).padStart(2, "0")}`;
      if (monthWiseMap.has(key)) monthWiseMap.get(key).views = row.views;
    });

    const monthWiseViews = Array.from(monthWiseMap.values())
      .sort((a, b) => a.month.localeCompare(b.month))
      .map(({ month, label, views }) => ({ month, label, views }));

    return NextResponse.json({
      totalViews,
      todayViews,
      monthWiseViews,
    });
  } catch (error) {
    console.error("Analytics error:", error);
    return NextResponse.json({ error: "Failed to load analytics" }, { status: 500 });
  }
}
