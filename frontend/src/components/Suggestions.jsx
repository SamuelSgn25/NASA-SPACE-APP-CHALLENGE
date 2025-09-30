import React from 'react'

export function Suggestions({ onSuggestionClick }) {
  const suggestions = [
    {
      icon: '🌤️',
      title: 'Météo actuelle',
      description: 'Quel temps fait-il aujourd\'hui ?',
      prompt: 'Quel temps fait-il aujourd\'hui dans ma région ?'
    },
    {
      icon: '📊',
      title: 'Prévisions 7 jours',
      description: 'Prévisions météo de la semaine',
      prompt: 'Peux-tu me donner les prévisions météo pour les 7 prochains jours ?'
    },
    {
      icon: '⚠️',
      title: 'Alertes météo',
      description: 'Y a-t-il des alertes en cours ?',
      prompt: 'Y a-t-il des alertes météo ou des conditions dangereuses dans ma région ?'
    },
    {
      icon: '🎯',
      title: 'Événement spécial',
      description: 'Météo pour un événement',
      prompt: 'Je prévois un événement en extérieur ce weekend, quel temps fera-t-il ?'
    }
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">
        Que puis-je faire pour vous ?
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion.prompt)}
            className="group p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-2xl hover:bg-white/80 dark:hover:bg-gray-800/80 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 text-left"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {suggestion.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {suggestion.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {suggestion.description}
                </p>
              </div>
              <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
