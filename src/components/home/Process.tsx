import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionLabel } from "../ui/SectionLabel";
import { Reveal } from "../ui/Reveal";

export function Process() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="border-t border-sf-soft bg-sf-white" ref={ref}>
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionLabel>{t.process.label}</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,6vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-sf-black">
            <span className="block">{t.process.title1}</span>
            <span className="block text-sf-green">{t.process.title2}</span>
          </h2>
        </Reveal>

        <div className="relative mt-16 max-w-3xl">
          {/* Progress line track */}
          <div className="absolute start-[19px] top-0 bottom-0 w-px bg-sf-soft sm:start-[27px]" aria-hidden>
            {!reduce && (
              <motion.div
                className="w-full origin-top bg-sf-green"
                style={{ height: lineHeight }}
              />
            )}
            {reduce && <div className="h-full w-full bg-sf-green/40" />}
          </div>

          <ol className="space-y-0">
            {t.process.steps.map((step, i) => (
              <li key={step.num} className="relative flex gap-6 pb-12 last:pb-0 sm:gap-10">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-sf-green bg-sf-white sm:h-14 sm:w-14">
                  <span className="font-display text-xs font-semibold text-sf-green sm:text-sm">
                    {step.num}
                  </span>
                </div>
                <div className="pt-1 sm:pt-3">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-sf-black sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-sf-gray sm:text-base">
                    {step.desc}
                  </p>
                  {i < t.process.steps.length - 1 && (
                    <div className="mt-6 h-px w-16 bg-sf-soft" />
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
