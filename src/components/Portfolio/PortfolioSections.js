import React, { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiDownload,
  FiFileText,
  FiGithub,
  FiLayers,
  FiMessageCircle,
  FiSend,
  FiUserCheck,
} from "react-icons/fi";
import profileImage from "../../Assets/Profile/mahi-photo.png";
import { achievements, codingProfiles, credentials, education, experience, focusMetrics, openSource, profile, projectImageFallbacks, projects, skillGroups, testimonials } from "../../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const Github = React.lazy(() => import("../About/Github"));

const projectVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ProjectCard({ project, index }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageSrc = project.image || projectImageFallbacks[project.imageCategory] || projectImageFallbacks.default;

  const moveHandler = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    setTilt({ rotateX: y * -6, rotateY: x * 6 });
    event.currentTarget.style.setProperty("--image-x", `${x * 10}px`);
    event.currentTarget.style.setProperty("--image-y", `${y * 10}px`);
  };

  return (
    <motion.article
      className="surface project-card"
      custom={index}
      initial="hidden"
      animate="show"
      variants={projectVariants}
      onMouseMove={moveHandler}
      onMouseLeave={(event) => {
        setTilt({ rotateX: 0, rotateY: 0 });
        event.currentTarget.style.setProperty("--image-x", "0px");
        event.currentTarget.style.setProperty("--image-y", "0px");
      }}
      style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: "preserve-3d" }}
    >
      <div className={`project-image ${imageLoaded ? "is-loaded" : "is-loading"}`}>
        <img
          loading="lazy"
          decoding="async"
          src={imageSrc}
          alt={`${project.title} preview`}
          onLoad={() => setImageLoaded(true)}
          onError={(event) => {
            if (event.currentTarget.src !== projectImageFallbacks.default) {
              event.currentTarget.src = projectImageFallbacks.default;
            }
            setImageLoaded(true);
          }}
        />
        <div className="project-image-overlay" aria-hidden="true" />
        <div className="project-badge-row">
          <span>{project.category}</span>
          {project.demo && <span className="live-badge">Live</span>}
        </div>
      </div>
      <div className="project-body">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <div className="project-actions">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>
                <FiArrowUpRight aria-hidden="true" />
                <span>Live</span>
              </a>
            )}
            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
              <FiGithub aria-hidden="true" />
              <span>Code</span>
            </a>
          </div>
        </div>
        <p>{project.description}</p>
        <div className="project-stats">
          {project.stats.map((item, statIndex) => (
            <span key={item}>
              <strong>{String(statIndex + 1).padStart(2, "0")}</strong>
              {item}
            </span>
          ))}
        </div>
        <div className="chip-list tech-chip-list">
          {project.stack.map((item) => (
            <span className="chip chip-quiet" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

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
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection({ id, eyebrow, title, entries }) {
  return (
    <section className="content-section" id={id}>
      <div className="site-shell split-section">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} />
        </Reveal>
        <div className="timeline">
          {entries.map((entry, index) => (
            <Reveal className="surface timeline-item" delay={index * 80} key={`${entry.role || entry.degree}-${entry.place || entry.school}`}>
              <div className="timeline-marker" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
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
              <div className="repo-card-meta">
                <span>repo</span>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
              </div>
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
        <div className="stats-grid">
          <Reveal className="surface github-panel">
            <SectionHeading
              eyebrow="GitHub Heatmap"
              title="Contribution activity."
              copy="A live contribution heatmap connected to my public GitHub profile."
            />
            <Suspense fallback={<div className="loading-panel" role="status">Loading GitHub activity...</div>}>
              <Github />
            </Suspense>
          </Reveal>
          <Reveal className="surface github-panel github-stat-card" delay={90}>
            <SectionHeading
              eyebrow="GitHub Stats"
              title="Repository signal."
              copy="Live cards from GitHub Readme Stats."
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://github-readme-stats.vercel.app/api?username=23bsm038-Mahi&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0F172A&title_color=F8FAFC&text_color=94A3B8&icon_color=60A5FA"
              alt="Mahi Raj GitHub stats"
            />
            <div className="commit-graph" aria-label="Recent development flow">
              {["Commit", "Review", "Build", "Ship"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [formState, setFormState] = useState("idle");
  const [formMessage, setFormMessage] = useState("");
  const [visitorCount] = useState(() => {
    const storedCount = Number(window.localStorage.getItem("portfolio-visits") || "0") + 1;
    window.localStorage.setItem("portfolio-visits", String(storedCount));
    return storedCount;
  });

  const buildMailtoLink = ({ name, email, message }) => {
    const subject = `Portfolio contact from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const sendWithFormSubmit = ({ name, email, message }) =>
    fetch(`https://formsubmit.co/ajax/${profile.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _replyto: email,
        _subject: `Portfolio contact from ${name}`,
        _template: "table",
        _captcha: "false",
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("FormSubmit request failed");
      }

      return response.json();
    });

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const userName = String(formData.get("user_name") || "").trim();
    const userEmail = String(formData.get("user_email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!userName || !userEmail || !message) {
      setFormState("error");
      setFormMessage("Please fill in every field before sending.");
      return;
    }

    if (message.length < 12) {
      setFormState("error");
      setFormMessage("Please add a little more detail to your message.");
      return;
    }

    setFormState("sending");
    setFormMessage("Sending your message...");

    if (!serviceId || !templateId || !publicKey) {
      sendWithFormSubmit({ name: userName, email: userEmail, message })
        .then(() => {
          setFormState("sent");
          setFormMessage("Message sent successfully. Please check your inbox once to confirm FormSubmit if this is the first message.");
          form.reset();
        })
        .catch(() => {
          setFormState("draft-opened");
          setFormMessage("Online delivery could not complete, so a ready-to-send mail draft was opened instead.");
          window.location.href = buildMailtoLink({ name: userName, email: userEmail, message });
        });
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form, publicKey)
      .then(() => {
        setFormState("sent");
        setFormMessage("Message sent successfully. Thank you for reaching out.");
        form.reset();
      })
      .catch(() => {
        setFormState("draft-opened");
        setFormMessage("The email service did not respond, so a ready-to-send mail draft was opened instead.");
        window.location.href = buildMailtoLink({ name: userName, email: userEmail, message });
      });
  };

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
            <div className="visitor-counter">
              <FiUserCheck aria-hidden="true" />
              Portfolio visit #{visitorCount}
            </div>
          </div>
          <form className="contact-form" onSubmit={submitHandler}>
            <input type="hidden" name="to_email" value={profile.email} />
            <label>
              Name
              <input name="user_name" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="user_email" type="email" required placeholder="your@email.com" />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" required placeholder="Tell me about the role, project, or collaboration." />
            </label>
            <button className="button button-primary" type="submit" disabled={formState === "sending"}>
              <FiSend aria-hidden="true" />
              {formState === "sending" ? "Sending..." : "Send message"}
            </button>
            {formMessage && (
              <p className={`form-note form-note-${formState}`} role={formState === "error" ? "alert" : "status"}>
                {formMessage}
              </p>
            )}
          </form>
          <div className="contact-actions">
            <a className="button button-primary" href={profile.socials[1].href} target="_blank" rel="noreferrer">
              <FiMessageCircle aria-hidden="true" />
              Connect on LinkedIn
            </a>
            <a className="button button-secondary" href={`mailto:${profile.email}`}>
              <FiSend aria-hidden="true" />
              Email directly
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

export function CodingProfilesSection() {
  return (
    <section className="content-section" id="coding-profiles">
      <div className="site-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Coding Profiles"
            title="Profiles recruiters can inspect."
            copy="Public links for code, professional activity, and problem-solving presence."
          />
        </Reveal>
        <div className="profile-grid">
          {codingProfiles.map((item, index) => (
            <Reveal className="surface profile-card" delay={index * 70} key={item.platform}>
              <h3>{item.platform}</h3>
              <p>{item.metric}</p>
              <a className="text-link" href={item.href} target="_blank" rel="noreferrer">
                {item.handle}
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="content-section" id="testimonials">
      <div className="site-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Professional positioning."
            copy="Short recruiter-facing proof points that explain how to read the portfolio."
          />
        </Reveal>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <Reveal className="surface testimonial-card" delay={index * 80} key={item.name}>
              <p>"{item.quote}"</p>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </Reveal>
          ))}
        </div>
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
