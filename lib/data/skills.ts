import {
  AudioLines,
  Blocks,
  Boxes,
  CalendarClock,
  DatabaseZap,
  Layers,
  Puzzle,
  Split,
  type LucideIcon,
} from "lucide-react";

export interface Skill {
  name: string;
  /** Ícone: classe do devicon, SVG de marca em /public (Simple Icons) ou ícone do Lucide. */
  icon: string | LucideIcon;
  /** Cor oficial da marca da tecnologia (usada no estado padrão do ícone). */
  color: string;
}

export interface SkillGroup {
  label: string;
  items: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Linguagens",
    items: [
      { name: "C#", icon: "devicon-csharp-plain", color: "#239120" },
      { name: "Java", icon: "devicon-java-plain", color: "#ED8B00" },
      { name: "Python", icon: "devicon-python-plain", color: "#3776AB" },
      { name: "TypeScript", icon: "devicon-typescript-plain", color: "#3178C6" },
      { name: "JavaScript", icon: "devicon-javascript-plain", color: "#F7DF1E" },
      { name: "PHP", icon: "devicon-php-plain", color: "#777BB4" },
      { name: "C", icon: "devicon-c-plain", color: "#A8B9CC" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: ".NET / ASP.NET Core", icon: "devicon-dotnetcore-plain", color: "#8A2BE2" },
      { name: "Entity Framework", icon: "devicon-entityframeworkcore-plain", color: "#8A2BE2" },
      { name: "Spring Boot", icon: "devicon-spring-plain", color: "#6DB33F" },
      { name: "Node.js", icon: "devicon-nodejs-plain", color: "#5FA04E" },
      { name: "Express", icon: "devicon-express-original", color: "#EDEDED" },
      { name: "Flask", icon: "devicon-flask-original", color: "#EDEDED" },
      { name: "FastAPI", icon: "devicon-fastapi-plain", color: "#009688" },
      { name: "Django", icon: "devicon-django-plain", color: "#44B78B" },
    ],
  },
  {
    label: "Arquitetura & Segurança",
    items: [
      { name: "Clean Architecture", icon: Layers, color: "#EAB308" },
      { name: "DDD", icon: Boxes, color: "#EAB308" },
      { name: "CQRS / MediatR", icon: Split, color: "#EAB308" },
      { name: "SOLID", icon: Blocks, color: "#EAB308" },
      { name: "Design Patterns", icon: Puzzle, color: "#EAB308" },
      { name: "OpenAPI", icon: "devicon-openapi-plain", color: "#6BA539" },
      { name: "JWT", icon: "/media/icons/jsonwebtokens.svg", color: "#D63AFF" },
      { name: "OWASP Top 10", icon: "/media/icons/owasp.svg", color: "#EDEDED" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "devicon-react-original", color: "#61DAFB" },
      { name: "Next.js", icon: "devicon-nextjs-plain", color: "#EDEDED" },
      { name: "Vite", icon: "devicon-vitejs-plain", color: "#646CFF" },
      { name: "Tailwind", icon: "devicon-tailwindcss-original", color: "#06B6D4" },
      { name: "React Native", icon: "devicon-react-original", color: "#61DAFB" },
      { name: "HTML", icon: "devicon-html5-plain", color: "#E34F26" },
      { name: "CSS", icon: "devicon-css3-plain", color: "#1572B6" },
    ],
  },
  {
    label: "Dados & Mensageria",
    items: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "#4169E1" },
      { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain", color: "#CC2927" },
      { name: "MySQL", icon: "devicon-mysql-plain", color: "#4479A1" },
      { name: "Redis", icon: "devicon-redis-plain", color: "#DC382D" },
      { name: "Solr", icon: "/media/icons/apachesolr.svg", color: "#D9411E" },
      { name: "RabbitMQ", icon: "devicon-rabbitmq-original", color: "#FF6600" },
      { name: "Hangfire", icon: CalendarClock, color: "#4A90D9" },
    ],
  },
  {
    label: "IA",
    items: [
      { name: "Claude", icon: "/media/icons/claude.svg", color: "#D97757" },
      { name: "OpenAI", icon: "/media/icons/openai.svg", color: "#EDEDED" },
      { name: "DeepSeek", icon: "/media/icons/deepseek.svg", color: "#4D6BFE" },
      { name: "Whisper", icon: "/media/icons/openai.svg", color: "#EDEDED" },
      { name: "OmniVoice", icon: AudioLines, color: "#EAB308" },
      { name: "OpenCV", icon: "devicon-opencv-plain", color: "#5C3EE8" },
      { name: "Ollama", icon: "/media/icons/ollama.svg", color: "#EDEDED" },
      { name: "LM Studio", icon: "/media/icons/lmstudio.svg", color: "#EDEDED" },
      { name: "RAG", icon: DatabaseZap, color: "#EAB308" },
    ],
  },
  {
    label: "Infra & Ferramentas",
    items: [
      { name: "Docker", icon: "devicon-docker-plain", color: "#2496ED" },
      { name: "Linux", icon: "devicon-linux-plain", color: "#FCC624" },
      { name: "Nginx", icon: "devicon-nginx-original", color: "#009639" },
      { name: "GitHub Actions", icon: "devicon-githubactions-plain", color: "#2088FF" },
      { name: "Azure DevOps", icon: "devicon-azuredevops-plain", color: "#0078D4" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark", color: "#FF9900" },
      { name: "Cloudflare", icon: "devicon-cloudflare-plain", color: "#F38020" },
      { name: "Railway", icon: "devicon-railway-plain", color: "#EDEDED" },
      { name: "Git", icon: "devicon-git-plain", color: "#F05032" },
      { name: "Playwright", icon: "devicon-playwright-plain", color: "#2EAD33" },
    ],
  },
];
