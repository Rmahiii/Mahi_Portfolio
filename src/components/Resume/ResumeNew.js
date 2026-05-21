import React from "react";
import { FiDownload, FiFileText } from "react-icons/fi";
import { PageIntro } from "../Portfolio/PortfolioSections";
import { profile } from "../../data/portfolio";

function ResumeNew() {
  return (
    <>
      <PageIntro
        eyebrow="Resume"
        title="Resume and experience snapshot."
        copy="Preview the current CV in the browser or download the PDF for review."
        icon={FiFileText}
      />
      <section className="content-section resume-page">
        <div className="site-shell">
          <div className="resume-actions">
            <a className="button button-primary" href={profile.resume} download>
              <FiDownload aria-hidden="true" />
              Download PDF
            </a>
            <a className="button button-secondary" href={profile.resume} target="_blank" rel="noreferrer">
              Open in new tab
            </a>
          </div>
          <div className="surface resume-frame">
            <iframe loading="lazy" src={profile.resume} title={`${profile.name} resume PDF`} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ResumeNew;
