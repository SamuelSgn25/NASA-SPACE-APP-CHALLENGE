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
      content: 'Bonjour, je m\'appelle ClimAI et je suis votre nouvelle assistant météo. Que puis-je faire pour vous ?',
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
        content: aiText || 'Je n’ai pas pu générer de réponse pour le moment.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Gemini error:', error)
      const assistantMessage = {
        role: 'assistant',
        content: "Une erreur est survenue lors de l'appel à l'IA. Vérifiez votre clé API.",
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
      console.error('Erreur lors de l\'export PDF:', error)
      alert('Erreur lors de l\'export PDF. Veuillez réessayer.')
    }
  }

  const handleNewChat = () => {
    setMessages([
      { 
        role: 'assistant', 
        content: 'Bonjour, je m\'appelle ClimAI et je suis votre nouvelle assistant météo. Que puis-je faire pour vous ?',
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
      <div className="min-h-screen flex bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 transition-colors duration-300">
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
          <div className="flex items-center justify-between p-4 border-b border-gray-200/60 dark:border-gray-700/60 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 lg:hidden"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25 flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">ClimAI</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Assistant météo intelligent</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
          
          {/* Chat Area */}
          <main className="flex-1 flex flex-col">
            {showWelcome ? (
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-4xl w-full space-y-8">
                  {/* Welcome Message */}
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-3xl shadow-2xl shadow-blue-500/10 dark:shadow-blue-400/10 animate-float">
                      <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25 flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">C</span>
                      </div>
                      <div className="text-left">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                          ClimAI
                        </h1>
                        <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">Assistant météo intelligent</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-3xl p-8 shadow-2xl shadow-gray-200/50 dark:shadow-gray-800/50">
                      <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg">
                        Bonjour, je m'appelle <span className="font-semibold text-blue-600 dark:text-blue-400">ClimAI</span> et je suis votre nouvelle assistant météo. 
                        Que puis-je faire pour vous ?
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
