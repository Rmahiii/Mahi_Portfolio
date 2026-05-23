import React, { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCommand,
  FiDownload,
  FiFileText,
  FiGithub,
  FiLayers,
  FiLinkedin,
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
  hidden: { opacity: 0, y: 12 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, delay: index * 0.04, ease: "easeOut" },
  }),
};

function ProjectCard({ project, index }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageSrc = project.image || projectImageFallbacks[project.imageCategory] || projectImageFallbacks.default;

  return (
    <motion.article
      className="surface project-card"
      custom={index}
      initial="hidden"
      animate="show"
      variants={projectVariants}
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

function WorkspaceCard() {
  return (
    <div className="workspace-card" aria-label="Engineering workspace preview">
      <div className="workspace-topbar">
        <span />
        <span />
        <span />
        <strong>mahi-portfolio/main</strong>
      </div>
      <div className="workspace-body">
        <aside>
          <span>src</span>
          <span>api</span>
          <span>components</span>
          <span>deploy</span>
        </aside>
        <div className="workspace-code">
          <p><span>const</span> focus = "full-stack systems";</p>
          <p><span>build</span>({`{ api, ui, auth, deploy }`});</p>
          <p><span>ship</span>("working software");</p>
        </div>
      </div>
      <div className="workspace-footer">
        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
        <span>Vercel</span>
      </div>
    </div>
  );
}

function FocusMarquee() {
  const items = [
    "Full Stack Engineering",
    "React + Node.js",
    "Clean UX",
    "API Integration",
    "Deployment Ready",
    "Open Source",
  ];

  return (
    <div className="focus-marquee" aria-label="Engineering focus areas">
      <div>
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="site-shell hero-shell">
        <Reveal className="hero-copy">
          <p className="hello-line">Hello · नमस्ते · こんにちは · Hola · Hallo</p>
          <a className="command-pill" href="#projects">
            <FiCommand aria-hidden="true" />
            Search projects, work, stack
            <kbd>⌘K</kbd>
          </a>
          <div className="hero-avatar-wrap">
            <img src={profileImage} alt="Mahi Raj" />
          </div>
          <p className="eyebrow">Software Engineer</p>
          <h1>{profile.name}</h1>
          <h2>{profile.summary}</h2>
          <a className="hero-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <p className="hero-summary">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={profile.socials[0].href} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" />
              GitHub
            </a>
            <a className="button button-secondary" href={profile.socials[1].href} target="_blank" rel="noreferrer">
              <FiLinkedin aria-hidden="true" />
              LinkedIn
            </a>
            <a className="button button-secondary" href={profile.resume} download>
              <FiDownload aria-hidden="true" />
              Resume
            </a>
          </div>
        </Reveal>
        <Reveal className="hero-proof" delay={80}>
          <div className="metric-row" aria-label="Portfolio highlights">
            {focusMetrics.map((item) => (
              <div className="metric" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <WorkspaceCard />
        </Reveal>
      </div>
      <FocusMarquee />
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
            title="I care about clear interfaces and working systems."
            copy="I am a B.Tech student at IIITDM Jabalpur building full-stack applications, AI-assisted tools, and public projects that can be reviewed through code."
          />
          <div className="about-copy">
            <p>
              I mostly work with React, Node.js, Express, MongoDB, and modern frontend tools. I focus on project structure, user flows, API boundaries, and deployment details.
            </p>
            <p>
              This portfolio is intentionally simple: inspect the projects, open the repos, check the resume, and reach out if the work matches what your team needs.
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
            title={compact ? "Selected engineering projects." : "Selected engineering projects."}
            copy="Each project is documented by the problem it solves, the implementation approach, and the engineering tradeoffs involved."
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
            title="GitHub and open source."
            copy="A simple view of how I use GitHub for projects, learning, and public work."
          />
          <a className="text-link" href={profile.socials[0].href} target="_blank" rel="noreferrer">
            <FiGithub aria-hidden="true" />
            View GitHub profile
          </a>
        </Reveal>
        <div className="source-list">
          {openSource.map((item, index) => (
            <Reveal className="surface source-item" delay={index * 70} key={item}>
              <span className="source-dot" aria-hidden="true" />
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
              eyebrow="GitHub"
              title="Contribution activity."
              copy="My public GitHub activity from the last year."
            />
            <Suspense fallback={<div className="loading-panel" role="status">Loading GitHub activity...</div>}>
              <Github />
            </Suspense>
          </Reveal>
          <Reveal className="surface github-panel github-stat-card" delay={90}>
            <SectionHeading
              eyebrow="GitHub Stats"
              title="GitHub stats."
              copy="A quick snapshot of public repository activity."
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
