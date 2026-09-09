import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export function SectionLabel({
  children,
  className,
  light = false,
}: {
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sf-red" aria-hidden />
      <span
        className={cn(
          "font-body text-[11px] font-medium uppercase tracking-[0.22em]",
          light ? "text-sf-soft/70" : "text-sf-concrete"
        )}
      >
        {children}
      </span>
    </div>
  );
}
