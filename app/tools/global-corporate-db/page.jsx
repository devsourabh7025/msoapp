"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Search, Building2, MapPin, Briefcase, Globe, ChevronLeft } from "lucide-react";
import { TOP_100_COMPANIES } from "@/data/top100Companies";

const SECTORS = [...new Set(TOP_100_COMPANIES.map((c) => c.sector))].sort((a, b) => a.localeCompare(b));
const INDUSTRIES = [...new Set(TOP_100_COMPANIES.map((c) => c.industry).filter(Boolean))].sort((a, b) => a.localeCompare(b));

export default function GlobalCorporateDbPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sectorFilter, setSectorFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [sortBy, setSortBy] = useState("rank");

  const filtered = useMemo(() => {
    let result = [...TOP_100_COMPANIES];

    if (sectorFilter) {
      result = result.filter((c) => c.sector?.toLowerCase() === sectorFilter.toLowerCase());
    }

    if (industryFilter) {
      result = result.filter((c) => c.industry?.toLowerCase() === industryFilter.toLowerCase());
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.name?.toLowerCase().includes(q) ||
          c.description?.toLowerCase().includes(q) ||
          c.sector?.toLowerCase().includes(q) ||
          c.industry?.toLowerCase().includes(q) ||
          c.headquarters?.toLowerCase().includes(q)
      );
    }

    if (sortBy === "name") {
      result.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    } else if (sortBy === "sector") {
      result.sort((a, b) => (a.sector || "").localeCompare(b.sector || "") || (a.rank || 0) - (b.rank || 0));
    } else {
      result.sort((a, b) => (a.id || 0) - (b.id || 0));
    }

    return result;
  }, [searchQuery, sectorFilter, industryFilter, sortBy]);

  const bySector = useMemo(() => {
    const map = {};
    filtered.forEach((c) => {
      const s = c.sector || "Other";
      if (!map[s]) map[s] = [];
      map[s].push(c);
    });
    Object.keys(map).forEach((s) => {
      map[s].sort((a, b) => (a.id || 999) - (b.id || 999));
    });
    return map;
  }, [filtered]);

  const clearFilters = () => {
    setSearchQuery("");
    setSectorFilter("");
    setIndustryFilter("");
  };

  const hasActiveFilters = searchQuery.trim() || sectorFilter || industryFilter;

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
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Global Corporate Database</h1>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-6">
            Top 100 companies in the world by market cap and revenue. Searchable data for networking and market intelligence.
          </p>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap mb-6">
            <div className="flex-1 min-w-[200px] relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search by name, sector, industry, headquarters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 dark:focus:border-red-500 transition-colors"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={sectorFilter}
                onChange={(e) => setSectorFilter(e.target.value)}
                className="px-3 py-2.5 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 appearance-none pr-8 min-w-[160px]"
              >
                <option value="">All sectors</option>
                {SECTORS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <select
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="px-3 py-2.5 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 appearance-none pr-8 min-w-[160px]"
              >
                <option value="">All industries</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2.5 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 appearance-none pr-8"
              >
                <option value="rank">Sort: Rank</option>
                <option value="name">Sort: Name</option>
                <option value="sector">Sort: Sector</option>
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
              {filtered.length} of 100 companies
            </span>
          </div>

          <div className="space-y-8">
            {Object.entries(bySector)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([sector, companies]) => (
                <div key={sector}>
                  <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-emerald-600 rounded" />
                    {sector}
                    <span className="text-gray-500 dark:text-gray-400 font-normal normal-case">
                      ({companies.length})
                    </span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {companies.map((company) => (
                      <article
                        key={company.id}
                        className="border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/50 hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-colors p-5 rounded-xl"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                            {company.name}
                          </h3>
                          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 shrink-0">
                            #{company.id}
                          </span>
                        </div>
                        {company.industry && (
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                            <Briefcase size={14} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                            <span>{company.industry}</span>
                          </div>
                        )}
                        {company.headquarters && (
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                            <MapPin size={14} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                            <span>{company.headquarters}</span>
                          </div>
                        )}
                        {company.description && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mt-2 mb-3">
                            {company.description}
                          </p>
                        )}
                        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100 dark:border-white/5">
                          {company.foundedYear && (
                            <span className="text-[11px] text-gray-400 dark:text-gray-500">
                              Founded {company.foundedYear}
                            </span>
                          )}
                          {company.revenue && (
                            <span className="text-[11px] text-gray-400 dark:text-gray-500">
                              Revenue: {company.revenue}
                            </span>
                          )}
                          {company.employees && (
                            <span className="text-[11px] text-gray-400 dark:text-gray-500">
                              {company.employees} employees
                            </span>
                          )}
                          {company.website && (
                            <a
                              href={company.website.startsWith("http") ? company.website : `https://${company.website}`}
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
                </div>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
