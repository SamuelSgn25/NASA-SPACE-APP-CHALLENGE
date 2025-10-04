import React, { useState } from 'react'

export function Sidebar({ isOpen, onClose, onNewChat, onExportPDF, hasMessages }) {
  const [activeFeature, setActiveFeature] = useState(null)

  const features = [
    {
      id: 'weather',
      name: 'Météo',
      icon: '🌤️',
      description: 'Prévisions météo'
    },
    {
      id: 'forecast',
      name: 'Prévisions',
      icon: '📊',
      description: 'Analyses détaillées'
    },
    {
      id: 'alerts',
      name: 'Alertes',
      icon: '⚠️',
      description: 'Notifications météo'
    },
    {
      id: 'history',
      name: 'Historique',
      icon: '📈',
      description: 'Données passées'
    }
  ]

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200/60 dark:border-gray-700/60 z-50 transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200/60 dark:border-gray-700/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">ClimAI</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Assistant météo</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 lg:hidden"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-6 space-y-4">
            <button
              onClick={onNewChat}
              className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-white rounded-2xl font-medium hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Nouvelle conversation
            </button>

            {hasMessages && (
              <button
                onClick={onExportPDF}
                className="w-full flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-200 rounded-2xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Exporter PDF
              </button>
            )}
          </div>

          {/* Features */}
          <div className="flex-1 p-6">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Fonctionnalités
            </h3>
            <div className="space-y-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 ${
                    activeFeature === feature.id
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="text-xl">{feature.icon}</span>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{feature.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{feature.description}</div>
                  </div>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${activeFeature === feature.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200/60 dark:border-gray-700/60">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Utilisateur</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Mode gratuit</div>
              </div>
              <div className="h-2 w-2 rounded-full bg-green-400 dark:bg-green-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
