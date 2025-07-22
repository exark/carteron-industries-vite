import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './locales/fr.json';
import en from './locales/en.json';

const resources = {
  fr: { translation: fr },
  en: { translation: en },
};

// Détection de la langue préférée
const savedLang = localStorage.getItem('i18nextLng');
const browserLang = navigator.language?.slice(0, 2);
const initialLang = savedLang || (['fr', 'en'].includes(browserLang) ? browserLang : 'fr');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang, // langue initiale
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

// Sauvegarde automatique de la langue à chaque changement
// (utile si un autre composant change la langue)
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
});

export default i18n; 