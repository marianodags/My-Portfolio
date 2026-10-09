const recommendations = [
  {
    title: "Clear thinking",
    text: "Translates complex data into simple, decision-ready insights that teams can act on with confidence.",
  },
  {
    title: "Reliable execution",
    text: "Handles the full workflow carefully — from cleaning and validation to analysis, reporting, and presentation.",
  },
  {
    title: "Business focus",
    text: "Keeps the work grounded in practical outcomes so reports and dashboards support better decisions, not just more data.",
  },
];

export default function Recommendations() {
  return (
    <section id="recommendations" className="section-pad">
      <div className="section-wrap">
        <div className="section-head">
          <p className="kicker">What teams value</p>
          <h2>Practical analytics with clarity and care.</h2>
        </div>

        <div className="card-grid">
          {recommendations.map(({ title, text }) => (
            <article key={title} className="portfolio-card">
              <span className="kicker">{title}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
