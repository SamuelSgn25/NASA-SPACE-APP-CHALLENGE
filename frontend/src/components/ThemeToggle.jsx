import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme, isDark, mounted } = useTheme()

  const handleToggle = () => {
    console.log('Toggle clicked, current theme:', theme)
    toggleTheme()
  }

  if (!mounted) {
    return (
      <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800">
        <div className="w-6 h-6 animate-pulse bg-gray-300 dark:bg-gray-600 rounded"></div>
      </div>
    )
  }

  return (
    <button
      onClick={handleToggle}
      className="relative p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group"
      aria-label={`Basculer vers le mode ${isDark ? 'clair' : 'sombre'}`}
    >
      <div className="relative w-6 h-6">
        {/* Sun Icon */}
        <svg
          className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-300 ${
            isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        
        {/* Moon Icon */}
        <svg
          className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-300 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
      
      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Mode {isDark ? 'clair' : 'sombre'}
      </div>
    </button>
  )
}
