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
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/ThemeContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
            /* eslint-disable */ console.error(...oo_tx(`1259678822_62_6_62_48_11`, "Auth check failed:", error));
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
            /* eslint-disable */ console.error(...oo_tx(`1259678822_76_6_76_44_11`, "Logout failed:", error));
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
        className: "w-full relative z-50 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-orange-600 dark:bg-orange-700 py-2 sm:py-2.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-white text-center leading-tight",
                            children: "Maharashtra Startup Organisation"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex lg:hidden flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-extrabold text-orange-600 dark:text-orange-500",
                                        children: "MSO"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden lg:flex items-center gap-1 flex-1 justify-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 129,
                                        columnNumber: 15
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
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 138,
                                                columnNumber: 17
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
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/?category=success-stories",
                                                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                        children: "Success Stories"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/?category=funding",
                                                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                        children: "Funding & Investment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/?category=incubators",
                                                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                        children: "Incubators & Accelerators"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 137,
                                        columnNumber: 15
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
                                                        lineNumber: 174,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 172,
                                                columnNumber: 17
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
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/?category=tools",
                                                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                        children: "Tools & Templates"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 183,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/?category=legal",
                                                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                        children: "Legal & Compliance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/?category=marketing",
                                                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                        children: "Marketing & Growth"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 171,
                                        columnNumber: 15
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
                                                        lineNumber: 208,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 206,
                                                columnNumber: 17
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
                                                        lineNumber: 211,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/?category=conferences",
                                                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                        children: "Conferences"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 217,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/?category=networking",
                                                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                        children: "Networking Events"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/?category=webinars",
                                                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                        children: "Webinars"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 229,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 205,
                                        columnNumber: 15
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
                                                        lineNumber: 242,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 240,
                                                columnNumber: 17
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
                                                        lineNumber: 245,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/?category=partnerships",
                                                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                        children: "Partnerships"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 251,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/?category=forums",
                                                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                        children: "Forums & Discussions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 257,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/contact",
                                                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                        children: "Contact Us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        className: "px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                        children: "About"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 sm:gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hidden sm:flex p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleWritePost,
                                        className: "hidden md:flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden lg:inline",
                                                children: "Write"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            ref: userMenuRef,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setUserMenuOpen(!userMenuOpen),
                                                    className: "flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            size: 18,
                                                            className: "sm:w-5 sm:h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 305,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden lg:inline",
                                                            children: user.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 306,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            size: 14,
                                                            className: "hidden sm:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 307,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 301,
                                                    columnNumber: 23
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
                                                                    lineNumber: 312,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500 dark:text-gray-400",
                                                                    children: user.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Navbar.jsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 311,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: user.role === "ADMIN" ? "/admin" : "/user",
                                                            className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                            onClick: ()=>setUserMenuOpen(false),
                                                            children: user.role === "ADMIN" ? "Admin Panel" : "User Panel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 319,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleLogout,
                                                            className: "w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Navbar.jsx",
                                                                    lineNumber: 332,
                                                                    columnNumber: 29
                                                                }, this),
                                                                "Logout"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 328,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 310,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 300,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors",
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 339,
                                            columnNumber: 21
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
                                            lineNumber: 355,
                                            columnNumber: 37
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 355,
                                            columnNumber: 57
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:flex items-center gap-2 ml-2 pl-2 border-l border-gray-200 dark:border-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://facebook.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "p-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                                "aria-label": "Facebook",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 367,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://twitter.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "p-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                                "aria-label": "Twitter",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 376,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 369,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://youtube.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "p-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                                "aria-label": "YouTube",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 385,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 378,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpen(!open),
                                        className: "lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                                        "aria-label": "Toggle menu",
                                        "aria-expanded": open,
                                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 396,
                                            columnNumber: 25
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 396,
                                            columnNumber: 43
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 390,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 281,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 animate-in slide-in-from-top duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 sm:px-6 py-4 space-y-2 max-h-[calc(100vh-72px)] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            onClick: ()=>setOpen(false),
                            className: "block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 407,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(mobileMenuOpen === "STARTUPS" ? null : "STARTUPS"),
                                    className: "w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Startups"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 425,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 18,
                                            className: `transition-transform duration-200 ${mobileMenuOpen === "STARTUPS" ? "rotate-180" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 426,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 417,
                                    columnNumber: 15
                                }, this),
                                mobileMenuOpen === "STARTUPS" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pl-4 space-y-1 mt-1 animate-in slide-in-from-top duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=startups",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Startup Stories"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 435,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=success-stories",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Success Stories"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 442,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=funding",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Funding & Investment"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 449,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=incubators",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Incubators & Accelerators"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 456,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 434,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 416,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(mobileMenuOpen === "RESOURCES" ? null : "RESOURCES"),
                                    className: "w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Resources"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 477,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 18,
                                            className: `transition-transform duration-200 ${mobileMenuOpen === "RESOURCES" ? "rotate-180" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 478,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 469,
                                    columnNumber: 15
                                }, this),
                                mobileMenuOpen === "RESOURCES" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pl-4 space-y-1 mt-1 animate-in slide-in-from-top duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=guides",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Startup Guides"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 487,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=tools",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Tools & Templates"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 494,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=legal",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Legal & Compliance"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 501,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=marketing",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Marketing & Growth"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 508,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 486,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 468,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(mobileMenuOpen === "EVENTS" ? null : "EVENTS"),
                                    className: "w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Events"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 529,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 18,
                                            className: `transition-transform duration-200 ${mobileMenuOpen === "EVENTS" ? "rotate-180" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 530,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 521,
                                    columnNumber: 15
                                }, this),
                                mobileMenuOpen === "EVENTS" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pl-4 space-y-1 mt-1 animate-in slide-in-from-top duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=workshops",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Workshops"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 539,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=conferences",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Conferences"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 546,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=networking",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Networking Events"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 553,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=webinars",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Webinars"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 560,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 538,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 520,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(mobileMenuOpen === "COMMUNITY" ? null : "COMMUNITY"),
                                    className: "w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Community"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 581,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 18,
                                            className: `transition-transform duration-200 ${mobileMenuOpen === "COMMUNITY" ? "rotate-180" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 582,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 573,
                                    columnNumber: 15
                                }, this),
                                mobileMenuOpen === "COMMUNITY" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pl-4 space-y-1 mt-1 animate-in slide-in-from-top duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=mentorship",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Mentorship"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 591,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=partnerships",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Partnerships"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 598,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/?category=forums",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Forums & Discussions"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 605,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            onClick: ()=>setOpen(false),
                                            className: "block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 612,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 590,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 572,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/about",
                            onClick: ()=>setOpen(false),
                            className: "block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 623,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                handleWritePost();
                                setOpen(false);
                            },
                            className: "w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-md mt-4 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 638,
                                    columnNumber: 15
                                }, this),
                                "Write a Post"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 631,
                            columnNumber: 13
                        }, this),
                        !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 border-t border-gray-200 dark:border-gray-800 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-gray-900 dark:text-white",
                                                children: user.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 647,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                                children: user.email
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 650,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 646,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: user.role === "ADMIN" ? "/admin" : "/user",
                                        onClick: ()=>setOpen(false),
                                        className: "block px-4 py-3 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                        children: user.role === "ADMIN" ? "Admin Panel" : "User Panel"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 654,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            handleLogout();
                                            setOpen(false);
                                        },
                                        className: "w-full text-left px-4 py-3 text-base text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 661,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                onClick: ()=>setOpen(false),
                                className: "block px-4 py-3 text-base font-medium text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md mt-4 transition-colors",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 672,
                                columnNumber: 19
                            }, this)
                        }, void 0, false)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 406,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 405,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.jsx",
        lineNumber: 93,
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
    // Dummy data for Top Picks
    const dummyTopPicks = [
        {
            _id: "dummy-1",
            title: "How India's Tech Startups Are Scaling Globally",
            slug: "india-tech-startups-scaling",
            featuredImage: "/demo.png",
            category: "Technology"
        },
        {
            _id: "dummy-2",
            title: "The Future of Fintech: Digital Banking Revolution",
            slug: "fintech-digital-banking",
            featuredImage: "/demo.png",
            category: "Finance"
        },
        {
            _id: "dummy-3",
            title: "Sustainable Energy: India's Green Tech Movement",
            slug: "sustainable-energy-green-tech",
            featuredImage: "/demo.png",
            category: "Innovation"
        },
        {
            _id: "dummy-4",
            title: "AI and Machine Learning: Transforming Businesses",
            slug: "ai-machine-learning-business",
            featuredImage: "/demo.png",
            category: "Technology"
        }
    ];
    const dummyMainArticle = {
        _id: "dummy-main",
        title: "UPI transactions capture how Indians spent, saved, and speculated in 2025",
        slug: "upi-transactions-2025",
        excerpt: "From the end of real-money gaming to the rise of digital gold, YourStory decodes the 228 billion transactions that shaped 2025.",
        author: {
            name: "Sayan Sen"
        },
        category: "News",
        featuredImage: "/demo.png",
        publishedAt: new Date().toISOString()
    };
    const dummyCapTable = [
        {
            _id: "dummy-cap-1",
            title: "Code to cricket: OpenAI's India push extends to the biggest consumer touchpoint",
            slug: "openai-india-cricket",
            author: {
                name: "Sohini Mitter"
            },
            featuredImage: "/demo.png",
            publishedAt: new Date().toISOString()
        },
        {
            _id: "dummy-cap-2",
            title: "Historically wealthiest old cities are its weakest online shoppers",
            slug: "cities-online-shopping",
            author: {
                name: "Parvathi Benu"
            },
            featuredImage: "/demo.png",
            publishedAt: new Date().toISOString()
        },
        {
            _id: "dummy-cap-3",
            title: "The botanical extracts sector is getting its M&A moment",
            slug: "botanical-extracts-ma",
            author: {
                name: "Anuj Suvarna"
            },
            featuredImage: "/demo.png",
            publishedAt: new Date().toISOString()
        }
    ];
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
            // Use API data if available, otherwise use dummy data
            const picks = featuredPosts.length > 0 ? featuredPosts.slice(0, 4) : dummyTopPicks;
            const main = featuredPosts.length > 4 ? featuredPosts[4] : dummyMainArticle;
            const capTable = featuredPosts.length > 5 ? featuredPosts.slice(5, 8) : dummyCapTable;
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
                                    lineNumber: 158,
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
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroFeatured.jsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-64 bg-gray-200 dark:bg-slate-700 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroFeatured.jsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroFeatured.jsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-4 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-8 bg-gray-200 dark:bg-slate-700 w-40 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroFeatured.jsx",
                                    lineNumber: 167,
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
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroFeatured.jsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HeroFeatured.jsx",
                    lineNumber: 156,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HeroFeatured.jsx",
                lineNumber: 155,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/HeroFeatured.jsx",
            lineNumber: 154,
            columnNumber: 7
        }, this);
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
                                        lineNumber: 186,
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
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1 -right-1 text-red-600 dark:text-red-500 text-xs",
                                                children: "Picks"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HeroFeatured.jsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        lineNumber: 204,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-full bg-gradient-to-br from-blue-400 to-blue-500 dark:from-blue-600 dark:to-blue-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroFeatured.jsx",
                                                        lineNumber: 212,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroFeatured.jsx",
                                                    lineNumber: 202,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 201,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-medium text-black dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 216,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, post._id || index, true, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/HeroFeatured.jsx",
                                lineNumber: 194,
                                columnNumber: 13
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
                                            lineNumber: 227,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
                                        children: mainArticle.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, this),
                                    mainArticle.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4",
                                        children: mainArticle.excerpt
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 233,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: getAuthorName(mainArticle.author)
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroFeatured.jsx",
                                            lineNumber: 238,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HeroFeatured.jsx",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroFeatured.jsx",
                        lineNumber: 183,
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
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HeroFeatured.jsx",
                                    lineNumber: 248,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/HeroFeatured.jsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 mb-8",
                                children: capTableArticles.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                        lineNumber: 263,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: getAuthorName(post.author)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/HeroFeatured.jsx",
                                                            lineNumber: 267,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HeroFeatured.jsx",
                                                        lineNumber: 266,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 262,
                                                columnNumber: 19
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
                                                    lineNumber: 272,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full bg-gradient-to-br from-blue-400 to-blue-500 dark:from-blue-600 dark:to-blue-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroFeatured.jsx",
                                                    lineNumber: 280,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 270,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, post._id || index, true, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 257,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/HeroFeatured.jsx",
                                lineNumber: 255,
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
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                                children: "Newsletter"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 289,
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
                                                        lineNumber: 295,
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
                                                        lineNumber: 298,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "w-full bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black font-medium py-2 px-4 rounded-md transition-colors text-sm",
                                                children: "Sign Up"
                                            }, void 0, false, {
                                                fileName: "[project]/components/HeroFeatured.jsx",
                                                lineNumber: 308,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/HeroFeatured.jsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HeroFeatured.jsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroFeatured.jsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroFeatured.jsx",
                lineNumber: 181,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/HeroFeatured.jsx",
            lineNumber: 180,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/HeroFeatured.jsx",
        lineNumber: 179,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
"use client";
;
;
;
;
;
function SpotLight() {
    // Static data for spotlight articles
    const spotlightPosts = [
        {
            id: 1,
            title: "How India's AI Startups Are Revolutionizing Healthcare",
            excerpt: "Leading healthcare AI companies are transforming patient care with innovative solutions that combine machine learning and medical expertise.",
            author: "Priya Sharma",
            category: "Technology",
            featuredImage: "/demo.png"
        },
        {
            id: 2,
            title: "The Rise of Sustainable Tech: Green Energy Startups",
            excerpt: "India's clean energy sector is witnessing unprecedented growth as startups develop innovative solutions for renewable energy adoption.",
            author: "Raj Patel",
            category: "Innovation",
            featuredImage: "/demo.png"
        },
        {
            id: 3,
            title: "Fintech Revolution: How Digital Payments Are Changing India",
            excerpt: "From UPI to digital wallets, fintech startups are reshaping how Indians transact, invest, and manage their finances.",
            author: "Anita Desai",
            category: "Finance",
            featuredImage: "/demo.png"
        },
        {
            id: 4,
            title: "EdTech Innovation: Transforming Education in Rural India",
            excerpt: "Technology-driven education platforms are bridging the gap between urban and rural learning opportunities.",
            author: "Vikram Singh",
            category: "Education",
            featuredImage: "/demo.png"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 py-16 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute top-0 left-0 w-full h-32 text-blue-200 dark:text-blue-900/30",
                        viewBox: "0 0 1200 120",
                        preserveAspectRatio: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0,60 Q300,20 600,60 T1200,60 L1200,0 L0,0 Z",
                            fill: "currentColor",
                            opacity: "0.3"
                        }, void 0, false, {
                            fileName: "[project]/components/SpotLight.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SpotLight.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute bottom-0 left-0 w-full h-32 text-blue-200 dark:text-blue-900/30",
                        viewBox: "0 0 1200 120",
                        preserveAspectRatio: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z",
                            fill: "currentColor",
                            opacity: "0.3"
                        }, void 0, false, {
                            fileName: "[project]/components/SpotLight.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SpotLight.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute left-0 top-1/2 -translate-y-1/2 w-64 h-full text-blue-200 dark:text-blue-900/20",
                        viewBox: "0 0 256 800",
                        preserveAspectRatio: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0,400 Q128,200 256,400 T256,800 L0,800 Z",
                            fill: "currentColor",
                            opacity: "0.2"
                        }, void 0, false, {
                            fileName: "[project]/components/SpotLight.jsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SpotLight.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SpotLight.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "hidden md:block w-24 h-1 text-blue-300 dark:text-blue-800",
                                        viewBox: "0 0 96 4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0,2 Q48,0 96,2",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            fill: "none"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SpotLight.jsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SpotLight.jsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative inline-flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white",
                                                children: [
                                                    "Spot",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative inline-block",
                                                        children: [
                                                            "Light",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute -top-1 -right-6 w-3 h-3 bg-red-600 dark:bg-red-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SpotLight.jsx",
                                                                lineNumber: 96,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/SpotLight.jsx",
                                                        lineNumber: 94,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-16 text-blue-300 dark:text-blue-800",
                                                viewBox: "0 0 64 64",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16,32 Q32,16 48,32",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    fill: "none",
                                                    opacity: "0.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SpotLight.jsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SpotLight.jsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-full h-1 text-blue-300 dark:text-blue-800",
                                            viewBox: "0 0 400 4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M0,2 Q200,0 400,2",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                fill: "none",
                                                opacity: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/SpotLight.jsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SpotLight.jsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SpotLight.jsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 dark:text-gray-400 text-lg font-medium",
                                        children: "Featured Stories & Insights"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SpotLight.jsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "flex-1 h-px text-blue-200 dark:text-blue-900/50",
                                        viewBox: "0 0 200 1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0,0.5 Q100,0.5 200,0.5",
                                            stroke: "currentColor",
                                            strokeWidth: "1",
                                            fill: "none"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SpotLight.jsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SpotLight.jsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SpotLight.jsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SpotLight.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: spotlightPosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/?category=${post.category.toLowerCase()}`,
                                className: "group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "absolute top-0 right-0 w-32 h-32 text-blue-100 dark:text-blue-900/50",
                                        viewBox: "0 0 128 128",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0,64 Q32,32 64,64 T128,64 L128,0 L0,0 Z",
                                            fill: "currentColor",
                                            opacity: "0.4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SpotLight.jsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SpotLight.jsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-video overflow-hidden bg-gray-100 dark:bg-slate-700",
                                        children: [
                                            post.featuredImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: post.featuredImage,
                                                alt: post.title,
                                                fill: true,
                                                className: "object-cover group-hover:scale-110 transition-transform duration-500",
                                                sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-sm font-medium",
                                                    children: "No Image"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SpotLight.jsx",
                                                    lineNumber: 171,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "absolute bottom-0 left-0 w-full h-16 text-white dark:text-slate-900",
                                                viewBox: "0 0 400 64",
                                                preserveAspectRatio: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M0,64 Q200,32 400,64 L400,64 L0,64 Z",
                                                    fill: "currentColor",
                                                    opacity: "0.1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SpotLight.jsx",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SpotLight.jsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 bg-black dark:bg-white rounded-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SpotLight.jsx",
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide",
                                                        children: post.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SpotLight.jsx",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-black dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this),
                                            post.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3",
                                                children: post.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 202,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                size: 14,
                                                                className: "text-gray-500 dark:text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SpotLight.jsx",
                                                                lineNumber: 210,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: post.author
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SpotLight.jsx",
                                                                lineNumber: 211,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/SpotLight.jsx",
                                                        lineNumber: 209,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 16,
                                                        className: "text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SpotLight.jsx",
                                                        lineNumber: 213,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "absolute bottom-0 left-0 w-full h-1 text-blue-200 dark:text-blue-800",
                                                viewBox: "0 0 300 4",
                                                preserveAspectRatio: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M0,2 Q150,0 300,2",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    fill: "none",
                                                    opacity: "0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SpotLight.jsx",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SpotLight.jsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SpotLight.jsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, post.id, true, {
                                fileName: "[project]/components/SpotLight.jsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/SpotLight.jsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SpotLight.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SpotLight.jsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
"use client";
;
;
;
;
function Featured() {
    // Static data for SMB Story
    const smbStories = [
        {
            id: 1,
            title: "How Sawariya Group built a $230M distribution engine for India's fragmented consumer economy",
            excerpt: "Founded in 1990, Sawariya Group is a leading distribution and brand management company. It advises brands on what to stock, where to stock it, and how to localise products for different markets across India's diverse consumer landscape.",
            author: "Pooja Malik",
            slug: "sawariya-group-distribution",
            featuredImage: "/demo.png"
        },
        {
            id: 2,
            title: "How Volks Energie carved its space in India's energy EPC market",
            author: "Trisha Medhi",
            slug: "volks-energie-epc-market"
        },
        {
            id: 3,
            title: "How Nova Dairy built a vast supply network and modern processing units with a focus on sustainable practices",
            author: "Pooja Malik",
            slug: "nova-dairy-supply-network"
        }
    ];
    // Static data for Her Story
    const herStories = [
        {
            id: 1,
            title: "Meet the women working to protect India's wildlife",
            author: "Rekha Balakrishnan",
            slug: "women-protecting-wildlife",
            featuredImage: "/demo.png"
        },
        {
            id: 2,
            title: "How a village craft became a livelihood for hundreds of women across generations",
            author: "Saranya Chakrapani",
            slug: "village-craft-women-livelihood",
            featuredImage: "/demo.png"
        },
        {
            id: 3,
            title: "The canvas of resilience: How former IRS officer Neena Singh found her calling in art",
            author: "Rekha Balakrishnan",
            slug: "neena-singh-art-resilience",
            featuredImage: "/demo.png"
        },
        {
            id: 4,
            title: "Auto Queens captures life beyond the spectacle of women's auto-rickshaw driving",
            author: "Saranya Chakrapani",
            slug: "auto-queens-women-drivers",
            featuredImage: "/demo.png"
        },
        {
            id: 5,
            title: "Why women's malnutrition in India is not just about hunger",
            author: "Saranya Chakrapani",
            slug: "women-malnutrition-india",
            featuredImage: "/demo.png"
        }
    ];
    // Static data for Social Story
    const socialStories = [
        {
            id: 1,
            title: "How Aspiring Leaders India Foundation is building leadership for first-generation students",
            author: "Editorial Team",
            slug: "aspiring-leaders-foundation",
            featuredImage: "/demo.png"
        },
        {
            id: 2,
            title: "How Launch Girls is helping girls in 16 countries own their economic futures",
            author: "Editorial Team",
            slug: "launch-girls-economic-futures"
        },
        {
            id: 3,
            title: "How Connecting the Dots is transforming science and math learning in rural schools",
            author: "Editorial Team",
            slug: "connecting-dots-rural-education"
        },
        {
            id: 4,
            title: "Alok Menon on comedy, collapse, and queer survival",
            author: "Editorial Team",
            slug: "alok-menon-comedy-queer"
        },
        {
            id: 5,
            title: "How an Indian RUTF manufacturer is supporting Sudan's emergency nutrition needs",
            author: "Editorial Team",
            slug: "rutf-manufacturer-sudan"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6 mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-24 h-24 text-black dark:text-white",
                                        viewBox: "0 0 100 100",
                                        fill: "currentColor",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "30",
                                                cy: "25",
                                                r: "8"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "22",
                                                y: "33",
                                                width: "16",
                                                height: "30",
                                                rx: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "18",
                                                y: "50",
                                                width: "8",
                                                height: "20",
                                                rx: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "34",
                                                y: "50",
                                                width: "8",
                                                height: "20",
                                                rx: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M38,40 Q50,45 70,50 Q85,52 90,45",
                                                stroke: "currentColor",
                                                strokeWidth: "3",
                                                strokeLinecap: "round",
                                                fill: "none"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-2 -right-2 w-6 h-6 bg-blue-500 dark:bg-blue-600 rounded-full opacity-60"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Featured.jsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Featured.jsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-2",
                                    children: "Featured"
                                }, void 0, false, {
                                    fileName: "[project]/components/Featured.jsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1 w-32 bg-gradient-to-r from-blue-500 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/components/Featured.jsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Featured.jsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Featured.jsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-black dark:bg-white px-5 py-4 rounded-t-lg shadow-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-white dark:text-black font-bold text-lg uppercase tracking-wider",
                                        children: "SMB Story"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Featured.jsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/post?slug=${smbStories[0].slug}`,
                                    className: "group block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black dark:bg-slate-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2 relative z-10 text-white dark:text-white",
                                                children: smbStories[0].title
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this),
                                            smbStories[0].excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-300 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed relative z-10",
                                                children: smbStories[0].excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 153,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-400 dark:text-gray-400",
                                                        children: smbStories[0].author
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Featured.jsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 16,
                                                        className: "text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Featured.jsx",
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Featured.jsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                smbStories.slice(1).map((story)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/post?slug=${story.slug}`,
                                        className: "group block pb-6 border-b border-gray-200 dark:border-slate-700 last:border-0 hover:bg-gray-50 dark:hover:bg-slate-800/50 p-3 rounded-lg transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-base font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2",
                                                children: story.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                                        children: story.author
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Featured.jsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 14,
                                                        className: "text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Featured.jsx",
                                                        lineNumber: 180,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, story.id, true, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Featured.jsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-black dark:bg-white px-5 py-4 rounded-t-lg shadow-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-white dark:text-black font-bold text-lg uppercase tracking-wider",
                                        children: "Her Story"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Featured.jsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                herStories.map((story)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/post?slug=${story.slug}`,
                                        className: "group flex gap-4 pb-6 border-b border-gray-200 dark:border-slate-700 last:border-0 hover:bg-gray-50 dark:hover:bg-slate-800/50 p-3 rounded-lg transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-base font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2",
                                                        children: story.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Featured.jsx",
                                                        lineNumber: 199,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Featured.jsx",
                                                                lineNumber: 203,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: story.author
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Featured.jsx",
                                                                lineNumber: 204,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Featured.jsx",
                                                        lineNumber: 202,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-800 shadow-md group-hover:shadow-lg transition-shadow",
                                                children: story.featuredImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: story.featuredImage,
                                                    alt: story.title,
                                                    width: 80,
                                                    height: 80,
                                                    className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Featured.jsx",
                                                    lineNumber: 209,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full bg-gradient-to-br from-pink-400 to-pink-500 dark:from-pink-600 dark:to-pink-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Featured.jsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, story.id, true, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Featured.jsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-black dark:bg-white px-5 py-4 rounded-t-lg shadow-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-white dark:text-black font-bold text-lg uppercase tracking-wider",
                                        children: "Social Story"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Featured.jsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/post?slug=${socialStories[0].slug}`,
                                    className: "group block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-video overflow-hidden bg-gray-100 dark:bg-slate-800 rounded-lg shadow-lg mb-3 group-hover:shadow-xl transition-shadow",
                                        children: [
                                            socialStories[0].featuredImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: socialStories[0].featuredImage,
                                                alt: socialStories[0].title,
                                                fill: true,
                                                className: "object-cover group-hover:scale-110 transition-transform duration-500",
                                                sizes: "(max-width: 768px) 100vw, 33vw"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full bg-gradient-to-br from-green-400 to-green-500 dark:from-green-600 dark:to-green-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 242,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 left-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center justify-center w-10 h-10 bg-red-600 dark:bg-red-500 text-white font-bold rounded-full text-sm shadow-lg",
                                                    children: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Featured.jsx",
                                                    lineNumber: 245,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-white font-bold text-lg line-clamp-2 group-hover:text-blue-300 transition-colors",
                                                    children: socialStories[0].title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Featured.jsx",
                                                    lineNumber: 250,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Featured.jsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                socialStories.slice(1).map((story, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/post?slug=${story.slug}`,
                                        className: "group flex gap-3 pb-6 border-b border-gray-200 dark:border-slate-700 last:border-0 hover:bg-gray-50 dark:hover:bg-slate-800/50 p-3 rounded-lg transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-shrink-0 inline-flex items-center justify-center w-8 h-8 bg-red-600 dark:bg-red-500 text-white font-bold rounded-full text-xs shadow-md group-hover:scale-110 transition-transform",
                                                children: index + 2
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 264,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-base font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 flex-1",
                                                children: story.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 267,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 14,
                                                className: "text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Featured.jsx",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, story.id, true, {
                                        fileName: "[project]/components/Featured.jsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Featured.jsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Featured.jsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Featured.jsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Featured.jsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
function Explore() {
    // Dummy data for 16 Maharashtra-based startups
    const startups = [
        {
            id: 1,
            title: "TechPune Solutions",
            category: "SAAS",
            slug: "techpune-solutions",
            featuredImage: "/demo.png",
            location: "Pune"
        },
        {
            id: 2,
            title: "Mumbai AI Labs",
            category: "AI/ML",
            slug: "mumbai-ai-labs",
            featuredImage: "/demo.png",
            location: "Mumbai"
        },
        {
            id: 3,
            title: "Nashik HealthTech",
            category: "Health-Tech",
            slug: "nashik-healthtech",
            featuredImage: "/demo.png",
            location: "Nashik"
        },
        {
            id: 4,
            title: "Maharashtra AgriTech",
            category: "Agritech",
            slug: "maharashtra-agritech",
            featuredImage: "/demo.png",
            location: "Nagpur"
        },
        {
            id: 5,
            title: "Green Maharashtra",
            category: "Cleantech",
            slug: "green-maharashtra",
            featuredImage: "/demo.png",
            location: "Pune"
        },
        {
            id: 6,
            title: "Mumbai FinTech Hub",
            category: "FinTech",
            slug: "mumbai-fintech-hub",
            featuredImage: "/demo.png",
            location: "Mumbai"
        },
        {
            id: 7,
            title: "Pune EdTech Innovations",
            category: "EdTech",
            slug: "pune-edtech-innovations",
            featuredImage: "/demo.png",
            location: "Pune"
        },
        {
            id: 8,
            title: "Mumbai Mobility",
            category: "Mobility",
            slug: "mumbai-mobility",
            featuredImage: "/demo.png",
            location: "Mumbai"
        },
        {
            id: 9,
            title: "Aurangabad Enterprise",
            category: "Enterprise-Tech",
            slug: "aurangabad-enterprise",
            featuredImage: "/demo.png",
            location: "Aurangabad"
        },
        {
            id: 10,
            title: "Kolhapur AI Solutions",
            category: "AI/ML",
            slug: "kolhapur-ai-solutions",
            featuredImage: "/demo.png",
            location: "Kolhapur"
        },
        {
            id: 11,
            title: "Pune DroneTech",
            category: "Dronetech",
            slug: "pune-dronetech",
            featuredImage: "/demo.png",
            location: "Pune"
        },
        {
            id: 12,
            title: "Mumbai MedTech",
            category: "Health-Tech",
            slug: "mumbai-medtech",
            featuredImage: "/demo.png",
            location: "Mumbai"
        },
        {
            id: 13,
            title: "Nagpur Data Analytics",
            category: "Data Analytics",
            slug: "nagpur-data-analytics",
            featuredImage: "/demo.png",
            location: "Nagpur"
        },
        {
            id: 14,
            title: "Thane IoT Solutions",
            category: "IoT",
            slug: "thane-iot-solutions",
            featuredImage: "/demo.png",
            location: "Thane"
        },
        {
            id: 15,
            title: "Pune Blockchain Hub",
            category: "Web3",
            slug: "pune-blockchain-hub",
            featuredImage: "/demo.png",
            location: "Pune"
        },
        {
            id: 16,
            title: "Mumbai Logistics Tech",
            category: "Logistics",
            slug: "mumbai-logistics-tech",
            featuredImage: "/demo.png",
            location: "Mumbai"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative inline-block mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white relative",
                                children: [
                                    "EXPLO",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative inline-block mx-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative z-10 text-orange-500 dark:text-orange-400",
                                                children: "R"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Explore.jsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-6 -left-16 text-[10px] md:text-xs font-normal text-orange-500 dark:text-orange-400 whitespace-nowrap transform -rotate-12",
                                                children: "MSO PREDICTS"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Explore.jsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -bottom-6 -right-16 text-[10px] md:text-xs font-normal text-orange-500 dark:text-orange-400 whitespace-nowrap transform rotate-12",
                                                children: "MSO"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Explore.jsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Explore.jsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    "E"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Explore.jsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Explore.jsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 dark:text-gray-300 text-lg md:text-xl mt-4 font-medium",
                            children: "Discover emerging startups from Maharashtra and explore the innovation ecosystem"
                        }, void 0, false, {
                            fileName: "[project]/components/Explore.jsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Explore.jsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12",
                    children: startups.map((startup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/?category=${startup.category.toLowerCase().replace(/\s+/g, '-')}`,
                            className: "group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-xl transition-all duration-300 aspect-square",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0",
                                    children: [
                                        startup.featuredImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: startup.featuredImage,
                                            alt: startup.title,
                                            fill: true,
                                            className: "object-cover opacity-50 dark:opacity-40 group-hover:opacity-70 dark:group-hover:opacity-60 transition-opacity duration-300",
                                            sizes: "(max-width: 768px) 50vw, 25vw"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Explore.jsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 opacity-20 dark:opacity-30 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Explore.jsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-white/95 dark:from-slate-900/95 via-white/80 dark:via-slate-900/80 to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Explore.jsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Explore.jsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-full flex flex-col justify-end p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-gray-900 dark:text-white font-bold text-sm md:text-base mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors line-clamp-2",
                                            children: startup.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/Explore.jsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "uppercase tracking-wide font-medium",
                                                        children: startup.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Explore.jsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Explore.jsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this),
                                                startup.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-orange-500 dark:text-orange-400 font-semibold",
                                                    children: startup.location
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Explore.jsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Explore.jsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Explore.jsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, startup.id, true, {
                            fileName: "[project]/components/Explore.jsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Explore.jsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/?category=startups",
                        className: "inline-block px-8 py-3 border-2 border-orange-500 dark:border-orange-400 text-orange-500 dark:text-orange-400 font-semibold rounded-lg hover:bg-orange-500 dark:hover:bg-orange-400 hover:text-white dark:hover:text-white transition-all duration-300 shadow-md hover:shadow-lg",
                        children: "View All Companies"
                    }, void 0, false, {
                        fileName: "[project]/components/Explore.jsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Explore.jsx",
                    lineNumber: 210,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Explore.jsx",
            lineNumber: 141,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Explore.jsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_c = Explore;
var _c;
__turbopack_context__.k.register(_c, "Explore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DiscoverMore.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DiscoverMore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
"use client";
;
;
;
function DiscoverMore() {
    // Static data for categories and articles
    const categories = [
        {
            name: "Startup",
            articles: [
                "How Speedata Is Powering Next Gen AI and Big Data With APU Chips",
                "SGA marks 15 years of redefining communications consulting in India",
                "From Hackathon to Lifesaving: How EmerReady Prepares Kids for...",
                "Woven by tradition: How Taavi is bringing India's craft heritage into the..."
            ]
        },
        {
            name: "Just In",
            articles: [
                "[Exclusive] Endiya Partners launches sports tournaments for India's startup...",
                "Startup news and updates: Daily roundup (April 29, 2025)",
                "Women's Day: PM Modi salutes \"Nari Shakti\", hands over social media...",
                "Startup news and updates: Daily roundup (January 21, 2025)"
            ]
        },
        {
            name: "Technology",
            articles: [
                "Outlook 2026: India's semiconductor push clears capacity hurdle; next phas...",
                "India launches DHRUV64, first indigenously designed 1.0 GHz 64-bit...",
                "Build an AI-powered business with 40% off on Salesforce's core platforms",
                "Tata, Intel sign MoU to build India centred silicon and compute ecosystem"
            ]
        },
        {
            name: "Business Ideas",
            articles: [
                "5 Profitable small business ideas for new founders",
                "This Indian Tree Can Make You Richer Than Sugarcane or Wheat",
                "The Day KFC Ran Out of Chicken - And Turned Crisis into a Comeback: A Geni...",
                "Meet the 10 entrepreneurs set to drive change in 2025"
            ]
        },
        {
            name: "Books",
            articles: [
                "7 Books that bring clarity and purpose to your new year",
                "Reading trends in 2026: Genres shaping modern readers",
                "2026 Reading goals: How to create a lasting book habit",
                "2026's most anticipated books that redefine storytelling"
            ]
        },
        {
            name: "Campaign",
            articles: [
                "BharatPe's 'Hai Yakeen' campaign celebrates the indomitable spirit of...",
                "SMB Week: How OTT has changed the face of India's media and entertainmen...",
                "SMB Week: Here's how SMBs in the manufacturing sector can find...",
                "SMB Week: How COVID-19 catalysed efforts to build a stronger healthcare..."
            ]
        },
        {
            name: "Story",
            articles: [
                "Spoken word artist Nayab Midha on power of poetry and a programme to...",
                "Beyond assumptions: What persons with disabilities wish you understood",
                "SheSparks at TechSparks, women Kho Kho World Cup champions and a...",
                "These new age beverage brands are reinventing India's chai and coffee..."
            ]
        },
        {
            name: "Sports",
            articles: [
                "Pranavi Urs becomes first Indian woman to win a pro golf title in a mixed gende...",
                "Boxing champion Preeti Pawar on fighting her way back into the ring aft...",
                "How India's women Kho Kho World Cup champions are redefining the game",
                "Women in blue bring home World Cup, script history"
            ]
        },
        {
            name: "Resources",
            articles: [
                "These businesses are turning traditional Indian sweets into health conscious...",
                "How brands are blending tech with tradition this Ganesh Chaturthi 2025",
                "What to consider before taking a business loan?",
                "Must read business newsletters: An entrepreneur's secret weapon"
            ]
        },
        {
            name: "Marketing & Sales",
            articles: [
                "Get started with affiliate marketing with these basic steps",
                "Want to ace affiliate marketing? Try and avoid these rookie mistakes",
                "Building a brand: 10 tips for creating outstanding video ads",
                "Content marketing is not just writing blogs"
            ]
        },
        {
            name: "Funding",
            articles: [
                "NBFC Varthana bags $6M loan from WaterEquity for school sanitation...",
                "Marketing automation platform Nitro Commerce raises $5M in Series A roun...",
                "Elon Musk's xAI raises $20B in Series E",
                "Agritech startup Arya.ag raises Rs 725 Cr in a Series D funding"
            ]
        },
        {
            name: "Social & Green News",
            articles: [
                "Strong network of MSMEs being developed; only India can buttress...",
                "PM launches Rs 24,000 Cr scheme for vulnerable tribal groups' welfare",
                "Aiming to reduce plastic, The Body Shop to launch refill stations in India by year...",
                "Five new animal species discovered in Tibet"
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white inline-flex items-center",
                        children: [
                            "Discover M",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative z-10",
                                        children: "o"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DiscoverMore.jsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                        className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 text-yellow-500 dark:text-yellow-400",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DiscoverMore.jsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DiscoverMore.jsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            "re"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DiscoverMore.jsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/DiscoverMore.jsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-black dark:text-white mb-2",
                                            children: category.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/DiscoverMore.jsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px bg-gray-300 dark:bg-slate-700"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DiscoverMore.jsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DiscoverMore.jsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: category.articles.map((article, articleIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`,
                                                className: "block text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-relaxed",
                                                children: article
                                            }, void 0, false, {
                                                fileName: "[project]/components/DiscoverMore.jsx",
                                                lineNumber: 150,
                                                columnNumber: 21
                                            }, this)
                                        }, articleIndex, false, {
                                            fileName: "[project]/components/DiscoverMore.jsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/DiscoverMore.jsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/components/DiscoverMore.jsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/DiscoverMore.jsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/DiscoverMore.jsx",
            lineNumber: 121,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/DiscoverMore.jsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_c = DiscoverMore;
var _c;
__turbopack_context__.k.register(_c, "DiscoverMore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_d9bbdbbf._.js.map