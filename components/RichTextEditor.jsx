"use client";

import { useRef, useState, useEffect } from "react";
import { 
  Bold, 
  Italic, 
  Underline, 
  Heading1, 
  Heading2, 
  Heading3, 
  Heading4,
  Heading5,
  Heading6,
  List, 
  Upload,
  Link as LinkIcon,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Code,
  Quote,
  Palette,
  Type
} from "lucide-react";

export default function RichTextEditor({ value, onChange, placeholder = "Start writing your post..." }) {
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);
  const toolbarRef = useRef(null);
  const containerRef = useRef(null);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showFontSizeMenu, setShowFontSizeMenu] = useState(false);
  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value || "";
    }
  }, [value]);

  // Set container max height based on viewport
  useEffect(() => {
    const updateContainerHeight = () => {
      if (containerRef.current) {
        // Find navbar/header element
        const navbar = document.querySelector('nav, header, [role="navigation"]');
        const headerHeight = navbar ? navbar.offsetHeight : 0;
        
        // Calculate available height: viewport - header - page padding (200px for margins/padding)
        const availableHeight = window.innerHeight - headerHeight - 200;
        containerRef.current.style.maxHeight = `${Math.max(500, availableHeight)}px`;
      }
    };

    // Initial calculation
    updateContainerHeight();
    
    // Update on resize
    window.addEventListener('resize', updateContainerHeight);
    
    // Also update after a short delay to account for dynamic header loading
    const timeoutId = setTimeout(updateContainerHeight, 100);
    
    return () => {
      window.removeEventListener('resize', updateContainerHeight);
      clearTimeout(timeoutId);
    };
  }, []);

  const updateFormattingState = () => {
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

  const handleInput = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      onChange(html);
      updateFormattingState();
    }
  };

  const handleSelectionChange = () => {
    updateFormattingState();
  };

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelectionChange);
    // Close dropdowns when clicking outside
    const handleClickOutside = (e) => {
      if (showColorPicker && !e.target.closest('.color-picker-container')) {
        setShowColorPicker(false);
      }
      if (showFontSizeMenu && !e.target.closest('.font-size-container')) {
        setShowFontSizeMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showColorPicker, showFontSizeMenu]);


  const execCommand = (command, value = null) => {
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
            while (blockElement && blockElement !== editorRef.current && 
                   !['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'DIV', 'BLOCKQUOTE', 'PRE'].includes(blockElement.tagName)) {
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

  const insertHeading = (level) => {
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
      if (blockElement.nodeType === 3) { // Text node
        blockElement = blockElement.parentElement;
      }
      
      // Walk up to find block-level element
      while (blockElement && blockElement !== editorRef.current) {
        const tagName = blockElement.tagName;
        if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'DIV', 'BLOCKQUOTE', 'PRE', 'LI'].includes(tagName)) {
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
      } else if (blockElement && blockElement !== editorRef.current && 
                 ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'DIV'].includes(blockElement.tagName)) {
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

  const insertImage = (alignment = 'left') => {
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
        setTimeout(() => {
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

  const alignImage = (alignment) => {
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
      while (current && current !== editorRef.current) {
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

  const handleImageUpload = (e, alignment = 'left') => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check if it's an image
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }
    
    // Create a FileReader to convert image to data URL
    const reader = new FileReader();
    reader.onloadend = () => {
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
    
    reader.onerror = () => {
      alert('Error reading image file');
    };
    
    reader.readAsDataURL(file);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current?.click();
  };

  const insertLink = () => {
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

  const setTextColor = (color) => {
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

  const setFontSize = (size) => {
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

  const insertCode = () => {
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

  const removeQuote = () => {
    if (!editorRef.current) return;
    
    try {
      editorRef.current.focus();
      const selection = window.getSelection();
      
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let blockquote = null;
        
        // Check if selection is inside a blockquote
        let node = range.commonAncestorContainer;
        while (node && node !== editorRef.current) {
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
      blockquotes.forEach((bq) => {
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

  const insertQuote = () => {
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
      while (blockElement && blockElement !== editorRef.current) {
        const tagName = blockElement.tagName;
        if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'DIV', 'BLOCKQUOTE', 'PRE', 'LI'].includes(tagName)) {
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
      } else if (blockElement && blockElement !== editorRef.current && 
                 ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'DIV'].includes(blockElement.tagName)) {
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

  const removeFormat = () => {
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

  const undo = () => {
    if (!editorRef.current) return;
    editorRef.current.focus();
    try {
      document.execCommand("undo", false, null);
      handleInput();
    } catch (e) {
      console.error("Undo failed:", e);
    }
  };

  const redo = () => {
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
    "#000000", "#333333", "#666666", "#999999", "#CCCCCC", "#FFFFFF",
    "#FF0000", "#FF6600", "#FFCC00", "#33CC00", "#0066FF", "#6600FF",
    "#FF0066", "#00CCCC", "#FF9900", "#99CC00", "#0099FF", "#9900FF"
  ];

  return (
    <div 
      ref={containerRef}
      className="border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 flex flex-col overflow-hidden"
    >
      {/* Toolbar - Sticky within container, below header */}
      <div 
        ref={toolbarRef}
        className="sticky top-0 z-10 flex items-center gap-1 p-2 border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 flex-wrap shadow-sm rounded-t-lg flex-shrink-0"
      >
        {/* Text Formatting */}
        <button
          type="button"
          onClick={() => execCommand("bold")}
          className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition ${
            isBold ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
          }`}
          title="Bold (Ctrl+B)"
        >
          <Bold size={16} />
        </button>
        <button
          type="button"
          onClick={() => execCommand("italic")}
          className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition ${
            isItalic ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
          }`}
          title="Italic (Ctrl+I)"
        >
          <Italic size={16} />
        </button>
        <button
          type="button"
          onClick={() => execCommand("underline")}
          className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition ${
            isUnderline ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
          }`}
          title="Underline (Ctrl+U)"
        >
          <Underline size={16} />
        </button>
        <button
          type="button"
          onClick={() => execCommand("strikeThrough")}
          className={`p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition ${
            isStrikethrough ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
          }`}
          title="Strikethrough"
        >
          <Strikethrough size={16} />
        </button>
        
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />
        
        {/* Headings H1-H6 */}
        <button
          type="button"
          onClick={() => insertHeading(1)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Heading 1"
        >
          <Heading1 size={16} />
        </button>
        <button
          type="button"
          onClick={() => insertHeading(2)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Heading 2"
        >
          <Heading2 size={16} />
        </button>
        <button
          type="button"
          onClick={() => insertHeading(3)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Heading 3"
        >
          <Heading3 size={16} />
        </button>
        <button
          type="button"
          onClick={() => insertHeading(4)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Heading 4"
        >
          <Heading4 size={16} />
        </button>
        <button
          type="button"
          onClick={() => insertHeading(5)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Heading 5"
        >
          <Heading5 size={16} />
        </button>
        <button
          type="button"
          onClick={() => insertHeading(6)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Heading 6"
        >
          <Heading6 size={16} />
        </button>
        
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />
        
        {/* Lists */}
        <button
          type="button"
          onClick={() => execCommand("insertUnorderedList")}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Bullet List"
        >
          <List size={16} />
        </button>
        <button
          type="button"
          onClick={() => execCommand("insertOrderedList")}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Numbered List"
        >
          <span className="text-xs font-bold">1.</span>
        </button>
        
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />
        
        {/* Alignment - Works for both text and images */}
        <button
          type="button"
          onClick={() => {
            if (!editorRef.current) return;
            editorRef.current.focus();
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
              const range = selection.getRangeAt(0);
              let node = range.commonAncestorContainer;
              // Check if an image is selected
              if (node.nodeName === 'IMG' || (node.parentElement && node.parentElement.querySelector('img'))) {
                alignImage('left');
              } else {
                execCommand("justifyLeft");
              }
            }
          }}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Align Left (Text/Image)"
        >
          <AlignLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => {
            if (!editorRef.current) return;
            editorRef.current.focus();
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
              const range = selection.getRangeAt(0);
              let node = range.commonAncestorContainer;
              // Check if an image is selected
              if (node.nodeName === 'IMG' || (node.parentElement && node.parentElement.querySelector('img'))) {
                alignImage('center');
              } else {
                execCommand("justifyCenter");
              }
            }
          }}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Align Center (Text/Image)"
        >
          <AlignCenter size={16} />
        </button>
        <button
          type="button"
          onClick={() => {
            if (!editorRef.current) return;
            editorRef.current.focus();
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
              const range = selection.getRangeAt(0);
              let node = range.commonAncestorContainer;
              // Check if an image is selected
              if (node.nodeName === 'IMG' || (node.parentElement && node.parentElement.querySelector('img'))) {
                alignImage('right');
              } else {
                execCommand("justifyRight");
              }
            }
          }}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Align Right (Text/Image)"
        >
          <AlignRight size={16} />
        </button>
        <button
          type="button"
          onClick={() => {
            if (!editorRef.current) return;
            editorRef.current.focus();
            execCommand("justifyFull");
          }}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Justify Text"
        >
          <AlignJustify size={16} />
        </button>
        
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />
        
        {/* Text Color */}
        <div className="relative color-picker-container">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowColorPicker(!showColorPicker);
              setShowFontSizeMenu(false);
            }}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
            title="Text Color"
          >
            <Palette size={16} />
          </button>
          {showColorPicker && (
            <div 
              className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl p-2 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-6 gap-1 mb-2">
                {commonColors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setTextColor(color);
                    }}
                    className="w-6 h-6 rounded border border-gray-300 dark:border-gray-600 hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              <input
                type="color"
                onChange={(e) => {
                  e.stopPropagation();
                  setTextColor(e.target.value);
                }}
                className="w-full h-8 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                title="Custom Color"
              />
            </div>
          )}
        </div>
        
        {/* Font Size - Normal Text */}
        <div className="relative font-size-container">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowFontSizeMenu(!showFontSizeMenu);
              setShowColorPicker(false);
            }}
            className={`px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center gap-1.5 ${
              showFontSizeMenu ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
            }`}
            title="Select Text Size"
          >
            <Type size={16} />
            <span className="text-xs font-medium">Size</span>
          </button>
          {showFontSizeMenu && (
            <div 
              className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl p-2 z-50 min-w-[180px] max-h-[400px] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-3 py-2 mb-1 border-b border-gray-200 dark:border-gray-700">
                Select Text Size
              </div>
              <div className="space-y-1">
                {[
                  { size: 1, label: "10px", desc: "Extra Small" },
                  { size: 2, label: "12px", desc: "Small" },
                  { size: 3, label: "14px", desc: "Small" },
                  { size: 4, label: "16px", desc: "Normal (Default)" },
                  { size: 5, label: "18px", desc: "Medium" },
                  { size: 6, label: "20px", desc: "Large" },
                  { size: 7, label: "24px", desc: "Extra Large" },
                  { size: 8, label: "28px", desc: "XX Large" },
                  { size: 9, label: "32px", desc: "XXX Large" },
                  { size: 10, label: "36px", desc: "Huge" }
                ].map((item) => (
                  <button
                    key={item.size}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFontSize(item.size);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded text-sm text-gray-700 dark:text-gray-300 flex items-center justify-between transition-colors"
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />
        
        {/* Code & Quote */}
        <button
          type="button"
          onClick={insertCode}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Code Block"
        >
          <Code size={16} />
        </button>
        <button
          type="button"
          onClick={insertQuote}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Insert Blockquote"
        >
          <Quote size={16} />
        </button>
        <button
          type="button"
          onClick={removeQuote}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Remove Blockquote"
        >
          <Quote size={16} className="rotate-180 opacity-60" />
        </button>
        
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />
        
        {/* Links & Images */}
        <button
          type="button"
          onClick={insertLink}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Insert Link"
        >
          <LinkIcon size={16} />
        </button>
        <button
          type="button"
          onClick={triggerImageUpload}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition"
          title="Upload Image"
        >
          <Upload size={16} />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e, 'left')}
          className="hidden"
        />
        
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onKeyDown={(e) => {
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
            } else if ((e.key === 'y') || (e.key === 'z' && e.shiftKey)) {
              e.preventDefault();
              redo();
            }
          }
        }}
        className="min-h-[400px] flex-1 overflow-y-auto p-4 text-gray-900 dark:text-white focus:outline-none prose prose-lg max-w-none"
        style={{
          wordBreak: "break-word",
        }}
        data-placeholder={placeholder}
        suppressContentEditableWarning
        onClick={(e) => {
          // Only close if clicking directly on editor, not on toolbar
          if (e.target === editorRef.current || editorRef.current.contains(e.target)) {
            setShowColorPicker(false);
            setShowFontSizeMenu(false);
          }
        }}
      />
      
      <style dangerouslySetInnerHTML={{__html: `
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
      `}} />
    </div>
  );
}
