import { FaArrowDown } from "react-icons/fa";


export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-secondary via-gray-900 to-black text-textLight px-6"
    >
      {/* Intro text */}
      <p className="text-accent font-medium mb-2 tracking-wide">
        👋 Hello, I'm
      </p>

      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-4">
        Sohaib Aboosbua
      </h1>

      {/* Role */}
      <p className="text-xl md:text-2xl text-textMuted max-w-2xl mb-8 leading-relaxed">
        Full Stack Developer & Computer Science Student passionate about creating
        interactive, fast, and modern web applications.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          🚀 View My Work
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-secondary transition-all duration-300"
        >
          Contact Me
        </a>
      </div>

      {/* Scroll hint */}
      <div className="mt-16 animate-bounce">
        <FaArrowDown className="text-accent text-2xl" />
      </div>
    </section>
  );
}
