import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { images } from "../../data/images";
import { Button } from "../ui/Button";

export function Hero() {
  const { t, pathFor, lang } = useLanguage();
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();

  const lines = [
    { text: t.hero.line1, highlight: false },
    { text: t.hero.line2, highlight: true },
    { text: t.hero.line3, highlight: false },
    { text: t.hero.line4, highlight: false },
  ];

  return (
    <section className="relative bg-sf-black">
      <div className="flex min-h-[calc(100svh-3.5rem)] flex-col lg:min-h-[calc(100svh-4rem)] lg:flex-row">
        {/* Left — typography */}
        <div className="relative z-10 flex w-full flex-col justify-between border-b border-sf-white/10 px-4 py-10 sm:px-6 sm:py-14 lg:w-[42%] lg:border-b-0 lg:border-e lg:border-sf-white/10 lg:px-8 lg:py-16 xl:px-12">
          <div className="grid-lines-dark pointer-events-none absolute inset-0 opacity-40" />

          <div className="relative">
            <div className="mb-8 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sf-red" />
              <span className="font-body text-[10px] uppercase tracking-[0.24em] text-sf-soft/50">
                {t.brand}
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-sf-white">
              {lines.map((line, i) => (
                <motion.span
                  key={i}
                  className="block overflow-hidden"
                  initial={reduce ? false : { y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className={line.highlight ? "text-sf-green" : undefined}>
                    {line.text}
                  </span>
                </motion.span>
              ))}
            </h1>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-sf-white/10 pt-6 font-body text-[11px] uppercase tracking-[0.2em] text-sf-soft/55">
              <span>{t.hero.commercial}</span>
              <span className="text-sf-green">/</span>
              <span>{t.hero.industrial}</span>
              <span className="text-sf-green">/</span>
              <span>{t.hero.residential}</span>
            </div>
          </div>

          <div className="relative mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button to={pathFor("/contact")} variant="solid" className="w-full sm:w-auto">
              {t.hero.cta}
            </Button>
            <Button to={pathFor("/projects")} variant="outline-light" className="w-full sm:w-auto">
              {t.hero.secondary}
            </Button>
          </div>
        </div>

        {/* Right — image */}
        <div
          className="relative w-full flex-1 overflow-hidden lg:w-[58%]"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out"
            style={{ transform: hovered && !reduce ? "scale(1.04)" : "scale(1)" }}
          >
            <img
              src={images.hero}
              alt={
                lang === "ar"
                  ? "تركيب أرضيات تجارية احترافي"
                  : "Professional commercial flooring installation"
              }
              className="h-full w-full object-cover"
              style={{ minHeight: "420px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sf-black/50 via-transparent to-sf-black/20" />
          </div>

          {/* Technical labels */}
          <div className="absolute start-4 top-4 z-10 border border-sf-white/30 bg-sf-black/50 px-3 py-1.5 backdrop-blur-sm sm:start-6 sm:top-6">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-sf-white">
              {t.hero.label1}
            </span>
          </div>

          <div className="absolute bottom-4 end-4 z-10 flex items-center gap-2 border border-sf-white/20 bg-sf-black/50 px-3 py-1.5 backdrop-blur-sm sm:bottom-6 sm:end-6">
            <span className="h-1.5 w-1.5 rounded-full bg-sf-green" />
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-sf-white">
              {t.hero.label2}
            </span>
          </div>

          {/* Hover technical lines + info */}
          <div
            className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
            style={{ opacity: hovered && !reduce ? 1 : 0 }}
            aria-hidden
          >
            <div className="absolute start-[12%] top-0 h-full w-px bg-sf-green/50" />
            <div className="absolute start-0 top-[30%] h-px w-full bg-sf-green/40" />
            <div className="absolute start-0 top-[70%] h-px w-full bg-sf-green/30" />
            <div className="absolute bottom-[18%] start-[12%] border border-sf-green/60 bg-sf-black/70 px-3 py-2 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sf-red" />
                <span className="font-body text-[10px] uppercase tracking-[0.18em] text-sf-white">
                  {t.hero.hoverInfo}
                </span>
              </div>
              <p className="mt-1 font-body text-[10px] uppercase tracking-[0.14em] text-sf-soft/70">
                EPOXY · POLISHED · LVT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
