import React from 'react'

export function Footer() {
  return (
    <footer className="border-t border-gray-200/60 dark:border-gray-700/60 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <span>© 2025 ClimAI</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-xs">Built for NASA Space Apps Challenge</span>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <a 
              href="https://www.spaceappschallenge.org/2025/challenges/will-it-rain-on-my-parade/" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
            >
              Challenge Details
            </a>
            <span>•</span>
            <span>Will It Rain On My Parade?</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
