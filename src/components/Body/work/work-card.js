import React from "react";
import { useTranslation } from "react-i18next";
import "./work-card.scss";

function WorkCard({ item }) {
  const { t } = useTranslation();

  return (
    <div className="work-card">
      <img src={item.logo} className="work-logo" />
      <div className="work-info">
        <label className="service-name">{t(item.service)}</label>
        <div className="work-desc">
          <p>{t(item.description)}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
