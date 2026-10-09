export default function About({ headingLevel = "h1" }) {
  const Heading = headingLevel;

  return (
    <section id="about" className="section-pad">
      <div className="about-grid">
        <div>
          <p className="kicker">About Mariano</p>
          <Heading>Statistics, technology, and data working together.</Heading>
          <p className="lead-copy">I’m a Computer Engineering graduate and Statistical Analyst with the Philippine Statistics Authority (PSA), with experience in provincial economic statistics, administrative data, and reporting.</p>
          <p>Since January 2024, I have supported the Provincial Product Accounts (PPA) by collecting, processing, validating, and transforming LGU and establishment data; classifying establishments using the Philippine Standard Industrial Classification (PSIC); and compiling industry-level estimates and provincial GDP statistics aligned with the Philippine System of National Accounts.</p>
          <p>I turn statistical results into useful outputs, including industry growth and contribution tables, reports, infographics, presentations, and dashboard concepts. My earlier experience as a Software Development Engineer at FPT Software Philippines gave me exposure to embedded C, AUTOSAR, coding standards, microcontrollers, and version control.</p>
          <p>I use Excel for data preparation and reporting and am developing my skills in SQL, Python, and business intelligence tools. I’m interested in Data Analyst, Reporting Analyst, Statistical Analyst, and MIS opportunities where careful analysis and clear communication support better decisions.</p>
          <a className="about-resume-link" href="./resume.pdf" download="Mariano-Daga-ang-Resume.pdf">Download my resume ↗</a>
        </div>
        <div className="about-panel">
          <div><b>Specialty</b><span>Statistical and economic data analysis</span></div>
          <div><b>Core workflow</b><span>Collect · Validate · Analyze · Communicate</span></div>
          <div><b>Tools</b><span>Excel · SQL · Python · Power BI</span></div>
          <div><b>Experience</b><span>Official statistics · Embedded software</span></div>
          <div><b>Deliverables</b><span>Reports · Statistical tables · Dashboards · Infographics</span></div>
        </div>
      </div>
    </section>
  );
}