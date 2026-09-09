import { useLanguage } from "../i18n/LanguageContext";
import { usePageMeta } from "../hooks/usePageMeta";
import { images } from "../data/images";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";
import { Process } from "../components/home/Process";
import { WhyUs } from "../components/home/WhyUs";
import { CTA } from "../components/home/CTA";

export function AboutPage() {
  const { t, lang } = useLanguage();
  usePageMeta(t.seo.aboutTitle, t.seo.aboutDesc);

  return (
    <>
      <section className="border-b border-sf-soft bg-sf-black text-sf-white">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel light>{t.aboutPage.label}</SectionLabel>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.03em]">
              <span className="block">{t.aboutPage.title1}</span>
              <span className="block text-sf-green">{t.aboutPage.title2}</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-sf-white">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
          <div className="relative min-h-[400px] overflow-hidden lg:min-h-full">
            <img
              src={images.corporate}
              alt={lang === "ar" ? "مساحة أرضيات تجارية" : "Commercial flooring environment"}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-sf-black/20" />
          </div>
          <div className="flex flex-col justify-center px-4 py-14 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
            <Reveal>
              <SectionLabel>{t.about.label}</SectionLabel>
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-sf-black">
                <span className="block">{t.about.title1}</span>
                <span className="block text-sf-green">{t.about.title2}</span>
              </h2>
              <p className="mt-6 font-body text-base leading-relaxed text-sf-gray sm:text-lg">
                {t.about.body}
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-sf-gray sm:text-lg">
                {t.about.body2}
              </p>
            </Reveal>

            <Stagger className="mt-12 grid grid-cols-2 gap-8">
              {t.about.stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="border-s-2 border-sf-green ps-4">
                    <div className="font-display text-4xl font-medium tracking-tight text-sf-black sm:text-5xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 font-body text-[11px] uppercase tracking-[0.2em] text-sf-concrete">
                      {stat.label}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <WhyUs />
      <Process />
      <CTA />
    </>
  );
}
