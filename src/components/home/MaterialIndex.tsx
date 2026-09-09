import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { materialIndex } from "../../data/services";
import { SectionLabel } from "../ui/SectionLabel";
import { Reveal } from "../ui/Reveal";
import { Arrow } from "../ui/Arrow";
import { cn } from "../../utils/cn";

export function MaterialIndex() {
  const { t, lang, pathFor } = useLanguage();
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const current = materialIndex[active];

  return (
    <section className="border-t border-sf-soft bg-sf-white">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionLabel>{t.materials.label}</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.92] tracking-[-0.03em] text-sf-black">
            <span className="block">{t.materials.title1}</span>
            <span className="block text-sf-green">{t.materials.title2}</span>
          </h2>
        </Reveal>

        {/* Desktop material index */}
        <div className="mt-14 hidden gap-10 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="sticky top-28">
              <span className="font-display text-[clamp(4rem,10vw,9rem)] font-medium leading-none tracking-tighter text-sf-soft">
                {current.number}
              </span>
              <div className="relative mt-6 aspect-[4/5] overflow-hidden border border-sf-soft">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.id}
                    src={current.image}
                    alt={current.name[lang]}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={reduce ? false : { opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sf-black/70 to-transparent p-4">
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-sf-white">
                    {current.name[lang]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9">
            <ul className="border-t border-sf-soft">
              {materialIndex.map((item, i) => {
                const isActive = active === i;
                const href = item.slug ? pathFor(`/services/${item.slug}`) : pathFor("/services");
                return (
                  <li key={item.id}>
                    <Link
                      to={href}
                      onMouseEnter={() => setActive(i)}
                      className={cn(
                        "group flex items-center justify-between gap-4 border-b border-sf-soft px-2 py-5 transition-all duration-300 sm:px-4",
                        isActive ? "bg-sf-green text-sf-white" : "text-sf-black hover:bg-sf-soft/40"
                      )}
                    >
                      <div className="flex items-center gap-6 sm:gap-10">
                        <span
                          className={cn(
                            "font-display text-sm font-medium tracking-wider transition-colors",
                            isActive ? "text-sf-white/70" : "text-sf-concrete"
                          )}
                        >
                          {item.number}
                        </span>
                        <span
                          className={cn(
                            "font-display text-xl font-medium tracking-tight transition-transform duration-300 sm:text-2xl md:text-3xl",
                            isActive && "translate-x-2 rtl:-translate-x-2"
                          )}
                        >
                          {item.name[lang]}
                        </span>
                      </div>
                      <span
                        className={cn(
                          "flex items-center gap-2 font-body text-[10px] uppercase tracking-[0.18em] opacity-0 transition-opacity",
                          isActive && "opacity-100"
                        )}
                      >
                        {t.materials.view}
                        <Arrow />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="mt-10 border-t border-sf-soft lg:hidden">
          {materialIndex.map((item, i) => {
            const open = expanded === i;
            const href = item.slug ? pathFor(`/services/${item.slug}`) : pathFor("/services");
            return (
              <div key={item.id} className="border-b border-sf-soft">
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center justify-between gap-3 py-4 text-start transition-colors",
                    open && "text-sf-green"
                  )}
                  onClick={() => setExpanded(open ? null : i)}
                  aria-expanded={open}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-sm text-sf-concrete">{item.number}</span>
                    <span className="font-display text-lg font-medium tracking-tight">
                      {item.name[lang]}
                    </span>
                  </div>
                  <span className="font-display text-xl text-sf-concrete" aria-hidden>
                    {open ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5">
                        <div className="mb-4 aspect-[16/10] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name[lang]}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <Link
                          to={href}
                          className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.16em] text-sf-green"
                        >
                          {t.materials.view}
                          <Arrow />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
