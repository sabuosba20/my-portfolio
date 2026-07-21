import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Stack", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="fixed inset-x-0 top-0 z-nav px-4 pt-4 md:px-8">
      <nav className="nav-shell mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-6" aria-label="Primary navigation">
        <a href="#hero" className="pressable flex items-center gap-3 text-sm font-bold tracking-tight" aria-label="Sohaib Aboosbua, home">
          <span className="grid size-9 place-items-center rounded-full bg-ink text-canvas">SA</span>
          <span className="hidden sm:block">Sohaib Aboosbua</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a className="nav-link" href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="pressable grid size-10 place-items-center rounded-full border border-line text-ink md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <X size={20} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="nav-shell mx-auto mt-2 max-w-[1400px] overflow-hidden p-2 md:hidden"
            initial={reduceMotion ? false : { opacity: 0, transform: "translateY(-8px) scale(0.98)" }}
            animate={{ opacity: 1, transform: "translateY(0) scale(1)" }}
            exit={{ opacity: 0, transform: "translateY(-4px) scale(0.98)" }}
            transition={{ duration: reduceMotion ? 0 : 0.18, ease: [0.23, 1, 0.32, 1] }}
          >
            {navLinks.map((link) => (
              <a key={link.name} className="flex min-h-12 items-center rounded-xl px-4 font-semibold hover:bg-soft" href={link.href} onClick={() => setMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
