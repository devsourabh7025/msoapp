import mongoose from "mongoose";

const PageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

// Clear cached model to avoid stale pre-save hooks (Mongoose 9 removed next callback)
if (mongoose.models.Page) {
  delete mongoose.models.Page;
}
export default mongoose.model("Page", PageSchema);
