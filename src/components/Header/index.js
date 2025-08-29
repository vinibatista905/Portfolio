import React, { useState } from "react";
import Web from "./web";
import Mobile from "./mobile";

import "./Header.scss";
import { HiMenu } from "react-icons/hi";
import ThemeToggle from "../common/theme-toggle";
import LanguageSelector from "../common/language-selector";
import codeIcon from "../../assets/code-2.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={codeIcon} alt="Code" />
        Portfolio
      </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
          <ThemeToggle />
          <LanguageSelector />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <HiMenu className="menu-icon" />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
