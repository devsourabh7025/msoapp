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
    <header className="w-full sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      {/* Top Bar - Full Width */}
      <div className="w-full bg-orange-600 dark:bg-orange-700 py-2 sm:py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center justify-center">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-white text-center leading-tight">
              {organizationName}
            </h1>
          </Link>
        </div>
      </div>

      {/* Navigation Bar - Full Width */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left Side (Desktop) */}
            {/* <Link href="/" className="hidden lg:flex flex-shrink-0 mr-6">
              <div className="flex flex-col gap-0">
                <span className="text-base font-extrabold text-orange-600 dark:text-orange-500">
                  MSO
                </span>
              </div>
            </Link> */}

            {/* Logo - Left Side (Mobile) */}
            <Link href="/" className="flex lg:hidden flex-shrink-0">
              <div className="flex flex-col gap-0">
                <span className="text-base font-extrabold text-orange-600 dark:text-orange-500">
                  MSO
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Left Aligned */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-start">
              {menuItems.map((item, index) => {
                if (item.type === "link") {
                  return (
                    <Link
                      key={item.id || index}
                      href={item.href || "/"}
                      className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.label || "Menu Item"}
                    </Link>
                  );
                } else if (item.type === "dropdown" && item.items) {
                  return (
                    <div key={item.id || index} className="relative group">
                      <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
                        {item.label || "Dropdown"}
                        <ChevronDown size={14} />
                      </button>
                      <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700 min-w-[200px] z-50">
                        {item.items.map((subitem, subIndex) => (
                          <Link
                            key={subitem.id || subIndex}
                            href={subitem.href || "/"}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {subitem.label || "Submenu"}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Search - Hidden on mobile */}
              <button className="hidden sm:flex p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Search size={20} />
              </button>

              {/* Write Post Button - Hidden on mobile */}
              <button
                onClick={handleWritePost}
                className="hidden md:flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
              >
                <Edit size={16} />
                <span className="hidden lg:inline">Write</span>
              </button>

              {/* User Menu */}
              {!loading && (
                <>
                  {user ? (
                    <div className="relative" ref={userMenuRef}>
                      <button
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                        className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <User size={18} className="sm:w-5 sm:h-5" />
                        <span className="hidden lg:inline">{user.name}</span>
                        <ChevronDown size={14} className="hidden sm:block" />
                      </button>
                      {userMenuOpen && (
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                              {user.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {user.email}
                            </p>
                          </div>
                          <Link
                            href={user.role === "ADMIN" ? "/admin" : "/user"}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            {user.role === "ADMIN"
                              ? "Admin Panel"
                              : "User Panel"}
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
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
                      className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Login
                    </Link>
                  )}
                </>
              )}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Toggle theme"
                suppressHydrationWarning
              >
                {mounted ? (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />) : <Moon size={20} />}
              </button>

              {/* Social Icons - Hidden on mobile */}
              <div className="hidden lg:flex items-center gap-2 ml-2 pl-2 border-l border-gray-200 dark:border-gray-700">
                <a
                  href={socialLinks.facebook || "https://facebook.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href={socialLinks.twitter || "https://twitter.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href={socialLinks.youtube || "https://youtube.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={16} />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 animate-in slide-in-from-top duration-200">
          <div className="px-4 sm:px-6 py-4 space-y-2 max-h-[calc(100vh-72px)] overflow-y-auto">
            {menuItems.map((item, index) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.id || index}
                    href={item.href || "/"}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
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
                      onClick={() =>
                        setMobileMenuOpen(isOpen ? null : menuKey)
                      }
                      className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    >
                      <span>{item.label || "Dropdown"}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pl-4 space-y-1 mt-1 animate-in slide-in-from-top duration-200">
                        {item.items.map((subitem, subIndex) => (
                          <Link
                            key={subitem.id || subIndex}
                            href={subitem.href || "/"}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
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

            <button
              onClick={() => {
                handleWritePost();
                setOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-md mt-4 transition-colors"
            >
              <Edit size={20} />
              Write a Post
            </button>

            {!loading && (
              <>
                {user ? (
                  <>
                    <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-800 mt-4">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {user.email}
                      </p>
                    </div>
                    <Link
                      href={user.role === "ADMIN" ? "/admin" : "/user"}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    >
                      {user.role === "ADMIN" ? "Admin Panel" : "User Panel"}
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-base text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md mt-4 transition-colors"
                  >
                    Login
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
