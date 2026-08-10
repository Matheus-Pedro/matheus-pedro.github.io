"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/lib/data/projects";

const VISIBLE_TAGS = 4;

function TechTag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand/90">
      {children}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const extraCount = project.technologies.length - VISIBLE_TAGS;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex h-full flex-col rounded-xl border border-border/80 bg-card/40 p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:bg-card/70"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-secondary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        <div className="mt-5 flex items-center justify-between gap-2">
          <h3 className="text-base font-medium">{project.title}</h3>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, VISIBLE_TAGS).map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
          {extraCount > 0 && <TechTag>+{extraCount}</TechTag>}
        </div>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription className="pt-2 text-left leading-relaxed">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
            >
              Ver projeto
              <ArrowUpRight className="size-3.5" />
            </a>
          ) : (
            <p className="text-sm text-muted-foreground">Projeto pessoal, sem link público por enquanto.</p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
