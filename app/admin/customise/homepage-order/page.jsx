"use client";

import { useState, useEffect } from "react";
import { 
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  GripVertical,
  Save
} from "lucide-react";

export default function HomepageOrder() {
  const [saving, setSaving] = useState(false);
  
  // Default section order (header and footer are always fixed, not in order)
  // Recent section is not included here as it's always shown and not customizable
  const [sectionOrder, setSectionOrder] = useState([
    { id: "hero", name: "Hero", component: "HeroFeatured", enabled: true },
    { id: "spotlight", name: "Spotlight", component: "SpotLight", enabled: true },
    { id: "featured", name: "Featured", component: "Featured", enabled: true },
    { id: "explore", name: "Explore", component: "Explore", enabled: true },
    { id: "trending", name: "Trending Now", component: "TrendingNow", enabled: true },
  ]);

  // Load saved order from database on mount (no localStorage)
  useEffect(() => {
    const loadSectionOrder = async () => {
      try {
        // Load from database via API (no localStorage fallback)
        const response = await fetch("/api/settings/homepage");
        if (response.ok) {
          const data = await response.json();
          if (data.order && Array.isArray(data.order)) {
            const filtered = data.order.filter((s) => 
              s.id !== "discover" && 
              s.id !== "ecosystem" && 
              s.id !== "header" && 
              s.id !== "footer" &&
              s.id !== "recent"
            );
            setSectionOrder(filtered);
            return;
          }
        }
      } catch (error) {
        console.error("Error loading section order from API:", error);
      }
      // Use default order if API fails
    };
    loadSectionOrder();
  }, []);

  // Handle section order changes
  const moveSection = (index, direction) => {
    const newOrder = [...sectionOrder];
    if (direction === "up" && index > 0) {
      [newOrder[index], newOrder[index - 1]] = [newOrder[index - 1], newOrder[index]];
      setSectionOrder(newOrder);
    } else if (direction === "down" && index < newOrder.length - 1) {
      [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
      setSectionOrder(newOrder);
    }
  };

  const toggleSection = (index) => {
    const newOrder = [...sectionOrder];
    newOrder[index].enabled = !newOrder[index].enabled;
    setSectionOrder(newOrder);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      // Save to database only (no localStorage)
      // Section order is saved to MongoDB under key "homepageSectionOrder"
      const response = await fetch("/api/settings/homepage", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order: sectionOrder,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error || errorData.message || "Failed to save homepage order";
        alert(`Error: ${errorMessage}`);
        setSaving(false);
        return;
      }

      const result = await response.json();
      alert(result.message || "Homepage order saved successfully!");
      // Trigger a page refresh to apply changes
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error saving homepage order:", error);
      alert(`Failed to save homepage order: ${error.message || "Network error. Please check your connection and try again."}`);
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Homepage Order</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Reorder and manage homepage sections
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              Use the up/down buttons to reorder sections. Uncheck to hide a section from the homepage.
            </p>
          </div>
          
          <div className="space-y-2 mb-6">
            {sectionOrder.map((section, index) => (
              <div
                key={section.id}
                className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors"
              >
                {/* Drag Handle */}
                <div className="flex-shrink-0 text-gray-400 dark:text-gray-500">
                  <GripVertical size={16} />
                </div>

                {/* Section Info */}
                <div className="flex-1 flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={section.enabled}
                    onChange={() => toggleSection(index)}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {section.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {section.component}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                    #{index + 1}
                  </div>
                </div>

                {/* Move Buttons */}
                <div className="flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={() => moveSection(index, "up")}
                    disabled={index === 0}
                    className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded"
                    title="Move up"
                  >
                    <ArrowUp size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => moveSection(index, "down")}
                    disabled={index === sectionOrder.length - 1}
                    className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded"
                    title="Move down"
                  >
                    <ArrowDown size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 mb-4">
            <p className="text-xs text-blue-700 dark:text-blue-300">
              <strong>Note:</strong> Only enabled sections will be displayed on the homepage. The order shown above is the order they will appear from top to bottom.
            </p>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1.5 text-xs rounded hover:from-red-600 hover:to-red-700 shadow-md shadow-red-500/25 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? (
                <>
                  <div className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-white border-t-transparent"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save size={14} />
                  <span>Save Order</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
