import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { industries } from "../../data/industries";
import { SectionLabel } from "../ui/SectionLabel";
import { Reveal } from "../ui/Reveal";
import { cn } from "../../utils/cn";

export function IndustryWall() {
  const { t, lang, pathFor } = useLanguage();
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = industries[active];

  return (
    <section className="border-t border-sf-soft bg-sf-white">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionLabel>{t.industries.label}</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,6vw,5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-sf-black">
            <span className="block">{t.industries.title1}</span>
            <span className="block text-sf-green">{t.industries.title2}</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Typographic wall */}
          <div className="lg:col-span-7">
            <ul>
              {industries.map((ind, i) => {
                const isActive = active === i;
                return (
                  <li key={ind.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={cn(
                        "group flex w-full items-center gap-4 border-b border-sf-soft py-3 text-start transition-all duration-300 sm:py-4",
                        isActive ? "text-sf-green" : "text-sf-black"
                      )}
                    >
                      <span
                        className={cn(
                          "h-8 w-0.5 shrink-0 transition-all duration-300",
                          isActive ? "bg-sf-red scale-y-100" : "bg-transparent scale-y-0"
                        )}
                        aria-hidden
                      />
                      <span
                        className={cn(
                          "font-display text-[clamp(1.75rem,5vw,4.5rem)] font-medium leading-none tracking-[-0.03em] transition-transform duration-300",
                          isActive && "translate-x-2 rtl:-translate-x-2"
                        )}
                      >
                        {ind.name[lang]}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Image panel */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 overflow-hidden border border-sf-soft">
              <div className="relative aspect-[4/5]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.id}
                    src={current.image}
                    alt={current.name[lang]}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={reduce ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                    animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-sf-black/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sf-red" />
                    <span className="font-body text-[10px] uppercase tracking-[0.2em] text-sf-soft/70">
                      {t.industries.systems}
                    </span>
                  </div>
                  <p className="mb-4 font-body text-sm leading-relaxed text-sf-white/90">
                    {current.description[lang]}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {current.systems[lang].map((s) => (
                      <span
                        key={s}
                        className="border border-sf-white/25 px-2 py-1 font-body text-[10px] uppercase tracking-[0.14em] text-sf-white"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={pathFor("/industries")}
                    className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.16em] text-sf-green hover:underline"
                  >
                    {t.industries.explore}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
