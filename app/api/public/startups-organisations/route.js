import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import User from "@/models/User";

/**
 * GET - Public list of startups and organisations (accountType: startup | company).
 * Returns only public-safe fields. No auth required.
 */
export async function GET(request) {
  try {
    await ensureConnected();

    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type"); // startup | company
    const industry = searchParams.get("industry");
    const city = searchParams.get("city");
    const q = searchParams.get("q"); // search company name / description

    const query = {
      accountType: { $in: ["startup", "company"] },
    };

    if (type === "startup" || type === "company") {
      query.accountType = type;
    }

    if (industry?.trim()) {
      query.industry = new RegExp(industry.trim(), "i");
    }

    if (city?.trim()) {
      query.city = new RegExp(city.trim(), "i");
    }

    if (q?.trim()) {
      query.$or = [
        { companyName: new RegExp(q.trim(), "i") },
        { description: new RegExp(q.trim(), "i") },
        { industry: new RegExp(q.trim(), "i") },
      ];
    }

    const list = await User.find(query)
      .select("companyName accountType isUnicorn industry city website description foundedYear teamSize createdAt")
      .sort({ companyName: 1 })
      .lean();

    return NextResponse.json({ list });
  } catch (error) {
    console.error("Error fetching startups/organisations:", error);
    return NextResponse.json(
      { error: "Failed to fetch list" },
      { status: 500 }
    );
  }
}
