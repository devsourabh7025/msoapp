"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Compass } from "lucide-react";
import axios from "axios";

export default function Explore() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/public/categories");
        
        if (response.data && Array.isArray(response.data.categories)) {
          setCategories(response.data.categories);
        } else {
          console.warn("Categories data format unexpected:", response.data);
          setCategories([]);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        console.error("Error details:", {
          message: error.message,
          name: error.name,
        });
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const getCategorySlug = (categoryName) => {
    return categoryName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  return (
    <section className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-4">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white relative">
              EXPLO
              <span className="relative inline-block mx-1">
                <span className="relative z-10 text-orange-500 dark:text-orange-400">R</span>
                {/* Circular text around R */}
                <span className="absolute -top-6 -left-16 text-[10px] md:text-xs font-normal text-orange-500 dark:text-orange-400 whitespace-nowrap transform -rotate-12">
                  MSO PREDICTS
                </span>
                <span className="absolute -bottom-6 -right-16 text-[10px] md:text-xs font-normal text-orange-500 dark:text-orange-400 whitespace-nowrap transform rotate-12">
                  MSO
                </span>
              </span>
              E
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mt-4 font-medium">
            Discover emerging startups from Maharashtra and explore the innovation ecosystem
          </p>
        </div>

        {/* Categories Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse aspect-square rounded-xl bg-gray-200 dark:bg-slate-700"
              ></div>
            ))}
          </div>
        ) : categories.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/explore/${getCategorySlug(category.name)}`}
                className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-xl transition-all duration-300 aspect-square"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 dark:from-slate-900/95 via-white/80 dark:via-slate-900/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
                  <Compass className="w-8 h-8 md:w-10 md:h-10 text-orange-500 dark:text-orange-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-gray-900 dark:text-white font-bold text-sm md:text-base mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                    {category.name}
                  </h3>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    <span className="font-medium">{category.count || 0}</span>
                    <span className="ml-1">posts</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center border border-gray-200 dark:border-slate-700 mb-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">No categories available</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Categories will appear here once posts are published</p>
          </div>
        )}
      </div>
    </section>
  );
}
