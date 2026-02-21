"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function SpotLight() {
  const [spotlightContent, setSpotlightContent] = useState(null);
  const [spotlightSettings, setSpotlightSettings] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;

    const loadSpotlightContent = async () => {
      try {
        const response = await axios.get("/api/settings/spotlight", {
          cache: "no-store",
        });

        if (!isMounted) return;

        const spotlightData = response.data?.spotlight;
        if (spotlightData && Array.isArray(spotlightData)) {
          setSpotlightContent(spotlightData);
        } else {
          setSpotlightContent([]);
        }

        if (response.data?.settings) {
          setSpotlightSettings(response.data.settings);
        }
      } catch (error) {
        console.error("Error loading spotlight content:", error);
        if (isMounted) setSpotlightContent([]);
      }
    };

    loadSpotlightContent();

    return () => {
      isMounted = false;
    };
  }, [pathname]);

  /* Normalize posts */
  const spotlightPosts = useMemo(() => {
    if (
      spotlightContent &&
      Array.isArray(spotlightContent) &&
      spotlightContent.length > 0
    ) {
      return spotlightContent.map((post) => ({
        ...post,
        slug: post.slug || (post._id ? `post-${post._id}` : `post-${post.id}`),
        featuredImage: post.featuredImage || "/demo.png",
        category: post.category || "Uncategorized",
        author: post.author || { name: "Editorial Team" },
        excerpt: post.excerpt || "",
      }));
    }
    return [];
  }, [spotlightContent]);

  const getAuthorName = (author) => {
    if (!author) return "Editorial Team";
    if (typeof author === "object" && author?.name) {
      return author.name;
    }
    return author;
  };

  if (spotlightSettings?.showSection === false) {
    return null;
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-10">
          {/* Vertical Label */}
          <div className="hidden lg:flex">
            <h2 className="text-[120px] font-extrabold leading-none tracking-tight rotate-180 [writing-mode:vertical-rl]">
              Spotlight
            </h2>
          </div>

          {/* Posts */}
          {spotlightPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {spotlightPosts.slice(0, 4).map((post, index) => (
                <Link
                  key={post._id || post.id || index}
                  href={`/post?slug=${post.slug}`}
                  className="block"
                >
                  {/* Image */}
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                  </div>

                  {/* Category */}
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <span className="w-2 h-2 bg-black inline-block"></span>
                    <span>{post.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold leading-snug mb-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-sm leading-relaxed mb-3 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Author */}
                  <p className="text-sm font-medium">
                    {getAuthorName(post.author)}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-sm">No spotlight posts selected</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
