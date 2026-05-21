import React from "react";
import { FiPenTool } from "react-icons/fi";
import { PageIntro } from "../Portfolio/PortfolioSections";

const notes = [
  {
    title: "Version control",
    copy: "Git and GitHub keep work reviewable through branching, history, pull requests, issue tracking, and deployment workflows.",
  },
  {
    title: "Frontend systems",
    copy: "Responsive CSS, reusable components, accessibility checks, and performance-aware interactions shape software people can use repeatedly.",
  },
  {
    title: "Backend foundations",
    copy: "Node.js, APIs, data modeling, authentication, and maintainable service boundaries matter as much as a polished interface.",
  },
  {
    title: "Engineering approach",
    copy: "I prefer modular code, explicit tradeoffs, and project structure that leaves future changes easier than the first implementation.",
  },
];

function Blogs() {
  return (
    <>
      <PageIntro
        eyebrow="Notes"
        title="Development practices."
        copy="A compact overview of the habits and engineering concerns that guide the portfolio work."
        icon={FiPenTool}
      />
      <section className="content-section">
        <div className="site-shell notes-grid">
          {notes.map((note) => (
            <article className="surface note-card" key={note.title}>
              <h2>{note.title}</h2>
              <p>{note.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blogs;
