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
"[project]/models/Settings.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const SettingsSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    key: {
        type: String,
        required: true,
        unique: true
    },
    value: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed,
        required: true
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Settings || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Settings", SettingsSchema);
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
"[project]/app/api/settings/spotlight/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$moongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/moongoose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Settings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/Settings.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/models/User'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
function getJWTSecret() {
    return process.env.JWT_SECRET || "your-secret-key";
}
// Helper function to optimize post data
function optimizePostData(post) {
    if (!post || typeof post !== 'object') return post;
    const optimized = {
        _id: post._id,
        slug: post.slug,
        title: post.title,
        featuredImage: post.featuredImage,
        excerpt: post.excerpt,
        category: post.category,
        publishedAt: post.publishedAt
    };
    if (post.author) {
        if (typeof post.author === 'object' && post.author.name) {
            optimized.author = {
                name: post.author.name
            };
        } else if (typeof post.author === 'string') {
            optimized.author = post.author;
        } else {
            optimized.author = {
                name: 'Editorial Team'
            };
        }
    }
    return optimized;
}
async function GET() {
    try {
        const dbOperation = async ()=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$moongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConnected"])();
            // Use lean() for faster queries
            // Spotlight content and settings are stored as separate database entries
            const [spotlightContentData, spotlightSettingsData] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Settings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                    key: "homepageSpotlightContent"
                }).lean().maxTimeMS(3000),
                __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Settings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                    key: "homepageSpotlightSettings"
                }).lean().maxTimeMS(3000)
            ]);
            return {
                spotlightContentData,
                spotlightSettingsData
            };
        };
        // Reduced timeout to 5 seconds for faster failure
        const timeoutPromise = new Promise((_, reject)=>{
            setTimeout(()=>reject(new Error("Database operation timeout")), 5000);
        });
        const { spotlightContentData, spotlightSettingsData } = await Promise.race([
            dbOperation(),
            timeoutPromise
        ]);
        // Get spotlight content from separate database entry
        let spotlightContent = [];
        if (spotlightContentData?.value && Array.isArray(spotlightContentData.value)) {
            spotlightContent = spotlightContentData.value.map(optimizePostData);
        }
        // Get spotlight settings from separate database entry
        const spotlightSettings = spotlightSettingsData?.value || {
            title: "SpotLight",
            subtitle: "Featured Stories & Insights",
            showSection: true
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            spotlight: spotlightContent,
            settings: spotlightSettings
        }, {
            status: 200,
            headers: {
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120'
            }
        });
    } catch (error) {
        console.error("Error fetching spotlight section:", error);
        // Return empty data immediately on error
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            spotlight: [],
            settings: {
                title: "SpotLight",
                subtitle: "Featured Stories & Insights",
                showSection: true
            }
        }, {
            status: 200,
            headers: {
                'Cache-Control': 'no-store'
            }
        });
    }
}
async function PUT(request) {
    try {
        const body = await request.json();
        const { spotlight, settings } = body;
        // Verify authentication - check cookies first (like homepage API)
        const token = request.cookies.get("token")?.value;
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Not authenticated",
                message: "Please log in to save settings"
            }, {
                status: 401
            });
        }
        let decoded;
        try {
            decoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, getJWTSecret());
        } catch (error) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid token"
            }, {
                status: 401
            });
        }
        // Verify user is admin
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$moongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureConnected"])();
        const user = await User.findById(decoded.userId);
        if (!user || user.role !== "ADMIN") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Forbidden"
            }, {
                status: 403
            });
        }
        const saveOperation = async ()=>{
            const saveWithRetry = async (key, value, type, maxRetries = 2)=>{
                for(let attempt = 1; attempt <= maxRetries; attempt++){
                    try {
                        console.log(`💾 Saving ${type} to database... (Attempt ${attempt}/${maxRetries})`);
                        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Settings$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOneAndUpdate({
                            key
                        }, {
                            value
                        }, {
                            upsert: true,
                            new: true
                        }).maxTimeMS(15000);
                        console.log(`✅ ${type} saved to database`);
                        return result;
                    } catch (error) {
                        console.error(`❌ Failed to save ${type} to database (Attempt ${attempt}):`, error.message);
                        if (attempt === maxRetries) {
                            throw error;
                        }
                        await new Promise((resolve)=>setTimeout(resolve, 2000));
                    }
                }
            };
            // Save spotlight content
            if (spotlight !== undefined && spotlight !== null) {
                const optimizedSpotlight = Array.isArray(spotlight) ? spotlight.map(optimizePostData) : [];
                await saveWithRetry("homepageSpotlightContent", optimizedSpotlight, "spotlight content");
            }
            // Save spotlight settings separately to database (key: "homepageSpotlightSettings")
            if (settings !== undefined && settings !== null) {
                await saveWithRetry("homepageSpotlightSettings", settings, "spotlight settings");
            }
        };
        const timeoutPromise = new Promise((_, reject)=>{
            setTimeout(()=>reject(new Error("Database operation timeout")), 35000);
        });
        await Promise.race([
            saveOperation(),
            timeoutPromise
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Spotlight section saved successfully"
        });
    } catch (error) {
        console.error("Error saving spotlight section:", error);
        if (error.message?.includes("timeout")) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Request timed out",
                message: "The operation took too long. Please try again."
            }, {
                status: 504
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to save spotlight section",
            message: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3d8e9883._.js.map