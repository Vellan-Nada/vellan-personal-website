import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import linkedinLogo from "../assets/linkedin.png"; // make sure you have this image
import "./Contact.css";

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container fluid>
        <Row className="align-items-center text-center text-md-start">
          {/* Left: Quote */}
          <Col md={4} className="mb-3 mb-md-0">
            <p className="footer-quote">
              Thanks for visiting my website!{" "}
              <span className="footer-dance" role="img" aria-label="dancing">
                🕺
              </span>
              <span className="footer-dance" role="img" aria-label="dancing">
                💃🏼
              </span>
            </p>
          </Col>

          {/* Center: Copyright */}
          <Col md={4} className="mb-3 mb-md-0 text-md-center">
            <p className="footer-text">
              © {currentYear} Vellan Nadarajan. All rights reserved.
            </p>
          </Col>

          {/* Right: LinkedIn */}
          <Col md={4} className="text-md-end">
            <a
                href="https://www.linkedin.com/in/vellan-nadarajan"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                    src={linkedinLogo}
                    alt="LinkedIn"
                    className="linkedin-logo"
                />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Contact;
