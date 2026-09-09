import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export function usePageMeta(title: string, description: string) {
  const { lang, pathFor } = useLanguage();

  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        if (selector.includes("property=")) {
          el.setAttribute("property", selector.match(/property="([^"]+)"/)?.[1] || "");
        } else {
          el.setAttribute("name", selector.match(/name="([^"]+)"/)?.[1] || "");
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:locale"]', "content", lang === "ar" ? "ar_SY" : "en_US");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const path = window.location.pathname;
    canonical.href = `https://syrianflooring.com${path}`;

    // hreflang alternates
    document.querySelectorAll('link[data-hreflang]').forEach((n) => n.remove());
    const base = path.replace(/^\/(en|ar)/, "") || "/";
    (["en", "ar"] as const).forEach((l) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = l;
      link.href = `https://syrianflooring.com${pathFor(base === "/" ? "/" : base, l)}`;
      link.setAttribute("data-hreflang", l);
      document.head.appendChild(link);
    });
  }, [title, description, lang, pathFor]);
}
