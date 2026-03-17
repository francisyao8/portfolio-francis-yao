# Portfolio — Yao Jean Francis Amani
## Développeur Full-Stack | Angular 16 + PrimeNG

---

## 🚀 Installation locale

### Prérequis
- **Node.js** ≥ 18  →  https://nodejs.org
- **Angular CLI 16**  →  `npm install -g @angular/cli@16`

### Étapes

```bash
git clone https://github.com/TON_USERNAME/TON_REPO.git
cd TON_REPO
npm install
ng serve
# → http://localhost:4200
```

---

## 📦 Build production

```bash
npm run build:prod
# → dist/portfolio/ prêt à déployer
```

---

## 🌐 Déploiement

### ① Vercel (le plus simple)
1. Push sur GitHub
2. vercel.com → Import Project → sélectionne ton repo
3. `vercel.json` est déjà configuré → Deploy ✅

### ② Netlify
1. Push sur GitHub
2. netlify.com → Add new site → Import from Git
3. `netlify.toml` configure tout automatiquement → Deploy ✅

### ③ GitHub Pages (CI/CD auto)
1. Push sur GitHub
2. Settings → Pages → Source: GitHub Actions
3. À chaque push sur `main`, déploiement automatique ✅
   URL: `https://TON_USERNAME.github.io/TON_REPO/`

### ④ Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # Public dir: dist/portfolio, SPA: Yes
npm run deploy:firebase
```
> Remplace `"ton-projet-firebase-id"` dans `.firebaserc` par ton vrai project ID.

---

## 📁 Structure

```
portfolio/
├── .github/workflows/deploy.yml   ← CI/CD GitHub Pages
├── src/
│   ├── app/components/            ← 9 composants Angular
│   ├── environments/              ← environment.ts + environment.prod.ts
│   ├── assets/cv/ images/         ← PDF + photos + logos
│   └── styles.scss                ← Design tokens globaux
├── .gitignore
├── netlify.toml                   ← Config Netlify
├── vercel.json                    ← Config Vercel
├── firebase.json                  ← Config Firebase
└── .firebaserc
```

---

## 👤 Auteur
**Yao Jean Francis Amani** — francisamany@outlook.com — Abidjan, CI
