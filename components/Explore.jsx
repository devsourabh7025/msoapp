"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

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
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Big Heading */}
        <div className="mb-20">
          <h2 className="text-7xl md:text-8xl font-black tracking-tight leading-none">
            Explore
          </h2>
          <div className="h-px bg-black w-32 mt-6" />
          <p className="mt-6 text-lg max-w-2xl text-gray-600">
            Discover stories across industries shaping Maharashtra’s startup
            ecosystem.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-8 bg-gray-200 animate-pulse" />
            ))}
          </div>
        ) : categories.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-14">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/explore/${getCategorySlug(category.name)}`}
                className="group relative"
              >
                {/* Category Name */}
                <h3 className="text-2xl font-bold tracking-tight transition-transform duration-200 group-hover:translate-x-1">
                  {category.name}
                </h3>

                {/* Count */}
                <p className="text-sm text-gray-500 mt-1">
                  {category.count || 0} posts
                </p>

                {/* Animated underline */}
                <div className="absolute left-0 -bottom-2 h-px bg-black w-0 group-hover:w-10 transition-all duration-300" />
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm">No categories available</p>
        )}
      </div>
    </section>
  );
}
