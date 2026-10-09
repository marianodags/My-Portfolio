import {ArrowUpRight,GithubLogo} from "@phosphor-icons/react";

const projects = [
  {
    id:"economy", category:"PROJECT 01 · ECONOMICS", title:"Provincial Economic Performance Dashboard",
    description:"A compact view of provincial output, sector growth, and contributions to overall economic growth.",
    question:"Which sectors are driving the province's economic performance?",
    tools:["PPA","Excel","Power BI","Statistics"], source:"Zamboanga del Norte PPA 2025 figures",
    note:"Figures shown are reported 2025 PPA results. Contributions may not sum exactly because of rounding.",
    metrics:[["GDP","₱130.26B"],["GDP growth","4.10%"]],
    chartTitle:"Contribution to GDP growth · percentage points",
    chart:[["Services",5.14],["Industry",-0.73],["AFF",-0.30]],
    tableHeaders:["Industry group","Growth","Contribution"],
    tableRows:[["Services","+10.3%","+5.14 pp"],["Industry","−2.1%","−0.73 pp"],["Agriculture, forestry & fishing","+2.0%","−0.30 pp"]]
  },
  {
    id:"sales", category:"PROJECT 02 · BUSINESS ANALYTICS", title:"Sales Performance Analysis",
    description:"Track monthly revenue, order volume, and changes in sales to demonstrate a basic business performance workflow.",
    question:"When did sales peak, and how did order volume change?",
    tools:["SQL","Excel","Power BI"], source:"Synthetic demonstration data",
    note:"Illustrative sample values only—not actual company sales.",
    metrics:[["Total revenue","₱196K"],["Total orders","1,960"]],
    chartTitle:"Monthly revenue · ₱ thousands",
    chart:[["Jan",42],["Feb",48],["Mar",45],["Apr",61]],
    tableHeaders:["Month","Revenue","Orders"],
    tableRows:[["January","₱42,000","420"],["February","₱48,000","465"],["March","₱45,000","450"],["April","₱61,000","625"]]
  },
  {
    id:"eda", category:"PROJECT 03 · DATA EXPLORATION", title:"Exploratory Data Analysis (Python)",
    description:"Preview how a dataset can be profiled, checked for missing values, and summarized before deeper analysis.",
    question:"Which variables need attention before analysis?",
    tools:["Python","Pandas","EDA","Data cleaning"], source:"Synthetic demonstration dataset",
    note:"Illustrative profiling results created to demonstrate the portfolio layout.",
    metrics:[["Rows reviewed","1,000"],["Missing cells","4.2%"]],
    chartTitle:"Missing values by field · % of rows",
    chart:[["Age",2.1],["Income",6.8],["Region",0.5],["Spend",7.4]],
    tableHeaders:["Field","Missing","Mean / common value"],
    tableRows:[["Age","21 rows","34.6 years"],["Income","68 rows","₱28,400"],["Region","5 rows","North"],["Spend","74 rows","₱2,180"]]
  },
  {
    id:"population", category:"PROJECT 04 · DEMOGRAPHICS", title:"Population & Demographic Analysis",
    description:"Compare population across sample local areas and show how demographic data can be organized for planning.",
    question:"How does population vary between the sample areas?",
    tools:["Python","Excel","Power BI"], source:"Synthetic demonstration data",
    note:"All population counts below are fictional examples, not official census estimates.",
    metrics:[["Areas compared","4"],["Combined population","321K"]],
    chartTitle:"Illustrative population · thousands",
    chart:[["Area A",140],["Area B",85],["Area C",54],["Area D",42]],
    tableHeaders:["Sample area","Population","Share"],
    tableRows:[["Area A","140,000","43.6%"],["Area B","85,000","26.5%"],["Area C","54,000","16.8%"],["Area D","42,000","13.1%"]]
  },
  {
    id:"app", category:"PROJECT 05 · DATA APPLICATION", title:"Interactive Data Application",
    description:"A static preview of a future data app with summary KPIs, regional comparisons, and a structured results table.",
    question:"How could users compare performance across regions?",
    tools:["React","JavaScript","SQL concepts","Charts"], source:"Synthetic demonstration data",
    note:"This is a static mock-up for now; filters and live data are not connected.",
    metrics:[["Records","1,248"],["Regions","4"]],
    chartTitle:"Sample revenue by region · ₱ thousands",
    chart:[["North",84],["South",72],["East",61],["West",49]],
    tableHeaders:["Region","Revenue","Growth"],
    tableRows:[["North","₱84,000","+8.4%"],["South","₱72,000","+5.2%"],["East","₱61,000","+3.1%"],["West","₱49,000","−1.6%"]]
  }
];

function StaticChart({data, title}) {
  const max = Math.max(...data.map(([,value])=>Math.abs(value)), 1);
  const hasNegative = data.some(([,value])=>value<0);
  return <div className="static-chart" role="img" aria-label={title + ": " + data.map(([label,value])=>label+" "+value).join(", ")}>
    <p className="static-chart-title">{title}</p>
    {data.map(([label,value])=><div className={"chart-row "+(value<0?"negative":"")} key={label}>
      <span className="chart-label">{label}</span>
      <div className={"chart-track "+(hasNegative?"chart-track-zero":"")}>
        <span className="chart-bar" style={hasNegative ? {left:value<0?(50-Math.abs(value)/max*50)+"%":"50%",width:(Math.abs(value)/max*50)+"%"} : {width:(value/max*100)+"%"}} />
      </div>
      <strong className="chart-value">{value>0?"+":""}{value}</strong>
    </div>)}
  </div>;
}

function StaticTable({headers, rows}) {
  return <div className="static-table-wrap"><table className="static-table"><thead><tr>{headers.map(header=><th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{rows.map((row,index)=><tr key={index}>{row.map((cell,i)=><td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ProjectCard({project}) {
  return <article className={"portfolio-card case-card project-demo-card project-"+project.id} key={project.id}>
    <span className="kicker">{project.category}</span>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="project-question"><b>Research question</b><span>{project.question}</span></div>
    <div className="case-meta">{project.tools.map(tag=><span className="case-tag" key={tag}>{tag}</span>)}</div>
    <div className="demo-source"><span className="demo-dot"/><span>{project.source}</span></div>
    <div className="demo-metrics">{project.metrics.map(([label,value])=><div className="demo-metric" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
    <StaticChart data={project.chart} title={project.chartTitle}/>
    <div className="demo-table-heading"><strong>Sample data table</strong><span>{project.tableRows.length} rows</span></div>
    <StaticTable headers={project.tableHeaders} rows={project.tableRows}/>
    <p className="demo-note">{project.note}</p>
    <a className="project-detail-link" href="https://github.com/marianodags?tab=repositories" target="_blank" rel="noopener noreferrer">Browse GitHub projects <GithubLogo size={15}/><ArrowUpRight size={15}/></a>
  </article>;
}

export default function Projects({ headingLevel = "h1" }) {
  const Heading = headingLevel;

  return <section id="projects" className="section-pad">
    <div className="section-wrap">
      <div className="section-head">
        <p className="kicker">Selected work & portfolio demos</p>
        <Heading>Analysis with a clear purpose.</Heading>
        <p>These project previews use static charts and tables for now. Synthetic examples are clearly labeled; the provincial economic summary uses reported 2025 PPA figures. Interactive filters and live data can be added later.</p>
      </div>
      <div className="card-grid project-grid">{projects.map(project=><ProjectCard project={project} key={project.id}/>)}</div>
    </div>
  </section>;
}
