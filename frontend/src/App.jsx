import { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { ChatContainer } from './components/ChatContainer'
import { ChatInput } from './components/ChatInput'
import { ThemeToggle } from './components/ThemeToggle'
import { Sidebar } from './components/Sidebar'
import { Suggestions } from './components/Suggestions'
import { useAudioRecorder } from './hooks/useAudioRecorder'
import { exportChatToPDF } from './utils/pdfExport'
import { generateWeatherAnswer } from './utils/geminiClient'

function App() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Greetings, I am SpaceBot, your cosmic companion. How may I assist you on your journey through the stars?',
      timestamp: new Date()
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const {
    isRecording,
    audioURL,
    audioBlob,
    startRecording,
    stopRecording,
    clearRecording
  } = useAudioRecorder()

  const handleSendMessage = async (content) => {
    if (!content.trim()) return

    const userMessage = {
      role: 'user',
      content: content.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)
    try {
      const aiText = await generateWeatherAnswer(content.trim())
      const assistantMessage = {
        role: 'assistant',
        content: aiText || 'I could not generate a response at this time.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('AI error:', error)
      const assistantMessage = {
        role: 'assistant',
        content: "An error occurred. Please check your connection to the cosmic network.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleAudioRecord = () => {
    if (isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }

  const handleExportPDF = async () => {
    try {
      await exportChatToPDF(messages)
    } catch (error) {
      console.error('Export error:', error)
      alert('Export failed. Please try again.')
    }
  }

  const handleNewChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: 'Greetings, I am SpaceBot, your cosmic companion. How may I assist you on your journey through the stars?',
        timestamp: new Date()
      },
    ])
    setSidebarOpen(false)
  }

  const handleSuggestionClick = (prompt) => {
    handleSendMessage(prompt)
  }

  const showWelcome = messages.length === 1 && !isLoading

  return (
    <ThemeProvider>
      <div className="min-h-screen flex bg-gradient-to-br from-slate-900 via-indigo-950 to-black dark:from-black dark:via-indigo-950 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden">
        {/* Space background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>

        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onNewChat={handleNewChat}
          onExportPDF={handleExportPDF}
          hasMessages={messages.length > 1}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-4 border-b border-indigo-500/20 bg-slate-900/80 backdrop-blur-xl relative z-10">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-xl hover:bg-indigo-500/20 transition-colors duration-200 lg:hidden"
            >
              <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/50 flex items-center justify-center animate-pulse-slow">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-indigo-100">SpaceBot</h1>
                <p className="text-xs text-indigo-300">Cosmic Companion</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Chat Area */}
          <main className="flex-1 flex flex-col relative z-10">
            {showWelcome ? (
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-4xl w-full space-y-8">
                  {/* Welcome Message */}
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center gap-4 px-8 py-4 bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 rounded-3xl shadow-2xl shadow-indigo-500/20 animate-float">
                      <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/50 flex items-center justify-center animate-pulse-slow">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
                        </svg>
                      </div>
                      <div className="text-left">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                          SpaceBot
                        </h1>
                        <p className="text-sm text-indigo-300 font-medium">Cosmic Companion</p>
                      </div>
                    </div>

                    <div className="bg-slate-900/60 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-8 shadow-2xl shadow-indigo-900/50">
                      <p className="text-indigo-100 leading-relaxed text-lg">
                        Greetings, I am <span className="font-semibold text-indigo-300">SpaceBot</span>, your cosmic companion.
                        How may I assist you on your journey through the stars?
                      </p>
                    </div>
                  </div>

                  {/* Suggestions */}
                  <Suggestions onSuggestionClick={handleSuggestionClick} />
                </div>
              </div>
            ) : (
              <ChatContainer messages={messages} isLoading={isLoading} />
            )}

            <ChatInput
              onSend={handleSendMessage}
              onAudioRecord={handleAudioRecord}
              isRecording={isRecording}
              disabled={isLoading}
              onExportPDF={handleExportPDF}
              hasMessages={messages.length > 1}
            />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
