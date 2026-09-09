import { Link, Navigate, useParams } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { usePageMeta } from "../hooks/usePageMeta";
import { getServiceBySlug, services } from "../data/services";
import { projects } from "../data/projects";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { Arrow } from "../components/ui/Arrow";
import { CTA } from "../components/home/CTA";

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang, pathFor } = useLanguage();
  const service = slug ? getServiceBySlug(slug) : undefined;

  usePageMeta(
    service
      ? `${service.name[lang]} | Syrian Flooring`
      : t.seo.servicesTitle,
    service ? service.description[lang] : t.seo.servicesDesc
  );

  if (!service) {
    return <Navigate to={pathFor("/services")} replace />;
  }

  const related = services.filter((s) => service.related.includes(s.slug));
  const examples = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden bg-sf-black lg:min-h-[60vh]">
        <img
          src={service.image}
          alt={service.name[lang]}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sf-black via-sf-black/60 to-sf-black/40" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-[1600px] flex-col justify-end px-4 py-16 sm:px-6 lg:min-h-[60vh] lg:px-8 lg:py-20">
          <Link
            to={pathFor("/services")}
            className="mb-6 inline-flex w-fit items-center gap-2 font-body text-[11px] uppercase tracking-[0.16em] text-sf-soft/70 hover:text-sf-green"
          >
            <Arrow className="rotate-180" />
            {t.servicesPage.back}
          </Link>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-sf-red" />
            <span className="font-body text-[11px] uppercase tracking-[0.22em] text-sf-soft/60">
              {service.number} / {service.shortName[lang]}
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-[-0.03em] text-sf-white">
            {service.name[lang]}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-sf-soft/75 sm:text-lg">
            {service.tagline[lang]}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-sf-white">
        <div className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <p className="max-w-3xl font-body text-lg leading-relaxed text-sf-gray sm:text-xl">
              {service.description[lang]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Benefits + Applications */}
      <section className="border-t border-sf-soft bg-sf-white">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          <Reveal>
            <SectionLabel>{t.servicesPage.benefits}</SectionLabel>
            <ul className="mt-6 space-y-0 border-t border-sf-soft">
              {service.benefits[lang].map((b, i) => (
                <li
                  key={b}
                  className="flex items-center gap-4 border-b border-sf-soft py-4"
                >
                  <span className="font-display text-sm text-sf-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl font-medium tracking-tight text-sf-black sm:text-2xl">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLabel>{t.servicesPage.applications}</SectionLabel>
            <ul className="mt-6 space-y-0 border-t border-sf-soft">
              {service.applications[lang].map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-4 border-b border-sf-soft py-4"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sf-red" />
                  <span className="font-display text-xl font-medium tracking-tight text-sf-black sm:text-2xl">
                    {a}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-sf-soft bg-sf-black text-sf-white">
        <div className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <SectionLabel light>{t.servicesPage.process}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              {t.servicesPage.process}
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {service.process[lang].map((step, i) => (
              <li key={step} className="border-t border-sf-green/50 pt-4">
                <span className="font-display text-sm text-sf-green">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-body text-sm leading-relaxed text-sf-soft/80">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Project examples */}
      <section className="border-t border-sf-soft bg-sf-white">
        <div className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <SectionLabel>{t.servicesPage.examples}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-sf-black sm:text-4xl">
              {t.servicesPage.examples}
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
            {examples.map((p) => (
              <StaggerItem key={p.id}>
                <Link to={pathFor("/projects")} className="group block overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title[lang]}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-display text-lg font-medium text-sf-black">
                      {p.title[lang]}
                    </h3>
                    <p className="font-body text-[11px] uppercase tracking-[0.14em] text-sf-concrete">
                      {p.system[lang]}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Related + quote */}
      <section className="border-t border-sf-soft bg-sf-white">
        <div className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          {related.length > 0 && (
            <div className="mb-12">
              <SectionLabel>{t.servicesPage.related}</SectionLabel>
              <div className="mt-6 flex flex-wrap gap-3">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    to={pathFor(`/services/${r.slug}`)}
                    className="border border-sf-soft px-4 py-2 font-body text-[12px] uppercase tracking-[0.14em] text-sf-black transition-colors hover:border-sf-green hover:text-sf-green"
                  >
                    {r.name[lang]}
                  </Link>
                ))}
              </div>
            </div>
          )}
          <Button to={pathFor("/contact")} variant="solid-green">
            {t.servicesPage.requestQuote} — {service.shortName[lang]}
          </Button>
        </div>
      </section>

      <CTA />
    </>
  );
}
