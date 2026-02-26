import mongoose from "mongoose";

const PageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, default: "" },
    category: { type: String, default: "" },
    categories: { type: [String], default: [] },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

if (mongoose.models.Page) {
  delete mongoose.models.Page;
}
export default mongoose.model("Page", PageSchema);
