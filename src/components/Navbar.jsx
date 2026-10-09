import { House, FolderSimple, Briefcase, User, EnvelopeSimple, FacebookLogo, XLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

const items = [
  [House, "Home", "index.html"],
  [FolderSimple, "Projects", "projects.html"],
  [Briefcase, "Services", "services.html"],
  [User, "About", "about.html"],
  [EnvelopeSimple, "Contact", "contact.html"],
];
const socials = [
  { label: "Facebook", href: "https://www.facebook.com/mardags04/", Icon: FacebookLogo },
  { label: "X", href: "https://x.com/marianodagaang", Icon: XLogo },
  { label: "Instagram", href: "https://www.instagram.com/reinhardvon04/", Icon: InstagramLogo },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mariano-q-daga-ang-jr-566185286/", Icon: LinkedinLogo },
];
export default function Navbar() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  return <aside className="portfolio-sidebar fixed bottom-0 left-0 z-50 w-full border-t lg:bottom-auto lg:top-0 lg:h-screen lg:w-[250px] lg:border-r lg:border-t-0" aria-label="Main navigation">
    <div className="profile-block hidden lg:flex">
      <a href="./index.html" className="brand-link items-center gap-3"><img src="./mariano.jpg" alt="Mariano profile avatar" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/70" /><span><strong className="block text-xl">Mariano</strong><small className="text-xs">Statistical Analyst</small></span></a>
      <div className="profile-socials" aria-label="Social media links">{socials.map(({label,href,Icon}) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label={label} title={label}><Icon size={21} weight="fill" aria-hidden="true" /></a>)}</div>
    </div>
    <nav className="mx-auto grid max-w-md grid-cols-5 gap-1 p-2 lg:max-w-none lg:grid-cols-1 lg:gap-2 lg:p-0" aria-label="Main navigation">
      {items.map(([Icon,label,href]) => <a key={label} href={href} aria-current={current===href ? "page" : undefined} className={`nav-item flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-3 transition lg:flex-row lg:justify-start lg:gap-3 ${current===href ? "nav-item-active" : ""}`}><Icon size={23} weight="regular" aria-hidden="true" /><span className="text-xs font-semibold lg:text-base">{label}</span></a>)}
    </nav>
    <div className="sidebar-footer hidden lg:block"><div className="flex items-center gap-2 text-sm"><span className="h-2 w-2 rounded-full bg-[#FF9030]" />Open to data opportunities</div><p className="mt-6 text-xs">© 2026 Mariano</p></div>
  </aside>;
}