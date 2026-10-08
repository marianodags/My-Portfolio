import { ArrowRight } from "@phosphor-icons/react";

const tools = [
  ["SPSS", "SPSS", "#2563EB", "white"],
  ["SQL", "SQL", "#111827", "white"],
  ["Python", "PY", "#3776AB", "white"],
  ["R", "R", "#276DC3", "white"],
  ["Power BI", "BI", "#F2C811", "#111827"],
  ["Excel", "EXL", "#217346", "white"],
];

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-20">
      <div className="w-full max-w-6xl">
        <span className="inline-flex rounded-full bg-[#FFF4E9] px-4 py-2 text-sm font-bold text-[#A84F00]">Statistical Analysis • Data Analysis • Data Visualization</span>
        <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-8xl">I turn <span className="text-[#FF9030]">data into insights</span> that support better decisions.</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#374151] sm:text-xl lg:text-2xl">I'm Mariano — a Statistical Analyst and Data Analyst. I transform raw data into clear analysis, meaningful visualizations, statistical reports, and actionable insights.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#FF9030] px-6 font-extrabold text-[#111827]">View Projects <ArrowRight size={21}/></a>
          <a href="#contact" className="inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-[#111827] px-6 font-extrabold">Let's Work Together</a>
        </div>
        <div className="mt-16 overflow-hidden border-t border-slate-200 pt-6" aria-label="Tools Mariano works with">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-wider text-slate-500">Tools I work with</p>
          <div className="marquee"><div className="marquee-track">{[...tools,...tools].map(([tool,abbr,bg,fg],i)=><span key={tool+i} className="mr-3 inline-flex items-center gap-3 whitespace-nowrap rounded-xl border border-slate-200 bg-white px-4 py-3 font-bold shadow-sm"><span className="grid h-7 w-7 place-items-center rounded-lg text-[10px] font-black" style={{backgroundColor:bg,color:fg}}>{abbr}</span>{tool}</span>)}</div></div>
        </div>
      </div>
    </section>
  );
}