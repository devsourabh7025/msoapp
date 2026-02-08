"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Youtube,
  Moon,
  Sun,
  Search,
  ChevronDown,
  Menu,
  X,
  User,
  LogOut,
  Edit,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const userMenuRef = useRef(null);
  const { theme, toggleTheme, mounted } = useTheme();
  const headerLoadedRef = useRef(false);

  useEffect(() => {
    // Skip auth check on login/register — no session yet; avoids 401 in console
    if (pathname === "/login" || pathname === "/register") {
      setUser(null);
      setLoading(false);
      return;
    }
    checkAuth();
  }, [pathname]);

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

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/me");
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      setUser(null);
      setUserMenuOpen(false);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleWritePost = () => {
    if (user) {
      if (user.role === "ADMIN") {
        router.push("/admin/add-post");
      } else {
        router.push("/user/create-post");
      }
    } else {
      router.push("/login");
    }
  };

  const [headerContent, setHeaderContent] = useState(null);

  useEffect(() => {
    // Load header content from API (database only - no localStorage)
    const loadHeaderContent = async () => {
      try {
        const response = await fetch("/api/settings/header");
        if (response.ok) {
          const data = await response.json();
          if (data.header) {
            setHeaderContent(data.header);
          }
        }
        // No fallback - all data comes from database
      } catch (error) {
        console.error("Error loading header content from database:", error);
        // No fallback - all data comes from database
      }
    };

    // In React Strict Mode (dev), effects can run twice. Guard to avoid double-fetching.
    if (!headerLoadedRef.current) {
      headerLoadedRef.current = true;
      loadHeaderContent();
    }

    // No polling: header settings change rarely; reloading the page (or navigation)
    // will pick up the new settings without hammering the API.
    return () => {};
  }, []);

  const organizationName = headerContent?.organizationName || "Maharashtra Startup Organisation";
  const socialLinks = headerContent?.socialLinks || {};
  
  // Only use menu items from server - no static defaults
  const menuItems = headerContent?.menuItems && Array.isArray(headerContent.menuItems) && headerContent.menuItems.length > 0 
    ? headerContent.menuItems 
    : [];

  return (
    <header className="w-full sticky top-0 z-50 isolate">
      {/* 2026-style: single bar, glassmorphism, subtle gradient border */}
      <div className="absolute inset-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/60 dark:border-white/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-orange-500/5 dark:from-amber-400/5 dark:to-orange-400/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand — left */}
          <Link
            href="/"
            className="flex items-center gap-3 min-w-0 group"
          >
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white text-sm font-bold shadow-lg shadow-orange-500/25 transition duration-300 group-hover:shadow-orange-500/40 group-hover:scale-105">
              MSO
            </span>
            <span className="hidden sm:block text-base font-semibold text-gray-900 dark:text-white truncate max-w-[180px] lg:max-w-none">
              {organizationName}
            </span>
          </Link>

          {/* Desktop nav — center */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {menuItems.map((item, index) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.id || index}
                    href={item.href || "/"}
                    className="relative px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-colors rounded-lg hover:bg-gray-100/80 dark:hover:bg-white/5"
                  >
                    <span className="relative z-10">{item.label || "Menu Item"}</span>
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-400/10 dark:to-orange-400/10 opacity-0 hover:opacity-100 transition-opacity" />
                  </Link>
                );
              } else if (item.type === "dropdown" && item.items) {
                return (
                  <div key={item.id || index} className="relative group">
                    <button className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-colors rounded-lg hover:bg-gray-100/80 dark:hover:bg-white/5">
                      <span>{item.label || "Dropdown"}</span>
                      <ChevronDown size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                    </button>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="rounded-2xl bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl shadow-gray-200/50 dark:shadow-black/30 border border-gray-200/80 dark:border-white/10 min-w-[200px] py-1.5">
                        {item.items.map((subitem, subIndex) => (
                          <Link
                            key={subitem.id || subIndex}
                            href={subitem.href || "/"}
                            className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-white/5 hover:text-amber-700 dark:hover:text-amber-400 transition-colors first:rounded-t-xl last:rounded-b-xl"
                          >
                            {subitem.label || "Submenu"}
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

          {/* Right: actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-white/5 transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <button
              onClick={handleWritePost}
              className="hidden md:flex items-center gap-2 h-9 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-sm font-medium shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-300 hover:scale-[1.02]"
            >
              <Edit size={16} />
              <span className="hidden lg:inline">Write</span>
            </button>

            {!loading && (
              <>
                {user ? (
                  <div className="relative" ref={userMenuRef}>
                    <button
                      onClick={() => setUserMenuOpen(!userMenuOpen)}
                      className="flex items-center gap-2 h-9 pl-2 pr-2.5 rounded-xl border border-gray-200/80 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 hover:bg-gray-100/80 dark:hover:bg-white/10 transition-colors"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 dark:from-amber-400/20 dark:to-orange-400/20 text-amber-700 dark:text-amber-400 font-semibold text-xs">
                        {user.name?.charAt(0)?.toUpperCase() || "U"}
                      </span>
                      <span className="hidden lg:inline text-sm font-medium text-gray-700 dark:text-gray-200 max-w-[100px] truncate">
                        {user.name}
                      </span>
                      <ChevronDown size={14} className="text-gray-500 dark:text-gray-400 hidden sm:block" />
                    </button>
                    {userMenuOpen && (
                      <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl shadow-gray-200/50 dark:shadow-black/30 border border-gray-200/80 dark:border-white/10 overflow-hidden z-50">
                        <div className="px-4 py-3 border-b border-gray-100 dark:border-white/10 bg-gray-50/50 dark:bg-white/5">
                          <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                            {user.email}
                          </p>
                        </div>
                        <Link
                          href={user.role === "ADMIN" ? "/admin" : "/user"}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-white/5 transition-colors"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          {user.role === "ADMIN" ? "Admin Panel" : "User Panel"}
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50/80 dark:hover:bg-red-500/10 transition-colors"
                        >
                          <LogOut size={16} />
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="flex items-center gap-2 h-9 px-4 rounded-xl border border-amber-500/30 dark:border-amber-400/30 text-amber-700 dark:text-amber-400 text-sm font-medium hover:bg-amber-50/80 dark:hover:bg-amber-500/10 transition-colors"
                  >
                    <User size={16} />
                    Login
                  </Link>
                )}
              </>
            )}

            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
              suppressHydrationWarning
            >
              {mounted ? (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />) : <Moon size={18} />}
            </button>

            <div className="hidden lg:flex items-center gap-1 ml-1 pl-2 border-l border-gray-200/80 dark:border-white/10">
              <a
                href={socialLinks.facebook || "https://facebook.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:text-[#1877F2] hover:bg-gray-100/80 dark:hover:bg-white/5 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={socialLinks.twitter || "https://twitter.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:text-[#1DA1F2] hover:bg-gray-100/80 dark:hover:bg-white/5 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href={socialLinks.youtube || "https://youtube.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:text-[#FF0000] hover:bg-gray-100/80 dark:hover:bg-white/5 transition-all"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100/80 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — 2026 full-bleed glass panel */}
      {open && (
        <div className="lg:hidden relative border-t border-gray-200/60 dark:border-white/10 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl">
          <div className="px-4 sm:px-6 py-5 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {menuItems.map((item, index) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.id || index}
                    href={item.href || "/"}
                    onClick={() => setOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-white/5 active:bg-gray-100 dark:active:bg-white/10 transition-colors"
                  >
                    {item.label || "Menu Item"}
                  </Link>
                );
              } else if (item.type === "dropdown" && item.items) {
                const menuKey = item.id || `menu-${index}`;
                const isOpen = mobileMenuOpen === menuKey;
                return (
                  <div key={item.id || index}>
                    <button
                      onClick={() => setMobileMenuOpen(isOpen ? null : menuKey)}
                      className="w-full flex justify-between items-center px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-white/5 transition-colors"
                    >
                      <span>{item.label || "Dropdown"}</span>
                      <ChevronDown size={18} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="pl-4 pr-2 pb-2 space-y-0.5">
                        {item.items.map((subitem, subIndex) => (
                          <Link
                            key={subitem.id || subIndex}
                            href={subitem.href || "/"}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2.5 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100/80 dark:hover:bg-white/5 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                          >
                            {subitem.label || "Submenu"}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })}

            <div className="pt-4 mt-2 border-t border-gray-200/60 dark:border-white/10 space-y-2">
              <button
                onClick={() => { handleWritePost(); setOpen(false); }}
                className="w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white text-base font-medium shadow-lg shadow-orange-500/25 active:scale-[0.98] transition-transform"
              >
                <Edit size={20} />
                Write a Post
              </button>

              {!loading && (
                <>
                  {user ? (
                    <>
                      <div className="px-4 py-3 rounded-xl bg-gray-50/80 dark:bg-white/5">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{user.email}</p>
                      </div>
                      <Link
                        href={user.role === "ADMIN" ? "/admin" : "/user"}
                        onClick={() => setOpen(false)}
                        className="flex items-center px-4 py-3 rounded-xl text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-white/5 transition-colors"
                      >
                        {user.role === "ADMIN" ? "Admin Panel" : "User Panel"}
                      </Link>
                      <button
                        onClick={() => { handleLogout(); setOpen(false); }}
                        className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-base text-red-600 dark:text-red-400 hover:bg-red-50/80 dark:hover:bg-red-500/10 transition-colors"
                      >
                        <LogOut size={18} />
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-2 h-11 rounded-xl border-2 border-amber-500/40 text-amber-700 dark:text-amber-400 font-medium hover:bg-amber-50/80 dark:hover:bg-amber-500/10 transition-colors"
                    >
                      <User size={18} />
                      Login
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
