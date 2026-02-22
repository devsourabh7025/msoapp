"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FileText,
  PlusCircle,
  Settings,
  Menu,
  X,
  Users,
  Shield,
  Clock,
  Tag,
  Megaphone,
  FileStack,
} from "lucide-react";

function AdminLayoutContent({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

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
      name: "Pages",
      href: "/admin/pages",
      icon: FileStack,
    },
    {
      name: "Customise",
      href: "/admin/customise",
      icon: Settings,
    },
  ];

  return (
    <div className="admin-panel min-h-screen bg-white">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-black text-white transition-all duration-300 z-40 border-r border-gray-800 ${
          sidebarOpen ? "w-56" : "w-0"
        } overflow-hidden`}
      >
        <div className="h-full flex flex-col">
          {/* Logo/Brand */}
          <div className="p-3 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg font-bold text-white">
                  Admin Panel
                </h1>
                <p className="text-[10px] text-gray-400 mt-0.5">
                  Administration
                </p>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="md:hidden text-gray-400 hover:text-white transition"
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
              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex items-center gap-2 px-3 py-2 transition-all duration-200 ${
                      isActive
                        ? "bg-white text-black"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={
                        isActive
                          ? "text-black"
                          : "text-gray-400 group-hover:text-white"
                      }
                    />
                    <span className="font-medium text-sm">{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-1 h-1 bg-black"></div>
                    )}
                  </Link>
                </div>
              );
            })}

            {/* Admin Section */}
            {user?.role === "ADMIN" && (
              <>
                <div className="pt-2 mt-2 border-t border-gray-800">
                  <div className="px-3 py-1.5 flex items-center gap-1.5 text-gray-400 text-[10px] font-semibold uppercase tracking-wider">
                    <Shield size={12} />
                    System
                  </div>
                </div>
                {adminMenuItems.map((item) => {
                  const Icon = item.icon;
                  const isCustomise = item.href === "/admin/customise";
                  const isActive = isCustomise
                    ? pathname === item.href ||
                      pathname.startsWith(item.href + "/")
                    : pathname === item.href;

                  return (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className={`group flex items-center gap-2 px-3 py-2 transition-all duration-200 ${
                          isActive
                            ? "bg-white text-black"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        }`}
                      >
                        <Icon
                          size={18}
                          className={
                            isActive
                              ? "text-black"
                              : "text-gray-400 group-hover:text-white"
                          }
                        />
                        <span className="font-medium text-sm">
                          {item.name}
                        </span>
                        {isActive && (
                          <div className="ml-auto w-1 h-1 bg-black"></div>
                        )}
                      </Link>
                    </div>
                  );
                })}
              </>
            )}
          </nav>

          {/* Footer */}
          <div className="p-2 border-t border-gray-800">
            <div className="text-[10px] text-gray-400 text-center">
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
        <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="px-4 py-2 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1.5 text-gray-600 hover:text-black hover:bg-gray-100 transition"
            >
              <Menu size={18} />
            </button>
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-black hover:bg-gray-100 border border-gray-300 transition"
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
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-gray-500">Loading admin panel...</div>
        </div>
      }
    >
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </Suspense>
  );
}
