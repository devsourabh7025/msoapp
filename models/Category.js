import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Generate slug from name before saving
CategorySchema.pre("save", async function () {
  if (this.isModified("name") || !this.slug) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    
    // Ensure slug is unique
    const CategoryModel = this.constructor;
    let slugExists = true;
    let slugCounter = 1;
    let finalSlug = this.slug;
    
    while (slugExists) {
      const existingCategory = await CategoryModel.findOne({ slug: finalSlug, _id: { $ne: this._id } });
      if (!existingCategory) {
        slugExists = false;
        this.slug = finalSlug;
      } else {
        finalSlug = `${this.slug}-${slugCounter}`;
        slugCounter++;
      }
    }
  }
});

export default mongoose.models.Category || mongoose.model("Category", CategorySchema);
