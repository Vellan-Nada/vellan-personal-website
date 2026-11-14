import React from "react";
import { Container } from "react-bootstrap";
import "./Certifications.css";

import dsaPdf from "../assets/UC-36c1c34a-a2d0-407d-8796-2f71f1a680e5.pdf";
import fullStackPdf from "../assets/UC-4585aad4-c59b-49eb-972a-926838a7556a.pdf";
import jsFundamentalsPdf from "../assets/certificate-of-completion-for-javascript-basics.pdf";
import pythonPdf from "../assets/Vellan Nadarajan_certificate-of-completion-for-python-programming.pdf";

// thumbnails = first page of each PDF rendered to JPG
import dsaThumb from "../assets/cert-js-dsa.jpg";
import fullStackThumb from "../assets/cert-fullstack.jpg";
import jsFundamentalsThumb from "../assets/cert-js-fundamentals.jpg";
import pythonThumb from "../assets/cert-python.jpg";

// Newest first. `verifyUrl` is optional: if missing, the serial number is shown instead.
// `pdf` + `thumb` give the clickable preview at the top of the card.
const certifications = [
  {
    title: "JavaScript Algorithms and Data Structures Masterclass",
    issuer: "Udemy",
    instructor: "Colt Steele",
    date: "Oct 2026",
    length: "22 hours",
    verifyUrl: "https://ude.my/UC-36c1c34a-a2d0-407d-8796-2f71f1a680e5",
    pdf: dsaPdf,
    thumb: dsaThumb,
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    instructor: "Dr. Angela Yu",
    date: "May 2026",
    length: "62 hours",
    verifyUrl: "https://ude.my/UC-4585aad4-c59b-49eb-972a-926838a7556a",
    pdf: fullStackPdf,
    thumb: fullStackThumb,
  },
  {
    title: "Ultimate JavaScript Part 1: Fundamentals",
    issuer: "Code with Mosh",
    instructor: "Mosh Hamedani",
    date: "Feb 2025",
    serial: "cert_c8h0v1q8",
    pdf: jsFundamentalsPdf,
    thumb: jsFundamentalsThumb,
  },
  {
    title: "Complete Python Mastery",
    issuer: "Code with Mosh",
    instructor: "Mosh Hamedani",
    date: "Sep 2020",
    serial: "cert_t0ztsxfn",
    pdf: pythonPdf,
    thumb: pythonThumb,
  },
];

// issuer -> modifier class for the accent colour
const issuerClass = {
  Udemy: "cert-card--udemy",
  "Code with Mosh": "cert-card--mosh",
};

function Certifications() {
  return (
    <Container>
      {/* Section title */}
      <div className="section-title-wrap">
        <h2 className="section-title">Certifications</h2>
      </div>

      <div className="cert-grid">
        {certifications.map((cert) => (
          <article
            key={cert.title}
            className={`cert-card ${issuerClass[cert.issuer] ?? ""}`}
          >
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-thumb"
              aria-label={`Open ${cert.title} certificate (PDF)`}
            >
              <img src={cert.thumb} alt="" loading="lazy" />
              <span className="cert-thumb-hint">Open PDF</span>
            </a>

            <div className="cert-body">
              <span className="cert-issuer">{cert.issuer}</span>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-instructor">{cert.instructor}</p>

              <div className="cert-meta">
                <span>{cert.date}</span>
                {cert.length && <span>{cert.length}</span>}
              </div>

              <div className="cert-footer">
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-verify"
                  >
                    Verify on {cert.issuer} ↗
                  </a>
                ) : (
                  <span className="cert-serial">Serial: {cert.serial}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}

export default Certifications;
