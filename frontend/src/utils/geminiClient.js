// Gemini client for browser using @google/generative-ai
// Expects VITE_GEMINI_API_KEY in environment at build-time

import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = import.meta?.env?.VITE_GEMINI_API_KEY

let genAI = null
let model = null

export function getGeminiModel(modelName = 'gemini-2.5-flash') {
  if (!genAI) {
    if (!apiKey) {
      throw new Error('VITE_GEMINI_API_KEY is missing. Add it to your .env file.')
    }
    genAI = new GoogleGenerativeAI(apiKey)
  }
  if (!model) {
    model = genAI.getGenerativeModel({ model: modelName })
  }
  return model
}

export async function askGemini(prompt) {
  const mdl = getGeminiModel()
  const result = await mdl.generateContent(prompt)
  const response = await result.response
  return response.text()
}

// Domain-specific helper for weather Q&A. In the future we can append NASA facts.
export async function generateWeatherAnswer(userQuestion) {
  const systemPreamble = `Tu es ClimAI, un assistant météo francophone. 
Réponds de manière concise, structurée et pratique. 
Privilégie les insights sur: température de l'air, précipitations, vent, couverture nuageuse (bonus: indice UV).`

  const prompt = `${systemPreamble}\n\nQuestion: ${userQuestion}`
  return askGemini(prompt)
}


