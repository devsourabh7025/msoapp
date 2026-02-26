"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const accountTypes = [
  {
    value: "individual",
    label: "Individual",
    desc: "Personal account",
  },
  {
    value: "startup",
    label: "Startup",
    desc: "Startup account",
  },
  {
    value: "company",
    label: "Company",
    desc: "Company account",
  },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("individual");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isOrg = accountType === "startup" || accountType === "company";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, accountType }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed. Please check your credentials.");
        setLoading(false);
        return;
      }

      if (!data.user) {
        setError("Login successful but user data not received. Please try again.");
        setLoading(false);
        return;
      }

      if (data.user?.role === "ADMIN" || data.user?.role === "MANAGER") {
        router.push("/admin");
      } else {
        router.push("/user");
      }
      router.refresh();
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  const inputClass =
    "w-full h-11 px-4 border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 text-gray-900 dark:text-white text-sm outline-none focus:border-red-500 dark:focus:border-red-400 transition-colors";
  const labelClass =
    "block text-[11px] font-bold tracking-[0.1em] uppercase text-gray-600 dark:text-gray-400 mb-2";

  return (
    <div className="min-h-screen flex bg-white dark:bg-gray-950">
      {/* Left panel - branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-950 dark:bg-gray-900 relative overflow-hidden items-end p-12">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-red-600" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10">
          <Link href="/" className="inline-block">
            <span className="text-4xl font-extrabold tracking-tight text-red-600">
              MSO
            </span>
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-white leading-tight">
            Welcome back to<br />
            Maharashtra&rsquo;s startup<br />
            ecosystem.
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
            Sign in to access your dashboard, manage your content, and stay
            connected with the latest startup stories.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="w-8 h-[3px] bg-red-600" />
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-500">
              Startups &middot; Companies &middot; Individuals
            </span>
          </div>
        </div>
      </div>

      {/* Right panel - form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-10">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-red-600">
                MSO
              </span>
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Choose your account type and enter your credentials
            </p>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Account type selector */}
            <div>
              <label className={labelClass}>Sign in as</label>
              <div className="grid grid-cols-3 gap-2">
                {accountTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => {
                      setAccountType(type.value);
                      setError("");
                    }}
                    className={`p-3 border text-left transition-colors ${
                      accountType === type.value
                        ? "border-red-600 dark:border-red-400 bg-red-50 dark:bg-red-500/10"
                        : "border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/20"
                    }`}
                  >
                    <span
                      className={`block text-sm font-bold ${
                        accountType === type.value
                          ? "text-red-600 dark:text-red-400"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {type.label}
                    </span>
                    <span className="block text-[10px] text-gray-500 dark:text-gray-500 mt-0.5">
                      {type.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelClass}>
                {isOrg ? "Business email" : "Email"}
              </label>
              <input
                type="email"
                placeholder={isOrg ? "contact@yourcompany.com" : "you@example.com"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                required
                disabled={loading}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-600 dark:text-gray-400">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-[11px] font-bold tracking-wide uppercase text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                >
                  Forgot?
                </Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
                required
                disabled={loading}
              />
            </div>

            <div className="flex items-center gap-2.5">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 accent-red-600"
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-red-600 hover:bg-red-700 text-white text-sm font-bold tracking-wide uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading
                ? "Signing in..."
                : isOrg
                ? `Sign in as ${accountType === "startup" ? "Startup" : "Company"}`
                : "Sign In"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
