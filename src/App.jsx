import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
export default function App() {
  return (
    <div className="min-h-screen text-[#111827]">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content" className="lg:pl-[250px]" tabIndex={-1}>
        <Hero />
        <Skills />
        <Experience />
        <Projects headingLevel="h2" />
        <Services headingLevel="h2" />
        <About headingLevel="h2" />
        <Contact headingLevel="h2" />
      </main>
    </div>
  );
}
