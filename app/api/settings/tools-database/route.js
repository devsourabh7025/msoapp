import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";
import jwt from "jsonwebtoken";
import User from "@/models/User";

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

const defaultSubsections = [
  { id: "browse-startups", name: "Browse Startups", description: "A searchable directory of registered Maharashtra startups.", enabled: true, url: "" },
  { id: "funding-calculator", name: "Funding Calculator", description: "Tools for valuation estimates and runway tracking.", enabled: true, url: "" },
  { id: "global-corporate-db", name: "Global Corporate Database", description: "Searchable data for networking and intelligence.", enabled: true, url: "" },
  { id: "pitch-deck-gallery", name: "Pitch Deck Gallery", description: "A collection of successful decks for founder learning.", enabled: true, url: "" },
  { id: "talent-portal", name: "Talent Portal", description: "A niche job board for startup-specific roles in the region.", enabled: true, url: "" },
];

function normalizeSubsections(subsections) {
  if (!Array.isArray(subsections) || subsections.length === 0) return defaultSubsections;
  const ids = defaultSubsections.map((s) => s.id);
  return ids.map((id) => {
    const existing = subsections.find((s) => s.id === id) || defaultSubsections.find((s) => s.id === id);
    return {
      id: existing?.id || id,
      name: (existing?.name || defaultSubsections.find((s) => s.id === id)?.name || id).slice(0, 120),
      description: (existing?.description || defaultSubsections.find((s) => s.id === id)?.description || "").slice(0, 500),
      url: (existing?.url || "").slice(0, 500),
      enabled: existing?.enabled !== false,
    };
  });
}

export async function GET() {
  try {
    await ensureConnected();
    const [contentData, settingsData] = await Promise.all([
      Settings.findOne({ key: "homepageToolsDatabaseContent" }).maxTimeMS(5000).lean(),
      Settings.findOne({ key: "homepageToolsDatabaseSettings" }).maxTimeMS(5000).lean(),
    ]);
    const v = contentData?.value;
    const subsections = normalizeSubsections(v?.subsections);
    const s = settingsData?.value;
    const settings = {
      title: s?.title || "Tools & Database",
      subtitle: s?.subtitle || "Becoming an Essential Hub for founders.",
    };
    return NextResponse.json({ content: { subsections }, settings });
  } catch (error) {
    console.error("Error fetching Tools & Database:", error);
    return NextResponse.json(
      { content: { subsections: defaultSubsections }, settings: { title: "Tools & Database", subtitle: "Becoming an Essential Hub for founders." } },
      { status: 200 }
    );
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { content, settings } = body;
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Not authenticated", message: "Please log in to save settings" }, { status: 401 });
    }
    let decoded;
    try {
      decoded = jwt.verify(token, getJWTSecret());
    } catch (error) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    await ensureConnected();
    const user = await User.findById(decoded.userId);
    if (!user) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    const isAdmin = user.role === "ADMIN";
    const hasPermission = (user.managerPermissions || []).includes("customiseToolsDatabase");
    if (!isAdmin && !hasPermission) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    if (content !== undefined && content !== null && Array.isArray(content.subsections)) {
      const optimizedContent = {
        subsections: content.subsections.map((sub) => ({
          id: sub.id,
          name: (sub.name || "").slice(0, 120),
          description: (sub.description || "").slice(0, 500),
          url: (sub.url || "").slice(0, 500),
          enabled: sub.enabled !== false,
        })),
      };
      await Settings.findOneAndUpdate(
        { key: "homepageToolsDatabaseContent" },
        { value: optimizedContent },
        { upsert: true, new: true }
      ).maxTimeMS(15000);
      revalidatePath("/");
    }
    if (settings !== undefined && settings !== null) {
      await Settings.findOneAndUpdate(
        { key: "homepageToolsDatabaseSettings" },
        { value: { title: settings.title || "Tools & Database", subtitle: settings.subtitle || "Becoming an Essential Hub for founders." } },
        { upsert: true, new: true }
      ).maxTimeMS(15000);
    }
    return NextResponse.json({ message: "Tools & Database section saved successfully" });
  } catch (error) {
    console.error("Error saving Tools & Database:", error);
    return NextResponse.json(
      { error: "Failed to save Tools & Database settings", message: error.message },
      { status: 500 }
    );
  }
}
