import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import CaseStudy from "./components/CaseStudy.jsx";
import "./index.css";
const pages = {
  home: Home,
  projects: Projects,
  services: Services,
  about: About,
  contact: Contact,
  "provincial-gdp": () => <CaseStudy study="provincial-gdp" />,
  "python-eda": () => <CaseStudy study="python-eda" />,
  "sql-sales": () => <CaseStudy study="sql-sales" />,
};
const Content = pages[document.body.dataset.page || "home"] || Home;
const root = document.getElementById("root");

if (!root) {
  throw new Error("The page root element is missing.");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <div className="min-h-screen text-[#111827]">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content" className="lg:pl-[250px]" tabIndex={-1}>
        <Content />
      </main>
    </div>
  </React.StrictMode>
);
