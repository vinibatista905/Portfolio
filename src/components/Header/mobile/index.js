import React from "react";
import { useTranslation } from "react-i18next";
import { CgBriefcase, CgWebsite } from "react-icons/cg";
import { FaCode, FaLaptopCode, FaRegUser } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import LanguageSelector from "../../common/language-selector";
import ThemeToggle from "../../common/theme-toggle";

import "./Mobile.scss";

function Mobile({ isOpen, setIsOpen }) {
  const { t } = useTranslation();
  return (
    <div className="mobile">
      <div className="close-icon">
        <div className="preferences-buttons">
          <ThemeToggle />
          <LanguageSelector />
        </div>

        <div onClick={() => setIsOpen(!isOpen)}>
          <RiCloseCircleLine />
        </div>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#experience">
            <CgBriefcase className="option-icon" />
            {t("header.experience")}
          </a>
        </div>
        <div className="mobile-option">
          <a href="#projects">
            <CgWebsite className="option-icon" />
            {t("header.projects")}
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <FaCode className="option-icon" />
            {t("header.skills")}
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <FaLaptopCode className="option-icon" />
            {t("header.work")}
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <FaRegUser className="option-icon" />
            {t("header.contact")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
