import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function BasicExample() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // ✅ Scroll to the section minus navbar height
      const yOffset = -80; // adjust if your navbar is taller
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

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
              href="#mainprojects"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("mainprojects");
              }}
            >
              Main Projects
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
