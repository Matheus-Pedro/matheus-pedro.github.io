import { Mail } from "lucide-react";
import { AnimateIn } from "@/components/animate-in";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/brand-icons";

const LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/matheus.sql/", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/Matheus-Caprioli", icon: LinkedinIcon },
  { label: "GitHub", href: "https://github.com/Matheus-Pedro", icon: GithubIcon },
  { label: "Email", href: "mailto:matheus.caprioli.pedro@gmail.com", icon: Mail },
];

export function ContactSection() {
  return (
    <section id="contact" className="section py-24 md:py-32">
      <AnimateIn className="mx-auto max-w-xl text-center">
        <p className="text-sm font-medium tracking-wide text-muted-foreground">Contato</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Vamos conversar?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Entre em contato comigo para discutir oportunidades de colaboração, esclarecer
          dúvidas ou apenas para bater um papo.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="flex size-12 items-center justify-center rounded-full border border-border/80 bg-card/40 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand"
            >
              <link.icon className="size-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}
