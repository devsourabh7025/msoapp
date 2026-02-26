"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const industries = [
  "Technology",
  "FinTech",
  "EdTech",
  "HealthTech",
  "AgriTech",
  "E-Commerce",
  "SaaS",
  "AI / ML",
  "CleanTech",
  "FoodTech",
  "Logistics",
  "Manufacturing",
  "Media & Entertainment",
  "Real Estate",
  "Retail",
  "Social Impact",
  "Other",
];

const teamSizes = [
  "Just me",
  "2-5",
  "6-10",
  "11-25",
  "26-50",
  "51-100",
  "100+",
];

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountType, setAccountType] = useState("individual");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [city, setCity] = useState("");
  const [foundedYear, setFoundedYear] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isOrg = accountType === "startup" || accountType === "company";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (isOrg && !companyName.trim()) {
      setError("Organisation name is required for startup/company accounts");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          accountType,
          companyName: companyName.trim(),
          phone: phone.trim(),
          website: website.trim(),
          industry,
          city: city.trim(),
          foundedYear: foundedYear.trim(),
          teamSize,
          description: description.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Registration failed. Please try again.");
        setLoading(false);
        return;
      }

      if (data.user) {
        setTimeout(() => {
          router.push("/login");
        }, 500);
      } else {
        setError(
          "Registration successful but user data not received. Please try logging in.",
        );
        setLoading(false);
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  const accountTypes = [
    {
      value: "individual",
      label: "Individual",
      desc: "Personal account for reading & contributing",
    },
    {
      value: "startup",
      label: "Startup",
      desc: "Register your startup & get featured",
    },
    {
      value: "company",
      label: "Company",
      desc: "Corporate account for your organisation",
    },
  ];

  const inputClass =
    "w-full h-11 px-4 border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 text-gray-900 dark:text-white text-sm outline-none focus:border-red-500 dark:focus:border-red-400 transition-colors";

  const labelClass =
    "block text-[11px] font-bold tracking-[0.1em] uppercase text-gray-600 dark:text-gray-400 mb-2";

  return (
    <div className="min-h-screen flex bg-white dark:bg-gray-950">
      {/* Left panel - branding */}
      <div className="hidden lg:flex lg:w-[420px] xl:w-[480px] shrink-0 bg-gray-950 dark:bg-gray-900 relative overflow-hidden items-end p-12">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-red-600" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative z-10">
          <Link href="/" className="inline-block">
            <span className="text-4xl font-extrabold tracking-tight text-red-600">
              MSO
            </span>
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-white leading-tight">
            Join Maharashtra&rsquo;s
            <br />
            largest startup
            <br />
            community.
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
            Create your account to publish stories, register your startup, and
            connect with entrepreneurs across Maharashtra.
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
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-lg mx-auto px-6 py-12">
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
              Create account
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Get started with your free account
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
              <label className={labelClass}>Account type</label>
              <div className="grid grid-cols-3 gap-2">
                {accountTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setAccountType(type.value)}
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
                    <span className="block text-[11px] text-gray-500 dark:text-gray-500 mt-0.5 leading-tight">
                      {type.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Organisation details section */}
            {isOrg && (
              <div className="border border-gray-200 dark:border-white/10 p-5 space-y-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-[2px] bg-red-600" />
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 dark:text-gray-400">
                    {accountType === "startup"
                      ? "Startup Details"
                      : "Company Details"}
                  </span>
                </div>

                <div>
                  <label className={labelClass}>
                    {accountType === "startup" ? "Startup name" : "Company name"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={
                      accountType === "startup"
                        ? "e.g. TechVentures Pvt Ltd"
                        : "e.g. Infosys Technologies"
                    }
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className={inputClass}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Industry</label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className={inputClass}
                      disabled={loading}
                    >
                      <option value="">Select industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>City</label>
                    <input
                      type="text"
                      placeholder="e.g. Pune"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={inputClass}
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Founded year</label>
                    <input
                      type="text"
                      placeholder="e.g. 2023"
                      value={foundedYear}
                      onChange={(e) => setFoundedYear(e.target.value)}
                      className={inputClass}
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Team size</label>
                    <select
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className={inputClass}
                      disabled={loading}
                    >
                      <option value="">Select size</option>
                      {teamSizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputClass}
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Website</label>
                    <input
                      type="url"
                      placeholder="https://example.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className={inputClass}
                      disabled={loading}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    About your{" "}
                    {accountType === "startup" ? "startup" : "company"}
                  </label>
                  <textarea
                    placeholder="Brief description of what you do, your mission, and what makes you unique..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-white/15 bg-white dark:bg-white/5 text-gray-900 dark:text-white text-sm outline-none focus:border-red-500 dark:focus:border-red-400 transition-colors resize-none"
                    disabled={loading}
                  />
                </div>

                <div className="pt-3 border-t border-gray-200 dark:border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-[2px] bg-gray-300 dark:bg-white/15" />
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 dark:text-gray-500">
                      Contact Person
                    </span>
                  </div>
                  <div>
                    <label className={labelClass}>
                      Contact person name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                      required
                      disabled={loading}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Personal details — only for individual accounts */}
            {!isOrg && (
              <div>
                <label className={labelClass}>
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  required
                  disabled={loading}
                />
              </div>
            )}

            <div>
              <label className={labelClass}>
                {isOrg ? "Business email" : "Email"} <span className="text-red-500">*</span>
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>
                  Password <span className="text-red-500">*</span>
                </label>
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
              <div>
                <label className={labelClass}>
                  Confirm <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={inputClass}
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 mt-0.5 accent-red-600"
                required
                disabled={loading}
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 dark:text-gray-400 leading-snug"
              >
                I agree to the{" "}
                <Link
                  href="#"
                  className="font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-red-600 hover:bg-red-700 text-white text-sm font-bold tracking-wide uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
