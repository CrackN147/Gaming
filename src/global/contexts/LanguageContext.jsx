import React, { createContext, useState, useEffect } from "react";
import en from "../langs/En.json";
import ka from "../langs/Ka.json";

export const LanguageContext = createContext();

const languageOptions = {
  en: en,
  ka: ka,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [dictionary, setDictionary] = useState(languageOptions.en);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("appLanguage");
    if (storedLanguage) {
      setLanguage(storedLanguage);
      setDictionary(languageOptions[storedLanguage]);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setDictionary(languageOptions[lang]);
    localStorage.setItem("appLanguage", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, dictionary, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
