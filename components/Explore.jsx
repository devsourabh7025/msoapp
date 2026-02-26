"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { ArrowRight } from "lucide-react";

export default function Explore() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/public/categories");

        if (Array.isArray(response.data?.categories)) {
          setCategories(response.data.categories);
        } else {
          setCategories([]);
        }
      } catch (error) {
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const getCategorySlug = (name) =>
    name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  return (
    <section className="bg-gray-50 dark:bg-gray-950/80 border-b border-gray-100 dark:border-white/5">
      <div className="home-container py-10">
        {/* Section header — matches other sections */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-8 h-[3px] bg-red-600" />
          <h2 className="home-section-heading text-gray-900 dark:text-white">
            Explore
          </h2>
          <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="h-20 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 animate-pulse"
              />
            ))}
          </div>
        ) : categories.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/explore/${getCategorySlug(category.name)}`}
                className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 hover:border-red-600 dark:hover:border-red-500 p-4 transition-all"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-red-600 transition-colors" />
                <p className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug">
                  {category.name}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400 dark:text-gray-500">
                    {category.count || 0} {(category.count || 0) === 1 ? "story" : "stories"}
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-gray-300 dark:text-gray-700 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors"
                  />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border border-gray-200 dark:border-white/10 p-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No categories available yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
