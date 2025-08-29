import React from "react";
import { useTranslation } from "react-i18next";
import SocialContact from "../../common/social-contact";
import "./about.scss";
import aboutBanner from "../../../assets/Coding.png";

function About() {
  const { t } = useTranslation();
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        {t("about.hello")} 👋, {t("about.iam")}
          <br />
          <span className="info-name">Vinicius Batista.</span>
          <br />
          {t("about.iam_passionate")}
          <br />
          {t("about.about_web")}
        </div>
        <div className="about-photo">
          <img src={aboutBanner} alt="banner" className="picture" />
        </div>
      </div>
      <div className="social">
        <SocialContact />
      </div>
    </div>
  );
}

export default About;
