import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { serviceCategories } from "../../data/services";
import { industries } from "../../data/industries";

export function Footer() {
  const { t, lang, pathFor, switchLang } = useLanguage();

  const company = [
    { label: t.footer.home, to: pathFor("/") },
    { label: t.footer.about, to: pathFor("/about") },
    { label: t.footer.projects, to: pathFor("/projects") },
    { label: t.footer.contact, to: pathFor("/contact") },
  ];

  const serviceLinks = serviceCategories.map((s) => ({
    label: s.name[lang],
    to: pathFor(`/services/${s.id}`),
  }));

  const industryLinks = industries.slice(0, 6).map((i) => ({
    label: i.name[lang],
    to: pathFor("/industries"),
  }));

  return (
    <footer className="bg-sf-black text-sf-white">
      <div className="mx-auto max-w-[1600px] px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        {/* Top brand statement */}
        <div className="mb-16 border-b border-sf-white/10 pb-16 lg:mb-20 lg:pb-20">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="font-body text-[11px] uppercase tracking-[0.22em] text-sf-soft/50">
              {t.brand}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-sf-green" aria-hidden />
          </div>
          <h2 className="max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-sf-white sm:text-5xl md:text-6xl lg:text-7xl">
            {lang === "ar" ? (
              <span className="block">{t.tagline}</span>
            ) : (
              <>
                <span className="block">BUILT FROM</span>
                <span className="block text-sf-green">THE GROUND UP.</span>
              </>
            )}
          </h2>
        </div>

        {/* Four columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <FooterCol title={t.footer.company} links={company} />
          <FooterCol title={t.footer.services} links={serviceLinks} />
          <FooterCol title={t.footer.industries} links={industryLinks} />
          <div>
            <h3 className="mb-5 font-body text-[11px] font-medium uppercase tracking-[0.22em] text-sf-soft/50">
              {t.footer.language}
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  type="button"
                  onClick={() => switchLang("en")}
                  className="font-body text-sm text-sf-soft/80 transition-colors hover:text-sf-green"
                >
                  EN
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => switchLang("ar")}
                  className="font-body text-sm text-sf-soft/80 transition-colors hover:text-sf-green"
                >
                  العربية
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-16 grid gap-4 border-t border-sf-white/10 py-8 font-body text-sm text-sf-soft/60 sm:grid-cols-3">
          <a href={`tel:${t.footer.phone.replace(/\s/g, "")}`} className="hover:text-sf-green">
            {t.footer.phone}
          </a>
          <a href={`mailto:${t.footer.email}`} className="hover:text-sf-green">
            {t.footer.email}
          </a>
          <span>{t.footer.address}</span>
        </div>

        {/* Legal */}
        <div className="border-t border-sf-green/40 py-6">
          <p className="font-body text-[11px] uppercase tracking-[0.16em] text-sf-soft/40">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) {
  return (
    <div>
      <h3 className="mb-5 font-body text-[11px] font-medium uppercase tracking-[0.22em] text-sf-soft/50">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.to + link.label}>
            <Link
              to={link.to}
              className="font-body text-sm text-sf-soft/80 transition-colors hover:text-sf-green"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
