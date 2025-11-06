import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Detect scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary/95 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary cursor-pointer hover:text-accent transition-colors duration-300">
          Sohaib<span className="text-accent"> Aboosbua</span>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-textLight font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative group hover:text-accent transition-colors duration-300"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-textLight text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-lg text-center py-6 shadow-inner">
          <ul className="space-y-6 text-lg text-textLight">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
