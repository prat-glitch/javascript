import About from './components/About';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // animate only once
    });
  }, []);
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <ScrollToTop />
      <Projects />
      <Skills />
      <CompetitiveProgramming />
      <Navbar />
      <Contact />
    </div>
  );
}

export default App;
