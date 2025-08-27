import React from "react";
import Experience from "./experience";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Work from "./work";
import Contact from "./contact";
import ScrollToTop from "../common/scroll-to-top";
import "./Body.scss";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <ScrollToTop />
    </div>
  );
}

export default Body;
