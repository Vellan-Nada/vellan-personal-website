import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function BasicExample() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Aim at the section's title (sections now have top padding), minus navbar height
      const target = section.querySelector("h2") ?? section;
      const yOffset = -100; // navbar height + a little breathing room
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand
          href="#home"
          className="navbar-brand-vn"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("home");
          }}
        >
          VN
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("home");
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("skills");
              }}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#mainsoftware"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("mainsoftware");
              }}
            >
              Main Software
            </Nav.Link>

            <Nav.Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("projects");
              }}
            >
              Side Projects
            </Nav.Link>

            <Nav.Link
              href="#certifications"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("certifications");
              }}
            >
              Certifications
            </Nav.Link>

            <Nav.Link
              href="#career"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("career");
              }}
            >
              Career
            </Nav.Link>

            <Nav.Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contact");
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
