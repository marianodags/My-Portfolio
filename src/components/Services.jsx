import { Robot, SquaresFour, Code, PlugsConnected } from "@phosphor-icons/react";
const services=[
[Robot,"AI Automation","Practical AI-assisted workflows for lead handling, content, customer support, and repetitive operations."],
[SquaresFour,"GoHighLevel / GHL","CRM builds, pipelines, workflows, forms, calendars, funnels, snapshots, and client communication systems."],
[Code,"Web Development","Modern, responsive websites and landing pages that connect cleanly to business systems."],
[PlugsConnected,"Systems & Integrations","Connect tools and processes so data moves where it needs to go without unnecessary manual work."]
];
export default function Services(){return <section id="services" className="section-pad"><div className="section-wrap"><div className="section-head"><p className="kicker">What I do</p><h2>Services that make work simpler.</h2><p>From CRM setup to AI workflows and websites, each service is focused on saving time and improving the customer journey.</p></div><div className="card-grid">{services.map(([Icon,t,d])=><article className="portfolio-card" key={t}><div className="service-icon"><Icon size={28}/></div><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>}