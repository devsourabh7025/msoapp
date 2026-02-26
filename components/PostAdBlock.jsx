"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PostAdBlock({ position = "sidebar" }) {
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const response = await fetch("/api/settings/post-ads");
        if (response.ok) {
          const data = await response.json();
          const adKey = position === "top" ? "topAd" : "sidebarAd";
          setAd(data.settings?.[adKey] || null);
        }
      } catch (error) {
        console.error("Error fetching post ad:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAd();
  }, [position]);

  if (loading || !ad || !ad.enabled) return null;

  const hasContent =
    (ad.type === "image" && ad.imageUrl?.trim()) ||
    (ad.type === "code" && ad.code?.trim());

  if (!hasContent) return null;

  const isTop = position === "top";

  return (
    <div className={`border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden ${isTop ? "mb-6" : ""}`}>
      <div className={isTop ? "p-3" : "p-4"}>
        <div className="text-[9px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-2">
          Sponsored
        </div>
        {ad.type === "image" ? (
          <div className="text-center">
            {ad.link ? (
              <Link href={ad.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className={`relative overflow-hidden ${isTop ? "aspect-[728/90] max-w-4xl mx-auto w-full" : "aspect-[16/9] w-full"}`}>
                  <Image
                    src={ad.imageUrl}
                    alt={ad.alt || "Advertisement"}
                    fill
                    className="object-contain"
                    unoptimized
                    onError={(e) => { e.target.src = "/demo.png"; }}
                  />
                </div>
              </Link>
            ) : (
              <div className={`relative overflow-hidden ${isTop ? "aspect-[728/90] max-w-4xl mx-auto" : "aspect-[16/9]"}`}>
                <Image
                  src={ad.imageUrl}
                  alt={ad.alt || "Advertisement"}
                  fill
                  className="object-contain"
                  unoptimized
                  onError={(e) => { e.target.src = "/demo.png"; }}
                />
              </div>
            )}
          </div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: ad.code }} className="ad-code-container" />
        )}
      </div>
    </div>
  );
}
