// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Function to get the language preference from local storage
const getStoredLanguage = () => {
  const storedLanguage = localStorage.getItem('selectedLanguage');
  return storedLanguage || 'en'; // Default to English if not found
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('./locales/en.json'),
      },
      es: {
        translation: require('./locales/es.json'),
      },
      // Add more languages and their translations here
    },
    lng: getStoredLanguage(), // Use the stored language preference
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
