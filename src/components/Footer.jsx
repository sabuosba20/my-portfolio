import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary text-textLight py-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12 text-center md:text-left space-y-6 md:space-y-0">
        
        {/* Left Side */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-2">
            Sohaib <span className="text-accent">Aboosbua</span>
          </h3>
          <p className="text-textMuted text-sm">
            Building creative, fast, and reliable digital experiences.
          </p>
        </div>

        {/* Center — Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/sabuosba20"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sohaib-najib-aboosbua-66a29732b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/sohaib.abuosba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Right Side — Copyright */}
        <p className="text-sm text-textMuted">
          © {new Date().getFullYear()} Sohaib Aboosbua — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
