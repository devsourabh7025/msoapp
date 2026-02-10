"use client";

import Image from "next/image";
import Link from "next/link";

export default function AdSection({ space }) {
  // Don't render if space is not provided, not enabled, or has no content
  if (!space || !space.enabled) {
    return null;
  }

  const hasContent =
    (space.type === "image" &&
      space.imageUrl &&
      space.imageUrl.trim() !== "") ||
    (space.type === "code" && space.code && space.code.trim() !== "");

  // Don't show ad space if it has no content - return null to hide it completely
  if (!hasContent) {
    return null;
  }

  return (
    <section className="bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-2 text-xs text-gray-500 dark:text-gray-400 text-center">
          Ad Space {space.spaceNumber}
        </div>
        {space.type === "image" ? (
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 p-4 text-center">
            {space.link ? (
              <Link
                href={space.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative w-full max-w-4xl mx-auto aspect-[728/90] rounded-lg overflow-hidden">
                  <Image
                    src={space.imageUrl}
                    alt={space.alt || "Advertisement"}
                    fill
                    className="object-contain hover:opacity-90 transition-opacity duration-300"
                    onError={(e) => {
                      e.target.src = "/demo.png";
                    }}
                  />
                </div>
              </Link>
            ) : (
              <div className="relative w-full max-w-4xl mx-auto aspect-[728/90] rounded-lg overflow-hidden">
                <Image
                  src={space.imageUrl}
                  alt={space.alt || "Advertisement"}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    e.target.src = "/demo.png";
                  }}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 p-4">
            <div
              dangerouslySetInnerHTML={{ __html: space.code }}
              className="ad-code-container"
            />
          </div>
        )}
      </div>
    </section>
  );
}
