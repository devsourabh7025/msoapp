"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function TrendingNow() {
  const [trendingContent, setTrendingContent] = useState([]);
  const [trendingSettings, setTrendingSettings] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;

    const loadTrendingContent = async () => {
      try {
        const response = await axios.get("/api/settings/trending", {
          cache: "no-store",
        });

        if (!isMounted) return;

        setTrendingContent(response.data?.trending || []);

        if (response.data?.settings) {
          setTrendingSettings(response.data.settings);
        }
      } catch (error) {
        if (isMounted) setTrendingContent([]);
      }
    };

    loadTrendingContent();
    return () => (isMounted = false);
  }, [pathname]);

  const trendingArticles = useMemo(() => {
    if (!Array.isArray(trendingContent)) return [];

    return trendingContent.slice(0, 6).map((post) => ({
      ...post,
      slug: post.slug || (post._id ? `post-${post._id}` : `post-${post.id}`),
      featuredImage: post.featuredImage || "/demo.png",
      category: post.category || "General",
    }));
  }, [trendingContent]);

  if (trendingSettings?.showSection === false) return null;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Big Editorial Title */}
        <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          {trendingSettings?.title || "Trending"}
        </h2>
        <div className="h-px bg-black w-24 mb-16" />

        {trendingArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {trendingArticles.map((article, index) => (
              <Link
                key={article._id || index}
                href={`/post?slug=${article.slug}`}
                className="group  p-5"
              >
                {/* Ranking Number */}
                <div className="text-red-600 font-bold text-2xl mb-4">
                  {index + 1}
                </div>

                {/* Image */}
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Category */}
                <p className="text-xs uppercase tracking-wide mb-2">
                  {article.category}
                </p>

                {/* Title */}
                <h3 className="text-base font-bold leading-snug">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm">No trending posts selected</p>
        )}
      </div>
    </section>
  );
}
