import React, { Suspense } from "react";
import {
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiDownload,
  FiFileText,
  FiGithub,
  FiLayers,
  FiMessageCircle,
} from "react-icons/fi";
import profileImage from "../../Assets/Profile/mahi-photo.png";
import { achievements, credentials, education, experience, focusMetrics, openSource, profile, projects, skillGroups } from "../../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const Github = React.lazy(() => import("../About/Github"));

export function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="site-shell hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">Full Stack Developer</p>
          <h1>
            {profile.name}
            <span>{profile.title}</span>
          </h1>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a className="button button-secondary" href={profile.resume} download>
              <FiDownload aria-hidden="true" />
              Resume
            </a>
          </div>
          <div className="metric-row" aria-label="Portfolio highlights">
            {focusMetrics.map((item) => (
              <div className="metric" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="hero-visual" delay={120}>
          <div className="visual-frame profile-frame">
            <img src={profileImage} alt="Mahi Raj" />
          </div>
          <div className="availability-note">
            <span aria-hidden="true" />
            Building projects from {profile.location}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="content-section" id="about">
      <div className="site-shell about-grid">
        <Reveal className="about-media profile-about-media">
          <img loading="lazy" src={profileImage} alt="Mahi Raj profile" />
        </Reveal>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Hi, I am Mahi."
            copy="I am a third-year B.Tech student at IIITDM Jabalpur and I enjoy building full-stack web projects."
          />
          <div className="about-copy">
            <p>
              I mostly work with React, Node.js, Express, MongoDB, and modern frontend tools. I like turning ideas into working applications and improving them as I learn.
            </p>
            <p>
              This portfolio is a collection of the projects I have coded, the tools I use, and the open source programs and certificates that are part of my journey.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="content-section" id="skills">
      <div className="site-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tech stack I use."
            copy="These are the languages, frameworks, tools, and platforms I use while building my projects."
          />
        </Reveal>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <Reveal className="surface skill-card" delay={index * 70} key={group.title}>
              <h3>{group.title}</h3>
              <div className="chip-list">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection({ compact = false }) {
  return (
    <section className="content-section" id="projects">
      <div className="site-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title={compact ? "Projects I built." : "Projects I have worked on."}
            copy="Here are some projects I coded to practice full-stack development, frontend UI, and real app workflows."
          />
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal className="surface project-card" delay={index * 70} key={project.title}>
              <div className="project-image">
                <img loading="lazy" src={project.image} alt={`${project.title} preview`} />
              </div>
              <div className="project-body">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                </div>
                <p>{project.description}</p>
                <div className="chip-list">
                  {project.stack.map((item) => (
                    <span className="chip chip-quiet" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection({ id, eyebrow, title, icon: Icon, entries }) {
  return (
    <section className="content-section" id={id}>
      <div className="site-shell split-section">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} />
        </Reveal>
        <div className="timeline">
          {entries.map((entry, index) => (
            <Reveal className="surface timeline-item" delay={index * 80} key={`${entry.role || entry.degree}-${entry.place || entry.school}`}>
              <Icon aria-hidden="true" />
              <div>
                {entry.period && <span>{entry.period}</span>}
                <h3>{entry.role || entry.degree}</h3>
                <h4>{entry.place || entry.school}</h4>
                <p>{entry.details}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <TimelineSection
      id="experience"
      eyebrow="Experience"
      title="What I am currently building and contributing to."
      icon={FiBriefcase}
      entries={experience}
    />
  );
}

export function EducationSection() {
  return (
    <TimelineSection
      id="education"
      eyebrow="Education"
      title="Education."
      icon={FiBookOpen}
      entries={education}
    />
  );
}

export function AchievementsSection() {
  return (
    <section className="content-section" id="achievements">
      <div className="site-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements & Certifications"
            title="Certificates and achievements."
            copy="These are the programs, certificates, and contribution milestones I want to keep visible."
          />
        </Reveal>
        <div className="credential-grid">
          {credentials.map((credential, index) => (
            <Reveal
              className={`surface credential-card credential-card-${credential.type}`}
              delay={index * 55}
              key={credential.title}
            >
              {credential.preview ? (
                <a
                  className="credential-preview"
                  href={credential.asset}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${credential.title}`}
                >
                  <img loading="lazy" src={credential.preview} alt={`${credential.title} preview`} />
                </a>
              ) : (
                <div className="credential-document" aria-hidden="true">
                  <FiFileText />
                  <span>PDF</span>
                </div>
              )}
              <div className="credential-body">
                <div className="credential-meta">
                  <span>{credential.label}</span>
                  <strong>{credential.issuer}</strong>
                </div>
                <h3>{credential.title}</h3>
                <p>{credential.detail}</p>
                <a className="text-link" href={credential.asset} target="_blank" rel="noreferrer">
                  View credential
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="achievement-grid">
          {achievements.map((item, index) => (
            <Reveal className="surface statement-card" delay={index * 55} key={item.title}>
              <FiAward aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OpenSourceSection() {
  return (
    <section className="content-section" id="open-source">
      <div className="site-shell open-source-grid">
        <Reveal>
          <SectionHeading
            eyebrow="Open Source"
            title="Open source and GitHub."
            copy="I share my code publicly and keep learning through repositories, GitHub activity, and contribution programs."
          />
          <a className="text-link" href={profile.socials[0].href} target="_blank" rel="noreferrer">
            <FiGithub aria-hidden="true" />
            View GitHub profile
          </a>
        </Reveal>
        <div className="source-list">
          {openSource.map((item, index) => (
            <Reveal className="surface source-item" delay={index * 70} key={item}>
              <FiCode aria-hidden="true" />
              <p>{item}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GithubSection() {
  return (
    <section className="content-section" id="github">
      <div className="site-shell">
        <Reveal className="surface github-panel">
          <SectionHeading
            eyebrow="GitHub Stats"
            title="GitHub activity."
            copy="My recent public coding activity."
          />
          <Suspense fallback={<div className="loading-panel" role="status">Loading GitHub activity...</div>}>
            <Github />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="content-section" id="contact">
      <div className="site-shell">
        <Reveal className="contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let us connect.</h2>
            <p>
              You can reach me for full-stack opportunities, collaboration, project discussions, or open source work.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href={profile.socials[1].href} target="_blank" rel="noreferrer">
              <FiMessageCircle aria-hidden="true" />
              Connect on LinkedIn
            </a>
            <a className="button button-secondary" href={profile.resume} download>
              <FiDownload aria-hidden="true" />
              Download resume
            </a>
            <div className="social-row" aria-label="Social links">
              {profile.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PageIntro({ eyebrow, title, copy, icon: Icon = FiLayers }) {
  return (
    <section className="page-intro">
      <div className="site-shell">
        <Reveal className="surface intro-panel">
          <Icon aria-hidden="true" />
          <SectionHeading eyebrow={eyebrow} title={title} copy={copy} />
        </Reveal>
      </div>
    </section>
  );
}
