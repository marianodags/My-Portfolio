import { ArrowLeft, ArrowUpRight, GithubLogo } from "@phosphor-icons/react";

const caseStudyCode = "https://github.com/marianodags/My-Portfolio/blob/main/src/components/CaseStudy.jsx#L";

const studies = {
  "provincial-gdp": {
    codeLine: 6,
    kicker: "Provincial GDP · Case study",
    title: "Reading provincial economic performance",
    summary: "A compact, transparent reading of reported 2025 Provincial Product Accounts figures for Zamboanga del Norte, focused on output, growth, and industry contributions.",
    status: "Reported 2025 PPA figures · verify against the source release before reuse",
    metrics: [["Provincial GDP", "₱130.26B"], ["GDP growth", "4.10%"]],
    sections: [
      {
        title: "Question",
        paragraphs: ["Which industry groups shaped provincial output and GDP growth in the reported results? The preview separates the overall GDP level and growth rate from industry growth rates and contributions to growth."],
      },
      {
        title: "Reported figures",
        table: {
          headers: ["Industry group", "Growth", "Contribution to GDP growth"],
          rows: [["Services", "+10.3%", "+5.14 percentage points"], ["Industry", "−2.1%", "−0.73 percentage points"], ["Agriculture, forestry & fishing", "+2.0%", "−0.30 percentage points"]],
        },
        paragraphs: ["The contribution figures are reported alongside industry growth and should not be inferred from growth rates alone. Contributions may not sum exactly because of rounding; interpret them using the relevant PPA methodology and source tables."],
      },
      {
        title: "How to use this summary",
        paragraphs: ["Start with total GDP and its growth rate, then compare each industry's growth and contribution measures. This makes the distinction between an industry's own growth and its contribution to aggregate growth explicit."],
      },
      {
        title: "Scope and limitations",
        paragraphs: ["This portfolio summary reproduces the 2025 PPA figures already shown in the project preview. It is not an independent re-estimation, and no confidential establishment-level records are included. Confirm the figures and cite the original Philippine Statistics Authority PPA publication before quoting them in another report."],
      },
    ],
  },
  "python-eda": {
    codeLine: 35,
    kicker: "Python · Exploratory data analysis",
    title: "Profiling a synthetic customer dataset",
    summary: "A reproducible-style walkthrough of basic data-quality checks using an explicitly synthetic 1,000-row sample. The figures demonstrate an EDA workflow; they are not observations about real people or businesses.",
    status: "Illustrative demo · synthetic data only",
    metrics: [["Rows profiled", "1,000"], ["Missing cells", "4.2%"]],
    sections: [
      {
        title: "Question",
        paragraphs: ["Which fields have missing values, and what should be checked before calculating summaries or building visualizations?"],
      },
      {
        title: "Missingness profile",
        table: {
          headers: ["Field", "Missing rows", "Share of rows"],
          rows: [["Age", "21", "2.1%"], ["Income", "68", "6.8%"], ["Region", "5", "0.5%"], ["Spend", "74", "7.4%"]],
        },
        paragraphs: ["Across four fields and 1,000 rows, 168 of 4,000 cells are missing (4.2%). Missingness is not evenly distributed, so a single overall percentage would hide the higher rates in income and spend."],
      },
      {
        title: "Python workflow",
        code: `import numpy as np
import pandas as pd

rng = np.random.default_rng(42)
rows = 1_000
df = pd.DataFrame({
    "age": rng.normal(34.6, 10, rows).round(1),
    "income": rng.normal(28_400, 8_000, rows).round(2),
    "region": rng.choice(["North", "South", "East", "West"], rows),
    "spend": rng.normal(2_180, 900, rows).round(2),
})

for column, count in {
    "age": 21, "income": 68, "region": 5, "spend": 74
}.items():
    missing_rows = rng.choice(df.index, count, replace=False)
    df.loc[missing_rows, column] = np.nan

profile = pd.DataFrame({
    "missing_rows": df.isna().sum(),
    "missing_percent": (df.isna().mean() * 100).round(1),
    "distinct_values": df.nunique(),
})
print(profile)`,
        paragraphs: ["A fixed random seed makes the synthetic example repeatable. The missing-row counts are set explicitly to match the displayed profile; the generated records themselves are not real data."],
      },
      {
        title: "Interpretation and next steps",
        paragraphs: ["Inspect whether missingness clusters by record or segment, validate data types and outliers, and document any exclusions or imputation before analysis. Do not fill missing values automatically without understanding how they were collected."],
      },
    ],
  },
  "sql-sales": {
    codeLine: 88,
    kicker: "SQL · Sales analysis",
    title: "Summarizing monthly sales performance",
    summary: "A small SQL walkthrough using four months of synthetic revenue and order totals. It demonstrates aggregation and average order value without presenting the sample as real company performance.",
    status: "Illustrative demo · synthetic data only",
    metrics: [["Sample revenue", "₱196,000"], ["Sample orders", "1,960"]],
    sections: [
      {
        title: "Question",
        paragraphs: ["How do monthly revenue and order counts combine into a simple reporting summary, and what is the average order value for the period?"],
      },
      {
        title: "Sample input",
        table: {
          headers: ["Month", "Revenue", "Orders"],
          rows: [["January", "₱42,000", "420"], ["February", "₱48,000", "465"], ["March", "₱45,000", "450"], ["April", "₱61,000", "625"]],
        },
      },
      {
        title: "SQL query",
        code: `WITH monthly_sales (month, revenue, orders) AS (
  VALUES
    ('January', 42000, 420),
    ('February', 48000, 465),
    ('March', 45000, 450),
    ('April', 61000, 625)
)
SELECT
  SUM(revenue) AS total_revenue,
  SUM(orders) AS total_orders,
  ROUND(1.0 * SUM(revenue) / NULLIF(SUM(orders), 0), 2)
    AS average_order_value
FROM monthly_sales;`,
        paragraphs: ["The query returns ₱196,000 total revenue, 1,960 orders, and a ₱100 average order value for the illustrative period. NULLIF protects the ratio from a zero-order denominator."],
      },
      {
        title: "Interpretation and limitations",
        paragraphs: ["This compact example demonstrates aggregation only. It does not include refunds, discounts, taxes, order-level records, or a real business calendar. The generated sample values are not actual sales and should not be used for commercial decisions."],
      },
    ],
  },
};

