import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { usePageMeta } from "../hooks/usePageMeta";
import { industries } from "../data/industries";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { CTA } from "../components/home/CTA";
import { cn } from "../utils/cn";

export function IndustriesPage() {
  const { t, lang, pathFor } = useLanguage();
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = industries[active];
  usePageMeta(t.seo.industriesTitle, t.seo.industriesDesc);

  return (
    <>
      <section className="border-b border-sf-soft bg-sf-black text-sf-white">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel light>{t.industriesPage.label}</SectionLabel>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.03em]">
              <span className="block">{t.industriesPage.title1}</span>
              <span className="block text-sf-green">{t.industriesPage.title2}</span>
            </h1>
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-sf-soft/70 sm:text-lg">
              {t.industriesPage.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sf-white">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-12">
          {/* Wall */}
          <div className="border-b border-sf-soft px-4 py-10 sm:px-6 lg:col-span-6 lg:border-b-0 lg:border-e lg:px-8 lg:py-16">
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
                        "group flex w-full items-center gap-4 border-b border-sf-soft py-4 text-start transition-all duration-300 sm:py-5",
                        isActive ? "text-sf-green" : "text-sf-black"
                      )}
                    >
                      <span
                        className={cn(
                          "h-10 w-0.5 shrink-0 transition-all duration-300",
                          isActive ? "bg-sf-red" : "bg-transparent"
                        )}
                      />
                      <span className="font-display text-[11px] text-sf-concrete">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "font-display text-[clamp(1.5rem,4vw,3.5rem)] font-medium leading-none tracking-[-0.03em] transition-transform duration-300",
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

          {/* Detail panel */}
          <div className="px-4 py-10 sm:px-6 lg:col-span-6 lg:px-10 lg:py-16">
            <div className="sticky top-24">
              <div className="relative aspect-[16/11] overflow-hidden border border-sf-soft">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.id}
                    src={current.image}
                    alt={current.name[lang]}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  />
                </AnimatePresence>
              </div>
              <div className="mt-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sf-red" />
                  <span className="font-body text-[11px] uppercase tracking-[0.2em] text-sf-concrete">
                    {current.name[lang]}
                  </span>
                </div>
                <p className="font-body text-base leading-relaxed text-sf-gray">
                  {current.description[lang]}
                </p>
                <div className="mt-5">
                  <p className="mb-3 font-body text-[10px] uppercase tracking-[0.2em] text-sf-concrete">
                    {t.industries.systems}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {current.systems[lang].map((s) => (
                      <span
                        key={s}
                        className="border border-sf-soft px-3 py-1.5 font-body text-[11px] uppercase tracking-[0.12em] text-sf-black"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <Button to={pathFor("/contact")} variant="solid-green">
                    {t.nav.requestQuote}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
