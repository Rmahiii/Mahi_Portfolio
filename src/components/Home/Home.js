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
  TestimonialsSection,
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
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

export default Home;
