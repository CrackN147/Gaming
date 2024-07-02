import React, { useContext } from "react";
import { LanguageContext } from "../../global/contexts/LanguageContext";
import { Searchbar } from "../../pages/searchbar/Searchbar";
import { Changelangs } from "../../global/changelangs/Changelangs";
import { Link, useParams } from "react-router-dom";

export const Header = () => {
  const { dictionary } = useContext(LanguageContext);
  const { lang } = useParams();
  const validLang = lang === "en" || lang === "ka" ? lang : "en";

  if (!dictionary) {
    return null; // Add this to avoid destructuring from null
  }

  return (
    <header>
      <div className="header-container">
        <div className="logoflex">
          <a href={`/${validLang}`} className="logo">
            Game Field
          </a>
        </div>

        <Searchbar />

        <nav className="header-nav">
          <ul>
            <li>
              <Link to={`/${validLang}`}>{dictionary.home}</Link>
            </li>
            <li>
              <Link to={`/${validLang}/mobilegames`}>
                {dictionary.mobileGames}
              </Link>
            </li>
            <li>
              <Link to={`/${validLang}/about`}>{dictionary.about}</Link>
            </li>
            <li>
              <Link to={`/${validLang}/contact`}>{dictionary.contact}</Link>
            </li>
          </ul>
        </nav>
        <div className="header-end-flex">
          <div className="header-loginflex">
            <Link to={`/${validLang}/create-account`}>
              <div className="create-account">{dictionary.createAccount}</div>
            </Link>
            <Link to={`/${validLang}/login`}>
              <div className="login">{dictionary.login}</div>
            </Link>
          </div>

          <Changelangs />
        </div>
      </div>
    </header>
  );
};
