import React from 'react'

export function ChatMessage({ role, content, timestamp }) {
  const isUser = role === 'user'
  const isAssistant = role === 'assistant'
  
  return (
    <div className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'} group`}>
      {!isUser && (
        <div className="flex-shrink-0">
          <div className="h-12 w-12 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/40 dark:group-hover:shadow-blue-400/40">
            <span className="text-white font-bold text-lg">C</span>
          </div>
        </div>
      )}
      
      <div className={`max-w-[80%] ${isUser ? 'order-first' : ''}`}>
        <div className={`rounded-3xl px-6 py-4 shadow-lg transition-all duration-300 group-hover:shadow-xl ${
          isUser 
            ? 'bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-white shadow-blue-500/25 dark:shadow-blue-400/25 group-hover:shadow-blue-500/40 dark:group-hover:shadow-blue-400/40' 
            : 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-900 dark:text-gray-100 shadow-gray-200/50 dark:shadow-gray-800/50 group-hover:shadow-gray-200/70 dark:group-hover:shadow-gray-800/70'
        }`}>
          <p className="text-base leading-relaxed whitespace-pre-wrap">{content}</p>
        </div>
        
        {timestamp && (
          <p className={`text-xs text-gray-400 dark:text-gray-500 mt-2 px-2 transition-colors duration-300 ${isUser ? 'text-right' : 'text-left'}`}>
            {new Date(timestamp).toLocaleTimeString('fr-FR', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </p>
        )}
      </div>
      
      {isUser && (
        <div className="flex-shrink-0">
          <div className="h-12 w-12 rounded-3xl bg-gradient-to-br from-gray-500 to-gray-600 dark:from-gray-600 dark:to-gray-700 shadow-lg shadow-gray-500/25 dark:shadow-gray-600/25 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-gray-500/40 dark:group-hover:shadow-gray-600/40">
            <span className="text-white font-bold text-lg">U</span>
          </div>
        </div>
      )}
    </div>
  )
}
