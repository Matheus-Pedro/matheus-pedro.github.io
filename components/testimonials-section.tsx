"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { cn } from "@/lib/utils";
import { testimonials, type Testimonial } from "@/lib/data/testimonials";

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

function Monogram({ person, active = false }: { person: Testimonial; active?: boolean }) {
  if (person.avatar) {
    return (
      <Image
        src={person.avatar}
        alt=""
        width={40}
        height={40}
        className="size-10 shrink-0 rounded-full object-cover"
      />
    );
  }

  return (
    <span
      aria-hidden
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold tracking-wide transition-colors duration-200",
        active ? "bg-brand text-brand-foreground" : "bg-brand/12 text-brand",
      )}
    >
      {initials(person.name)}
    </span>
  );
}

function Attribution({ person }: { person: Testimonial }) {
  return (
    <figcaption className="flex items-center gap-3">
      <Monogram person={person} active />
      <div>
        <p className="text-sm font-medium text-foreground">{person.name}</p>
        <p className="text-xs text-muted-foreground">{person.position}</p>
      </div>
    </figcaption>
  );
}

function FeaturedQuote({ person }: { person: Testimonial }) {
  return (
    <figure>
      <blockquote className="max-w-[60ch] text-pretty text-xl leading-relaxed text-foreground/90 lg:text-2xl lg:leading-relaxed">
        {person.text}
      </blockquote>
      <div className="mt-8">
        <Attribution person={person} />
      </div>
    </figure>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const reduceMotion = useReducedMotion();
  const current = testimonials[active];

  function onTabKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = testimonials.length - 1;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? (index === last ? 0 : index + 1)
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? (index === 0 ? last : index - 1)
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  }

  return (
    <section className="border-y border-border/70 bg-card/30">
      <div className="section py-20 md:py-28">
        <AnimateIn className="max-w-xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            O que dizem sobre trabalhar comigo
          </h2>
          <p className="mt-4 text-muted-foreground">
            Colegas de time e parceiros de projeto, com as palavras deles.
          </p>
        </AnimateIn>

        {/* Desktop: lista de pessoas + depoimento em destaque */}
        <AnimateIn
          delay={0.05}
          className="mt-14 hidden gap-12 md:grid md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-20"
        >
          <div role="tablist" aria-label="Depoimentos" aria-orientation="vertical" className="flex flex-col gap-1">
            {testimonials.map((person, i) => {
              const selected = i === active;
              return (
                <button
                  key={person.name}
                  ref={(el) => {
                    tabsRef.current[i] = el;
                  }}
                  role="tab"
                  id={`${baseId}-tab-${i}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onTabKeyDown(e, i)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    selected ? "bg-card/80" : "hover:bg-card/50",
                  )}
                >
                  <Monogram person={person} active={selected} />
                  <span className="min-w-0">
                    <span
                      className={cn(
                        "block truncate text-sm font-medium transition-colors duration-200",
                        selected ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {person.name}
                    </span>
                    <span className="mt-0.5 block text-xs leading-snug text-muted-foreground/80">
                      {person.position}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`${baseId}-panel`}
            aria-labelledby={`${baseId}-tab-${active}`}
          >
            <Quote aria-hidden className="size-9 text-brand" strokeWidth={1.5} />
            {/* Todas as figuras ocupam a mesma célula: as invisíveis reservam a altura do
                maior depoimento, então a página não pula ao trocar de pessoa. */}
            <div className="mt-6 grid">
              {testimonials.map((person) => (
                <div key={person.name} aria-hidden className="invisible [grid-area:1/1]">
                  <FeaturedQuote person={person} />
                </div>
              ))}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.name}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="[grid-area:1/1]"
                >
                  <FeaturedQuote person={current} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimateIn>

        {/* Mobile: todos os depoimentos, inteiros, em sequência */}
        <div className="mt-12 flex flex-col md:hidden">
          {testimonials.map((person, i) => (
            <AnimateIn
              key={person.name}
              delay={Math.min(i * 0.05, 0.15)}
              className={cn("py-8", i > 0 && "border-t border-border/70")}
            >
              <figure>
                <Quote aria-hidden className="size-6 text-brand" strokeWidth={1.5} />
                <blockquote className="mt-4 text-pretty text-base leading-relaxed text-foreground/90">
                  {person.text}
                </blockquote>
                <div className="mt-6">
                  <Attribution person={person} />
                </div>
              </figure>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
