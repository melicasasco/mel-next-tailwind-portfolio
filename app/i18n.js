"use client"
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from "./utils/languages/es.json"
import en from "./utils/languages/en.json"

let storedLanguage = "es"

if (typeof window !== "undefined") {
  storedLanguage = localStorage.getItem("language") || "es";
} else {
  storedLanguage = "es";
}




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
