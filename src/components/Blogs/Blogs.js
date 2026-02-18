import React from "react";

function Blogs() {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "60px",
        maxWidth: "900px",
        margin: "auto",
        color: "white",
        lineHeight: "1.8",
      }}
    >
      <h1>Technical Overview & Development Practices</h1>
      <hr style={{ borderColor: "#555" }} />

      <h2>Version Control with Git</h2>
      <p>
        Git is a distributed version control system that enables developers
        to track changes, manage source code history, and collaborate
        efficiently in team environments.
      </p>
      <p>
        It provides branching strategies, commit history tracking,
        and conflict resolution mechanisms, making it essential for
        modern software development workflows.
      </p>

      <h3>Core Git Concepts</h3>
      <ul>
        <li>Repository Initialization and Configuration</li>
        <li>Branching and Merging Strategies</li>
        <li>Staging Area and Commit Lifecycle</li>
        <li>Remote Repository Management</li>
      </ul>

      <h2>Collaboration & Code Hosting with GitHub</h2>
      <p>
        GitHub serves as a cloud-based platform for hosting Git repositories.
        It enhances collaboration through pull requests, code reviews,
        issue tracking, and project management tools.
      </p>
      <p>
        In professional environments, GitHub also supports CI/CD pipelines,
        automated testing workflows, and deployment strategies using
        GitHub Actions.
      </p>

      <h2>Modern Web Styling with CSS</h2>
      <p>
        CSS (Cascading Style Sheets) is responsible for designing and
        structuring user interfaces. Modern CSS focuses on responsive
        layouts, accessibility, and performance optimization.
      </p>

      <h3>Key Areas of Expertise</h3>
      <ul>
        <li>Responsive Design using Media Queries</li>
        <li>Layout Systems (Flexbox & Grid)</li>
        <li>UI Consistency and Component Styling</li>
        <li>Performance-Aware Styling Practices</li>
      </ul>

      <h2>Programming Languages & Backend Development</h2>
      <p>
        My development stack is built on strong foundations in:
      </p>

      <ul>
        <li>
          <strong>JavaScript</strong> – Core language for frontend and backend logic
        </li>
        <li>
          <strong>Node.js</strong> – Runtime environment for building scalable backend systems
        </li>
        <li>
          <strong>C++</strong> – Efficient system-level and algorithmic programming
        </li>
        <li>
          <strong>Java</strong> – Object-oriented programming and application design
        </li>
      </ul>

      <h2>Engineering Approach</h2>
      <p>
        My approach to software development emphasizes clean architecture,
        modular code structure, maintainability, and performance optimization.
        I focus on writing scalable solutions that follow industry best practices
        and modern development standards.
      </p>

      <hr style={{ borderColor: "#555", marginTop: "40px" }} />

      <p style={{ textAlign: "center", marginTop: "20px", color: "#9f7aea" }}>
        Building scalable systems through structured engineering practices.
      </p>
    </div>
  );
}

export default Blogs;
