import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Mahi Raj</span> from{" "}
            <span className="purple">India</span>.
            <br />
            I am currently a <span className="purple">3rd Year B.Tech Student</span>{" "}
            at <span className="purple">IIITDM Jabalpur</span>.
            <br />
            I’m passionate about{" "}
            <span className="purple">Full Stack Development</span> and building
            scalable, high-performance web applications.
            <br />
            I have hands-on experience with{" "}
            <span className="purple">JavaScript, Node.js, C++, HTML, CSS and Java</span>,
            and I enjoy solving real-world problems through clean and efficient code.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies.
            </li>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming & Problem Solving.
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Real-World Projects.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and never stop improving."{" "}
          </p>
          <footer className="blockquote-footer">Mahi Raj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
