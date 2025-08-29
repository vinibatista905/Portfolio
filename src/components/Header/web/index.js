import React from "react";
import { useTranslation } from "react-i18next";
import { CgWebsite, CgBriefcase } from "react-icons/cg";
import { FaCode, FaLaptopCode, FaRegUser } from "react-icons/fa";

import "./Web.scss";

function Web() {
  const { t } = useTranslation();
  return (
    <div className="web compact">
      <a href="#experience">
        <CgBriefcase className="option-icon" />
        <span className="tooltip">{t("header.experience")}</span>
      </a>
      <a href="#projects">
        <CgWebsite className="option-icon" />
        <span className="tooltip">{t("header.projects")}</span>
      </a>
      <a href="#skills">
        <FaCode className="option-icon" />
        <span className="tooltip">{t("header.skills")}</span>
      </a>
      <a href="#work">
        <FaLaptopCode className="option-icon" />
        <span className="tooltip">{t("header.work")}</span>
      </a>
      <a href="#contact">
        <FaRegUser className="option-icon" />
        <span className="tooltip">{t("header.contact")}</span>
      </a>
    </div>
  );
}

export default Web;
