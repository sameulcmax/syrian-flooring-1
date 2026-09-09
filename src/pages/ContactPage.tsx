import { useState, type FormEvent, type ReactNode } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { usePageMeta } from "../hooks/usePageMeta";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Reveal } from "../components/ui/Reveal";
import { Arrow } from "../components/ui/Arrow";
import { cn } from "../utils/cn";

export function ContactPage() {
  const { t } = useLanguage();
  usePageMeta(t.seo.contactTitle, t.seo.contactDesc);
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState("commercial");
  const [flooringType, setFlooringType] = useState("epoxy");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const projectTypes = [
    { id: "commercial", label: t.contact.types.commercial },
    { id: "industrial", label: t.contact.types.industrial },
    { id: "residential", label: t.contact.types.residential },
  ];

  const flooringTypes = [
    { id: "epoxy", label: t.contact.flooring.epoxy },
    { id: "terrazzo", label: t.contact.flooring.terrazzo },
    { id: "concrete", label: t.contact.flooring.concrete },
    { id: "vinyl", label: t.contact.flooring.vinyl },
    { id: "tile", label: t.contact.flooring.tile },
    { id: "stone", label: t.contact.flooring.stone },
    { id: "carpet", label: t.contact.flooring.carpet },
    { id: "other", label: t.contact.flooring.other },
  ];

  return (
    <>
      <section className="border-b border-sf-soft bg-sf-black text-sf-white">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel light>{t.contact.label}</SectionLabel>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.03em]">
              <span className="block">{t.contact.title1}</span>
              <span className="block">{t.contact.title2}</span>
              <span className="block text-sf-green">{t.contact.title3}</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-sf-white">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-20">
          {/* Sidebar info */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="border-s-2 border-sf-green ps-5">
                <p className="font-body text-sm leading-relaxed text-sf-gray">
                  {t.cta.body}
                </p>
              </div>
              <div className="mt-10 space-y-6">
                <div>
                  <p className="sf-label">{t.footer.phone}</p>
                  <a
                    href={`tel:${t.footer.phone.replace(/\s/g, "")}`}
                    className="font-display text-lg text-sf-black hover:text-sf-green"
                  >
                    {t.footer.phone}
                  </a>
                </div>
                <div>
                  <p className="sf-label">EMAIL</p>
                  <a
                    href={`mailto:${t.footer.email}`}
                    className="font-display text-lg text-sf-black hover:text-sf-green"
                  >
                    {t.footer.email}
                  </a>
                </div>
                <div>
                  <p className="sf-label">{t.contact.location}</p>
                  <p className="font-display text-lg text-sf-black">{t.footer.address}</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <Reveal>
                <div className="border border-sf-green bg-sf-green/5 p-8 sm:p-12">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sf-green" />
                    <span className="font-body text-[11px] uppercase tracking-[0.2em] text-sf-green">
                      OK
                    </span>
                  </div>
                  <p className="font-display text-2xl font-medium tracking-tight text-sf-black sm:text-3xl">
                    {t.contact.success}
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <form onSubmit={onSubmit} className="space-y-10" noValidate>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <Field label={t.contact.name}>
                      <input
                        required
                        name="name"
                        type="text"
                        className="sf-input"
                        placeholder={t.contact.placeholders.name}
                        autoComplete="name"
                      />
                    </Field>
                    <Field label={t.contact.email}>
                      <input
                        required
                        name="email"
                        type="email"
                        className="sf-input"
                        placeholder={t.contact.placeholders.email}
                        autoComplete="email"
                      />
                    </Field>
                  </div>

                  <Field label={t.contact.phone}>
                    <input
                      name="phone"
                      type="tel"
                      className="sf-input"
                      placeholder={t.contact.placeholders.phone}
                      autoComplete="tel"
                    />
                  </Field>

                  <fieldset>
                    <legend className="sf-label">{t.contact.projectType}</legend>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {projectTypes.map((pt) => (
                        <button
                          key={pt.id}
                          type="button"
                          onClick={() => setProjectType(pt.id)}
                          className={cn(
                            "border px-4 py-2.5 font-body text-[12px] uppercase tracking-[0.14em] transition-colors",
                            projectType === pt.id
                              ? "border-sf-green bg-sf-green text-sf-white"
                              : "border-sf-soft text-sf-black hover:border-sf-green"
                          )}
                        >
                          {pt.label}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="projectType" value={projectType} />
                  </fieldset>

                  <fieldset>
                    <legend className="sf-label">{t.contact.flooringType}</legend>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {flooringTypes.map((ft) => (
                        <button
                          key={ft.id}
                          type="button"
                          onClick={() => setFlooringType(ft.id)}
                          className={cn(
                            "border px-4 py-2.5 font-body text-[12px] uppercase tracking-[0.14em] transition-colors",
                            flooringType === ft.id
                              ? "border-sf-green bg-sf-green text-sf-white"
                              : "border-sf-soft text-sf-black hover:border-sf-green"
                          )}
                        >
                          {ft.label}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="flooringType" value={flooringType} />
                  </fieldset>

                  <div className="grid gap-8 sm:grid-cols-2">
                    <Field label={t.contact.location}>
                      <input
                        name="location"
                        type="text"
                        className="sf-input"
                        placeholder={t.contact.placeholders.location}
                      />
                    </Field>
                    <Field label={t.contact.size}>
                      <input
                        name="size"
                        type="text"
                        className="sf-input"
                        placeholder={t.contact.placeholders.size}
                      />
                    </Field>
                  </div>

                  <Field label={t.contact.message}>
                    <textarea
                      name="message"
                      rows={4}
                      className="sf-input resize-y"
                      placeholder={t.contact.placeholders.message}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 bg-sf-green px-8 py-4 font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-sf-white transition-colors hover:bg-sf-deep sm:w-auto"
                  >
                    {t.contact.submit}
                    <Arrow className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </button>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="sf-label">{label}</span>
      {children}
    </label>
  );
}
