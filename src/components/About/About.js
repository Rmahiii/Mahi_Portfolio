import React from "react";
import {
  AboutSection,
  AchievementsSection,
  EducationSection,
  GithubSection,
  PageIntro,
  SkillsSection,
} from "../Portfolio/PortfolioSections";

function About() {
  return (
    <>
      <PageIntro
        eyebrow="Profile"
        title="About Mahi Raj."
        copy="A quick view of my background, skills, certificates, and GitHub activity."
      />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <AchievementsSection />
      <GithubSection />
    </>
  );
}

export default About;
