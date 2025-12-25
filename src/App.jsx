import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarSimple from './components/Navbar'
import HeroImage from './components/Hero';
import Skills from './components/Skills';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Career from './components/Career';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarSimple />

      <section id="home">
        <HeroImage />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="skills">
        <Banner />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="career">
        <Career />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App
