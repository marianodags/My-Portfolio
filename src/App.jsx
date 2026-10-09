import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Recommendations from "./components/Recommendations.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-screen text-[#111827]">
      <Navbar />
      <main className="lg:pl-[250px]">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Skills />
        <Experience />
        <Recommendations />
        <Contact />
      </main>
    </div>
  );
}