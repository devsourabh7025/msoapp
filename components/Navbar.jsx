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
          description:
            "Your daily essential: A high-level briefing on startup breakthroughs, corporate strategy, and the market moves shaping the new economy.",
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
      <header className="w-full sticky top-0 z-50 bg-white dark:bg-gray-950">
        {/* Top thin accent line */}
        <div className="h-[3px] bg-orange-600" />

        {/* Main header bar */}
        <div className="border-b border-gray-200 dark:border-white/10">
          <div className="max-w-[72rem] mx-auto px-6">
            <div className="relative flex items-center justify-between h-14 sm:h-16">
              {/* LEFT: Drawer trigger */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="h-9 w-9 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors shrink-0"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>

              {/* CENTER LOGO */}
              <Link
                href="/"
                className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2"
              >
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-orange-600">
                  MSO
                </span>
                <span className="hidden sm:block text-[10px] font-medium tracking-wide text-gray-500 dark:text-gray-400 uppercase leading-tight max-w-[140px]">
                  Maharashtra Startup Organisation
                </span>
              </Link>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Theme toggle */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="h-9 w-9 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label={
                    theme === "dark"
                      ? "Switch to light theme"
                      : "Switch to dark theme"
                  }
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {/* Auth */}
                {!loading && (
                  <>
                    {user ? (
                      <div className="relative" ref={userMenuRef}>
                        <button
                          onClick={() => setUserMenuOpen(!userMenuOpen)}
                          className="h-9 px-3 text-[12px] font-bold tracking-wide uppercase text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1 transition-colors"
                        >
                          <span className="hidden sm:inline max-w-[80px] truncate">
                            {user.name}
                          </span>
                          <ChevronDown size={14} />
                        </button>

                        {userMenuOpen && (
                          <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-white/10 z-50">
                            <Link
                              href={
                                user.role === "ADMIN" ||
                                user.role === "MANAGER"
                                  ? "/admin"
                                  : "/user"
                              }
                              onClick={() => setUserMenuOpen(false)}
                              className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                            >
                              {user.role === "ADMIN" ||
                              user.role === "MANAGER"
                                ? "Admin Panel"
                                : "User Panel"}
                            </Link>
                            <button
                              onClick={handleLogout}
                              className="w-full text-left px-4 py-3 text-sm text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-colors"
                            >
                              Logout
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href="/login"
                        className="h-9 px-4 text-[12px] font-bold tracking-wide uppercase text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 flex items-center transition-colors shrink-0"
                      >
                        Sign In
                      </Link>
                    )}
                  </>
                )}

                {/* Search */}
                <button
                  className="h-9 w-9 flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white transition-colors shrink-0"
                  aria-label="Search"
                >
                  <Search size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom nav bar */}
        {menuItems.length > 0 && (
          <div className="border-b border-gray-100 dark:border-white/5 bg-white dark:bg-gray-950">
            <div className="max-w-[72rem] mx-auto px-6">
              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-8 h-10">
                {menuItems.map((item, index) => {
                  if (item.type === "link") {
                    return (
                      <Link
                        key={item.id || index}
                        href={item.href || "/"}
                        className="text-[12px] font-bold tracking-wide uppercase text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  if (item.type === "dropdown" && item.items?.length) {
                    return (
                      <div key={item.id || index} className="relative group">
                        <button className="flex items-center gap-1 text-[12px] font-bold tracking-wide uppercase text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors h-10">
                          {item.label}
                          <ChevronDown size={12} />
                        </button>

                        <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                          <div className="bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-white/10 min-w-[200px] py-1">
                            {item.items.map((sub, i) => (
                              <Link
                                key={sub.id || i}
                                href={sub.href || "/"}
                                className="block px-4 py-2.5 text-[13px] text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
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

              {/* Mobile nav */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex items-center justify-between w-full h-10 text-[12px] font-bold tracking-wide uppercase text-gray-700 dark:text-gray-300"
                  aria-expanded={mobileMenuOpen}
                >
                  Menu
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileMenuOpen && (
                  <div className="border-t border-gray-100 dark:border-white/5 py-2 max-h-[60vh] overflow-y-auto">
                    {menuItems.map((item, index) => {
                      if (item.type === "link") {
                        return (
                          <Link
                            key={item.id || index}
                            href={item.href || "/"}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2.5 px-3 text-[13px] font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                          >
                            {item.label}
                          </Link>
                        );
                      }
                      if (item.type === "dropdown" && item.items?.length) {
                        return (
                          <div key={item.id || index} className="py-2">
                            <div className="px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 dark:text-gray-500">
                              {item.label}
                            </div>
                            {item.items.map((sub, i) => (
                              <Link
                                key={sub.id || i}
                                href={sub.href || "/"}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-2 px-3 pl-5 text-[13px] text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
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

      {/* DRAWER OVERLAY */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Drawer panel */}
          <div className="w-full md:w-1/2 max-w-2xl bg-white dark:bg-gray-950 h-full overflow-y-auto flex flex-col shadow-2xl">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-gray-200 dark:border-white/10">
              <span className="text-xl font-extrabold tracking-tight text-orange-600">
                MSO
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                className="h-8 w-8 flex items-center justify-center bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-orange-600 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={16} />
              </button>
            </div>

            {/* Drawer body */}
            <div className="flex-1 flex flex-col md:flex-row gap-0 px-6 sm:px-10 py-8">
              {/* Category list */}
              <div className="w-full md:w-2/5 md:pr-8 md:border-r border-gray-200 dark:border-white/10 space-y-1">
                {Object.keys(drawerData).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`block w-full text-left py-2 text-lg sm:text-xl font-bold transition-colors ${
                      activeCategory === category
                        ? "text-orange-600"
                        : "text-gray-400 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Content area */}
              <div className="w-full md:w-3/5 md:pl-8 pt-6 md:pt-0">
                {drawerData[activeCategory].type === "list" && (
                  <div className="divide-y divide-gray-100 dark:divide-white/5">
                    {drawerData[activeCategory].items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 py-2.5 text-[14px] font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 cursor-pointer transition-colors"
                      >
                        <span className="w-1.5 h-1.5 bg-orange-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {drawerData[activeCategory].type === "newsletter" && (
                  <div className="space-y-5">
                    {drawerData[activeCategory].items.map((item, i) =>
                      typeof item === "object" ? (
                        <div
                          key={i}
                          className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-4"
                        >
                          <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </h4>
                          <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ) : (
                        <div
                          key={i}
                          className="flex items-center gap-3 py-2 text-[14px] font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 cursor-pointer transition-colors"
                        >
                          <span className="w-1.5 h-1.5 bg-orange-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                )}

                {drawerData[activeCategory].type === "event" && (
                  <div className="space-y-4">
                    {drawerData[activeCategory].items.map((event, i) => (
                      <div
                        key={i}
                        className="border border-gray-200 dark:border-white/10 p-4"
                      >
                        <span className="text-[10px] font-bold tracking-wider uppercase text-orange-600">
                          Event
                        </span>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mt-1">
                          {event.title}
                        </h4>
                        <div className="mt-2 flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-500">
                          <span>{event.location}</span>
                          <span className="w-1 h-1 bg-gray-400" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Drawer footer */}
            <div className="px-6 sm:px-10 py-6 border-t border-gray-200 dark:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-500 dark:text-gray-500">
                  Stay updated
                </span>
                <form
                  className="flex gap-2 w-full sm:w-auto sm:max-w-xs"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 min-w-0 h-9 px-3 border border-gray-300 dark:border-white/15 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none focus:border-orange-500 transition-colors"
                  />
                  <button className="h-9 px-4 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold tracking-wide uppercase transition-colors shrink-0">
                    Go
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Overlay backdrop */}
          <div
            className="hidden md:block flex-1 bg-black/50 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />
        </div>
      )}
    </>
  );
}
