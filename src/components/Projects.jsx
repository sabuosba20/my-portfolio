import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import Reveal from "./reveal";

const featuredProjects = [
  {
    title: "Furniture Supply Chain BCD",
    description: "A blockchain-based traceability system that follows furniture products, transactions, and ownership across the supply chain.",
    image: "/images/project-supply-chain.webp",
    alt: "Furniture materials and finished products connected across a dark studio landscape",
    stack: ["Blockchain", "Supply chain", "Full stack"],
    link: "https://github.com/sabuosba20/Furniture_supply_chain_BCD",
  },
  {
    title: "NomNom Ordering Platform",
    description: "A multi-role ordering platform for delivery, takeaway, and dine-in operations across customers, vendors, couriers, and managers.",
    image: "/images/project-hospitality.webp",
    alt: "Food ordering and hospitality objects connected by an orange cable",
    stack: ["Ordering", "Operations", "Multi-role"],
    link: "https://github.com/sabuosba20/NomNom-oms",
  },
];

const moreProjects = [
  {
    title: "APU Cafe Management System",
    description: "A Python system for coordinating lecturers, students, trainers, and day-to-day cafe operations.",
    stack: "Python",
    link: "https://github.com/sabuosba20/apu-cafe-ms",
  },
  {
    title: "Disaster Relief Logistics",
    description: "A logistics tool for coordinating resources and distribution workflows during relief operations.",
    stack: "Operations",
    link: "https://github.com/adel8282/Disaster-Relief-Logistics-Management-",
  },
  {
    title: "Sheba Hotel Management",
    description: "A C-based system for bookings, customer records, and room availability.",
    stack: "C",
    link: "https://github.com/as3q/sheba-hms",
  },
];

function ProjectLink({ href, label = "View repository" }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="project-link">
      <GithubLogo size={19} weight="fill" />
      {label}
      <ArrowUpRight size={17} weight="bold" />
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="max-w-4xl">
          <h2 className="section-title">Selected systems, built around real workflows.</h2>
          <p className="section-copy">Projects spanning traceability, hospitality, ordering, and operational software.</p>
        </Reveal>

        <div className="mt-14 space-y-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="group grid overflow-hidden rounded-panel border border-line bg-surface lg:grid-cols-[1.25fr_0.75fr]">
                <div className="relative min-h-[320px] overflow-hidden md:min-h-[480px]">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    width="1440"
                    height="960"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-between p-6 md:p-10 lg:p-12">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => <span key={item} className="tech-label">{item}</span>)}
                    </div>
                    <h3 className="mt-7 text-3xl font-extrabold leading-tight tracking-[-0.04em] md:text-4xl">{project.title}</h3>
                    <p className="mt-4 max-w-lg leading-relaxed text-muted">{project.description}</p>
                  </div>
                  <div className="mt-10"><ProjectLink href={project.link} /></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-12">
          {moreProjects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.06}
              className={index === 0 ? "md:col-span-5" : index === 1 ? "md:col-span-7" : "md:col-span-12 lg:ml-[24%]"}
            >
              <article className="small-project flex h-full min-h-72 flex-col justify-between rounded-panel border border-line bg-surface p-6 md:p-8">
                <div>
                  <span className="font-mono text-xs font-semibold text-accent">{project.stack}</span>
                  <h3 className="mt-5 max-w-md text-2xl font-extrabold tracking-[-0.035em]">{project.title}</h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-muted">{project.description}</p>
                </div>
                <div className="mt-8"><ProjectLink href={project.link} label="GitHub" /></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
