"use client";

import { useState, useEffect, useMemo } from "react";
import { BarChart3, Eye, Calendar, TrendingUp } from "lucide-react";

export default function AdminAnalytics() {
  const [loading, setLoading] = useState(true);
  const [totalViews, setTotalViews] = useState(0);
  const [todayViews, setTodayViews] = useState(0);
  const [monthWiseViews, setMonthWiseViews] = useState([]);
  const [filterYear, setFilterYear] = useState("");

  const currentYear = new Date().getFullYear();
  const yearOptions = useMemo(() => {
    const list = [{ value: "", label: "Last 12 months" }];
    for (let y = currentYear; y >= currentYear - 4; y--) list.push({ value: String(y), label: String(y) });
    return list;
  }, [currentYear]);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filterYear) params.set("year", filterYear);
      const url = `/api/admin/analytics${params.toString() ? `?${params.toString()}` : ""}`;
      const response = await fetch(url, { credentials: "include" });
      if (response.ok) {
        const data = await response.json();
        setTotalViews(data.totalViews ?? 0);
        setTodayViews(data.todayViews ?? 0);
        setMonthWiseViews(data.monthWiseViews ?? []);
      } else {
        setTotalViews(0);
        setTodayViews(0);
        setMonthWiseViews([]);
      }
    } catch (error) {
      console.error("Error fetching analytics:", error);
      setTotalViews(0);
      setTodayViews(0);
      setMonthWiseViews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, [filterYear]);

  const last30DaysTotal = useMemo(
    () => monthWiseViews.reduce((s, d) => s + (d.views || 0), 0),
    [monthWiseViews]
  );
  const maxMonthViews = useMemo(
    () => Math.max(1, ...monthWiseViews.map((d) => Number(d.views || 0))),
    [monthWiseViews]
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-red-600 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-extrabold text-gray-900">Analytics</h1>
          <p className="text-xs text-gray-400 mt-0.5">
            Total views, today&apos;s views, and month-wise bar chart
          </p>
        </div>
        <button
          onClick={fetchAnalytics}
          className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-bold border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <BarChart3 size={14} />
          Refresh
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="bg-white border border-gray-200 p-3">
          <div className="flex items-center gap-2">
            <Eye size={14} className="text-gray-500" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-gray-500">
              Total views
            </span>
          </div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">
            {totalViews.toLocaleString()}
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-3">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-red-600" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-red-600">
              Today&apos;s views
            </span>
          </div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">
            {todayViews.toLocaleString()}
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-3 sm:col-span-1 col-span-2">
          <div className="flex items-center gap-2">
            <TrendingUp size={14} className="text-green-600" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-green-600">
              Last 12 months
            </span>
          </div>
          <div className="text-2xl font-extrabold text-gray-900 mt-1">
            {last30DaysTotal.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Month-wise bar chart */}
      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="px-3 py-2.5 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-sm font-bold text-gray-900">Month-wise views</h2>
              <p className="text-[10px] text-gray-500 mt-0.5">
                {filterYear
                  ? `Views for ${filterYear}. Data is recorded when visitors open published posts.`
                  : "Views per month (last 12 months). Data is recorded when visitors open published posts."}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
                className="h-9 px-3 text-sm border border-gray-200 bg-white text-gray-900 outline-none focus:border-red-500 transition-colors"
              >
                {yearOptions.map((opt) => (
                  <option key={opt.value || "last"} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="p-4">
          {monthWiseViews.length === 0 ? (
            <div className="py-12 text-center text-sm text-gray-400">
              No month-wise data yet. Views will appear here as visitors read published posts.
            </div>
          ) : (
            <div className="flex items-end justify-between gap-1 min-h-[200px]" style={{ gap: "4px" }}>
              {monthWiseViews.map((row) => {
                const views = Number(row.views || 0);
                const heightPct = maxMonthViews ? (views / maxMonthViews) * 100 : 0;
                return (
                  <div
                    key={row.month}
                    className="flex-1 flex flex-col items-center min-w-0"
                    title={`${row.label}: ${views.toLocaleString()} views`}
                  >
                    <div className="w-full flex flex-col items-center justify-end flex-1 max-h-[180px]">
                      <span className="text-[10px] font-semibold text-gray-600 mb-0.5">
                        {views > 0 ? views.toLocaleString() : "0"}
                      </span>
                      <div
                        className="w-full max-w-[32px] bg-red-600 rounded-t transition-all min-h-[4px]"
                        style={{ height: `${Math.max(heightPct, 0)}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-medium text-gray-500 mt-2 truncate w-full text-center">
                      {row.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
