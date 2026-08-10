"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CtaLink } from "@/components/cta-button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contato" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="section flex h-16 items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          Matheus Pedro
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <CtaLink href="/media/curriculum/MatheusCaprioliCV.pdf" download="MatheusCV.pdf" className="py-2 text-[13px]">
            Baixar CV
          </CtaLink>
        </nav>

        <button
          className="text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/80 bg-background/95 backdrop-blur-md md:hidden">
          <div className="section flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <CtaLink
              href="/media/curriculum/MatheusCaprioliCV.pdf"
              download="MatheusCV.pdf"
              className="mt-2 justify-center"
            >
              Baixar CV
            </CtaLink>
          </div>
        </nav>
      )}
    </header>
  );
}
