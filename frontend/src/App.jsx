import { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ChatContainer } from './components/ChatContainer'
import { ChatInput } from './components/ChatInput'
import { ActionBar } from './components/ActionBar'
import { WelcomeMessage } from './components/WelcomeMessage'
import { useAudioRecorder } from './hooks/useAudioRecorder'
import { exportChatToPDF } from './utils/pdfExport'

function App() {
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Bonjour, je m\'appelle ClimAI et je suis votre nouvelle assistant météo. Que puis-je faire pour vous ?',
      timestamp: new Date()
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  
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
    
    // Simulate API call delay
    setTimeout(() => {
      const assistantMessage = {
        role: 'assistant',
        content: `Merci pour votre question : "${content.trim()}". Je vais analyser les données météo pour vous fournir une réponse précise. (Réponse simulée - en attente de l'intégration API)`,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
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

  const showWelcome = messages.length === 1 && !isLoading

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 transition-colors duration-300">
        <Header />
        
        <main className="flex-1 flex flex-col">
          {showWelcome ? (
            <WelcomeMessage />
          ) : (
            <ChatContainer messages={messages} isLoading={isLoading} />
          )}
          
          <ChatInput 
            onSend={handleSendMessage}
            onAudioRecord={handleAudioRecord}
            isRecording={isRecording}
            disabled={isLoading}
          />
          
          <ActionBar 
            onExportPDF={handleExportPDF}
            hasMessages={messages.length > 1}
            disabled={isLoading}
          />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
