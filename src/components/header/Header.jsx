import React, { useContext } from "react";
import { LanguageContext } from "../../global/contexts/LanguageContext";
import { Searchbar } from "../../pages/searchbar/Searchbar";
import { Changelangs } from "../../global/changelangs/Changelangs";
import { Link } from "react-router-dom";

export const Header = () => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <header>
      <div className="header-container">
        <div className="logoflex">
          <a href="/" className="logo">
            Game Field
          </a>
        </div>

        <Searchbar />

        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/">{dictionary.home}</Link>
            </li>
            <li>
              <Link to="/mobilegames">{dictionary.mobileGames}</Link>
            </li>
            <li>
              <Link to="/about">{dictionary.about}</Link>
            </li>
            <li>
              <Link to="/contact">{dictionary.contact}</Link>
            </li>
          </ul>
        </nav>

        <div className="header-loginflex">
          <Link to="/create-account">
            <div className="create-account">{dictionary.createAccount}</div>
          </Link>
          <Link to="/login">
            <div className="login">{dictionary.login}</div>
          </Link>
        </div>

        <Changelangs />
      </div>
    </header>
  );
};
