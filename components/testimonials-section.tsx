import Image from "next/image";
import { AnimateIn } from "@/components/animate-in";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="border-y border-border/70 bg-card/30">
      <div className="section py-20 md:py-28">
        <AnimateIn className="max-w-xl">
          <p className="text-sm font-medium tracking-wide text-muted-foreground">Depoimentos</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            O que dizem sobre trabalhar comigo
          </h2>
        </AnimateIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <AnimateIn
              key={t.name}
              delay={Math.min(i * 0.05, 0.2)}
              className="flex h-full flex-col rounded-xl border border-border/80 bg-card/50 p-6"
            >
              <p className="line-clamp-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={36}
                  height={36}
                  className="size-9 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.position}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
