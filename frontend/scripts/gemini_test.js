/* eslint-disable no-console */
// Node test script for Gemini API key
// Usage: node scripts/gemini_test.js

require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') })

const { GoogleGenAI } = require('@google/genai')

const apiKey = process.env.GEMINI_API_KEY

if (!apiKey) {
  console.error('Erreur : La variable GEMINI_API_KEY n\'est pas définie dans votre fichier .env.')
  process.exit(1)
}

const ai = new GoogleGenAI({ apiKey })

async function runGeminiTest() {
  try {
    console.log('-> Test en cours avec Gemini 2.5 Flash...')

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { parts: [{ text: "Qu'est ce qu'un serveur udp?" }] }
      ]
    })

    console.log('\n--- Réponse Gemini ---')
    console.log('Statut : Succès ✅')
    // SDK returns object; ensure printing text-like field
    const text = response?.text || response?.candidates?.[0]?.content?.parts?.[0]?.text || JSON.stringify(response, null, 2)
    console.log('Résultat :', text)
    console.log('----------------------')
  } catch (error) {
    console.error('\n--- Échec du Test API ❌ ---')
    console.error('Vérifiez votre clé API, votre connexion internet ou vos quotas.')
    console.error('Détails de l\'erreur :', error?.message || error)
    console.error('--------------------------')
    process.exit(1)
  }
}

runGeminiTest()


