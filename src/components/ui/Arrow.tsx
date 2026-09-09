import { cn } from "../../utils/cn";
import { useLanguage } from "../../i18n/LanguageContext";

export function Arrow({ className }: { className?: string }) {
  const { dir } = useLanguage();
  return (
    <span className={cn("inline-block transition-transform duration-300", className)} aria-hidden>
      {dir === "rtl" ? "←" : "→"}
    </span>
  );
}
