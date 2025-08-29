import React from "react";
import { useTranslation } from "react-i18next";
import { WorkData } from "../../data/work";
import Separator from "../../common/separator";
import WorkCard from "./work-card";
import "./work.scss";

function Work() {
  const { t } = useTranslation();
  const data = WorkData;

  return (
    <div className="work">
      <Separator />
      <label className="section-title">{t("sections.work")}</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
