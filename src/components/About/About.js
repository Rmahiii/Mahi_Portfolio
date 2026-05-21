import React from "react";
import {
  AboutSection,
  AchievementsSection,
  EducationSection,
  GithubSection,
  PageIntro,
  PrinciplesSection,
  SkillsSection,
} from "../Portfolio/PortfolioSections";

function About() {
  return (
    <>
      <PageIntro
        eyebrow="Profile"
        title="About Mahi Raj."
        copy="A focused view of the engineering practice, skill groups, education, and public proof behind the portfolio."
      />
      <AboutSection />
      <PrinciplesSection />
      <SkillsSection />
      <EducationSection />
      <AchievementsSection />
      <GithubSection />
    </>
  );
}

export default About;
