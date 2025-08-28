import React from "react";
import { IoIosLink } from "react-icons/io";
import "./experience-card.scss";

function ExperienceCard({ index, experience }) {
  return (
    <div key={index} className="experience-card">
      <div className="experience-title">
        <h3>
          {experience.role} | <span>{experience.company}</span>
          <a href={experience.link} target="_blank" className="experience-link">
            <div className="experience-link-icon">
              <IoIosLink />
            </div>
          </a>
        </h3>
      </div>
      <p className="period">{experience.period}</p>
      <p className="description">{experience.description}</p>

      <ul className="project-list">
        {experience.projects.map((proj, idx) => (
          <li key={idx} className="project-item">
            <div className="project-title">
              <strong>{proj.name}</strong>
              <a href={proj.link} target="_blank" className="experience-link">
                <div className="project-link-icon">
                  <IoIosLink />
                </div>
              </a>
            </div>
            <div className="tech-list">
              {proj.techs.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
