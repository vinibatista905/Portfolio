import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import "./theme-toggle.scss";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? (
        <>
          <MdDarkMode />
          <span>{t("header.dark")}</span>
        </>
      ) : (
        <>
          <MdLightMode />
          <span>{t("header.light")}</span>
        </>
      )}
    </button>
  );
}

export default ThemeToggle;
