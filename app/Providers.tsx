"use client";

import { I18nextProvider } from "react-i18next";
import { useEffect } from "react";
import i18n from "./i18n";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Set language from localStorage on client side
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage && i18n.language !== storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
} 