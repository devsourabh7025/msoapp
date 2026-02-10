"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  FileText,
  PlusCircle,
  Settings,
  Menu,
  X,
  Users,
  Shield,
  ArrowUpDown,
  ChevronRight,
  Clock,
  Layout,
  Tag,
  Sparkles,
  Star,
  Compass,
  TrendingUp,
  Megaphone,
} from "lucide-react";

function AdminLayoutContent({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [customiseExpanded, setCustomiseExpanded] = useState(false);
  const [homepageSectionsExpanded, setHomepageSectionsExpanded] =
    useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    // Auto-expand customise menu if on customise pages
    if (pathname.startsWith("/admin/customise")) {
      setCustomiseExpanded(true);
      // Auto-expand homepage sections submenu if on any homepage section page
      if (
        pathname.startsWith("/admin/customise/hero") ||
        pathname.startsWith("/admin/customise/spotlight") ||
        pathname.startsWith("/admin/customise/featured") ||
        pathname.startsWith("/admin/customise/explore") ||
        pathname.startsWith("/admin/customise/trending") ||
        pathname === "/admin/customise" ||
        searchParams?.get("section")
      ) {
        setHomepageSectionsExpanded(true);
      }
    }
  }, [pathname, searchParams]);

  // Homepage sections menu items
  const homepageSections = [
    { id: "hero", name: "Hero", icon: Layout },
    { id: "spotlight", name: "Spotlight", icon: Sparkles },
    { id: "featured", name: "Featured", icon: Star },
    { id: "explore", name: "Explore", icon: Compass },
    { id: "trending", name: "Trending", icon: TrendingUp },
  ];

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/me");
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        // Only ADMIN role can access admin panel - redirect all others to user panel
        if (data.user?.role !== "ADMIN") {
          router.push("/user");
        }
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      router.push("/login");
    }
  };

  const menuItems = [
    {
      name: "Posts",
      href: "/admin",
      icon: FileText,
    },
    {
      name: "Add Post",
      href: "/admin/add-post",
      icon: PlusCircle,
    },
  ];

  const adminMenuItems = [
    {
      name: "All Users",
      href: "/admin/users",
      icon: Users,
    },
    {
      name: "All Posts",
      href: "/admin/posts",
      icon: FileText,
    },
    {
      name: "Categories",
      href: "/admin/categories",
      icon: Tag,
    },
    {
      name: "Post Requests",
      href: "/admin/post-requests",
      icon: Clock,
    },
    {
      name: "Ads Setup",
      href: "/admin/ads",
      icon: Megaphone,
    },
    {
      name: "Customise",
      href: "/admin/customise",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white transition-all duration-300 z-40 shadow-2xl ${
          sidebarOpen ? "w-56" : "w-0"
        } overflow-hidden`}
      >
        <div className="h-full flex flex-col">
          {/* Logo/Brand */}
          <div className="p-3 border-b border-slate-700/50">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Admin Panel
                </h1>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Administration
                </p>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="md:hidden text-slate-400 hover:text-white transition"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              // More specific active check to avoid multiple highlights
              let isActive = false;
              if (item.href === "/admin") {
                // Posts should only be active on exact /admin path
                isActive = pathname === "/admin";
              } else if (item.href === "/admin/add-post") {
                // Add Post should only be active on exact /admin/add-post path
                isActive = pathname === "/admin/add-post";
              } else {
                // Customise should be active on /admin/customise and its sub-routes
                isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");
              }
              const isCustomise = item.href === "/admin/customise";

              return (
                <div key={item.href}>
                  {isCustomise ? (
                    <div>
                      <button
                        onClick={() => setCustomiseExpanded(!customiseExpanded)}
                        className={`group w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                          isActive &&
                          pathname !== "/admin/customise/homepage-order"
                            ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md shadow-red-500/30"
                            : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                        }`}
                      >
                        <Icon
                          size={18}
                          className={
                            isActive &&
                            pathname !== "/admin/customise/homepage-order"
                              ? "text-white"
                              : "text-slate-400 group-hover:text-white"
                          }
                        />
                        <span className="font-medium text-sm flex-1 text-left">
                          {item.name}
                        </span>
                        <ChevronRight
                          size={14}
                          className={`transition-transform duration-200 ${
                            customiseExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {customiseExpanded && (
                        <div className="ml-4 mt-0.5 space-y-0.5">
                          <div>
                            <button
                              onClick={() =>
                                setHomepageSectionsExpanded(
                                  !homepageSectionsExpanded,
                                )
                              }
                              className={`group w-full flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm ${
                                pathname === "/admin/customise" ||
                                searchParams?.get("section")
                                  ? "bg-slate-700/50 text-white"
                                  : "text-slate-400 hover:bg-slate-700/30 hover:text-white"
                              }`}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                              <span className="flex-1 text-left">
                                Homepage Sections
                              </span>
                              <ChevronRight
                                size={12}
                                className={`transition-transform duration-200 ${
                                  homepageSectionsExpanded ? "rotate-90" : ""
                                }`}
                              />
                            </button>
                            {homepageSectionsExpanded && (
                              <div className="ml-4 mt-0.5 space-y-0.5">
                                {homepageSections.map((section) => {
                                  const SectionIcon = section.icon;
                                  const isSectionActive =
                                    pathname ===
                                    `/admin/customise/${section.id}`;
                                  return (
                                    <Link
                                      key={section.id}
                                      href={`/admin/customise/${section.id}`}
                                      className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-xs ${
                                        isSectionActive
                                          ? "bg-slate-600/50 text-white"
                                          : "text-slate-400 hover:bg-slate-700/30 hover:text-white"
                                      }`}
                                    >
                                      <SectionIcon size={11} />
                                      <span>{section.name}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                          <Link
                            href="/admin/customise/homepage-order"
                            className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm ${
                              pathname === "/admin/customise/homepage-order"
                                ? "bg-slate-700/50 text-white"
                                : "text-slate-400 hover:bg-slate-700/30 hover:text-white"
                            }`}
                          >
                            <ArrowUpDown size={12} />
                            <span>Homepage Order</span>
                          </Link>
                          <Link
                            href="/admin/customise/header"
                            className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm ${
                              pathname === "/admin/customise/header"
                                ? "bg-slate-700/50 text-white"
                                : "text-slate-400 hover:bg-slate-700/30 hover:text-white"
                            }`}
                          >
                            <Layout size={12} />
                            <span>Header</span>
                          </Link>
                          <Link
                            href="/admin/customise/footer"
                            className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm ${
                              pathname === "/admin/customise/footer"
                                ? "bg-slate-700/50 text-white"
                                : "text-slate-400 hover:bg-slate-700/30 hover:text-white"
                            }`}
                          >
                            <Layout size={12} />
                            <span>Footer</span>
                          </Link>
                          <Link
                            href="/admin/customise/post"
                            className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm ${
                              pathname === "/admin/customise/post"
                                ? "bg-slate-700/50 text-white"
                                : "text-slate-400 hover:bg-slate-700/30 hover:text-white"
                            }`}
                          >
                            <FileText size={12} />
                            <span>Post</span>
                          </Link>
                          <Link
                            href="/admin/customise/sidebar"
                            className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm ${
                              pathname === "/admin/customise/sidebar"
                                ? "bg-slate-700/50 text-white"
                                : "text-slate-400 hover:bg-slate-700/30 hover:text-white"
                            }`}
                          >
                            <Layout size={12} />
                            <span>Sidebar</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`group flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md shadow-red-500/30"
                          : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={
                          isActive
                            ? "text-white"
                            : "text-slate-400 group-hover:text-white"
                        }
                      />
                      <span className="font-medium text-sm">{item.name}</span>
                      {isActive && (
                        <div className="ml-auto w-1 h-1 rounded-full bg-white"></div>
                      )}
                    </Link>
                  )}
                </div>
              );
            })}

            {/* Admin Section */}
            {user?.role === "ADMIN" && (
              <>
                <div className="pt-2 mt-2 border-t border-slate-700/50">
                  <div className="px-3 py-1.5 flex items-center gap-1.5 text-slate-400 text-[10px] font-semibold uppercase tracking-wider">
                    <Shield size={12} />
                    System
                  </div>
                </div>
                {adminMenuItems.map((item) => {
                  const Icon = item.icon;
                  const isCustomise = item.href === "/admin/customise";
                  let isActive = false;
                  if (isCustomise) {
                    isActive =
                      pathname === item.href ||
                      pathname.startsWith(item.href + "/homepage-order") ||
                      pathname.startsWith(item.href + "/hero") ||
                      pathname.startsWith(item.href + "/spotlight") ||
                      pathname.startsWith(item.href + "/featured") ||
                      pathname.startsWith(item.href + "/explore") ||
                      pathname.startsWith(item.href + "/trending") ||
                      pathname.startsWith(item.href + "/header") ||
                      pathname.startsWith(item.href + "/footer") ||
                      pathname.startsWith(item.href + "/post") ||
                      pathname.startsWith(item.href + "/sidebar");
                  } else {
                    isActive = pathname === item.href;
                  }

                  return (
                    <div key={item.href}>
                      {isCustomise ? (
                        <div>
                          <button
                            onClick={() =>
                              setCustomiseExpanded(!customiseExpanded)
                            }
                            className={`group w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                              isActive &&
                              pathname !== "/admin/customise/homepage-order" &&
                              pathname !== "/admin/customise/header" &&
                              pathname !== "/admin/customise/footer" &&
                              pathname !== "/admin/customise/post" &&
                              pathname !== "/admin/customise/sidebar"
                                ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md shadow-purple-500/30"
                                : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                            }`}
                          >
                            <Icon
                              size={18}
                              className={
                                isActive &&
                                pathname !== "/admin/customise/homepage-order"
                                  ? "text-white"
                                  : "text-slate-400 group-hover:text-white"
                              }
                            />
                            <span className="font-medium text-sm flex-1 text-left">
                              {item.name}
                            </span>
                            <ChevronRight
                              size={14}
                              className={`transition-transform duration-200 ${
                                customiseExpanded ? "rotate-90" : ""
                              }`}
                            />
                          </button>
                          {customiseExpanded && (
                            <div className="ml-4 mt-0.5 space-y-0.5">
                              <div>
                                <button
                                  onClick={() =>
                                    setHomepageSectionsExpanded(
                                      !homepageSectionsExpanded,
                                    )
                                  }
                                  className={`group w-full flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm ${
                                    pathname === "/admin/customise" ||
                                    pathname.startsWith(
                                      "/admin/customise/hero",
                                    ) ||
                                    pathname.startsWith(
                                      "/admin/customise/spotlight",
                                    ) ||
                                    pathname.startsWith(
                                      "/admin/customise/featured",
                                    ) ||
                                    pathname.startsWith(
                                      "/admin/customise/explore",
                                    ) ||
                                    pathname.startsWith(
                                      "/admin/customise/trending",
                                    ) ||
                                    searchParams?.get("section")
                                      ? "bg-slate-700/50 text-white"
                                      : "text-slate-400 hover:bg-slate-700/30 hover:text-white"
                                  }`}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                  <span className="flex-1 text-left">
                                    Homepage Sections
                                  </span>
                                  <ChevronRight
                                    size={12}
                                    className={`transition-transform duration-200 ${
                                      homepageSectionsExpanded
                                        ? "rotate-90"
                                        : ""
                                    }`}
                                  />
                                </button>
                                {homepageSectionsExpanded && (
                                  <div className="ml-4 mt-0.5 space-y-0.5">
                                    {homepageSections.map((section) => {
                                      const SectionIcon = section.icon;
                                      const isSectionActive =
                                        pathname ===
                                        `/admin/customise/${section.id}`;
                                      return (
                                        <Link
                                          key={section.id}
                                          href={`/admin/customise/${section.id}`}
                                          className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-xs ${
                                            isSectionActive
                                              ? "bg-slate-600/50 text-white"
                                              : "text-slate-400 hover:bg-slate-700/30 hover:text-white"
                                          }`}
                                        >
                                          <SectionIcon size={11} />
                                          <span>{section.name}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                              <Link
                                href="/admin/customise/homepage-order"
                                className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm ${
                                  pathname === "/admin/customise/homepage-order"
                                    ? "bg-slate-700/50 text-white"
                                    : "text-slate-400 hover:bg-slate-700/30 hover:text-white"
                                }`}
                              >
                                <ArrowUpDown size={12} />
                                <span>Homepage Order</span>
                              </Link>
                              <Link
                                href="/admin/customise/header"
                                className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm ${
                                  pathname === "/admin/customise/header"
                                    ? "bg-slate-700/50 text-white"
                                    : "text-slate-400 hover:bg-slate-700/30 hover:text-white"
                                }`}
                              >
                                <Layout size={12} />
                                <span>Header</span>
                              </Link>
                              <Link
                                href="/admin/customise/footer"
                                className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm ${
                                  pathname === "/admin/customise/footer"
                                    ? "bg-slate-700/50 text-white"
                                    : "text-slate-400 hover:bg-slate-700/30 hover:text-white"
                                }`}
                              >
                                <Layout size={12} />
                                <span>Footer</span>
                              </Link>
                              <Link
                                href="/admin/customise/post"
                                className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm ${
                                  pathname === "/admin/customise/post"
                                    ? "bg-slate-700/50 text-white"
                                    : "text-slate-400 hover:bg-slate-700/30 hover:text-white"
                                }`}
                              >
                                <FileText size={12} />
                                <span>Post</span>
                              </Link>
                              <Link
                                href="/admin/customise/sidebar"
                                className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 text-sm ${
                                  pathname === "/admin/customise/sidebar"
                                    ? "bg-slate-700/50 text-white"
                                    : "text-slate-400 hover:bg-slate-700/30 hover:text-white"
                                }`}
                              >
                                <Layout size={12} />
                                <span>Sidebar</span>
                              </Link>
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`group flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                            isActive
                              ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md shadow-purple-500/30"
                              : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                          }`}
                        >
                          <Icon
                            size={18}
                            className={
                              isActive
                                ? "text-white"
                                : "text-slate-400 group-hover:text-white"
                            }
                          />
                          <span className="font-medium text-sm">
                            {item.name}
                          </span>
                          {isActive && (
                            <div className="ml-auto w-1 h-1 rounded-full bg-white"></div>
                          )}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </>
            )}
          </nav>

          {/* Footer */}
          <div className="p-2 border-t border-slate-700/50">
            <div className="text-[10px] text-slate-400 text-center">
              © 2024 MSO Admin
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${sidebarOpen ? "md:ml-56" : "md:ml-0"}`}
      >
        {/* Top Bar */}
        <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-20 shadow-sm">
          <div className="px-4 py-2 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
            >
              <Menu size={18} />
            </button>
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
              >
                View Site
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 max-w-7xl mx-auto">{children}</main>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center">
          <div className="text-gray-500">Loading admin panel...</div>
        </div>
      }
    >
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </Suspense>
  );
}
