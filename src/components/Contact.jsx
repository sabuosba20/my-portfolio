import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import Reveal from "./reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-secondary text-textLight flex flex-col items-center justify-center px-6 md:px-16"
    >
      {/* Heading */}
      <Reveal>
        <h2 className="text-4xl font-bold mb-6 text-primary border-b-4 border-accent pb-2">
          Contact Me
        </h2>
      </Reveal>

      {/* Description */}
      <Reveal>
        <p className="text-lg text-textMuted max-w-2xl text-center mb-12 leading-relaxed">
          I would love to hear from you! Whether you have a question, collaboration idea,
          or just want to say hi — feel free to reach out. Lets connect and create
          something amazing together!
        </p>
      </Reveal>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 text-lg">
        {/* Email */}
        <a
          href="mailto:sohaib@abuosba.com"
          className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-blue-600 rounded-lg text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <FaEnvelope className="text-xl" /> Email Me
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sohaib-najib-aboosbua"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#0a66c2] rounded-lg text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <FaLinkedin className="text-xl" /> LinkedIn
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/sohaib.abuosba"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 rounded-lg text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <FaInstagram className="text-xl" /> Instagram
        </a>
      </div>

      {/* Footer Note */}
      <p className="mt-12 text-sm text-textMuted">
        © {new Date().getFullYear()} Sohaib Aboosbua — All rights reserved.
      </p>
    </section>
  );
}
