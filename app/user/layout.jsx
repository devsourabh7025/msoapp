"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FileText,
  PlusCircle,
  User as UserIcon,
  Menu,
  X,
  LogOut,
  Home,
} from "lucide-react";

export default function UserLayout({ children }) {
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
        if (data.user?.role === "ADMIN" || data.user?.role === "MANAGER") {
          router.push("/admin");
        }
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      router.push("/login");
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const menuItems = [
    { name: "My Posts", href: "/user", icon: FileText },
    { name: "Create Post", href: "/user/create-post", icon: PlusCircle },
    { name: "Profile", href: "/user/profile", icon: UserIcon },
  ];

  const isOrg = user?.accountType === "startup" || user?.accountType === "company";
  const accountLabel = user?.accountType === "startup"
    ? "Startup"
    : user?.accountType === "company"
    ? "Company"
    : "Individual";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-gray-950 text-white transition-all duration-300 z-40 ${
          sidebarOpen ? "w-56" : "w-0"
        } overflow-hidden`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="px-4 py-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[3px] bg-red-600" />
                <h1 className="text-sm font-bold tracking-wide uppercase text-white">
                  Dashboard
                </h1>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="md:hidden text-gray-500 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            {user && (
              <div className="mt-3 flex items-center gap-2">
                <div className="w-7 h-7 bg-red-600 flex items-center justify-center text-white text-[11px] font-bold shrink-0">
                  {isOrg
                    ? (user.companyName?.charAt(0)?.toUpperCase() || "O")
                    : (user.name?.charAt(0)?.toUpperCase() || "U")}
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold text-white truncate">
                    {isOrg ? (user.companyName || user.name) : user.name}
                  </p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                    {accountLabel}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium transition-colors ${
                    active
                      ? "bg-white text-gray-950"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} className={active ? "text-red-600" : ""} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="px-3 py-3 border-t border-white/10 space-y-2">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <LogOut size={14} />
              Logout
            </button>
            <p className="text-[10px] text-gray-600 tracking-wide px-3">
              &copy; {new Date().getFullYear()} MSO
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div
        className={`transition-all duration-300 ${sidebarOpen ? "md:ml-56" : "md:ml-0"}`}
      >
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="px-4 h-12 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-1.5 text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Menu size={18} />
              </button>
              <span className="hidden sm:block text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400">
                {pathname === "/user"
                  ? "My Posts"
                  : pathname
                      .replace("/user/", "")
                      .replace(/-/g, " ")}
              </span>
            </div>
            <Link
              href="/"
              className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-bold tracking-wide uppercase text-gray-500 hover:text-red-600 border border-gray-200 hover:border-red-600 transition-colors"
            >
              <Home size={13} />
              View Site
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 max-w-7xl mx-auto">{children}</main>
      </div>
    </div>
  );
}
