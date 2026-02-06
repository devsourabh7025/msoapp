(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/ThemeContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Navbar() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userMenuOpen, setUserMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const userMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            checkAuth();
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleClickOutside = {
                "Navbar.useEffect.handleClickOutside": (event)=>{
                    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                        setUserMenuOpen(false);
                    }
                }
            }["Navbar.useEffect.handleClickOutside"];
            if (userMenuOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return ({
                "Navbar.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        userMenuOpen
    ]);
    const checkAuth = async ()=>{
        try {
            const response = await fetch("/api/auth/me");
            if (response.ok) {
                const data = await response.json();
                setUser(data.user);
            }
        } catch (error) {
            /* eslint-disable */ console.error(...oo_tx(`1334869887_63_6_63_48_11`, "Auth check failed:", error));
        } finally{
            setLoading(false);
        }
    };
    const handleLogout = async ()=>{
        try {
            await fetch("/api/logout", {
                method: "POST"
            });
            setUser(null);
            setUserMenuOpen(false);
            router.push("/");
            router.refresh();
        } catch (error) {
            /* eslint-disable */ console.error(...oo_tx(`1334869887_77_6_77_44_11`, "Logout failed:", error));
        }
    };
    const handleWritePost = ()=>{
        if (user) {
            if (user.role === "ADMIN") {
                router.push("/admin/add-post");
            } else {
                router.push("/user/create-post");
            }
        } else {
            router.push("/login");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full relative z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo.jpeg",
                                alt: "Logo",
                                width: 140,
                                height: 30,
                                priority: true,
                                className: "h-8 w-auto"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden lg:flex items-center gap-1 flex-1 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1",
                                            children: [
                                                "Startups",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 top-full mt-1 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 min-w-[200px] z-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/?category=startups",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Startup Stories"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/?category=success-stories",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Success Stories"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/?category=funding",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Funding & Investment"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/?category=incubators",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Incubators & Accelerators"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1",
                                            children: [
                                                "Resources",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 top-full mt-1 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 min-w-[200px] z-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/?category=guides",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Startup Guides"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/?category=tools",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Tools & Templates"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/?category=legal",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Legal & Compliance"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/?category=marketing",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Marketing & Growth"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1",
                                            children: [
                                                "Events",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 top-full mt-1 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 min-w-[200px] z-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/?category=workshops",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Workshops"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/?category=conferences",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Conferences"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 166,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/?category=networking",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Networking Events"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/?category=webinars",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Webinars"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1",
                                            children: [
                                                "Community",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 top-full mt-1 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 min-w-[200px] z-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/?category=mentorship",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Mentorship"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/?category=partnerships",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Partnerships"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 188,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/?category=forums",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Forums & Discussions"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/contact",
                                                    className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: "Contact Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    className: "px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleWritePost,
                                    className: "hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Write"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        ref: userMenuRef,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setUserMenuOpen(!userMenuOpen),
                                                className: "flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 233,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden md:inline",
                                                        children: user.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 234,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 235,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 229,
                                                columnNumber: 21
                                            }, this),
                                            userMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-4 py-3 border-b border-gray-200 dark:border-gray-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-gray-900 dark:text-white",
                                                                children: user.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Navbar.jsx",
                                                                lineNumber: 240,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                                children: user.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Navbar.jsx",
                                                                lineNumber: 243,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 239,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: user.role === "ADMIN" ? "/admin" : "/user",
                                                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                        onClick: ()=>setUserMenuOpen(false),
                                                        children: user.role === "ADMIN" ? "Admin Panel" : "User Panel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 245,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleLogout,
                                                        className: "w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Navbar.jsx",
                                                                lineNumber: 256,
                                                                columnNumber: 27
                                                            }, this),
                                                            "Logout"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 252,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 238,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 228,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        className: "px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors",
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 263,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleTheme,
                                    className: "p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                    "aria-label": "Toggle theme",
                                    children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 279,
                                        columnNumber: 35
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 279,
                                        columnNumber: 55
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:flex items-center gap-2 ml-2 pl-2 border-l border-gray-200 dark:border-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://facebook.com",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "p-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://twitter.com",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "p-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 288,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://youtube.com",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "p-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 290,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpen(!open),
                                    className: "lg:hidden p-2 text-gray-600 dark:text-gray-400",
                                    children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 300,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 300,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-4 space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            onClick: ()=>setOpen(false),
                            className: "block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 310,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(mobileMenuOpen === "STARTUPS" ? null : "STARTUPS"),
                                    className: "w-full flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Startups"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 324,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 16,
                                            className: mobileMenuOpen === "STARTUPS" ? "rotate-180" : ""
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this),
                                mobileMenuOpen === "STARTUPS" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pl-4 space-y-1 mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=startups",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Startup Stories"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 329,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=success-stories",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Success Stories"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 336,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=funding",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Funding & Investment"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 343,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=incubators",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Incubators & Accelerators"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 350,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 328,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 319,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(mobileMenuOpen === "RESOURCES" ? null : "RESOURCES"),
                                    className: "w-full flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Resources"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 367,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 16,
                                            className: mobileMenuOpen === "RESOURCES" ? "rotate-180" : ""
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 368,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 363,
                                    columnNumber: 15
                                }, this),
                                mobileMenuOpen === "RESOURCES" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pl-4 space-y-1 mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=guides",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Startup Guides"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 372,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=tools",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Tools & Templates"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 379,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=legal",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Legal & Compliance"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 386,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=marketing",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Marketing & Growth"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 393,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 371,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 362,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(mobileMenuOpen === "EVENTS" ? null : "EVENTS"),
                                    className: "w-full flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Events"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 410,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 16,
                                            className: mobileMenuOpen === "EVENTS" ? "rotate-180" : ""
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 411,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 406,
                                    columnNumber: 15
                                }, this),
                                mobileMenuOpen === "EVENTS" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pl-4 space-y-1 mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=workshops",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Workshops"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 415,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=conferences",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Conferences"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 422,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=networking",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Networking Events"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 429,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=webinars",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Webinars"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 436,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 414,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 405,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(mobileMenuOpen === "COMMUNITY" ? null : "COMMUNITY"),
                                    className: "w-full flex justify-between items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Community"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 16,
                                            className: mobileMenuOpen === "COMMUNITY" ? "rotate-180" : ""
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 454,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 449,
                                    columnNumber: 15
                                }, this),
                                mobileMenuOpen === "COMMUNITY" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pl-4 space-y-1 mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=mentorship",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Mentorship"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 458,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=partnerships",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Partnerships"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 465,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=forums",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Forums & Discussions"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 472,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 479,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 457,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 448,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/about",
                            onClick: ()=>setOpen(false),
                            className: "block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 490,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                handleWritePost();
                                setOpen(false);
                            },
                            className: "w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 505,
                                    columnNumber: 15
                                }, this),
                                "Write a Post"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 498,
                            columnNumber: 13
                        }, this),
                        !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 border-t border-gray-200 dark:border-gray-800 mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-gray-900 dark:text-white",
                                                children: user.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 514,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: user.email
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 515,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 513,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: user.role === "ADMIN" ? "/admin" : "/user",
                                        onClick: ()=>setOpen(false),
                                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                        children: user.role === "ADMIN" ? "Admin Panel" : "User Panel"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 517,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            handleLogout();
                                            setOpen(false);
                                        },
                                        className: "w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 524,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                onClick: ()=>setOpen(false),
                                className: "block px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 535,
                                columnNumber: 19
                            }, this)
                        }, void 0, false)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 309,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 308,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.jsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(Navbar, "x0Ged0eO7FKjKDkSea2TWcqanME=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Navbar;
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */ ;
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x5eb7(){var _0x5312cb=['3256wREwNO','negativeZero','startsWith','toUpperCase','NEGATIVE_INFINITY','defaultLimits','length','_connected','5kjcSVz','next.js','213606VniQVN','origin','bigint','_connecting','get','then','Symbol','Map','index','funcName','resetWhenQuietMs','_isMap','type','2241WiVaRR','object','warn','nodeModules','node','1768122339670','1284920DYQWdu','_hasMapOnItsPath','sortProps','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_setNodeLabel','now','hostname','POSITIVE_INFINITY','expressionsToEvaluate','4787388frDXrm','totalStrLength','','reduceOnCount','autoExpandLimit','_webSocketErrorDocsLink','50148,49172','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','_processTreeNodeResult','edge','_connectAttemptCount','_ws','\\x20server','logger\\x20websocket\\x20error','1437783aYwZoA','reduceLimits','unshift','unknown','onerror','replace','hrtime','_HTMLAllCollection','expId','console','reload','root_exp_id','parent','allStrLength','strLength','setter','sort','_console_ninja','_capIfString','root_exp','return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());','undefined','_type','_p_','_socket','_setNodeQueryPath','','log','port','_hasSetOnItsPath','capped','_p_name','host','reducedLimits','127.0.0.1','[object\\x20Set]','onmessage','value','_cleanNode','resolveGetters','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','substr','performance','autoExpandPreviousObjects','prototype','onopen','_allowedToSend','_getOwnPropertyNames','_treeNodePropertiesBeforeFullValue','indexOf','import(\\x27path\\x27)','slice','bind','_treeNodePropertiesAfterFullValue','constructor','[object\\x20Date]','perLogpoint','pop','_setNodeExpandableState','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','call','null','current','serialize','readyState','[object\\x20BigInt]','_getOwnPropertySymbols','_isSet','1078085AFsroT','autoExpand','count','trace','valueOf','isExpressionToEvaluate','_allowedToConnectOnSend','time','toLowerCase','gateway.docker.internal','path','hits','resolve','_additionalMetadata','fromCharCode','stack',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"DESKTOP-CB4372O\",\"192.168.137.1\",\"10.26.195.119\"],'next.js','_addProperty','_getOwnPropertyDescriptor','versions','symbol','close','_quotedRegExp','map','Set','default','NEXT_RUNTIME','Number','_inNextEdge','args','_sortProps','_ninjaIgnoreNextError','send','onclose','push','unref','error','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','33847uocYVR','process','getWebSocketClass','autoExpandPropertyCount','iterator','reducePolicy','_inBrowser','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','7710dhZant','toString','rootExpression','array','expo','_maxConnectAttemptCount','charAt','elements','eventReceivedCallback','forEach','_disposeWebsocket','_objectToString','modules','1.0.0','\\x20browser','Boolean','function','_WebSocket','env','reduceOnAccumulatedProcessingTimeMs','endsWith','Error','_extendedWarning','match','_isUndefined','positiveInfinity','_setNodePermissions','...','url','resetOnProcessingTimeAverageMs','getter','negativeInfinity','_blacklistedProperty','_Symbol','name','osName','Buffer','emulator','perf_hooks','[object\\x20Array]','stackTraceLimit','Promise','_WebSocketClass','cappedElements','_isNegativeZero','global','catch','_dateToString','noFunctions','_reconnectTimeout','_connectToHostNow','test','_setNodeId','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_addLoadNode','_sendErrorMessage','location','_consoleNinjaAllowedToStart','4OBrhKf','props','_hasSymbolPropertyOnItsPath','level','_isPrimitiveType','_isArray','dockerizedApp','includes','_setNodeExpressionPath','react-native','concat','coverage','HTMLAllCollection','1','_attemptToReconnectShortly','message','split','timeStamp','_console_ninja_session','number','disabledTrace','_property','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','_propertyName','_addObjectProperty','depth','String','_addFunctionsNode','data','_keyStrRegExp','getOwnPropertySymbols','autoExpandMaxDepth','ninjaSuppressConsole','_undefined','WebSocket','elapsed'];_0x5eb7=function(){return _0x5312cb;};return _0x5eb7();}var _0x548f0e=_0x49dd;(function(_0x3b8ea0,_0xb09101){var _0x276847=_0x49dd,_0x13198e=_0x3b8ea0();while(!![]){try{var _0xeebb23=-parseInt(_0x276847(0x130))/0x1*(parseInt(_0x276847(0x132))/0x2)+-parseInt(_0x276847(0x15c))/0x3+parseInt(_0x276847(0x20a))/0x4*(-parseInt(_0x276847(0x1a0))/0x5)+-parseInt(_0x276847(0x14e))/0x6+parseInt(_0x276847(0x145))/0x7+parseInt(_0x276847(0x128))/0x8*(-parseInt(_0x276847(0x13f))/0x9)+-parseInt(_0x276847(0x1cf))/0xa*(-parseInt(_0x276847(0x1c7))/0xb);if(_0xeebb23===_0xb09101)break;else _0x13198e['push'](_0x13198e['shift']());}catch(_0x3b433b){_0x13198e['push'](_0x13198e['shift']());}}}(_0x5eb7,0x68711));function z(_0x313b23,_0x229f6c,_0x11a6ff,_0x3283bf,_0x5f230b,_0x10232d){var _0xa85961=_0x49dd,_0x48df31,_0x291315,_0x559566,_0x37b425;this[_0xa85961(0x1fc)]=_0x313b23,this[_0xa85961(0x17c)]=_0x229f6c,this['port']=_0x11a6ff,this[_0xa85961(0x142)]=_0x3283bf,this[_0xa85961(0x10a)]=_0x5f230b,this[_0xa85961(0x1d7)]=_0x10232d,this['_allowedToSend']=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0xa85961(0x12f)]=!0x1,this[_0xa85961(0x135)]=!0x1,this[_0xa85961(0x1bd)]=((_0x291315=(_0x48df31=_0x313b23[_0xa85961(0x1c8)])==null?void 0x0:_0x48df31[_0xa85961(0x1e1)])==null?void 0x0:_0x291315[_0xa85961(0x1bb)])===_0xa85961(0x157),this[_0xa85961(0x1cd)]=!((_0x37b425=(_0x559566=this[_0xa85961(0x1fc)][_0xa85961(0x1c8)])==null?void 0x0:_0x559566[_0xa85961(0x1b4)])!=null&&_0x37b425['node'])&&!this[_0xa85961(0x1bd)],this[_0xa85961(0x1f9)]=null,this[_0xa85961(0x158)]=0x0,this['_maxConnectAttemptCount']=0x14,this['_webSocketErrorDocsLink']='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0xa85961(0x1cd)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0xa85961(0x1ce))+this['_webSocketErrorDocsLink'];}z[_0x548f0e(0x188)][_0x548f0e(0x1c9)]=async function(){var _0x16d2fc=_0x548f0e,_0x31fecd,_0x1f5c70;if(this[_0x16d2fc(0x1f9)])return this[_0x16d2fc(0x1f9)];let _0xfb36cd;if(this[_0x16d2fc(0x1cd)]||this['_inNextEdge'])_0xfb36cd=this[_0x16d2fc(0x1fc)][_0x16d2fc(0x126)];else{if((_0x31fecd=this[_0x16d2fc(0x1fc)][_0x16d2fc(0x1c8)])!=null&&_0x31fecd[_0x16d2fc(0x1e0)])_0xfb36cd=(_0x1f5c70=this[_0x16d2fc(0x1fc)][_0x16d2fc(0x1c8)])==null?void 0x0:_0x1f5c70[_0x16d2fc(0x1e0)];else try{_0xfb36cd=(await new Function(_0x16d2fc(0x1aa),_0x16d2fc(0x1eb),'nodeModules',_0x16d2fc(0x170))(await(0x0,eval)(_0x16d2fc(0x18e)),await(0x0,eval)('import(\\x27url\\x27)'),this[_0x16d2fc(0x142)]))[_0x16d2fc(0x1ba)];}catch{try{_0xfb36cd=require(require(_0x16d2fc(0x1aa))['join'](this[_0x16d2fc(0x142)],'ws'));}catch{throw new Error(_0x16d2fc(0x205));}}}return this[_0x16d2fc(0x1f9)]=_0xfb36cd,_0xfb36cd;},z[_0x548f0e(0x188)]['_connectToHostNow']=function(){var _0x3932b3=_0x548f0e;this[_0x3932b3(0x135)]||this[_0x3932b3(0x12f)]||this[_0x3932b3(0x158)]>=this[_0x3932b3(0x1d4)]||(this[_0x3932b3(0x1a6)]=!0x1,this[_0x3932b3(0x135)]=!0x0,this['_connectAttemptCount']++,this['_ws']=new Promise((_0x239dde,_0x309d9a)=>{var _0x4a4aeb=_0x3932b3;this[_0x4a4aeb(0x1c9)]()[_0x4a4aeb(0x137)](_0x23579d=>{var _0x29a84d=_0x4a4aeb;let _0x4019f0=new _0x23579d('ws://'+(!this[_0x29a84d(0x1cd)]&&this['dockerizedApp']?_0x29a84d(0x1a9):this['host'])+':'+this[_0x29a84d(0x178)]);_0x4019f0[_0x29a84d(0x160)]=()=>{var _0x4d456f=_0x29a84d;this['_allowedToSend']=!0x1,this[_0x4d456f(0x1d9)](_0x4019f0),this['_attemptToReconnectShortly'](),_0x309d9a(new Error(_0x4d456f(0x15b)));},_0x4019f0['onopen']=()=>{var _0x338227=_0x29a84d;this[_0x338227(0x1cd)]||_0x4019f0[_0x338227(0x174)]&&_0x4019f0[_0x338227(0x174)]['unref']&&_0x4019f0[_0x338227(0x174)][_0x338227(0x1c4)](),_0x239dde(_0x4019f0);},_0x4019f0[_0x29a84d(0x1c2)]=()=>{var _0x494a4c=_0x29a84d;this[_0x494a4c(0x1a6)]=!0x0,this[_0x494a4c(0x1d9)](_0x4019f0),this[_0x494a4c(0x112)]();},_0x4019f0[_0x29a84d(0x180)]=_0x3160ad=>{var _0x2bd4b5=_0x29a84d;try{if(!(_0x3160ad!=null&&_0x3160ad[_0x2bd4b5(0x120)])||!this[_0x2bd4b5(0x1d7)])return;let _0xbd6af=JSON['parse'](_0x3160ad[_0x2bd4b5(0x120)]);this['eventReceivedCallback'](_0xbd6af['method'],_0xbd6af[_0x2bd4b5(0x1be)],this['global'],this[_0x2bd4b5(0x1cd)]);}catch{}};})[_0x4a4aeb(0x137)](_0x1e115d=>(this[_0x4a4aeb(0x12f)]=!0x0,this[_0x4a4aeb(0x135)]=!0x1,this[_0x4a4aeb(0x1a6)]=!0x1,this[_0x4a4aeb(0x18a)]=!0x0,this['_connectAttemptCount']=0x0,_0x1e115d))[_0x4a4aeb(0x1fd)](_0x307016=>(this[_0x4a4aeb(0x12f)]=!0x1,this[_0x4a4aeb(0x135)]=!0x1,console[_0x4a4aeb(0x141)](_0x4a4aeb(0x148)+this[_0x4a4aeb(0x153)]),_0x309d9a(new Error(_0x4a4aeb(0x1c6)+(_0x307016&&_0x307016[_0x4a4aeb(0x113)])))));}));},z['prototype'][_0x548f0e(0x1d9)]=function(_0x583632){var _0x13adc4=_0x548f0e;this[_0x13adc4(0x12f)]=!0x1,this['_connecting']=!0x1;try{_0x583632[_0x13adc4(0x1c2)]=null,_0x583632[_0x13adc4(0x160)]=null,_0x583632[_0x13adc4(0x189)]=null;}catch{}try{_0x583632[_0x13adc4(0x19c)]<0x2&&_0x583632[_0x13adc4(0x1b6)]();}catch{}},z[_0x548f0e(0x188)][_0x548f0e(0x112)]=function(){var _0x5036a5=_0x548f0e;clearTimeout(this[_0x5036a5(0x200)]),!(this[_0x5036a5(0x158)]>=this[_0x5036a5(0x1d4)])&&(this[_0x5036a5(0x200)]=setTimeout(()=>{var _0x3cf797=_0x5036a5,_0x15c27f;this[_0x3cf797(0x12f)]||this[_0x3cf797(0x135)]||(this[_0x3cf797(0x201)](),(_0x15c27f=this['_ws'])==null||_0x15c27f[_0x3cf797(0x1fd)](()=>this[_0x3cf797(0x112)]()));},0x1f4),this['_reconnectTimeout']['unref']&&this[_0x5036a5(0x200)][_0x5036a5(0x1c4)]());},z[_0x548f0e(0x188)][_0x548f0e(0x1c1)]=async function(_0x3246fb){var _0x3a41c5=_0x548f0e;try{if(!this[_0x3a41c5(0x18a)])return;this[_0x3a41c5(0x1a6)]&&this[_0x3a41c5(0x201)](),(await this[_0x3a41c5(0x159)])[_0x3a41c5(0x1c1)](JSON['stringify'](_0x3246fb));}catch(_0x2c0162){this[_0x3a41c5(0x1e5)]?console['warn'](this[_0x3a41c5(0x207)]+':\\x20'+(_0x2c0162&&_0x2c0162[_0x3a41c5(0x113)])):(this[_0x3a41c5(0x1e5)]=!0x0,console[_0x3a41c5(0x141)](this[_0x3a41c5(0x207)]+':\\x20'+(_0x2c0162&&_0x2c0162['message']),_0x3246fb)),this[_0x3a41c5(0x18a)]=!0x1,this[_0x3a41c5(0x112)]();}};function H(_0x708fe1,_0x3ad9bb,_0x1f357c,_0x5c3d72,_0x57da2a,_0x8bfd1c,_0x547194,_0x427ae0=ne){var _0x35b9cb=_0x548f0e;let _0x1a1b39=_0x1f357c[_0x35b9cb(0x114)](',')['map'](_0x1779fe=>{var _0x75e4e5=_0x35b9cb,_0x1c1066,_0x27d331,_0x28e1f6,_0xbdba49,_0x48a083,_0x3e9b5c,_0x282392,_0x1fe787;try{if(!_0x708fe1[_0x75e4e5(0x116)]){let _0x786a32=((_0x27d331=(_0x1c1066=_0x708fe1[_0x75e4e5(0x1c8)])==null?void 0x0:_0x1c1066[_0x75e4e5(0x1b4)])==null?void 0x0:_0x27d331[_0x75e4e5(0x143)])||((_0xbdba49=(_0x28e1f6=_0x708fe1['process'])==null?void 0x0:_0x28e1f6[_0x75e4e5(0x1e1)])==null?void 0x0:_0xbdba49[_0x75e4e5(0x1bb)])===_0x75e4e5(0x157);(_0x57da2a===_0x75e4e5(0x1b1)||_0x57da2a==='remix'||_0x57da2a==='astro'||_0x57da2a==='angular')&&(_0x57da2a+=_0x786a32?_0x75e4e5(0x15a):_0x75e4e5(0x1dd));let _0x4af9b3='';_0x57da2a===_0x75e4e5(0x10d)&&(_0x4af9b3=(((_0x282392=(_0x3e9b5c=(_0x48a083=_0x708fe1[_0x75e4e5(0x1d3)])==null?void 0x0:_0x48a083[_0x75e4e5(0x1db)])==null?void 0x0:_0x3e9b5c['ExpoDevice'])==null?void 0x0:_0x282392[_0x75e4e5(0x1f2)])||_0x75e4e5(0x1f4))[_0x75e4e5(0x1a8)](),_0x4af9b3&&(_0x57da2a+='\\x20'+_0x4af9b3,(_0x4af9b3==='android'||_0x4af9b3==='emulator'&&((_0x1fe787=_0x708fe1[_0x75e4e5(0x208)])==null?void 0x0:_0x1fe787[_0x75e4e5(0x14b)])==='10.0.2.2')&&(_0x3ad9bb='10.0.2.2'))),_0x708fe1[_0x75e4e5(0x116)]={'id':+new Date(),'tool':_0x57da2a},_0x547194&&_0x57da2a&&!_0x786a32&&(_0x4af9b3?console[_0x75e4e5(0x177)]('Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20'+_0x4af9b3+',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.'):console[_0x75e4e5(0x177)](_0x75e4e5(0x197)+(_0x57da2a[_0x75e4e5(0x1d5)](0x0)[_0x75e4e5(0x12b)]()+_0x57da2a['substr'](0x1))+',',_0x75e4e5(0x155),_0x75e4e5(0x11a)));}let _0x229d61=new z(_0x708fe1,_0x3ad9bb,_0x1779fe,_0x5c3d72,_0x8bfd1c,_0x427ae0);return _0x229d61[_0x75e4e5(0x1c1)][_0x75e4e5(0x190)](_0x229d61);}catch(_0x207f65){return console[_0x75e4e5(0x141)](_0x75e4e5(0x184),_0x207f65&&_0x207f65[_0x75e4e5(0x113)]),()=>{};}});return _0x3ca2fe=>_0x1a1b39['forEach'](_0x570669=>_0x570669(_0x3ca2fe));}function ne(_0xfba01b,_0x5795ac,_0x526e6d,_0x23f0bc){var _0x88e87e=_0x548f0e;_0x23f0bc&&_0xfba01b===_0x88e87e(0x166)&&_0x526e6d[_0x88e87e(0x208)][_0x88e87e(0x166)]();}function b(_0x1c035d){var _0x33fbbc=_0x548f0e,_0x38efc3,_0xd2aec9;let _0x2a75b9=function(_0x448dbf,_0x3bc12f){return _0x3bc12f-_0x448dbf;},_0x22bb27;if(_0x1c035d[_0x33fbbc(0x186)])_0x22bb27=function(){var _0x5310e0=_0x33fbbc;return _0x1c035d[_0x5310e0(0x186)][_0x5310e0(0x14a)]();};else{if(_0x1c035d[_0x33fbbc(0x1c8)]&&_0x1c035d['process'][_0x33fbbc(0x162)]&&((_0xd2aec9=(_0x38efc3=_0x1c035d['process'])==null?void 0x0:_0x38efc3[_0x33fbbc(0x1e1)])==null?void 0x0:_0xd2aec9[_0x33fbbc(0x1bb)])!==_0x33fbbc(0x157))_0x22bb27=function(){var _0x4e9093=_0x33fbbc;return _0x1c035d['process'][_0x4e9093(0x162)]();},_0x2a75b9=function(_0x3c76d8,_0x527272){return 0x3e8*(_0x527272[0x0]-_0x3c76d8[0x0])+(_0x527272[0x1]-_0x3c76d8[0x1])/0xf4240;};else try{let {performance:_0x3d6831}=require(_0x33fbbc(0x1f5));_0x22bb27=function(){return _0x3d6831['now']();};}catch{_0x22bb27=function(){return+new Date();};}}return{'elapsed':_0x2a75b9,'timeStamp':_0x22bb27,'now':()=>Date['now']()};}function X(_0x3759c2,_0x327f60,_0x4ef84f){var _0x3c31ac=_0x548f0e,_0xa92efe,_0x3de67f,_0x8ece1a,_0x16959d,_0x5c93bf,_0x3ba4cf,_0x41f351;if(_0x3759c2[_0x3c31ac(0x209)]!==void 0x0)return _0x3759c2[_0x3c31ac(0x209)];let _0x5474b8=((_0x3de67f=(_0xa92efe=_0x3759c2[_0x3c31ac(0x1c8)])==null?void 0x0:_0xa92efe[_0x3c31ac(0x1b4)])==null?void 0x0:_0x3de67f[_0x3c31ac(0x143)])||((_0x16959d=(_0x8ece1a=_0x3759c2[_0x3c31ac(0x1c8)])==null?void 0x0:_0x8ece1a['env'])==null?void 0x0:_0x16959d[_0x3c31ac(0x1bb)])===_0x3c31ac(0x157),_0x2e5086=!!(_0x4ef84f===_0x3c31ac(0x10d)&&((_0x5c93bf=_0x3759c2[_0x3c31ac(0x1d3)])==null?void 0x0:_0x5c93bf['modules']));function _0x165bf6(_0x327d5a){var _0x2198ff=_0x3c31ac;if(_0x327d5a[_0x2198ff(0x12a)]('/')&&_0x327d5a[_0x2198ff(0x1e3)]('/')){let _0x4ee469=new RegExp(_0x327d5a[_0x2198ff(0x18f)](0x1,-0x1));return _0x1a743c=>_0x4ee469[_0x2198ff(0x202)](_0x1a743c);}else{if(_0x327d5a[_0x2198ff(0x10b)]('*')||_0x327d5a[_0x2198ff(0x10b)]('?')){let _0x3c6f9e=new RegExp('^'+_0x327d5a[_0x2198ff(0x161)](/\\./g,String[_0x2198ff(0x1ae)](0x5c)+'.')['replace'](/\\*/g,'.*')[_0x2198ff(0x161)](/\\?/g,'.')+String[_0x2198ff(0x1ae)](0x24));return _0x1ed757=>_0x3c6f9e[_0x2198ff(0x202)](_0x1ed757);}else return _0x934f30=>_0x934f30===_0x327d5a;}}let _0x276fbc=_0x327f60[_0x3c31ac(0x1b8)](_0x165bf6);return _0x3759c2['_consoleNinjaAllowedToStart']=_0x5474b8||!_0x327f60,!_0x3759c2['_consoleNinjaAllowedToStart']&&((_0x3ba4cf=_0x3759c2[_0x3c31ac(0x208)])==null?void 0x0:_0x3ba4cf[_0x3c31ac(0x14b)])&&(_0x3759c2['_consoleNinjaAllowedToStart']=_0x276fbc['some'](_0x593d63=>_0x593d63(_0x3759c2[_0x3c31ac(0x208)][_0x3c31ac(0x14b)]))),_0x2e5086&&!_0x3759c2[_0x3c31ac(0x209)]&&!((_0x41f351=_0x3759c2[_0x3c31ac(0x208)])!=null&&_0x41f351[_0x3c31ac(0x14b)])&&(_0x3759c2[_0x3c31ac(0x209)]=!0x0),_0x3759c2[_0x3c31ac(0x209)];}function J(_0x2011df,_0x5af1c4,_0x1caee6,_0x2bde9f,_0x3f83e7,_0x1e8675){var _0x19fb99=_0x548f0e;_0x2011df=_0x2011df,_0x5af1c4=_0x5af1c4,_0x1caee6=_0x1caee6,_0x2bde9f=_0x2bde9f,_0x3f83e7=_0x3f83e7,_0x3f83e7=_0x3f83e7||{},_0x3f83e7[_0x19fb99(0x12d)]=_0x3f83e7[_0x19fb99(0x12d)]||{},_0x3f83e7[_0x19fb99(0x17d)]=_0x3f83e7[_0x19fb99(0x17d)]||{},_0x3f83e7[_0x19fb99(0x1cc)]=_0x3f83e7['reducePolicy']||{},_0x3f83e7['reducePolicy'][_0x19fb99(0x194)]=_0x3f83e7['reducePolicy'][_0x19fb99(0x194)]||{},_0x3f83e7[_0x19fb99(0x1cc)][_0x19fb99(0x1fc)]=_0x3f83e7[_0x19fb99(0x1cc)][_0x19fb99(0x1fc)]||{};let _0x10a276={'perLogpoint':{'reduceOnCount':_0x3f83e7[_0x19fb99(0x1cc)][_0x19fb99(0x194)][_0x19fb99(0x151)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x3f83e7['reducePolicy']['perLogpoint'][_0x19fb99(0x1e2)]||0x64,'resetWhenQuietMs':_0x3f83e7[_0x19fb99(0x1cc)]['perLogpoint'][_0x19fb99(0x13c)]||0x1f4,'resetOnProcessingTimeAverageMs':_0x3f83e7[_0x19fb99(0x1cc)][_0x19fb99(0x194)][_0x19fb99(0x1ec)]||0x64},'global':{'reduceOnCount':_0x3f83e7[_0x19fb99(0x1cc)][_0x19fb99(0x1fc)][_0x19fb99(0x151)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x3f83e7[_0x19fb99(0x1cc)][_0x19fb99(0x1fc)][_0x19fb99(0x1e2)]||0x12c,'resetWhenQuietMs':_0x3f83e7[_0x19fb99(0x1cc)][_0x19fb99(0x1fc)][_0x19fb99(0x13c)]||0x32,'resetOnProcessingTimeAverageMs':_0x3f83e7['reducePolicy'][_0x19fb99(0x1fc)]['resetOnProcessingTimeAverageMs']||0x64}},_0x3528bb=b(_0x2011df),_0x5e742b=_0x3528bb[_0x19fb99(0x127)],_0x1e8773=_0x3528bb[_0x19fb99(0x115)];function _0x3b798c(){var _0xf88f94=_0x19fb99;this[_0xf88f94(0x121)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0xf88f94(0x1b7)]=/'([^\\\\']|\\\\')*'/,this[_0xf88f94(0x125)]=_0x2011df[_0xf88f94(0x171)],this[_0xf88f94(0x163)]=_0x2011df[_0xf88f94(0x110)],this[_0xf88f94(0x1b3)]=Object['getOwnPropertyDescriptor'],this[_0xf88f94(0x18b)]=Object['getOwnPropertyNames'],this[_0xf88f94(0x1f0)]=_0x2011df[_0xf88f94(0x138)],this['_regExpToString']=RegExp[_0xf88f94(0x188)]['toString'],this[_0xf88f94(0x1fe)]=Date[_0xf88f94(0x188)][_0xf88f94(0x1d0)];}_0x3b798c[_0x19fb99(0x188)]['serialize']=function(_0x216611,_0x5eff3c,_0x98d4f7,_0x591bd8){var _0x17b51c=_0x19fb99,_0x5097e6=this,_0x4ddf1a=_0x98d4f7['autoExpand'];function _0x2cf396(_0xa9d4ec,_0x4b33f3,_0x5bb97d){var _0x3f82bf=_0x49dd;_0x4b33f3[_0x3f82bf(0x13e)]=_0x3f82bf(0x15f),_0x4b33f3[_0x3f82bf(0x1c5)]=_0xa9d4ec[_0x3f82bf(0x113)],_0x158ad2=_0x5bb97d[_0x3f82bf(0x143)][_0x3f82bf(0x19a)],_0x5bb97d[_0x3f82bf(0x143)][_0x3f82bf(0x19a)]=_0x4b33f3,_0x5097e6[_0x3f82bf(0x18c)](_0x4b33f3,_0x5bb97d);}let _0x4268a1,_0x4a8d20,_0xfbbae=_0x2011df[_0x17b51c(0x124)];_0x2011df[_0x17b51c(0x124)]=!0x0,_0x2011df[_0x17b51c(0x165)]&&(_0x4268a1=_0x2011df[_0x17b51c(0x165)][_0x17b51c(0x1c5)],_0x4a8d20=_0x2011df[_0x17b51c(0x165)][_0x17b51c(0x141)],_0x4268a1&&(_0x2011df[_0x17b51c(0x165)][_0x17b51c(0x1c5)]=function(){}),_0x4a8d20&&(_0x2011df[_0x17b51c(0x165)][_0x17b51c(0x141)]=function(){}));try{try{_0x98d4f7[_0x17b51c(0x107)]++,_0x98d4f7[_0x17b51c(0x1a1)]&&_0x98d4f7['autoExpandPreviousObjects'][_0x17b51c(0x1c3)](_0x5eff3c);var _0xaaa11d,_0x5c63f2,_0x231fa2,_0x3f03a6,_0x44c1a5=[],_0x7e4f4a=[],_0x348545,_0x4cc2e9=this[_0x17b51c(0x172)](_0x5eff3c),_0x133a1d=_0x4cc2e9==='array',_0x3478d3=!0x1,_0x459df2=_0x4cc2e9==='function',_0x454d51=this[_0x17b51c(0x108)](_0x4cc2e9),_0x563084=this['_isPrimitiveWrapperType'](_0x4cc2e9),_0x320d3c=_0x454d51||_0x563084,_0x5529b5={},_0x542ce0=0x0,_0x423abb=!0x1,_0x158ad2,_0x13010c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x98d4f7[_0x17b51c(0x11d)]){if(_0x133a1d){if(_0x5c63f2=_0x5eff3c['length'],_0x5c63f2>_0x98d4f7[_0x17b51c(0x1d6)]){for(_0x231fa2=0x0,_0x3f03a6=_0x98d4f7['elements'],_0xaaa11d=_0x231fa2;_0xaaa11d<_0x3f03a6;_0xaaa11d++)_0x7e4f4a[_0x17b51c(0x1c3)](_0x5097e6[_0x17b51c(0x1b2)](_0x44c1a5,_0x5eff3c,_0x4cc2e9,_0xaaa11d,_0x98d4f7));_0x216611[_0x17b51c(0x1fa)]=!0x0;}else{for(_0x231fa2=0x0,_0x3f03a6=_0x5c63f2,_0xaaa11d=_0x231fa2;_0xaaa11d<_0x3f03a6;_0xaaa11d++)_0x7e4f4a[_0x17b51c(0x1c3)](_0x5097e6[_0x17b51c(0x1b2)](_0x44c1a5,_0x5eff3c,_0x4cc2e9,_0xaaa11d,_0x98d4f7));}_0x98d4f7[_0x17b51c(0x1ca)]+=_0x7e4f4a[_0x17b51c(0x12e)];}if(!(_0x4cc2e9===_0x17b51c(0x199)||_0x4cc2e9===_0x17b51c(0x171))&&!_0x454d51&&_0x4cc2e9!==_0x17b51c(0x11e)&&_0x4cc2e9!==_0x17b51c(0x1f3)&&_0x4cc2e9!==_0x17b51c(0x134)){var _0x13bdc7=_0x591bd8[_0x17b51c(0x20b)]||_0x98d4f7[_0x17b51c(0x20b)];if(this['_isSet'](_0x5eff3c)?(_0xaaa11d=0x0,_0x5eff3c['forEach'](function(_0x4e268b){var _0x1aa76f=_0x17b51c;if(_0x542ce0++,_0x98d4f7['autoExpandPropertyCount']++,_0x542ce0>_0x13bdc7){_0x423abb=!0x0;return;}if(!_0x98d4f7[_0x1aa76f(0x1a5)]&&_0x98d4f7[_0x1aa76f(0x1a1)]&&_0x98d4f7[_0x1aa76f(0x1ca)]>_0x98d4f7[_0x1aa76f(0x152)]){_0x423abb=!0x0;return;}_0x7e4f4a[_0x1aa76f(0x1c3)](_0x5097e6['_addProperty'](_0x44c1a5,_0x5eff3c,_0x1aa76f(0x1b9),_0xaaa11d++,_0x98d4f7,function(_0x56afe8){return function(){return _0x56afe8;};}(_0x4e268b)));})):this[_0x17b51c(0x13d)](_0x5eff3c)&&_0x5eff3c[_0x17b51c(0x1d8)](function(_0x4b4368,_0x4a5cce){var _0x3f9993=_0x17b51c;if(_0x542ce0++,_0x98d4f7['autoExpandPropertyCount']++,_0x542ce0>_0x13bdc7){_0x423abb=!0x0;return;}if(!_0x98d4f7[_0x3f9993(0x1a5)]&&_0x98d4f7[_0x3f9993(0x1a1)]&&_0x98d4f7['autoExpandPropertyCount']>_0x98d4f7[_0x3f9993(0x152)]){_0x423abb=!0x0;return;}var _0xab791b=_0x4a5cce['toString']();_0xab791b[_0x3f9993(0x12e)]>0x64&&(_0xab791b=_0xab791b['slice'](0x0,0x64)+_0x3f9993(0x1ea)),_0x7e4f4a[_0x3f9993(0x1c3)](_0x5097e6[_0x3f9993(0x1b2)](_0x44c1a5,_0x5eff3c,_0x3f9993(0x139),_0xab791b,_0x98d4f7,function(_0x2460ca){return function(){return _0x2460ca;};}(_0x4b4368)));}),!_0x3478d3){try{for(_0x348545 in _0x5eff3c)if(!(_0x133a1d&&_0x13010c['test'](_0x348545))&&!this[_0x17b51c(0x1ef)](_0x5eff3c,_0x348545,_0x98d4f7)){if(_0x542ce0++,_0x98d4f7[_0x17b51c(0x1ca)]++,_0x542ce0>_0x13bdc7){_0x423abb=!0x0;break;}if(!_0x98d4f7[_0x17b51c(0x1a5)]&&_0x98d4f7[_0x17b51c(0x1a1)]&&_0x98d4f7[_0x17b51c(0x1ca)]>_0x98d4f7[_0x17b51c(0x152)]){_0x423abb=!0x0;break;}_0x7e4f4a[_0x17b51c(0x1c3)](_0x5097e6[_0x17b51c(0x11c)](_0x44c1a5,_0x5529b5,_0x5eff3c,_0x4cc2e9,_0x348545,_0x98d4f7));}}catch{}if(_0x5529b5['_p_length']=!0x0,_0x459df2&&(_0x5529b5[_0x17b51c(0x17b)]=!0x0),!_0x423abb){var _0x516950=[][_0x17b51c(0x10e)](this[_0x17b51c(0x18b)](_0x5eff3c))['concat'](this[_0x17b51c(0x19e)](_0x5eff3c));for(_0xaaa11d=0x0,_0x5c63f2=_0x516950[_0x17b51c(0x12e)];_0xaaa11d<_0x5c63f2;_0xaaa11d++)if(_0x348545=_0x516950[_0xaaa11d],!(_0x133a1d&&_0x13010c[_0x17b51c(0x202)](_0x348545['toString']()))&&!this[_0x17b51c(0x1ef)](_0x5eff3c,_0x348545,_0x98d4f7)&&!_0x5529b5[typeof _0x348545!=_0x17b51c(0x1b5)?_0x17b51c(0x173)+_0x348545['toString']():_0x348545]){if(_0x542ce0++,_0x98d4f7[_0x17b51c(0x1ca)]++,_0x542ce0>_0x13bdc7){_0x423abb=!0x0;break;}if(!_0x98d4f7['isExpressionToEvaluate']&&_0x98d4f7[_0x17b51c(0x1a1)]&&_0x98d4f7[_0x17b51c(0x1ca)]>_0x98d4f7[_0x17b51c(0x152)]){_0x423abb=!0x0;break;}_0x7e4f4a[_0x17b51c(0x1c3)](_0x5097e6[_0x17b51c(0x11c)](_0x44c1a5,_0x5529b5,_0x5eff3c,_0x4cc2e9,_0x348545,_0x98d4f7));}}}}}if(_0x216611['type']=_0x4cc2e9,_0x320d3c?(_0x216611[_0x17b51c(0x181)]=_0x5eff3c[_0x17b51c(0x1a4)](),this[_0x17b51c(0x16e)](_0x4cc2e9,_0x216611,_0x98d4f7,_0x591bd8)):_0x4cc2e9==='date'?_0x216611[_0x17b51c(0x181)]=this[_0x17b51c(0x1fe)][_0x17b51c(0x198)](_0x5eff3c):_0x4cc2e9===_0x17b51c(0x134)?_0x216611['value']=_0x5eff3c[_0x17b51c(0x1d0)]():_0x4cc2e9==='RegExp'?_0x216611[_0x17b51c(0x181)]=this['_regExpToString'][_0x17b51c(0x198)](_0x5eff3c):_0x4cc2e9===_0x17b51c(0x1b5)&&this[_0x17b51c(0x1f0)]?_0x216611[_0x17b51c(0x181)]=this[_0x17b51c(0x1f0)][_0x17b51c(0x188)][_0x17b51c(0x1d0)][_0x17b51c(0x198)](_0x5eff3c):!_0x98d4f7[_0x17b51c(0x11d)]&&!(_0x4cc2e9===_0x17b51c(0x199)||_0x4cc2e9==='undefined')&&(delete _0x216611['value'],_0x216611[_0x17b51c(0x17a)]=!0x0),_0x423abb&&(_0x216611['cappedProps']=!0x0),_0x158ad2=_0x98d4f7[_0x17b51c(0x143)]['current'],_0x98d4f7[_0x17b51c(0x143)][_0x17b51c(0x19a)]=_0x216611,this[_0x17b51c(0x18c)](_0x216611,_0x98d4f7),_0x7e4f4a[_0x17b51c(0x12e)]){for(_0xaaa11d=0x0,_0x5c63f2=_0x7e4f4a[_0x17b51c(0x12e)];_0xaaa11d<_0x5c63f2;_0xaaa11d++)_0x7e4f4a[_0xaaa11d](_0xaaa11d);}_0x44c1a5[_0x17b51c(0x12e)]&&(_0x216611['props']=_0x44c1a5);}catch(_0x584964){_0x2cf396(_0x584964,_0x216611,_0x98d4f7);}this['_additionalMetadata'](_0x5eff3c,_0x216611),this[_0x17b51c(0x191)](_0x216611,_0x98d4f7),_0x98d4f7[_0x17b51c(0x143)][_0x17b51c(0x19a)]=_0x158ad2,_0x98d4f7['level']--,_0x98d4f7[_0x17b51c(0x1a1)]=_0x4ddf1a,_0x98d4f7['autoExpand']&&_0x98d4f7[_0x17b51c(0x187)][_0x17b51c(0x195)]();}finally{_0x4268a1&&(_0x2011df[_0x17b51c(0x165)]['error']=_0x4268a1),_0x4a8d20&&(_0x2011df['console'][_0x17b51c(0x141)]=_0x4a8d20),_0x2011df[_0x17b51c(0x124)]=_0xfbbae;}return _0x216611;},_0x3b798c[_0x19fb99(0x188)]['_getOwnPropertySymbols']=function(_0x4c28a7){var _0xd2148d=_0x19fb99;return Object[_0xd2148d(0x122)]?Object[_0xd2148d(0x122)](_0x4c28a7):[];},_0x3b798c['prototype'][_0x19fb99(0x19f)]=function(_0x27432c){var _0x117f9a=_0x19fb99;return!!(_0x27432c&&_0x2011df['Set']&&this[_0x117f9a(0x1da)](_0x27432c)===_0x117f9a(0x17f)&&_0x27432c[_0x117f9a(0x1d8)]);},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x1ef)]=function(_0x327172,_0x1bf02d,_0x68c506){var _0x42d895=_0x19fb99;if(!_0x68c506[_0x42d895(0x183)]){let _0x31f3c6=this[_0x42d895(0x1b3)](_0x327172,_0x1bf02d);if(_0x31f3c6&&_0x31f3c6[_0x42d895(0x136)])return!0x0;}return _0x68c506[_0x42d895(0x1ff)]?typeof _0x327172[_0x1bf02d]==_0x42d895(0x1df):!0x1;},_0x3b798c['prototype'][_0x19fb99(0x172)]=function(_0x4b4ff7){var _0x89a987=_0x19fb99,_0x2df42a='';return _0x2df42a=typeof _0x4b4ff7,_0x2df42a===_0x89a987(0x140)?this[_0x89a987(0x1da)](_0x4b4ff7)==='[object\\x20Array]'?_0x2df42a=_0x89a987(0x1d2):this[_0x89a987(0x1da)](_0x4b4ff7)===_0x89a987(0x193)?_0x2df42a='date':this[_0x89a987(0x1da)](_0x4b4ff7)===_0x89a987(0x19d)?_0x2df42a='bigint':_0x4b4ff7===null?_0x2df42a=_0x89a987(0x199):_0x4b4ff7[_0x89a987(0x192)]&&(_0x2df42a=_0x4b4ff7[_0x89a987(0x192)][_0x89a987(0x1f1)]||_0x2df42a):_0x2df42a==='undefined'&&this[_0x89a987(0x163)]&&_0x4b4ff7 instanceof this['_HTMLAllCollection']&&(_0x2df42a='HTMLAllCollection'),_0x2df42a;},_0x3b798c[_0x19fb99(0x188)]['_objectToString']=function(_0x4ea4a3){var _0xe65ac2=_0x19fb99;return Object[_0xe65ac2(0x188)][_0xe65ac2(0x1d0)]['call'](_0x4ea4a3);},_0x3b798c['prototype'][_0x19fb99(0x108)]=function(_0x486186){var _0x59de18=_0x19fb99;return _0x486186==='boolean'||_0x486186===_0x59de18(0x204)||_0x486186==='number';},_0x3b798c[_0x19fb99(0x188)]['_isPrimitiveWrapperType']=function(_0x57b53f){var _0x3d404c=_0x19fb99;return _0x57b53f===_0x3d404c(0x1de)||_0x57b53f==='String'||_0x57b53f===_0x3d404c(0x1bc);},_0x3b798c['prototype'][_0x19fb99(0x1b2)]=function(_0x51d7e9,_0x36fff9,_0x538d0c,_0x32ddbe,_0x10ecad,_0x6db116){var _0x327fee=this;return function(_0x5f212a){var _0x45776a=_0x49dd,_0x480d1e=_0x10ecad[_0x45776a(0x143)][_0x45776a(0x19a)],_0x2270b6=_0x10ecad['node']['index'],_0x3242a9=_0x10ecad['node']['parent'];_0x10ecad[_0x45776a(0x143)][_0x45776a(0x168)]=_0x480d1e,_0x10ecad[_0x45776a(0x143)][_0x45776a(0x13a)]=typeof _0x32ddbe=='number'?_0x32ddbe:_0x5f212a,_0x51d7e9[_0x45776a(0x1c3)](_0x327fee[_0x45776a(0x119)](_0x36fff9,_0x538d0c,_0x32ddbe,_0x10ecad,_0x6db116)),_0x10ecad['node'][_0x45776a(0x168)]=_0x3242a9,_0x10ecad['node'][_0x45776a(0x13a)]=_0x2270b6;};},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x11c)]=function(_0x4fff24,_0xf060cd,_0x35b969,_0x52eeb1,_0x46c20e,_0x2e08a7,_0x388c5d){var _0x11f0a7=_0x19fb99,_0x261b2c=this;return _0xf060cd[typeof _0x46c20e!=_0x11f0a7(0x1b5)?_0x11f0a7(0x173)+_0x46c20e[_0x11f0a7(0x1d0)]():_0x46c20e]=!0x0,function(_0x3a475e){var _0x2f5d31=_0x11f0a7,_0x2b9d6c=_0x2e08a7[_0x2f5d31(0x143)]['current'],_0x4b248b=_0x2e08a7[_0x2f5d31(0x143)][_0x2f5d31(0x13a)],_0xbed829=_0x2e08a7['node']['parent'];_0x2e08a7[_0x2f5d31(0x143)][_0x2f5d31(0x168)]=_0x2b9d6c,_0x2e08a7[_0x2f5d31(0x143)][_0x2f5d31(0x13a)]=_0x3a475e,_0x4fff24[_0x2f5d31(0x1c3)](_0x261b2c[_0x2f5d31(0x119)](_0x35b969,_0x52eeb1,_0x46c20e,_0x2e08a7,_0x388c5d)),_0x2e08a7[_0x2f5d31(0x143)][_0x2f5d31(0x168)]=_0xbed829,_0x2e08a7[_0x2f5d31(0x143)][_0x2f5d31(0x13a)]=_0x4b248b;};},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x119)]=function(_0x1bf49f,_0x10ac96,_0x57dfa6,_0xee7322,_0x598c3f){var _0x326486=_0x19fb99,_0x57fd55=this;_0x598c3f||(_0x598c3f=function(_0x46b469,_0x55c36d){return _0x46b469[_0x55c36d];});var _0x4331ba=_0x57dfa6[_0x326486(0x1d0)](),_0x58db2f=_0xee7322[_0x326486(0x14d)]||{},_0x56fbc0=_0xee7322[_0x326486(0x11d)],_0x28a895=_0xee7322['isExpressionToEvaluate'];try{var _0x4d3354=this[_0x326486(0x13d)](_0x1bf49f),_0x4f8709=_0x4331ba;_0x4d3354&&_0x4f8709[0x0]==='\\x27'&&(_0x4f8709=_0x4f8709[_0x326486(0x185)](0x1,_0x4f8709[_0x326486(0x12e)]-0x2));var _0x15481e=_0xee7322[_0x326486(0x14d)]=_0x58db2f[_0x326486(0x173)+_0x4f8709];_0x15481e&&(_0xee7322[_0x326486(0x11d)]=_0xee7322[_0x326486(0x11d)]+0x1),_0xee7322[_0x326486(0x1a5)]=!!_0x15481e;var _0x3a61d9=typeof _0x57dfa6==_0x326486(0x1b5),_0x1e1792={'name':_0x3a61d9||_0x4d3354?_0x4331ba:this[_0x326486(0x11b)](_0x4331ba)};if(_0x3a61d9&&(_0x1e1792['symbol']=!0x0),!(_0x10ac96==='array'||_0x10ac96===_0x326486(0x1e4))){var _0x4503a0=this[_0x326486(0x1b3)](_0x1bf49f,_0x57dfa6);if(_0x4503a0&&(_0x4503a0['set']&&(_0x1e1792[_0x326486(0x16b)]=!0x0),_0x4503a0[_0x326486(0x136)]&&!_0x15481e&&!_0xee7322[_0x326486(0x183)]))return _0x1e1792[_0x326486(0x1ed)]=!0x0,this[_0x326486(0x156)](_0x1e1792,_0xee7322),_0x1e1792;}var _0x32a36e;try{_0x32a36e=_0x598c3f(_0x1bf49f,_0x57dfa6);}catch(_0x44aaa6){return _0x1e1792={'name':_0x4331ba,'type':_0x326486(0x15f),'error':_0x44aaa6['message']},this[_0x326486(0x156)](_0x1e1792,_0xee7322),_0x1e1792;}var _0x27eaec=this[_0x326486(0x172)](_0x32a36e),_0x1dd8cf=this['_isPrimitiveType'](_0x27eaec);if(_0x1e1792[_0x326486(0x13e)]=_0x27eaec,_0x1dd8cf)this[_0x326486(0x156)](_0x1e1792,_0xee7322,_0x32a36e,function(){var _0x14aecf=_0x326486;_0x1e1792['value']=_0x32a36e[_0x14aecf(0x1a4)](),!_0x15481e&&_0x57fd55['_capIfString'](_0x27eaec,_0x1e1792,_0xee7322,{});});else{var _0x1fd626=_0xee7322[_0x326486(0x1a1)]&&_0xee7322[_0x326486(0x107)]<_0xee7322[_0x326486(0x123)]&&_0xee7322[_0x326486(0x187)][_0x326486(0x18d)](_0x32a36e)<0x0&&_0x27eaec!==_0x326486(0x1df)&&_0xee7322['autoExpandPropertyCount']<_0xee7322[_0x326486(0x152)];_0x1fd626||_0xee7322[_0x326486(0x107)]<_0x56fbc0||_0x15481e?this[_0x326486(0x19b)](_0x1e1792,_0x32a36e,_0xee7322,_0x15481e||{}):this[_0x326486(0x156)](_0x1e1792,_0xee7322,_0x32a36e,function(){var _0x187576=_0x326486;_0x27eaec==='null'||_0x27eaec==='undefined'||(delete _0x1e1792[_0x187576(0x181)],_0x1e1792[_0x187576(0x17a)]=!0x0);});}return _0x1e1792;}finally{_0xee7322[_0x326486(0x14d)]=_0x58db2f,_0xee7322[_0x326486(0x11d)]=_0x56fbc0,_0xee7322[_0x326486(0x1a5)]=_0x28a895;}},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x16e)]=function(_0x56e4d4,_0x9663b4,_0x4ca9b4,_0x4f8a61){var _0x289244=_0x19fb99,_0x543170=_0x4f8a61['strLength']||_0x4ca9b4['strLength'];if((_0x56e4d4===_0x289244(0x204)||_0x56e4d4===_0x289244(0x11e))&&_0x9663b4[_0x289244(0x181)]){let _0x2b9781=_0x9663b4[_0x289244(0x181)][_0x289244(0x12e)];_0x4ca9b4[_0x289244(0x169)]+=_0x2b9781,_0x4ca9b4[_0x289244(0x169)]>_0x4ca9b4[_0x289244(0x14f)]?(_0x9663b4[_0x289244(0x17a)]='',delete _0x9663b4[_0x289244(0x181)]):_0x2b9781>_0x543170&&(_0x9663b4[_0x289244(0x17a)]=_0x9663b4[_0x289244(0x181)]['substr'](0x0,_0x543170),delete _0x9663b4[_0x289244(0x181)]);}},_0x3b798c['prototype'][_0x19fb99(0x13d)]=function(_0x20e242){var _0x22bc15=_0x19fb99;return!!(_0x20e242&&_0x2011df[_0x22bc15(0x139)]&&this[_0x22bc15(0x1da)](_0x20e242)==='[object\\x20Map]'&&_0x20e242[_0x22bc15(0x1d8)]);},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x11b)]=function(_0x51405e){var _0x339753=_0x19fb99;if(_0x51405e[_0x339753(0x1e6)](/^\\d+$/))return _0x51405e;var _0xa32815;try{_0xa32815=JSON['stringify'](''+_0x51405e);}catch{_0xa32815='\\x22'+this[_0x339753(0x1da)](_0x51405e)+'\\x22';}return _0xa32815[_0x339753(0x1e6)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0xa32815=_0xa32815[_0x339753(0x185)](0x1,_0xa32815['length']-0x2):_0xa32815=_0xa32815[_0x339753(0x161)](/'/g,'\\x5c\\x27')[_0x339753(0x161)](/\\\\\"/g,'\\x22')[_0x339753(0x161)](/(^\"|\"$)/g,'\\x27'),_0xa32815;},_0x3b798c[_0x19fb99(0x188)]['_processTreeNodeResult']=function(_0x19aa6c,_0x15bfd6,_0x57de46,_0x17e0d5){var _0x5136d0=_0x19fb99;this['_treeNodePropertiesBeforeFullValue'](_0x19aa6c,_0x15bfd6),_0x17e0d5&&_0x17e0d5(),this[_0x5136d0(0x1ad)](_0x57de46,_0x19aa6c),this[_0x5136d0(0x191)](_0x19aa6c,_0x15bfd6);},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x18c)]=function(_0x3d1ee7,_0x70e5ea){var _0x548bce=_0x19fb99;this['_setNodeId'](_0x3d1ee7,_0x70e5ea),this[_0x548bce(0x175)](_0x3d1ee7,_0x70e5ea),this['_setNodeExpressionPath'](_0x3d1ee7,_0x70e5ea),this[_0x548bce(0x1e9)](_0x3d1ee7,_0x70e5ea);},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x203)]=function(_0x39276,_0x2973e9){},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x175)]=function(_0x3d5358,_0x1ce0bc){},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x149)]=function(_0x5460c7,_0x5726fc){},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x1e7)]=function(_0xb18247){var _0x5a9038=_0x19fb99;return _0xb18247===this[_0x5a9038(0x125)];},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x191)]=function(_0xb3362f,_0x257171){var _0x24e002=_0x19fb99;this[_0x24e002(0x149)](_0xb3362f,_0x257171),this[_0x24e002(0x196)](_0xb3362f),_0x257171[_0x24e002(0x147)]&&this[_0x24e002(0x1bf)](_0xb3362f),this[_0x24e002(0x11f)](_0xb3362f,_0x257171),this['_addLoadNode'](_0xb3362f,_0x257171),this[_0x24e002(0x182)](_0xb3362f);},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x1ad)]=function(_0x2dbd2f,_0x37c5b1){var _0x320ee5=_0x19fb99;try{_0x2dbd2f&&typeof _0x2dbd2f[_0x320ee5(0x12e)]==_0x320ee5(0x117)&&(_0x37c5b1[_0x320ee5(0x12e)]=_0x2dbd2f[_0x320ee5(0x12e)]);}catch{}if(_0x37c5b1[_0x320ee5(0x13e)]===_0x320ee5(0x117)||_0x37c5b1[_0x320ee5(0x13e)]===_0x320ee5(0x1bc)){if(isNaN(_0x37c5b1['value']))_0x37c5b1['nan']=!0x0,delete _0x37c5b1['value'];else switch(_0x37c5b1[_0x320ee5(0x181)]){case Number[_0x320ee5(0x14c)]:_0x37c5b1[_0x320ee5(0x1e8)]=!0x0,delete _0x37c5b1[_0x320ee5(0x181)];break;case Number[_0x320ee5(0x12c)]:_0x37c5b1[_0x320ee5(0x1ee)]=!0x0,delete _0x37c5b1[_0x320ee5(0x181)];break;case 0x0:this[_0x320ee5(0x1fb)](_0x37c5b1['value'])&&(_0x37c5b1[_0x320ee5(0x129)]=!0x0);break;}}else _0x37c5b1[_0x320ee5(0x13e)]===_0x320ee5(0x1df)&&typeof _0x2dbd2f[_0x320ee5(0x1f1)]==_0x320ee5(0x204)&&_0x2dbd2f[_0x320ee5(0x1f1)]&&_0x37c5b1['name']&&_0x2dbd2f['name']!==_0x37c5b1['name']&&(_0x37c5b1[_0x320ee5(0x13b)]=_0x2dbd2f[_0x320ee5(0x1f1)]);},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x1fb)]=function(_0x3fe3ce){var _0x5bd9dd=_0x19fb99;return 0x1/_0x3fe3ce===Number[_0x5bd9dd(0x12c)];},_0x3b798c[_0x19fb99(0x188)]['_sortProps']=function(_0x302641){var _0x20eea1=_0x19fb99;!_0x302641[_0x20eea1(0x20b)]||!_0x302641[_0x20eea1(0x20b)][_0x20eea1(0x12e)]||_0x302641[_0x20eea1(0x13e)]===_0x20eea1(0x1d2)||_0x302641['type']===_0x20eea1(0x139)||_0x302641['type']===_0x20eea1(0x1b9)||_0x302641['props'][_0x20eea1(0x16c)](function(_0x2e3c0f,_0x466671){var _0x2def12=_0x20eea1,_0x299cd3=_0x2e3c0f[_0x2def12(0x1f1)][_0x2def12(0x1a8)](),_0x569a8c=_0x466671[_0x2def12(0x1f1)]['toLowerCase']();return _0x299cd3<_0x569a8c?-0x1:_0x299cd3>_0x569a8c?0x1:0x0;});},_0x3b798c['prototype'][_0x19fb99(0x11f)]=function(_0x1fce5c,_0x59600b){var _0x272775=_0x19fb99;if(!(_0x59600b[_0x272775(0x1ff)]||!_0x1fce5c['props']||!_0x1fce5c[_0x272775(0x20b)][_0x272775(0x12e)])){for(var _0x5b060d=[],_0x576482=[],_0x469b84=0x0,_0x1419a1=_0x1fce5c[_0x272775(0x20b)][_0x272775(0x12e)];_0x469b84<_0x1419a1;_0x469b84++){var _0x554dbc=_0x1fce5c[_0x272775(0x20b)][_0x469b84];_0x554dbc['type']===_0x272775(0x1df)?_0x5b060d[_0x272775(0x1c3)](_0x554dbc):_0x576482['push'](_0x554dbc);}if(!(!_0x576482['length']||_0x5b060d[_0x272775(0x12e)]<=0x1)){_0x1fce5c[_0x272775(0x20b)]=_0x576482;var _0x5ac4d9={'functionsNode':!0x0,'props':_0x5b060d};this['_setNodeId'](_0x5ac4d9,_0x59600b),this['_setNodeLabel'](_0x5ac4d9,_0x59600b),this['_setNodeExpandableState'](_0x5ac4d9),this['_setNodePermissions'](_0x5ac4d9,_0x59600b),_0x5ac4d9['id']+='\\x20f',_0x1fce5c[_0x272775(0x20b)][_0x272775(0x15e)](_0x5ac4d9);}}},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x206)]=function(_0x53bb34,_0x23ecf2){},_0x3b798c['prototype'][_0x19fb99(0x196)]=function(_0x59c87d){},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x109)]=function(_0x480385){var _0x3b79b1=_0x19fb99;return Array['isArray'](_0x480385)||typeof _0x480385=='object'&&this[_0x3b79b1(0x1da)](_0x480385)===_0x3b79b1(0x1f6);},_0x3b798c['prototype'][_0x19fb99(0x1e9)]=function(_0x3277e3,_0x15bc20){},_0x3b798c[_0x19fb99(0x188)]['_cleanNode']=function(_0x3d12db){var _0x1bb90c=_0x19fb99;delete _0x3d12db[_0x1bb90c(0x106)],delete _0x3d12db[_0x1bb90c(0x179)],delete _0x3d12db[_0x1bb90c(0x146)];},_0x3b798c[_0x19fb99(0x188)][_0x19fb99(0x10c)]=function(_0x804785,_0x46b090){};let _0x1ab812=new _0x3b798c(),_0x4253f5={'props':_0x3f83e7[_0x19fb99(0x12d)]['props']||0x64,'elements':_0x3f83e7[_0x19fb99(0x12d)][_0x19fb99(0x1d6)]||0x64,'strLength':_0x3f83e7[_0x19fb99(0x12d)][_0x19fb99(0x16a)]||0x400*0x32,'totalStrLength':_0x3f83e7['defaultLimits'][_0x19fb99(0x14f)]||0x400*0x32,'autoExpandLimit':_0x3f83e7[_0x19fb99(0x12d)][_0x19fb99(0x152)]||0x1388,'autoExpandMaxDepth':_0x3f83e7[_0x19fb99(0x12d)][_0x19fb99(0x123)]||0xa},_0x5ccf32={'props':_0x3f83e7[_0x19fb99(0x17d)][_0x19fb99(0x20b)]||0x5,'elements':_0x3f83e7[_0x19fb99(0x17d)][_0x19fb99(0x1d6)]||0x5,'strLength':_0x3f83e7['reducedLimits'][_0x19fb99(0x16a)]||0x100,'totalStrLength':_0x3f83e7[_0x19fb99(0x17d)][_0x19fb99(0x14f)]||0x100*0x3,'autoExpandLimit':_0x3f83e7[_0x19fb99(0x17d)][_0x19fb99(0x152)]||0x1e,'autoExpandMaxDepth':_0x3f83e7['reducedLimits']['autoExpandMaxDepth']||0x2};if(_0x1e8675){let _0x2f3a37=_0x1ab812['serialize']['bind'](_0x1ab812);_0x1ab812[_0x19fb99(0x19b)]=function(_0x4f58de,_0x29d7d0,_0x30b459,_0x1f5fdf){return _0x2f3a37(_0x4f58de,_0x1e8675(_0x29d7d0),_0x30b459,_0x1f5fdf);};}function _0xc68888(_0x535031,_0x3340fc,_0x337e66,_0x22242c,_0x124bfa,_0x5f1e1f){var _0x46fc5e=_0x19fb99;let _0x56fb0c,_0x26a7c9;try{_0x26a7c9=_0x1e8773(),_0x56fb0c=_0x1caee6[_0x3340fc],!_0x56fb0c||_0x26a7c9-_0x56fb0c['ts']>_0x10a276['perLogpoint'][_0x46fc5e(0x13c)]&&_0x56fb0c[_0x46fc5e(0x1a2)]&&_0x56fb0c[_0x46fc5e(0x1a7)]/_0x56fb0c[_0x46fc5e(0x1a2)]<_0x10a276[_0x46fc5e(0x194)]['resetOnProcessingTimeAverageMs']?(_0x1caee6[_0x3340fc]=_0x56fb0c={'count':0x0,'time':0x0,'ts':_0x26a7c9},_0x1caee6['hits']={}):_0x26a7c9-_0x1caee6[_0x46fc5e(0x1ab)]['ts']>_0x10a276[_0x46fc5e(0x1fc)][_0x46fc5e(0x13c)]&&_0x1caee6[_0x46fc5e(0x1ab)][_0x46fc5e(0x1a2)]&&_0x1caee6[_0x46fc5e(0x1ab)][_0x46fc5e(0x1a7)]/_0x1caee6[_0x46fc5e(0x1ab)]['count']<_0x10a276[_0x46fc5e(0x1fc)][_0x46fc5e(0x1ec)]&&(_0x1caee6[_0x46fc5e(0x1ab)]={});let _0x135eed=[],_0x4de057=_0x56fb0c[_0x46fc5e(0x15d)]||_0x1caee6[_0x46fc5e(0x1ab)][_0x46fc5e(0x15d)]?_0x5ccf32:_0x4253f5,_0x5ea472=_0x57de65=>{var _0x1e64a0=_0x46fc5e;let _0x2f1ff9={};return _0x2f1ff9[_0x1e64a0(0x20b)]=_0x57de65[_0x1e64a0(0x20b)],_0x2f1ff9[_0x1e64a0(0x1d6)]=_0x57de65['elements'],_0x2f1ff9[_0x1e64a0(0x16a)]=_0x57de65[_0x1e64a0(0x16a)],_0x2f1ff9['totalStrLength']=_0x57de65[_0x1e64a0(0x14f)],_0x2f1ff9[_0x1e64a0(0x152)]=_0x57de65[_0x1e64a0(0x152)],_0x2f1ff9['autoExpandMaxDepth']=_0x57de65[_0x1e64a0(0x123)],_0x2f1ff9[_0x1e64a0(0x147)]=!0x1,_0x2f1ff9['noFunctions']=!_0x5af1c4,_0x2f1ff9[_0x1e64a0(0x11d)]=0x1,_0x2f1ff9['level']=0x0,_0x2f1ff9[_0x1e64a0(0x164)]=_0x1e64a0(0x167),_0x2f1ff9[_0x1e64a0(0x1d1)]=_0x1e64a0(0x16f),_0x2f1ff9[_0x1e64a0(0x1a1)]=!0x0,_0x2f1ff9[_0x1e64a0(0x187)]=[],_0x2f1ff9[_0x1e64a0(0x1ca)]=0x0,_0x2f1ff9['resolveGetters']=_0x3f83e7['resolveGetters'],_0x2f1ff9[_0x1e64a0(0x169)]=0x0,_0x2f1ff9[_0x1e64a0(0x143)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x2f1ff9;};for(var _0x19c1cf=0x0;_0x19c1cf<_0x124bfa[_0x46fc5e(0x12e)];_0x19c1cf++)_0x135eed[_0x46fc5e(0x1c3)](_0x1ab812[_0x46fc5e(0x19b)]({'timeNode':_0x535031==='time'||void 0x0},_0x124bfa[_0x19c1cf],_0x5ea472(_0x4de057),{}));if(_0x535031==='trace'||_0x535031===_0x46fc5e(0x1c5)){let _0x11d4f0=Error[_0x46fc5e(0x1f7)];try{Error[_0x46fc5e(0x1f7)]=0x1/0x0,_0x135eed[_0x46fc5e(0x1c3)](_0x1ab812[_0x46fc5e(0x19b)]({'stackNode':!0x0},new Error()[_0x46fc5e(0x1af)],_0x5ea472(_0x4de057),{'strLength':0x1/0x0}));}finally{Error[_0x46fc5e(0x1f7)]=_0x11d4f0;}}return{'method':_0x46fc5e(0x177),'version':_0x2bde9f,'args':[{'ts':_0x337e66,'session':_0x22242c,'args':_0x135eed,'id':_0x3340fc,'context':_0x5f1e1f}]};}catch(_0x29c306){return{'method':_0x46fc5e(0x177),'version':_0x2bde9f,'args':[{'ts':_0x337e66,'session':_0x22242c,'args':[{'type':_0x46fc5e(0x15f),'error':_0x29c306&&_0x29c306[_0x46fc5e(0x113)]}],'id':_0x3340fc,'context':_0x5f1e1f}]};}finally{try{if(_0x56fb0c&&_0x26a7c9){let _0x52a27e=_0x1e8773();_0x56fb0c[_0x46fc5e(0x1a2)]++,_0x56fb0c[_0x46fc5e(0x1a7)]+=_0x5e742b(_0x26a7c9,_0x52a27e),_0x56fb0c['ts']=_0x52a27e,_0x1caee6[_0x46fc5e(0x1ab)][_0x46fc5e(0x1a2)]++,_0x1caee6['hits'][_0x46fc5e(0x1a7)]+=_0x5e742b(_0x26a7c9,_0x52a27e),_0x1caee6[_0x46fc5e(0x1ab)]['ts']=_0x52a27e,(_0x56fb0c[_0x46fc5e(0x1a2)]>_0x10a276[_0x46fc5e(0x194)][_0x46fc5e(0x151)]||_0x56fb0c['time']>_0x10a276['perLogpoint']['reduceOnAccumulatedProcessingTimeMs'])&&(_0x56fb0c[_0x46fc5e(0x15d)]=!0x0),(_0x1caee6[_0x46fc5e(0x1ab)][_0x46fc5e(0x1a2)]>_0x10a276[_0x46fc5e(0x1fc)][_0x46fc5e(0x151)]||_0x1caee6[_0x46fc5e(0x1ab)]['time']>_0x10a276['global'][_0x46fc5e(0x1e2)])&&(_0x1caee6[_0x46fc5e(0x1ab)][_0x46fc5e(0x15d)]=!0x0);}}catch{}}}return _0xc68888;}function G(_0x357a3e){var _0x1c1d5c=_0x548f0e;if(_0x357a3e&&typeof _0x357a3e==_0x1c1d5c(0x140)&&_0x357a3e[_0x1c1d5c(0x192)])switch(_0x357a3e['constructor'][_0x1c1d5c(0x1f1)]){case _0x1c1d5c(0x1f8):return _0x357a3e['hasOwnProperty'](Symbol[_0x1c1d5c(0x1cb)])?Promise[_0x1c1d5c(0x1ac)]():_0x357a3e;case'bound\\x20Promise':return Promise[_0x1c1d5c(0x1ac)]();}return _0x357a3e;}function _0x49dd(_0x48794b,_0x215201){var _0x5eb787=_0x5eb7();return _0x49dd=function(_0x49dd64,_0x5b9134){_0x49dd64=_0x49dd64-0x106;var _0x4735f0=_0x5eb787[_0x49dd64];return _0x4735f0;},_0x49dd(_0x48794b,_0x215201);}((_0x4ab1c6,_0x3770af,_0x3ce2fc,_0x3f6b32,_0x478f2c,_0x5bf3d1,_0xfe754b,_0x5a9d76,_0x1aab36,_0x3bc27c,_0x57f4e7,_0x4fa6c3)=>{var _0xf735ce=_0x548f0e;if(_0x4ab1c6['_console_ninja'])return _0x4ab1c6['_console_ninja'];let _0x313a8d={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x4ab1c6,_0x5a9d76,_0x478f2c))return _0x4ab1c6[_0xf735ce(0x16d)]=_0x313a8d,_0x4ab1c6['_console_ninja'];let _0x418c01=b(_0x4ab1c6),_0xd76728=_0x418c01[_0xf735ce(0x127)],_0x3e56d8=_0x418c01[_0xf735ce(0x115)],_0x3e2373=_0x418c01[_0xf735ce(0x14a)],_0x48f2ad={'hits':{},'ts':{}},_0x505066=J(_0x4ab1c6,_0x1aab36,_0x48f2ad,_0x5bf3d1,_0x4fa6c3,_0x478f2c==='next.js'?G:void 0x0),_0x48cb15=(_0x17b02e,_0x154ef3,_0x3a05a0,_0x463625,_0x51db52,_0x5042d9)=>{var _0x27df57=_0xf735ce;let _0x1159ce=_0x4ab1c6['_console_ninja'];try{return _0x4ab1c6['_console_ninja']=_0x313a8d,_0x505066(_0x17b02e,_0x154ef3,_0x3a05a0,_0x463625,_0x51db52,_0x5042d9);}finally{_0x4ab1c6[_0x27df57(0x16d)]=_0x1159ce;}},_0xcc7412=_0xab4b0c=>{_0x48f2ad['ts'][_0xab4b0c]=_0x3e56d8();},_0x3aeb93=(_0xbe2a9d,_0x37862a)=>{var _0x30e3cb=_0xf735ce;let _0x37627d=_0x48f2ad['ts'][_0x37862a];if(delete _0x48f2ad['ts'][_0x37862a],_0x37627d){let _0x464639=_0xd76728(_0x37627d,_0x3e56d8());_0x45f648(_0x48cb15(_0x30e3cb(0x1a7),_0xbe2a9d,_0x3e2373(),_0x5efb7d,[_0x464639],_0x37862a));}},_0x5b170d=_0x4b3a1c=>{var _0x5a439b=_0xf735ce,_0x1bd0d3;return _0x478f2c===_0x5a439b(0x1b1)&&_0x4ab1c6['origin']&&((_0x1bd0d3=_0x4b3a1c==null?void 0x0:_0x4b3a1c['args'])==null?void 0x0:_0x1bd0d3[_0x5a439b(0x12e)])&&(_0x4b3a1c['args'][0x0]['origin']=_0x4ab1c6[_0x5a439b(0x133)]),_0x4b3a1c;};_0x4ab1c6[_0xf735ce(0x16d)]={'consoleLog':(_0x1f92a3,_0x3d1b32)=>{var _0x384ddc=_0xf735ce;_0x4ab1c6[_0x384ddc(0x165)][_0x384ddc(0x177)][_0x384ddc(0x1f1)]!=='disabledLog'&&_0x45f648(_0x48cb15(_0x384ddc(0x177),_0x1f92a3,_0x3e2373(),_0x5efb7d,_0x3d1b32));},'consoleTrace':(_0x16d5a,_0x223858)=>{var _0x616644=_0xf735ce,_0xdf7629,_0x7ea927;_0x4ab1c6[_0x616644(0x165)]['log'][_0x616644(0x1f1)]!==_0x616644(0x118)&&((_0x7ea927=(_0xdf7629=_0x4ab1c6[_0x616644(0x1c8)])==null?void 0x0:_0xdf7629['versions'])!=null&&_0x7ea927[_0x616644(0x143)]&&(_0x4ab1c6[_0x616644(0x1c0)]=!0x0),_0x45f648(_0x5b170d(_0x48cb15(_0x616644(0x1a3),_0x16d5a,_0x3e2373(),_0x5efb7d,_0x223858))));},'consoleError':(_0x38f47b,_0x35429f)=>{_0x4ab1c6['_ninjaIgnoreNextError']=!0x0,_0x45f648(_0x5b170d(_0x48cb15('error',_0x38f47b,_0x3e2373(),_0x5efb7d,_0x35429f)));},'consoleTime':_0x4cf735=>{_0xcc7412(_0x4cf735);},'consoleTimeEnd':(_0x566c48,_0x364eea)=>{_0x3aeb93(_0x364eea,_0x566c48);},'autoLog':(_0x1eb1b1,_0xa812f2)=>{var _0x1ace51=_0xf735ce;_0x45f648(_0x48cb15(_0x1ace51(0x177),_0xa812f2,_0x3e2373(),_0x5efb7d,[_0x1eb1b1]));},'autoLogMany':(_0x56ca86,_0x4bac87)=>{var _0x3394a4=_0xf735ce;_0x45f648(_0x48cb15(_0x3394a4(0x177),_0x56ca86,_0x3e2373(),_0x5efb7d,_0x4bac87));},'autoTrace':(_0x417845,_0x145484)=>{var _0x27ae88=_0xf735ce;_0x45f648(_0x5b170d(_0x48cb15(_0x27ae88(0x1a3),_0x145484,_0x3e2373(),_0x5efb7d,[_0x417845])));},'autoTraceMany':(_0xca37d7,_0x262246)=>{var _0x26f92c=_0xf735ce;_0x45f648(_0x5b170d(_0x48cb15(_0x26f92c(0x1a3),_0xca37d7,_0x3e2373(),_0x5efb7d,_0x262246)));},'autoTime':(_0x32789a,_0x59deba,_0xcc1c2c)=>{_0xcc7412(_0xcc1c2c);},'autoTimeEnd':(_0x58bdab,_0x21cfd7,_0x507017)=>{_0x3aeb93(_0x21cfd7,_0x507017);},'coverage':_0x237fb5=>{var _0x4ec628=_0xf735ce;_0x45f648({'method':_0x4ec628(0x10f),'version':_0x5bf3d1,'args':[{'id':_0x237fb5}]});}};let _0x45f648=H(_0x4ab1c6,_0x3770af,_0x3ce2fc,_0x3f6b32,_0x478f2c,_0x3bc27c,_0x57f4e7),_0x5efb7d=_0x4ab1c6[_0xf735ce(0x116)];return _0x4ab1c6['_console_ninja'];})(globalThis,_0x548f0e(0x17e),_0x548f0e(0x154),\"c:\\\\Users\\\\Admin\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.501\\\\node_modules\",_0x548f0e(0x131),_0x548f0e(0x1dc),_0x548f0e(0x144),_0x548f0e(0x1b0),_0x548f0e(0x150),_0x548f0e(0x176),_0x548f0e(0x111),{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}});");
    } catch (e) {
        console.error(e);
    }
}
; /* istanbul ignore next */ 
function oo_oo(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleLog(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_tr(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleTrace(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_tx(/**@type{any}**/ i, /**@type{any}**/ ...v) {
    try {
        oo_cm().consoleError(i, v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_ts(/**@type{any}**/ v) {
    try {
        oo_cm().consoleTime(v);
    } catch (e) {}
    return v;
}
; /* istanbul ignore next */ 
function oo_te(/**@type{any}**/ v, /**@type{any}**/ i) {
    try {
        oo_cm().consoleTimeEnd(v, i);
    } catch (e) {}
    return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/ 
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HeroFeatured.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroFeatured
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HeroFeatured() {
    _s();
    const [featuredPosts, setFeaturedPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroFeatured.useEffect": ()=>{
            fetchFeaturedPosts();
        }
    }["HeroFeatured.useEffect"], []);
    const fetchFeaturedPosts = async ()=>{
        try {
            setLoading(true);
            const response = await fetch("/api/public/posts?limit=10");
            if (!response.ok) throw new Error("Failed to fetch");
            const data = await response.json();
            setFeaturedPosts(data.posts || []);
        } catch (error) {
            console.error("Error fetching featured posts:", error);
        } finally{
            setLoading(false);
        }
    };
    const formatDate = (dateString)=>{
        if (!dateString) return "";
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
            });
        } catch  {
            return "";
        }
    };
    const getAuthorName = (author)=>{
        if (!author) return "Editorial Team";
        if (typeof author === "object" && author?.name) {
            return author.name;
        }
        return author;
    };
    const handleNewsletterSubmit = (e)=>{
        e.preventDefault();
        // Handle newsletter subscription
        console.log("Newsletter signup:", email);
        setEmail("");
    };
    const { topPicks, mainArticle, capTableArticles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeroFeatured.useMemo": ()=>{
            const picks = featuredPosts.slice(0, 4);
            const main = featuredPosts[4];
            const capTable = featuredPosts.slice(5, 8);
            return {
                topPicks: picks,
                mainArticle: main,
                capTableArticles: capTable
            };
        }
    }["HeroFeatured.useMemo"], [
        featuredPosts
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-pulse grid grid-cols-1 lg:grid-cols-12 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-8 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-8 bg-gray-200 dark:bg-slate-700 w-32 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroFeatured.jsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-4 gap-4",
                                    children: [
                                        1,
                                        2,
                                        3,
                                        4
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-32 bg-gray-200 dark:bg-slate-700 rounded"
                                        }, i, false, {
                                            fileName: "[project]/components/HeroFeatured.jsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroFeatured.jsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-64 bg-gray-200 dark:bg-slate-700 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroFeatured.jsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroFeatured.jsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-4 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-8 bg-gray-200 dark:bg-slate-700 w-40 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroFeatured.jsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                [
                                    1,
                                    2,
                                    3
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-24 bg-gray-200 dark:bg-slate-700 rounded"
                                    }, i, false, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroFeatured.jsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HeroFeatured.jsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HeroFeatured.jsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/HeroFeatured.jsx",
            lineNumber: 75,
            columnNumber: 7
        }, this);
    }
    if (featuredPosts.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-bold text-black dark:text-white",
                                        children: "Top Picks"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-600 dark:text-red-500 text-2xl font-bold",
                                                children: "★"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1 -right-1 text-red-600 dark:text-red-500 text-xs",
                                                children: "Picks"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HeroFeatured.jsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            topPicks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",
                                children: topPicks.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/post?slug=${post.slug}`,
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative aspect-video overflow-hidden bg-gray-100 dark:bg-slate-800 rounded",
                                                    children: post.featuredImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: post.featuredImage,
                                                        alt: post.title,
                                                        fill: true,
                                                        className: "object-cover group-hover:opacity-90 transition-opacity",
                                                        sizes: "(max-width: 768px) 50vw, 25vw"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroFeatured.jsx",
                                                        lineNumber: 130,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-full bg-gradient-to-br from-blue-400 to-blue-500 dark:from-blue-600 dark:to-blue-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroFeatured.jsx",
                                                        lineNumber: 138,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroFeatured.jsx",
                                                    lineNumber: 128,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-medium text-black dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 142,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, post._id || index, true, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/HeroFeatured.jsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this),
                            mainArticle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/post?slug=${mainArticle.slug}`,
                                className: "group block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block text-xs text-gray-600 dark:text-gray-400 font-medium",
                                            children: [
                                                "■ ",
                                                mainArticle.category || "News"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HeroFeatured.jsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
                                        children: mainArticle.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this),
                                    mainArticle.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4",
                                        children: mainArticle.excerpt
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 160,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: getAuthorName(mainArticle.author)
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroFeatured.jsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HeroFeatured.jsx",
                                lineNumber: 152,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroFeatured.jsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-black dark:text-white relative inline-block",
                                    children: [
                                        "The CapTable",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-0 left-0 right-0 h-1 bg-green-500 dark:bg-green-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroFeatured.jsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HeroFeatured.jsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/HeroFeatured.jsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 mb-8",
                                children: capTableArticles.length > 0 ? capTableArticles.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/post?slug=${post.slug}`,
                                        className: "group flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-bold text-black dark:text-white leading-snug mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2",
                                                        children: post.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroFeatured.jsx",
                                                        lineNumber: 191,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: getAuthorName(post.author)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/HeroFeatured.jsx",
                                                            lineNumber: 195,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroFeatured.jsx",
                                                        lineNumber: 194,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 190,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 w-20 h-20 rounded overflow-hidden bg-gray-100 dark:bg-slate-800",
                                                children: post.featuredImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: post.featuredImage,
                                                    alt: post.title,
                                                    width: 80,
                                                    height: 80,
                                                    className: "w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroFeatured.jsx",
                                                    lineNumber: 200,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full bg-gradient-to-br from-blue-400 to-blue-500 dark:from-blue-600 dark:to-blue-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroFeatured.jsx",
                                                    lineNumber: 208,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 198,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, post._id || index, true, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 185,
                                        columnNumber: 19
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        1,
                                        2,
                                        3
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 h-20 bg-gray-100 dark:bg-slate-800 rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroFeatured.jsx",
                                                    lineNumber: 217,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-20 h-20 bg-gray-100 dark:bg-slate-800 rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroFeatured.jsx",
                                                    lineNumber: 218,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/HeroFeatured.jsx",
                                            lineNumber: 216,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroFeatured.jsx",
                                    lineNumber: 214,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/HeroFeatured.jsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-200 dark:border-slate-800 pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 18,
                                                className: "text-gray-600 dark:text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                                children: "Newsletter"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleNewsletterSubmit,
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "newsletter-email",
                                                        className: "block text-xs text-gray-600 dark:text-gray-400 mb-1",
                                                        children: "Enter your Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroFeatured.jsx",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        id: "newsletter-email",
                                                        value: email,
                                                        onChange: (e)=>setEmail(e.target.value),
                                                        placeholder: "Enter your Email",
                                                        className: "w-full px-4 py-2 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-500",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroFeatured.jsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "w-full bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black font-medium py-2 px-4 rounded-md transition-colors text-sm",
                                                children: "Sign Up"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HeroFeatured.jsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroFeatured.jsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroFeatured.jsx",
                lineNumber: 106,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/HeroFeatured.jsx",
            lineNumber: 105,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/HeroFeatured.jsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(HeroFeatured, "MjIUYSi5d94YthNA+HokxFR+E/o=");
_c = HeroFeatured;
var _c;
__turbopack_context__.k.register(_c, "HeroFeatured");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SpotLight.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpotLight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SpotLight() {
    _s();
    const [spotlightPosts, setSpotlightPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpotLight.useEffect": ()=>{
            fetchSpotlightPosts();
        }
    }["SpotLight.useEffect"], []);
    const fetchSpotlightPosts = async ()=>{
        try {
            setLoading(true);
            const response = await fetch("/api/public/posts?limit=4");
            if (!response.ok) throw new Error("Failed to fetch");
            const data = await response.json();
            setSpotlightPosts(data.posts || []);
        } catch (error) {
            console.error("Error fetching spotlight posts:", error);
        } finally{
            setLoading(false);
        }
    };
    const getAuthorName = (author)=>{
        if (!author) return "Editorial Team";
        if (typeof author === "object" && author?.name) {
            return author.name;
        }
        return author;
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-64 bg-gray-200 dark:bg-slate-700 rounded"
                        }, void 0, false, {
                            fileName: "[project]/components/SpotLight.jsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                            children: [
                                1,
                                2,
                                3,
                                4
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-96 bg-gray-200 dark:bg-slate-700 rounded"
                                }, i, false, {
                                    fileName: "[project]/components/SpotLight.jsx",
                                    lineNumber: 47,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/SpotLight.jsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SpotLight.jsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SpotLight.jsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/SpotLight.jsx",
            lineNumber: 41,
            columnNumber: 7
        }, this);
    }
    if (spotlightPosts.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-8 lg:gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 lg:w-20 flex items-center justify-center lg:justify-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-6xl lg:text-7xl font-bold text-black dark:text-white leading-none tracking-tight",
                            style: {
                                writingMode: 'vertical-rl',
                                textOrientation: 'upright'
                            },
                            children: [
                                "Spot",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative inline-block",
                                    children: [
                                        "Light",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -top-1 -right-6 lg:-right-8 w-3 h-3 bg-red-600 dark:bg-red-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SpotLight.jsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SpotLight.jsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SpotLight.jsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SpotLight.jsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: spotlightPosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/post?slug=${post.slug}`,
                                className: "group bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-video overflow-hidden bg-gray-100 dark:bg-slate-700",
                                        children: post.featuredImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: post.featuredImage,
                                            alt: post.title,
                                            fill: true,
                                            className: "object-cover group-hover:scale-105 transition-transform duration-500",
                                            sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SpotLight.jsx",
                                            lineNumber: 92,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white text-sm font-medium",
                                                children: "No Image"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 101,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/SpotLight.jsx",
                                            lineNumber: 100,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SpotLight.jsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 bg-black dark:bg-white rounded-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SpotLight.jsx",
                                                        lineNumber: 110,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide",
                                                        children: post.category || "News"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SpotLight.jsx",
                                                        lineNumber: 111,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-black dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-3",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this),
                                            post.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3",
                                                children: post.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 123,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        size: 14,
                                                        className: "text-gray-500 dark:text-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SpotLight.jsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: getAuthorName(post.author)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SpotLight.jsx",
                                                        lineNumber: 131,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SpotLight.jsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, post._id || index, true, {
                                fileName: "[project]/components/SpotLight.jsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/SpotLight.jsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SpotLight.jsx",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/SpotLight.jsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/SpotLight.jsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(SpotLight, "svHQDCGkEhR2H3ZJ4nE55JYy1l4=");
_c = SpotLight;
var _c;
__turbopack_context__.k.register(_c, "SpotLight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Featured.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Featured
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Featured() {
    _s();
    const [featuredPosts, setFeaturedPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Featured.useEffect": ()=>{
            fetchFeaturedPosts();
        }
    }["Featured.useEffect"], []);
    const fetchFeaturedPosts = async ()=>{
        try {
            setLoading(true);
            const response = await fetch("/api/public/posts?limit=15");
            if (!response.ok) throw new Error("Failed to fetch");
            const data = await response.json();
            setFeaturedPosts(data.posts || []);
        } catch (error) {
            console.error("Error fetching featured posts:", error);
        } finally{
            setLoading(false);
        }
    };
    const getAuthorName = (author)=>{
        if (!author) return "Editorial Team";
        if (typeof author === "object" && author?.name) {
            return author.name;
        }
        return author;
    };
    // Split posts into three categories
    const smbPosts = featuredPosts.slice(0, 3);
    const herStoryPosts = featuredPosts.slice(3, 8);
    const socialStoryPosts = featuredPosts.slice(8, 13);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-16 bg-gray-200 dark:bg-slate-700 mb-8 rounded"
                        }, void 0, false, {
                            fileName: "[project]/components/Featured.jsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                            children: [
                                1,
                                2,
                                3
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-12 bg-gray-200 dark:bg-slate-700 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Featured.jsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-64 bg-gray-200 dark:bg-slate-700 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Featured.jsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/Featured.jsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Featured.jsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Featured.jsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Featured.jsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Featured.jsx",
            lineNumber: 46,
            columnNumber: 7
        }, this);
    }
    if (featuredPosts.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-20 h-20 text-black dark:text-white",
                                viewBox: "0 0 100 100",
                                fill: "currentColor",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "30",
                                        cy: "25",
                                        r: "8"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "22",
                                        y: "33",
                                        width: "16",
                                        height: "30",
                                        rx: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "18",
                                        y: "50",
                                        width: "8",
                                        height: "20",
                                        rx: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "34",
                                        y: "50",
                                        width: "8",
                                        height: "20",
                                        rx: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "38",
                                        y1: "40",
                                        x2: "70",
                                        y2: "50",
                                        stroke: "currentColor",
                                        strokeWidth: "3",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "70",
                                        y1: "50",
                                        x2: "90",
                                        y2: "45",
                                        stroke: "currentColor",
                                        strokeWidth: "3",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Featured.jsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Featured.jsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-5xl md:text-6xl font-bold text-black dark:text-white",
                            children: "Featured"
                        }, void 0, false, {
                            fileName: "[project]/components/Featured.jsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Featured.jsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-black dark:bg-white px-4 py-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-white dark:text-black font-bold text-lg uppercase tracking-wide",
                                        children: "SMB Story"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Featured.jsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                smbPosts[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/post?slug=${smbPosts[0].slug}`,
                                    className: "group block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black dark:bg-slate-800 p-6 text-white dark:text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2",
                                                children: smbPosts[0].title
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, this),
                                            smbPosts[0].excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-300 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed",
                                                children: smbPosts[0].excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 105,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-400 dark:text-gray-400",
                                                children: getAuthorName(smbPosts[0].author)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Featured.jsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this),
                                smbPosts.slice(1).map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/post?slug=${post.slug}`,
                                        className: "group block pb-6 border-b border-gray-200 dark:border-slate-700 last:border-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-base font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                children: getAuthorName(post.author)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, post._id || index, true, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Featured.jsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-black dark:bg-white px-4 py-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-white dark:text-black font-bold text-lg uppercase tracking-wide",
                                        children: "Her Story"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Featured.jsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                herStoryPosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/post?slug=${post.slug}`,
                                        className: "group flex gap-4 pb-6 border-b border-gray-200 dark:border-slate-700 last:border-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-base font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2",
                                                        children: post.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Featured.jsx",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                                        children: getAuthorName(post.author)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Featured.jsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 w-20 h-20 rounded overflow-hidden bg-gray-100 dark:bg-slate-800",
                                                children: post.featuredImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: post.featuredImage,
                                                    alt: post.title,
                                                    width: 80,
                                                    height: 80,
                                                    className: "w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Featured.jsx",
                                                    lineNumber: 155,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full bg-gradient-to-br from-pink-400 to-pink-500 dark:from-pink-600 dark:to-pink-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Featured.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, post._id || index, true, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Featured.jsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-black dark:bg-white px-4 py-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-white dark:text-black font-bold text-lg uppercase tracking-wide",
                                        children: "Social Story"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Featured.jsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                socialStoryPosts[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/post?slug=${socialStoryPosts[0].slug}`,
                                    className: "group block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-video overflow-hidden bg-gray-100 dark:bg-slate-800 mb-3",
                                        children: [
                                            socialStoryPosts[0].featuredImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: socialStoryPosts[0].featuredImage,
                                                alt: socialStoryPosts[0].title,
                                                fill: true,
                                                className: "object-cover group-hover:scale-105 transition-transform duration-500",
                                                sizes: "(max-width: 768px) 100vw, 33vw"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 181,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full bg-gradient-to-br from-green-400 to-green-500 dark:from-green-600 dark:to-green-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 189,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 left-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center justify-center w-8 h-8 bg-red-600 dark:bg-red-500 text-white font-bold rounded-full text-sm",
                                                    children: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Featured.jsx",
                                                    lineNumber: 192,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-white font-bold text-lg line-clamp-2",
                                                    children: socialStoryPosts[0].title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Featured.jsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 196,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Featured.jsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this),
                                socialStoryPosts.slice(1).map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/post?slug=${post.slug}`,
                                        className: "group flex gap-3 pb-6 border-b border-gray-200 dark:border-slate-700 last:border-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-shrink-0 inline-flex items-center justify-center w-6 h-6 bg-red-600 dark:bg-red-500 text-white font-bold rounded-full text-xs",
                                                children: index + 2
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-base font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, post._id || index, true, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Featured.jsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Featured.jsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Featured.jsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Featured.jsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(Featured, "kCCFhh8YZnw56Dd2tNsS14vqkos=");
_c = Featured;
var _c;
__turbopack_context__.k.register(_c, "Featured");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Explore.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Explore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Explore() {
    _s();
    const [startups, setStartups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Explore.useEffect": ()=>{
            fetchStartups();
        }
    }["Explore.useEffect"], []);
    const fetchStartups = async ()=>{
        try {
            setLoading(true);
            const response = await fetch("/api/public/posts?limit=16");
            if (!response.ok) throw new Error("Failed to fetch");
            const data = await response.json();
            setStartups(data.posts || []);
        } catch (error) {
            console.error("Error fetching startups:", error);
        } finally{
            setLoading(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-slate-900 dark:bg-black border-b border-slate-800 py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-24 bg-slate-800 mb-12 rounded"
                        }, void 0, false, {
                            fileName: "[project]/components/Explore.jsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                            children: [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                10,
                                11,
                                12,
                                13,
                                14,
                                15,
                                16
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-48 bg-slate-800 rounded-lg"
                                }, i, false, {
                                    fileName: "[project]/components/Explore.jsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Explore.jsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Explore.jsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Explore.jsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Explore.jsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    if (startups.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-slate-900 dark:bg-black border-b border-slate-800 py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative inline-block mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-6xl md:text-7xl lg:text-8xl font-bold text-white relative",
                                children: [
                                    "EXPLO",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative inline-block mx-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative z-10",
                                                children: "R"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Explore.jsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-6 -left-12 text-[10px] md:text-xs font-normal text-white/70 whitespace-nowrap transform -rotate-12",
                                                children: "YOURSTORY PREDICTS"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Explore.jsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -bottom-6 -right-12 text-[10px] md:text-xs font-normal text-white/70 whitespace-nowrap transform rotate-12",
                                                children: "YOURSTORY"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Explore.jsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Explore.jsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    "E"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Explore.jsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Explore.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/80 text-lg md:text-xl mt-4",
                            children: "Upcoming startups of 2026 and browse them on YourStory"
                        }, void 0, false, {
                            fileName: "[project]/components/Explore.jsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Explore.jsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12",
                    children: startups.map((startup, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/post?slug=${startup.slug}`,
                            className: "group relative overflow-hidden rounded-lg bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 transition-all duration-300 aspect-square",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0",
                                    children: [
                                        startup.featuredImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: startup.featuredImage,
                                            alt: startup.title,
                                            fill: true,
                                            className: "object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300",
                                            sizes: "(max-width: 768px) 50vw, 25vw"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Explore.jsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-40"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Explore.jsx",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Explore.jsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Explore.jsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-full flex flex-col justify-end p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white font-bold text-sm md:text-base mb-1 group-hover:text-blue-300 transition-colors line-clamp-2",
                                            children: startup.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/Explore.jsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-xs text-white/70",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Explore.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "uppercase tracking-wide",
                                                    children: startup.category || "Startup"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Explore.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Explore.jsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Explore.jsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, startup._id || index, true, {
                            fileName: "[project]/components/Explore.jsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Explore.jsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/?category=startups",
                        className: "inline-block px-8 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-slate-900 transition-all duration-300",
                        children: "View All Companies"
                    }, void 0, false, {
                        fileName: "[project]/components/Explore.jsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Explore.jsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Explore.jsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Explore.jsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(Explore, "8ZBKAIVWobuFzspUIK9BC+qBph0=");
_c = Explore;
var _c;
__turbopack_context__.k.register(_c, "Explore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_c9a7769c._.js.map