"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Layout,
  Sparkles,
  Star,
  TrendingUp,
  ArrowUpDown,
  FileText,
  Globe,
} from "lucide-react";

const homepageSections = [
  { id: "hero", name: "Hero", icon: Layout },
  { id: "spotlight", name: "Spotlight", icon: Sparkles },
  { id: "featured", name: "Featured", icon: Star },
  { id: "trending", name: "Trending", icon: TrendingUp },
];

const otherSections = [
  { id: "homepage-order", name: "Homepage Order", icon: ArrowUpDown },
  { id: "header", name: "Header", icon: Layout },
  { id: "footer", name: "Footer", icon: Layout },
  { id: "post", name: "Post", icon: FileText },
  { id: "sidebar", name: "Sidebar", icon: Layout },
  { id: "site", name: "Language", icon: Globe },
];

export default function CustomiseLayout({ children }) {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/admin/customise") {
      return pathname === "/admin/customise";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <div className="flex gap-6">
      {/* Main content - takes remaining space */}
      <div className="flex-1 min-w-0 p-4">
        {children}
      </div>

      {/* Right sidebar - submenus */}
      <aside className="w-56 shrink-0 p-4 pt-6">
        <div className="sticky top-24 bg-white border border-gray-300 overflow-hidden">
          <div className="p-3 border-b border-gray-300 bg-gray-50">
            <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Customise
            </h3>
          </div>
          <nav className="p-2 space-y-0.5">
            {/* Homepage Sections */}
            <div className="pt-2">
              <div className="px-3 py-1.5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                Homepage Sections
              </div>
              {homepageSections.map((section) => {
                const SectionIcon = section.icon;
                const href = `/admin/customise/${section.id}`;
                const active = isActive(href);
                return (
                  <Link
                    key={section.id}
                    href={href}
                    className={`flex items-center gap-2 px-3 py-2 transition-all duration-200 text-sm ${
                      active
                        ? "bg-black text-white font-medium"
                        : "text-gray-600 hover:bg-gray-100 hover:text-black"
                    }`}
                  >
                    <SectionIcon size={16} />
                    <span>{section.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Other sections */}
            <div className="pt-2 border-t border-gray-200">
              {otherSections.map((section) => {
                const SectionIcon = section.icon;
                const href = `/admin/customise/${section.id}`;
                const active = isActive(href);
                return (
                  <Link
                    key={section.id}
                    href={href}
                    className={`flex items-center gap-2 px-3 py-2 transition-all duration-200 text-sm ${
                      active
                        ? "bg-black text-white font-medium"
                        : "text-gray-600 hover:bg-gray-100 hover:text-black"
                    }`}
                  >
                    <SectionIcon size={16} />
                    <span>{section.name}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
}
