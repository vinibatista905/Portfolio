import React from "react";
import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";
import { GrGithub } from "react-icons/gr";
import "./project-card.scss";

function ProjectCard({ project }) {
  const { t } = useTranslation();

  return (
    <div key={project.id} className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo} target="_blank">
              <div className="link-button">
                <FiGlobe className="icon" />
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github} target="_blank">
              <div className="link-button">
                <GrGithub className="icon" />
                Github
              </div>
            </a>
          )}
        </div>
        <p>{t(project.about)}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => {
            return <label key={index} className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" />
    </div>
  );
}

export default ProjectCard;
