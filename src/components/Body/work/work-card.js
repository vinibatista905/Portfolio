import React from "react";
import "./work-card.scss";

function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img src={item.logo} className="work-logo" />
      <div className="work-info">
        <label className="service-name">{item.service}</label>
        <div className="work-desc">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
