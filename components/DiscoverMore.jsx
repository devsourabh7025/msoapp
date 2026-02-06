"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lightbulb } from "lucide-react";
import axios from "axios";

export default function DiscoverMore() {
  const [categoriesWithPosts, setCategoriesWithPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDiscoverPosts = async () => {
      try {
        setLoading(true);
        
        // Fetch all published posts
        const response = await axios.get("/api/public/posts?limit=100");
        const posts = response.data.posts || [];
        
        if (posts.length === 0) {
          setCategoriesWithPosts([]);
          setLoading(false);
          return;
        }
        
        // Group posts by category
        const categoryMap = {};
        posts.forEach((post) => {
          if (post.category) {
            if (!categoryMap[post.category]) {
              categoryMap[post.category] = [];
            }
            categoryMap[post.category].push(post);
          }
        });
        
        // Filter categories that have at least 3 posts
        const validCategories = Object.keys(categoryMap).filter(
          (cat) => categoryMap[cat].length >= 3
        );
        
        // Select exactly 9 random categories (or all if less than 9)
        const selectedCategories = validCategories
          .sort(() => Math.random() - 0.5) // Shuffle
          .slice(0, 9); // Limit to 9 categories
        
        // Build category data with 3 posts each
        const categoriesData = selectedCategories.map((categoryName) => ({
          name: categoryName,
          posts: categoryMap[categoryName]
            .sort(() => Math.random() - 0.5) // Shuffle posts
            .slice(0, 3), // Take only 3 posts
        }));
        
        setCategoriesWithPosts(categoriesData);
      } catch (error) {
        console.error("Error loading discover posts:", error);
        setCategoriesWithPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadDiscoverPosts();
  }, []);

  return (
    <section className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white inline-flex items-center">
            Discover M
            <span className="relative inline-block">
              <span className="relative z-10">o</span>
              <Lightbulb className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 text-yellow-500 dark:text-yellow-400" fill="currentColor" />
            </span>
            re
          </h2>
        </div>

        {/* Categories Grid - 3 rows, 3 columns (9 categories) */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white mx-auto"></div>
            <p className="text-gray-500 dark:text-gray-400 mt-4">Loading posts...</p>
          </div>
        ) : categoriesWithPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriesWithPosts.map((category, index) => (
              <div key={category.name || index} className="space-y-4">
                {/* Category Header */}
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <div className="h-px bg-gray-300 dark:bg-slate-700"></div>
                </div>

                {/* Posts List - Links Only */}
                {category.posts && category.posts.length > 0 ? (
                  <ul className="space-y-3">
                    {category.posts.map((post, postIndex) => (
                      <li key={post._id || post.slug || postIndex}>
                        <Link
                          href={`/post?slug=${post.slug}`}
                          className="block text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-relaxed"
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-gray-400 dark:text-gray-500 italic">No posts available</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No posts available</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Publish some posts to see them here</p>
          </div>
        )}
      </div>
    </section>
  );
}
