import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Recommendations from "./components/Recommendations.jsx";
import Contact from "./components/Contact.jsx";
import "./index.css";

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <About />
      <Skills />
      <Experience />
      <Recommendations />
      <Contact />
    </>
  );
}

const pages = { home: HomePage, projects: Projects, services: Services, about: About, contact: Contact };
const Content = pages[document.body.dataset.page || "home"] || HomePage;
ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode><div className="min-h-screen text-[#111827]"><Navbar /><main className="lg:pl-[250px]"><Content /></main></div></React.StrictMode>);