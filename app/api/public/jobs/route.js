import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Job from "@/models/Job";

/**
 * GET - Public list of jobs for Talent Portal
 */
export async function GET(request) {
  try {
    await ensureConnected();

    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const industry = searchParams.get("industry");
    const q = searchParams.get("q");

    const query = { enabled: true };

    if (type?.trim()) {
      query.type = new RegExp(type.trim(), "i");
    }

    if (industry?.trim()) {
      query.industry = new RegExp(industry.trim(), "i");
    }

    if (q?.trim()) {
      query.$or = [
        { title: new RegExp(q.trim(), "i") },
        { company: new RegExp(q.trim(), "i") },
        { description: new RegExp(q.trim(), "i") },
        { industry: new RegExp(q.trim(), "i") },
      ];
    }

    const list = await Job.find(query)
      .select("title company location type industry description applyUrl applyEmail salary experience createdAt")
      .sort({ createdAt: -1 })
      .lean();

    const types = await Job.distinct("type", { enabled: true });
    const industries = await Job.distinct("industry", { enabled: true }).then((arr) =>
      arr.filter(Boolean).sort((a, b) => a.localeCompare(b))
    );

    return NextResponse.json({
      list,
      types: types.filter(Boolean).sort((a, b) => a.localeCompare(b)),
      industries,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { error: "Failed to fetch jobs", list: [], types: [], industries: [] },
      { status: 200 }
    );
  }
}
