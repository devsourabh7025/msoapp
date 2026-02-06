(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/RichTextEditor.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RichTextEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bold.js [app-client] (ecmascript) <export default as Bold>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/italic.js [app-client] (ecmascript) <export default as Italic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/underline.js [app-client] (ecmascript) <export default as Underline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-1.js [app-client] (ecmascript) <export default as Heading1>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-2.js [app-client] (ecmascript) <export default as Heading2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-3.js [app-client] (ecmascript) <export default as Heading3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading4$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-4.js [app-client] (ecmascript) <export default as Heading4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading5$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-5.js [app-client] (ecmascript) <export default as Heading5>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading6$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heading-6.js [app-client] (ecmascript) <export default as Heading6>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$strikethrough$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Strikethrough$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/strikethrough.js [app-client] (ecmascript) <export default as Strikethrough>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-start.js [app-client] (ecmascript) <export default as AlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-center.js [app-client] (ecmascript) <export default as AlignCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-end.js [app-client] (ecmascript) <export default as AlignRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$justify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignJustify$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-justify.js [app-client] (ecmascript) <export default as AlignJustify>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RichTextEditor({ value, onChange, placeholder = "Start writing your post..." }) {
    _s();
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toolbarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isBold, setIsBold] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isItalic, setIsItalic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUnderline, setIsUnderline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStrikethrough, setIsStrikethrough] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showColorPicker, setShowColorPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFontSizeMenu, setShowFontSizeMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RichTextEditor.useEffect": ()=>{
            if (editorRef.current && value !== editorRef.current.innerHTML) {
                editorRef.current.innerHTML = value || "";
            }
        }
    }["RichTextEditor.useEffect"], [
        value
    ]);
    // Set container max height based on viewport
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RichTextEditor.useEffect": ()=>{
            const updateContainerHeight = {
                "RichTextEditor.useEffect.updateContainerHeight": ()=>{
                    if (containerRef.current) {
                        // Find navbar/header element
                        const navbar = document.querySelector('nav, header, [role="navigation"]');
                        const headerHeight = navbar ? navbar.offsetHeight : 0;
                        // Calculate available height: viewport - header - page padding (200px for margins/padding)
                        const availableHeight = window.innerHeight - headerHeight - 200;
                        containerRef.current.style.maxHeight = `${Math.max(500, availableHeight)}px`;
                    }
                }
            }["RichTextEditor.useEffect.updateContainerHeight"];
            // Initial calculation
            updateContainerHeight();
            // Update on resize
            window.addEventListener('resize', updateContainerHeight);
            // Also update after a short delay to account for dynamic header loading
            const timeoutId = setTimeout(updateContainerHeight, 100);
            return ({
                "RichTextEditor.useEffect": ()=>{
                    window.removeEventListener('resize', updateContainerHeight);
                    clearTimeout(timeoutId);
                }
            })["RichTextEditor.useEffect"];
        }
    }["RichTextEditor.useEffect"], []);
    const updateFormattingState = ()=>{
        if (!editorRef.current) return;
        const selection = window.getSelection();
        // Only update if selection is within editor
        if (selection.rangeCount > 0 && editorRef.current.contains(selection.anchorNode)) {
            setIsBold(document.queryCommandState("bold"));
            setIsItalic(document.queryCommandState("italic"));
            setIsUnderline(document.queryCommandState("underline"));
            setIsStrikethrough(document.queryCommandState("strikeThrough"));
        } else {
            // Reset states when selection is outside editor
            setIsBold(false);
            setIsItalic(false);
            setIsUnderline(false);
            setIsStrikethrough(false);
        }
    };
    const handleInput = ()=>{
        if (editorRef.current) {
            const html = editorRef.current.innerHTML;
            onChange(html);
            updateFormattingState();
        }
    };
    const handleSelectionChange = ()=>{
        updateFormattingState();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RichTextEditor.useEffect": ()=>{
            document.addEventListener("selectionchange", handleSelectionChange);
            // Close dropdowns when clicking outside
            const handleClickOutside = {
                "RichTextEditor.useEffect.handleClickOutside": (e)=>{
                    if (showColorPicker && !e.target.closest('.color-picker-container')) {
                        setShowColorPicker(false);
                    }
                    if (showFontSizeMenu && !e.target.closest('.font-size-container')) {
                        setShowFontSizeMenu(false);
                    }
                }
            }["RichTextEditor.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "RichTextEditor.useEffect": ()=>{
                    document.removeEventListener("selectionchange", handleSelectionChange);
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["RichTextEditor.useEffect"];
        }
    }["RichTextEditor.useEffect"], [
        showColorPicker,
        showFontSizeMenu
    ]);
    const execCommand = (command, value = null)=>{
        if (!editorRef.current) return;
        // Ensure editor is focused
        editorRef.current.focus();
        // Get current selection
        const selection = window.getSelection();
        let range = null;
        // Ensure we have a valid selection
        if (selection.rangeCount === 0) {
            // No selection, create one at cursor position
            range = document.createRange();
            if (editorRef.current.childNodes.length > 0) {
                range.setStart(editorRef.current, editorRef.current.childNodes.length);
                range.collapse(true);
            } else {
                range.selectNodeContents(editorRef.current);
                range.collapse(false);
            }
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            range = selection.getRangeAt(0);
            // Ensure range is within editor
            if (!editorRef.current.contains(range.commonAncestorContainer)) {
                range = document.createRange();
                range.selectNodeContents(editorRef.current);
                range.collapse(false);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }
        try {
            const success = document.execCommand(command, false, value);
            if (!success && command === "formatBlock") {
                // Fallback for formatBlock
                const currentSelection = window.getSelection();
                if (currentSelection.rangeCount > 0) {
                    const currentRange = currentSelection.getRangeAt(0);
                    const selectedText = currentRange.toString();
                    if (selectedText) {
                        // Wrap selected text
                        const newElement = document.createElement(value);
                        newElement.textContent = selectedText;
                        currentRange.deleteContents();
                        currentRange.insertNode(newElement);
                        currentSelection.removeAllRanges();
                        const newRange = document.createRange();
                        newRange.selectNodeContents(newElement);
                        newRange.collapse(false);
                        currentSelection.addRange(newRange);
                    } else {
                        // No selection, find current block element
                        let blockElement = currentRange.commonAncestorContainer;
                        if (blockElement.nodeType === 3) {
                            blockElement = blockElement.parentElement;
                        }
                        // Find the nearest block-level element
                        while(blockElement && blockElement !== editorRef.current && ![
                            'H1',
                            'H2',
                            'H3',
                            'H4',
                            'H5',
                            'H6',
                            'P',
                            'DIV',
                            'BLOCKQUOTE',
                            'PRE'
                        ].includes(blockElement.tagName)){
                            blockElement = blockElement.parentElement;
                        }
                        if (blockElement && blockElement !== editorRef.current) {
                            const newElement = document.createElement(value);
                            newElement.innerHTML = blockElement.innerHTML;
                            blockElement.parentNode.replaceChild(newElement, blockElement);
                            // Set cursor at end
                            const newRange = document.createRange();
                            newRange.selectNodeContents(newElement);
                            newRange.collapse(false);
                            currentSelection.removeAllRanges();
                            currentSelection.addRange(newRange);
                        } else {
                            // Create new element at cursor
                            const newElement = document.createElement(value);
                            newElement.innerHTML = '<br>';
                            currentRange.insertNode(newElement);
                            const newRange = document.createRange();
                            newRange.setStart(newElement, 0);
                            newRange.collapse(true);
                            currentSelection.removeAllRanges();
                            currentSelection.addRange(newRange);
                        }
                    }
                }
            }
        } catch (e) {
            console.error("Command execution failed:", e);
        }
        handleInput();
        updateFormattingState();
    };
    const insertHeading = (level)=>{
        if (!editorRef.current) return;
        editorRef.current.focus();
        const selection = window.getSelection();
        const headingTag = `h${level}`;
        // Ensure we have a valid selection
        if (selection.rangeCount === 0) {
            // Create selection at cursor
            const range = document.createRange();
            range.selectNodeContents(editorRef.current);
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        const range = selection.getRangeAt(0);
        // Ensure range is within editor
        if (!editorRef.current.contains(range.commonAncestorContainer)) {
            const newRange = document.createRange();
            newRange.selectNodeContents(editorRef.current);
            newRange.collapse(false);
            selection.removeAllRanges();
            selection.addRange(newRange);
            return;
        }
        const selectedText = range.toString();
        try {
            // Find the current block element (paragraph, div, or existing heading)
            let blockElement = range.commonAncestorContainer;
            if (blockElement.nodeType === 3) {
                blockElement = blockElement.parentElement;
            }
            // Walk up to find block-level element
            while(blockElement && blockElement !== editorRef.current){
                const tagName = blockElement.tagName;
                if ([
                    'H1',
                    'H2',
                    'H3',
                    'H4',
                    'H5',
                    'H6',
                    'P',
                    'DIV',
                    'BLOCKQUOTE',
                    'PRE',
                    'LI'
                ].includes(tagName)) {
                    break;
                }
                blockElement = blockElement.parentElement;
            }
            if (selectedText) {
                // Text is selected - wrap it in heading
                const heading = document.createElement(headingTag);
                heading.textContent = selectedText;
                range.deleteContents();
                range.insertNode(heading);
                // Place cursor after heading
                const newRange = document.createRange();
                newRange.setStartAfter(heading);
                newRange.collapse(true);
                selection.removeAllRanges();
                selection.addRange(newRange);
                handleInput();
            } else if (blockElement && blockElement !== editorRef.current && [
                'H1',
                'H2',
                'H3',
                'H4',
                'H5',
                'H6',
                'P',
                'DIV'
            ].includes(blockElement.tagName)) {
                // Replace current block with heading
                const heading = document.createElement(headingTag);
                // Preserve content but clean it up
                let content = blockElement.innerHTML;
                if (!content || content.trim() === '' || content === '<br>') {
                    content = '<br>';
                }
                heading.innerHTML = content;
                // Replace the block element
                if (blockElement.parentNode) {
                    blockElement.parentNode.replaceChild(heading, blockElement);
                } else {
                    editorRef.current.replaceChild(heading, blockElement);
                }
                // Set cursor in heading
                const newRange = document.createRange();
                if (heading.firstChild && heading.firstChild.nodeType === 3) {
                    newRange.setStart(heading.firstChild, heading.firstChild.textContent.length);
                } else {
                    newRange.selectNodeContents(heading);
                    newRange.collapse(false);
                }
                selection.removeAllRanges();
                selection.addRange(newRange);
                handleInput();
            } else {
                // No block found or at root - try formatBlock command first
                const success = document.execCommand("formatBlock", false, headingTag);
                if (!success) {
                    // Fallback: create new heading element
                    const heading = document.createElement(headingTag);
                    heading.innerHTML = '<br>';
                    // Insert at cursor position
                    if (range.startContainer === editorRef.current || range.startContainer.parentElement === editorRef.current) {
                        range.insertNode(heading);
                    } else {
                        editorRef.current.appendChild(heading);
                    }
                    // Set cursor in heading
                    const newRange = document.createRange();
                    newRange.setStart(heading, 0);
                    newRange.collapse(true);
                    selection.removeAllRanges();
                    selection.addRange(newRange);
                }
                handleInput();
            }
        } catch (e) {
            console.error("Heading insertion failed:", e);
            // Ultimate fallback
            try {
                const heading = document.createElement(headingTag);
                if (selectedText) {
                    heading.textContent = selectedText;
                    range.deleteContents();
                    range.insertNode(heading);
                } else {
                    heading.innerHTML = '<br>';
                    range.insertNode(heading);
                }
                const newRange = document.createRange();
                newRange.selectNodeContents(heading);
                newRange.collapse(false);
                selection.removeAllRanges();
                selection.addRange(newRange);
                handleInput();
            } catch (e2) {
                console.error("Fallback heading insertion also failed:", e2);
            }
        }
        updateFormattingState();
    };
    const insertImage = (alignment = 'left')=>{
        const url = prompt("Enter image URL:");
        if (url && url.trim()) {
            if (!editorRef.current) return;
            editorRef.current.focus();
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                const img = document.createElement("img");
                img.src = url.trim();
                img.style.maxWidth = "100%";
                img.style.height = "auto";
                img.alt = "Image";
                // Wrap image in a div for alignment
                const wrapper = document.createElement("div");
                wrapper.className = "image-wrapper";
                wrapper.style.textAlign = alignment;
                wrapper.style.margin = "1em 0";
                wrapper.appendChild(img);
                range.insertNode(wrapper);
                // Place cursor after image
                const newRange = document.createRange();
                newRange.setStartAfter(wrapper);
                newRange.collapse(true);
                selection.removeAllRanges();
                selection.addRange(newRange);
                handleInput();
            } else {
                // Fallback for execCommand
                execCommand("insertImage", url.trim());
                // Try to find and wrap the inserted image
                setTimeout(()=>{
                    const images = editorRef.current.querySelectorAll('img');
                    if (images.length > 0) {
                        const lastImg = images[images.length - 1];
                        if (!lastImg.parentElement.classList.contains('image-wrapper')) {
                            const wrapper = document.createElement("div");
                            wrapper.className = "image-wrapper";
                            wrapper.style.textAlign = alignment;
                            wrapper.style.margin = "1em 0";
                            lastImg.parentNode.insertBefore(wrapper, lastImg);
                            wrapper.appendChild(lastImg);
                            handleInput();
                        }
                    }
                }, 100);
            }
        }
    };
    const alignImage = (alignment)=>{
        if (!editorRef.current) return;
        editorRef.current.focus();
        const selection = window.getSelection();
        if (selection.rangeCount === 0) return;
        const range = selection.getRangeAt(0);
        let node = range.commonAncestorContainer;
        // Find the image element
        let img = null;
        if (node.nodeName === 'IMG') {
            img = node;
        } else if (node.nodeName === 'DIV' && node.querySelector('img')) {
            img = node.querySelector('img');
        } else {
            // Walk up to find image
            let current = node;
            while(current && current !== editorRef.current){
                if (current.nodeName === 'IMG') {
                    img = current;
                    break;
                }
                if (current.querySelector && current.querySelector('img')) {
                    img = current.querySelector('img');
                    break;
                }
                current = current.parentElement;
            }
        }
        if (img) {
            // Check if image is already wrapped
            let wrapper = img.parentElement;
            if (!wrapper.classList.contains('image-wrapper')) {
                // Create wrapper
                const newWrapper = document.createElement("div");
                newWrapper.className = "image-wrapper";
                newWrapper.style.margin = "1em 0";
                img.parentNode.insertBefore(newWrapper, img);
                newWrapper.appendChild(img);
                wrapper = newWrapper;
            }
            // Apply alignment
            wrapper.style.textAlign = alignment;
            handleInput();
        }
    };
    const handleImageUpload = (e, alignment = 'left')=>{
        const file = e.target.files?.[0];
        if (!file) return;
        // Check if it's an image
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file');
            return;
        }
        // Create a FileReader to convert image to data URL
        const reader = new FileReader();
        reader.onloadend = ()=>{
            if (!editorRef.current) return;
            editorRef.current.focus();
            const selection = window.getSelection();
            let range = null;
            if (selection.rangeCount > 0) {
                range = selection.getRangeAt(0);
            } else {
                range = document.createRange();
                range.selectNodeContents(editorRef.current);
                range.collapse(false);
                selection.removeAllRanges();
                selection.addRange(range);
            }
            const img = document.createElement("img");
            img.src = reader.result;
            img.style.maxWidth = "100%";
            img.style.height = "auto";
            img.alt = file.name || "Uploaded image";
            // Wrap image in a div for alignment
            const wrapper = document.createElement("div");
            wrapper.className = "image-wrapper";
            wrapper.style.textAlign = alignment;
            wrapper.style.margin = "1em 0";
            wrapper.appendChild(img);
            range.insertNode(wrapper);
            // Place cursor after image
            const newRange = document.createRange();
            newRange.setStartAfter(wrapper);
            newRange.collapse(true);
            selection.removeAllRanges();
            selection.addRange(newRange);
            handleInput();
        };
        reader.onerror = ()=>{
            alert('Error reading image file');
        };
        reader.readAsDataURL(file);
        // Reset file input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const triggerImageUpload = ()=>{
        fileInputRef.current?.click();
    };
    const insertLink = ()=>{
        if (!editorRef.current) return;
        editorRef.current.focus();
        const selection = window.getSelection();
        const selectedText = selection.toString();
        if (selectedText) {
            // Text is selected, make it a link
            const url = prompt("Enter link URL:", "https://");
            if (url && url.trim()) {
                execCommand("createLink", url.trim());
            }
        } else {
            // No text selected, ask for both text and URL
            const linkText = prompt("Enter link text:");
            if (linkText && linkText.trim()) {
                const url = prompt("Enter link URL:", "https://");
                if (url && url.trim()) {
                    // Insert link text and make it a link
                    const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
                    if (range) {
                        const link = document.createElement("a");
                        link.href = url.trim();
                        link.textContent = linkText.trim();
                        link.target = "_blank";
                        link.rel = "noopener noreferrer";
                        range.insertNode(link);
                        // Place cursor after link
                        const newRange = document.createRange();
                        newRange.setStartAfter(link);
                        newRange.collapse(true);
                        selection.removeAllRanges();
                        selection.addRange(newRange);
                        handleInput();
                    }
                }
            }
        }
    };
    const setTextColor = (color)=>{
        if (!editorRef.current) return;
        editorRef.current.focus();
        const selection = window.getSelection();
        if (selection.rangeCount > 0 && selection.toString()) {
            execCommand("foreColor", color);
        } else {
            // Apply color to next typed text
            execCommand("foreColor", color);
        }
        setShowColorPicker(false);
    };
    const setFontSize = (size)=>{
        if (!editorRef.current) return;
        editorRef.current.focus();
        // Map size to actual font size in pixels for normal text
        const sizeMap = {
            1: "10px",
            2: "12px",
            3: "14px",
            4: "16px",
            5: "18px",
            6: "20px",
            7: "24px",
            8: "28px",
            9: "32px",
            10: "36px"
        };
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const selectedText = selection.toString();
            if (selectedText) {
                // Apply to selected text using CSS span
                const span = document.createElement("span");
                span.style.fontSize = sizeMap[size] || "16px";
                try {
                    range.surroundContents(span);
                } catch (e) {
                    // If surroundContents fails, wrap manually
                    const textNode = document.createTextNode(selectedText);
                    span.appendChild(textNode);
                    range.deleteContents();
                    range.insertNode(span);
                }
                // Set cursor after span
                const newRange = document.createRange();
                newRange.setStartAfter(span);
                newRange.collapse(true);
                selection.removeAllRanges();
                selection.addRange(newRange);
                handleInput();
            } else {
                // No selection, apply to next typed text
                // Use CSS font-size instead of deprecated fontSize command
                const span = document.createElement("span");
                span.style.fontSize = sizeMap[size] || "16px";
                span.innerHTML = '<br>';
                range.insertNode(span);
                const newRange = document.createRange();
                newRange.setStart(span, 0);
                newRange.collapse(true);
                selection.removeAllRanges();
                selection.addRange(newRange);
                handleInput();
            }
        } else {
            // Fallback
            const range = document.createRange();
            range.selectNodeContents(editorRef.current);
            range.collapse(false);
            const span = document.createElement("span");
            span.style.fontSize = sizeMap[size] || "16px";
            span.innerHTML = '<br>';
            range.insertNode(span);
            const newRange = document.createRange();
            newRange.setStart(span, 0);
            newRange.collapse(true);
            selection.removeAllRanges();
            selection.addRange(newRange);
            handleInput();
        }
        setShowFontSizeMenu(false);
    };
    const insertCode = ()=>{
        if (!editorRef.current) return;
        editorRef.current.focus();
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const selectedText = selection.toString();
            if (selectedText) {
                // Wrap selected text in <code> tag for inline code
                const code = document.createElement("code");
                code.textContent = selectedText;
                range.deleteContents();
                range.insertNode(code);
                selection.removeAllRanges();
                const newRange = document.createRange();
                newRange.setStartAfter(code);
                newRange.collapse(true);
                selection.addRange(newRange);
                handleInput();
            } else {
                // No selection, insert code block (pre)
                execCommand("formatBlock", "pre");
            }
        } else {
            execCommand("formatBlock", "pre");
        }
    };
    const removeQuote = ()=>{
        if (!editorRef.current) return;
        try {
            editorRef.current.focus();
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                let blockquote = null;
                // Check if selection is inside a blockquote
                let node = range.commonAncestorContainer;
                while(node && node !== editorRef.current){
                    if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'BLOCKQUOTE') {
                        blockquote = node;
                        break;
                    }
                    node = node.parentNode;
                }
                if (blockquote) {
                    // Convert blockquote to paragraph
                    const p = document.createElement('p');
                    p.innerHTML = blockquote.innerHTML;
                    if (blockquote.parentNode) {
                        blockquote.parentNode.replaceChild(p, blockquote);
                    } else {
                        editorRef.current.replaceChild(p, blockquote);
                    }
                    // Set cursor in the new paragraph
                    const newRange = document.createRange();
                    newRange.selectNodeContents(p);
                    newRange.collapse(false);
                    selection.removeAllRanges();
                    selection.addRange(newRange);
                    handleInput();
                    return;
                }
            }
            // If no blockquote found in selection, remove all blockquotes from editor
            const blockquotes = editorRef.current.querySelectorAll('blockquote');
            blockquotes.forEach((bq)=>{
                const p = document.createElement('p');
                p.innerHTML = bq.innerHTML;
                if (bq.parentNode) {
                    bq.parentNode.replaceChild(p, bq);
                }
            });
            handleInput();
        } catch (error) {
            console.error("Remove quote failed:", error);
        }
    };
    const insertQuote = ()=>{
        if (!editorRef.current) return;
        editorRef.current.focus();
        const selection = window.getSelection();
        let range = null;
        // Ensure we have a valid selection
        if (selection.rangeCount === 0) {
            const newRange = document.createRange();
            newRange.selectNodeContents(editorRef.current);
            newRange.collapse(false);
            selection.removeAllRanges();
            selection.addRange(newRange);
        }
        range = selection.getRangeAt(0);
        // Ensure range is within editor
        if (!editorRef.current.contains(range.commonAncestorContainer)) {
            return;
        }
        const selectedText = range.toString();
        try {
            // Find the current block element
            let blockElement = range.commonAncestorContainer;
            if (blockElement.nodeType === 3) {
                blockElement = blockElement.parentElement;
            }
            // Walk up to find block-level element
            while(blockElement && blockElement !== editorRef.current){
                const tagName = blockElement.tagName;
                if ([
                    'H1',
                    'H2',
                    'H3',
                    'H4',
                    'H5',
                    'H6',
                    'P',
                    'DIV',
                    'BLOCKQUOTE',
                    'PRE',
                    'LI'
                ].includes(tagName)) {
                    break;
                }
                blockElement = blockElement.parentElement;
            }
            if (selectedText) {
                // Text is selected - wrap it in blockquote
                const blockquote = document.createElement("blockquote");
                blockquote.className = "quote-block";
                blockquote.innerHTML = `<p>${selectedText}</p>`;
                range.deleteContents();
                range.insertNode(blockquote);
                // Place cursor after blockquote
                const newRange = document.createRange();
                newRange.setStartAfter(blockquote);
                newRange.collapse(true);
                selection.removeAllRanges();
                selection.addRange(newRange);
                handleInput();
            } else if (blockElement && blockElement !== editorRef.current && [
                'H1',
                'H2',
                'H3',
                'H4',
                'H5',
                'H6',
                'P',
                'DIV'
            ].includes(blockElement.tagName)) {
                // Replace current block with blockquote
                const blockquote = document.createElement("blockquote");
                blockquote.className = "quote-block";
                let content = blockElement.innerHTML;
                if (!content || content.trim() === '' || content === '<br>') {
                    content = '<p><br></p>';
                } else {
                    // Wrap content in paragraph if not already
                    if (!content.startsWith('<p>')) {
                        content = `<p>${content}</p>`;
                    }
                }
                blockquote.innerHTML = content;
                // Replace the block element
                if (blockElement.parentNode) {
                    blockElement.parentNode.replaceChild(blockquote, blockElement);
                } else {
                    editorRef.current.replaceChild(blockquote, blockElement);
                }
                // Set cursor in blockquote
                const newRange = document.createRange();
                const firstP = blockquote.querySelector('p');
                if (firstP && firstP.firstChild) {
                    newRange.setStart(firstP.firstChild, firstP.firstChild.textContent?.length || 0);
                } else {
                    newRange.selectNodeContents(blockquote);
                    newRange.collapse(false);
                }
                selection.removeAllRanges();
                selection.addRange(newRange);
                handleInput();
            } else {
                // Try formatBlock command first
                const success = document.execCommand("formatBlock", false, "blockquote");
                if (!success) {
                    // Fallback: create new blockquote element
                    const blockquote = document.createElement("blockquote");
                    blockquote.className = "quote-block";
                    blockquote.innerHTML = '<p><br></p>';
                    // Insert at cursor position
                    if (range.startContainer === editorRef.current || range.startContainer.parentElement === editorRef.current) {
                        range.insertNode(blockquote);
                    } else {
                        editorRef.current.appendChild(blockquote);
                    }
                    // Set cursor in blockquote
                    const newRange = document.createRange();
                    const firstP = blockquote.querySelector('p');
                    if (firstP) {
                        newRange.setStart(firstP, 0);
                    } else {
                        newRange.setStart(blockquote, 0);
                    }
                    newRange.collapse(true);
                    selection.removeAllRanges();
                    selection.addRange(newRange);
                } else {
                    // Add class to the created blockquote
                    const blockquotes = editorRef.current.querySelectorAll('blockquote');
                    if (blockquotes.length > 0) {
                        const lastBlockquote = blockquotes[blockquotes.length - 1];
                        lastBlockquote.className = "quote-block";
                    }
                }
                handleInput();
            }
        } catch (e) {
            console.error("Quote insertion failed:", e);
            // Fallback
            try {
                const blockquote = document.createElement("blockquote");
                blockquote.className = "quote-block";
                if (selectedText) {
                    blockquote.innerHTML = `<p>${selectedText}</p>`;
                    range.deleteContents();
                    range.insertNode(blockquote);
                } else {
                    blockquote.innerHTML = '<p><br></p>';
                    range.insertNode(blockquote);
                }
                const newRange = document.createRange();
                newRange.selectNodeContents(blockquote);
                newRange.collapse(false);
                selection.removeAllRanges();
                selection.addRange(newRange);
                handleInput();
            } catch (e2) {
                console.error("Fallback quote insertion also failed:", e2);
            }
        }
        updateFormattingState();
    };
    const removeFormat = ()=>{
        if (!editorRef.current) return;
        editorRef.current.focus();
        const selection = window.getSelection();
        if (selection.rangeCount > 0 && selection.toString()) {
            // Remove formatting from selected text
            execCommand("removeFormat");
            execCommand("unlink"); // Also remove links
        } else {
            execCommand("removeFormat");
        }
    };
    const undo = ()=>{
        if (!editorRef.current) return;
        editorRef.current.focus();
        try {
            document.execCommand("undo", false, null);
            handleInput();
        } catch (e) {
            console.error("Undo failed:", e);
        }
    };
    const redo = ()=>{
        if (!editorRef.current) return;
        editorRef.current.focus();
        try {
            document.execCommand("redo", false, null);
            handleInput();
        } catch (e) {
            console.error("Redo failed:", e);
        }
    };
    const commonColors = [
        "#000000",
        "#333333",
        "#666666",
        "#999999",
        "#CCCCCC",
        "#FFFFFF",
        "#FF0000",
        "#FF6600",
        "#FFCC00",
        "#33CC00",
        "#0066FF",
        "#6600FF",
        "#FF0066",
        "#00CCCC",
        "#FF9900",
        "#99CC00",
        "#0099FF",
        "#9900FF"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: toolbarRef,
                className: "sticky top-0 z-10 flex items-center gap-1 p-2 border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 flex-wrap shadow-sm rounded-t-lg flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>execCommand("bold"),
                        className: `p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition ${isBold ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"}`,
                        title: "Bold (Ctrl+B)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__["Bold"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 973,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 965,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>execCommand("italic"),
                        className: `p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition ${isItalic ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"}`,
                        title: "Italic (Ctrl+I)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__["Italic"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 983,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 975,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>execCommand("underline"),
                        className: `p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition ${isUnderline ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"}`,
                        title: "Underline (Ctrl+U)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$underline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Underline$3e$__["Underline"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 993,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 985,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>execCommand("strikeThrough"),
                        className: `p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition ${isStrikethrough ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"}`,
                        title: "Strikethrough",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$strikethrough$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Strikethrough$3e$__["Strikethrough"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1003,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 995,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1006,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>insertHeading(1),
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Heading 1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__["Heading1"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1015,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1009,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>insertHeading(2),
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Heading 2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading2$3e$__["Heading2"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1023,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1017,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>insertHeading(3),
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Heading 3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading3$3e$__["Heading3"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1031,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1025,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>insertHeading(4),
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Heading 4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading4$3e$__["Heading4"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1039,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1033,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>insertHeading(5),
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Heading 5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading5$3e$__["Heading5"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1047,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1041,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>insertHeading(6),
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Heading 6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading6$3e$__["Heading6"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1055,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1049,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1058,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>execCommand("insertUnorderedList"),
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Bullet List",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1067,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1061,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>execCommand("insertOrderedList"),
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Numbered List",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-bold",
                            children: "1."
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1075,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1069,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1078,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            if (!editorRef.current) return;
                            editorRef.current.focus();
                            const selection = window.getSelection();
                            if (selection.rangeCount > 0) {
                                const range = selection.getRangeAt(0);
                                let node = range.commonAncestorContainer;
                                // Check if an image is selected
                                if (node.nodeName === 'IMG' || node.parentElement && node.parentElement.querySelector('img')) {
                                    alignImage('left');
                                } else {
                                    execCommand("justifyLeft");
                                }
                            }
                        },
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Align Left (Text/Image)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1081,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            if (!editorRef.current) return;
                            editorRef.current.focus();
                            const selection = window.getSelection();
                            if (selection.rangeCount > 0) {
                                const range = selection.getRangeAt(0);
                                let node = range.commonAncestorContainer;
                                // Check if an image is selected
                                if (node.nodeName === 'IMG' || node.parentElement && node.parentElement.querySelector('img')) {
                                    alignImage('center');
                                } else {
                                    execCommand("justifyCenter");
                                }
                            }
                        },
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Align Center (Text/Image)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__["AlignCenter"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1123,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            if (!editorRef.current) return;
                            editorRef.current.focus();
                            const selection = window.getSelection();
                            if (selection.rangeCount > 0) {
                                const range = selection.getRangeAt(0);
                                let node = range.commonAncestorContainer;
                                // Check if an image is selected
                                if (node.nodeName === 'IMG' || node.parentElement && node.parentElement.querySelector('img')) {
                                    alignImage('right');
                                } else {
                                    execCommand("justifyRight");
                                }
                            }
                        },
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Align Right (Text/Image)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__["AlignRight"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1145,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            if (!editorRef.current) return;
                            editorRef.current.focus();
                            execCommand("justifyFull");
                        },
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Justify Text",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$justify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignJustify$3e$__["AlignJustify"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1157,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative color-picker-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setShowColorPicker(!showColorPicker);
                                    setShowFontSizeMenu(false);
                                },
                                className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                                title: "Text Color",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/RichTextEditor.jsx",
                                    lineNumber: 1174,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/RichTextEditor.jsx",
                                lineNumber: 1164,
                                columnNumber: 11
                            }, this),
                            showColorPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl p-2 z-50",
                                onClick: (e)=>e.stopPropagation(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-6 gap-1 mb-2",
                                        children: commonColors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    setTextColor(color);
                                                },
                                                className: "w-6 h-6 rounded border border-gray-300 dark:border-gray-600 hover:scale-110 transition-transform",
                                                style: {
                                                    backgroundColor: color
                                                },
                                                title: color
                                            }, color, false, {
                                                fileName: "[project]/components/RichTextEditor.jsx",
                                                lineNumber: 1183,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/RichTextEditor.jsx",
                                        lineNumber: 1181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "color",
                                        onChange: (e)=>{
                                            e.stopPropagation();
                                            setTextColor(e.target.value);
                                        },
                                        className: "w-full h-8 border border-gray-300 dark:border-gray-600 rounded cursor-pointer",
                                        title: "Custom Color"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RichTextEditor.jsx",
                                        lineNumber: 1196,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RichTextEditor.jsx",
                                lineNumber: 1177,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative font-size-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    setShowFontSizeMenu(!showFontSizeMenu);
                                    setShowColorPicker(false);
                                },
                                className: `px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center gap-1.5 ${showFontSizeMenu ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"}`,
                                title: "Select Text Size",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/components/RichTextEditor.jsx",
                                        lineNumber: 1223,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium",
                                        children: "Size"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RichTextEditor.jsx",
                                        lineNumber: 1224,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RichTextEditor.jsx",
                                lineNumber: 1211,
                                columnNumber: 11
                            }, this),
                            showFontSizeMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl p-2 z-50 min-w-[180px] max-h-[400px] overflow-y-auto",
                                onClick: (e)=>e.stopPropagation(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-semibold text-gray-500 dark:text-gray-400 px-3 py-2 mb-1 border-b border-gray-200 dark:border-gray-700",
                                        children: "Select Text Size"
                                    }, void 0, false, {
                                        fileName: "[project]/components/RichTextEditor.jsx",
                                        lineNumber: 1231,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            {
                                                size: 1,
                                                label: "10px",
                                                desc: "Extra Small"
                                            },
                                            {
                                                size: 2,
                                                label: "12px",
                                                desc: "Small"
                                            },
                                            {
                                                size: 3,
                                                label: "14px",
                                                desc: "Small"
                                            },
                                            {
                                                size: 4,
                                                label: "16px",
                                                desc: "Normal (Default)"
                                            },
                                            {
                                                size: 5,
                                                label: "18px",
                                                desc: "Medium"
                                            },
                                            {
                                                size: 6,
                                                label: "20px",
                                                desc: "Large"
                                            },
                                            {
                                                size: 7,
                                                label: "24px",
                                                desc: "Extra Large"
                                            },
                                            {
                                                size: 8,
                                                label: "28px",
                                                desc: "XX Large"
                                            },
                                            {
                                                size: 9,
                                                label: "32px",
                                                desc: "XXX Large"
                                            },
                                            {
                                                size: 10,
                                                label: "36px",
                                                desc: "Huge"
                                            }
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    setFontSize(item.size);
                                                },
                                                className: "w-full text-left px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded text-sm text-gray-700 dark:text-gray-300 flex items-center justify-between transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RichTextEditor.jsx",
                                                        lineNumber: 1256,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-400 dark:text-gray-500",
                                                        children: item.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/RichTextEditor.jsx",
                                                        lineNumber: 1257,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.size, true, {
                                                fileName: "[project]/components/RichTextEditor.jsx",
                                                lineNumber: 1247,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/RichTextEditor.jsx",
                                        lineNumber: 1234,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RichTextEditor.jsx",
                                lineNumber: 1227,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: insertCode,
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Code Block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1274,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: insertQuote,
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Insert Blockquote",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1282,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: removeQuote,
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Remove Blockquote",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                            size: 16,
                            className: "rotate-180 opacity-60"
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1290,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: insertLink,
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Insert Link",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1302,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: triggerImageUpload,
                        className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition",
                        title: "Upload Image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/RichTextEditor.jsx",
                            lineNumber: 1310,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fileInputRef,
                        type: "file",
                        accept: "image/*",
                        onChange: (e)=>handleImageUpload(e, 'left'),
                        className: "hidden"
                    }, void 0, false, {
                        fileName: "[project]/components/RichTextEditor.jsx",
                        lineNumber: 1312,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RichTextEditor.jsx",
                lineNumber: 960,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: editorRef,
                contentEditable: true,
                onInput: handleInput,
                onKeyDown: (e)=>{
                    // Handle keyboard shortcuts
                    if (e.ctrlKey || e.metaKey) {
                        if (e.key === 'b') {
                            e.preventDefault();
                            execCommand("bold");
                        } else if (e.key === 'i') {
                            e.preventDefault();
                            execCommand("italic");
                        } else if (e.key === 'u') {
                            e.preventDefault();
                            execCommand("underline");
                        } else if (e.key === 'z' && !e.shiftKey) {
                            e.preventDefault();
                            undo();
                        } else if (e.key === 'y' || e.key === 'z' && e.shiftKey) {
                            e.preventDefault();
                            redo();
                        }
                    }
                },
                className: "min-h-[400px] flex-1 overflow-y-auto p-4 text-gray-900 dark:text-white focus:outline-none prose prose-lg max-w-none",
                style: {
                    wordBreak: "break-word"
                },
                "data-placeholder": placeholder,
                suppressContentEditableWarning: true,
                onClick: (e)=>{
                    // Only close if clicking directly on editor, not on toolbar
                    if (e.target === editorRef.current || editorRef.current.contains(e.target)) {
                        setShowColorPicker(false);
                        setShowFontSizeMenu(false);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/RichTextEditor.jsx",
                lineNumber: 1323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        [contenteditable][data-placeholder]:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          pointer-events: none;
        }
        [contenteditable] h1 {
          font-size: 2.5em !important;
          font-weight: 700 !important;
          margin: 0.8em 0 0.5em 0 !important;
          line-height: 1.2 !important;
          color: #111827 !important;
          display: block !important;
        }
        [contenteditable] h2 {
          font-size: 2em !important;
          font-weight: 700 !important;
          margin: 0.8em 0 0.5em 0 !important;
          line-height: 1.3 !important;
          color: #111827 !important;
          display: block !important;
        }
        [contenteditable] h3 {
          font-size: 1.75em !important;
          font-weight: 700 !important;
          margin: 0.8em 0 0.5em 0 !important;
          line-height: 1.4 !important;
          color: #111827 !important;
          display: block !important;
        }
        [contenteditable] h4 {
          font-size: 1.5em !important;
          font-weight: 700 !important;
          margin: 0.8em 0 0.5em 0 !important;
          line-height: 1.4 !important;
          color: #111827 !important;
          display: block !important;
        }
        [contenteditable] h5 {
          font-size: 1.25em !important;
          font-weight: 700 !important;
          margin: 0.8em 0 0.5em 0 !important;
          line-height: 1.5 !important;
          color: #111827 !important;
          display: block !important;
        }
        [contenteditable] h6 {
          font-size: 1.125em !important;
          font-weight: 700 !important;
          margin: 0.8em 0 0.5em 0 !important;
          line-height: 1.5 !important;
          color: #111827 !important;
          display: block !important;
        }
        .dark [contenteditable] h1,
        .dark [contenteditable] h2,
        .dark [contenteditable] h3,
        .dark [contenteditable] h4,
        .dark [contenteditable] h5,
        .dark [contenteditable] h6 {
          color: #f9fafb !important;
        }
        [contenteditable] blockquote,
        [contenteditable] .quote-block {
          position: relative;
          border-left: 4px solid #3b82f6;
          padding: 1.5em 1.5em 1.5em 3em;
          margin: 1.5em 0;
          font-style: italic;
          color: #4b5563;
          background: linear-gradient(to right, #eff6ff 0%, #f0f9ff 100%);
          border-radius: 0.5em;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        [contenteditable] blockquote::before,
        [contenteditable] .quote-block::before {
          content: '"';
          position: absolute;
          left: 0.5em;
          top: 0.3em;
          font-size: 4em;
          line-height: 1;
          color: #3b82f6;
          opacity: 0.3;
          font-family: Georgia, serif;
        }
        [contenteditable] blockquote p,
        [contenteditable] .quote-block p {
          margin: 0;
          padding: 0;
          font-size: 1.1em;
          line-height: 1.6;
        }
        .dark [contenteditable] blockquote,
        .dark [contenteditable] .quote-block {
          background: linear-gradient(to right, #1e3a5f 0%, #1e293b 100%);
          color: #d1d5db;
          border-left-color: #60a5fa;
        }
        .dark [contenteditable] blockquote::before,
        .dark [contenteditable] .quote-block::before {
          color: #60a5fa;
        }
        [contenteditable] pre {
          background: #f3f4f6;
          padding: 1em;
          border-radius: 0.5em;
          overflow-x: auto;
          font-family: 'Courier New', monospace;
          border: 1px solid #e5e7eb;
        }
        [contenteditable] code {
          background: #f3f4f6;
          padding: 0.2em 0.4em;
          border-radius: 0.25em;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
        }
        [contenteditable] ul, [contenteditable] ol {
          margin: 1em 0;
          padding-left: 2em;
        }
        [contenteditable] ul {
          list-style-type: disc;
        }
        [contenteditable] ol {
          list-style-type: decimal;
        }
        [contenteditable] img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5em;
          margin: 0.5em 0;
          display: inline-block;
        }
        [contenteditable] .image-wrapper {
          margin: 1em 0;
          display: block;
          width: 100%;
        }
        [contenteditable] .image-wrapper img {
          margin: 0;
        }
        [contenteditable] .image-wrapper[style*="text-align: left"] {
          text-align: left;
        }
        [contenteditable] .image-wrapper[style*="text-align: center"] {
          text-align: center;
        }
        [contenteditable] .image-wrapper[style*="text-align: right"] {
          text-align: right;
        }
        [contenteditable] a {
          color: #3b82f6;
          text-decoration: underline;
        }
        [contenteditable] a:hover {
          color: #2563eb;
        }
        [contenteditable] p {
          margin: 0.5em 0;
          line-height: 1.6;
        }
        [contenteditable] div[style*="text-align: center"] {
          text-align: center;
        }
        [contenteditable] div[style*="text-align: right"] {
          text-align: right;
        }
        [contenteditable] div[style*="text-align: justify"] {
          text-align: justify;
        }
      `
                }
            }, void 0, false, {
                fileName: "[project]/components/RichTextEditor.jsx",
                lineNumber: 1363,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RichTextEditor.jsx",
        lineNumber: 955,
        columnNumber: 5
    }, this);
}
_s(RichTextEditor, "42bAj3j2NB+QWL3kEzRQIahNyN0=");
_c = RichTextEditor;
var _c;
__turbopack_context__.k.register(_c, "RichTextEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/user/create-post/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreatePost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RichTextEditor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RichTextEditor.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CreatePost() {
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
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
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
        const reader = new FileReader();
        reader.onloadend = ()=>{
            setFormData({
                ...formData,
                [fieldName]: reader.result
            });
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
            const textContent = content.replace(/<[^>]*>/g, "").trim();
            if (!textContent) {
                setError("Please add some content to your post");
                setLoading(false);
                return;
            }
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
                contentBlocks: [
                    {
                        type: "text",
                        content: content
                    }
                ],
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
            if (!response.ok) {
                const errorMessage = data.error || data.message || "Failed to create post";
                const errorDetails = data.details || data.errorName || "";
                setError(`${errorMessage}${errorDetails ? ` (${errorDetails})` : ""}`);
                console.error("Post creation error:", {
                    status: response.status,
                    error: data.error,
                    errorName: data.errorName,
                    details: data.details,
                    fullData: data
                });
                setLoading(false);
                return;
            }
            // Success - redirect
            router.push("/user");
            router.refresh();
        } catch (err) {
            console.error("Post creation exception:", err);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-900 dark:text-white",
                        children: "Create New Post"
                    }, void 0, false, {
                        fileName: "[project]/app/user/create-post/page.jsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 dark:text-gray-400 mt-1",
                        children: "Write and publish your blog post with SEO optimization"
                    }, void 0, false, {
                        fileName: "[project]/app/user/create-post/page.jsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/user/create-post/page.jsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/user/create-post/page.jsx",
                lineNumber: 146,
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
                                className: `flex-1 px-6 py-3 text-sm font-medium transition-colors ${activeTab === "content" ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`,
                                children: "Content"
                            }, void 0, false, {
                                fileName: "[project]/app/user/create-post/page.jsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("seo"),
                                className: `flex-1 px-6 py-3 text-sm font-medium transition-colors ${activeTab === "seo" ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`,
                                children: "SEO Settings"
                            }, void 0, false, {
                                fileName: "[project]/app/user/create-post/page.jsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/user/create-post/page.jsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "p-6 space-y-6",
                        children: [
                            activeTab === "content" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                children: [
                                                    "Post Title ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                        lineNumber: 182,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "title",
                                                value: formData.title,
                                                onChange: handleChange,
                                                className: "w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                placeholder: "Enter post title",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 184,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/user/create-post/page.jsx",
                                        lineNumber: 180,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                children: "Excerpt / Short Description"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "excerpt",
                                                value: formData.excerpt,
                                                onChange: handleChange,
                                                rows: 3,
                                                className: "w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                placeholder: "Brief description of your post"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/user/create-post/page.jsx",
                                        lineNumber: 195,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                children: [
                                                    "Category ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                        lineNumber: 211,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "category",
                                                value: formData.category,
                                                onChange: handleChange,
                                                className: "w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                required: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select a category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                        lineNumber: 220,
                                                        columnNumber: 19
                                                    }, this),
                                                    categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: cat,
                                                            children: cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")
                                                        }, cat, false, {
                                                            fileName: "[project]/app/user/create-post/page.jsx",
                                                            lineNumber: 222,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/user/create-post/page.jsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                children: "Featured Image"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        name: "featuredImage",
                                                        value: formData.featuredImage,
                                                        onChange: handleChange,
                                                        className: "w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "https://example.com/image.jpg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                        lineNumber: 234,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-500 dark:text-gray-400",
                                                                children: "OR"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                                lineNumber: 243,
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
                                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                                        lineNumber: 245,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer text-sm text-center",
                                                                        children: "Upload Image"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                                lineNumber: 244,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                        lineNumber: 242,
                                                        columnNumber: 19
                                                    }, this),
                                                    formData.featuredImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: formData.featuredImage,
                                                        alt: "Preview",
                                                        className: "w-full max-w-md h-48 object-cover rounded-lg border border-gray-200 dark:border-gray-700",
                                                        onError: (e)=>{
                                                            e.target.style.display = "none";
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                        lineNumber: 257,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/user/create-post/page.jsx",
                                        lineNumber: 229,
                                        columnNumber: 9
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
                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                        lineNumber: 271,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 270,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RichTextEditor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                value: content,
                                                onChange: setContent,
                                                placeholder: "Start writing your post... You can format text by selecting it and using the toolbar buttons above."
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 274,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/user/create-post/page.jsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "status",
                                                value: formData.status,
                                                onChange: handleChange,
                                                className: "w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "draft",
                                                        children: "Draft"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                        lineNumber: 291,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "published",
                                                        children: "Published"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                        lineNumber: 292,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 285,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/user/create-post/page.jsx",
                                        lineNumber: 281,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/user/create-post/page.jsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this),
                            activeTab === "seo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-blue-800 dark:text-blue-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Tip:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/user/create-post/page.jsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this),
                                                " SEO fields are optional. If left empty, they will automatically use your post title and excerpt."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/user/create-post/page.jsx",
                                            lineNumber: 301,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/user/create-post/page.jsx",
                                        lineNumber: 300,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                children: "Meta Title"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "metaTitle",
                                                value: formData.metaTitle,
                                                onChange: handleChange,
                                                className: "w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                placeholder: "SEO title for search engines",
                                                maxLength: 60
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 310,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-gray-500 dark:text-gray-400",
                                                children: [
                                                    formData.metaTitle.length,
                                                    "/60 characters"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 319,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/user/create-post/page.jsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                children: "Meta Description"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "metaDescription",
                                                value: formData.metaDescription,
                                                onChange: handleChange,
                                                rows: 3,
                                                className: "w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                placeholder: "SEO description for search engines",
                                                maxLength: 160
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 328,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-gray-500 dark:text-gray-400",
                                                children: [
                                                    formData.metaDescription.length,
                                                    "/160 characters"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 337,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/user/create-post/page.jsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                children: "Meta Keywords"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 343,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "metaKeywords",
                                                value: formData.metaKeywords,
                                                onChange: handleChange,
                                                className: "w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                placeholder: "Comma-separated keywords"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 346,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/user/create-post/page.jsx",
                                        lineNumber: 342,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-gray-200 dark:border-gray-700 pt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-900 dark:text-white mb-4",
                                                children: "Open Graph (Social Media)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                                children: "OG Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                                lineNumber: 363,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                name: "ogTitle",
                                                                value: formData.ogTitle,
                                                                onChange: handleChange,
                                                                className: "w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                                placeholder: "Title for social media sharing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                                lineNumber: 366,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                        lineNumber: 362,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                                children: "OG Description"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                                lineNumber: 377,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                name: "ogDescription",
                                                                value: formData.ogDescription,
                                                                onChange: handleChange,
                                                                rows: 3,
                                                                className: "w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                                placeholder: "Description for social media sharing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                                lineNumber: 380,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                        lineNumber: 376,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                                                children: "OG Image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                                lineNumber: 391,
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
                                                                        className: "w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                                        placeholder: "Image URL for social media"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                                        lineNumber: 395,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-gray-500 dark:text-gray-400",
                                                                                children: "OR"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                                                lineNumber: 404,
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
                                                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                                                        lineNumber: 406,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "inline-block px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer text-sm",
                                                                                        children: "Upload Image"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                                                        lineNumber: 412,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                                                lineNumber: 405,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                                        lineNumber: 403,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    formData.ogImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: formData.ogImage,
                                                                        alt: "OG Preview",
                                                                        className: "w-full max-w-md h-48 object-cover rounded-lg border border-gray-200 dark:border-gray-700",
                                                                        onError: (e)=>{
                                                                            e.target.style.display = "none";
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                                        lineNumber: 418,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                                lineNumber: 394,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/user/create-post/page.jsx",
                                                        lineNumber: 390,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 361,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/user/create-post/page.jsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/user/create-post/page.jsx",
                                lineNumber: 299,
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
                                        fileName: "[project]/app/user/create-post/page.jsx",
                                        lineNumber: 435,
                                        columnNumber: 11
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
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 443,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    const pendingData = {
                                                        ...formData,
                                                        status: "pending"
                                                    };
                                                    handleSubmit(e, pendingData);
                                                },
                                                disabled: loading,
                                                className: "bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed",
                                                children: loading ? "Submitting..." : "Submit for Review"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/create-post/page.jsx",
                                                lineNumber: 455,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/user/create-post/page.jsx",
                                        lineNumber: 442,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/user/create-post/page.jsx",
                                lineNumber: 434,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/user/create-post/page.jsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/user/create-post/page.jsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/user/create-post/page.jsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_s(CreatePost, "uIF1CQlM5K0MWL0jI66FqCgAy90=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CreatePost;
var _c;
__turbopack_context__.k.register(_c, "CreatePost");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_f6b305d6._.js.map