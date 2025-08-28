import React from "react";
import { CgWebsite, CgBriefcase } from "react-icons/cg";
import { FaCode, FaLaptopCode, FaRegUser } from "react-icons/fa";

import "./Web.scss";

function Web() {
  return (
    <div className="web compact">
      <a href="#experience">
        <CgBriefcase className="option-icon" />
        <span className="tooltip">Experiência</span>
      </a>
      <a href="#projects">
        <CgWebsite className="option-icon" />
        <span className="tooltip">Projetos</span>
      </a>
      <a href="#skills">
        <FaCode className="option-icon" />
        <span className="tooltip">Skills</span>
      </a>
      <a href="#work">
        <FaLaptopCode className="option-icon" />
        <span className="tooltip">Serviços</span>
      </a>
      <a href="#contact">
        <FaRegUser className="option-icon" />
        <span className="tooltip">Contato</span>
      </a>
    </div>
  );
}

export default Web;
