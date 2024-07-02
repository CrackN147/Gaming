import React, { createContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import en from "../langs/En.json";
import ka from "../langs/Ka.json";

export const LanguageContext = createContext();

const languageOptions = {
  en: en,
  ka: ka,
};

export const LanguageProvider = ({ children }) => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const storedLang = localStorage.getItem("appLanguage");
  const initialLang = lang || storedLang || "en";
  const [language, setLanguage] = useState(initialLang);
  const [dictionary, setDictionary] = useState(
    languageOptions[initialLang] || languageOptions.en
  );

  useEffect(() => {
    if (lang && languageOptions[lang]) {
      setLanguage(lang);
      setDictionary(languageOptions[lang]);
      localStorage.setItem("appLanguage", lang);
    } else if (storedLang) {
      setLanguage(storedLang);
      setDictionary(languageOptions[storedLang]);
    } else {
      localStorage.setItem("appLanguage", initialLang);
    }

    console.log(
      "Current language in local storage:",
      localStorage.getItem("appLanguage")
    );
  }, [lang, storedLang, initialLang]);

  const changeLanguage = (lang) => {
    const currentPath = window.location.pathname;
    const newPath = `/${lang}${currentPath.substr(
      currentPath.indexOf("/", 1)
    )}`;
    setLanguage(lang);
    setDictionary(languageOptions[lang]);
    localStorage.setItem("appLanguage", lang);
    navigate(newPath);
    console.log("Language changed to:", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, dictionary, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
