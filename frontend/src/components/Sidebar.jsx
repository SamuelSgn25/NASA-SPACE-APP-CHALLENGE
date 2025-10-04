import React, { useState } from 'react'

export function Sidebar({ isOpen, onClose, onNewChat, onExportPDF, hasMessages }) {
  const [activeFeature, setActiveFeature] = useState(null)

  const features = [
    {
      id: 'planets',
      name: 'Planets',
      icon: '🪐',
      description: 'Explore the solar system'
    },
    {
      id: 'stars',
      name: 'Stars',
      icon: '⭐',
      description: 'Discover stellar objects'
    },
    {
      id: 'galaxies',
      name: 'Galaxies',
      icon: '🌌',
      description: 'Journey beyond'
    },
    {
      id: 'missions',
      name: 'Missions',
      icon: '🚀',
      description: 'Space exploration'
    }
  ]

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />

      <div className="fixed left-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-indigo-500/20 z-50 transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-indigo-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/50 flex items-center justify-center animate-pulse-slow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-indigo-100">SpaceBot</h2>
                  <p className="text-xs text-indigo-300">Cosmic Companion</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-indigo-500/20 transition-colors duration-200 lg:hidden"
              >
                <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <button
              onClick={onNewChat}
              className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl font-medium hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Conversation
            </button>

            {hasMessages && (
              <button
                onClick={onExportPDF}
                className="w-full flex items-center gap-3 px-4 py-3 bg-slate-800/60 border border-indigo-500/30 text-indigo-200 rounded-2xl font-medium hover:bg-slate-800/80 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export PDF
              </button>
            )}
          </div>

          <div className="flex-1 p-6">
            <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-4">
              Explore
            </h3>
            <div className="space-y-2">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 ${
                    activeFeature === feature.id
                      ? 'bg-indigo-900/40 text-indigo-200'
                      : 'hover:bg-slate-800/60 text-indigo-300'
                  }`}
                >
                  <span className="text-xl">{feature.icon}</span>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{feature.name}</div>
                    <div className="text-xs text-indigo-400/70">{feature.description}</div>
                  </div>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${activeFeature === feature.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 border-t border-indigo-500/20">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-indigo-100">Astronaut</div>
                <div className="text-xs text-indigo-400">Explorer Mode</div>
              </div>
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
