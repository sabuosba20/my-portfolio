import { BracketsCurly, Cube, Database, Toolbox } from "@phosphor-icons/react";
import Reveal from "./reveal";

const groups = [
  { title: "Frontend", skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"], icon: BracketsCurly },
  { title: "Backend", skills: ["Node.js", "Express", "Python", "Java", "C++"], icon: Cube },
  { title: "Data", skills: ["MongoDB", "SQL", "Data modeling"], icon: Database },
  { title: "Workflow", skills: ["Git", "GitHub", "Responsive design"], icon: Toolbox },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="max-w-3xl">
          <h2 className="section-title">A practical stack for complete products.</h2>
          <p className="section-copy">I choose tools for clarity, maintainability, and the problem in front of me.</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {groups.map((group, index) => {
            const Icon = group.icon;
            const span = index < 2 ? "lg:col-span-7" : "lg:col-span-5";
            return (
              <Reveal key={group.title} delay={index * 0.06} className={span}>
                <article className="skill-group h-full rounded-panel border border-line bg-surface p-6 md:p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid size-11 place-items-center rounded-full bg-soft text-accent">
                      <Icon size={23} weight="duotone" />
                    </span>
                    <h3 className="text-xl font-extrabold tracking-tight">{group.title}</h3>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                    {group.skills.map((skill) => (
                      <span key={skill} className="text-lg font-semibold text-muted">{skill}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
