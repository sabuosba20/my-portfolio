import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./reveal.jsx";


const projects = [
  {
    title: "APU Café Management System",
    description:
      "A Python-based system for Asia Pacific University to manage lecturers, students, and trainers efficiently.",
    link: "https://github.com/sabuosba20/apu-cafe-ms.git",
  },
  {
    title: "Sheba Hotel Management System",
    description:
      "A C-based hotel management system built for Sheba Hotel to handle bookings, customer data, and room availability.",
    link: "https://github.com/as3q/sheba-hms.git",
  },
  {
    title: "NomNom Ordering Platform",
    description:
      "A full-featured system managing food delivery, takeaway, and dine-in operations — supporting vendors, customers, couriers, admins, and managers.",
    link: "https://github.com/sabuosba20/NomNom-oms.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-secondary text-textLight flex flex-col items-center px-6 md:px-16"
    >
      {/* Heading */}
      <Reveal>
        <h2 className="text-4xl font-bold mb-12 text-primary border-b-4 border-accent pb-2">
          Projects
        </h2>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-700 hover:border-primary rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-semibold mb-3 text-accent">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-textMuted mb-6 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-blue-600 transition-all duration-300 shadow-md"
              >
                <FaGithub className="text-lg" /> View Code
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-accent text-accent rounded-md text-sm font-medium hover:bg-accent hover:text-secondary transition-all duration-300"
              >
                <FaExternalLinkAlt className="text-sm" /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
