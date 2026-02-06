"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { User, ArrowRight } from "lucide-react";
import axios from "axios";

export default function SpotLight() {
  const [spotlightContent, setSpotlightContent] = useState(null);
  const [spotlightSettings, setSpotlightSettings] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;

    const loadSpotlightContent = async () => {
      try {
        // Fetch from dedicated spotlight API endpoint
        const response = await axios.get("/api/settings/spotlight", {
          cache: "no-store", // Always fetch fresh data
        });
        if (!isMounted) return;

        // Get spotlight posts from dedicated endpoint
        const spotlightData = response.data?.spotlight;
        if (spotlightData && Array.isArray(spotlightData)) {
          setSpotlightContent(spotlightData);
        } else {
          setSpotlightContent([]);
        }

        // Get spotlight settings
        if (response.data?.settings) {
          setSpotlightSettings(response.data.settings);
        }
      } catch (error) {
        console.error("Error loading spotlight content from API:", error);
        if (isMounted) {
          setSpotlightContent([]);
        }
      }
    };

    loadSpotlightContent();

    return () => {
      isMounted = false;
    };
  }, [pathname]); // Refetch when pathname changes (navigation)

  // Use admin-selected posts from database only
  const spotlightPosts = useMemo(() => {
    if (spotlightContent && Array.isArray(spotlightContent) && spotlightContent.length > 0) {
      // Ensure all posts have required fields
      return spotlightContent.map((post) => ({
        ...post,
        slug: post.slug || (post._id ? `post-${post._id}` : `post-${post.id}`),
        featuredImage: post.featuredImage || "/demo.png",
        category: post.category || "Uncategorized",
        author: post.author || { name: "Editorial Team" },
        excerpt: post.excerpt || "",
      }));
    }
    return []; // Return empty array if no posts selected
  }, [spotlightContent]);

  const getAuthorName = (author) => {
    if (!author) return "Editorial Team";
    if (typeof author === "object" && author?.name) {
      return author.name;
    }
    return author;
  };

  // Don't render if section is hidden
  if (spotlightSettings?.showSection === false) {
    return null;
  }

  return (
    <section className="relative bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 py-16 overflow-hidden">
      {/* Curved Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top curved line */}
        <svg className="absolute top-0 left-0 w-full h-32 text-blue-200 dark:text-blue-900/30" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,0 L0,0 Z"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
        
        {/* Bottom curved line */}
        <svg className="absolute bottom-0 left-0 w-full h-32 text-blue-200 dark:text-blue-900/30" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>

        {/* Side curved accent */}
        <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-full text-blue-200 dark:text-blue-900/20" viewBox="0 0 256 800" preserveAspectRatio="none">
          <path
            d="M0,400 Q128,200 256,400 T256,800 L0,800 Z"
            fill="currentColor"
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Attractive Horizontal Header */}
        <div className="mb-12">
          <div className="flex items-center gap-6 mb-6">
            {/* Decorative curved line before title */}
            <svg className="hidden md:block w-24 h-1 text-blue-300 dark:text-blue-800" viewBox="0 0 96 4">
              <path
                d="M0,2 Q48,0 96,2"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            
            <div className="relative inline-flex items-center gap-3">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white">
                {spotlightSettings?.title || "Spot"}
                {spotlightSettings?.title ? "" : (
                  <span className="relative inline-block">
                    Light
                    <span className="absolute -top-1 -right-6 w-3 h-3 bg-red-600 dark:bg-red-500 rounded-full"></span>
                  </span>
                )}
              </h2>
              
              {/* Decorative curved accent */}
              <svg className="absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-16 text-blue-300 dark:text-blue-800" viewBox="0 0 64 64">
                <path
                  d="M16,32 Q32,16 48,32"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            </div>

            {/* Decorative curved line after title */}
            <div className="flex-1 relative">
              <svg className="w-full h-1 text-blue-300 dark:text-blue-800" viewBox="0 0 400 4">
                <path
                  d="M0,2 Q200,0 400,2"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>
          
          {/* Subtitle with curved underline */}
          {spotlightSettings?.subtitle && (
            <div className="flex items-center gap-4">
              <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
                {spotlightSettings.subtitle}
              </p>
              <svg className="flex-1 h-px text-blue-200 dark:text-blue-900/50" viewBox="0 0 200 1">
                <path
                  d="M0,0.5 Q100,0.5 200,0.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Article Cards Grid */}
        {spotlightPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spotlightPosts.map((post, index) => (
              <Link
                key={post._id || post.id || index}
                href={`/post?slug=${post.slug}`}
                className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Decorative curved line on card */}
                <svg className="absolute top-0 right-0 w-32 h-32 text-blue-100 dark:text-blue-900/50" viewBox="0 0 128 128">
                  <path
                    d="M0,64 Q32,32 64,64 T128,64 L128,0 L0,0 Z"
                    fill="currentColor"
                    opacity="0.4"
                  />
                </svg>

                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-slate-700">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">No Image</span>
                    </div>
                  )}
                  
                  {/* Curved overlay on image */}
                  <svg className="absolute bottom-0 left-0 w-full h-16 text-white dark:text-slate-900" viewBox="0 0 400 64" preserveAspectRatio="none">
                    <path
                      d="M0,64 Q200,32 400,64 L400,64 L0,64 Z"
                      fill="currentColor"
                      opacity="0.1"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="p-5 relative">
                  {/* Category with curved accent */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 bg-black dark:bg-white rounded-sm"></span>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-black dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Author with arrow */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <User size={14} className="text-gray-500 dark:text-gray-400" />
                      <span className="font-medium">{getAuthorName(post.author)}</span>
                    </div>
                    <ArrowRight size={16} className="text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Bottom curved accent line */}
                  <svg className="absolute bottom-0 left-0 w-full h-1 text-blue-200 dark:text-blue-800" viewBox="0 0 300 4" preserveAspectRatio="none">
                    <path
                      d="M0,2 Q150,0 300,2"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No spotlight posts selected</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Select posts in the admin panel to display them here</p>
          </div>
        )}
      </div>
    </section>
  );
}
