import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageContext";
import { cn } from "../../utils/cn";
import { Arrow } from "../ui/Arrow";

export function Header() {
  const { t, lang, pathFor, switchLang, dir } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { num: t.navNumbers.services, label: t.nav.services, to: pathFor("/services") },
    { num: t.navNumbers.industries, label: t.nav.industries, to: pathFor("/industries") },
    { num: t.navNumbers.projects, label: t.nav.projects, to: pathFor("/projects") },
    { num: t.navNumbers.about, label: t.nav.about, to: pathFor("/about") },
  ];

  const mobileLinks = [
    { label: t.nav.home, to: pathFor("/") },
    ...navItems.map(({ label, to }) => ({ label, to })),
    { label: t.nav.contact, to: pathFor("/contact") },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled || menuOpen
            ? "border-sf-white/10 bg-sf-black/95 backdrop-blur-md"
            : "border-sf-white/10 bg-sf-black"
        )}
      >
        <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:h-16 lg:px-8">
          {/* Brand / Logo */}
          <Link
            to={pathFor("/")}
            className="group flex items-center gap-2.5 font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-sf-white sm:text-sm"
          >
            <img
              src="/logo.png"
              alt={t.brand || "Logo"}
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "group relative flex items-center gap-2 px-3 py-2 font-body text-[11px] uppercase tracking-[0.18em] text-sf-soft/70 transition-colors hover:text-sf-white",
                    isActive && "text-sf-white"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="text-sf-red/80">{item.num}</span>
                    <span>{item.label}</span>
                    <span
                      className={cn(
                        "absolute bottom-0 start-3 end-3 h-px origin-start bg-sf-green transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden items-center gap-1 font-body text-[11px] uppercase tracking-[0.18em] sm:flex">
              <button
                type="button"
                onClick={() => switchLang("ar")}
                className={cn(
                  "px-1.5 py-1 transition-colors",
                  lang === "ar" ? "text-sf-green" : "text-sf-soft/50 hover:text-sf-white"
                )}
                aria-label="العربية"
              >
                AR
              </button>
              <span className="text-sf-soft/30">|</span>
              <button
                type="button"
                onClick={() => switchLang("en")}
                className={cn(
                  "px-1.5 py-1 transition-colors",
                  lang === "en" ? "text-sf-green" : "text-sf-soft/50 hover:text-sf-white"
                )}
                aria-label="English"
              >
                EN
              </button>
            </div>

            <Link
              to={pathFor("/contact")}
              className="group hidden items-center gap-2 border border-sf-white/25 bg-sf-white px-3 py-2 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-sf-black transition-colors hover:border-sf-green hover:bg-sf-green hover:text-sf-white sm:inline-flex"
            >
              {t.nav.quote}
              <Arrow className="group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </Link>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center border border-sf-white/20 text-sf-white lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t.common.closeMenu : t.common.openMenu}
            >
              <span className="sr-only">{menuOpen ? t.common.closeMenu : t.common.openMenu}</span>
              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className={cn(
                    "h-px w-full bg-current transition-transform duration-300",
                    menuOpen && "translate-y-[3.5px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "h-px w-full bg-current transition-opacity duration-300",
                    menuOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "h-px w-full bg-current transition-transform duration-300",
                    menuOpen && "-translate-y-[3.5px] -rotate-45"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-sf-black pt-14 lg:hidden"
          >
            <div className="grid-lines-dark flex h-full flex-col px-6 py-10">
              <nav className="flex flex-1 flex-col gap-1" aria-label="Mobile">
                {mobileLinks.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: dir === "rtl" ? 24 : -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.35 }}
                  >
                    <Link
                      to={item.to}
                      className="flex items-center gap-4 border-b border-sf-white/10 py-4 font-display text-3xl font-medium uppercase tracking-tight text-sf-white transition-colors hover:text-sf-green sm:text-4xl"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="font-body text-sm text-sf-red">{String(i + 1).padStart(2, "0")}</span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-8 flex items-center gap-4 border-t border-sf-white/10 pt-6">
                <button
                  type="button"
                  onClick={() => switchLang("en")}
                  className={cn(
                    "font-body text-sm uppercase tracking-[0.2em]",
                    lang === "en" ? "text-sf-green" : "text-sf-soft/50"
                  )}
                >
                  EN
                </button>
                <span className="text-sf-soft/30">|</span>
                <button
                  type="button"
                  onClick={() => switchLang("ar")}
                  className={cn(
                    "font-body text-sm uppercase tracking-[0.2em]",
                    lang === "ar" ? "text-sf-green" : "text-sf-soft/50"
                  )}
                >
                  العربية
                </button>
              </div>

              <Link
                to={pathFor("/contact")}
                onClick={() => setMenuOpen(false)}
                className="mt-6 flex w-full items-center justify-center gap-3 bg-sf-green py-4 font-body text-sm font-semibold uppercase tracking-[0.16em] text-sf-white"
              >
                {t.nav.requestQuote}
                <Arrow />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}