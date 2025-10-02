## Utilisation de ClimAI

### 1) Démarrer l'application
1. Créez `frontend/.env` avec vos clés (voir README).
2. Installez les dépendances: `npm install` (dans `frontend/`).
3. Lancez en dev: `npm run dev`.

### 2) Poser des questions météo
Dans le champ en bas, entrez votre question (ex: "Prévision pluie demain à Paris ?"). 
ClimAI répond à l'aide de Gemini 2.5 Flash.

### 3) Exporter la conversation
Via la barre latérale, utilisez "Exporter PDF" (disponible après quelques messages).

### 4) Thème sombre/clair
Le bouton en haut à droite bascule le thème. Le choix est mémorisé.

### 5) Données NASA (Giovanni)
`src/utils/nasaData.js` contient un stub des variables ciblées:
- Température de l'air
- Précipitations
- Vent
- Couverture nuageuse
- Indice UV (bonus)

Intégrez vos appels API réels en remplaçant la fonction `fetchGiovanniExample`.


