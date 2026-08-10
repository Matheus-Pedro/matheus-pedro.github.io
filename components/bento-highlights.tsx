import type { ReactNode } from "react";
import { Code2, Gauge, Server } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { GithubIcon } from "@/components/brand-icons";
import { projects } from "@/lib/data/projects";
import { skillGroups } from "@/lib/data/skills";

const techCount = skillGroups.reduce((sum, group) => sum + group.items.length, 0);

const FOCUS_AREAS = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "Soluções robustas e escaláveis para problemas complexos.",
  },
  {
    icon: Server,
    title: "Infraestrutura",
    description: "Automação de ambientes de alta disponibilidade.",
  },
  {
    icon: Gauge,
    title: "Otimização",
    description: "Melhoria de desempenho de aplicações existentes.",
  },
];

function Cell({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`rounded-2xl border border-border/80 bg-card/40 p-6 transition-colors duration-200 hover:border-border ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function BentoHighlights() {
  return (
    <section className="border-y border-border/70 bg-card/20">
      <div className="section py-16 md:py-20">
        <div className="grid grid-cols-2 gap-3 md:auto-rows-[150px] md:grid-flow-dense md:grid-cols-4">
          <AnimateIn className="col-span-2 md:row-span-2">
            <Cell className="relative flex h-full flex-col justify-end overflow-hidden bg-gradient-to-br from-brand/15 via-card/40 to-card/40">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-10 size-40 rounded-full bg-brand/20 blur-3xl"
              />
              <p className="text-5xl font-semibold tracking-tight md:text-6xl">
                {projects.length}
                <span className="text-brand">+</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                projetos entregues, de SaaS em produção a experimentos com IA
              </p>
              <p className="mt-6 text-3xl font-semibold tracking-tight">
                {techCount}
                <span className="text-brand">+</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                tecnologias diferentes no dia a dia
              </p>
            </Cell>
          </AnimateIn>

          {FOCUS_AREAS.map((area, i) => (
            <AnimateIn key={area.title} delay={0.05 + i * 0.05}>
              <Cell className="flex h-full flex-col justify-center">
                <area.icon className="size-5 text-brand" strokeWidth={1.5} />
                <h3 className="mt-3 text-sm font-medium">{area.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </Cell>
            </AnimateIn>
          ))}

          <AnimateIn delay={0.2} className="col-span-2 md:col-span-1">
            <a href="https://github.com/Matheus-Pedro" target="_blank" rel="noreferrer" className="block h-full">
              <Cell className="group flex h-full flex-col items-start justify-center hover:border-brand/40">
                <GithubIcon className="size-5 text-muted-foreground transition-colors duration-200 group-hover:text-brand" />
                <p className="mt-3 text-sm font-medium">Ver código no GitHub</p>
                <p className="mt-1 text-xs text-muted-foreground">github.com/Matheus-Pedro</p>
              </Cell>
            </a>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
