import { useLanguage } from "../../i18n/LanguageContext";
import { Reveal } from "../ui/Reveal";

export function Intro() {
  const { t } = useLanguage();

  return (
    <section className="bg-sf-white">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-28">
        <div className="lg:col-span-8">
          <Reveal>
            <h2 className="font-display text-[clamp(2.25rem,6vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-sf-black">
              <span className="block">{t.intro.line1}</span>
              <span className="block">{t.intro.line2}</span>
              <span className="block text-sf-green">{t.intro.line3}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-sf-gray sm:text-lg">
              {t.intro.body}
            </p>
          </Reveal>
        </div>

        <div className="flex lg:col-span-4 lg:justify-end">
          <Reveal delay={0.15} className="flex items-stretch gap-4">
            <div className="w-px bg-sf-green" aria-hidden />
            <div className="flex flex-col justify-center gap-4 font-body text-[11px] font-medium uppercase tracking-[0.22em] text-sf-black">
              <span>{t.intro.commercial}</span>
              <span>{t.intro.industrial}</span>
              <span>{t.intro.residential}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
