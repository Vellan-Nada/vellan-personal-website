// src/components/Skills.jsx
import React from "react";
import "./Skills.css"; // ✅ import your CSS file

// import images (place them in /src/assets)
import jsLogo from "../assets/js.png";
import pythonLogo from "../assets/python.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import nodejsLogo from "../assets/nodejs.png";
import reactLogo from "../assets/react.png";
import pgLogo from "../assets/pg.png";

const skills = [
  { name: "JavaScript", image: jsLogo },
  { name: "Python", image: pythonLogo },
  { name: "HTML", image: htmlLogo },
  { name: "CSS", image: cssLogo },
  { name: "NodeJS", image: nodejsLogo },
  { name: "React", image: reactLogo },
  { name: "PostgreSQL", image: pgLogo },
];

function Skills() {
  return (
    <section className="skills-container">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
