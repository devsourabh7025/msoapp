(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/add-post/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-1.js [app-client] (ecmascript) <export default as Heading1>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bold.js [app-client] (ecmascript) <export default as Bold>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/italic.js [app-client] (ecmascript) <export default as Italic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/underline.js [app-client] (ecmascript) <export default as Underline>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AddPost() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("content");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        excerpt: "",
        category: "",
        featuredImage: "",
        status: "draft",
        metaTitle: "",
        metaDescription: "",
        metaKeywords: "",
        ogTitle: "",
        ogDescription: "",
        ogImage: ""
    });
    const [contentBlocks, setContentBlocks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showMenuFor, setShowMenuFor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const blockTypes = [
        {
            type: "text",
            label: "Text",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"]
        },
        {
            type: "heading",
            label: "Heading",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__["Heading1"]
        },
        {
            type: "image",
            label: "Image",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"]
        },
        {
            type: "list",
            label: "List",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"]
        },
        {
            type: "quote",
            label: "Quote",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"]
        }
    ];
    const addBlock = (index, type)=>{
        const date = Date.now();
        const newBlock = {
            id: date + Math.random(),
            type,
            content: type === "list" ? [
                {
                    text: "",
                    bold: false,
                    italic: false,
                    underline: false,
                    color: ""
                }
            ] : "",
            image: type === "image" ? "" : null,
            alt: type === "image" ? "" : null,
            level: type === "heading" ? 2 : null,
            heading: type === "list" ? "" : null,
            ordered: type === "list" ? false : null,
            bold: type === "text" ? false : null,
            italic: type === "text" ? false : null,
            underline: type === "text" ? false : null,
            color: type === "text" ? "" : null
        };
        const newBlocks = [
            ...contentBlocks
        ];
        newBlocks.splice(index + 1, 0, newBlock);
        setContentBlocks(newBlocks);
        setShowMenuFor(null);
    };
    const updateBlock = (id, field, value)=>{
        setContentBlocks(contentBlocks.map((block)=>block.id === id ? {
                ...block,
                [field]: value
            } : block));
    };
    const deleteBlock = (id)=>{
        setContentBlocks(contentBlocks.filter((block)=>block.id !== id));
    };
    const addListItem = (blockId)=>{
        setContentBlocks(contentBlocks.map((block)=>block.id === blockId ? {
                ...block,
                content: [
                    ...block.content || [],
                    {
                        text: "",
                        bold: false,
                        italic: false,
                        underline: false,
                        color: ""
                    }
                ]
            } : block));
    };
    const updateListItem = (blockId, itemIndex, field, value)=>{
        setContentBlocks(contentBlocks.map((block)=>block.id === blockId ? {
                ...block,
                content: block.content.map((item, idx)=>idx === itemIndex ? typeof item === 'string' ? {
                        text: value,
                        bold: false,
                        italic: false,
                        underline: false,
                        color: ""
                    } : {
                        ...item,
                        [field]: value
                    } : item)
            } : block));
    };
    const deleteListItem = (blockId, itemIndex)=>{
        setContentBlocks(contentBlocks.map((block)=>block.id === blockId ? {
                ...block,
                content: block.content.filter((_, idx)=>idx !== itemIndex)
            } : block));
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleImageUpload = async (e, fieldName)=>{
        const file = e.target.files[0];
        if (!file) return;
        // For now, we'll create a data URL. In production, upload to a service like Cloudinary
        const reader = new FileReader();
        reader.onloadend = ()=>{
            setFormData({
                ...formData,
                [fieldName]: reader.result
            });
        };
        reader.readAsDataURL(file);
    };
    const handleBlockImageUpload = async (e, blockId)=>{
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = ()=>{
            updateBlock(blockId, "image", reader.result);
        };
        reader.readAsDataURL(file);
    };
    const handleSubmit = async (e, customData = null)=>{
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const dataToUse = customData || formData;
            // Validate that there's at least some content
            if (contentBlocks.length === 0) {
                setError("Please add at least one content block");
                setLoading(false);
                return;
            }
            // Check if all blocks are empty
            const hasContent = contentBlocks.some((block)=>{
                if (block.type === "text" || block.type === "heading" || block.type === "quote") {
                    return block.content && block.content.trim() !== "";
                }
                if (block.type === "list") {
                    return block.content && block.content.some((item)=>{
                        const text = typeof item === 'string' ? item : item?.text;
                        return text && text.trim() !== "";
                    });
                }
                if (block.type === "image") {
                    return block.image && block.image.trim() !== "";
                }
                return false;
            });
            if (!hasContent) {
                setError("Please add content to at least one block");
                setLoading(false);
                return;
            }
            // Convert content blocks to content string
            const content = contentBlocks.length > 0 ? contentBlocks.map((block)=>{
                if (block.type === "text") return block.content || "";
                if (block.type === "heading") {
                    if (!block.content) return "";
                    const level = block.level || 2;
                    const hashes = "#".repeat(level);
                    return `${hashes} ${block.content}`;
                }
                if (block.type === "quote") return block.content ? `> ${block.content}` : "";
                if (block.type === "list") {
                    const listItems = (block.content || []).filter((item)=>{
                        const text = typeof item === 'string' ? item : item?.text;
                        return text && text.trim() !== "";
                    });
                    if (listItems.length === 0) return "";
                    const prefix = block.ordered ? "" : "- ";
                    return listItems.map((item, idx)=>{
                        const text = typeof item === 'string' ? item : item?.text || "";
                        const num = block.ordered ? `${idx + 1}. ` : prefix;
                        return `${num}${text}`;
                    }).join("\n");
                }
                if (block.type === "image") {
                    return block.image ? `![${block.alt || "Image"}](${block.image})` : "";
                }
                return "";
            }).filter(Boolean).join("\n\n") : "";
            const seoData = {
                metaTitle: dataToUse.metaTitle || dataToUse.title,
                metaDescription: dataToUse.metaDescription || dataToUse.excerpt,
                metaKeywords: dataToUse.metaKeywords,
                ogTitle: dataToUse.ogTitle || dataToUse.title,
                ogDescription: dataToUse.ogDescription || dataToUse.excerpt,
                ogImage: dataToUse.ogImage || dataToUse.featuredImage,
                twitterCard: "summary_large_image"
            };
            const postData = {
                title: dataToUse.title,
                excerpt: dataToUse.excerpt,
                content: content,
                category: dataToUse.category,
                featuredImage: dataToUse.featuredImage,
                status: dataToUse.status,
                contentBlocks: contentBlocks,
                seo: seoData
            };
            const response = await fetch("/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postData)
            });
            const data = await response.json();
            /* eslint-disable */ console.log(...oo_oo(`470636472_273_6_273_23_4`, data));
            if (!response.ok) {
                const errorMessage = data.error || data.message || "Failed to create post";
                const errorDetails = data.details || data.errorName || "";
                setError(`${errorMessage}${errorDetails ? ` (${errorDetails})` : ""}`);
                /* eslint-disable */ console.error(...oo_tx(`470636472_279_8_285_10_11`, "Post creation error:", {
                    status: response.status,
                    error: data.error,
                    errorName: data.errorName,
                    details: data.details,
                    fullData: data
                }));
                setLoading(false);
                return;
            }
            // Success - redirect
            router.push("/admin/posts");
            router.refresh();
        } catch (err) {
            /* eslint-disable */ console.error(...oo_tx(`470636472_294_6_294_52_11`, "Post creation exception:", err));
            setError(`An error occurred: ${err.message || "Please try again."}`);
            setLoading(false);
        }
    };
    const categories = [
        "technology",
        "business",
        "startups",
        "funding",
        "innovation",
        "entrepreneurship",
        "success-stories",
        "guides",
        "tools",
        "legal",
        "marketing"
    ];
    const renderBlock = (block, index)=>{
        const BlockIcon = blockTypes.find((b)=>b.type === block.type)?.icon || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-2 mb-2 group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex-shrink-0 pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setShowMenuFor(showMenuFor === block.id ? null : block.id),
                            className: "w-6 h-6 flex items-center justify-center rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-red-500 dark:hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16,
                                className: "text-gray-400 dark:text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/add-post/page.jsx",
                                lineNumber: 329,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/add-post/page.jsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this),
                        showMenuFor === block.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-8 top-0 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg p-1.5 min-w-[180px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-1.5 pb-1.5 border-b border-gray-200 dark:border-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
                                            children: "Add Block"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowMenuFor(null),
                                            className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 344,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-0.5",
                                    children: blockTypes.map((blockType)=>{
                                        const Icon = blockType.icon;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>addBlock(index, blockType.type),
                                            className: "w-full flex items-center gap-1.5 px-2 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-xs text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    size: 16,
                                                    className: "text-gray-600 dark:text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 357,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700 dark:text-gray-300",
                                                    children: blockType.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 361,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, blockType.type, true, {
                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                            lineNumber: 351,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/add-post/page.jsx",
                            lineNumber: 334,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/add-post/page.jsx",
                    lineNumber: 321,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                block.type === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: block.content,
                                            onChange: (e)=>updateBlock(block.id, "content", e.target.value),
                                            rows: 3,
                                            className: "w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-1 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white resize-none",
                                            placeholder: "Enter text content..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium text-gray-700 dark:text-gray-300",
                                                    children: "Format:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>updateBlock(block.id, "bold", !block.bold),
                                                    className: `p-1.5 rounded border ${block.bold ? "bg-blue-500 text-white border-blue-500" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"}`,
                                                    title: "Bold",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__["Bold"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 398,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 388,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>updateBlock(block.id, "italic", !block.italic),
                                                    className: `p-1.5 rounded border ${block.italic ? "bg-blue-500 text-white border-blue-500" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"}`,
                                                    title: "Italic",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__["Italic"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 410,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 400,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>updateBlock(block.id, "underline", !block.underline),
                                                    className: `p-1.5 rounded border ${block.underline ? "bg-blue-500 text-white border-blue-500" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"}`,
                                                    title: "Underline",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__["Underline"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 422,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 412,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs text-gray-600 dark:text-gray-400",
                                                            children: "Color:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 425,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "color",
                                                            value: block.color || "#000000",
                                                            onChange: (e)=>updateBlock(block.id, "color", e.target.value),
                                                            className: "w-8 h-6 border border-gray-300 dark:border-gray-600 rounded cursor-pointer",
                                                            title: "Text Color"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 426,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 424,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this),
                                block.type === "heading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap",
                                                    children: "Heading Level:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 441,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: block.level || 2,
                                                    onChange: (e)=>updateBlock(block.id, "level", parseInt(e.target.value)),
                                                    className: "px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-1 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: 1,
                                                            children: "H1 - Largest"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 451,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: 2,
                                                            children: "H2 - Large"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 452,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: 3,
                                                            children: "H3 - Medium"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 453,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: 4,
                                                            children: "H4 - Small"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 454,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: 5,
                                                            children: "H5 - Smaller"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 455,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: 6,
                                                            children: "H6 - Smallest"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 456,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 444,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                            lineNumber: 440,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: block.content,
                                            onChange: (e)=>updateBlock(block.id, "content", e.target.value),
                                            className: `w-full px-3 py-1.5 font-bold border border-gray-300 dark:border-gray-600 rounded focus:ring-1 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white ${block.level === 1 ? "text-3xl" : block.level === 2 ? "text-2xl" : block.level === 3 ? "text-xl" : block.level === 4 ? "text-lg" : block.level === 5 ? "text-base" : "text-sm"}`,
                                            placeholder: "Enter heading..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                    lineNumber: 439,
                                    columnNumber: 15
                                }, this),
                                block.type === "image" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "url",
                                            value: block.image || "",
                                            onChange: (e)=>updateBlock(block.id, "image", e.target.value),
                                            className: "w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-1 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white",
                                            placeholder: "Image URL"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                            lineNumber: 485,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                                    children: "OR"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 495,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            accept: "image/*",
                                                            onChange: (e)=>handleBlockImageUpload(e, block.id),
                                                            className: "hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 497,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer text-sm text-center",
                                                            children: "Upload Image"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 503,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 496,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                            lineNumber: 494,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: block.alt || "",
                                            onChange: (e)=>updateBlock(block.id, "alt", e.target.value),
                                            className: "w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-1 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white",
                                            placeholder: "Image alt text (optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                            lineNumber: 508,
                                            columnNumber: 17
                                        }, this),
                                        block.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: block.image,
                                            alt: block.alt || "Preview",
                                            className: "w-full max-w-md h-48 object-cover rounded-lg border border-gray-200 dark:border-gray-700",
                                            onError: (e)=>{
                                                e.target.style.display = "none";
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                            lineNumber: 516,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                    lineNumber: 484,
                                    columnNumber: 15
                                }, this),
                                block.type === "list" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-gray-50 dark:bg-gray-900/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-medium text-gray-700 dark:text-gray-300",
                                                    children: "List Heading (Optional):"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 532,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: block.heading || "",
                                                    onChange: (e)=>updateBlock(block.id, "heading", e.target.value),
                                                    className: "w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-1 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white",
                                                    placeholder: "Enter list heading..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 535,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                            lineNumber: 531,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap",
                                                    children: "List Style:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 546,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: block.ordered ? "ordered" : "unordered",
                                                    onChange: (e)=>updateBlock(block.id, "ordered", e.target.value === "ordered"),
                                                    className: "px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-1 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "unordered",
                                                            children: "Bulleted (•)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 554,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "ordered",
                                                            children: "Numbered (1, 2, 3...)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 555,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 549,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                            lineNumber: 545,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                (block.content || []).map((item, itemIndex)=>{
                                                    const itemText = typeof item === 'string' ? item : item?.text || "";
                                                    const itemBold = typeof item === 'string' ? false : item?.bold || false;
                                                    const itemItalic = typeof item === 'string' ? false : item?.italic || false;
                                                    const itemUnderline = typeof item === 'string' ? false : item?.underline || false;
                                                    const itemColor = typeof item === 'string' ? "" : item?.color || "";
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-2 p-2 border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-500 dark:text-gray-400 mt-1.5 text-sm",
                                                                children: block.ordered ? `${itemIndex + 1}.` : "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                lineNumber: 570,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: itemText,
                                                                        onChange: (e)=>updateListItem(block.id, itemIndex, "text", e.target.value),
                                                                        className: "w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded focus:ring-1 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white text-xs",
                                                                        placeholder: "List item text"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                                        lineNumber: 574,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2 flex-wrap",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>updateListItem(block.id, itemIndex, "bold", !itemBold),
                                                                                className: `p-1.5 rounded border ${itemBold ? "bg-blue-500 text-white border-blue-500" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"}`,
                                                                                title: "Bold",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__["Bold"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                    lineNumber: 592,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                lineNumber: 582,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>updateListItem(block.id, itemIndex, "italic", !itemItalic),
                                                                                className: `p-1.5 rounded border ${itemItalic ? "bg-blue-500 text-white border-blue-500" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"}`,
                                                                                title: "Italic",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__["Italic"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                    lineNumber: 604,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                lineNumber: 594,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>updateListItem(block.id, itemIndex, "underline", !itemUnderline),
                                                                                className: `p-1.5 rounded border ${itemUnderline ? "bg-blue-500 text-white border-blue-500" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600"}`,
                                                                                title: "Underline",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__["Underline"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                    lineNumber: 616,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                lineNumber: 606,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "text-xs text-gray-600 dark:text-gray-400",
                                                                                        children: "Color:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                        lineNumber: 619,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "color",
                                                                                        value: itemColor || "#000000",
                                                                                        onChange: (e)=>updateListItem(block.id, itemIndex, "color", e.target.value),
                                                                                        className: "w-8 h-6 border border-gray-300 dark:border-gray-600 rounded cursor-pointer",
                                                                                        title: "Text Color"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                        lineNumber: 620,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                lineNumber: 618,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>deleteListItem(block.id, itemIndex),
                                                                                className: "ml-auto p-1.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded",
                                                                                title: "Delete item",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                    lineNumber: 634,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                lineNumber: 628,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                                        lineNumber: 581,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                lineNumber: 573,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, itemIndex, true, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 569,
                                                        columnNumber: 23
                                                    }, this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>addListItem(block.id),
                                                    className: "mt-1 px-2 py-1 text-xs border border-dashed border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400",
                                                    children: "+ Add List Item"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 641,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                            lineNumber: 560,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                    lineNumber: 529,
                                    columnNumber: 15
                                }, this),
                                block.type === "quote" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-l-4 border-red-500 pl-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: block.content,
                                        onChange: (e)=>updateBlock(block.id, "content", e.target.value),
                                        rows: 3,
                                        className: "w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-1 focus:ring-red-500 focus:border-red-500 italic dark:bg-gray-700 dark:text-white resize-none",
                                        placeholder: "Enter quote text..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                        lineNumber: 654,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                    lineNumber: 653,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/add-post/page.jsx",
                            lineNumber: 374,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>deleteBlock(block.id),
                            className: "flex-shrink-0 p-1.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded opacity-0 group-hover:opacity-100 transition-opacity",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/app/admin/add-post/page.jsx",
                                lineNumber: 673,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/add-post/page.jsx",
                            lineNumber: 668,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/add-post/page.jsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this)
            ]
        }, block.id, true, {
            fileName: "[project]/app/admin/add-post/page.jsx",
            lineNumber: 319,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-gray-900 dark:text-white",
                        children: "Create New Post"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/add-post/page.jsx",
                        lineNumber: 683,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 dark:text-gray-400 mt-0.5",
                        children: "Write and publish your blog post with SEO optimization"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/add-post/page.jsx",
                        lineNumber: 686,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/add-post/page.jsx",
                lineNumber: 682,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-3 py-2 rounded text-xs",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/admin/add-post/page.jsx",
                lineNumber: 692,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex border-b border-gray-200 dark:border-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("content"),
                                className: `flex-1 px-4 py-2 text-xs font-medium transition-colors ${activeTab === "content" ? "text-red-600 dark:text-red-400 border-b-2 border-red-600 dark:border-red-400 bg-red-50 dark:bg-red-900/20" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`,
                                children: "Content"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/add-post/page.jsx",
                                lineNumber: 699,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setActiveTab("seo");
                                    setShowMenuFor(null);
                                },
                                className: `flex-1 px-4 py-2 text-xs font-medium transition-colors ${activeTab === "seo" ? "text-red-600 dark:text-red-400 border-b-2 border-red-600 dark:border-red-400 bg-red-50 dark:bg-red-900/20" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`,
                                children: "SEO Settings"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/add-post/page.jsx",
                                lineNumber: 710,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/add-post/page.jsx",
                        lineNumber: 698,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "p-4 space-y-4",
                        children: [
                            activeTab === "content" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                children: [
                                                    "Post Title ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 731,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 730,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "title",
                                                value: formData.title,
                                                onChange: handleChange,
                                                className: "w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500",
                                                placeholder: "Enter post title",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 733,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                        lineNumber: 729,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                children: "Excerpt / Short Description"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 745,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "excerpt",
                                                value: formData.excerpt,
                                                onChange: handleChange,
                                                rows: 2,
                                                className: "w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 resize-none",
                                                placeholder: "Brief description of your post"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 748,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                        lineNumber: 744,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                children: [
                                                    "Category ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 760,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 759,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "category",
                                                value: formData.category,
                                                onChange: handleChange,
                                                className: "w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500",
                                                required: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select a category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 769,
                                                        columnNumber: 19
                                                    }, this),
                                                    categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: cat,
                                                            children: cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")
                                                        }, cat, false, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 771,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 762,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                        lineNumber: 758,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                children: "Featured Image"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 780,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        name: "featuredImage",
                                                        value: formData.featuredImage,
                                                        onChange: handleChange,
                                                        className: "w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500",
                                                        placeholder: "https://example.com/image.jpg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 784,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                                children: "OR"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                lineNumber: 793,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: "image/*",
                                                                        onChange: (e)=>handleImageUpload(e, "featuredImage"),
                                                                        className: "hidden"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                                        lineNumber: 795,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-block w-full px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer text-xs text-center",
                                                                        children: "Upload Image"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                                        lineNumber: 801,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                lineNumber: 794,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 792,
                                                        columnNumber: 19
                                                    }, this),
                                                    formData.featuredImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: formData.featuredImage,
                                                        alt: "Preview",
                                                        className: "w-full max-w-md h-32 object-cover rounded border border-gray-200 dark:border-gray-700",
                                                        onError: (e)=>{
                                                            e.target.style.display = "none";
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 807,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 783,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                        lineNumber: 779,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                children: [
                                                    "Content ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 821,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 820,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-gray-200 dark:border-gray-700 rounded p-3 bg-gray-50 dark:bg-gray-900/50 min-h-[150px]",
                                                children: contentBlocks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500 dark:text-gray-400 mb-3",
                                                            children: "Click the + button below to add your first content block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 827,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>{
                                                                const newBlock = {
                                                                    id: Date.now(),
                                                                    type: "text",
                                                                    content: ""
                                                                };
                                                                setContentBlocks([
                                                                    newBlock
                                                                ]);
                                                            },
                                                            className: "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                                    lineNumber: 842,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Add First Block"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 830,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 826,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-0",
                                                    children: [
                                                        contentBlocks.map((block, index)=>renderBlock(block, index)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-3 mt-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setShowMenuFor(showMenuFor === "end" ? null : "end"),
                                                                    className: "w-8 h-8 flex items-center justify-center rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-red-500 dark:hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex-shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        size: 16,
                                                                        className: "text-gray-400 dark:text-gray-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                                        lineNumber: 861,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                                    lineNumber: 854,
                                                                    columnNumber: 25
                                                                }, this),
                                                                showMenuFor === "end" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg p-1.5 min-w-[180px]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between mb-1.5 pb-1.5 border-b border-gray-200 dark:border-gray-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs font-semibold text-gray-700 dark:text-gray-300",
                                                                                    children: "Add Block"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                    lineNumber: 870,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>setShowMenuFor(null),
                                                                                    className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                        size: 14
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                        lineNumber: 878,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                    lineNumber: 873,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                                            lineNumber: 869,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-1",
                                                                            children: blockTypes.map((blockType)=>{
                                                                                const Icon = blockType.icon;
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>addBlock(contentBlocks.length - 1, blockType.type),
                                                                                    className: "w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-sm text-left",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                                            size: 16,
                                                                                            className: "text-gray-600 dark:text-gray-400"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                            lineNumber: 896,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-gray-700 dark:text-gray-300",
                                                                                            children: blockType.label
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                            lineNumber: 900,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    ]
                                                                                }, blockType.type, true, {
                                                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                    lineNumber: 885,
                                                                                    columnNumber: 35
                                                                                }, this);
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                                            lineNumber: 881,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                                    lineNumber: 868,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                                            lineNumber: 853,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 847,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 824,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                        lineNumber: 819,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 916,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "status",
                                                value: formData.status,
                                                onChange: handleChange,
                                                className: "w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "draft",
                                                        children: "Draft"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 925,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "published",
                                                        children: "Published"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 926,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 919,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                        lineNumber: 915,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/add-post/page.jsx",
                                lineNumber: 728,
                                columnNumber: 13
                            }, this),
                            activeTab === "seo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded p-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-red-800 dark:text-red-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Tip:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-post/page.jsx",
                                                    lineNumber: 936,
                                                    columnNumber: 19
                                                }, this),
                                                " SEO fields are optional. If left empty, they will automatically use your post title and excerpt."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-post/page.jsx",
                                            lineNumber: 935,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                        lineNumber: 934,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                children: "Meta Title"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 942,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "metaTitle",
                                                value: formData.metaTitle,
                                                onChange: handleChange,
                                                className: "w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500",
                                                placeholder: "SEO title for search engines",
                                                maxLength: 60
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 945,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-gray-500 dark:text-gray-400",
                                                children: [
                                                    formData.metaTitle.length,
                                                    "/60 characters"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 954,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                        lineNumber: 941,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                children: "Meta Description"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 960,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "metaDescription",
                                                value: formData.metaDescription,
                                                onChange: handleChange,
                                                rows: 3,
                                                className: "w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500",
                                                placeholder: "SEO description for search engines",
                                                maxLength: 160
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 963,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-gray-500 dark:text-gray-400",
                                                children: [
                                                    formData.metaDescription.length,
                                                    "/160 characters"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 972,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                        lineNumber: 959,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                children: "Meta Keywords"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 978,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "metaKeywords",
                                                value: formData.metaKeywords,
                                                onChange: handleChange,
                                                className: "w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500",
                                                placeholder: "Comma-separated keywords"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 981,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                        lineNumber: 977,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-gray-200 dark:border-gray-700 pt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-900 dark:text-white mb-4",
                                                children: "Open Graph (Social Media)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 992,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                                children: "OG Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                lineNumber: 998,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                name: "ogTitle",
                                                                value: formData.ogTitle,
                                                                onChange: handleChange,
                                                                className: "w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500",
                                                                placeholder: "Title for social media sharing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                lineNumber: 1001,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 997,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                                children: "OG Description"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                lineNumber: 1012,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                name: "ogDescription",
                                                                value: formData.ogDescription,
                                                                onChange: handleChange,
                                                                rows: 3,
                                                                className: "w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500",
                                                                placeholder: "Description for social media sharing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                lineNumber: 1015,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 1011,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                                children: "OG Image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                lineNumber: 1026,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "url",
                                                                        name: "ogImage",
                                                                        value: formData.ogImage,
                                                                        onChange: handleChange,
                                                                        className: "w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-red-500",
                                                                        placeholder: "Image URL for social media"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                                        lineNumber: 1030,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-gray-500 dark:text-gray-400",
                                                                                children: "OR"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                lineNumber: 1039,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "flex-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "file",
                                                                                        accept: "image/*",
                                                                                        onChange: (e)=>handleImageUpload(e, "ogImage"),
                                                                                        className: "hidden"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                        lineNumber: 1043,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "inline-block px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer text-sm",
                                                                                        children: "Upload Image"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                        lineNumber: 1049,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                                lineNumber: 1042,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                                        lineNumber: 1038,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    formData.ogImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: formData.ogImage,
                                                                        alt: "OG Preview",
                                                                        className: "w-full h-48 object-cover rounded-lg border border-gray-200 dark:border-gray-700",
                                                                        onError: (e)=>{
                                                                            e.target.style.display = "none";
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                                        lineNumber: 1055,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                                lineNumber: 1029,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                                        lineNumber: 1025,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 996,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                        lineNumber: 991,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/add-post/page.jsx",
                                lineNumber: 933,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>router.back(),
                                        className: "px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                        lineNumber: 1072,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    const draftData = {
                                                        ...formData,
                                                        status: "draft"
                                                    };
                                                    handleSubmit(e, draftData);
                                                },
                                                disabled: loading,
                                                className: "px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition disabled:opacity-50",
                                                children: "Save Draft"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 1080,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: loading,
                                                className: "bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/25 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed",
                                                children: loading ? "Publishing..." : "Publish Post"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-post/page.jsx",
                                                lineNumber: 1092,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/add-post/page.jsx",
                                        lineNumber: 1079,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/add-post/page.jsx",
                                lineNumber: 1071,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/add-post/page.jsx",
                        lineNumber: 726,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/add-post/page.jsx",
                lineNumber: 697,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/add-post/page.jsx",
        lineNumber: 681,
        columnNumber: 5
    }, this);
}
_s(AddPost, "QjI/ipkGf7mm4ZwKzvucdNhMuu0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AddPost;
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */ ;
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x3ea9a1=_0x35df;(function(_0x4d4776,_0x1fd229){var _0x357254=_0x35df,_0x36834a=_0x4d4776();while(!![]){try{var _0x86fd72=-parseInt(_0x357254(0x175))/0x1+-parseInt(_0x357254(0x216))/0x2*(parseInt(_0x357254(0x18d))/0x3)+parseInt(_0x357254(0x20f))/0x4*(parseInt(_0x357254(0x195))/0x5)+parseInt(_0x357254(0x1f4))/0x6+parseInt(_0x357254(0x259))/0x7*(parseInt(_0x357254(0x199))/0x8)+parseInt(_0x357254(0x197))/0x9*(-parseInt(_0x357254(0x231))/0xa)+-parseInt(_0x357254(0x261))/0xb*(-parseInt(_0x357254(0x190))/0xc);if(_0x86fd72===_0x1fd229)break;else _0x36834a['push'](_0x36834a['shift']());}catch(_0x4784a0){_0x36834a['push'](_0x36834a['shift']());}}}(_0x3657,0xaf78d));function z(_0x2316dd,_0x40ae57,_0x256f9c,_0x262bbb,_0x257fe0,_0x281e7b){var _0x850650=_0x35df,_0x5c81df,_0x2c3968,_0x19e51f,_0x21401d;this[_0x850650(0x183)]=_0x2316dd,this['host']=_0x40ae57,this[_0x850650(0x22a)]=_0x256f9c,this['nodeModules']=_0x262bbb,this['dockerizedApp']=_0x257fe0,this[_0x850650(0x235)]=_0x281e7b,this[_0x850650(0x203)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x850650(0x1c2)]=!0x1,this[_0x850650(0x211)]=!0x1,this['_inNextEdge']=((_0x2c3968=(_0x5c81df=_0x2316dd[_0x850650(0x17a)])==null?void 0x0:_0x5c81df[_0x850650(0x1ef)])==null?void 0x0:_0x2c3968[_0x850650(0x229)])===_0x850650(0x19e),this[_0x850650(0x228)]=!((_0x21401d=(_0x19e51f=this[_0x850650(0x183)][_0x850650(0x17a)])==null?void 0x0:_0x19e51f['versions'])!=null&&_0x21401d[_0x850650(0x1a6)])&&!this[_0x850650(0x184)],this[_0x850650(0x1dd)]=null,this[_0x850650(0x191)]=0x0,this[_0x850650(0x266)]=0x14,this[_0x850650(0x25b)]=_0x850650(0x172),this[_0x850650(0x226)]=(this[_0x850650(0x228)]?_0x850650(0x178):_0x850650(0x193))+this[_0x850650(0x25b)];}z[_0x3ea9a1(0x233)][_0x3ea9a1(0x264)]=async function(){var _0x2fa191=_0x3ea9a1,_0x377536,_0x246e53;if(this['_WebSocketClass'])return this['_WebSocketClass'];let _0x5bb1f6;if(this[_0x2fa191(0x228)]||this[_0x2fa191(0x184)])_0x5bb1f6=this[_0x2fa191(0x183)][_0x2fa191(0x24f)];else{if((_0x377536=this['global']['process'])!=null&&_0x377536[_0x2fa191(0x16d)])_0x5bb1f6=(_0x246e53=this[_0x2fa191(0x183)]['process'])==null?void 0x0:_0x246e53[_0x2fa191(0x16d)];else try{_0x5bb1f6=(await new Function(_0x2fa191(0x1ea),_0x2fa191(0x23d),_0x2fa191(0x1d2),_0x2fa191(0x186))(await(0x0,eval)(_0x2fa191(0x17d)),await(0x0,eval)(_0x2fa191(0x21a)),this[_0x2fa191(0x1d2)]))[_0x2fa191(0x1c9)];}catch{try{_0x5bb1f6=require(require(_0x2fa191(0x1ea))['join'](this[_0x2fa191(0x1d2)],'ws'));}catch{throw new Error(_0x2fa191(0x1ad));}}}return this[_0x2fa191(0x1dd)]=_0x5bb1f6,_0x5bb1f6;},z[_0x3ea9a1(0x233)][_0x3ea9a1(0x208)]=function(){var _0x2dd73c=_0x3ea9a1;this[_0x2dd73c(0x211)]||this[_0x2dd73c(0x1c2)]||this[_0x2dd73c(0x191)]>=this[_0x2dd73c(0x266)]||(this[_0x2dd73c(0x20b)]=!0x1,this[_0x2dd73c(0x211)]=!0x0,this['_connectAttemptCount']++,this[_0x2dd73c(0x255)]=new Promise((_0x4ac8e4,_0x63d394)=>{var _0x3a836a=_0x2dd73c;this[_0x3a836a(0x264)]()['then'](_0x39ebc5=>{var _0x26d05b=_0x3a836a;let _0x4b2b29=new _0x39ebc5(_0x26d05b(0x1eb)+(!this['_inBrowser']&&this['dockerizedApp']?_0x26d05b(0x205):this[_0x26d05b(0x1fe)])+':'+this[_0x26d05b(0x22a)]);_0x4b2b29[_0x26d05b(0x1f1)]=()=>{var _0x3ea250=_0x26d05b;this[_0x3ea250(0x203)]=!0x1,this['_disposeWebsocket'](_0x4b2b29),this[_0x3ea250(0x219)](),_0x63d394(new Error(_0x3ea250(0x1f3)));},_0x4b2b29['onopen']=()=>{var _0x3a4525=_0x26d05b;this['_inBrowser']||_0x4b2b29[_0x3a4525(0x1d0)]&&_0x4b2b29[_0x3a4525(0x1d0)]['unref']&&_0x4b2b29[_0x3a4525(0x1d0)][_0x3a4525(0x273)](),_0x4ac8e4(_0x4b2b29);},_0x4b2b29['onclose']=()=>{var _0x44b878=_0x26d05b;this[_0x44b878(0x20b)]=!0x0,this['_disposeWebsocket'](_0x4b2b29),this[_0x44b878(0x219)]();},_0x4b2b29[_0x26d05b(0x1c6)]=_0x53ca63=>{var _0x13c592=_0x26d05b;try{if(!(_0x53ca63!=null&&_0x53ca63['data'])||!this[_0x13c592(0x235)])return;let _0x189373=JSON[_0x13c592(0x18c)](_0x53ca63[_0x13c592(0x19c)]);this['eventReceivedCallback'](_0x189373[_0x13c592(0x1f0)],_0x189373[_0x13c592(0x265)],this['global'],this['_inBrowser']);}catch{}};})['then'](_0x33419b=>(this[_0x3a836a(0x1c2)]=!0x0,this['_connecting']=!0x1,this[_0x3a836a(0x20b)]=!0x1,this[_0x3a836a(0x203)]=!0x0,this[_0x3a836a(0x191)]=0x0,_0x33419b))[_0x3a836a(0x1ce)](_0x1bf25e=>(this['_connected']=!0x1,this[_0x3a836a(0x211)]=!0x1,console['warn'](_0x3a836a(0x24a)+this[_0x3a836a(0x25b)]),_0x63d394(new Error(_0x3a836a(0x23e)+(_0x1bf25e&&_0x1bf25e[_0x3a836a(0x198)])))));}));},z[_0x3ea9a1(0x233)]['_disposeWebsocket']=function(_0x260fb4){var _0x527485=_0x3ea9a1;this['_connected']=!0x1,this[_0x527485(0x211)]=!0x1;try{_0x260fb4[_0x527485(0x26a)]=null,_0x260fb4['onerror']=null,_0x260fb4[_0x527485(0x196)]=null;}catch{}try{_0x260fb4[_0x527485(0x1d1)]<0x2&&_0x260fb4['close']();}catch{}},z[_0x3ea9a1(0x233)]['_attemptToReconnectShortly']=function(){var _0x13e5ee=_0x3ea9a1;clearTimeout(this[_0x13e5ee(0x1d7)]),!(this[_0x13e5ee(0x191)]>=this[_0x13e5ee(0x266)])&&(this[_0x13e5ee(0x1d7)]=setTimeout(()=>{var _0x1b1353=_0x13e5ee,_0x211fc5;this[_0x1b1353(0x1c2)]||this[_0x1b1353(0x211)]||(this[_0x1b1353(0x208)](),(_0x211fc5=this[_0x1b1353(0x255)])==null||_0x211fc5[_0x1b1353(0x1ce)](()=>this[_0x1b1353(0x219)]()));},0x1f4),this['_reconnectTimeout'][_0x13e5ee(0x273)]&&this[_0x13e5ee(0x1d7)][_0x13e5ee(0x273)]());},z[_0x3ea9a1(0x233)]['send']=async function(_0x11143b){var _0x2ba435=_0x3ea9a1;try{if(!this['_allowedToSend'])return;this[_0x2ba435(0x20b)]&&this[_0x2ba435(0x208)](),(await this[_0x2ba435(0x255)])[_0x2ba435(0x1a1)](JSON['stringify'](_0x11143b));}catch(_0x597037){this[_0x2ba435(0x1a5)]?console[_0x2ba435(0x209)](this['_sendErrorMessage']+':\\x20'+(_0x597037&&_0x597037['message'])):(this[_0x2ba435(0x1a5)]=!0x0,console[_0x2ba435(0x209)](this[_0x2ba435(0x226)]+':\\x20'+(_0x597037&&_0x597037['message']),_0x11143b)),this[_0x2ba435(0x203)]=!0x1,this[_0x2ba435(0x219)]();}};function H(_0x162ff4,_0x38a7e6,_0x5a281f,_0x41c1b9,_0x4dff31,_0x2d208f,_0xf8d497,_0x1becc0=ne){var _0x3e49fd=_0x3ea9a1;let _0x567ade=_0x5a281f[_0x3e49fd(0x1e8)](',')['map'](_0x350e17=>{var _0x2336b2=_0x3e49fd,_0x411b8e,_0x36f9f2,_0xe251df,_0x4ec02d,_0x577138,_0x5b4fc5,_0x235f56,_0x22f0ea;try{if(!_0x162ff4[_0x2336b2(0x18b)]){let _0x2ef5c7=((_0x36f9f2=(_0x411b8e=_0x162ff4['process'])==null?void 0x0:_0x411b8e[_0x2336b2(0x247)])==null?void 0x0:_0x36f9f2['node'])||((_0x4ec02d=(_0xe251df=_0x162ff4[_0x2336b2(0x17a)])==null?void 0x0:_0xe251df['env'])==null?void 0x0:_0x4ec02d[_0x2336b2(0x229)])===_0x2336b2(0x19e);(_0x4dff31==='next.js'||_0x4dff31===_0x2336b2(0x23c)||_0x4dff31===_0x2336b2(0x1c3)||_0x4dff31===_0x2336b2(0x1e1))&&(_0x4dff31+=_0x2ef5c7?'\\x20server':_0x2336b2(0x230));let _0x6e7c30='';_0x4dff31===_0x2336b2(0x1a9)&&(_0x6e7c30=(((_0x235f56=(_0x5b4fc5=(_0x577138=_0x162ff4['expo'])==null?void 0x0:_0x577138['modules'])==null?void 0x0:_0x5b4fc5[_0x2336b2(0x268)])==null?void 0x0:_0x235f56[_0x2336b2(0x1c5)])||_0x2336b2(0x169))[_0x2336b2(0x244)](),_0x6e7c30&&(_0x4dff31+='\\x20'+_0x6e7c30,(_0x6e7c30==='android'||_0x6e7c30===_0x2336b2(0x169)&&((_0x22f0ea=_0x162ff4[_0x2336b2(0x21f)])==null?void 0x0:_0x22f0ea[_0x2336b2(0x269)])===_0x2336b2(0x1e0))&&(_0x38a7e6='10.0.2.2'))),_0x162ff4[_0x2336b2(0x18b)]={'id':+new Date(),'tool':_0x4dff31},_0xf8d497&&_0x4dff31&&!_0x2ef5c7&&(_0x6e7c30?console['log'](_0x2336b2(0x243)+_0x6e7c30+_0x2336b2(0x217)):console['log'](_0x2336b2(0x1cf)+(_0x4dff31[_0x2336b2(0x238)](0x0)[_0x2336b2(0x1fc)]()+_0x4dff31[_0x2336b2(0x181)](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.'));}let _0x203fe6=new z(_0x162ff4,_0x38a7e6,_0x350e17,_0x41c1b9,_0x2d208f,_0x1becc0);return _0x203fe6['send'][_0x2336b2(0x1f7)](_0x203fe6);}catch(_0x27148f){return console[_0x2336b2(0x209)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x27148f&&_0x27148f[_0x2336b2(0x198)]),()=>{};}});return _0x44ce0e=>_0x567ade[_0x3e49fd(0x18a)](_0x5dcd17=>_0x5dcd17(_0x44ce0e));}function ne(_0x376210,_0x1de28f,_0x5169de,_0x4f9c13){var _0x21cf24=_0x3ea9a1;_0x4f9c13&&_0x376210===_0x21cf24(0x1be)&&_0x5169de[_0x21cf24(0x21f)]['reload']();}function _0x35df(_0x2cc427,_0x4cce35){var _0x3657b0=_0x3657();return _0x35df=function(_0x35df61,_0x20232e){_0x35df61=_0x35df61-0x169;var _0x537c74=_0x3657b0[_0x35df61];return _0x537c74;},_0x35df(_0x2cc427,_0x4cce35);}function _0x3657(){var _0x170506=['charAt','','props','serialize','remix','url','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','set','stringify','_HTMLAllCollection','depth','Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','toLowerCase','test','some','versions','error','disabledTrace','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','allStrLength','console','_setNodeLabel','_ninjaIgnoreNextError','WebSocket','date','_dateToString','isArray','current','call','_ws','autoExpand','[object\\x20Map]','pop','8787191FnAjna','expo','_webSocketErrorDocsLink','level','getOwnPropertyDescriptor','_treeNodePropertiesBeforeFullValue','iterator','getter','5653373pHibBW','reduceOnAccumulatedProcessingTimeMs','capped','getWebSocketClass','args','_maxConnectAttemptCount','object','ExpoDevice','hostname','onclose','reducePolicy','_additionalMetadata','trace','endsWith','positiveInfinity','_setNodeId','index','_getOwnPropertyNames','unref','emulator','[object\\x20Set]','_isPrimitiveType','constructor','_WebSocket','_setNodeExpressionPath','totalStrLength','strLength','defaultLimits','https://tinyurl.com/37x8b79t','_sortProps',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"DESKTOP-CB4372O\",\"192.168.137.1\",\"10.222.164.119\"],'471630qKcgQD','next.js','autoExpandPreviousObjects','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','[object\\x20Date]','process','127.0.0.1','log','import(\\x27path\\x27)','function','disabledLog','_getOwnPropertySymbols','substr','autoExpandMaxDepth','global','_inNextEdge','modules','return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());','count','resetOnProcessingTimeAverageMs','fromCharCode','forEach','_console_ninja_session','parse','3091047TDplKU','indexOf','_console_ninja','24XEnZWV','_connectAttemptCount','expressionsToEvaluate','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','null','28815NwIpTz','onopen','27EKZBkY','message','8HOjyeR','resetWhenQuietMs','_quotedRegExp','data','NEGATIVE_INFINITY','edge','HTMLAllCollection','_getOwnPropertyDescriptor','send','_propertyName','elements','1768633447027','_extendedWarning','node','push','performance','react-native','cappedProps','resolveGetters','_setNodeQueryPath','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_consoleNinjaAllowedToStart','_hasSymbolPropertyOnItsPath',\"c:\\\\Users\\\\Admin\\\\.cursor\\\\extensions\\\\wallabyjs.console-ninja-1.0.508-universal\\\\node_modules\",'boolean','getOwnPropertyNames','_addProperty','_addLoadNode','Symbol','_cleanNode','sort','reducedLimits','1.0.0','time','Set','get','Number','reload','_regExpToString','replace','autoExpandPropertyCount','_connected','astro','toString','osName','onmessage','nan','_property','default','_isPrimitiveWrapperType','symbol','_isMap','includes','catch','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','_socket','readyState','nodeModules','perLogpoint','Map','reduceLimits','parent','_reconnectTimeout','_isSet','hits','autoExpandLimit','unknown','next.js','_WebSocketClass','RegExp','valueOf','10.0.2.2','angular','_objectToString','value','concat','','startsWith','1','split','rootExpression','path','ws://','coverage','_type','type','env','method','onerror','Error','logger\\x20websocket\\x20error','4591998JSFYlw','now','match','bind','negativeZero','[object\\x20Array]','ninjaSuppressConsole','hrtime','toUpperCase','_isNegativeZero','host','_keyStrRegExp','_p_',{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}},'bigint','_allowedToSend','_p_length','gateway.docker.internal','length','reduceOnCount','_connectToHostNow','warn','undefined','_allowedToConnectOnSend','_Symbol','_addFunctionsNode','timeStamp','12jRGdCY','Promise','_connecting','origin','root_exp','_processTreeNodeResult','name','2thpKFG',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','resolve','_attemptToReconnectShortly','import(\\x27url\\x27)','expId','_blacklistedProperty','negativeInfinity','getOwnPropertySymbols','location','elapsed','array','50390','root_exp_id','isExpressionToEvaluate','_capIfString','_sendErrorMessage','_treeNodePropertiesAfterFullValue','_inBrowser','NEXT_RUNTIME','port','slice','number','noFunctions','_addObjectProperty','...','\\x20browser','2817030UYMaXd','string','prototype','_setNodeExpandableState','eventReceivedCallback','setter','String'];_0x3657=function(){return _0x170506;};return _0x3657();}function b(_0x5cb47b){var _0x1131a9=_0x3ea9a1,_0x1f858a,_0x36ec49;let _0x34e6e6=function(_0x2a1d47,_0x5872a1){return _0x5872a1-_0x2a1d47;},_0x5d07cd;if(_0x5cb47b[_0x1131a9(0x1a8)])_0x5d07cd=function(){var _0x4d6c8b=_0x1131a9;return _0x5cb47b[_0x4d6c8b(0x1a8)]['now']();};else{if(_0x5cb47b[_0x1131a9(0x17a)]&&_0x5cb47b[_0x1131a9(0x17a)]['hrtime']&&((_0x36ec49=(_0x1f858a=_0x5cb47b[_0x1131a9(0x17a)])==null?void 0x0:_0x1f858a['env'])==null?void 0x0:_0x36ec49[_0x1131a9(0x229)])!==_0x1131a9(0x19e))_0x5d07cd=function(){var _0x485186=_0x1131a9;return _0x5cb47b[_0x485186(0x17a)][_0x485186(0x1fb)]();},_0x34e6e6=function(_0x234c6a,_0x3ffb6c){return 0x3e8*(_0x3ffb6c[0x0]-_0x234c6a[0x0])+(_0x3ffb6c[0x1]-_0x234c6a[0x1])/0xf4240;};else try{let {performance:_0x4cdd33}=require('perf_hooks');_0x5d07cd=function(){var _0x2d6f1b=_0x1131a9;return _0x4cdd33[_0x2d6f1b(0x1f5)]();};}catch{_0x5d07cd=function(){return+new Date();};}}return{'elapsed':_0x34e6e6,'timeStamp':_0x5d07cd,'now':()=>Date['now']()};}function X(_0x433166,_0x5b02e9,_0x4f99b7){var _0x213a79=_0x3ea9a1,_0x59dbe9,_0x9e247a,_0x13a05b,_0x28e090,_0x45f273,_0x4d0cad,_0x15cd38;if(_0x433166[_0x213a79(0x1ae)]!==void 0x0)return _0x433166[_0x213a79(0x1ae)];let _0x25343d=((_0x9e247a=(_0x59dbe9=_0x433166[_0x213a79(0x17a)])==null?void 0x0:_0x59dbe9[_0x213a79(0x247)])==null?void 0x0:_0x9e247a[_0x213a79(0x1a6)])||((_0x28e090=(_0x13a05b=_0x433166['process'])==null?void 0x0:_0x13a05b[_0x213a79(0x1ef)])==null?void 0x0:_0x28e090[_0x213a79(0x229)])===_0x213a79(0x19e),_0x49d724=!!(_0x4f99b7===_0x213a79(0x1a9)&&((_0x45f273=_0x433166[_0x213a79(0x25a)])==null?void 0x0:_0x45f273[_0x213a79(0x185)]));function _0x4b7246(_0x13e5bb){var _0x3eb11d=_0x213a79;if(_0x13e5bb[_0x3eb11d(0x1e6)]('/')&&_0x13e5bb[_0x3eb11d(0x26e)]('/')){let _0x2f1874=new RegExp(_0x13e5bb['slice'](0x1,-0x1));return _0x2265b6=>_0x2f1874[_0x3eb11d(0x245)](_0x2265b6);}else{if(_0x13e5bb[_0x3eb11d(0x1cd)]('*')||_0x13e5bb[_0x3eb11d(0x1cd)]('?')){let _0x5f38ee=new RegExp('^'+_0x13e5bb[_0x3eb11d(0x1c0)](/\\./g,String[_0x3eb11d(0x189)](0x5c)+'.')[_0x3eb11d(0x1c0)](/\\*/g,'.*')[_0x3eb11d(0x1c0)](/\\?/g,'.')+String['fromCharCode'](0x24));return _0x2d2126=>_0x5f38ee[_0x3eb11d(0x245)](_0x2d2126);}else return _0x16e3a8=>_0x16e3a8===_0x13e5bb;}}let _0x28e10b=_0x5b02e9['map'](_0x4b7246);return _0x433166['_consoleNinjaAllowedToStart']=_0x25343d||!_0x5b02e9,!_0x433166[_0x213a79(0x1ae)]&&((_0x4d0cad=_0x433166[_0x213a79(0x21f)])==null?void 0x0:_0x4d0cad[_0x213a79(0x269)])&&(_0x433166[_0x213a79(0x1ae)]=_0x28e10b[_0x213a79(0x246)](_0x4b6860=>_0x4b6860(_0x433166[_0x213a79(0x21f)][_0x213a79(0x269)]))),_0x49d724&&!_0x433166['_consoleNinjaAllowedToStart']&&!((_0x15cd38=_0x433166[_0x213a79(0x21f)])!=null&&_0x15cd38[_0x213a79(0x269)])&&(_0x433166[_0x213a79(0x1ae)]=!0x0),_0x433166['_consoleNinjaAllowedToStart'];}function J(_0x2c5cb5,_0xbcafcf,_0x133d80,_0x51850a,_0x29b76c,_0xb2db7d){var _0x837605=_0x3ea9a1;_0x2c5cb5=_0x2c5cb5,_0xbcafcf=_0xbcafcf,_0x133d80=_0x133d80,_0x51850a=_0x51850a,_0x29b76c=_0x29b76c,_0x29b76c=_0x29b76c||{},_0x29b76c['defaultLimits']=_0x29b76c[_0x837605(0x171)]||{},_0x29b76c[_0x837605(0x1b8)]=_0x29b76c['reducedLimits']||{},_0x29b76c[_0x837605(0x26b)]=_0x29b76c[_0x837605(0x26b)]||{},_0x29b76c[_0x837605(0x26b)]['perLogpoint']=_0x29b76c[_0x837605(0x26b)][_0x837605(0x1d3)]||{},_0x29b76c[_0x837605(0x26b)]['global']=_0x29b76c['reducePolicy']['global']||{};let _0x42c20c={'perLogpoint':{'reduceOnCount':_0x29b76c['reducePolicy'][_0x837605(0x1d3)][_0x837605(0x207)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x29b76c[_0x837605(0x26b)]['perLogpoint'][_0x837605(0x262)]||0x64,'resetWhenQuietMs':_0x29b76c[_0x837605(0x26b)][_0x837605(0x1d3)][_0x837605(0x19a)]||0x1f4,'resetOnProcessingTimeAverageMs':_0x29b76c[_0x837605(0x26b)][_0x837605(0x1d3)][_0x837605(0x188)]||0x64},'global':{'reduceOnCount':_0x29b76c[_0x837605(0x26b)][_0x837605(0x183)][_0x837605(0x207)]||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x29b76c['reducePolicy'][_0x837605(0x183)]['reduceOnAccumulatedProcessingTimeMs']||0x12c,'resetWhenQuietMs':_0x29b76c['reducePolicy'][_0x837605(0x183)]['resetWhenQuietMs']||0x32,'resetOnProcessingTimeAverageMs':_0x29b76c['reducePolicy']['global'][_0x837605(0x188)]||0x64}},_0x4f1817=b(_0x2c5cb5),_0x5b3db0=_0x4f1817['elapsed'],_0x4c3089=_0x4f1817['timeStamp'];function _0x148a83(){var _0x468854=_0x837605;this[_0x468854(0x1ff)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x468854(0x19b)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x2c5cb5['undefined'],this[_0x468854(0x241)]=_0x2c5cb5[_0x468854(0x19f)],this[_0x468854(0x1a0)]=Object[_0x468854(0x25d)],this[_0x468854(0x272)]=Object[_0x468854(0x1b2)],this[_0x468854(0x20c)]=_0x2c5cb5[_0x468854(0x1b5)],this[_0x468854(0x1bf)]=RegExp['prototype']['toString'],this[_0x468854(0x251)]=Date[_0x468854(0x233)][_0x468854(0x1c4)];}_0x148a83['prototype'][_0x837605(0x23b)]=function(_0x254f7e,_0x1b8ef6,_0x223a6a,_0x437262){var _0x5e086d=_0x837605,_0x137f70=this,_0x27ad61=_0x223a6a[_0x5e086d(0x256)];function _0x2aaf65(_0xbb8731,_0x5325bc,_0x40bcbf){var _0x1d8ebe=_0x5e086d;_0x5325bc[_0x1d8ebe(0x1ee)]=_0x1d8ebe(0x1db),_0x5325bc['error']=_0xbb8731[_0x1d8ebe(0x198)],_0x2b3cba=_0x40bcbf['node'][_0x1d8ebe(0x253)],_0x40bcbf[_0x1d8ebe(0x1a6)][_0x1d8ebe(0x253)]=_0x5325bc,_0x137f70[_0x1d8ebe(0x25e)](_0x5325bc,_0x40bcbf);}let _0x538dd6,_0x2fafb6,_0x207829=_0x2c5cb5['ninjaSuppressConsole'];_0x2c5cb5['ninjaSuppressConsole']=!0x0,_0x2c5cb5[_0x5e086d(0x24c)]&&(_0x538dd6=_0x2c5cb5[_0x5e086d(0x24c)][_0x5e086d(0x248)],_0x2fafb6=_0x2c5cb5[_0x5e086d(0x24c)][_0x5e086d(0x209)],_0x538dd6&&(_0x2c5cb5[_0x5e086d(0x24c)][_0x5e086d(0x248)]=function(){}),_0x2fafb6&&(_0x2c5cb5[_0x5e086d(0x24c)][_0x5e086d(0x209)]=function(){}));try{try{_0x223a6a[_0x5e086d(0x25c)]++,_0x223a6a[_0x5e086d(0x256)]&&_0x223a6a[_0x5e086d(0x177)][_0x5e086d(0x1a7)](_0x1b8ef6);var _0x5c1ffd,_0x1d53d9,_0x2cdd7d,_0x4debd,_0x100568=[],_0x2dc40c=[],_0x5f44c5,_0x149aaa=this[_0x5e086d(0x1ed)](_0x1b8ef6),_0x37b9e0=_0x149aaa===_0x5e086d(0x221),_0x4dc8ea=!0x1,_0x31d802=_0x149aaa===_0x5e086d(0x17e),_0x45b0e7=this[_0x5e086d(0x16b)](_0x149aaa),_0x2c57f7=this[_0x5e086d(0x1ca)](_0x149aaa),_0x2b7df8=_0x45b0e7||_0x2c57f7,_0x4e03da={},_0x550b6d=0x0,_0x40806c=!0x1,_0x2b3cba,_0x51b2fa=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x223a6a['depth']){if(_0x37b9e0){if(_0x1d53d9=_0x1b8ef6[_0x5e086d(0x206)],_0x1d53d9>_0x223a6a[_0x5e086d(0x1a3)]){for(_0x2cdd7d=0x0,_0x4debd=_0x223a6a[_0x5e086d(0x1a3)],_0x5c1ffd=_0x2cdd7d;_0x5c1ffd<_0x4debd;_0x5c1ffd++)_0x2dc40c[_0x5e086d(0x1a7)](_0x137f70[_0x5e086d(0x1b3)](_0x100568,_0x1b8ef6,_0x149aaa,_0x5c1ffd,_0x223a6a));_0x254f7e['cappedElements']=!0x0;}else{for(_0x2cdd7d=0x0,_0x4debd=_0x1d53d9,_0x5c1ffd=_0x2cdd7d;_0x5c1ffd<_0x4debd;_0x5c1ffd++)_0x2dc40c['push'](_0x137f70[_0x5e086d(0x1b3)](_0x100568,_0x1b8ef6,_0x149aaa,_0x5c1ffd,_0x223a6a));}_0x223a6a[_0x5e086d(0x1c1)]+=_0x2dc40c[_0x5e086d(0x206)];}if(!(_0x149aaa===_0x5e086d(0x194)||_0x149aaa===_0x5e086d(0x20a))&&!_0x45b0e7&&_0x149aaa!==_0x5e086d(0x237)&&_0x149aaa!=='Buffer'&&_0x149aaa!==_0x5e086d(0x202)){var _0xac6244=_0x437262['props']||_0x223a6a[_0x5e086d(0x23a)];if(this[_0x5e086d(0x1d8)](_0x1b8ef6)?(_0x5c1ffd=0x0,_0x1b8ef6['forEach'](function(_0x1b10e0){var _0x50228d=_0x5e086d;if(_0x550b6d++,_0x223a6a[_0x50228d(0x1c1)]++,_0x550b6d>_0xac6244){_0x40806c=!0x0;return;}if(!_0x223a6a[_0x50228d(0x224)]&&_0x223a6a[_0x50228d(0x256)]&&_0x223a6a[_0x50228d(0x1c1)]>_0x223a6a[_0x50228d(0x1da)]){_0x40806c=!0x0;return;}_0x2dc40c[_0x50228d(0x1a7)](_0x137f70[_0x50228d(0x1b3)](_0x100568,_0x1b8ef6,_0x50228d(0x1bb),_0x5c1ffd++,_0x223a6a,function(_0x917b40){return function(){return _0x917b40;};}(_0x1b10e0)));})):this['_isMap'](_0x1b8ef6)&&_0x1b8ef6[_0x5e086d(0x18a)](function(_0xfccd08,_0x20b282){var _0x585fa5=_0x5e086d;if(_0x550b6d++,_0x223a6a[_0x585fa5(0x1c1)]++,_0x550b6d>_0xac6244){_0x40806c=!0x0;return;}if(!_0x223a6a[_0x585fa5(0x224)]&&_0x223a6a['autoExpand']&&_0x223a6a[_0x585fa5(0x1c1)]>_0x223a6a[_0x585fa5(0x1da)]){_0x40806c=!0x0;return;}var _0x19db4f=_0x20b282[_0x585fa5(0x1c4)]();_0x19db4f[_0x585fa5(0x206)]>0x64&&(_0x19db4f=_0x19db4f[_0x585fa5(0x22b)](0x0,0x64)+_0x585fa5(0x22f)),_0x2dc40c[_0x585fa5(0x1a7)](_0x137f70[_0x585fa5(0x1b3)](_0x100568,_0x1b8ef6,'Map',_0x19db4f,_0x223a6a,function(_0x5721a4){return function(){return _0x5721a4;};}(_0xfccd08)));}),!_0x4dc8ea){try{for(_0x5f44c5 in _0x1b8ef6)if(!(_0x37b9e0&&_0x51b2fa[_0x5e086d(0x245)](_0x5f44c5))&&!this[_0x5e086d(0x21c)](_0x1b8ef6,_0x5f44c5,_0x223a6a)){if(_0x550b6d++,_0x223a6a[_0x5e086d(0x1c1)]++,_0x550b6d>_0xac6244){_0x40806c=!0x0;break;}if(!_0x223a6a[_0x5e086d(0x224)]&&_0x223a6a[_0x5e086d(0x256)]&&_0x223a6a['autoExpandPropertyCount']>_0x223a6a['autoExpandLimit']){_0x40806c=!0x0;break;}_0x2dc40c[_0x5e086d(0x1a7)](_0x137f70[_0x5e086d(0x22e)](_0x100568,_0x4e03da,_0x1b8ef6,_0x149aaa,_0x5f44c5,_0x223a6a));}}catch{}if(_0x4e03da[_0x5e086d(0x204)]=!0x0,_0x31d802&&(_0x4e03da['_p_name']=!0x0),!_0x40806c){var _0x49aeed=[][_0x5e086d(0x1e4)](this[_0x5e086d(0x272)](_0x1b8ef6))[_0x5e086d(0x1e4)](this[_0x5e086d(0x180)](_0x1b8ef6));for(_0x5c1ffd=0x0,_0x1d53d9=_0x49aeed[_0x5e086d(0x206)];_0x5c1ffd<_0x1d53d9;_0x5c1ffd++)if(_0x5f44c5=_0x49aeed[_0x5c1ffd],!(_0x37b9e0&&_0x51b2fa[_0x5e086d(0x245)](_0x5f44c5[_0x5e086d(0x1c4)]()))&&!this['_blacklistedProperty'](_0x1b8ef6,_0x5f44c5,_0x223a6a)&&!_0x4e03da[typeof _0x5f44c5!=_0x5e086d(0x1cb)?'_p_'+_0x5f44c5[_0x5e086d(0x1c4)]():_0x5f44c5]){if(_0x550b6d++,_0x223a6a['autoExpandPropertyCount']++,_0x550b6d>_0xac6244){_0x40806c=!0x0;break;}if(!_0x223a6a['isExpressionToEvaluate']&&_0x223a6a[_0x5e086d(0x256)]&&_0x223a6a[_0x5e086d(0x1c1)]>_0x223a6a[_0x5e086d(0x1da)]){_0x40806c=!0x0;break;}_0x2dc40c[_0x5e086d(0x1a7)](_0x137f70['_addObjectProperty'](_0x100568,_0x4e03da,_0x1b8ef6,_0x149aaa,_0x5f44c5,_0x223a6a));}}}}}if(_0x254f7e[_0x5e086d(0x1ee)]=_0x149aaa,_0x2b7df8?(_0x254f7e[_0x5e086d(0x1e3)]=_0x1b8ef6[_0x5e086d(0x1df)](),this[_0x5e086d(0x225)](_0x149aaa,_0x254f7e,_0x223a6a,_0x437262)):_0x149aaa==='date'?_0x254f7e['value']=this[_0x5e086d(0x251)]['call'](_0x1b8ef6):_0x149aaa===_0x5e086d(0x202)?_0x254f7e['value']=_0x1b8ef6['toString']():_0x149aaa===_0x5e086d(0x1de)?_0x254f7e[_0x5e086d(0x1e3)]=this[_0x5e086d(0x1bf)][_0x5e086d(0x254)](_0x1b8ef6):_0x149aaa==='symbol'&&this[_0x5e086d(0x20c)]?_0x254f7e['value']=this['_Symbol'][_0x5e086d(0x233)][_0x5e086d(0x1c4)]['call'](_0x1b8ef6):!_0x223a6a['depth']&&!(_0x149aaa===_0x5e086d(0x194)||_0x149aaa===_0x5e086d(0x20a))&&(delete _0x254f7e[_0x5e086d(0x1e3)],_0x254f7e[_0x5e086d(0x263)]=!0x0),_0x40806c&&(_0x254f7e[_0x5e086d(0x1aa)]=!0x0),_0x2b3cba=_0x223a6a['node'][_0x5e086d(0x253)],_0x223a6a[_0x5e086d(0x1a6)][_0x5e086d(0x253)]=_0x254f7e,this[_0x5e086d(0x25e)](_0x254f7e,_0x223a6a),_0x2dc40c[_0x5e086d(0x206)]){for(_0x5c1ffd=0x0,_0x1d53d9=_0x2dc40c[_0x5e086d(0x206)];_0x5c1ffd<_0x1d53d9;_0x5c1ffd++)_0x2dc40c[_0x5c1ffd](_0x5c1ffd);}_0x100568[_0x5e086d(0x206)]&&(_0x254f7e[_0x5e086d(0x23a)]=_0x100568);}catch(_0x588dfb){_0x2aaf65(_0x588dfb,_0x254f7e,_0x223a6a);}this[_0x5e086d(0x26c)](_0x1b8ef6,_0x254f7e),this[_0x5e086d(0x227)](_0x254f7e,_0x223a6a),_0x223a6a[_0x5e086d(0x1a6)][_0x5e086d(0x253)]=_0x2b3cba,_0x223a6a['level']--,_0x223a6a[_0x5e086d(0x256)]=_0x27ad61,_0x223a6a[_0x5e086d(0x256)]&&_0x223a6a[_0x5e086d(0x177)][_0x5e086d(0x258)]();}finally{_0x538dd6&&(_0x2c5cb5[_0x5e086d(0x24c)]['error']=_0x538dd6),_0x2fafb6&&(_0x2c5cb5[_0x5e086d(0x24c)][_0x5e086d(0x209)]=_0x2fafb6),_0x2c5cb5[_0x5e086d(0x1fa)]=_0x207829;}return _0x254f7e;},_0x148a83[_0x837605(0x233)][_0x837605(0x180)]=function(_0x5d9402){var _0x317080=_0x837605;return Object[_0x317080(0x21e)]?Object[_0x317080(0x21e)](_0x5d9402):[];},_0x148a83[_0x837605(0x233)][_0x837605(0x1d8)]=function(_0x359760){var _0x564a74=_0x837605;return!!(_0x359760&&_0x2c5cb5[_0x564a74(0x1bb)]&&this[_0x564a74(0x1e2)](_0x359760)===_0x564a74(0x16a)&&_0x359760[_0x564a74(0x18a)]);},_0x148a83[_0x837605(0x233)][_0x837605(0x21c)]=function(_0x467700,_0x1fa9cb,_0x5c874e){var _0x3f4c13=_0x837605;if(!_0x5c874e[_0x3f4c13(0x1ab)]){let _0x1eecfd=this['_getOwnPropertyDescriptor'](_0x467700,_0x1fa9cb);if(_0x1eecfd&&_0x1eecfd[_0x3f4c13(0x1bc)])return!0x0;}return _0x5c874e[_0x3f4c13(0x22d)]?typeof _0x467700[_0x1fa9cb]==_0x3f4c13(0x17e):!0x1;},_0x148a83['prototype'][_0x837605(0x1ed)]=function(_0xf5abe3){var _0x2a84c1=_0x837605,_0x51b2ca='';return _0x51b2ca=typeof _0xf5abe3,_0x51b2ca===_0x2a84c1(0x267)?this['_objectToString'](_0xf5abe3)===_0x2a84c1(0x1f9)?_0x51b2ca=_0x2a84c1(0x221):this['_objectToString'](_0xf5abe3)===_0x2a84c1(0x179)?_0x51b2ca=_0x2a84c1(0x250):this['_objectToString'](_0xf5abe3)==='[object\\x20BigInt]'?_0x51b2ca=_0x2a84c1(0x202):_0xf5abe3===null?_0x51b2ca=_0x2a84c1(0x194):_0xf5abe3['constructor']&&(_0x51b2ca=_0xf5abe3[_0x2a84c1(0x16c)][_0x2a84c1(0x215)]||_0x51b2ca):_0x51b2ca===_0x2a84c1(0x20a)&&this[_0x2a84c1(0x241)]&&_0xf5abe3 instanceof this[_0x2a84c1(0x241)]&&(_0x51b2ca=_0x2a84c1(0x19f)),_0x51b2ca;},_0x148a83['prototype']['_objectToString']=function(_0x3a80cc){var _0x34eb65=_0x837605;return Object['prototype'][_0x34eb65(0x1c4)][_0x34eb65(0x254)](_0x3a80cc);},_0x148a83[_0x837605(0x233)]['_isPrimitiveType']=function(_0x550df5){var _0x5e5fde=_0x837605;return _0x550df5===_0x5e5fde(0x1b1)||_0x550df5==='string'||_0x550df5===_0x5e5fde(0x22c);},_0x148a83[_0x837605(0x233)]['_isPrimitiveWrapperType']=function(_0x452dae){var _0x2041ad=_0x837605;return _0x452dae==='Boolean'||_0x452dae===_0x2041ad(0x237)||_0x452dae===_0x2041ad(0x1bd);},_0x148a83['prototype'][_0x837605(0x1b3)]=function(_0x232d9a,_0x19a296,_0x27b989,_0x4558ec,_0x2ca7e7,_0x4ff508){var _0x34ab93=this;return function(_0x1dd73d){var _0x39a08f=_0x35df,_0x5888d6=_0x2ca7e7[_0x39a08f(0x1a6)][_0x39a08f(0x253)],_0x5c2350=_0x2ca7e7[_0x39a08f(0x1a6)]['index'],_0x2085dc=_0x2ca7e7[_0x39a08f(0x1a6)][_0x39a08f(0x1d6)];_0x2ca7e7[_0x39a08f(0x1a6)][_0x39a08f(0x1d6)]=_0x5888d6,_0x2ca7e7[_0x39a08f(0x1a6)]['index']=typeof _0x4558ec==_0x39a08f(0x22c)?_0x4558ec:_0x1dd73d,_0x232d9a[_0x39a08f(0x1a7)](_0x34ab93[_0x39a08f(0x1c8)](_0x19a296,_0x27b989,_0x4558ec,_0x2ca7e7,_0x4ff508)),_0x2ca7e7[_0x39a08f(0x1a6)]['parent']=_0x2085dc,_0x2ca7e7[_0x39a08f(0x1a6)][_0x39a08f(0x271)]=_0x5c2350;};},_0x148a83[_0x837605(0x233)][_0x837605(0x22e)]=function(_0x44847f,_0x205d7e,_0x3813ba,_0x54f58f,_0x5710cc,_0x470efd,_0x300cf3){var _0x2060c6=_0x837605,_0x45e540=this;return _0x205d7e[typeof _0x5710cc!=_0x2060c6(0x1cb)?_0x2060c6(0x200)+_0x5710cc['toString']():_0x5710cc]=!0x0,function(_0x4ad229){var _0x1fcea2=_0x2060c6,_0x10d5e3=_0x470efd[_0x1fcea2(0x1a6)]['current'],_0x35d996=_0x470efd['node'][_0x1fcea2(0x271)],_0xd55143=_0x470efd[_0x1fcea2(0x1a6)][_0x1fcea2(0x1d6)];_0x470efd['node'][_0x1fcea2(0x1d6)]=_0x10d5e3,_0x470efd[_0x1fcea2(0x1a6)][_0x1fcea2(0x271)]=_0x4ad229,_0x44847f['push'](_0x45e540[_0x1fcea2(0x1c8)](_0x3813ba,_0x54f58f,_0x5710cc,_0x470efd,_0x300cf3)),_0x470efd[_0x1fcea2(0x1a6)][_0x1fcea2(0x1d6)]=_0xd55143,_0x470efd['node'][_0x1fcea2(0x271)]=_0x35d996;};},_0x148a83[_0x837605(0x233)][_0x837605(0x1c8)]=function(_0xd836ce,_0x46a0c3,_0x15f6ac,_0x5b53e6,_0x2042c9){var _0x2565c5=_0x837605,_0x202cb0=this;_0x2042c9||(_0x2042c9=function(_0x5b375c,_0x36f7bf){return _0x5b375c[_0x36f7bf];});var _0x4b60b6=_0x15f6ac[_0x2565c5(0x1c4)](),_0x485172=_0x5b53e6['expressionsToEvaluate']||{},_0x4882e1=_0x5b53e6[_0x2565c5(0x242)],_0x1b061c=_0x5b53e6[_0x2565c5(0x224)];try{var _0x96adf6=this[_0x2565c5(0x1cc)](_0xd836ce),_0x477cb5=_0x4b60b6;_0x96adf6&&_0x477cb5[0x0]==='\\x27'&&(_0x477cb5=_0x477cb5[_0x2565c5(0x181)](0x1,_0x477cb5['length']-0x2));var _0x2e7d82=_0x5b53e6[_0x2565c5(0x192)]=_0x485172[_0x2565c5(0x200)+_0x477cb5];_0x2e7d82&&(_0x5b53e6['depth']=_0x5b53e6['depth']+0x1),_0x5b53e6['isExpressionToEvaluate']=!!_0x2e7d82;var _0x28d8f8=typeof _0x15f6ac==_0x2565c5(0x1cb),_0x43bf70={'name':_0x28d8f8||_0x96adf6?_0x4b60b6:this['_propertyName'](_0x4b60b6)};if(_0x28d8f8&&(_0x43bf70[_0x2565c5(0x1cb)]=!0x0),!(_0x46a0c3===_0x2565c5(0x221)||_0x46a0c3===_0x2565c5(0x1f2))){var _0x4f344d=this[_0x2565c5(0x1a0)](_0xd836ce,_0x15f6ac);if(_0x4f344d&&(_0x4f344d[_0x2565c5(0x23f)]&&(_0x43bf70[_0x2565c5(0x236)]=!0x0),_0x4f344d['get']&&!_0x2e7d82&&!_0x5b53e6[_0x2565c5(0x1ab)]))return _0x43bf70[_0x2565c5(0x260)]=!0x0,this['_processTreeNodeResult'](_0x43bf70,_0x5b53e6),_0x43bf70;}var _0x2e2d50;try{_0x2e2d50=_0x2042c9(_0xd836ce,_0x15f6ac);}catch(_0x8a7d4d){return _0x43bf70={'name':_0x4b60b6,'type':'unknown','error':_0x8a7d4d['message']},this['_processTreeNodeResult'](_0x43bf70,_0x5b53e6),_0x43bf70;}var _0x1d8a17=this[_0x2565c5(0x1ed)](_0x2e2d50),_0x557b18=this[_0x2565c5(0x16b)](_0x1d8a17);if(_0x43bf70['type']=_0x1d8a17,_0x557b18)this['_processTreeNodeResult'](_0x43bf70,_0x5b53e6,_0x2e2d50,function(){var _0x41f73d=_0x2565c5;_0x43bf70[_0x41f73d(0x1e3)]=_0x2e2d50['valueOf'](),!_0x2e7d82&&_0x202cb0[_0x41f73d(0x225)](_0x1d8a17,_0x43bf70,_0x5b53e6,{});});else{var _0x2822be=_0x5b53e6['autoExpand']&&_0x5b53e6[_0x2565c5(0x25c)]<_0x5b53e6[_0x2565c5(0x182)]&&_0x5b53e6[_0x2565c5(0x177)][_0x2565c5(0x18e)](_0x2e2d50)<0x0&&_0x1d8a17!==_0x2565c5(0x17e)&&_0x5b53e6['autoExpandPropertyCount']<_0x5b53e6[_0x2565c5(0x1da)];_0x2822be||_0x5b53e6[_0x2565c5(0x25c)]<_0x4882e1||_0x2e7d82?this[_0x2565c5(0x23b)](_0x43bf70,_0x2e2d50,_0x5b53e6,_0x2e7d82||{}):this[_0x2565c5(0x214)](_0x43bf70,_0x5b53e6,_0x2e2d50,function(){var _0x9e47bf=_0x2565c5;_0x1d8a17==='null'||_0x1d8a17===_0x9e47bf(0x20a)||(delete _0x43bf70['value'],_0x43bf70['capped']=!0x0);});}return _0x43bf70;}finally{_0x5b53e6[_0x2565c5(0x192)]=_0x485172,_0x5b53e6[_0x2565c5(0x242)]=_0x4882e1,_0x5b53e6['isExpressionToEvaluate']=_0x1b061c;}},_0x148a83[_0x837605(0x233)][_0x837605(0x225)]=function(_0xa0253a,_0x394e5a,_0x484357,_0x2813c2){var _0x3bbd33=_0x837605,_0x5af2cf=_0x2813c2['strLength']||_0x484357[_0x3bbd33(0x170)];if((_0xa0253a==='string'||_0xa0253a===_0x3bbd33(0x237))&&_0x394e5a['value']){let _0x2973ee=_0x394e5a[_0x3bbd33(0x1e3)][_0x3bbd33(0x206)];_0x484357['allStrLength']+=_0x2973ee,_0x484357[_0x3bbd33(0x24b)]>_0x484357[_0x3bbd33(0x16f)]?(_0x394e5a[_0x3bbd33(0x263)]='',delete _0x394e5a[_0x3bbd33(0x1e3)]):_0x2973ee>_0x5af2cf&&(_0x394e5a['capped']=_0x394e5a[_0x3bbd33(0x1e3)][_0x3bbd33(0x181)](0x0,_0x5af2cf),delete _0x394e5a[_0x3bbd33(0x1e3)]);}},_0x148a83[_0x837605(0x233)][_0x837605(0x1cc)]=function(_0x288ec5){var _0x1c1397=_0x837605;return!!(_0x288ec5&&_0x2c5cb5['Map']&&this['_objectToString'](_0x288ec5)===_0x1c1397(0x257)&&_0x288ec5[_0x1c1397(0x18a)]);},_0x148a83[_0x837605(0x233)][_0x837605(0x1a2)]=function(_0x24d6c7){var _0x7b8159=_0x837605;if(_0x24d6c7[_0x7b8159(0x1f6)](/^\\d+$/))return _0x24d6c7;var _0x1c019a;try{_0x1c019a=JSON[_0x7b8159(0x240)](''+_0x24d6c7);}catch{_0x1c019a='\\x22'+this[_0x7b8159(0x1e2)](_0x24d6c7)+'\\x22';}return _0x1c019a[_0x7b8159(0x1f6)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1c019a=_0x1c019a[_0x7b8159(0x181)](0x1,_0x1c019a['length']-0x2):_0x1c019a=_0x1c019a[_0x7b8159(0x1c0)](/'/g,'\\x5c\\x27')[_0x7b8159(0x1c0)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x1c019a;},_0x148a83['prototype'][_0x837605(0x214)]=function(_0x550471,_0x163d4b,_0x2998e5,_0x338c88){var _0x37fdc5=_0x837605;this[_0x37fdc5(0x25e)](_0x550471,_0x163d4b),_0x338c88&&_0x338c88(),this[_0x37fdc5(0x26c)](_0x2998e5,_0x550471),this[_0x37fdc5(0x227)](_0x550471,_0x163d4b);},_0x148a83['prototype']['_treeNodePropertiesBeforeFullValue']=function(_0x271c86,_0x4681b6){var _0x424b1a=_0x837605;this[_0x424b1a(0x270)](_0x271c86,_0x4681b6),this[_0x424b1a(0x1ac)](_0x271c86,_0x4681b6),this['_setNodeExpressionPath'](_0x271c86,_0x4681b6),this['_setNodePermissions'](_0x271c86,_0x4681b6);},_0x148a83[_0x837605(0x233)][_0x837605(0x270)]=function(_0x4a06db,_0x52ce96){},_0x148a83[_0x837605(0x233)][_0x837605(0x1ac)]=function(_0x40789e,_0x802a13){},_0x148a83[_0x837605(0x233)][_0x837605(0x24d)]=function(_0x3352c8,_0x47a3b9){},_0x148a83[_0x837605(0x233)]['_isUndefined']=function(_0x1bd8df){return _0x1bd8df===this['_undefined'];},_0x148a83[_0x837605(0x233)][_0x837605(0x227)]=function(_0x37eb0e,_0x314299){var _0x5678fd=_0x837605;this[_0x5678fd(0x24d)](_0x37eb0e,_0x314299),this[_0x5678fd(0x234)](_0x37eb0e),_0x314299['sortProps']&&this[_0x5678fd(0x173)](_0x37eb0e),this[_0x5678fd(0x20d)](_0x37eb0e,_0x314299),this[_0x5678fd(0x1b4)](_0x37eb0e,_0x314299),this[_0x5678fd(0x1b6)](_0x37eb0e);},_0x148a83[_0x837605(0x233)]['_additionalMetadata']=function(_0x160b33,_0x3d676d){var _0x3b1b51=_0x837605;try{_0x160b33&&typeof _0x160b33[_0x3b1b51(0x206)]=='number'&&(_0x3d676d[_0x3b1b51(0x206)]=_0x160b33[_0x3b1b51(0x206)]);}catch{}if(_0x3d676d['type']===_0x3b1b51(0x22c)||_0x3d676d[_0x3b1b51(0x1ee)]===_0x3b1b51(0x1bd)){if(isNaN(_0x3d676d[_0x3b1b51(0x1e3)]))_0x3d676d[_0x3b1b51(0x1c7)]=!0x0,delete _0x3d676d['value'];else switch(_0x3d676d['value']){case Number['POSITIVE_INFINITY']:_0x3d676d[_0x3b1b51(0x26f)]=!0x0,delete _0x3d676d[_0x3b1b51(0x1e3)];break;case Number[_0x3b1b51(0x19d)]:_0x3d676d[_0x3b1b51(0x21d)]=!0x0,delete _0x3d676d['value'];break;case 0x0:this[_0x3b1b51(0x1fd)](_0x3d676d[_0x3b1b51(0x1e3)])&&(_0x3d676d[_0x3b1b51(0x1f8)]=!0x0);break;}}else _0x3d676d['type']===_0x3b1b51(0x17e)&&typeof _0x160b33[_0x3b1b51(0x215)]==_0x3b1b51(0x232)&&_0x160b33[_0x3b1b51(0x215)]&&_0x3d676d[_0x3b1b51(0x215)]&&_0x160b33[_0x3b1b51(0x215)]!==_0x3d676d[_0x3b1b51(0x215)]&&(_0x3d676d['funcName']=_0x160b33[_0x3b1b51(0x215)]);},_0x148a83['prototype']['_isNegativeZero']=function(_0x3255f1){var _0xf70e2b=_0x837605;return 0x1/_0x3255f1===Number[_0xf70e2b(0x19d)];},_0x148a83[_0x837605(0x233)][_0x837605(0x173)]=function(_0xcf77f3){var _0x4f0c69=_0x837605;!_0xcf77f3[_0x4f0c69(0x23a)]||!_0xcf77f3[_0x4f0c69(0x23a)][_0x4f0c69(0x206)]||_0xcf77f3[_0x4f0c69(0x1ee)]===_0x4f0c69(0x221)||_0xcf77f3[_0x4f0c69(0x1ee)]===_0x4f0c69(0x1d4)||_0xcf77f3[_0x4f0c69(0x1ee)]==='Set'||_0xcf77f3['props'][_0x4f0c69(0x1b7)](function(_0x2fbd6c,_0x4d352b){var _0x23e415=_0x4f0c69,_0x593695=_0x2fbd6c[_0x23e415(0x215)]['toLowerCase'](),_0x3942dc=_0x4d352b[_0x23e415(0x215)][_0x23e415(0x244)]();return _0x593695<_0x3942dc?-0x1:_0x593695>_0x3942dc?0x1:0x0;});},_0x148a83[_0x837605(0x233)]['_addFunctionsNode']=function(_0x6f8db9,_0x77d67e){var _0x1c369c=_0x837605;if(!(_0x77d67e[_0x1c369c(0x22d)]||!_0x6f8db9[_0x1c369c(0x23a)]||!_0x6f8db9[_0x1c369c(0x23a)][_0x1c369c(0x206)])){for(var _0xd1921c=[],_0x20ea50=[],_0x1db020=0x0,_0x496fac=_0x6f8db9['props']['length'];_0x1db020<_0x496fac;_0x1db020++){var _0x203e33=_0x6f8db9[_0x1c369c(0x23a)][_0x1db020];_0x203e33['type']===_0x1c369c(0x17e)?_0xd1921c[_0x1c369c(0x1a7)](_0x203e33):_0x20ea50[_0x1c369c(0x1a7)](_0x203e33);}if(!(!_0x20ea50[_0x1c369c(0x206)]||_0xd1921c['length']<=0x1)){_0x6f8db9[_0x1c369c(0x23a)]=_0x20ea50;var _0x424c56={'functionsNode':!0x0,'props':_0xd1921c};this[_0x1c369c(0x270)](_0x424c56,_0x77d67e),this[_0x1c369c(0x24d)](_0x424c56,_0x77d67e),this[_0x1c369c(0x234)](_0x424c56),this['_setNodePermissions'](_0x424c56,_0x77d67e),_0x424c56['id']+='\\x20f',_0x6f8db9[_0x1c369c(0x23a)]['unshift'](_0x424c56);}}},_0x148a83[_0x837605(0x233)][_0x837605(0x1b4)]=function(_0x2ad3d7,_0x1660d0){},_0x148a83[_0x837605(0x233)][_0x837605(0x234)]=function(_0x26b910){},_0x148a83[_0x837605(0x233)]['_isArray']=function(_0x83357){var _0xaef6d1=_0x837605;return Array[_0xaef6d1(0x252)](_0x83357)||typeof _0x83357=='object'&&this[_0xaef6d1(0x1e2)](_0x83357)===_0xaef6d1(0x1f9);},_0x148a83[_0x837605(0x233)]['_setNodePermissions']=function(_0xb9f64,_0x982cb3){},_0x148a83[_0x837605(0x233)][_0x837605(0x1b6)]=function(_0x4d7ab9){var _0x17ec9f=_0x837605;delete _0x4d7ab9[_0x17ec9f(0x1af)],delete _0x4d7ab9['_hasSetOnItsPath'],delete _0x4d7ab9['_hasMapOnItsPath'];},_0x148a83['prototype'][_0x837605(0x16e)]=function(_0xe5bea7,_0x4a7ff0){};let _0x329413=new _0x148a83(),_0x55cbcb={'props':_0x29b76c[_0x837605(0x171)]['props']||0x64,'elements':_0x29b76c[_0x837605(0x171)][_0x837605(0x1a3)]||0x64,'strLength':_0x29b76c[_0x837605(0x171)][_0x837605(0x170)]||0x400*0x32,'totalStrLength':_0x29b76c['defaultLimits'][_0x837605(0x16f)]||0x400*0x32,'autoExpandLimit':_0x29b76c[_0x837605(0x171)][_0x837605(0x1da)]||0x1388,'autoExpandMaxDepth':_0x29b76c[_0x837605(0x171)][_0x837605(0x182)]||0xa},_0x520c1f={'props':_0x29b76c[_0x837605(0x1b8)][_0x837605(0x23a)]||0x5,'elements':_0x29b76c[_0x837605(0x1b8)]['elements']||0x5,'strLength':_0x29b76c['reducedLimits']['strLength']||0x100,'totalStrLength':_0x29b76c[_0x837605(0x1b8)][_0x837605(0x16f)]||0x100*0x3,'autoExpandLimit':_0x29b76c[_0x837605(0x1b8)][_0x837605(0x1da)]||0x1e,'autoExpandMaxDepth':_0x29b76c['reducedLimits'][_0x837605(0x182)]||0x2};if(_0xb2db7d){let _0x2d3a5e=_0x329413[_0x837605(0x23b)][_0x837605(0x1f7)](_0x329413);_0x329413[_0x837605(0x23b)]=function(_0x9dfa4c,_0x1ad50a,_0x5b6134,_0x1a207d){return _0x2d3a5e(_0x9dfa4c,_0xb2db7d(_0x1ad50a),_0x5b6134,_0x1a207d);};}function _0x49034d(_0xf4e35f,_0x451aa4,_0x34dce7,_0x515047,_0x4b4f2d,_0x2c7519){var _0x53ff39=_0x837605;let _0x1429dd,_0x137189;try{_0x137189=_0x4c3089(),_0x1429dd=_0x133d80[_0x451aa4],!_0x1429dd||_0x137189-_0x1429dd['ts']>_0x42c20c[_0x53ff39(0x1d3)]['resetWhenQuietMs']&&_0x1429dd[_0x53ff39(0x187)]&&_0x1429dd[_0x53ff39(0x1ba)]/_0x1429dd[_0x53ff39(0x187)]<_0x42c20c[_0x53ff39(0x1d3)][_0x53ff39(0x188)]?(_0x133d80[_0x451aa4]=_0x1429dd={'count':0x0,'time':0x0,'ts':_0x137189},_0x133d80[_0x53ff39(0x1d9)]={}):_0x137189-_0x133d80[_0x53ff39(0x1d9)]['ts']>_0x42c20c['global'][_0x53ff39(0x19a)]&&_0x133d80[_0x53ff39(0x1d9)][_0x53ff39(0x187)]&&_0x133d80[_0x53ff39(0x1d9)][_0x53ff39(0x1ba)]/_0x133d80[_0x53ff39(0x1d9)][_0x53ff39(0x187)]<_0x42c20c[_0x53ff39(0x183)][_0x53ff39(0x188)]&&(_0x133d80['hits']={});let _0x4986b7=[],_0x597f8f=_0x1429dd['reduceLimits']||_0x133d80['hits'][_0x53ff39(0x1d5)]?_0x520c1f:_0x55cbcb,_0x252691=_0xf8dd76=>{var _0x55d609=_0x53ff39;let _0x3ecca9={};return _0x3ecca9[_0x55d609(0x23a)]=_0xf8dd76[_0x55d609(0x23a)],_0x3ecca9[_0x55d609(0x1a3)]=_0xf8dd76['elements'],_0x3ecca9[_0x55d609(0x170)]=_0xf8dd76[_0x55d609(0x170)],_0x3ecca9['totalStrLength']=_0xf8dd76[_0x55d609(0x16f)],_0x3ecca9['autoExpandLimit']=_0xf8dd76[_0x55d609(0x1da)],_0x3ecca9['autoExpandMaxDepth']=_0xf8dd76['autoExpandMaxDepth'],_0x3ecca9['sortProps']=!0x1,_0x3ecca9['noFunctions']=!_0xbcafcf,_0x3ecca9[_0x55d609(0x242)]=0x1,_0x3ecca9[_0x55d609(0x25c)]=0x0,_0x3ecca9[_0x55d609(0x21b)]=_0x55d609(0x223),_0x3ecca9[_0x55d609(0x1e9)]=_0x55d609(0x213),_0x3ecca9[_0x55d609(0x256)]=!0x0,_0x3ecca9[_0x55d609(0x177)]=[],_0x3ecca9['autoExpandPropertyCount']=0x0,_0x3ecca9[_0x55d609(0x1ab)]=_0x29b76c[_0x55d609(0x1ab)],_0x3ecca9[_0x55d609(0x24b)]=0x0,_0x3ecca9['node']={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x3ecca9;};for(var _0x549aac=0x0;_0x549aac<_0x4b4f2d[_0x53ff39(0x206)];_0x549aac++)_0x4986b7[_0x53ff39(0x1a7)](_0x329413[_0x53ff39(0x23b)]({'timeNode':_0xf4e35f===_0x53ff39(0x1ba)||void 0x0},_0x4b4f2d[_0x549aac],_0x252691(_0x597f8f),{}));if(_0xf4e35f===_0x53ff39(0x26d)||_0xf4e35f===_0x53ff39(0x248)){let _0x1d03d5=Error['stackTraceLimit'];try{Error['stackTraceLimit']=0x1/0x0,_0x4986b7['push'](_0x329413[_0x53ff39(0x23b)]({'stackNode':!0x0},new Error()['stack'],_0x252691(_0x597f8f),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x1d03d5;}}return{'method':_0x53ff39(0x17c),'version':_0x51850a,'args':[{'ts':_0x34dce7,'session':_0x515047,'args':_0x4986b7,'id':_0x451aa4,'context':_0x2c7519}]};}catch(_0x212b6e){return{'method':_0x53ff39(0x17c),'version':_0x51850a,'args':[{'ts':_0x34dce7,'session':_0x515047,'args':[{'type':_0x53ff39(0x1db),'error':_0x212b6e&&_0x212b6e[_0x53ff39(0x198)]}],'id':_0x451aa4,'context':_0x2c7519}]};}finally{try{if(_0x1429dd&&_0x137189){let _0x59a5a9=_0x4c3089();_0x1429dd[_0x53ff39(0x187)]++,_0x1429dd[_0x53ff39(0x1ba)]+=_0x5b3db0(_0x137189,_0x59a5a9),_0x1429dd['ts']=_0x59a5a9,_0x133d80[_0x53ff39(0x1d9)]['count']++,_0x133d80[_0x53ff39(0x1d9)][_0x53ff39(0x1ba)]+=_0x5b3db0(_0x137189,_0x59a5a9),_0x133d80[_0x53ff39(0x1d9)]['ts']=_0x59a5a9,(_0x1429dd['count']>_0x42c20c[_0x53ff39(0x1d3)][_0x53ff39(0x207)]||_0x1429dd[_0x53ff39(0x1ba)]>_0x42c20c[_0x53ff39(0x1d3)][_0x53ff39(0x262)])&&(_0x1429dd['reduceLimits']=!0x0),(_0x133d80[_0x53ff39(0x1d9)][_0x53ff39(0x187)]>_0x42c20c[_0x53ff39(0x183)]['reduceOnCount']||_0x133d80[_0x53ff39(0x1d9)][_0x53ff39(0x1ba)]>_0x42c20c[_0x53ff39(0x183)][_0x53ff39(0x262)])&&(_0x133d80[_0x53ff39(0x1d9)][_0x53ff39(0x1d5)]=!0x0);}}catch{}}}return _0x49034d;}function G(_0x34f1d1){var _0x2a1472=_0x3ea9a1;if(_0x34f1d1&&typeof _0x34f1d1=='object'&&_0x34f1d1[_0x2a1472(0x16c)])switch(_0x34f1d1[_0x2a1472(0x16c)][_0x2a1472(0x215)]){case _0x2a1472(0x210):return _0x34f1d1['hasOwnProperty'](Symbol[_0x2a1472(0x25f)])?Promise[_0x2a1472(0x218)]():_0x34f1d1;case'bound\\x20Promise':return Promise['resolve']();}return _0x34f1d1;}((_0x4c53dc,_0x2cef24,_0x740e84,_0x8c074a,_0x184e8b,_0x241e4,_0x2090ec,_0x45331a,_0x35a7e7,_0x114da4,_0x47e808,_0x311da8)=>{var _0x31b09b=_0x3ea9a1;if(_0x4c53dc['_console_ninja'])return _0x4c53dc['_console_ninja'];let _0x3e2604={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x4c53dc,_0x45331a,_0x184e8b))return _0x4c53dc[_0x31b09b(0x18f)]=_0x3e2604,_0x4c53dc['_console_ninja'];let _0x53384f=b(_0x4c53dc),_0x18745c=_0x53384f[_0x31b09b(0x220)],_0x3a7b20=_0x53384f[_0x31b09b(0x20e)],_0x2e8a66=_0x53384f[_0x31b09b(0x1f5)],_0x279135={'hits':{},'ts':{}},_0x1870ae=J(_0x4c53dc,_0x35a7e7,_0x279135,_0x241e4,_0x311da8,_0x184e8b===_0x31b09b(0x1dc)?G:void 0x0),_0x4ed409=(_0x577d34,_0x2c5445,_0x2d2222,_0x399041,_0x1e9863,_0x44ac4c)=>{var _0x4c72eb=_0x31b09b;let _0x7144f0=_0x4c53dc[_0x4c72eb(0x18f)];try{return _0x4c53dc['_console_ninja']=_0x3e2604,_0x1870ae(_0x577d34,_0x2c5445,_0x2d2222,_0x399041,_0x1e9863,_0x44ac4c);}finally{_0x4c53dc[_0x4c72eb(0x18f)]=_0x7144f0;}},_0x462c39=_0x7624ff=>{_0x279135['ts'][_0x7624ff]=_0x3a7b20();},_0x50b682=(_0x48d55a,_0x252b14)=>{let _0x7c71fa=_0x279135['ts'][_0x252b14];if(delete _0x279135['ts'][_0x252b14],_0x7c71fa){let _0x576e53=_0x18745c(_0x7c71fa,_0x3a7b20());_0x3eeb6c(_0x4ed409('time',_0x48d55a,_0x2e8a66(),_0x3ee074,[_0x576e53],_0x252b14));}},_0x34a185=_0x2239f7=>{var _0x27230b=_0x31b09b,_0xd2919a;return _0x184e8b==='next.js'&&_0x4c53dc['origin']&&((_0xd2919a=_0x2239f7==null?void 0x0:_0x2239f7[_0x27230b(0x265)])==null?void 0x0:_0xd2919a[_0x27230b(0x206)])&&(_0x2239f7[_0x27230b(0x265)][0x0][_0x27230b(0x212)]=_0x4c53dc['origin']),_0x2239f7;};_0x4c53dc[_0x31b09b(0x18f)]={'consoleLog':(_0x37dada,_0x4f7036)=>{var _0x5a915e=_0x31b09b;_0x4c53dc[_0x5a915e(0x24c)]['log']['name']!==_0x5a915e(0x17f)&&_0x3eeb6c(_0x4ed409(_0x5a915e(0x17c),_0x37dada,_0x2e8a66(),_0x3ee074,_0x4f7036));},'consoleTrace':(_0x10e939,_0x1f0813)=>{var _0x130acf=_0x31b09b,_0x4d86a3,_0x39e6a3;_0x4c53dc['console'][_0x130acf(0x17c)][_0x130acf(0x215)]!==_0x130acf(0x249)&&((_0x39e6a3=(_0x4d86a3=_0x4c53dc['process'])==null?void 0x0:_0x4d86a3[_0x130acf(0x247)])!=null&&_0x39e6a3['node']&&(_0x4c53dc[_0x130acf(0x24e)]=!0x0),_0x3eeb6c(_0x34a185(_0x4ed409(_0x130acf(0x26d),_0x10e939,_0x2e8a66(),_0x3ee074,_0x1f0813))));},'consoleError':(_0x27e7ef,_0x50dec3)=>{var _0x101678=_0x31b09b;_0x4c53dc['_ninjaIgnoreNextError']=!0x0,_0x3eeb6c(_0x34a185(_0x4ed409(_0x101678(0x248),_0x27e7ef,_0x2e8a66(),_0x3ee074,_0x50dec3)));},'consoleTime':_0x214702=>{_0x462c39(_0x214702);},'consoleTimeEnd':(_0x33ed55,_0x543cb6)=>{_0x50b682(_0x543cb6,_0x33ed55);},'autoLog':(_0x4b8fdc,_0x2bbedf)=>{_0x3eeb6c(_0x4ed409('log',_0x2bbedf,_0x2e8a66(),_0x3ee074,[_0x4b8fdc]));},'autoLogMany':(_0x5627a5,_0x1e1cdf)=>{var _0x34dbf9=_0x31b09b;_0x3eeb6c(_0x4ed409(_0x34dbf9(0x17c),_0x5627a5,_0x2e8a66(),_0x3ee074,_0x1e1cdf));},'autoTrace':(_0x358b3c,_0x18b2a7)=>{_0x3eeb6c(_0x34a185(_0x4ed409('trace',_0x18b2a7,_0x2e8a66(),_0x3ee074,[_0x358b3c])));},'autoTraceMany':(_0x2d079b,_0x997364)=>{_0x3eeb6c(_0x34a185(_0x4ed409('trace',_0x2d079b,_0x2e8a66(),_0x3ee074,_0x997364)));},'autoTime':(_0x3f4061,_0x402ee5,_0x38d7fc)=>{_0x462c39(_0x38d7fc);},'autoTimeEnd':(_0x5377de,_0x3c67c5,_0x27ee03)=>{_0x50b682(_0x3c67c5,_0x27ee03);},'coverage':_0x12c1bb=>{var _0x27971b=_0x31b09b;_0x3eeb6c({'method':_0x27971b(0x1ec),'version':_0x241e4,'args':[{'id':_0x12c1bb}]});}};let _0x3eeb6c=H(_0x4c53dc,_0x2cef24,_0x740e84,_0x8c074a,_0x184e8b,_0x114da4,_0x47e808),_0x3ee074=_0x4c53dc[_0x31b09b(0x18b)];return _0x4c53dc[_0x31b09b(0x18f)];})(globalThis,_0x3ea9a1(0x17b),_0x3ea9a1(0x222),_0x3ea9a1(0x1b0),_0x3ea9a1(0x176),_0x3ea9a1(0x1b9),_0x3ea9a1(0x1a4),_0x3ea9a1(0x174),_0x3ea9a1(0x1e5),_0x3ea9a1(0x239),_0x3ea9a1(0x1e7),_0x3ea9a1(0x201));");
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
__turbopack_context__.k.register(_c, "AddPost");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_admin_add-post_page_jsx_cf328b01._.js.map