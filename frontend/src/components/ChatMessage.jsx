import React from 'react'

export function ChatMessage({ role, content, timestamp }) {
  const isUser = role === 'user'
  const isAssistant = role === 'assistant'

  return (
    <div className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'} group`}>
      {!isUser && (
        <div className="flex-shrink-0">
          <div className="h-12 w-12 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/50 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-indigo-500/70 animate-pulse-slow">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
            </svg>
          </div>
        </div>
      )}

      <div className={`max-w-[80%] ${isUser ? 'order-first' : ''}`}>
        <div className={`rounded-3xl px-6 py-4 shadow-lg transition-all duration-300 group-hover:shadow-xl ${
          isUser
            ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-cyan-500/50 group-hover:shadow-cyan-500/70'
            : 'bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 text-indigo-100 shadow-indigo-900/50 group-hover:shadow-indigo-900/70'
        }`}>
          <p className="text-base leading-relaxed whitespace-pre-wrap">{content}</p>
        </div>

        {timestamp && (
          <p className={`text-xs text-indigo-400/70 mt-2 px-2 transition-colors duration-300 ${isUser ? 'text-right' : 'text-left'}`}>
            {new Date(timestamp).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        )}
      </div>

      {isUser && (
        <div className="flex-shrink-0">
          <div className="h-12 w-12 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-cyan-500/70">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
