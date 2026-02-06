"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { User, ArrowRight } from "lucide-react";
import axios from "axios";

export default function Featured() {
  const [featuredContent, setFeaturedContent] = useState(null);
  const [featuredSettings, setFeaturedSettings] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;

    const loadFeaturedContent = async () => {
      try {
        // Fetch from dedicated featured API endpoint
        const response = await axios.get("/api/settings/featured", {
          cache: "no-store", // Always fetch fresh data
        });
        if (!isMounted) return;

        // Get featured posts from dedicated endpoint
        const featuredData = response.data?.featured;
        if (featuredData) {
          setFeaturedContent(featuredData);
        } else {
          setFeaturedContent({ smbStories: [], herStories: [], socialStories: [] });
        }

        // Get featured settings
        if (response.data?.settings) {
          setFeaturedSettings(response.data.settings);
        }
      } catch (error) {
        console.error("Error loading featured content from API:", error);
        if (isMounted) {
          setFeaturedContent({ smbStories: [], herStories: [], socialStories: [] });
        }
      }
    };

    loadFeaturedContent();

    return () => {
      isMounted = false;
    };
  }, [pathname]); // Refetch when pathname changes (navigation)

  const getAuthorName = (author) => {
    if (!author) return "Editorial Team";
    if (typeof author === "object" && author?.name) {
      return author.name;
    }
    return author;
  };

  // Load posts from separate subsections
  const { smbStories, herStories, socialStories } = useMemo(() => {
    // Handle both old format (array) and new format (object with subsections)
    let smb = [];
    let her = [];
    let social = [];

    if (featuredContent) {
      if (Array.isArray(featuredContent)) {
        // Old format: single array - distribute automatically for backward compatibility
        const normalizedPosts = featuredContent.map((post) => ({
          ...post,
          slug: post.slug || (post._id ? `post-${post._id}` : `post-${post.id}`),
          featuredImage: post.featuredImage || "/demo.png",
          author: post.author || { name: "Editorial Team" },
          excerpt: post.excerpt || "",
        }));
        smb = normalizedPosts.slice(0, 3);
        her = normalizedPosts.slice(3, 8);
        social = normalizedPosts.slice(8);
      } else if (typeof featuredContent === 'object') {
        // New format: object with subsections
        const normalizePost = (post) => ({
          ...post,
          slug: post.slug || (post._id ? `post-${post._id}` : `post-${post.id}`),
          featuredImage: post.featuredImage || "/demo.png",
          author: post.author || { name: "Editorial Team" },
          excerpt: post.excerpt || "",
        });

        smb = (featuredContent.smbStories || []).map(normalizePost);
        her = (featuredContent.herStories || []).map(normalizePost);
        social = (featuredContent.socialStories || []).map(normalizePost);
      }
    }

    return {
      smbStories: smb,
      herStories: her,
      socialStories: social,
    };
  }, [featuredContent]);

  // Don't render if section is hidden
  if (featuredSettings?.showSection === false) {
    return null;
  }

  return (
    <section className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Header - More Attractive */}
        <div className="flex items-center gap-6 mb-16">
          <div className="flex-shrink-0 relative">
            {/* Enhanced Silhouette of person pulling rope */}
            
          </div>
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-2">
              {featuredSettings?.title || "Featured"}
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-transparent"></div>
          </div>
        </div>

        {/* Three Columns - Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: SMB Story */}
          {featuredSettings?.showSMBStory !== false && (
            <div className="space-y-6">
              <div className="bg-black dark:bg-white px-5 py-4 rounded-t-lg shadow-lg">
                <h3 className="text-white dark:text-black font-bold text-lg uppercase tracking-wider">SMB Story</h3>
              </div>

              {smbStories.length > 0 ? (
              <>
                {/* Main Article - Enhanced Black Box */}
                <Link href={`/post?slug=${smbStories[0].slug}`} className="group block">
                  <div className="bg-black dark:bg-slate-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                    {/* Decorative gradient overlay */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
                    
                    <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2 relative z-10 text-white dark:text-white">
                      {smbStories[0].title}
                    </h4>
                    {smbStories[0].excerpt && (
                      <p className="text-sm text-gray-300 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed relative z-10">
                        {smbStories[0].excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between relative z-10">
                      <div className="text-sm text-gray-400 dark:text-gray-400">
                        {getAuthorName(smbStories[0].author)}
                      </div>
                      <ArrowRight size={16} className="text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>

                {/* Other Articles - Enhanced */}
                {smbStories.slice(1).map((story, index) => (
                  <Link
                    key={story._id || story.id || index}
                    href={`/post?slug=${story.slug}`}
                    className="group block pb-6 border-b border-gray-200 dark:border-slate-700 last:border-0 hover:bg-gray-50 dark:hover:bg-slate-800/50 p-3 rounded-lg transition-colors"
                  >
                    <h4 className="text-base font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {story.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {getAuthorName(story.author)}
                      </div>
                      <ArrowRight size={14} className="text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">No SMB stories selected</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Select posts in the admin panel to display them here</p>
              </div>
              )}
            </div>
          )}

          {/* Column 2: Her Story - Enhanced */}
          {featuredSettings?.showHerStory !== false && (
          <div className="space-y-6">
            <div className="bg-black dark:bg-white px-5 py-4 rounded-t-lg shadow-lg">
              <h3 className="text-white dark:text-black font-bold text-lg uppercase tracking-wider">Her Story</h3>
            </div>

            {herStories.length > 0 ? (
              herStories.map((story, index) => (
                <Link
                  key={story._id || story.id || index}
                  href={`/post?slug=${story.slug}`}
                  className="group flex gap-4 pb-6 border-b border-gray-200 dark:border-slate-700 last:border-0 hover:bg-gray-50 dark:hover:bg-slate-800/50 p-3 rounded-lg transition-all duration-300"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {story.title}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <User size={14} />
                      <span>{getAuthorName(story.author)}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-800 shadow-md group-hover:shadow-lg transition-shadow">
                    {story.featuredImage ? (
                      <Image
                        src={story.featuredImage}
                        alt={story.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-500 dark:from-pink-600 dark:to-pink-700"></div>
                    )}
                  </div>
                </Link>
              ))
            ) : (
              <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">No Her stories selected</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Select posts in the admin panel to display them here</p>
              </div>
              )}
            </div>
          )}

          {/* Column 3: Social Story - Enhanced */}
          {featuredSettings?.showSocialStory !== false && (
          <div className="space-y-6">
            <div className="bg-black dark:bg-white px-5 py-4 rounded-t-lg shadow-lg">
              <h3 className="text-white dark:text-black font-bold text-lg uppercase tracking-wider">Social Story</h3>
            </div>

            {socialStories.length > 0 ? (
              <>
                {/* Main Article with Large Image - Enhanced */}
                <Link href={`/post?slug=${socialStories[0].slug}`} className="group block">
                  <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-slate-800 rounded-lg shadow-lg mb-3 group-hover:shadow-xl transition-shadow">
                    {socialStories[0].featuredImage ? (
                      <Image
                        src={socialStories[0].featuredImage}
                        alt={socialStories[0].title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-500 dark:from-green-600 dark:to-green-700"></div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-red-600 dark:bg-red-500 text-white font-bold rounded-full text-sm shadow-lg">
                        1
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-5">
                      <h4 className="text-white font-bold text-lg line-clamp-2 group-hover:text-blue-300 transition-colors">
                        {socialStories[0].title}
                      </h4>
                    </div>
                  </div>
                </Link>

                {/* Other Articles with Numbers - Enhanced */}
                {socialStories.slice(1).map((story, index) => (
                  <Link
                    key={story._id || story.id || index}
                    href={`/post?slug=${story.slug}`}
                    className="group flex gap-3 pb-6 border-b border-gray-200 dark:border-slate-700 last:border-0 hover:bg-gray-50 dark:hover:bg-slate-800/50 p-3 rounded-lg transition-all duration-300"
                  >
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 bg-red-600 dark:bg-red-500 text-white font-bold rounded-full text-xs shadow-md group-hover:scale-110 transition-transform">
                      {index + 2}
                    </span>
                    <h4 className="text-base font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 flex-1">
                      {story.title}
                    </h4>
                    <ArrowRight size={14} className="text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </Link>
                ))}
              </>
            ) : (
              <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">No Social stories selected</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Select posts in the admin panel to display them here</p>
              </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
