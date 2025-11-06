import { FaCode, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import Reveal from "./reveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-secondary text-textLight flex flex-col items-center px-6 md:px-16"
    >
      {/* Heading */}
      <Reveal>
        <h2 className="text-4xl font-bold mb-8 text-primary border-b-4 border-accent pb-2">
          About Me
        </h2>
      </Reveal>

      {/* Description */}
      <Reveal delay={0.2}>
        <p className="max-w-3xl text-lg text-textMuted leading-relaxed text-center mb-12">
          Hello! I am <span className="text-accent font-semibold">Sohaib Aboosbua</span>,
          a passionate <span className="text-primary">Full Stack Developer</span> and
          Computer Science student based in Malaysia 🇲🇾. I love designing and building
          clean, dynamic web experiences that balance performance, aesthetics, and usability.
        </p>
      </Reveal>
      <br /><br />
      <Reveal delay={0.4}>
        <p className="max-w-3xl text-lg text-textMuted leading-relaxed text-center mb-12">
          When I am not coding, I am learning new technologies, experimenting with design ideas,
          or collaborating on creative projects that push my boundaries. My goal is to build
          digital solutions that not only work — but *feel* great to use.
        </p>
      </Reveal>

      {/* Highlights / Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
        {/* Card 1 */}
        <div className="bg-secondary border border-gray-700 hover:border-primary rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
          <FaCode className="text-4xl text-accent mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-primary">Front-End Focus</h3>
          <p className="text-textMuted text-sm">
            Skilled in React, Tailwind CSS, and responsive design for clean and modern UI.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-secondary border border-gray-700 hover:border-primary rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
          <FaLaptopCode className="text-4xl text-accent mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-primary">Back-End Logic</h3>
          <p className="text-textMuted text-sm">
            Experienced with Node.js, Express, and MongoDB to create powerful APIs and apps.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-secondary border border-gray-700 hover:border-primary rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
          <FaLightbulb className="text-4xl text-accent mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-primary">Creative Vision</h3>
          <p className="text-textMuted text-sm">
            I enjoy solving real-world problems with a mix of design thinking and technology.
          </p>
        </div>
      </div>
    </section>
  );
}
