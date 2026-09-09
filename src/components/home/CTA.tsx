import { useLanguage } from "../../i18n/LanguageContext";
import { images } from "../../data/images";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function CTA() {
  const { t, lang, pathFor } = useLanguage();
  const projectLabel = lang === "ar" ? "مشروع تجاري" : "COMMERCIAL PROJECT";

  return (
    <section className="relative overflow-hidden bg-sf-black">
      <div className="absolute inset-0 opacity-30">
        <img
          src={images.cta}
          alt=""
          className="h-full w-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-sf-black/70" />
      </div>
      <div className="grid-lines-dark pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-[1600px] flex-col justify-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex gap-6 lg:gap-10">
          <div className="hidden w-px shrink-0 bg-sf-green sm:block" aria-hidden />
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(2.75rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.03em] text-sf-white">
                <span className="block">{t.cta.title1}</span>
                <span className="block text-sf-green">{t.cta.title2}</span>
              </h2>
              <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-sf-soft/70 sm:text-lg">
                {t.cta.body}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button to={pathFor("/contact")} variant="solid" className="w-full sm:w-auto">
                {t.cta.primary}
              </Button>
              <Button
                href={`mailto:${t.footer.email}`}
                variant="outline-light"
                className="w-full sm:w-auto"
                showArrow={false}
              >
                {t.cta.secondary}
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-8 end-8 hidden items-center gap-2 border border-sf-white/20 bg-sf-black/50 px-3 py-1.5 backdrop-blur-sm lg:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-sf-red" />
          <span className="font-body text-[10px] uppercase tracking-[0.18em] text-sf-white">
            {projectLabel}
          </span>
        </div>
      </div>
    </section>
  );
}
