import { ArrowUpRight } from "@phosphor-icons/react";

const projects = [
  ["01 / PROVINCIAL ECONOMY","Provincial Product Accounts","Economic data analysis and visualization supporting the presentation of provincial GDP performance, growth, industry contributions, and key economic indicators.",["PPA","GDP","Economic Analysis"],["GDP","Economic indicator"],["16+","Industry indicators"]],
  ["02 / DATA PROCESSING","Statistical Data Processing","Collecting, validating, cleaning, classifying, and transforming datasets into reliable statistical tables and analytical outputs.",["Data Cleaning","Validation","Classification"],["ETL","Data workflow"],["QA","Data validation"]],
  ["03 / VISUALIZATION","Economic Data Visualization","Turning complex statistical results into dashboards, charts, infographics, and presentations that decision-makers can understand quickly.",["Power BI","Excel","Infographics"],["BI","Dashboards"],["Visual","Storytelling"]],
  ["04 / REPORTING","Statistical Reporting","Producing statistical tables, briefs, reports, presentations, and analytical materials that communicate findings clearly and accurately.",["Reports","Tables","Presentations"],["Clear","Communication"],["Evidence","Decision support"]]
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="section-wrap">
        <div className="section-head">
          <p className="kicker">Selected work / 01—04</p>
          <h2>Analysis with a clear purpose.</h2>
          <p>Representative work across economic statistics, data quality, visualization, and reporting.</p>
        </div>
        <div className="card-grid">
          {projects.map(([number,title,description,tags,impact1,impact2]) => (
            <article className="portfolio-card case-card" key={title}>
              <span className="kicker">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="case-meta">{tags.map(tag => <span className="case-tag" key={tag}>{tag}</span>)}</div>
              <div className="case-impact">
                <div><strong>{impact1[0]}</strong><span>{impact1[1]}</span></div>
                <div><strong>{impact2[0]}</strong><span>{impact2[1]}</span></div>
              </div>
              <a className="project-detail-link" href="#contact">Discuss similar work <ArrowUpRight size={15}/></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
