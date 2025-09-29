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
