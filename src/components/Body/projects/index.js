import React from "react";
import { useTranslation } from "react-i18next";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./project-card";
import Separator from "../../common/separator";
import "./projects.scss";

function Projects() {
  const { t } = useTranslation();
  const data = ProjectData;

  return (
    <div className="projects">
      <Separator />
      <label className="section-title">{t("sections.projects")}</label>
      <div className="projects-cards-container">
        {data.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
