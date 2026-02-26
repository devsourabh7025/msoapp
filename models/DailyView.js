import mongoose from "mongoose";

// Tracks post views per day for analytics (today's views, day-wise breakdown).
// When a published post is viewed, we increment both Post.views and DailyView for that day.
const DailyViewSchema = new mongoose.Schema(
  {
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    date: { type: Date, required: true }, // Start of day (UTC) for grouping
    count: { type: Number, default: 1 },
  },
  { timestamps: true }
);

DailyViewSchema.index({ postId: 1, date: 1 }, { unique: true });
DailyViewSchema.index({ date: 1 });

export default mongoose.models.DailyView || mongoose.model("DailyView", DailyViewSchema);
