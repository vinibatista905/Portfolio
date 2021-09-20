import React from "react";
import { CgWebsite, CgBriefcase } from "react-icons/cg";
import { FaLaptopCode, FaRegUser } from "react-icons/fa";

import "./Web.scss";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <CgWebsite className="option-icon" />
          Projetos
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <FaLaptopCode className="option-icon" />
          Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <CgBriefcase className="option-icon" />
          Serviços
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <FaRegUser className="option-icon" />
          Contato
        </a>
      </div>
    </div>
  );
}

export default Web;
