import { useLanguage } from "../i18n/LanguageContext";
import { Button } from "../components/ui/Button";

export function NotFoundPage() {
  const { pathFor, lang } = useLanguage();

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-sf-black px-4 text-center text-sf-white">
      <span className="font-display text-8xl font-medium text-sf-green">404</span>
      <h1 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
        {lang === "ar" ? "الصفحة غير موجودة" : "PAGE NOT FOUND"}
      </h1>
      <p className="mt-3 font-body text-sf-soft/60">
        {lang === "ar" ? "عُد إلى الصفحة الرئيسية للمتابعة." : "Return home to continue."}
      </p>
      <div className="mt-8">
        <Button to={pathFor("/")} variant="solid">
          {lang === "ar" ? "الرئيسية" : "BACK HOME"}
        </Button>
      </div>
    </section>
  );
}
