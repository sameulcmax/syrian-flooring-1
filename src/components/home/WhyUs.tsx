import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionLabel } from "../ui/SectionLabel";
import { Reveal } from "../ui/Reveal";
import { cn } from "../../utils/cn";

export function WhyUs() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="border-t border-sf-soft bg-sf-white">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionLabel>{t.why.label}</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.92] tracking-[-0.03em] text-sf-black">
            <span className="block">{t.why.title1}</span>
            <span className="block text-sf-green">{t.why.title2}</span>
          </h2>
        </Reveal>

        <ul className="mt-14 border-t border-sf-soft">
          {t.why.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.num} className="border-b border-sf-soft">
                <button
                  type="button"
                  className="group flex w-full items-start gap-4 py-5 text-start sm:gap-8 sm:py-6"
                  onMouseEnter={() => setOpen(i)}
                  onFocus={() => setOpen(i)}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      "font-display text-sm font-medium tracking-wider transition-colors sm:text-base",
                      isOpen ? "text-sf-green" : "text-sf-concrete"
                    )}
                  >
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "font-display text-xl font-medium tracking-tight transition-all duration-300 sm:text-2xl md:text-3xl lg:text-4xl",
                        isOpen ? "text-sf-green translate-x-1 rtl:-translate-x-1" : "text-sf-black"
                      )}
                    >
                      {item.title}
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden font-body text-sm leading-relaxed text-sf-gray sm:text-base"
                        >
                          <span className="block pt-3 pb-1">{item.desc}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <span
                    className={cn(
                      "mt-1 h-2 w-2 shrink-0 rounded-full transition-colors",
                      isOpen ? "bg-sf-red" : "bg-sf-soft"
                    )}
                    aria-hidden
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
