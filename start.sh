#!/bin/bash

echo "🚀 Démarrage du site SAS Group..."
echo "=================================="
echo ""
echo "📂 Dossier: /home/dao-wakilou/Documents/sas-group-website"
echo ""
echo "⏳ Lancement du serveur de développement..."
echo ""

cd /home/dao-wakilou/Documents/sas-group-website

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
fi

echo ""
echo "✅ Le site sera accessible à: http://localhost:3000"
echo ""
echo "💡 Appuyez sur Ctrl+C pour arrêter le serveur"
echo "=================================="
echo ""

npm run dev
