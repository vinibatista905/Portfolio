import React from "react";
import { useTranslation } from "react-i18next";
import Separator from "../../common/separator";
import SkillCard from "./skill-card";
import { SkillsData } from "../../data/skills";
import "./skills.scss";

function Skills() {
  const { t } = useTranslation();
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
      <label className="section-title">{t("sections.skills")}</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div key={item.id} className="skills-section">
              <label className="skills-section-title">{t(item.type)}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard key={skill.id} skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
