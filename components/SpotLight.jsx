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

  const getCategoryName = (cat) => {
    if (!cat) return null;
    if (typeof cat === "object" && cat?.name) return cat.name;
    if (typeof cat === "string") return cat;
    return null;
  };

  if (spotlightSettings?.showSection === false) {
    return null;
  }

  const lead = spotlightPosts[0];
  const rest = spotlightPosts.slice(1, 4);

  return (
    <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/5">
      <div className="home-container py-10">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-8 h-[3px] bg-orange-600" />
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white">
            Spotlight
          </h2>
          <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
        </div>

        {spotlightPosts.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Lead spotlight story */}
            {lead && (
              <div className="col-span-1 lg:col-span-6 lg:pr-6 lg:border-r border-gray-200 dark:border-white/10">
                <Link href={`/post?slug=${lead.slug}`} className="group block">
                  <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={lead.featuredImage}
                      alt={lead.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {getCategoryName(lead.category) && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-orange-600 text-white text-[10px] font-bold tracking-wider uppercase">
                        {getCategoryName(lead.category)}
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl sm:text-2xl font-extrabold leading-tight text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {lead.title}
                    </h3>
                    {lead.excerpt && (
                      <p className="mt-2 text-[14px] leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-2">
                        {lead.excerpt}
                      </p>
                    )}
                    <p className="mt-2 text-[11px] tracking-wide uppercase text-gray-500 dark:text-gray-500">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{getAuthorName(lead.author)}</span>
                    </p>
                  </div>
                </Link>
              </div>
            )}

            {/* Remaining stories */}
            {rest.length > 0 && (
              <div className="col-span-1 lg:col-span-6 lg:pl-6 mt-8 lg:mt-0">
                <div className="divide-y divide-gray-100 dark:divide-white/5">
                  {rest.map((post, index) => (
                    <Link
                      key={post._id || post.id || index}
                      href={`/post?slug=${post.slug}`}
                      className="group flex gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <div className="relative w-28 sm:w-36 aspect-[3/2] shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                          sizes="160px"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        {getCategoryName(post.category) && (
                          <span className="text-[10px] font-bold tracking-wider uppercase text-orange-600 dark:text-orange-400">
                            {getCategoryName(post.category)}
                          </span>
                        )}
                        <h4 className="text-sm font-semibold leading-snug text-gray-900 dark:text-white line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mt-0.5">
                          {post.title}
                        </h4>
                        <p className="mt-1.5 text-[11px] text-gray-500 dark:text-gray-500">
                          {getAuthorName(post.author)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">No spotlight posts selected</p>
          </div>
        )}
      </div>
    </section>
  );
}
