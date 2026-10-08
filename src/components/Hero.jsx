import { ArrowRight } from "@phosphor-icons/react";

const tools = ["GoHighLevel", "Codex", "Claude", "AI Automation", "Web Development", "CRM Systems"];

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center overflow-hidden bg-white px-6 py-24 sm:px-10 lg:px-20">
      <div className="w-full max-w-6xl">
        <span className="inline-flex rounded-full bg-[#FFF4E9] px-4 py-2 text-sm font-bold text-[#A84F00]">AI Automation • GHL • Web Development</span>
        <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-8xl">I build <span className="text-[#FF9030]">smarter systems</span> that work for you.</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#374151] sm:text-xl lg:text-2xl">I'm Mariano — an AI Automation Specialist, GoHighLevel CRM builder, and web developer. I turn repetitive work into streamlined systems and practical automations.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#FF9030] px-6 font-extrabold text-[#111827]">View Projects <ArrowRight size={21}/></a>
          <a href="#contact" className="inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-[#111827] px-6 font-extrabold">Let's Work Together</a>
        </div>
        <div className="mt-16 overflow-hidden border-t border-slate-200 pt-6" aria-label="Tools Mariano works with">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-wider text-slate-500">Tools I work with</p>
          <div className="marquee"><div className="marquee-track">{[...tools,...tools].map((tool,i)=><span key={tool+i} className="mr-3 inline-flex items-center gap-3 whitespace-nowrap rounded-xl border border-slate-200 bg-white px-4 py-3 font-bold shadow-sm"><span className="grid h-7 w-7 place-items-center rounded-lg bg-[#111827] text-[10px] text-white">{tool.slice(0,3).toUpperCase()}</span>{tool}</span>)}</div></div>
        </div>
      </div>
    </section>
  );
}