import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { projects } from "../../data/projects";
import { SectionLabel } from "../ui/SectionLabel";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { cn } from "../../utils/cn";

const sizeClasses: Record<string, string> = {
  large: "md:col-span-7 aspect-[16/11]",
  small: "md:col-span-5 aspect-[4/3]",
  wide: "md:col-span-8 aspect-[21/9]",
  tall: "md:col-span-4 aspect-[3/4]",
};

export function ProjectsEditorial() {
  const { t, lang, pathFor } = useLanguage();
  const featured = projects.filter((p) => p.featured).slice(0, 5);

  return (
    <section className="border-t border-sf-soft bg-sf-white">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionLabel>{t.projects.label}</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.92] tracking-[-0.03em] text-sf-black">
              <span className="block">{t.projects.title1}</span>
              <span className="block text-sf-green">{t.projects.title2}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button to={pathFor("/projects")} variant="outline" className="self-start sm:self-auto">
              {t.projects.viewAll}
            </Button>
          </Reveal>
        </div>

        <Stagger className="grid gap-4 md:grid-cols-12 md:gap-5">
          {featured.map((project) => (
            <StaggerItem
              key={project.id}
              className={cn("group relative overflow-hidden", sizeClasses[project.size] || sizeClasses.large)}
            >
              <Link to={pathFor("/projects")} className="block h-full w-full">
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sf-black/80 via-sf-black/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sf-red" />
                    <span className="font-body text-[10px] uppercase tracking-[0.18em] text-sf-soft/80">
                      {project.sector[lang]}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-medium tracking-tight text-sf-white sm:text-2xl md:text-3xl">
                    {project.title[lang]}
                  </h3>
                  <p className="mt-1 font-body text-[11px] uppercase tracking-[0.16em] text-sf-soft/70">
                    {project.system[lang]}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
