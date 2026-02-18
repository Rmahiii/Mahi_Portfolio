import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// You can replace these images later with your own project screenshots
import vscodeImg from "../../Assets/Projects/vscode.png";
import ecommerceImg from "../../Assets/Projects/e-commerce.png";
import artworkImg from "../../Assets/Projects/artswork.png";
import yoomImg from "../../Assets/Projects/yoom.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I have developed showcasing my skills in full stack development.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* VS Code Clone */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vscodeImg}
              isBlog={false}
              title="VS Code Clone"
              description="A Visual Studio Code inspired web-based editor built using React.js. It supports HTML, CSS, and JavaScript editing with live preview functionality. Designed with a modern UI to replicate the VS Code experience."
              ghLink="https://github.com/23bsm038-Mahi/vs-code-clone"   // Replace with your actual repo link
              demoLink="#"  // Add deployed link if available
            />
          </Col>

          {/* E-Commerce Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerceImg}
              isBlog={false}
              title="E-Commerce Website"
              description="A full stack e-commerce web application developed using React.js and Node.js. It includes product listing, cart functionality, user authentication, and order management features."
              ghLink="https://github.com/23bsm038-Mahi/E-commerce-"   // Replace with actual repo
              demoLink="#"  // Add live demo link if deployed
            />
          </Col>

          {/* Artwork Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artworkImg}
              isBlog={false}
              title="Artwork Portfolio Project"
              description="A creative web platform designed to showcase digital artwork collections. Built with responsive design principles, focusing on modern UI/UX and smooth navigation experience."
              ghLink="https://github.com/23bsm038-Mahi/Artworks-App"  // Replace with actual repo
              demoLink="#"  // Add demo link if available
            />
          </Col>
           
            <Col md={4} className="project-card">
  <ProjectCard
    imgPath={yoomImg}
    isBlog={false}
    title="Yoom – Digital Artwork Platform"
    description="Yoom is a modern web platform designed to showcase and manage digital artwork collections. Built with a responsive and user-centric design approach, it provides smooth navigation, structured content display, and optimized performance. The project focuses on clean UI architecture and scalable frontend implementation."
    ghLink="https://github.com/23bsm038-Mahi/Yoom"
    demoLink="#"  // Add live demo link if deployed
  />
</Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
