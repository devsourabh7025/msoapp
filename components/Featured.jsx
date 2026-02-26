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

  const getCategoryName = (cat) => {
    if (!cat) return null;
    if (typeof cat === "object" && cat?.name) return cat.name;
    if (typeof cat === "string") return cat;
    return null;
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

  const hasContent = smbStories.length > 0 || herStories.length > 0 || socialStories.length > 0;

  const ColumnHeader = ({ label }) => (
    <div className="flex items-center gap-2 mb-5">
      <span className="px-2.5 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[10px] font-bold tracking-wider uppercase">
        {label}
      </span>
      <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
    </div>
  );

  const LeadCard = ({ post }) => (
    <Link href={`/post?slug=${post.slug}`} className="group block mb-5">
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100 dark:bg-gray-800">
        {post.featuredImage && (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        {getCategoryName(post.category) && (
          <span className="absolute top-3 left-3 px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold tracking-wider uppercase">
            {getCategoryName(post.category)}
          </span>
        )}
      </div>
      <h3 className="mt-3 text-base font-bold leading-snug text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
        {post.title}
      </h3>
      {post.excerpt && (
        <p className="mt-1.5 text-[13px] leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-2">
          {post.excerpt}
        </p>
      )}
      <p className="mt-2 text-[11px] tracking-wide uppercase text-gray-500 dark:text-gray-500">
        <span className="font-semibold text-gray-700 dark:text-gray-300">{getAuthorName(post.author)}</span>
      </p>
    </Link>
  );

  const ListItem = ({ post, index }) => (
    <Link
      href={`/post?slug=${post.slug}`}
      className="group flex gap-3 py-3 first:pt-0"
    >
      <span className="text-lg font-black text-gray-200 dark:text-gray-800 leading-none mt-0.5 select-none w-5 shrink-0 group-hover:text-red-200 dark:group-hover:text-red-900/50 transition-colors">
        {index + 1}
      </span>
      <div className="flex-1 min-w-0">
        <h4 className="text-[13px] font-semibold leading-snug text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
          {post.title}
        </h4>
        <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-500">
          {getAuthorName(post.author)}
        </p>
      </div>
    </Link>
  );

  const ListItemWithImage = ({ post }) => (
    <Link
      href={`/post?slug=${post.slug}`}
      className="group flex gap-3 py-3 first:pt-0"
    >
      <div className="relative w-16 h-16 shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-800">
        {post.featuredImage && (
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="64px"
          />
        )}
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h4 className="text-[13px] font-semibold leading-snug text-gray-900 dark:text-white line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
          {post.title}
        </h4>
        <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-500">
          {getAuthorName(post.author)}
        </p>
      </div>
    </Link>
  );

  return (
    <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-white/5">
      <div className="home-container py-10">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="inline-block w-8 h-[3px] bg-red-600" />
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white">
            {featuredSettings?.title || "Featured"}
          </h2>
          <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
        </div>

        {hasContent ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* SMB Stories */}
            <div className="md:pr-6 md:border-r border-gray-200 dark:border-white/10 pb-8 md:pb-0">
              <ColumnHeader label="SMB Story" />
              {smbStories.length > 0 && (
                <>
                  <LeadCard post={smbStories[0]} />
                  {smbStories.length > 1 && (
                    <div className="divide-y divide-gray-100 dark:divide-white/5">
                      {smbStories.slice(1).map((story, i) => (
                        <ListItem key={story._id || i} post={story} index={i} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Her Stories */}
            <div className="md:px-6 md:border-r border-gray-200 dark:border-white/10 py-8 md:py-0 border-t md:border-t-0">
              <ColumnHeader label="Her Story" />
              {herStories.length > 0 && (
                <>
                  <LeadCard post={herStories[0]} />
                  {herStories.length > 1 && (
                    <div className="divide-y divide-gray-100 dark:divide-white/5">
                      {herStories.slice(1).map((story, i) => (
                        <ListItem key={story._id || i} post={story} index={i} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Social Stories */}
            <div className="md:pl-6 pt-8 md:pt-0 border-t md:border-t-0">
              <ColumnHeader label="Social Story" />
              {socialStories.length > 0 && (
                <>
                  <LeadCard post={socialStories[0]} />
                  {socialStories.length > 1 && (
                    <div className="divide-y divide-gray-100 dark:divide-white/5">
                      {socialStories.slice(1).map((story, i) => (
                        <ListItem key={story._id || i} post={story} index={i} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">No featured stories selected</p>
          </div>
        )}
      </div>
    </section>
  );
}
