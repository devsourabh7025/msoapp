"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Brands");

  const drawerData = {
    Brands: {
      type: "list",
      items: [
        "The Captable",
        "AI Story",
        "SMB Story",
        "HerStory",
        "Social Story",
        "Enterprise Story",
        "YS Life",
        "YS Hindi",
        "YS Tamil",
        "YSTV",
      ],
    },
    Discover: {
      type: "list",
      items: [
        "List Your Company",
        "Partner with us",
        "Pitchfest",
        "Bharat Project",
      ],
    },
    Events: {
      type: "event",
      items: [
        {
          title: "DevSparks 2026: Pune Edition",
          date: "28th February 2026",
          location: "Pune",
        },
      ],
    },
    Newsletter: {
      type: "list",
      items: ["Daily Newsletter", "Startup Digest", "Investor Updates"],
    },
    More: {
      type: "list",
      items: ["Glossary", "Everything AI", "Opinion", "Press Release"],
    },
  };

  const router = useRouter();
  const pathname = usePathname();
  const userMenuRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const [headerContent, setHeaderContent] = useState(null);

  /* ================= AUTH ================= */

  useEffect(() => {
    if (pathname === "/login" || pathname === "/register") {
      setUser(null);
      setLoading(false);
      return;
    }
    checkAuth();
  }, [pathname]);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/me");
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }
    } catch (err) {
      console.error("Auth check failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setUser(null);
    setUserMenuOpen(false);
    router.push("/");
    router.refresh();
  };

  /* ================= HEADER SETTINGS ================= */

  useEffect(() => {
    const loadHeaderContent = async () => {
      try {
        const response = await fetch("/api/settings/header");
        if (response.ok) {
          const data = await response.json();
          setHeaderContent(data.header);
        }
      } catch (err) {
        console.error("Header load failed:", err);
      }
    };

    loadHeaderContent();
  }, []);

  const menuItems =
    headerContent?.menuItems && Array.isArray(headerContent.menuItems)
      ? headerContent.menuItems
      : [];

  /* ================= CLICK OUTSIDE ================= */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    if (userMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuOpen]);

  /* ================= UI ================= */

  return (
    <>
      <header className="w-full bg-white dark:bg-gray-950">
        {/* TOP BAR (NOT STICKY) */}
        <div className="border-b border-gray-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-24">
              {/* LEFT: Drawer Trigger */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="h-10 w-10 flex items-center justify-center border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                <Menu size={22} />
              </button>

              {/* CENTER LOGO */}
              <Link
                href="/"
                className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center leading-none"
              >
                <span className="text-[52px] sm:text-[64px] font-extrabold tracking-tight text-red-600 uppercase">
                  MSO
                </span>
                <span className="text-[11px] sm:text-xs font-medium tracking-wide text-gray-600 dark:text-gray-400 uppercase mt-1">
                  Maharashtra Startup Organisation
                </span>
              </Link>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-3">
                {!loading && (
                  <>
                    {user ? (
                      <div className="relative" ref={userMenuRef}>
                        <button
                          onClick={() => setUserMenuOpen(!userMenuOpen)}
                          className="h-10 px-4 border border-black dark:border-white text-sm font-semibold flex items-center gap-2"
                        >
                          <span className="hidden sm:inline max-w-[90px] truncate">
                            {user.name}
                          </span>
                          <ChevronDown size={16} />
                        </button>

                        {userMenuOpen && (
                          <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-white/10 z-50">
                            <Link
                              href={user.role === "ADMIN" ? "/admin" : "/user"}
                              onClick={() => setUserMenuOpen(false)}
                              className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-white/5"
                            >
                              {user.role === "ADMIN"
                                ? "Admin Panel"
                                : "User Panel"}
                            </Link>

                            <button
                              onClick={handleLogout}
                              className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10"
                            >
                              Logout
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href="/login"
                        className="h-10 px-6 border border-black dark:border-white text-sm font-semibold flex items-center"
                      >
                        Sign In
                      </Link>
                    )}
                  </>
                )}

                {/* Search */}
                <button className="h-10 w-12 flex items-center justify-center bg-black text-white">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM NAV (STICKY ONLY THIS) */}
        {menuItems.length > 0 && (
          <div className="sticky top-0 z-40 border-b border-gray-300 dark:border-white/10 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="hidden lg:flex items-center justify-center gap-10 h-14">
                {menuItems.map((item, index) => {
                  if (item.type === "link") {
                    return (
                      <Link
                        key={item.id || index}
                        href={item.href || "/"}
                        className="text-base font-semibold hover:text-red-600 transition-colors"
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  if (item.type === "dropdown" && item.items?.length) {
                    return (
                      <div key={item.id || index} className="relative group">
                        <button className="flex items-center gap-1 text-base font-semibold hover:text-red-600">
                          {item.label}
                          <ChevronDown size={16} />
                        </button>

                        <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                          <div className="bg-white dark:bg-gray-900 shadow-xl border min-w-[220px] py-2">
                            {item.items.map((sub, i) => (
                              <Link
                                key={sub.id || i}
                                href={sub.href || "/"}
                                className="block px-5 py-2.5 text-sm hover:text-red-600 hover:bg-gray-50 dark:hover:bg-white/5"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return null;
                })}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* 50% DRAWER */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* LEFT DRAWER PANEL */}
          <div className="w-1/2 bg-gray-100 dark:bg-gray-950 h-full overflow-y-auto p-10 flex flex-col shadow-2xl">
            {/* Close Button */}
            <div className="mb-10">
              <button
                onClick={() => setDrawerOpen(false)}
                className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            {/* MAIN SECTION */}
            <div className="flex flex-1">
              {/* LEFT BIG CATEGORY MENU */}
              <div className="w-1/2 space-y-6">
                {Object.keys(drawerData).map((category) => (
                  <div
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`text-4xl font-bold cursor-pointer transition-all
                ${
                  activeCategory === category
                    ? "text-black dark:text-white"
                    : "text-gray-400"
                }`}
                  >
                    {category}
                  </div>
                ))}
              </div>

              {/* RIGHT CONTENT AREA */}
              <div className="w-1/2 pl-10">
                {drawerData[activeCategory].type === "list" && (
                  <div className="space-y-4 text-lg font-medium">
                    {drawerData[activeCategory].items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 hover:text-red-600 cursor-pointer"
                      >
                        <span>✸</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {drawerData[activeCategory].type === "event" && (
                  <div className="space-y-6">
                    {drawerData[activeCategory].items.map((event, i) => (
                      <div key={i} className="flex gap-4 items-center">
                        <div className="w-32 h-20 bg-gray-300 flex items-center justify-center text-sm">
                          Image
                        </div>
                        <div>
                          <div className="font-semibold">{event.title}</div>
                          <div className="text-sm text-gray-500">
                            {event.location} — {event.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* FOOTER */}
            <div className="border-t border-gray-300 dark:border-white/10 mt-12 pt-8 flex justify-between items-center">
              <div className="text-sm font-medium">Follow Us</div>

              <div className="flex items-center gap-3">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="px-4 py-2 border border-gray-400 bg-white dark:bg-gray-900 text-sm"
                />
                <button className="bg-black text-white px-5 py-2 text-sm font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT OVERLAY */}
          <div
            className="w-1/2 bg-black/40"
            onClick={() => setDrawerOpen(false)}
          />
        </div>
      )}
    </>
  );
}
