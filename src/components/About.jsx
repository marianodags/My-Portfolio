export default function About({ headingLevel = "h1" }) {
  const Heading = headingLevel;

  return (
    <section id="about" className="section-pad">
      <div className="about-grid">
        <div>
          <p className="kicker">About Mariano</p>
          <Heading>Data Analyst &amp; Statistical Analyst | Official Economic Statistics</Heading>
          <p className="lead-copy">I’m a Computer Engineering graduate and Statistical Analyst with the Philippine Statistics Authority (PSA), working with official statistics, establishment data, provincial economic analysis, and statistical reporting.</p>
          <p>Since January 2024, I have supported the Provincial Product Accounts (PPA) by collecting, processing, and validating local government unit (LGU) and establishment data; classifying establishments using the Philippine Standard Industrial Classification (PSIC); and compiling industry estimates, economic indicators, and provincial Gross Domestic Product (GDP) statistics aligned with the Philippine System of National Accounts.</p>
          <p>I turn statistical results into useful outputs, including industry growth and contribution tables, reports, infographics, presentations, and dashboard concepts. My earlier experience as a Software Development Engineer at FPT Software Philippines gave me exposure to embedded C, AUTOSAR, coding standards, microcontrollers, and version control.</p>
          <p>My workflow includes data cleaning, data quality validation, statistical analysis, and communicating findings through reports, tables, and visualizations. I use Microsoft Excel and am developing my SQL and Power BI skills; I have basic Python experience. I’m interested in Data Analyst, Statistical Analyst, Business Intelligence Analyst, Reporting Analyst, Data Visualization Analyst, and MIS opportunities.</p>
          <a className="about-resume-link" href="./resume.pdf" download="Mariano-Daga-ang-Resume.pdf">Download my resume ↗</a>
        </div>
        <div className="about-panel">
          <div><b>Specialty</b><span>Statistical and economic data analysis</span></div>
          <div><b>Core workflow</b><span>Collect · Validate · Analyze · Communicate</span></div>
          <div><b>Tools</b><span>Microsoft Excel · SQL (developing) · Python (basic) · Power BI (developing)</span></div>
          <div><b>Experience</b><span>Official statistics · Provincial GDP analysis · PSIC</span></div>
          <div><b>Deliverables</b><span>Statistical reports · Tables · Data visualizations · Dashboard concepts</span></div>
        </div>
      </div>
    </section>
  );
}