module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/mongoose [external] (mongoose, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}),
"[project]/lib/moongoose.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectDB",
    ()=>connectDB,
    "ensureConnected",
    ()=>ensureConnected
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
// Don't check MONGODB_URI at module level - check it when connecting
// This prevents build-time errors since env vars may not be available during build
function getMongoDBUri() {
    const uri = process.env.MONGODB_URI || "mongodb+srv://sourabhmalame:sourabh1234@pgadmin.evcqvgp.mongodb.net/?appName=pgadmin";
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return uri;
}
let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g._mongoose;
if (!cached) cached = /*TURBOPACK member replacement*/ __turbopack_context__.g._mongoose = {
    conn: null,
    promise: null
};
// Check if mongoose is already connected
function isConnected() {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connection.readyState === 1;
}
async function connectDB() {
    // If mongoose is already connected, return immediately (no need to check cache)
    if (isConnected()) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connection;
    }
    // If connection exists in cache and is still valid, return it
    if (cached.conn && isConnected()) {
        return cached.conn;
    }
    // If connection is in progress, wait for it
    if (cached.promise) {
        try {
            cached.conn = await cached.promise;
            return cached.conn;
        } catch (error) {
            cached.promise = null;
            throw error;
        }
    }
    // Get MongoDB URI (will throw error if not set)
    const mongoUri = getMongoDBUri();
    // Create new connection promise with optimized settings for slow networks
    cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(mongoUri, {
        bufferCommands: false,
        serverSelectionTimeoutMS: 30000,
        socketTimeoutMS: 60000,
        connectTimeoutMS: 30000,
        maxPoolSize: 10,
        minPoolSize: 1,
        maxIdleTimeMS: 30000,
        retryWrites: true,
        retryReads: true,
        w: "majority",
        // Additional options for slow/unstable networks
        heartbeatFrequencyMS: 10000,
        serverSelectionRetryDelayMS: 5000
    });
    try {
        cached.conn = await cached.promise;
        console.log("✅ Mongoose connected to MongoDB");
        // Handle connection events
        __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connection.on("error", (err)=>{
            console.error("MongoDB connection error:", err);
            cached.conn = null;
            cached.promise = null;
        });
        __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connection.on("disconnected", ()=>{
            console.warn("MongoDB disconnected");
            cached.conn = null;
            cached.promise = null;
        });
        return cached.conn;
    } catch (error) {
        cached.promise = null;
        cached.conn = null;
        console.error("Failed to connect to MongoDB:", error);
        // Provide more helpful error messages
        if (error.code === "ECONNREFUSED") {
            console.error("❌ MongoDB connection refused. Please check:\n" + "1. Your MongoDB Atlas cluster is running\n" + "2. Your IP address is whitelisted in MongoDB Atlas\n" + "3. Your connection string is correct\n" + "4. Your network connection is working");
        } else if (error.name === "MongoServerError") {
            console.error("❌ MongoDB server error:", error.message);
        } else if (error.name === "MongoNetworkError") {
            console.error("❌ MongoDB network error:", error.message);
        }
        throw error;
    }
}
async function ensureConnected() {
    if (isConnected()) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connection;
    }
    // Fallback: connect if not already connected
    return await connectDB();
}
}),
"[project]/models/Category.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const CategorySchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});
// Generate slug from name before saving
CategorySchema.pre("save", async function() {
    if (this.isModified("name") || !this.slug) {
        this.slug = this.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        // Ensure slug is unique
        const CategoryModel = this.constructor;
        let slugExists = true;
        let slugCounter = 1;
        let finalSlug = this.slug;
        while(slugExists){
            const existingCategory = await CategoryModel.findOne({
                slug: finalSlug,
                _id: {
                    $ne: this._id
                }
            });
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
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Category || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Category", CategorySchema);
}),
"[project]/models/Post.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const PostSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    excerpt: {
        type: String
    },
    content: {
        type: String,
        required: true,
        default: ""
    },
    contentBlocks: {
        type: Array,
        default: []
    },
    category: {
        type: String,
        required: true
    },
    featuredImage: {
        type: String
    },
    status: {
        type: String,
        enum: [
            "draft",
            "pending",
            "published"
        ],
        default: "draft"
    },
    author: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    autoShareEnabled: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: Date
    },
    // SEO Fields
    seo: {
        metaTitle: {
            type: String
        },
        metaDescription: {
            type: String
        },
        metaKeywords: {
            type: String
        },
        ogTitle: {
            type: String
        },
        ogDescription: {
            type: String
        },
        ogImage: {
            type: String
        },
        twitterCard: {
            type: String,
            default: "summary_large_image"
        }
    }
}, {
    timestamps: true
});
// Generate slug from title before saving
PostSchema.pre("save", async function() {
    try {
        // Always generate slug if it doesn't exist or is empty
        if (!this.slug || this.slug.trim() === "") {
            if (this.title && this.title.trim() !== "") {
                this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
            }
        } else if (this.isModified("title") && this.title && this.title.trim() !== "") {
            // If title is modified, regenerate slug
            this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        }
        // Ensure slug is not empty (fallback) - this is critical for required field
        if (!this.slug || this.slug.trim() === "") {
            const timestamp = Date.now();
            const random = Math.random().toString(36).substring(2, 8);
            this.slug = `post-${timestamp}-${random}`;
        }
        // Ensure slug doesn't start or end with dash
        this.slug = this.slug.replace(/(^-|-$)/g, "");
        if (this.status === "published" && !this.publishedAt) {
            this.publishedAt = new Date();
        }
    } catch (error) {
        console.error("Error in pre-save hook:", error);
        // If slug generation fails, use timestamp-based fallback
        if (!this.slug || this.slug.trim() === "") {
            const timestamp = Date.now();
            const random = Math.random().toString(36).substring(2, 8);
            this.slug = `post-${timestamp}-${random}`;
        }
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Post || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Post", PostSchema);
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/models/User.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
;
;
const UserSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [
            'NORMAL_USER',
            'ADMIN'
        ],
        default: 'NORMAL_USER'
    },
    accountType: {
        type: String,
        enum: [
            'individual',
            'organization'
        ],
        default: 'individual'
    },
    organizationName: {
        type: String,
        default: null
    },
    organizationWebsite: {
        type: String,
        default: null
    },
    organizationDescription: {
        type: String,
        default: null
    },
    autoShareEnabled: {
        type: Boolean,
        default: false
    },
    socialMediaSettings: {
        facebook: {
            type: Boolean,
            default: false
        },
        twitter: {
            type: Boolean,
            default: false
        },
        instagram: {
            type: Boolean,
            default: false
        },
        linkedin: {
            type: Boolean,
            default: false
        },
        youtube: {
            type: Boolean,
            default: false
        }
    }
}, {
    timestamps: true
});
// Pre-save hook to hash password
UserSchema.pre("save", async function() {
    if (!this.isModified("password")) return;
    this.password = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(this.password, 10);
});
// Pre-save hook to ensure role is always set to NORMAL_USER for new users
// (unless explicitly set to ADMIN by authorized routes)
UserSchema.pre("save", async function() {
    // Only set default role if this is a new document and role is not already set
    if (this.isNew && !this.role) {
        this.role = "NORMAL_USER";
    }
    // Ensure role is valid enum value
    if (this.role && ![
        "NORMAL_USER",
        "ADMIN"
    ].includes(this.role)) {
        this.role = "NORMAL_USER";
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("User", UserSchema);
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/app/api/admin/categories/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$moongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/moongoose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Category$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/Category.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Post$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/Post.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/User.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
;
;
;
;
;
;
function getJWTSecret() {
    return process.env.JWT_SECRET || "your-secret-key-change-in-production";
}
// Middleware to check if user is ADMIN
async function checkAdmin(request) {
    const token = request.cookies.get("token")?.value;
    if (!token) {
        return {
            error: "Not authenticated",
            status: 401
        };
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$moongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConnected"])();
        const JWT_SECRET = getJWTSecret();
        const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(decoded.userId).select("-password");
        if (!user || user.role !== "ADMIN") {
            return {
                error: "Unauthorized - Admin access required",
                status: 403
            };
        }
        return {
            user
        };
    } catch (error) {
        return {
            error: "Not authenticated",
            status: 401
        };
    }
}
async function GET(request) {
    const authCheck = await checkAdmin(request);
    if (authCheck.error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: authCheck.error
        }, {
            status: authCheck.status
        });
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$moongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConnected"])();
        const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Category$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find().sort({
            name: 1
        });
        // Get post count for each category
        const categoriesWithCounts = await Promise.all(categories.map(async (category)=>{
            const postCount = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Post$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments({
                category: category.name
            });
            return {
                _id: category._id,
                name: category.name,
                slug: category.slug,
                description: category.description,
                postCount,
                createdAt: category.createdAt,
                updatedAt: category.updatedAt
            };
        }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            categories: categoriesWithCounts
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch categories"
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    const authCheck = await checkAdmin(request);
    if (authCheck.error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: authCheck.error
        }, {
            status: authCheck.status
        });
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$moongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConnected"])();
        const body = await request.json();
        const { name, description } = body;
        if (!name || name.trim() === "") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Category name is required"
            }, {
                status: 400
            });
        }
        // Check if category with same name already exists
        const existingCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Category$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            name: {
                $regex: new RegExp(`^${name.trim()}$`, "i")
            }
        });
        if (existingCategory) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Category with this name already exists"
            }, {
                status: 400
            });
        }
        const category = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Category$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
            name: name.trim(),
            description: description || ""
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            category,
            message: "Category created successfully"
        }, {
            status: 201
        });
    } catch (error) {
        console.error("Error creating category:", error);
        if (error.code === 11000) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Category with this name or slug already exists"
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to create category",
            details: error.message
        }, {
            status: 500
        });
    }
}
async function PUT(request) {
    const authCheck = await checkAdmin(request);
    if (authCheck.error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: authCheck.error
        }, {
            status: authCheck.status
        });
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$moongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConnected"])();
        const body = await request.json();
        const { categoryId, name, description } = body;
        if (!categoryId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Category ID is required"
            }, {
                status: 400
            });
        }
        const category = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Category$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(categoryId);
        if (!category) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Category not found"
            }, {
                status: 404
            });
        }
        // If name is being changed, check for duplicates
        if (name && name.trim() !== category.name) {
            const existingCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Category$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                name: {
                    $regex: new RegExp(`^${name.trim()}$`, "i")
                },
                _id: {
                    $ne: categoryId
                }
            });
            if (existingCategory) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Category with this name already exists"
                }, {
                    status: 400
                });
            }
        }
        // Update category
        if (name) category.name = name.trim();
        if (description !== undefined) category.description = description;
        await category.save();
        // If name changed, update all posts with this category
        if (name && name.trim() !== category.name) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Post$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].updateMany({
                category: category.name
            }, {
                $set: {
                    category: name.trim()
                }
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            category,
            message: "Category updated successfully"
        });
    } catch (error) {
        console.error("Error updating category:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to update category",
            details: error.message
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    const authCheck = await checkAdmin(request);
    if (authCheck.error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: authCheck.error
        }, {
            status: authCheck.status
        });
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$moongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConnected"])();
        const { searchParams } = new URL(request.url);
        const categoryId = searchParams.get("categoryId");
        if (!categoryId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Category ID is required"
            }, {
                status: 400
            });
        }
        const category = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Category$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(categoryId);
        if (!category) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Category not found"
            }, {
                status: 404
            });
        }
        // Check if category is used in any posts
        const postCount = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Post$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments({
            category: category.name
        });
        if (postCount > 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Cannot delete category. It is used in ${postCount} post(s). Please reassign or delete those posts first.`
            }, {
                status: 400
            });
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Category$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(categoryId);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Category deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting category:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to delete category",
            details: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__639e48ac._.js.map