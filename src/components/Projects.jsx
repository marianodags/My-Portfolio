import { ArrowUpRight } from "@phosphor-icons/react";

const caseStudies = [
  {
    number: "01 / PROVINCIAL ECONOMY",
    title: "Provincial Product Accounts",
    subtitle: "Provincial GDP Performance & Economic Analysis",
    problem: "Regional stakeholders needed granular provincial economic data to assess local industry growth and inform evidence-based policy.",
    methodology: "Processed macroeconomic and administrative datasets across 16 major industry sectors using statistical aggregation and validation methodologies.",
    findings: "Produced comprehensive provincial GDP reports, industry contribution matrices, and growth trend breakdowns.",
    tags: ["PPA", "GDP", "Economic Analysis", "R", "Excel"],
    impact1: ["GDP", "Economic indicators"],
    impact2: ["16+", "Industry sectors"],
    repoUrl: "https://github.com/marianodags/My-Portfolio"
  },
  {
    number: "02 / DATA PROCESSING",
    title: "Statistical Data Processing",
    subtitle: "Automated Data Validation & Classification Pipeline",
    problem: "High-volume survey and administrative datasets contained missing values, classification discrepancies, and format inconsistencies.",
    methodology: "Implemented automated cleaning, validation checks, industry classification mapping, and quality assurance workflows in Python and SQL.",
    findings: "Achieved verified data integrity, reduced processing turnaround times, and generated standardized statistical tables.",
    tags: ["Python", "SQL", "Data Cleaning", "Validation", "ETL"],
    impact1: ["ETL", "Data pipeline"],
    impact2: ["QA", "Data integrity"],
    repoUrl: "https://github.com/marianodags/My-Portfolio"
  },
  {
    number: "03 / VISUALIZATION",
    title: "Economic Data Visualization",
    subtitle: "Interactive Dashboards & Executive Storytelling",
    problem: "Decision-makers needed intuitive visuals to rapidly comprehend complex economic indicators and statistical trends.",
    methodology: "Designed interactive Power BI dashboards, dynamic charts, and executive infographics customized for stakeholder presentations.",
    findings: "Enabled real-time drill-down analysis across economic sectors and improved stakeholder engagement during statistical briefings.",
    tags: ["Power BI", "Data Visuals", "Dashboards", "Storytelling"],
    impact1: ["BI", "Interactive reports"],
    impact2: ["Visual", "Executive insights"],
    repoUrl: "https://github.com/marianodags/My-Portfolio"
  },
  {
    number: "04 / REPORTING",
    title: "Statistical Reporting",
    subtitle: "Analytical Briefs & Official Statistical Publications",
    problem: "Translating technical statistical outputs into clear, accessible reports for policymakers, researchers, and the general public.",
    methodology: "Structured statistical tables, authored analytical briefs, and created standardized reporting templates with clear narratives.",
    findings: "Delivered accurate statistical publications and official releases supporting evidence-based regional decision-making.",
    tags: ["Reporting", "Statistical Tables", "Data Briefs", "Documentation"],
    impact1: ["Clear", "Policy support"],
    impact2: ["Evidence", "Decision support"],
    repoUrl: "https://github.com/marianodags/My-Portfolio"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-[#F8FAFC]">
      <div className="section-wrap">
        <div className="section-head">
          <p className="kicker">Case Studies & Projects</p>
          <h2>Statistical analysis and data projects.</h2>
          <p>Detailed case studies showcasing data processing, statistical modeling, economic visualization, and evidence-based reporting.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {caseStudies.map((item) => (
            <article className="portfolio-card flex flex-col justify-between" key={item.title}>
              <div>
                <span className="kicker">{item.number}</span>
                <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-[#A84F00]">{item.subtitle}</p>

                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <div>
                    <strong className="block text-xs font-bold uppercase tracking-wider text-slate-500">Problem & Context</strong>
                    <p>{item.problem}</p>
                  </div>
                  <div>
                    <strong className="block text-xs font-bold uppercase tracking-wider text-slate-500">Methodology & Tools</strong>
                    <p>{item.methodology}</p>
                  </div>
                  <div>
                    <strong className="block text-xs font-bold uppercase tracking-wider text-slate-500">Key Findings & Output</strong>
                    <p>{item.findings}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <div className="flex items-center gap-4">
                    <div>
                      <strong className="block text-sm font-extrabold text-[#111827]">{item.impact1[0]}</strong>
                      <span className="text-slate-500">{item.impact1[1]}</span>
                    </div>
                    <div>
                      <strong className="block text-sm font-extrabold text-[#111827]">{item.impact2[0]}</strong>
                      <span className="text-slate-500">{item.impact2[1]}</span>
                    </div>
                  </div>
                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#FF9030] hover:underline"
                  >
                    View Project <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
