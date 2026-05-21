import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-shell footer-shell">
        <div>
          <Link className="brand" to="/">
            <span>{profile.initials}</span>
            {profile.name}
          </Link>
          <p>Designed and developed with a product-minded frontend approach.</p>
        </div>
        <div className="footer-links">
          <Link to="/project">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/blog">Notes</Link>
        </div>
        <div className="footer-links footer-socials">
          {profile.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
          <span>Copyright {year}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
