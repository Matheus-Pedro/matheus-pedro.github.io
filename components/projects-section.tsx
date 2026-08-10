import { AnimateIn } from "@/components/animate-in";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="section py-20 md:py-28">
      <AnimateIn className="max-w-xl">
        <p className="text-sm font-medium tracking-wide text-muted-foreground">Projetos</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Alguns projetos que desenvolvi
        </h2>
        <p className="mt-4 text-muted-foreground">
          Uma seleção do que venho construindo — de SaaS em produção a experimentos pessoais
          com IA.
        </p>
      </AnimateIn>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <AnimateIn key={project.title} delay={Math.min(i * 0.05, 0.3)}>
            <ProjectCard project={project} />
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
