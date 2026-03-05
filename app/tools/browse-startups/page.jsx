"use client";

import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Search, Building2, MapPin, Briefcase, Globe, ChevronLeft, Sparkles } from "lucide-react";

export default function BrowseStartupsPage() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [industryFilter, setIndustryFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [unicornOnly, setUnicornOnly] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/public/startups-organisations");
        if (res.ok) {
          const data = await res.json();
          setList(data.list || []);
        } else {
          setList([]);
        }
      } catch {
        setList([]);
      } finally {
        setLoading(false);
      }
    };
    fetchList();
  }, []);

  const industries = useMemo(() => {
    const set = new Set();
    list.forEach((u) => u.industry?.trim() && set.add(u.industry.trim()));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [list]);

  const cities = useMemo(() => {
    const set = new Set();
    list.forEach((u) => u.city?.trim() && set.add(u.city.trim()));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [list]);

  const filtered = useMemo(() => {
    let result = [...list];
    if (typeFilter === "startup" || typeFilter === "company") {
      result = result.filter((u) => u.accountType === typeFilter);
    }
    if (industryFilter) {
      result = result.filter((u) => u.industry?.toLowerCase() === industryFilter.toLowerCase());
    }
    if (cityFilter) {
      result = result.filter((u) => u.city?.toLowerCase() === cityFilter.toLowerCase());
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (u) =>
          u.companyName?.toLowerCase().includes(q) ||
          u.description?.toLowerCase().includes(q) ||
          u.industry?.toLowerCase().includes(q)
      );
    }
    if (sortBy === "name") {
      result.sort((a, b) => (a.companyName || "").localeCompare(b.companyName || ""));
    } else if (sortBy === "newest") {
      result.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    } else if (sortBy === "industry") {
      result.sort((a, b) => (a.industry || "").localeCompare(b.industry || ""));
    }
    if (unicornOnly) {
      result = result.filter((u) => !!u.isUnicorn);
    }
    return result;
  }, [list, typeFilter, industryFilter, cityFilter, searchQuery, sortBy, unicornOnly]);

  const clearFilters = () => {
    setSearchQuery("");
    setTypeFilter("all");
    setIndustryFilter("");
    setCityFilter("");
    setUnicornOnly(false);
  };

  const hasActiveFilters =
    searchQuery.trim() || typeFilter !== "all" || industryFilter || cityFilter || unicornOnly;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <Link href="/#tools-database" className="inline-flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400 hover:underline mb-6">
            <ChevronLeft size={16} /> Back to Tools & Database
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">Tools & Database</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Browse Startups</h1>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-6">
            A searchable directory of registered Maharashtra startups and companies. Filter by type, industry, city, and more.
          </p>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap mb-6">
            <div className="flex-1 min-w-[200px] relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search by name, industry, description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 dark:focus:border-red-500 transition-colors"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setUnicornOnly((p) => !p)}
                className={`px-3 py-2.5 border text-sm font-bold rounded transition-colors ${
                  unicornOnly
                    ? "border-amber-300 bg-amber-50 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800"
                    : "border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-amber-300 dark:hover:border-amber-800"
                }`}
              >
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles size={14} className={unicornOnly ? "" : "text-amber-500"} />
                  Unicorns
                </span>
              </button>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-3 py-2.5 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 appearance-none pr-8"
              >
                <option value="all">All types</option>
                <option value="startup">Startup</option>
                <option value="company">Company</option>
              </select>
              <select
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="px-3 py-2.5 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 appearance-none pr-8 min-w-[140px]"
              >
                <option value="">All industries</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="px-3 py-2.5 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 appearance-none pr-8 min-w-[120px]"
              >
                <option value="">All cities</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2.5 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 appearance-none pr-8"
              >
                <option value="name">Sort: Name</option>
                <option value="newest">Sort: Newest</option>
                <option value="industry">Sort: Industry</option>
              </select>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
              {filtered.length} {filtered.length === 1 ? "profile" : "profiles"}
            </span>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="border border-gray-200 dark:border-white/10 p-6 rounded-xl animate-pulse">
                  <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-1/3 mb-4" />
                  <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-full mb-2" />
                  <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 border border-gray-200 dark:border-white/10 rounded-xl">
              <Building2 className="mx-auto text-gray-300 dark:text-gray-700 mb-3" size={48} />
              <p className="text-gray-500 dark:text-gray-400 mb-1">
                {hasActiveFilters
                  ? "No startups or companies match your filters."
                  : "No startups or companies listed yet."}
              </p>
              {hasActiveFilters && (
                <button onClick={clearFilters} className="text-sm font-bold text-red-600 dark:text-red-400 hover:underline mt-2">
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((org) => (
                <article
                  key={org._id}
                  className="border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/50 hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-colors p-6 rounded-xl flex flex-col"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      {org.companyName || "Unnamed"}
                    </h2>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {org.isUnicorn && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase border bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800 rounded">
                          <Sparkles size={12} />
                          Unicorn
                        </span>
                      )}
                      <span
                        className={`px-2 py-0.5 text-[10px] font-bold uppercase border rounded ${
                          org.accountType === "startup"
                            ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700"
                        }`}
                      >
                        {org.accountType}
                      </span>
                    </div>
                  </div>
                  {org.industry && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <Briefcase size={14} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>{org.industry}</span>
                    </div>
                  )}
                  {org.city && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <MapPin size={14} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>{org.city}</span>
                    </div>
                  )}
                  {org.description && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 mt-2 mb-4 flex-1">
                      {org.description}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-gray-100 dark:border-white/5">
                    {org.foundedYear && (
                      <span className="text-[11px] text-gray-400 dark:text-gray-500">Founded {org.foundedYear}</span>
                    )}
                    {org.teamSize && (
                      <span className="text-[11px] text-gray-400 dark:text-gray-500">Team: {org.teamSize}</span>
                    )}
                    {org.website && (
                      <a
                        href={org.website.startsWith("http") ? org.website : `https://${org.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        <Globe size={12} />
                        Website
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
