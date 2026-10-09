import {EnvelopeSimple,ArrowUpRight,LinkedinLogo,GithubLogo} from "@phosphor-icons/react";
const socialLinks=[{label:"LinkedIn profile",href:"https://www.linkedin.com/in/mariano-q-daga-ang-jr-566185286/",Icon:LinkedinLogo},{label:"GitHub repositories",href:"https://github.com/marianodags?tab=repositories",Icon:GithubLogo}];
export default function Contact({ headingLevel = "h1" }) {
  const Heading = headingLevel;

  return (
    <section id="contact" className="section-pad">
      <div className="contact-grid">
        <div>
          <p className="kicker">Contact</p>
          <Heading>Have a data question to solve?</Heading>
          <p className="lead-copy">I’m interested in opportunities involving statistical analysis, data preparation, reporting, and visualization. Reach out to discuss a role, project, or collaboration.</p>
          <a href="mailto:mqdagaang@gmail.com" className="mt-8 inline-flex min-h-14 items-center gap-2 rounded-xl bg-[#FF9030] px-6 font-extrabold text-[#111827]">
            Email Mariano <ArrowUpRight size={21} aria-hidden="true" />
          </a>
        </div>
        <div className="contact-details">
          <p className="font-bold">Let’s connect</p>
          <a className="contact-link" href="mailto:mqdagaang@gmail.com">
            <EnvelopeSimple size={22} aria-hidden="true" />mqdagaang@gmail.com
          </a>
          {socialLinks.map(({ label, href, Icon }) => (
            <a className="contact-link" key={label} href={href} target="_blank" rel="noopener noreferrer">
              <Icon size={22} aria-hidden="true" />{label}<ArrowUpRight className="ml-auto" size={16} aria-hidden="true" />
            </a>
          ))}
          <a className="contact-link" href="./resume.pdf" download="Mariano-Daga-ang-Resume.pdf">
            <ArrowUpRight size={22} aria-hidden="true" />Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
