import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { translations, type Lang, type Translations } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  dir: "ltr" | "rtl";
  setLang: (lang: Lang) => void;
  pathFor: (path: string, langOverride?: Lang) => string;
  switchLang: (next: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectLangFromPath(pathname: string): Lang {
  if (pathname === "/ar" || pathname.startsWith("/ar/")) return "ar";
  return "en";
}

function stripLangPrefix(pathname: string): string {
  if (pathname === "/en" || pathname === "/ar") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3) || "/";
  return pathname || "/";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [lang, setLangState] = useState<Lang>(() => detectLangFromPath(location.pathname));

  useEffect(() => {
    const detected = detectLangFromPath(location.pathname);
    setLangState(detected);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const pathFor = useCallback(
    (path: string, langOverride?: Lang) => {
      const l = langOverride ?? lang;
      const clean = path.startsWith("/") ? path : `/${path}`;
      if (clean === "/") return `/${l}`;
      return `/${l}${clean}`;
    },
    [lang]
  );

  const switchLang = useCallback(
    (next: Lang) => {
      const base = stripLangPrefix(location.pathname);
      const search = location.search;
      navigate(`${pathFor(base, next)}${search}`);
    },
    [location.pathname, location.search, navigate, pathFor]
  );

  const setLang = useCallback(
    (next: Lang) => {
      switchLang(next);
    },
    [switchLang]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: translations[lang] as Translations,
      dir: lang === "ar" ? "rtl" : "ltr",
      setLang,
      pathFor,
      switchLang,
    }),
    [lang, setLang, pathFor, switchLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
