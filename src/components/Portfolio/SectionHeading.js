import React from "react";

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </header>
  );
}

export default SectionHeading;
