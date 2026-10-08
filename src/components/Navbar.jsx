import { House, FolderSimple, Briefcase, User, EnvelopeSimple } from "@phosphor-icons/react";

const items = [
  [House, "Home", "#home"],
  [FolderSimple, "Project", "#projects"],
  [Briefcase, "Services", "#services"],
  [User, "About", "#about"],
  [EnvelopeSimple, "Contact", "#contact"],
];

const socials = [
  ["Facebook", "https://www.facebook.com/mardags04/"],
  ["X", "https://x.com/marianodagaang"],
  ["LinkedIn", "https://www.linkedin.com/in/mariano-q-daga-ang-jr-566185286/"],
  ["Instagram", "https://www.instagram.com/reinhardvon04/"],
];

export default function Navbar() {
  return (
    <aside className="fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-[#111827] text-white lg:top-0 lg:w-[250px] lg:border-t-0 lg:border-r lg:px-6 lg:py-8">
      <a href="#home" className="hidden items-center gap-3 lg:mb-12 lg:flex">
        <img src="/profile avatar.png" alt="Mariano profile avatar" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10" />
        <span><strong className="block text-xl">Mariano <span className="verified-badge" aria-label="Verified">✓</span></strong><small className="text-xs text-slate-400">Statistical Analyst / Data Analyst</small></span>
      </a>
      <nav className="mx-auto grid max-w-md grid-cols-5 gap-1 p-2 lg:max-w-none lg:grid-cols-1 lg:gap-2 lg:p-0" aria-label="Main navigation">
        {items.map(([Icon, label, href]) => (
          <a key={label} href={href} className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-3 text-slate-300 transition hover:bg-orange-400/10 hover:text-white lg:flex-row lg:justify-start lg:gap-3">
            <Icon size={25} weight="regular" aria-hidden="true" />
            <span className="text-xs font-semibold lg:text-base">{label}</span>
          </a>
        ))}
      </nav>
      <div className="mt-auto hidden pt-10 lg:block">
        <div className="flex items-center gap-2 text-sm text-slate-400"><span className="h-2 w-2 rounded-full bg-[#FF9030]" />Available for projects</div>
        <div className="mt-4 flex flex-wrap gap-2">
          {socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 px-2.5 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-[#FF9030]/60 hover:text-[#FF9030]">{label}</a>)}
        </div>
      </div>
    </aside>
  );
}