import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from "./utils/languages/es.json"
import en from "./utils/languages/en.json"

// Only initialize if not already initialized
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: en,
        },
        es: {
          translation: es,
        }
      },
      fallbackLng: 'es',
      lng: 'es', // Default language
      debug: false, // Set to false for production
      interpolation: {
        escapeValue: false, 
      },
    });
}

export default i18n;
