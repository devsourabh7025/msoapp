"use client";

export default function AdSection() {
  return (
    <section className="bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-lg border-2 border-dashed border-gray-300 dark:border-slate-600 p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-gray-400 dark:text-gray-500 mb-2">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Advertisement Space
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              Horizontal ad banner (728x90 recommended)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
