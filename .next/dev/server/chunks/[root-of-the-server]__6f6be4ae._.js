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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/app/api/admin/post-requests/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$moongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/moongoose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Post$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/Post.js [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/models/User'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
;
;
;
;
;
function getJWTSecret() {
    return process.env.JWT_SECRET || "your-secret-key-change-in-production";
}
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
        const user = await User.findById(decoded.userId).select("-password");
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
        // Get all posts with pending status, excluding admin posts
        const posts = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Post$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
            status: "pending"
        }).populate("author", "name email role").sort({
            createdAt: -1
        }).select("title slug excerpt category featuredImage status author createdAt contentBlocks");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            posts
        });
    } catch (error) {
        console.error("Error fetching pending posts:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch pending posts",
            posts: []
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
        const body = await request.json();
        const { postId, action } = body;
        if (!postId || !action) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Post ID and action are required"
            }, {
                status: 400
            });
        }
        if (![
            "approve",
            "reject"
        ].includes(action)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid action. Use 'approve' or 'reject'"
            }, {
                status: 400
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$moongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConnected"])();
        if (action === "approve") {
            // Approve: Change status to published
            const post = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Post$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(postId, {
                $set: {
                    status: "published",
                    publishedAt: new Date()
                }
            }, {
                new: true
            }).populate("author", "name email");
            if (!post) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Post not found"
                }, {
                    status: 404
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                post,
                message: "Post approved and published successfully"
            });
        } else {
            // Reject: Change status to draft (or delete - but we'll keep it as draft)
            const post = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Post$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(postId, {
                $set: {
                    status: "draft"
                }
            }, {
                new: true
            }).populate("author", "name email");
            if (!post) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Post not found"
                }, {
                    status: 404
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                post,
                message: "Post rejected successfully"
            });
        }
    } catch (error) {
        console.error("Error updating post:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to update post"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6f6be4ae._.js.map