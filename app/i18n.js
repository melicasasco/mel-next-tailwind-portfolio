import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from "./utils/languages/es.json"
import en from "./utils/languages/en.json"

const storedLanguage = localStorage.getItem("language");


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
    lng: storedLanguage || 'es', 
    debug: true,
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
