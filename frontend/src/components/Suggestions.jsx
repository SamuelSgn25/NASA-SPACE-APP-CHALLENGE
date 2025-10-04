import React from 'react'

export function Suggestions({ onSuggestionClick }) {
  const suggestions = [
    {
      icon: '🌍',
      title: 'Earth Facts',
      description: 'Tell me about our planet',
      prompt: 'Tell me interesting facts about planet Earth'
    },
    {
      icon: '🌙',
      title: 'Moon Phases',
      description: 'Learn about lunar cycles',
      prompt: 'Explain the phases of the moon'
    },
    {
      icon: '☄️',
      title: 'Meteor Showers',
      description: 'When can I see shooting stars?',
      prompt: 'When are the next meteor showers visible?'
    },
    {
      icon: '🛸',
      title: 'Space Exploration',
      description: 'Latest space missions',
      prompt: 'What are the latest space exploration missions?'
    }
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-indigo-100 text-center">
        What would you like to explore?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion.prompt)}
            className="group p-4 bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 rounded-2xl hover:bg-slate-900/80 hover:border-indigo-400/50 transition-all duration-300 text-left"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {suggestion.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-indigo-100 mb-1">
                  {suggestion.title}
                </h4>
                <p className="text-sm text-indigo-300/80">
                  {suggestion.description}
                </p>
              </div>
              <svg className="w-5 h-5 text-indigo-400/60 group-hover:text-indigo-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
