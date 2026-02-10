export default function Advertisement() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 overflow-hidden backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-gray-300/50 dark:hover:shadow-gray-800/50">
      <div className="p-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full mb-4">
          <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
            Advertisement
          </span>
        </div>
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-white">AD</span>
          </div>
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Responsive News & Magazine
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
            Premium WordPress Theme
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95">
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
}
