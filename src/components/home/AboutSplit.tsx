import { useLanguage } from "../../i18n/LanguageContext";
import { images } from "../../data/images";
import { SectionLabel } from "../ui/SectionLabel";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function AboutSplit() {
  const { t, lang, pathFor } = useLanguage();

  return (
    <section className="border-t border-sf-soft bg-sf-white">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        <div className="relative min-h-[360px] overflow-hidden lg:min-h-[640px]">
          <img
            src={images.about}
            alt={lang === "ar" ? "مساحة أرضيات تجارية" : "Commercial flooring space"}
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-sf-black/30" />
          <div className="absolute start-6 top-6 border border-sf-white/30 bg-sf-black/40 px-3 py-1.5 backdrop-blur-sm">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-sf-white">
              {t.brand}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center px-4 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
          <Reveal>
            <SectionLabel>{t.about.label}</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-sf-black">
              <span className="block">{t.about.title1}</span>
              <span className="block text-sf-green">{t.about.title2}</span>
            </h2>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-sf-gray">
              {t.about.body}
            </p>
          </Reveal>

          <Stagger className="mt-10 grid grid-cols-2 gap-6 sm:gap-8">
            {t.about.stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="border-s-2 border-sf-green ps-4">
                  <div className="font-display text-3xl font-medium tracking-tight text-sf-black sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-body text-[10px] uppercase tracking-[0.2em] text-sf-concrete">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15} className="mt-10">
            <Button to={pathFor("/about")} variant="outline">
              {t.common.learnMore}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
