import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import CorporateCompany from "@/models/CorporateCompany";

/**
 * GET - Public list of corporate companies (top 100 by sector).
 * Returns business-related companies for networking and intelligence.
 */
export async function GET(request) {
  try {
    await ensureConnected();

    const { searchParams } = new URL(request.url);
    const sector = searchParams.get("sector");
    const industry = searchParams.get("industry");
    const q = searchParams.get("q");

    const query = { enabled: true };

    if (sector?.trim()) {
      query.sector = new RegExp(sector.trim(), "i");
    }

    if (industry?.trim()) {
      query.industry = new RegExp(industry.trim(), "i");
    }

    if (q?.trim()) {
      query.$or = [
        { name: new RegExp(q.trim(), "i") },
        { description: new RegExp(q.trim(), "i") },
        { sector: new RegExp(q.trim(), "i") },
        { industry: new RegExp(q.trim(), "i") },
      ];
    }

    const list = await CorporateCompany.find(query)
      .select("name sector industry headquarters foundedYear website description revenue employees rank")
      .sort({ sector: 1, rank: 1, name: 1 })
      .limit(500)
      .lean();

    const sectors = await CorporateCompany.distinct("sector", { enabled: true });
    const industries = await CorporateCompany.distinct("industry", { enabled: true }).then((arr) =>
      arr.filter(Boolean).sort((a, b) => a.localeCompare(b))
    );

    return NextResponse.json({
      list,
      sectors: sectors.filter(Boolean).sort((a, b) => a.localeCompare(b)),
      industries,
    });
  } catch (error) {
    console.error("Error fetching corporate companies:", error);
    return NextResponse.json(
      { error: "Failed to fetch list", list: [], sectors: [], industries: [] },
      { status: 200 }
    );
  }
}