function DataTable({ headers, rows }) {
  return <div className="static-table-wrap"><table className="static-table"><thead><tr>{headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

export default function CaseStudy({ study }) {
  const content = studies[study];
  if (!content) {
    throw new Error(`Unknown case study: ${study}`);
  }

  return <section className="section-pad case-study-page">
    <article className="section-wrap case-study-wrap">
      <a className="case-study-back" href="./projects.html"><ArrowLeft size={16} /> All projects</a>
      <header className="case-study-header">
        <p className="kicker">{content.kicker}</p>
        <h1>{content.title}</h1>
        <p className="case-study-summary">{content.summary}</p>
        <span className="case-study-status">{content.status}</span>
      </header>
      <div className="case-study-metrics">{content.metrics.map(([label, value]) => <div className="demo-metric" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
      <div className="case-study-sections">{content.sections.map((section) => <section className="case-study-section" key={section.title}>
        <h2>{section.title}</h2>
        {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.table && <DataTable {...section.table} />}
        {section.code && <pre className="case-study-code"><code>{section.code}</code></pre>}
      </section>)}</div>
      <footer className="case-study-footer">
        <a className="project-detail-link" href={`${caseStudyCode}${content.codeLine}`} target="_blank" rel="noopener noreferrer">View case study code <GithubLogo size={15} /><ArrowUpRight size={15} /></a>
        <a className="project-detail-link" href="./projects.html">Back to all projects <ArrowUpRight size={15} /></a>
      </footer>
    </article>
  </section>;
}
