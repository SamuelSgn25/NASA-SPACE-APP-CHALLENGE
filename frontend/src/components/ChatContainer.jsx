import React, { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage'

export function ChatContainer({ messages, isLoading }) {
  const messagesEndRef = useRef(null)
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="space-y-8 py-8">
        {messages.map((message, index) => (
          <div key={index} className="animate-in slide-in-from-bottom-2 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
            <ChatMessage
              role={message.role}
              content={message.content}
              timestamp={message.timestamp}
            />
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-4 justify-start animate-in slide-in-from-bottom-2 duration-300">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-3xl px-6 py-4 shadow-lg shadow-gray-200/50 dark:shadow-gray-800/50 transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="flex space-x-1">
                  <div className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">ClimAI réfléchit...</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}
