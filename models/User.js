import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["NORMAL_USER", "MANAGER", "ADMIN"],
      default: "NORMAL_USER",
    },
    accountType: {
      type: String,
      enum: ["individual", "startup", "company"],
      default: "individual",
    },
    isUnicorn: {
      type: Boolean,
      default: false,
    },
    companyName: {
      type: String,
      trim: true,
      default: "",
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    website: {
      type: String,
      trim: true,
      default: "",
    },
    industry: {
      type: String,
      trim: true,
      default: "",
    },
    city: {
      type: String,
      trim: true,
      default: "",
    },
    foundedYear: {
      type: String,
      trim: true,
      default: "",
    },
    teamSize: {
      type: String,
      trim: true,
      default: "",
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    autoShareEnabled: {
      type: Boolean,
      default: false,
    },
    // Manager only: list of allowed admin section keys (e.g. posts, addPost, categories)
    managerPermissions: {
      type: [String],
      default: [],
    },
    socialMediaSettings: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  { timestamps: true },
);

// Hash password before saving (async hook: no next — return/throw only)
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare password
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// In Next.js dev with hot reload, an old compiled model can persist in memory.
// If that cached model misses newly added schema fields (like managerPermissions),
// writes to those fields may be ignored until server restart.
const existingUserModel = mongoose.models.User;
if (existingUserModel && (!existingUserModel.schema.path("managerPermissions") || !existingUserModel.schema.path("accountType") || !existingUserModel.schema.path("industry"))) {
  delete mongoose.models.User;
}

export default mongoose.models.User || mongoose.model("User", UserSchema);
