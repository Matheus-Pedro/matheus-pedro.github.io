import { AnimateIn } from "@/components/animate-in";
import { skillGroups } from "@/lib/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="section py-20 md:py-28">
      <AnimateIn className="max-w-xl">
        <p className="text-sm font-medium tracking-wide text-muted-foreground">Habilidades</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Tecnologias com que trabalho
        </h2>
      </AnimateIn>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <AnimateIn key={group.label} delay={Math.min(i * 0.05, 0.2)}>
            <h3 className="text-sm font-medium text-muted-foreground">{group.label}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  style={{ "--tech-color": skill.color } as React.CSSProperties}
                  className="group flex items-center gap-2 rounded-lg border border-border/80 bg-card/40 py-1.5 pl-2 pr-3 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-card/70"
                >
                  <i
                    className={`${skill.icon} text-base leading-none text-[var(--tech-color)] transition-colors duration-200 group-hover:text-brand`}
                    aria-hidden
                  />
                  <span className="text-foreground/90">{skill.name}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
