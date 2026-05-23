import React from "react";
import {
  AboutSection,
  AchievementsSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  GithubSection,
  HeroSection,
  CodingProfilesSection,
  OpenSourceSection,
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
      <ExperienceSection />
      <EducationSection />
      <AchievementsSection />
      <OpenSourceSection />
      <GithubSection />
      <CodingProfilesSection />
      <ContactSection />
    </>
  );
}

export default Home;
