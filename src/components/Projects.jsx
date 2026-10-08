const projects=[
["01 / CRM","GoHighLevel Client System","CRM pipelines, workflows, lead capture, follow-ups, calendars, and automations built around a client's sales process."],
["02 / AI","AI Lead Automation","Automated lead handling that helps qualify inquiries, route conversations, and reduce repetitive manual tasks."],
["03 / WEB","Conversion-Focused Website","Responsive websites with clear messaging, strong calls to action, and connected lead-generation workflows."],
["04 / SYSTEMS","Business Automation","Connected systems that move information between tools, trigger actions, and keep operations organized."]
];
export default function Projects(){return <section id="projects" className="section-pad"><div className="section-wrap"><div className="section-head"><p className="kicker">Selected work</p><h2>Projects built to solve real problems.</h2><p>A portfolio section ready for Mariano's actual case studies, screenshots, metrics, and client outcomes.</p></div><div className="card-grid">{projects.map(([n,t,d])=><article className="portfolio-card" key={t}><span className="kicker">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>}