import { AnimateIn } from "@/components/animate-in";
import { skillGroups, type Skill } from "@/lib/data/skills";

const ICON_CLASS = "text-[var(--tech-color)] transition-colors duration-200 group-hover:text-brand";

function SkillIcon({ icon }: { icon: Skill["icon"] }) {
  if (typeof icon !== "string") {
    const Icon = icon;
    return <Icon className={`size-4 ${ICON_CLASS}`} strokeWidth={1.75} aria-hidden />;
  }

  if (icon.startsWith("/")) {
    // SVG de marca monocromático, pintado com a cor da tecnologia via mask.
    return (
      <span
        style={{ maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})` }}
        className="size-4 bg-[var(--tech-color)] transition-colors duration-200 [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] group-hover:bg-brand"
        aria-hidden
      />
    );
  }

  return <i className={`${icon} text-base leading-none ${ICON_CLASS}`} aria-hidden />;
}

export function SkillsSection() {
  return (
    <section id="skills" className="section py-20 md:py-28">
      <AnimateIn className="max-w-xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
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
                  <SkillIcon icon={skill.icon} />
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
