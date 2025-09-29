import { jsPDF } from 'jspdf'

export async function exportChatToPDF(messages, filename = 'climai_conversation.pdf') {
  const doc = new jsPDF({ 
    unit: 'pt', 
    format: 'a4',
    compress: true
  })
  
  const pageWidth = doc.internal.pageSize.getWidth()
  const marginX = 40
  const marginY = 40
  const lineHeight = 18
  const maxWidth = pageWidth - (marginX * 2)
  let y = marginY
  
  // Header
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(16)
  doc.setTextColor(37, 99, 235) // Blue color
  doc.text('ClimAI - Conversation Météo', marginX, y)
  y += 30
  
  // Date
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(100, 100, 100)
  doc.text(`Exporté le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}`, marginX, y)
  y += 25
  
  // Messages
  doc.setFontSize(11)
  
  messages.forEach((message, index) => {
    // Check if we need a new page
    if (y > 750) {
      doc.addPage()
      y = marginY
    }
    
    const isUser = message.role === 'user'
    const label = isUser ? 'Utilisateur' : 'ClimAI'
    
    // Role label
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.setTextColor(isUser ? 100 : 37, isUser ? 100 : 99, isUser ? 100 : 235)
    doc.text(`${label}:`, marginX, y)
    y += 15
    
    // Message content
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(11)
    doc.setTextColor(0, 0, 0)
    
    const lines = doc.splitTextToSize(message.content, maxWidth)
    lines.forEach(line => {
      if (y > 750) {
        doc.addPage()
        y = marginY
      }
      doc.text(line, marginX, y)
      y += lineHeight
    })
    
    // Timestamp if available
    if (message.timestamp) {
      doc.setFontSize(9)
      doc.setTextColor(150, 150, 150)
      const timeStr = new Date(message.timestamp).toLocaleString('fr-FR')
      doc.text(timeStr, marginX, y)
      y += 20
    } else {
      y += 15
    }
    
    // Separator line
    if (index < messages.length - 1) {
      doc.setDrawColor(200, 200, 200)
      doc.line(marginX, y, pageWidth - marginX, y)
      y += 20
    }
  })
  
  // Footer
  const pageCount = doc.internal.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor(150, 150, 150)
    doc.text(
      `Page ${i} sur ${pageCount} - ClimAI Assistant Météo`,
      pageWidth - 100,
      doc.internal.pageSize.getHeight() - 20,
      { align: 'right' }
    )
  }
  
  doc.save(filename)
}
