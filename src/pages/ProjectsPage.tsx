import { useLanguage } from "../i18n/LanguageContext";
import { usePageMeta } from "../hooks/usePageMeta";
import { projects } from "../data/projects";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";
import { CTA } from "../components/home/CTA";
import { cn } from "../utils/cn";

const layoutPattern = [
  "md:col-span-8 aspect-[16/10]",
  "md:col-span-4 aspect-[4/5]",
  "md:col-span-5 aspect-[4/3]",
  "md:col-span-7 aspect-[16/10]",
  "md:col-span-6 aspect-[16/11]",
  "md:col-span-6 aspect-[16/11]",
  "md:col-span-4 aspect-[3/4]",
  "md:col-span-8 aspect-[21/10]",
  "md:col-span-7 aspect-[16/10]",
  "md:col-span-5 aspect-[4/3]",
];

export function ProjectsPage() {
  const { t, lang } = useLanguage();
  usePageMeta(t.seo.projectsTitle, t.seo.projectsDesc);

  return (
    <>
      <section className="border-b border-sf-soft bg-sf-black text-sf-white">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel light>{t.projectsPage.label}</SectionLabel>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.03em]">
              <span className="block">{t.projectsPage.title1}</span>
              <span className="block text-sf-green">{t.projectsPage.title2}</span>
            </h1>
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-sf-soft/70 sm:text-lg">
              {t.projectsPage.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sf-white">
        <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Stagger className="grid gap-4 md:grid-cols-12 md:gap-5">
            {projects.map((project, i) => (
              <StaggerItem
                key={project.id}
                className={cn(
                  "group relative overflow-hidden",
                  layoutPattern[i % layoutPattern.length]
                )}
              >
                <article className="relative h-full w-full">
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sf-black/85 via-sf-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-sf-red" />
                        <span className="font-body text-[10px] uppercase tracking-[0.18em] text-sf-soft/80">
                          {project.sector[lang]}
                        </span>
                      </span>
                      <span className="font-body text-[10px] uppercase tracking-[0.14em] text-sf-soft/50">
                        {project.location[lang]}
                      </span>
                    </div>
                    <h2 className="font-display text-xl font-medium tracking-tight text-sf-white sm:text-2xl md:text-3xl">
                      {project.title[lang]}
                    </h2>
                    <p className="mt-1 font-body text-[11px] uppercase tracking-[0.16em] text-sf-green">
                      {project.system[lang]}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTA />
    </>
  );
}
