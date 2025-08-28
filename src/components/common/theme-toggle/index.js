import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import "./theme-toggle.scss";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? (
        <>
          <MdDarkMode />
          <span>Dark</span>
        </>
      ) : (
        <>
          <MdLightMode />
          <span>Light</span>
        </>
      )}
    </button>
  );
}

export default ThemeToggle;
