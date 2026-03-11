"use client";

import Image from "next/image";
import Link from "next/link";

export default function AdSection({ space }) {
  if (!space || !space.enabled) {
    return null;
  }

  const hasContent =
    (space.type === "image" &&
      space.imageUrl &&
      space.imageUrl.trim() !== "") ||
    (space.type === "code" && space.code && space.code.trim() !== "");

  if (!hasContent) {
    return null;
  }

  const AdImage = ({ className = "" }) => (
    <div className={`relative w-full max-w-3xl mx-auto aspect-[728/90] overflow-hidden ${className}`}>
      <Image
        src={space.imageUrl}
        alt={space.alt || "Advertisement"}
        fill
        unoptimized
        className="object-contain hover:opacity-90 transition-opacity duration-300"
        onError={(e) => {
          e.target.src = "/demo.png";
        }}
      />
    </div>
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-white/5">
      <div className="max-w-[72rem] mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-red-600 dark:text-red-400">
            Advertisement
          </span>
          <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
        </div>

        {space.type === "image" ? (
          space.link ? (
            <Link
              href={space.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <AdImage />
            </Link>
          ) : (
            <AdImage />
          )
        ) : (
          <div className="max-w-3xl mx-auto">
            <div
              dangerouslySetInnerHTML={{ __html: space.code }}
              className="ad-code-container"
            />
          </div>
        )}
      </div>
    </div>
  );
}
