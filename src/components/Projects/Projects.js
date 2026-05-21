import React from "react";
import { ContactSection, PageIntro, ProjectsSection } from "../Portfolio/PortfolioSections";

function Projects() {
  return (
    <>
      <PageIntro
        eyebrow="Work"
        title="Projects I built."
        copy="A closer look at the projects I coded and the technologies I used."
      />
      <ProjectsSection compact />
      <ContactSection />
    </>
  );
}

export default Projects;
