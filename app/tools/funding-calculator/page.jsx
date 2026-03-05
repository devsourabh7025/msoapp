"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calculator, ChevronLeft, RefreshCcw } from "lucide-react";

export default function FundingCalculatorPage() {
  const [monthlyBurn, setMonthlyBurn] = useState("");
  const [runwayMonths, setRunwayMonths] = useState("12");
  const [currentCash, setCurrentCash] = useState("");
  const [bufferMonths, setBufferMonths] = useState("3");

  const toNum = (v) => {
    const n = Number(String(v).replace(/,/g, "").trim());
    return Number.isFinite(n) ? n : 0;
  };

  const calc = useMemo(() => {
    const burn = toNum(monthlyBurn);
    const runway = Math.max(0, Math.floor(toNum(runwayMonths)));
    const buffer = Math.max(0, Math.floor(toNum(bufferMonths)));
    const cash = toNum(currentCash);
    const totalNeeded = burn * (runway + buffer);
    const gap = Math.max(0, totalNeeded - cash);
    return { burn, runway, buffer, cash, totalNeeded, gap };
  }, [monthlyBurn, runwayMonths, bufferMonths, currentCash]);

  const resetCalculator = () => {
    setMonthlyBurn("");
    setRunwayMonths("12");
    setCurrentCash("");
    setBufferMonths("3");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <Link href="/#tools-database" className="inline-flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400 hover:underline mb-8">
            <ChevronLeft size={16} /> Back to Tools & Database
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
              <Calculator className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">Tools & Database</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Funding Calculator</h1>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
            Estimate funding needed based on monthly burn, runway, and current cash. A simple runway-based calculator for founders.
          </p>

          <div className="border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/50 rounded-xl p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3 flex-wrap mb-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Runway & Funding Estimate</h2>
              <button
                type="button"
                onClick={resetCalculator}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-bold border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded"
              >
                <RefreshCcw size={16} />
                Reset
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-gray-600 dark:text-gray-400 mb-2">
                  Monthly burn (₹)
                </label>
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  value={monthlyBurn}
                  onChange={(e) => setMonthlyBurn(e.target.value)}
                  placeholder="e.g. 300000"
                  className="w-full h-11 px-4 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 dark:focus:border-red-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-gray-600 dark:text-gray-400 mb-2">
                  Current cash (₹)
                </label>
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  value={currentCash}
                  onChange={(e) => setCurrentCash(e.target.value)}
                  placeholder="e.g. 1200000"
                  className="w-full h-11 px-4 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 dark:focus:border-red-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-gray-600 dark:text-gray-400 mb-2">
                  Target runway (months)
                </label>
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  value={runwayMonths}
                  onChange={(e) => setRunwayMonths(e.target.value)}
                  placeholder="e.g. 12"
                  className="w-full h-11 px-4 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 dark:focus:border-red-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-[0.1em] uppercase text-gray-600 dark:text-gray-400 mb-2">
                  Buffer (months)
                </label>
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  value={bufferMonths}
                  onChange={(e) => setBufferMonths(e.target.value)}
                  placeholder="e.g. 3"
                  className="w-full h-11 px-4 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 dark:focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Total needed</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                  ₹{Math.round(calc.totalNeeded).toLocaleString("en-IN")}
                </div>
              </div>
              <div className="border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Cash available</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                  ₹{Math.round(calc.cash).toLocaleString("en-IN")}
                </div>
              </div>
              <div className="border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                <div className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">Funding gap</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                  ₹{Math.round(calc.gap).toLocaleString("en-IN")}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-4">
              Note: This is a quick estimate. It doesn&apos;t include revenue growth, one-time costs, or taxes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
