import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Page from "@/models/Page";

// GET - Fetch published page by slug (public, no auth required)
export async function GET(request, { params }) {
  try {
    await ensureConnected();
    const { slug } = await params;

    const page = await Page.findOne({ slug, status: "published" });

    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    return NextResponse.json({ page });
  } catch (error) {
    console.error("Error fetching page:", error);
    return NextResponse.json({ error: "Failed to fetch page" }, { status: 500 });
  }
}
