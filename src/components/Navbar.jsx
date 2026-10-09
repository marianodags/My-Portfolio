import { House, FolderSimple, Briefcase, User, EnvelopeSimple } from "@phosphor-icons/react";

const items = [
  [House, "Home", "#home"],
  [FolderSimple, "Projects", "#projects"],
  [Briefcase, "Services", "#services"],
  [User, "About", "#about"],
  [EnvelopeSimple, "Contact", "#contact"],
];

const socials = [
  ["Facebook", "https://www.facebook.com/mardags04/"],
  ["LinkedIn", "https://www.linkedin.com/in/mariano-q-daga-ang-jr-566185286/"],
];

export default function Navbar() {
  return (
    <aside className="portfolio-sidebar fixed bottom-0 left-0 z-50 w-full border-t lg:bottom-auto lg:top-0 lg:h-screen lg:w-[250px] lg:border-r lg:border-t-0" aria-label="Main navigation">
      <a href="#home" className="brand-link hidden items-center gap-3 lg:flex">
        <img src="/profile-avatar.svg" alt="Mariano profile avatar" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/70" />
        <span><strong className="block text-xl">Mariano</strong><small className="text-xs">Statistical Analyst</small></span>
      </a>
      <nav className="mx-auto grid max-w-md grid-cols-5 gap-1 p-2 lg:max-w-none lg:grid-cols-1 lg:gap-2 lg:p-0" aria-label="Main navigation">
        {items.map(([Icon, label, href], index) => (
          <a key={label} href={href} className={`nav-item flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-3 transition lg:flex-row lg:justify-start lg:gap-3 ${index===0?"nav-item-active":""}`}>
            <Icon size={23} weight="regular" aria-hidden="true" />
            <span className="text-xs font-semibold lg:text-base">{label}</span>
          </a>
        ))}
      </nav>
      <div className="sidebar-footer hidden lg:block">
        <div className="flex items-center gap-2 text-sm"><span className="h-2 w-2 rounded-full bg-[#FF9030]" />Open to data opportunities</div>
        <div className="mt-4 flex flex-wrap gap-2">
          {socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-pill">{label}</a>)}
        </div>
        <p className="mt-6 text-xs">© 2026 Mariano</p>
      </div>
    </aside>
  );
}
