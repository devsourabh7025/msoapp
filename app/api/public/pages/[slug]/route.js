import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import Page from "@/models/Page";

export async function GET(request, { params }) {
  try {
    await ensureConnected();
    const { slug } = await params;

    const page = await Page.findOne({ slug, status: "published" }).lean();

    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    const cats = page.categories?.length > 0 ? page.categories : (page.category ? [page.category] : []);
    return NextResponse.json({ page: { ...page, categories: cats } });
  } catch (error) {
    console.error("Error fetching page:", error);
    return NextResponse.json({ error: "Failed to fetch page" }, { status: 500 });
  }
}
