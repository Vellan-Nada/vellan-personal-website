import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Card.css"

function ProjectCard({ title, text, image, link }) {
  return (
    <Card
      style={{
        width: "20rem",
        minHeight: "22rem",
      }}
      className="shadow"
    >
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "contain",
          objectPosition: "center",
          borderBottom: "1px solid #ddd",
          backgroundColor: "#f8f9fa",
        }}
      />

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button
          variant="primary"
          onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
        >
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
