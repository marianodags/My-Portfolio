import { ChartBar, Database, ChartLineUp, FileText } from "@phosphor-icons/react";
const services=[
[ChartBar,"Statistical Analysis","Descriptive statistics, trend analysis, comparisons, and other statistical techniques to turn datasets into meaningful findings."],
[Database,"Data Analysis","Data cleaning, transformation, exploration, and interpretation using practical analytical workflows."],
[ChartLineUp,"Data Visualization","Dashboards, charts, and visual presentations that communicate trends, comparisons, and key indicators clearly."],
[FileText,"Statistical Reports","Statistical tables, reports, briefs, presentations, and data-driven summaries for research and decision-making."]
];
export default function Services({ headingLevel = "h1" }) {
  const Heading = headingLevel;

  return (
    <section id="services" className="section-pad">
      <div className="section-wrap">
        <div className="section-head">
          <p className="kicker">What I do</p>
          <Heading>Data analysis, statistics, and visualization.</Heading>
          <p>From data cleaning to statistical analysis and dashboards, each service is focused on producing clear, accurate, and useful insights.</p>
        </div>
        <div className="card-grid">
          {services.map(([Icon, title, description]) => (
            <article className="portfolio-card" key={title}>
              <div className="service-icon"><Icon size={28} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}