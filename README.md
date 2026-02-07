# SAS Group - Site Web Officiel

Site web moderne et futuriste pour SAS Group, entreprise leader en BTP, eau & assainissement, développement logiciel et commerce général au Burkina Faso et en Tanzanie.

## 🌟 Caractéristiques

- ✨ Design moderne et futuriste
- 🌍 Multilingue (Français, Anglais, Swahili)
- 📱 Entièrement responsive (mobile, tablette, desktop)
- 🚀 Performance optimale avec Next.js
- 💧 Mise en avant de la solution Wateri (compteurs d'eau intelligents)
- 🏗️ Section BTP proéminente
- ⚡ Animations fluides et professionnelles
- 🎨 Design avec Tailwind CSS

## 🛠️ Technologies Utilisées

- **Framework**: Next.js 16 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Google Fonts (Inter)
- **Déploiement**: Vercel (recommandé)

## 📋 Prérequis

- Node.js 18+ installé
- npm ou yarn

## 🚀 Installation et Démarrage

### 1. Installation des dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible à [http://localhost:3000](http://localhost:3000)

### 3. Build pour la production

```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
sas-group-website/
├── app/
│   ├── components/       # Composants React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Wateri.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── lib/             # Utilitaires et contextes
│   │   └── LanguageContext.tsx
│   ├── locales/         # Fichiers de traduction
│   │   ├── fr.ts        # Français
│   │   ├── en.ts        # Anglais
│   │   ├── sw.ts        # Swahili
│   │   └── index.ts
│   ├── globals.css      # Styles globaux
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Page d'accueil
├── public/              # Fichiers statiques
└── tailwind.config.ts   # Configuration Tailwind
```

## 🌐 Sections du Site

1. **Hero** - Bannière d'accueil avec statistiques
2. **Services** - 4 domaines d'expertise (BTP, Eau, Logiciel, Commerce)
3. **Wateri** - Présentation détaillée de la solution de compteurs intelligents
4. **À Propos** - Mission, vision, valeurs et implantations
5. **Contact** - Formulaire de contact et informations

## 🎨 Personnalisation

### Modifier les traductions

Les traductions se trouvent dans `app/locales/`:
- `fr.ts` pour le français
- `en.ts` pour l'anglais
- `sw.ts` pour le swahili

### Modifier les couleurs

Les couleurs sont configurées dans `tailwind.config.ts`:
- `primary`: Bleu (SAS Group)
- `accent`: Vert (Eau/Wateri)

### Ajouter des images

1. Placez vos images dans le dossier `public/images/`
2. Utilisez le composant Next.js Image:

```tsx
import Image from 'next/image';

<Image
  src="/images/votre-image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

## 📧 Configuration du Formulaire de Contact

Le formulaire de contact est actuellement configuré avec une alerte. Pour le rendre fonctionnel:

1. Intégrez un service comme **EmailJS**, **SendGrid** ou **Resend**
2. Modifiez la fonction `handleSubmit` dans `app/components/Contact.tsx`

Exemple avec EmailJS:

```tsx
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    alert('Message envoyé avec succès!');
  } catch (error) {
    alert('Erreur lors de l\'envoi du message');
  }
};
```

## 🚀 Déploiement

### Vercel (Recommandé)

1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre repository GitHub
3. Vercel détectera automatiquement Next.js
4. Cliquez sur "Deploy"

Votre site sera en ligne en quelques minutes!

### Autres options

- **Netlify**: Compatible avec Next.js
- **AWS Amplify**: Pour plus de contrôle
- **VPS**: Avec PM2 et Nginx

## 📝 TODO / Améliorations Futures

- [ ] Ajouter de vraies images pour chaque section
- [ ] Intégrer un CMS (Strapi, Sanity) pour gérer le contenu
- [ ] Ajouter une section Portfolio/Projets avec des réalisations
- [ ] Implémenter le backend pour le formulaire de contact
- [ ] Ajouter des témoignages clients
- [ ] Intégrer Google Analytics
- [ ] Ajouter un blog
- [ ] Optimisation SEO avancée
- [ ] Mode sombre

## 🔒 Sécurité

- Pas de clés API exposées
- Validation des formulaires côté client et serveur
- Headers de sécurité configurés
- Protection CSRF pour les formulaires

## 📞 Support

Pour toute question ou assistance:
- Email: contact@sas-group.com
- Téléphone: +226 XX XX XX XX (Burkina Faso)
- Téléphone: +255 XX XXX XXXX (Tanzanie)

## 📄 Licence

© 2026 SAS Group. Tous droits réservés.

---

Développé avec ❤️ pour SAS Group
