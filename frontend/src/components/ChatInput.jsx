import React, { useState, useRef } from 'react'

export function ChatInput({ onSend, onAudioRecord, isRecording, disabled, onExportPDF, hasMessages }) {
  const [input, setInput] = useState('')
  const textareaRef = useRef(null)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() && !disabled) {
      onSend(input.trim())
      setInput('')
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    }
  }
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }
  
  const handleInputChange = (e) => {
    setInput(e.target.value)
    const textarea = e.target
    textarea.style.height = 'auto'
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'
  }
  
  return (
    <div className="sticky bottom-0 bg-gradient-to-t from-white/95 via-white/90 to-transparent dark:from-gray-900/95 dark:via-gray-900/90 backdrop-blur-xl p-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Input Form */}
        <form onSubmit={handleSubmit}>
          <div className="flex items-end gap-4">
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Posez votre question météo..."
                disabled={disabled}
                className="w-full resize-none rounded-3xl border border-gray-200/60 dark:border-gray-700/60 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl px-6 py-4 pr-14 text-base placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-200 min-h-[56px] max-h-[140px] shadow-lg shadow-gray-200/50 dark:shadow-gray-800/50"
                rows="1"
              />
              <button
                type="button"
                onClick={() => onAudioRecord()}
                disabled={disabled}
                className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl transition-all duration-200 ${
                  isRecording
                    ? 'bg-red-500 dark:bg-red-400 text-white shadow-lg shadow-red-500/25 dark:shadow-red-400/25 animate-pulse'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-700 dark:hover:text-gray-200'
                } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isRecording ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
            
            <button
              type="submit"
              disabled={!input.trim() || disabled}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 text-white rounded-3xl font-medium text-base shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25 hover:shadow-blue-500/40 dark:hover:shadow-blue-400/40 hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-blue-500/25 dark:disabled:hover:shadow-blue-400/25"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
