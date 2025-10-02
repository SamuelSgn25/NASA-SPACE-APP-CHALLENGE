## ClimAI – Assistant météo (Frontend)

ClimAI est un chatbot météo moderne qui intègre Google Gemini 2.5 Flash pour fournir des réponses intelligentes autour de la température de l'air, des précipitations, du vent, de la couverture nuageuse (et en bonus l'indice UV). L'application inclut un switch sombre/clair et une UI inspirée du design partagé.

### Prérequis
- Node.js 18+
- npm ou pnpm

### Installation
```bash
cd frontend
npm install
```

### Configuration des clés
Créez un fichier `.env` à la racine de `frontend/` avec :
```
# Clé pour le client web (exposée au build Vite)
VITE_GEMINI_API_KEY="<votre_clé_client>"

# Clé pour le script Node de test
GEMINI_API_KEY="<votre_clé_serveur>"
```

> Important: Ne committez pas vos clés réelles. Utilisez `.env` en local.

### Lancer en développement
```bash
npm run dev
```

### Build de production
```bash
npm run build && npm run preview
```

### Test de la clé Gemini (Node)
```bash
npm run gemini:test
```
Le script teste un prompt simple et affiche la réponse de Gemini.

### Intégration IA
- Code: `src/utils/geminiClient.js`
- Utilisation: la fonction `generateWeatherAnswer(question)` est appelée depuis `App.jsx` lors de l'envoi d'un message.

### Données NASA (Giovanni)
- Stub: `src/utils/nasaData.js` (pour brancher ultérieurement de vraies requêtes)
- Variables ciblées: température de l'air, précipitations, vent, couverture nuageuse, indice UV (bonus)

### Thème sombre/clair
- Fournisseur: `src/contexts/ThemeContext.jsx`
- Switch: `src/components/ThemeToggle.jsx`
- Stockage du thème dans `localStorage` et respect de `prefers-color-scheme`.

### Structure des fichiers clé
```
src/
  components/
  contexts/
  hooks/
  utils/
    geminiClient.js
    nasaData.js
  App.jsx
```

### Personnalisation
- Branding ClimAI (logo C, dégradés bleus) déjà appliqué.
- Pour adapter le wording d'accueil, modifiez `App.jsx` et `Suggestions.jsx`.

### Licence
MIT

# ClimAI — Assistant météo (Frontend Only)

ClimAI est un chatbot météo pour le défi Space Apps « Will It Rain On My Parade? ». Il accepte des questions en texte, permet un enregistrement audio (mock pour l’instant) et exporte la conversation en PDF.

- **Stack**: React + Vite + TailwindCSS v4
- **Back‑end**: aucun (mock côté frontend)
- **Défi**: [Will It Rain On My Parade?](https://www.spaceappschallenge.org/2025/challenges/will-it-rain-on-my-parade/)

## Démarrage

1. Installer les dépendances:
```bash
cd frontend
npm install
```

2. Lancer le serveur de dev:
```bash
npm run dev
```

3. Ouvrir l’URL indiquée (ex: `http://localhost:5173`).

## Fonctionnalités

- Chat UI simple (utilisateur ↔ assistant)
- Enregistrement audio via MediaRecorder (aperçu du fichier en local)
- Export PDF de la conversation via `jspdf`
- Branding léger « ClimAI »

## Structure

- `src/App.jsx`: layout, chat, audio, export PDF
- `src/index.css`: Tailwind v4 (utilise `@import "tailwindcss";`)
- `vite.config.js`: plugin React + Tailwind

## Personnalisation

- Couleurs de marque dans `src/index.css` via `@theme` (`--color-brand`)
- Titre/meta dans `index.html`

## Intégration API (plus tard)

Prévoir un endpoint pour:
- poser une question météo textuelle
- transcrire/analyser l’audio

On branchera ces appels dans `App.jsx` (fonction `send` et hook d’upload audio).

## Licence

MIT
