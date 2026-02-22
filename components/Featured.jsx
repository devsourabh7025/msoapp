"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function Featured() {
  const [featuredContent, setFeaturedContent] = useState(null);
  const [featuredSettings, setFeaturedSettings] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;

    const loadFeaturedContent = async () => {
      try {
        const response = await axios.get("/api/settings/featured", {
          cache: "no-store",
        });

        if (!isMounted) return;

        setFeaturedContent(
          response.data?.featured || {
            smbStories: [],
            herStories: [],
            socialStories: [],
          },
        );

        if (response.data?.settings) {
          setFeaturedSettings(response.data.settings);
        }
      } catch (error) {
        if (isMounted) {
          setFeaturedContent({
            smbStories: [],
            herStories: [],
            socialStories: [],
          });
        }
      }
    };

    loadFeaturedContent();
    return () => (isMounted = false);
  }, [pathname]);

  const getAuthorName = (author) => {
    if (!author) return "Editorial Team";
    if (typeof author === "object" && author?.name) return author.name;
    return author;
  };

  const { smbStories, herStories, socialStories } = useMemo(() => {
    const normalize = (post) => ({
      ...post,
      slug: post.slug || (post._id ? `post-${post._id}` : `post-${post.id}`),
      featuredImage: post.featuredImage || "/demo.png",
      author: post.author || { name: "Editorial Team" },
      excerpt: post.excerpt || "",
    });

    return {
      smbStories: (featuredContent?.smbStories || []).map(normalize),
      herStories: (featuredContent?.herStories || []).map(normalize),
      socialStories: (featuredContent?.socialStories || []).map(normalize),
    };
  }, [featuredContent]);

  if (featuredSettings?.showSection === false) return null;

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-5xl font-extrabold mb-16">
          {featuredSettings?.title || "Featured"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* ===== SMB STORY ===== */}
          <div>
            <span className="inline-block bg-black text-white text-xs px-4 py-1 mb-6">
              SMB Story
            </span>

            {smbStories.length > 0 && (
              <>
                {/* Main Black Card */}
                <Link
                  href={`/post?slug=${smbStories[0].slug}`}
                  className="block bg-black text-white p-6 mb-6"
                >
                  <h3 className="text-lg font-bold mb-3">
                    {smbStories[0].title}
                  </h3>

                  {smbStories[0].excerpt && (
                    <p className="text-sm mb-4 line-clamp-3">
                      {smbStories[0].excerpt}
                    </p>
                  )}

                  <p className="text-sm font-medium">
                    {getAuthorName(smbStories[0].author)}
                  </p>
                </Link>

                {/* Secondary Stories */}
                {smbStories.slice(1).map((story, i) => (
                  <Link
                    key={i}
                    href={`/post?slug=${story.slug}`}
                    className="block border p-4 mb-4"
                  >
                    <h4 className="text-sm font-medium">{story.title}</h4>
                    <p className="text-xs mt-2">
                      {getAuthorName(story.author)}
                    </p>
                  </Link>
                ))}
              </>
            )}
          </div>

          {/* ===== HER STORY ===== */}
          <div>
            <span className="inline-block bg-black text-white text-xs px-4 py-1 mb-6">
              Her Story
            </span>

            {herStories.map((story, i) => (
              <Link
                key={i}
                href={`/post?slug=${story.slug}`}
                className="flex items-start gap-4 pb-6 mb-6 border-b"
              >
                <div className="flex-1">
                  <h4 className="text-sm font-bold mb-1">{story.title}</h4>
                  <p className="text-xs">{getAuthorName(story.author)}</p>
                </div>

                {story.featuredImage && (
                  <div className="w-16 h-16 relative shrink-0 overflow-hidden">
                    <Image
                      src={story.featuredImage}
                      alt=""
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                )}
              </Link>
            ))}
          </div>

          {/* ===== SOCIAL STORY ===== */}
          <div>
            <span className="inline-block bg-black text-white text-xs px-4 py-1 mb-6">
              Social Story
            </span>

            {socialStories.length > 0 && (
              <>
                {/* First Story with Image */}
                <Link
                  href={`/post?slug=${socialStories[0].slug}`}
                  className="block mb-6"
                >
                  {socialStories[0].featuredImage && (
                    <div className="relative w-full aspect-square mb-4 overflow-hidden">
                      <Image
                        src={socialStories[0].featuredImage}
                        alt=""
                        fill
                        className="object-cover grayscale"
                      />
                    </div>
                  )}

                  <h4 className="text-sm font-bold">
                    {socialStories[0].title}
                  </h4>
                </Link>

                {/* Ranked List */}
                {socialStories.slice(1).map((story, i) => (
                  <Link
                    key={i}
                    href={`/post?slug=${story.slug}`}
                    className="flex gap-4 mb-5"
                  >
                    <span className="text-gray-900 font-bold text-lg">
                      {i + 2}
                    </span>
                    <h4 className="text-sm font-medium">{story.title}</h4>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
