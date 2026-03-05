import mongoose from "mongoose";

const CorporateCompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    sector: { type: String, required: true, trim: true },
    industry: { type: String, trim: true, default: "" },
    headquarters: { type: String, trim: true, default: "" },
    foundedYear: { type: String, trim: true, default: "" },
    website: { type: String, trim: true, default: "" },
    description: { type: String, trim: true, default: "" },
    revenue: { type: String, trim: true, default: "" },
    employees: { type: String, trim: true, default: "" },
    rank: { type: Number, default: 0 },
    enabled: { type: Boolean, default: true },
  },
  { timestamps: true }
);

CorporateCompanySchema.index({ sector: 1, rank: 1 });
CorporateCompanySchema.index({ name: "text", sector: "text", industry: "text" });

export default mongoose.models.CorporateCompany || mongoose.model("CorporateCompany", CorporateCompanySchema);
