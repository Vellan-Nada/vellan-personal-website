import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard/Card";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";

function Projects() {
  const projects = [
    {
      title: "Timer",
      text: "A simple timer",
      image: project2,
      link: "https://vellan-nada.github.io/timer/",
    },
    {
      title: "Typing Test",
      text: "A website that measures typing speed and accuracy in real time",
      image: project6,
      link: "https://vellan-nada.github.io/typing-test/",
    },
    {
      title: "Tic-tac-toe",
      text: "The classic game",
      image: project5,
      link: "https://vellan-nada.github.io/tic-tac-toe/",
    },
    {
      title: "Simon Game",
      text: "A memory game where you repeat an increasingly long color sequence",
      image: project4,
      link: "https://vellan-nada.github.io/Simon-game/",
    },
    {
      title: "Note Taker",
      text: "Note taking app created using React",
      image: project7,
      link: "https://vellan-nada.github.io/notes/",
    },
    {
      title: "Rock, Paper & Scissors",
      text: "Another classic game",
      image: project3,
      link: "https://vellan-nada.github.io/Rock-paper-scissors/",
    },
    {
      title: "Calculator",
      text: "A simple calculator",
      image: project1,
      link: "https://vellan-nada.github.io/calculator/",
    },
    {
      title: "Dice Roll",
      text: "Selects a winner through dice roll",
      image: project8,
      link: "https://vellan-nada.github.io/Dice-Game/",
    },
  ];


  return (
    <Container className="my-3">
      {/* Section Title */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2
          className="mb-4"
          style={{
            borderBottom: "1px solid #ccc",
            display: "inline-block",
            paddingBottom: "0.5rem",
          }}
        >
          Projects
        </h2>
      </div>

      {/* Responsive Layout */}
      <Row className="g-4">
        {projects.map((project, i) => (
          <Col key={i} xs={12} sm={6} md={4}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ProjectCard
                title={project.title}
                text={project.text}
                image={project.image}
                link={project.link}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
