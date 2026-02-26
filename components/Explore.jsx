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
    <section className="home-section">
      <div className="home-container">
        <h2 className="home-section-title-lg">Explore</h2>
        <div className="home-section-accent" />
        <p className="home-section-subtitle">Discover stories across industries</p>
          {/* <p className="mt-6 text-lg max-w-2xl text-gray-600 dark:text-gray-300">
            Discover stories across industries shaping Maharashtra’s startup
            ecosystem.
          </p> */}

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-5 bg-gray-200 dark:bg-gray-800 animate-pulse" />
            ))}
          </div>
        ) : categories.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-6 gap-y-3">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/explore/${getCategorySlug(category.name)}`}
                className="group py-1 text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400"
              >
                <span className="home-card-title">{category.name}</span>
                <span className="home-meta ml-1">({category.count || 0})</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-400">No categories available</p>
        )}
      </div>
    </section>
  );
}
