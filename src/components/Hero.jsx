import { ArrowRight, DownloadSimple } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const enter = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.72,
      delay: reduceMotion ? 0 : delay,
      ease: [0.23, 1, 0.32, 1],
    },
  });

  return (
    <section id="hero" className="relative min-h-[100dvh] px-4 pb-8 pt-24 md:px-8 md:pt-24">
      <div className="mx-auto grid min-h-[calc(100dvh-8rem)] max-w-[1400px] items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="relative z-base max-w-2xl">
          <motion.p {...enter(0.05)} className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Full-stack developer
          </motion.p>
          <motion.h1 {...enter(0.12)} className="max-w-[12ch] text-[clamp(3.25rem,6vw,5.7rem)] font-extrabold leading-[0.91] tracking-[-0.065em]">
            Software, made clear.
          </motion.h1>
          <motion.p {...enter(0.2)} className="mt-7 max-w-[560px] text-lg leading-relaxed text-muted md:text-xl">
            Full-stack developer and computer science student turning complex workflows into fast, usable software.
          </motion.p>
          <motion.div {...enter(0.28)} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="button button-primary">
              View work <ArrowRight size={18} weight="bold" />
            </a>
            <a href="/Sohaib-Aboosbua-CV.pdf" target="_blank" rel="noreferrer" className="button button-secondary">
              Download CV <DownloadSimple size={18} weight="bold" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual relative overflow-hidden rounded-panel"
          initial={reduceMotion ? false : { opacity: 0, clipPath: "inset(0 0 16% 0 round 24px)", transform: "scale(0.98)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0 0 round 24px)", transform: "scale(1)" }}
          transition={{ duration: reduceMotion ? 0 : 1.05, delay: reduceMotion ? 0 : 0.18, ease: [0.23, 1, 0.32, 1] }}
        >
          <img
            src="/images/hero-system.webp"
            alt="Sculptural stack of technology materials connected by an orange cable"
            className="absolute inset-0 h-full w-full object-cover"
            width="1440"
            height="960"
            fetchPriority="high"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f0f0f]/90 to-transparent p-6 pt-24 text-[#f4f1ea] md:p-8 md:pt-32">
            <p className="max-w-sm text-sm leading-relaxed text-[#d8d4cc]">
              Thoughtful interfaces, dependable logic, and the connective tissue between them.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
