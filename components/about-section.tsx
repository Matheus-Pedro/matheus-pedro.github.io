import { AnimateIn } from "@/components/animate-in";

export function AboutSection() {
  return (
    <section id="about" className="section py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
        <AnimateIn>
          <p className="text-sm font-medium tracking-wide text-muted-foreground">Sobre</p>
        </AnimateIn>

        <AnimateIn delay={0.05} className="space-y-5 text-balance text-lg leading-relaxed text-muted-foreground">
          <p>
            Olá! Sou <strong className="font-medium text-foreground">Matheus Pedro Caprioli</strong>,
            desenvolvedor Full Stack de Curitiba, PR. Com mais de 4 anos de experiência, atuei no{" "}
            <strong className="font-medium text-foreground">Banco Nacional de Empregos (BNE)</strong>,
            onde explorei meu conhecimento em várias tecnologias e frameworks para oferecer
            soluções robustas e inovadoras. Atualmente estou como freelancer, disponível para
            novas oportunidades. Minha jornada envolve o desenvolvimento de APIs, front-end,
            back-end e banco de dados, sempre com foco na eficiência e escalabilidade.
          </p>
          <p>
            Tenho proficiência em diversas linguagens e ferramentas, incluindo{" "}
            <strong className="font-medium text-foreground">C#, .NET, Python, React, Docker</strong> e{" "}
            <strong className="font-medium text-foreground">SQL</strong>. Estou sempre aberto a
            aprender e aplicar novos conhecimentos, como o{" "}
            <strong className="font-medium text-foreground">ASP.NET Core</strong> e técnicas de
            DevOps com <strong className="font-medium text-foreground">Nginx</strong> e{" "}
            <strong className="font-medium text-foreground">Docker</strong>. Amo programação,
            lógica formal, resolução de problemas, e a busca de melhorias contínuas, visando não
            só atender às expectativas, mas superá-las com soluções bem projetadas, eficientes,
            eficazes, escaláveis e funcionais.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
