import { ArrowUpRight, EnvelopeSimple, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import Reveal from "./reveal";

const socials = [
  { name: "GitHub", href: "https://github.com/sabuosba20", icon: GithubLogo },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sohaib-najib-aboosbua-66a29732b/", icon: LinkedinLogo },
  { name: "Instagram", href: "https://www.instagram.com/sohaib.abuosba", icon: InstagramLogo },
];

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-16 md:px-8 md:py-24">
      <Reveal className="mx-auto max-w-[1400px]">
        <div className="contact-panel rounded-panel p-6 text-[#f4f1ea] md:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#f07943]">Start a conversation</p>
              <h2 className="mt-5 max-w-[13ch] text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] md:text-6xl">
                Have a useful problem to solve?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#c8c4bc]">
                I am open to collaborations, internships, and software projects with a clear purpose.
              </p>
            </div>
            <a href="mailto:sohaib@abuosba.com" className="button button-on-dark">
              Email me <EnvelopeSimple size={19} weight="bold" />
            </a>
          </div>
          <div className="mt-14 flex flex-wrap gap-3 border-t border-white/15 pt-7">
            {socials.map((social) => {
              const SocialIcon = social.icon;
              return (
                <a key={social.name} href={social.href} target="_blank" rel="noreferrer" className="social-link">
                  <SocialIcon size={19} weight="fill" />
                  {social.name}
                  <ArrowUpRight size={15} weight="bold" />
                </a>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
