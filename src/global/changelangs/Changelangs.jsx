import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const Changelangs = () => {
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ka")}>KA</button>
    </div>
  );
};
