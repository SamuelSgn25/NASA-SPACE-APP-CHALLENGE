import React from 'react'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 dark:border-gray-700/60 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-gray-900/80 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/40">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-400 dark:bg-green-500 border-2 border-white dark:border-gray-900 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                ClimAI
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Assistant météo intelligent</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full transition-colors duration-300">
              <div className="h-2 w-2 rounded-full bg-green-400 dark:bg-green-500 animate-pulse"></div>
              <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">En ligne</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
