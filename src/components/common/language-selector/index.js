import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./language-selector.scss";
import { BsGlobeAmericas } from "react-icons/bs";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="lang-dropdown">
      <button className="lang-button" onClick={() => setOpen(!open)}>
      <BsGlobeAmericas /> {i18n.language.toUpperCase()}
      </button>
      {open && (
        <ul className="dropdown-menu">
          <li onClick={() => changeLanguage("pt")}>🇧🇷 Português</li>
          <li onClick={() => changeLanguage("en")}>🇺🇸 English</li>
          <li onClick={() => changeLanguage("es")}>🇪🇸 Español</li>
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
