import { ArrowUpRight, ChartLineUp, Database, ChartBar, FileText, Code } from "@phosphor-icons/react";

const tools = [
  ["SPSS", "S", "#2563EB"], ["SQL", "SQL", "#17233d"], ["Python", "PY", "#3776AB"],
  ["R", "R", "#276DC3"], ["Power BI", "BI", "#D99B00"], ["Excel", "X", "#217346"],
];

const projects = [
  ["Provincial Product Accounts", "GDP performance, industry growth and contributions", "#projects"],
  ["Statistical Data Processing", "Validation, classification and reliable outputs", "#projects"],
  ["Economic Data Visualization", "Dashboards, charts and statistical storytelling", "#projects"],
];

export default function Hero() {
  return (
    <section id="home" className="section-pad hero-dashboard">
      <div className="section-wrap">
        <div className="hero-topline">
          <div>
            <p className="kicker">Statistical Analyst · Data Analyst</p>
            <h1>Build insights.<br/><em>Make data useful.</em></h1>
            <p>Reliable statistics, thoughtful analysis, and clear visualizations that help people understand what the data is saying.</p>
          </div>
          <div className="hero-actions">
            <a href="#contact">Get in touch <ArrowUpRight size={17}/></a>
            <a className="secondary" href="#projects">Explore work</a>
          </div>
        </div>

        <div className="tool-panel" aria-label="Tools Mariano works with">
          <div className="tool-panel-label"><span>DAILY DRIVERS</span><strong>Tools I work with</strong></div>
          <div className="marquee"><div className="marquee-track flex gap-3">
            {[...tools, ...tools].map(([name,mark,color],i)=><span className="tool-chip" key={name+i}><span className="tool-mark" style={{backgroundColor:color}}>{mark}</span>{name}</span>)}
          </div></div>
        </div>

        <div className="dashboard-grid">
          <article className="dashboard-card project-feature">
            <h2><span className="card-icon"><FolderIcon /></span> Projects</h2>
            <p>Statistical work and data projects built around real-world questions.</p>
            <div className="dashboard-list">
              {projects.map(([name,desc,href],i)=><a href={href} key={name}><span>{String(i+1).padStart(2,"0")} &nbsp; {name}<small className="block">{desc}</small></span><ArrowUpRight size={17}/></a>)}
            </div>
          </article>
          <article className="dashboard-card">
            <h2><span className="card-icon"><ChartLineUp size={20}/></span> Focus</h2>
            <p>Where statistical methods meet practical decisions.</p>
            <div className="dashboard-list">
              <div className="row-item"><span>Official statistics</span><small>01</small></div>
              <div className="row-item"><span>Economic analysis</span><small>02</small></div>
              <div className="row-item"><span>Data visualization</span><small>03</small></div>
            </div>
          </article>
          <article className="dashboard-card">
            <h2><span className="card-icon"><ChartBar size={20}/></span> Data at a glance</h2>
            <p>Turning raw records into structured, interpretable outputs.</p>
            <div className="metric-row">
              <div className="metric"><strong>Clean</strong><span>Validated data</span></div>
              <div className="metric"><strong>Clear</strong><span>Useful reporting</span></div>
            </div>
            <div className="mini-bars" aria-hidden="true">{[34,52,43,68,56,82,72,94,65,78,100,84].map((h,i)=><i key={i} style={{height:h+"%"}} />)}</div>
          </article>
          <article className="dashboard-card">
            <h2><span className="card-icon"><Database size={20}/></span> About</h2>
            <p>Computer Engineering graduate and Statistical Analyst working with official statistics, economic data, and reporting.</p>
            <div className="dashboard-list"><a href="#about"><span>More about Mariano</span><ArrowUpRight size={17}/></a></div>
          </article>
          <article className="dashboard-card">
            <h2><span className="card-icon"><FileText size={20}/></span> Services</h2>
            <p>Practical support from data preparation to final communication.</p>
            <div className="dashboard-list">
              <a href="#services"><span>Statistical analysis</span><ArrowUpRight size={17}/></a>
              <a href="#services"><span>Data visualization</span><ArrowUpRight size={17}/></a>
              <a href="#services"><span>Reports & dashboards</span><ArrowUpRight size={17}/></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function FolderIcon(){return <Code size={20}/>;}
