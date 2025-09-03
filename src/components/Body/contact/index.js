import React from "react";
import { useTranslation } from "react-i18next";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
import { AiOutlineCloudDownload } from "react-icons/ai";
import cvFile from "../../../assets/CV - Vinicius Batista.pdf";
import "./contact.scss";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <Separator />
      <label className="section-title">{t("sections.contact")}</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>{t("contact.description")}</p>
          <SocialContact />
        </div>
        <a className="resume-link" download href={cvFile}>
          <div className="link-button-contact">
            <AiOutlineCloudDownload className="cloud" />
            {t("contact.resumeButton")}
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
