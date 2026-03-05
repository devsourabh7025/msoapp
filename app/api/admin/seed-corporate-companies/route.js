import { NextResponse } from "next/server";
import { ensureConnected } from "@/lib/moongoose";
import CorporateCompany from "@/models/CorporateCompany";
import jwt from "jsonwebtoken";
import User from "@/models/User";

const SAMPLE_COMPANIES = [
  { name: "Tata Consultancy Services", sector: "Technology", industry: "IT Services", headquarters: "Mumbai", foundedYear: "1968", rank: 1 },
  { name: "Infosys", sector: "Technology", industry: "IT Services", headquarters: "Bengaluru", foundedYear: "1981", rank: 2 },
  { name: "Wipro", sector: "Technology", industry: "IT Services", headquarters: "Bengaluru", foundedYear: "1945", rank: 3 },
  { name: "HDFC Bank", sector: "Finance", industry: "Banking", headquarters: "Mumbai", foundedYear: "1994", rank: 1 },
  { name: "ICICI Bank", sector: "Finance", industry: "Banking", headquarters: "Mumbai", foundedYear: "1994", rank: 2 },
  { name: "State Bank of India", sector: "Finance", industry: "Banking", headquarters: "Mumbai", foundedYear: "1955", rank: 3 },
  { name: "Reliance Industries", sector: "Energy", industry: "Oil & Gas", headquarters: "Mumbai", foundedYear: "1966", rank: 1 },
  { name: "Bajaj Finserv", sector: "Finance", industry: "Financial Services", headquarters: "Pune", foundedYear: "2007", rank: 4 },
  { name: "Tech Mahindra", sector: "Technology", industry: "IT Services", headquarters: "Pune", foundedYear: "1986", rank: 4 },
  { name: "Larsen & Toubro", sector: "Manufacturing", industry: "Engineering", headquarters: "Mumbai", foundedYear: "1938", rank: 1 },
];

function getJWTSecret() {
  return process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
}

export async function POST(request) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    const decoded = jwt.verify(token, getJWTSecret());
    await ensureConnected();
    const user = await User.findById(decoded.userId);
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const existing = await CorporateCompany.countDocuments();
    if (existing > 0) {
      return NextResponse.json({
        message: "Corporate companies already exist. Skipping seed.",
        count: existing,
      });
    }

    await CorporateCompany.insertMany(SAMPLE_COMPANIES);
    return NextResponse.json({
      message: `Seeded ${SAMPLE_COMPANIES.length} sample corporate companies.`,
      count: SAMPLE_COMPANIES.length,
    });
  } catch (error) {
    console.error("Seed corporate companies error:", error);
    return NextResponse.json(
      { error: error.message || "Seed failed" },
      { status: 500 }
    );
  }
}
