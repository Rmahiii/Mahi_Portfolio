import React, { useEffect, useState } from "react";
import { FiDownload, FiGithub, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

const navItems = [
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#skills" },
  { label: "Projects", to: "/#projects" },
  { label: "Experience", to: "/#experience" },
  { label: "Credentials", to: "/#achievements" },
  { label: "Contact", to: "/#contact" },
];

function NavBar({ theme, onThemeToggle }) {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setScrolled(window.scrollY >= 16);

    scrollHandler();
    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="site-shell nav-shell" aria-label="Primary navigation">
        <Link className="brand" to="/" onClick={() => setExpanded(false)}>
          <span>{profile.initials}</span>
          {profile.name}
        </Link>
        <button
          className="icon-button menu-toggle"
          type="button"
          aria-label={expanded ? "Close navigation" : "Open navigation"}
          aria-expanded={expanded}
          aria-controls="portfolio-navigation"
          onClick={() => setExpanded((currentState) => !currentState)}
        >
          {expanded ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
        <div className={`nav-panel ${expanded ? "is-open" : ""}`} id="portfolio-navigation">
          <div className="nav-links">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} onClick={() => setExpanded(false)}>
                {item.label}
              </Link>
            ))}
            <Link to="/resume" onClick={() => setExpanded(false)}>
              Resume
            </Link>
          </div>
          <div className="nav-actions">
            <button
              className="icon-button"
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              onClick={onThemeToggle}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
            </button>
            <a className="icon-button" href={profile.socials[0].href} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
              <FiGithub aria-hidden="true" />
            </a>
            <a className="nav-resume" href={profile.resume} download>
              <FiDownload aria-hidden="true" />
              CV
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
