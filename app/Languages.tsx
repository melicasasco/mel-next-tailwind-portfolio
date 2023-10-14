import { useState, useEffect } from "react";
import { useTranslation, withTranslation } from "react-i18next";

const languages = [
  {
    name: "Español",
    code: "es",
  },
  {
    name: "English",
    code: "en",
  },
];
/* 
const getInitialValueFromLocalStorage = () => {
  return localStorage.getItem("language") || "es";
}; */
const getInitialValueFromLocalStorage = () => {
  let storedLanguage = "es"; 

  if (typeof window !== "undefined") {
    storedLanguage = localStorage.getItem("language") || "es";
  }

  return storedLanguage;
};



const Languages = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(getInitialValueFromLocalStorage());

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");

    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    } else {
      localStorage.setItem("language", selectedLanguage);
    }

}, []);

  const changeLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="flex  items-center space-x-2">
      <select
        className="border bg-[#222] text-white border-purple-400 rounded-xl p-2 focus:outline-none focus:border-purple-400"
        name="idioma"
        value={selectedLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Languages;
