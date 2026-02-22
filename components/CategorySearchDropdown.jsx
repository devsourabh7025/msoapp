"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, X } from "lucide-react";

export default function CategorySearchDropdown({ value, onChange, required, className = "" }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");
  const containerRef = useRef(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/categories", { credentials: "include" });
      if (response.ok) {
        const data = await response.json();
        setCategories(data.categories || []);
      } else {
        setCategories([]);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredCategories = categories.filter((cat) => {
    const name = (cat.name || "").toLowerCase();
    const q = search.trim().toLowerCase();
    return !q || name.includes(q);
  });

  const displayName = (name) =>
    name ? name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, " ") : "";

  const handleSelect = (cat) => {
    onChange(cat.name);
    setInputValue(cat.name);
    setSearch("");
    setOpen(false);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange("");
    setInputValue("");
    setSearch("");
    setOpen(false);
  };

  const handleInputFocus = () => {
    setOpen(true);
    setSearch(inputValue);
  };

  const handleInputChange = (e) => {
    const v = e.target.value;
    setInputValue(v);
    setSearch(v);
    setOpen(true);
    // Allow typing custom category - update parent if it matches an existing one
    const match = categories.find((c) => c.name.toLowerCase() === v.toLowerCase());
    onChange(match ? match.name : v);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={open ? search : inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder="Type to search or select category..."
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-3 py-1.5 pr-16 text-sm focus:outline-none focus:ring-1 focus:ring-black"
          required={required}
          autoComplete="off"
        />
        <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
          {value && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              title="Clear"
            >
              <X size={14} />
            </button>
          )}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <ChevronDown
              size={16}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute z-50 mt-1 w-full max-h-48 overflow-y-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-lg">
          {loading ? (
            <div className="px-3 py-4 text-center text-sm text-gray-500">Loading...</div>
          ) : filteredCategories.length === 0 ? (
            <div className="px-3 py-4 text-sm text-gray-500">
              {search.trim() ? (
                <>No match for "{search}". Type to add as new category.</>
              ) : (
                <>No categories. Create in Admin → Categories.</>
              )}
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <button
                key={cat._id}
                type="button"
                onClick={() => handleSelect(cat)}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  value === cat.name ? "bg-gray-100 dark:bg-gray-700 font-medium" : ""
                }`}
              >
                {displayName(cat.name)}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
