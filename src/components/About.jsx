import { Code, Database, PenNib, PlugsConnected } from "@phosphor-icons/react";
import Reveal from "./reveal";

const strengths = [
  { title: "Interfaces", detail: "Responsive React experiences with clear hierarchy and careful interaction.", icon: PenNib },
  { title: "Application logic", detail: "Maintainable APIs and workflows built around real user needs.", icon: Code },
  { title: "Data", detail: "Relational and document data shaped for reliable products.", icon: Database },
  { title: "Systems", detail: "Connected services that make complex operations easier to understand.", icon: PlugsConnected },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="max-w-4xl">
          <h2 className="section-title">Software should feel considered from the first click to the last request.</h2>
          <p className="section-copy">
            I am Sohaib Aboosbua, a computer science student and full-stack developer. I like turning operational complexity into focused, dependable products.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:ml-[14%]">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <Reveal key={strength.title} delay={index * 0.06} className="capability-row">
                <Icon size={28} weight="duotone" className="text-accent" />
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{strength.title}</h3>
                  <p className="mt-2 max-w-md leading-relaxed text-muted">{strength.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
