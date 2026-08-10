export interface Skill {
  name: string;
  icon: string;
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
    label: "Frontend",
    items: [
      { name: "React", icon: "devicon-react-original", color: "#61DAFB" },
      { name: "Next.js", icon: "devicon-nextjs-plain", color: "#EDEDED" },
      { name: "React Native", icon: "devicon-react-original", color: "#61DAFB" },
      { name: "HTML", icon: "devicon-html5-plain", color: "#E34F26" },
      { name: "CSS", icon: "devicon-css3-plain", color: "#1572B6" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain", color: "#7952B3" },
      { name: "Tailwind", icon: "devicon-tailwindcss-original", color: "#06B6D4" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "DotNet", icon: "devicon-dot-net-plain", color: "#8A2BE2" },
      { name: "Spring", icon: "devicon-spring-plain", color: "#6DB33F" },
      { name: "Django", icon: "devicon-django-plain", color: "#44B78B" },
      { name: "FastAPI", icon: "devicon-fastapi-plain", color: "#009688" },
      { name: "Flask", icon: "devicon-flask-original", color: "#EDEDED" },
    ],
  },
  {
    label: "Dados",
    items: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "#4169E1" },
      { name: "MySQL", icon: "devicon-mysql-plain", color: "#4479A1" },
      { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain", color: "#CC2927" },
      { name: "SQLite", icon: "devicon-sqlite-plain", color: "#5FA9D6" },
      { name: "Redis", icon: "devicon-redis-plain", color: "#DC382D" },
    ],
  },
  {
    label: "Infra & Ferramentas",
    items: [
      { name: "Docker", icon: "devicon-docker-plain", color: "#2496ED" },
      { name: "Linux", icon: "devicon-linux-plain", color: "#FCC624" },
      { name: "Nginx", icon: "devicon-nginx-original", color: "#009639" },
      { name: "Git", icon: "devicon-git-plain", color: "#F05032" },
      { name: "GitHub", icon: "devicon-github-original", color: "#EDEDED" },
      { name: "Azure", icon: "devicon-azure-plain", color: "#0078D4" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark", color: "#FF9900" },
      { name: "Selenium", icon: "devicon-selenium-plain", color: "#43B02A" },
    ],
  },
];
