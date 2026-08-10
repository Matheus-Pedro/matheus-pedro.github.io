"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { CtaButton, CtaLink } from "@/components/cta-button";

const ROLES = ["Back End Developer", "Software Engineer", "Full Stack Developer", "DevOps Engineer"];

function RoleCycle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.2em] min-w-[280px] items-center overflow-hidden align-bottom md:min-w-[360px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-brand"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-10%] -z-10 h-[480px] bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--brand)_14%,transparent),transparent)]"
      />

      <div className="section">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="max-w-3xl text-balance text-5xl font-semibold tracking-tight md:text-7xl"
        >
          Matheus Pedro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-3 text-2xl font-medium text-muted-foreground md:text-4xl"
        >
          <RoleCycle />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="mt-8 max-w-xl text-balance text-lg text-muted-foreground"
        >
          Sou um desenvolvedor com experiência em criar soluções digitais para empresas e
          startups desde 2022.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <CtaLink href="/media/curriculum/MatheusCaprioliCV.pdf" download="MatheusCV.pdf" className="py-3 pl-5 pr-4">
            Baixar CV
            <Download className="size-4 transition-transform duration-200 group-hover/cta:translate-y-0.5" />
          </CtaLink>
          <CtaButton variant="ghost" onClick={scrollToContact} className="py-3 pl-5 pr-4">
            Entrar em contato
            <ArrowRight className="size-4 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
