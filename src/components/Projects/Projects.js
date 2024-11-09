import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ChatStream from "../../Assets/Projects/ChatStream.jpg";
import WeatherApp from "../../Assets/Projects/WeatherApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatStream}
              isBlog={false}
              title="Study-Notion"
              description="StudyNotion is an educational technology platform that allows users to create, consume, and rate educational content. It is developed using the MERN stack (MongoDB, Express.js, React, Node.js) and serves as a functional learning tool as well as a sample project for educational or personal use."
              ghLink="https://github.com/Sachin-504/Study-Notion"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="WeatherApp"
              description="A Web Application that provides real-time weather updates for various locations. Users can search for current weather conditions and detailed forecasts for any city around the globe easily."
              ghLink="https://github.com/Sachin-504/Weather_App-Website"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
