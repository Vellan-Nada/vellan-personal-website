import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Career.css";

function Career() {
  return (
    <div className="career-section">
      <Container fluid>
        {/* Section title */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2
            className="mb-4"
            style={{
              borderBottom: "1px solid #ccc",
              display: "inline-block",
              paddingBottom: "0.3rem",
            }}
          >
            Career
          </h2>
        </div>

        {/* Two career cards side-by-side */}
        <Row className="career-row">
          {/* Dyson card (dark background) */}
          <Col md={6} className="p-0">
            <Card className="career-card dyson-card">
              <Card.Body>
                <div className="career-header">
                  <Card.Title className="career-title">
                    Design Engineer at Dyson
                  </Card.Title>
                  <span className="career-badge">2 years</span>
                </div>
                <Card.Text className="career-summary">
                  Designed vacuum cleaner components, from
                  concept through production release.
                </Card.Text>
                <div className="career-tags">
                  <span>NX Siemens</span>
                  <span>3D Modeling</span>
                  <span>Prototyping</span>
                  <span>Tolerance Analysis</span>
                  <span>BOM Management</span>
                </div>
                <ul className="career-list">
                  <li>Designed plastic parts and seals across 3 major projects.</li>
                  <li>
                    Released complete sub-assembly drawing and BOM.
                  </li>
                  <li>Conducted tolerance analysis, built prototypes, and performed leak and investigative tests.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Perfex Heat Transfer card (light background) */}
          <Col md={6} className="p-0">
            <Card className="career-card perfex-card">
              <Card.Body>
                <div className="career-header">
                  <Card.Title className="career-title">
                    Design Engineer at Perfex Heat Transfer
                  </Card.Title>
                  <span className="career-badge">6 months</span>
                </div>
                <Card.Text className="career-summary">
                  Designed industrial genset radiator systems.
                </Card.Text>
                <div className="career-tags">
                  <span>SolidWorks</span>
                  <span>3D Modeling</span>
                  <span>CFD Simulation</span>
                  <span>CAD Drawing</span>
                </div>
                <ul className="career-list">
                  <li>Reviewed drawings to ensure manufacturing readiness.</li>
                  <li>Modeled radiator parts and assemblies in SolidWorks.</li>
                  <li>Ran CFD simulation to compare the performance of redesigned parts.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Career;
