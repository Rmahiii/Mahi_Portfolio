import React from "react";
import { ContactSection, PageIntro, PrinciplesSection, ProjectsSection } from "../Portfolio/PortfolioSections";

function Projects() {
  return (
    <>
      <PageIntro
        eyebrow="Work"
        title="Selected engineering work."
        copy="Case studies framed with product context, implementation focus, and direct paths to the source."
      />
      <ProjectsSection compact />
      <PrinciplesSection />
      <ContactSection />
    </>
  );
}

export default Projects;
