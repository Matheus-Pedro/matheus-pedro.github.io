import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "group/cta relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary: cn(
    base,
    "bg-brand text-brand-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_8px_24px_-12px_var(--brand)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_10px_28px_-10px_var(--brand)] hover:-translate-y-px active:translate-y-0",
  ),
  ghost: cn(
    base,
    "text-foreground/80 hover:text-foreground before:absolute before:inset-0 before:-z-10 before:rounded-full before:border before:border-border/80 before:transition-colors before:duration-200 hover:before:border-foreground/30",
  ),
};

type Variant = keyof typeof variants;

export function CtaLink({
  variant = "primary",
  className,
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(variants[variant], className)} {...props}>
      {children}
    </a>
  );
}

export function CtaButton({
  variant = "primary",
  className,
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
