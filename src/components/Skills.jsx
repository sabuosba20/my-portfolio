import { motion } from "framer-motion";
import Reveal from "./reveal";
const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "C++", icon: "💻" },
  { name: "SQL", icon: "🗃️" },
  { name: "Git & GitHub", icon: "🔧" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-secondary text-textLight flex flex-col items-center px-6 md:px-16"
    >
      {/* Heading */}
      <Reveal>
        <h2 className="text-4xl font-bold mb-8 text-primary border-b-4 border-accent pb-2">
          Skills
        </h2>
      </Reveal>

      {/* Subtitle */}
      <p className="text-lg text-textMuted max-w-2xl text-center mb-12 leading-relaxed">
        A collection of the technologies and tools I use to design, build, and
        maintain web applications, data-driven systems, and software projects.
      </p>

      {/* Skill Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-700 hover:border-primary hover:scale-105 transition-all duration-300 rounded-xl py-6 flex flex-col justify-center items-center shadow-lg hover:shadow-xl"
          >
            <span className="text-4xl mb-3">{skill.icon}</span>
            <h3 className="text-lg font-semibold text-accent">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
