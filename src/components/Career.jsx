import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Career.css";

function Career() {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        padding: "4rem 0",
         marginBottom: "4rem",
      }}
    >
      <Container fluid >
        {/* Section title */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2
            className="mb-5"
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
          {/* Dyson card (black background) */}
          <Col md={6} className="p-0">
            <Card className="career-card dyson-card">
              <Card.Body>
                <Card.Title>Design Engineer at Dyson</Card.Title>
                <br />
                <Card.Text>
                  Worked as a design engineer for about 2 years focusing on designing vacuum cleaners
                </Card.Text>
                <ul>
                  <li>
                    Designed multiple plastic parts and seals across 3 projects. 3D modelled the parts using NX Siemens.
                  </li>
                  <br/>
                  <li>
                    Managed the bill of materials (BOM) for a vacuum cleaner’s sub-assembly and released it for production
                    process. Generated assembly drawing and part drawings using NX Siemens.
                  </li>
                  <br/>
                  <li>
                    Conducted tolerance analysis, built prototypes, and performed leak and investigative tests to ensure design compliance.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Perfex Heat Transfer card (white background) */}
          <Col md={6} className="p-0">
            <Card className="career-card perfex-card">
              <Card.Body>
                <Card.Title>Design Engineer at Perfex Heat Transfer</Card.Title>
                <br/>
                <Card.Text>
                  Worked as a design engineer for 6 months focusing on designing genset radiators
                </Card.Text>
                <ul>
                  <li>
                    Reviewed engineering drawings to ensure they are production ready before sending for manufacturing.
                  </li>
                  <br/>
                  <li>
                    3D modelled radiator parts using SolidWorks.
                  </li>
                  <br/>
                  <li>
                    Investigated different designs for some radiator parts. Performed CFD simulations to analyze the performance of those redesigned parts using SolidWorks Flow Simulation.
                  </li>
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
