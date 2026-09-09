import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { usePageMeta } from "../hooks/usePageMeta";
import { services, allCapabilities } from "../data/services";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";
import { Arrow } from "../components/ui/Arrow";
import { CTA } from "../components/home/CTA";
import { cn } from "../utils/cn";

export function ServicesPage() {
  const { t, lang, pathFor } = useLanguage();
  usePageMeta(t.seo.servicesTitle, t.seo.servicesDesc);

  return (
    <>
      <section className="border-b border-sf-soft bg-sf-black text-sf-white">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel light>{t.servicesPage.label}</SectionLabel>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.03em]">
              <span className="block">{t.servicesPage.title1}</span>
              <span className="block text-sf-green">{t.servicesPage.title2}</span>
            </h1>
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-sf-soft/70 sm:text-lg">
              {t.servicesPage.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sf-white">
        <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <Link
                  to={pathFor(`/services/${service.slug}`)}
                  className="group flex h-full flex-col overflow-hidden border border-sf-soft transition-colors hover:border-sf-green"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name[lang]}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute start-3 top-3 border border-sf-white/30 bg-sf-black/50 px-2 py-1 backdrop-blur-sm">
                      <span className="font-body text-[10px] uppercase tracking-[0.16em] text-sf-white">
                        {service.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h2 className="font-display text-2xl font-medium tracking-tight text-sf-black transition-colors group-hover:text-sf-green">
                      {service.name[lang]}
                    </h2>
                    <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-sf-gray">
                      {service.tagline[lang]}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.16em] text-sf-green">
                      {t.common.learnMore}
                      <Arrow className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-sf-soft bg-sf-white">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <SectionLabel>{t.servicesPage.capabilities}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-sf-black sm:text-4xl">
              {t.servicesPage.capabilities}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {allCapabilities[lang].map((cap, i) => (
              <div
                key={cap}
                className={cn(
                  "flex items-center gap-3 border-b border-sf-soft py-3.5",
                  i % 2 === 0 && "sm:border-e sm:pe-4"
                )}
              >
                <span className="font-display text-xs text-sf-concrete">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-body text-sm text-sf-black">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
