import { ArrowUpRight } from "@phosphor-icons/react";

const projects = [
  ["01 / PROVINCIAL ECONOMY","Provincial Product Accounts","Supported the analysis and presentation of provincial GDP trends, industry contributions, and key economic indicators to help explain regional economic performance.",["PPA","GDP","Economic Analysis"],["Growth","Regional trends"],["16+","Indicators tracked"]],
  ["02 / DATA PROCESSING","Statistical Data Processing","Collected, validated, cleaned, classified, and transformed raw data into reliable statistical tables and outputs ready for decision-making.",["Data Cleaning","Validation","Classification"],["Quality","Data integrity"],["Workflow","Structured output"]],
  ["03 / VISUALIZATION","Economic Data Visualization","Turned statistical results into dashboards, charts, and visuals that made data easier to interpret and explain to stakeholders.",["Power BI","Excel","Infographics"],["Clear","Communication"],["Insights","Faster understanding"]],
  ["04 / REPORTING","Statistical Reporting","Prepared concise reports, tables, and presentations that translated technical findings into actionable information for decision-makers.",["Reports","Tables","Presentations"],["Evidence","Decision support"],["Clarity","Strong communication"]]
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="section-wrap">
        <div className="section-head">
          <p className="sr-only">Selected work</p>
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
