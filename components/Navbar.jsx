"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Menu, X, Search, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("The Player");

  const drawerData = {
    "The Player": {
      type: "list",
      items: [
        "Equity Intel",
        "The AI Index",
        "Start-Up Narrative",
        "Fearless & Fabulous",
        "Social Impact",
        "Corporate Intel Narrative",
        "Beyond Work",
        "संस्मरण (Sansmaran)",
        "முன்னவர் (Munnavar)",
        "झेप (Zhep)",
        "ઉડાન (Udaan)",
        "MSO Studio",
      ],
    },
    Explore: {
      type: "list",
      items: [
        "Get Featured",
        "Collaborate",
        "Startup Showcase",
        "Bharat Project",
      ],
    },
    EVents: {
      type: "event",
      items: [
        {
          title: "DevSparks 2026: Pune Edition",
          date: "28th February 2026",
          location: "Pune",
        },
        {
          title: "MSO Startup Summit 2026",
          date: "15th March 2026",
          location: "Mumbai",
        },
      ],
    },
    Newsletter: {
      type: "newsletter",
      items: [
        {
          title: "MSO Daily Brief",
          description: "Your daily essential: A high-level briefing on startup breakthroughs, corporate strategy, and the market moves shaping the new economy. More to Visit More",
        },
        "Startup Digest",
        "Investor Updates",
      ],
    },
    More: {
      type: "list",
      items: ["The Index", "The AI Index", "Perspectives", "Market News"],
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
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 sm:h-20 lg:h-24">
              {/* LEFT: Drawer Trigger */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors shrink-0"
                aria-label="Open menu"
              >
                <Menu size={20} className="sm:w-[22px] sm:h-[22px]" />
              </button>

              {/* CENTER LOGO */}
              <Link
                href="/"
                className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center leading-none"
              >
                <span className="text-[38px] sm:text-[52px] lg:text-[64px] font-extrabold tracking-tight text-red-600 uppercase">
                  MSO
                </span>
                <span className="text-[9px] sm:text-xs font-medium tracking-wide text-gray-600 dark:text-gray-400 uppercase mt-0.5 sm:mt-1 text-center hidden sm:block">
                  Maharashtra Startup Organisation
                </span>
              </Link>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {/* Theme toggle: light/dark */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="h-10 w-10 flex items-center justify-center border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                  aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                >
                  {theme === "dark" ? (
                    <Sun size={20} />
                  ) : (
                    <Moon size={20} />
                  )}
                </button>

                {!loading && (
                  <>
                    {user ? (
                      <div className="relative" ref={userMenuRef}>
                        <button
                          onClick={() => setUserMenuOpen(!userMenuOpen)}
                          className="h-9 sm:h-10 px-3 sm:px-4 border border-black dark:border-white text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2"
                        >
                          <span className="hidden sm:inline max-w-[90px] truncate">
                            {user.name}
                          </span>
                          <ChevronDown size={16} />
                        </button>

                        {userMenuOpen && (
                          <div className="absolute right-0 top-full mt-2 w-48 sm:w-56 bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-white/10 z-50">
                            <Link
                              href={user.role === "ADMIN" || user.role === "MANAGER" ? "/admin" : "/user"}
                              onClick={() => setUserMenuOpen(false)}
                              className="block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-white/5"
                            >
                              {user.role === "ADMIN" || user.role === "MANAGER"
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
                        className="h-9 sm:h-10 px-4 sm:px-6 border border-black dark:border-white text-xs sm:text-sm font-semibold flex items-center shrink-0"
                      >
                        Sign In
                      </Link>
                    )}
                  </>
                )}

                {/* Search */}
                <button className="h-9 w-9 sm:h-10 sm:w-12 flex items-center justify-center bg-black text-white shrink-0" aria-label="Search">
                  <Search size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM NAV (STICKY) - Desktop horizontal, Mobile expandable */}
        {menuItems.length > 0 && (
          <div className="sticky top-0 z-40 border-b border-gray-300 dark:border-white/10 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
              {/* Desktop nav */}
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
                          <div className="bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-white/10 min-w-[220px] py-2">
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

              {/* Mobile nav - expandable */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex items-center justify-between w-full h-12 px-4 text-sm font-semibold text-gray-900 dark:text-white"
                  aria-expanded={mobileMenuOpen}
                >
                  Menu
                  <ChevronDown size={18} className={`transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileMenuOpen && (
                  <div className="border-t border-gray-200 dark:border-white/10 py-3 px-4 space-y-1 max-h-[60vh] overflow-y-auto">
                    {menuItems.map((item, index) => {
                      if (item.type === "link") {
                        return (
                          <Link
                            key={item.id || index}
                            href={item.href || "/"}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2.5 px-3 text-sm font-medium hover:text-red-600 hover:bg-gray-50 dark:hover:bg-white/5"
                          >
                            {item.label}
                          </Link>
                        );
                      }
                      if (item.type === "dropdown" && item.items?.length) {
                        return (
                          <div key={item.id || index} className="py-2">
                            <div className="px-3 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                              {item.label}
                            </div>
                            {item.items.map((sub, i) => (
                              <Link
                                key={sub.id || i}
                                href={sub.href || "/"}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-2 px-3 pl-5 text-sm hover:text-red-600 hover:bg-gray-50 dark:hover:bg-white/5"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* DRAWER: 100% on mobile, 50% on desktop */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* LEFT DRAWER PANEL */}
          <div className="w-full md:w-1/2 max-w-full bg-gray-100 dark:bg-gray-950 h-full overflow-y-auto p-4 sm:p-6 md:p-10 flex flex-col shadow-2xl">
            {/* Close Button */}
            <div className="mb-6 sm:mb-10">
              <button
                onClick={() => setDrawerOpen(false)}
                className="bg-red-500 text-white w-8 h-8 flex items-center justify-center"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* MAIN SECTION */}
            <div className="flex flex-1 flex-col md:flex-row gap-6 md:gap-0">
              {/* LEFT BIG CATEGORY MENU */}
              <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
                {Object.keys(drawerData).map((category) => (
                  <div
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold cursor-pointer transition-all
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
              <div className="w-full md:w-1/2 pt-4 md:pt-0 md:pl-10">
                {drawerData[activeCategory].type === "list" && (
                  <div className="space-y-3 sm:space-y-4 text-base sm:text-lg font-medium">
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

                {drawerData[activeCategory].type === "newsletter" && (
                  <div className="space-y-6">
                    {drawerData[activeCategory].items.map((item, i) =>
                      typeof item === "object" ? (
                        <div key={i} className="space-y-1">
                          <div className="font-semibold text-lg hover:text-red-600 cursor-pointer">
                            {item.title}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      ) : (
                        <div
                          key={i}
                          className="flex items-center gap-3 hover:text-red-600 cursor-pointer"
                        >
                          <span>✸</span>
                          <span>{item}</span>
                        </div>
                      )
                    )}
                  </div>
                )}

                {drawerData[activeCategory].type === "event" && (
                  <div className="space-y-4 sm:space-y-6">
                    {drawerData[activeCategory].items.map((event, i) => (
                      <div key={i} className="flex gap-3 sm:gap-4 items-center">
                        <div className="w-20 h-14 sm:w-32 sm:h-20 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-xs sm:text-sm shrink-0">
                          Image
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-sm sm:text-base line-clamp-2">{event.title}</div>
                          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
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
            <div className="border-t border-gray-300 dark:border-white/10 mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="text-sm font-medium">Follow Us</div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full sm:w-auto min-w-0 px-4 py-2.5 sm:py-2 border border-gray-400 dark:border-white/30 bg-white dark:bg-gray-900 text-sm"
                />
                <button className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 sm:py-2 text-sm font-semibold shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT OVERLAY - hidden on mobile (drawer is full width) */}
          <div
            className="hidden md:block flex-1 bg-black/40"
            onClick={() => setDrawerOpen(false)}
          />
        </div>
      )}
    </>
  );
}
