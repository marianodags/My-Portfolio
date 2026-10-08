import { EnvelopeSimple, ArrowUpRight, ArrowUp } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-[#111827] text-white">
      <div className="section-wrap">
        <div className="contact-grid">
          <div>
            <p className="kicker">Get In Touch</p>
            <h2>Have data that needs to be understood?</h2>
            <p className="lead-copy text-slate-300">
              Tell Mariano what you're trying to analyze. Let's turn your data into clear findings, visualizations, and useful insights.
            </p>
            <a
              href="mailto:hello@mariano.dev"
              className="mt-8 inline-flex min-h-14 items-center gap-2 rounded-xl bg-[#FF9030] px-6 font-extrabold text-[#111827] transition-transform hover:scale-[1.02]"
            >
              Start a Conversation <ArrowUpRight size={21} />
            </a>
          </div>

          <div className="rounded-2xl bg-[#1F2937] p-7 shadow-lg">
            <p className="font-bold text-lg text-white">Let's connect</p>
            <div className="mt-4 flex flex-col gap-3">
              <a className="contact-link" href="mailto:hello@mariano.dev" aria-label="Send email to Mariano">
                <EnvelopeSimple size={22} />
                hello@mariano.dev
              </a>
              <a className="contact-link text-slate-300 hover:text-[#FF9030]" href="#home" aria-label="Back to top of page">
                <ArrowUp size={20} />
                Back to top
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-400">
            <div>
              <p className="font-semibold text-slate-300">Mariano — Statistical Analyst & Data Analyst</p>
              <p className="text-xs text-slate-500 mt-0.5">Statistical Reporting • Data Processing • Data Visualization</p>
            </div>
            <div className="flex items-center gap-6 font-medium">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} Mariano. All rights reserved. Built with React & Tailwind CSS.
          </div>
        </footer>
      </div>
    </section>
  );
}
