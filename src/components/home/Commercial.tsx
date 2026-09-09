import { useRef } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { commercialSectors } from "../../data/projects";
import { SectionLabel } from "../ui/SectionLabel";
import { Reveal } from "../ui/Reveal";
import { Link } from "react-router-dom";

export function Commercial() {
  const { t, lang, pathFor } = useLanguage();
  const stripRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = stripRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.6), behavior: "smooth" });
  };

  return (
    <section className="bg-sf-black text-sf-white">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <Reveal>
          <SectionLabel light>{t.commercial.label}</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.03em]">
            <span className="block">{t.commercial.title1}</span>
            <span className="block text-sf-green">{t.commercial.title2}</span>
          </h2>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-sf-soft/70 sm:text-lg">
            {t.commercial.body}
          </p>
        </Reveal>

        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            className="flex h-10 w-10 items-center justify-center border border-sf-white/25 text-sf-white transition-colors hover:border-sf-green hover:text-sf-green"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            className="flex h-10 w-10 items-center justify-center border border-sf-white/25 text-sf-white transition-colors hover:border-sf-green hover:text-sf-green"
            aria-label="Next"
          >
            →
          </button>
        </div>

        <div
          ref={stripRef}
          className="hs-strip scrollbar-hide mt-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          {commercialSectors.map((sector) => (
            <Link
              key={sector.id}
              to={pathFor("/industries")}
              className="group relative h-[320px] w-[260px] overflow-hidden border border-sf-white/10 sm:h-[380px] sm:w-[300px] lg:h-[440px] lg:w-[340px]"
            >
              <img
                src={sector.image}
                alt={sector.name[lang]}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sf-black via-sf-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sf-red" />
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-sf-soft/70">
                    {t.common.project}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  {sector.name[lang]}
                </h3>
                <div className="mt-3 h-px w-0 bg-sf-green transition-all duration-500 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
