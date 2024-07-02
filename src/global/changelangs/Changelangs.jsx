import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

export const Changelangs = () => {
  const { changeLanguage, language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleChangeLanguage = (newLang) => {
    if (newLang !== language) {
      const newPath = window.location.pathname.replace(
        `/${language}/`,
        `/${newLang}/`
      );
      changeLanguage(newLang);
      navigate(newPath);
    }
  };

  return (
    <div className="changelangs-container">
      <button
        className="language-button"
        onClick={() => handleChangeLanguage("en")}
      >
        EN
      </button>
      <button
        className="language-button"
        onClick={() => handleChangeLanguage("ka")}
      >
        KA
      </button>
    </div>
  );
};
