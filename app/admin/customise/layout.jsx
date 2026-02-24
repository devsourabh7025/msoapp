"use client";

import { useState, useEffect } from "react";
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

// section id -> permission key for manager
const SECTION_PERMISSION = {
  hero: "customiseHero",
  spotlight: "customiseSpotlight",
  featured: "customiseFeatured",
  trending: "customiseTrending",
  "homepage-order": "customiseHomepageOrder",
  header: "customiseHeader",
  footer: "customiseFooter",
  post: "customisePost",
  sidebar: "customiseSidebar",
  site: "customiseSite",
};

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

function canSeeSection(sectionId, user) {
  if (!user) return true;
  if (user.role === "ADMIN") return true;
  if (user.role !== "MANAGER") return false;
  const perm = SECTION_PERMISSION[sectionId];
  return perm && (user.managerPermissions || []).includes(perm);
}

export default function CustomiseLayout({ children }) {
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/auth/me", { credentials: "include" })
      .then((r) => r.ok ? r.json() : null)
      .then((data) => setUser(data?.user || null))
      .catch(() => setUser(null));
  }, []);

  const isActive = (href) => {
    if (href === "/admin/customise") {
      return pathname === "/admin/customise";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  const filteredHomepage = homepageSections.filter((s) => canSeeSection(s.id, user));
  const filteredOther = otherSections.filter((s) => canSeeSection(s.id, user));

  return (
    <div className="flex gap-6">
      <div className="flex-1 min-w-0 p-4">
        {children}
      </div>

      <aside className="w-56 shrink-0 p-4 pt-6">
        <div className="sticky top-24 bg-white border border-gray-300 overflow-hidden">
          <div className="p-3 border-b border-gray-300 bg-gray-50">
            <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Customise
            </h3>
          </div>
          <nav className="p-2 space-y-0.5">
            <div className="pt-2">
              <div className="px-3 py-1.5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                Homepage Sections
              </div>
              {filteredHomepage.map((section) => {
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

            <div className="pt-2 border-t border-gray-200">
              {filteredOther.map((section) => {
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
