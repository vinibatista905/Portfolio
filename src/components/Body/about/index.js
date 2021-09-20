import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Olá 👋, eu sou
          <br />
          <span className="info-name">Vinicius Batista.</span>
          <br />
          Eu sou apaixonado
          <br />
          por desenvolvimento web.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/Coding.png").default}
            className="picture"
          />
        </div>
      </div>
      <div className='social'>
      <SocialContact />
      </div>
    </div>
  );
}

export default About;
