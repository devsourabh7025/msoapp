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

  const sectionTitle = spotlightSettings?.title || "Spotlight";
  const sectionSubtitle = spotlightSettings?.subtitle;

  // Bento: first = large card, rest = small cards (different UI pattern)
  const mainPost = spotlightPosts[0];
  const sidePosts = spotlightPosts.slice(1, 4);

  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950/50 py-14 sm:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.03] via-transparent to-amber-500/[0.04] dark:from-orange-400/[0.04] dark:to-amber-400/[0.05] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex flex-wrap items-baseline gap-3 gap-x-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {sectionTitle}
            </h2>
            {sectionSubtitle && (
              <p className="text-base text-gray-600 dark:text-gray-400 font-medium">
                {sectionSubtitle}
              </p>
            )}
          </div>
          <div className="mt-3 h-px w-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400" />
        </div>

        {spotlightPosts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Bento: one large card (left), three small (right) */}
            {mainPost && (
              <Link
                href={`/post?slug=${mainPost.slug}`}
                className="group block lg:row-span-2"
              >
                <article className="relative h-full min-h-[280px] lg:min-h-[400px] overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-800 border border-gray-700 dark:border-gray-700 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:border-amber-500/30 hover:-translate-y-1">
                  {mainPost.featuredImage ? (
                    <Image
                      src={mainPost.featuredImage}
                      alt={mainPost.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600/80 to-orange-700/80" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-medium bg-white/20 text-white/95 mb-3">
                      {mainPost.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-2 line-clamp-2 group-hover:text-amber-200 transition-colors">
                      {mainPost.title}
                    </h3>
                    {mainPost.excerpt && (
                      <p className="text-sm text-white/80 line-clamp-2 mb-3">{mainPost.excerpt}</p>
                    )}
                    <span className="text-sm text-white/70">{getAuthorName(mainPost.author)}</span>
                  </div>
                </article>
              </Link>
            )}
            {sidePosts.map((post, index) => (
              <Link
                key={post._id || post.id || index}
                href={`/post?slug=${post.slug}`}
                className="group flex gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/60 dark:border-white/10 shadow-sm hover:shadow-lg hover:border-amber-500/20 dark:hover:border-amber-400/20 transition-all duration-300"
              >
                <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-400/40 to-orange-500/40" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mt-0.5 line-clamp-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400 truncate block">
                    {getAuthorName(post.author)}
                  </span>
                </div>
                <ArrowRight size={16} className="shrink-0 text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity self-center" />
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/60 dark:border-white/10 py-14 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">No spotlight posts selected</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Choose posts in the admin panel to show here</p>
          </div>
        )}
      </div>
    </section>
  );
}
