import React from "react";
import "./contact.scss";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
import { AiOutlineCloudDownload } from "react-icons/ai";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <labe className="section-title">Contato</labe>
      <div className="contact-container">
        <div className="contact-left">
          <p>
            Deseja entrar em contato? Me contate em qualquer uma das
            plataformas.
          </p>
          <SocialContact />
        </div>
        <a
          className="resume-link"
          download
          href={
            require("../../../assets/CV - Vinicius Batista 2025.pdf").default
          }
        >
          <div className="link-button-contact">
            <AiOutlineCloudDownload className="cloud" />
            Baixar Currículo
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
