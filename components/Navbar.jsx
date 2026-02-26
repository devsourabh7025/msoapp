"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Menu, X, Search, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navbar() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const router = useRouter();
  const pathname = usePathname();
  const userMenuRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const [headerContent, setHeaderContent] = useState(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  }, [pathname]);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };
    if (userMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [userMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const closeOnLg = () => {
      if (typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches) {
        setMobileMenuOpen(false);
        setMobileDropdownOpen(null);
      }
    };
    window.addEventListener("resize", closeOnLg);
    return () => window.removeEventListener("resize", closeOnLg);
  }, []);

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-white dark:bg-gray-950">
        <div className="h-[3px] bg-red-600" />

        <div className="border-b border-gray-200 dark:border-white/10">
          <div className="max-w-[72rem] mx-auto px-4 sm:px-6">
            <div className="relative flex items-center justify-between h-14 sm:h-16">
              {/* LEFT: Mobile hamburger (for bottom nav only) */}
              <div className="lg:hidden shrink-0">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="h-9 w-9 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

              {/* LEFT: Desktop — empty spacer for balance */}
              <div className="hidden lg:block w-9" />

              {/* CENTER LOGO */}
              <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-red-600">MSO</span>
                <span className="hidden sm:block text-[10px] font-medium tracking-wide text-gray-500 dark:text-gray-400 uppercase leading-tight max-w-[140px]">
                  Maharashtra Startup Organisation
                </span>
              </Link>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="h-9 w-9 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {!loading && (
                  <>
                    {user ? (
                      <div className="relative" ref={userMenuRef}>
                        <button
                          onClick={() => setUserMenuOpen(!userMenuOpen)}
                          className="h-9 px-3 text-[12px] font-bold tracking-wide uppercase text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 flex items-center gap-1 transition-colors"
                        >
                          <span className="hidden sm:inline max-w-[80px] truncate">{user.name}</span>
                          <ChevronDown size={14} />
                        </button>
                        {userMenuOpen && (
                          <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-white/10 z-50">
                            <Link
                              href={user.role === "ADMIN" || user.role === "MANAGER" ? "/admin" : "/user"}
                              onClick={() => setUserMenuOpen(false)}
                              className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                            >
                              {user.role === "ADMIN" || user.role === "MANAGER" ? "Admin Panel" : "User Panel"}
                            </Link>
                            <button
                              onClick={handleLogout}
                              className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                            >
                              Logout
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href="/login"
                        className="h-9 px-4 text-[12px] font-bold tracking-wide uppercase text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 flex items-center transition-colors shrink-0"
                      >
                        Sign In
                      </Link>
                    )}
                  </>
                )}

                <button className="h-9 w-9 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white transition-colors shrink-0" aria-label="Search">
                  <Search size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop bottom nav bar */}
        <div className="border-b border-gray-100 dark:border-white/5 bg-white dark:bg-gray-950 hidden lg:block">
          <div className="max-w-[72rem] mx-auto px-6">
            <nav className="flex items-center gap-8 h-10">
              <Link
                href="/startups-organisations"
                className="text-[12px] font-bold tracking-wide uppercase text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Startups & Organisations
              </Link>
              {menuItems.map((item, index) => {
                  if (item.type === "link") {
                    return (
                      <Link key={item.id || index} href={item.href || "/"} className="text-[12px] font-bold tracking-wide uppercase text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                        {item.label}
                      </Link>
                    );
                  }
                  if (item.type === "dropdown" && item.items?.length) {
                    return (
                      <div key={item.id || index} className="relative group">
                        <button className="flex items-center gap-1 text-[12px] font-bold tracking-wide uppercase text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors h-10">
                          {item.label}
                          <ChevronDown size={12} />
                        </button>
                        <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                          <div className="bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-white/10 min-w-[200px] py-1">
                            {item.items.map((sub, i) => (
                              <Link key={sub.id || i} href={sub.href || "/"} className="block px-4 py-2.5 text-[13px] text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
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
        </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-[calc(3px+3.5rem)] sm:top-[calc(3px+4rem)] left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-white/10 max-h-[70vh] overflow-y-auto shadow-xl z-50">
            <div className="px-4 py-3">
              <div className="space-y-1">
                <Link
                  href="/startups-organisations"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-3 text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                >
                  Startups & Organisations
                </Link>
                {menuItems.length > 0 ? (
                <>
                  {menuItems.map((item, index) => {
                    if (item.type === "link") {
                      return (
                        <Link key={item.id || index} href={item.href || "/"} onClick={() => setMobileMenuOpen(false)}
                          className="block py-3 px-3 text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                          {item.label}
                        </Link>
                      );
                    }
                    if (item.type === "dropdown" && item.items?.length) {
                      const itemId = item.id || `dropdown-${index}`;
                      const isOpen = mobileDropdownOpen === itemId;
                      return (
                        <div key={item.id || index}>
                          <button
                            type="button"
                            onClick={() => setMobileDropdownOpen((prev) => (prev === itemId ? null : itemId))}
                            className="flex items-center justify-between w-full py-3 px-3 text-left text-sm font-bold text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                          >
                            <span>{item.label}</span>
                            <ChevronDown size={16} className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          {isOpen && (
                            <div className="pl-3 pb-2">
                              {item.items.map((sub, i) => (
                                <Link key={sub.id || i} href={sub.href || "/"} onClick={() => { setMobileMenuOpen(false); setMobileDropdownOpen(null); }}
                                  className="block py-2.5 px-3 pl-5 text-[13px] text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }
                    return null;
                  })}
                </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
