import React from 'react'

export function WelcomeMessage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/60 dark:border-blue-700/60 rounded-2xl transition-colors duration-300">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25 flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">ClimAI</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Assistant météo intelligent</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 rounded-3xl p-6 shadow-sm transition-colors duration-300">
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Bonjour, je m'appelle <span className="font-semibold text-blue-600 dark:text-blue-400">ClimAI</span> et je suis votre nouvelle assistant météo. 
              Que puis-je faire pour vous ?
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 rounded-2xl p-4 text-center hover:shadow-md dark:hover:shadow-gray-800/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Questions texte</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Posez vos questions météo par écrit</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 rounded-2xl p-4 text-center hover:shadow-md dark:hover:shadow-gray-800/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Enregistrement audio</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Parlez directement à ClimAI</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 rounded-2xl p-4 text-center hover:shadow-md dark:hover:shadow-gray-800/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Export PDF</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Sauvegardez vos conversations</p>
          </div>
        </div>
      </div>
    </div>
  )
}
