import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    location: { type: String, trim: true, default: "" },
    type: { type: String, trim: true, default: "Full-time" }, // Full-time, Part-time, Contract, Internship, Remote
    industry: { type: String, trim: true, default: "" },
    description: { type: String, trim: true, default: "" },
    requirements: { type: String, trim: true, default: "" },
    applyUrl: { type: String, trim: true, default: "" },
    applyEmail: { type: String, trim: true, default: "" },
    salary: { type: String, trim: true, default: "" },
    experience: { type: String, trim: true, default: "" },
    enabled: { type: Boolean, default: true },
  },
  { timestamps: true }
);

JobSchema.index({ enabled: 1, createdAt: -1 });
JobSchema.index({ type: 1, industry: 1 });

export default mongoose.models.Job || mongoose.model("Job", JobSchema);
