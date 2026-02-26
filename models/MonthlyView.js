import mongoose from "mongoose";

// Tracks post views per month for analytics (month-wise breakdown).
// When a published post is viewed, we increment DailyView for the day and MonthlyView for the month.
const MonthlyViewSchema = new mongoose.Schema(
  {
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    year: { type: Number, required: true },
    month: { type: Number, required: true }, // 1-12
    count: { type: Number, default: 0 },
  },
  { timestamps: true }
);

MonthlyViewSchema.index({ postId: 1, year: 1, month: 1 }, { unique: true });
MonthlyViewSchema.index({ year: 1, month: 1 });

export default mongoose.models.MonthlyView || mongoose.model("MonthlyView", MonthlyViewSchema);
