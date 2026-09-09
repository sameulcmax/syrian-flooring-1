import { usePageMeta } from "../hooks/usePageMeta";
import { useLanguage } from "../i18n/LanguageContext";
import { Hero } from "../components/home/Hero";
import { Intro } from "../components/home/Intro";
import { MaterialIndex } from "../components/home/MaterialIndex";
import { Commercial } from "../components/home/Commercial";
import { IndustryWall } from "../components/home/IndustryWall";
import { ProjectsEditorial } from "../components/home/ProjectsEditorial";
import { Process } from "../components/home/Process";
import { WhyUs } from "../components/home/WhyUs";
import { AboutSplit } from "../components/home/AboutSplit";
import { CTA } from "../components/home/CTA";

export function HomePage() {
  const { t } = useLanguage();
  usePageMeta(t.seo.homeTitle, t.seo.homeDesc);

  return (
    <>
      <Hero />
      <Intro />
      <MaterialIndex />
      <Commercial />
      <IndustryWall />
      <ProjectsEditorial />
      <Process />
      <WhyUs />
      <AboutSplit />
      <CTA />
    </>
  );
}
