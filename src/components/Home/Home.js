import React from "react";
import {
  AboutSection,
  AchievementsSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  GithubSection,
  HeroSection,
  OpenSourceSection,
  PrinciplesSection,
  ProjectsSection,
  SkillsSection,
} from "../Portfolio/PortfolioSections";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <PrinciplesSection />
      <ExperienceSection />
      <EducationSection />
      <AchievementsSection />
      <OpenSourceSection />
      <GithubSection />
      <ContactSection />
    </>
  );
}

export default Home;
