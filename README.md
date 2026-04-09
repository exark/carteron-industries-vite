# Carteron Industries - Site Web

Site web officiel de Carteron Industries, spécialisé dans les innovations pour le golf.

## 🚀 Technologies

- **React** + **Vite**
- **React Router** pour la navigation
- **i18next** pour la traduction (FR/EN)
- **Supabase** pour la base de données et authentification
- **Resend** pour l'envoi d'emails (survey)
- **EmailJS** pour le formulaire de contact
- **Tailwind CSS** + CSS personnalisé
- **Framer Motion** pour les animations

## 📦 Installation

```bash
npm install
```

## 🔧 Configuration

1. Copiez `.env.example` vers `.env`
2. Remplissez les variables d'environnement Supabase
3. Configurez EmailJS pour le formulaire de contact (voir `EMAILJS_SETUP.md`)

## 🏃 Développement

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 📧 Système d'emails

- **Formulaire de contact**: EmailJS
- **Confirmation survey**: Supabase Edge Functions + Resend

## 📊 Admin Dashboard

Accès: `/admin/login`

Fonctionnalités:
- Gestion des soumissions de survey
- Statistiques et graphiques
- Filtres et recherche
- Export des données
