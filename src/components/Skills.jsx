const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "SQL", "R", "JavaScript"],
  },
  {
    title: "Visualization",
    items: ["Power BI", "Excel", "Tableau", "Dashboards"],
  },
  {
    title: "Data Workflows",
    items: ["Data Cleaning", "EDA", "Statistical Analysis", "Reporting"],
  },
  {
    title: "Tools & Workflow",
    items: ["GitHub", "Git", "React", "Data Storytelling"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="section-wrap">
        <div className="section-head">
          <p className="kicker">Skills</p>
          <h2>Technical strengths built for practical analysis.</h2>
          <p>Tools and methods focused on reliable data work, clear reporting, and useful business insight.</p>
        </div>

        <div className="card-grid">
          {skillGroups.map(({ title, items }) => (
            <article key={title} className="portfolio-card">
              <span className="kicker">{title}</span>
              <h3>{title}</h3>
              <div className="case-meta">
                {items.map((item) => (
                  <span key={item} className="case-tag">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
