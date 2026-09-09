import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { Arrow } from "./Arrow";

type Variant = "solid" | "outline" | "ghost" | "outline-light" | "solid-green";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  showArrow?: boolean;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  solid:
    "bg-sf-white text-sf-black border border-sf-white hover:bg-sf-green hover:border-sf-green hover:text-sf-white",
  "solid-green":
    "bg-sf-green text-sf-white border border-sf-green hover:bg-sf-deep hover:border-sf-deep",
  outline:
    "bg-transparent text-sf-black border border-sf-black/30 hover:border-sf-green hover:text-sf-green",
  "outline-light":
    "bg-transparent text-sf-white border border-sf-white/40 hover:border-sf-green hover:text-sf-green",
  ghost: "bg-transparent text-sf-black border border-transparent hover:text-sf-green",
};

export function Button({
  children,
  to,
  href,
  onClick,
  variant = "solid",
  className,
  type = "button",
  showArrow = true,
  fullWidth,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-3 px-6 py-3.5 font-body text-[12px] font-semibold uppercase tracking-[0.16em] transition-all duration-300",
    variants[variant],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <Arrow className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
