export interface Project {
  title: string;
  image: string;
  video?: string;
  description: string;
  link: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "xys.lol",
    image: "/media/images/xyslol.png",
    video: "/media/videos/xysbio.webm",
    description:
      "xys.lol (antes Xys Bio) é um SaaS de páginas de perfil personalizáveis (\"menos template, mais você\") para profissionais, marcas, gamers e streamers, com integração ao Discord (presença em tempo real), ranking de perfis e plano premium. O backend foi migrado de Java/Spring Boot para .NET 10 com Clean Architecture, e o frontend reescrito em Next.js 14.",
    link: "",
    technologies: [
      "C#",
      "Dotnet",
      "Clean Architecture",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Hangfire",
      "Docker",
      "AWS",
      "Nginx",
      "Cloudflare",
    ],
  },
  {
    title: "FolhaEfc",
    image: "/media/images/folhaefc.png",
    description:
      "FolhaEfc é uma plataforma de gestão para pequenas e médias empresas brasileiras, que reúne em um só lugar colaboradores, horas e recibos; financeiro realizado e previsto (contas a pagar e a receber, fluxo de caixa, DRE e conciliação bancária por extrato OFX); compras, estoque e vendas; e os formulários da rotina. É multi-tenant por organização, com subdomínio por cliente, convites e acesso por módulo. Está em uso piloto com empresas reais.",
    link: "",
    technologies: [
      "C#",
      "Dotnet",
      "Clean Architecture",
      "MediatR",
      "Entity Framework",
      "PostgreSQL",
      "JWT",
      "Next.js",
      "React Query",
      "Tailwind CSS",
      "Playwright",
      "Docker",
      "Railway",
    ],
  },
  {
    title: "Trabalha Brasil",
    image: "/media/images/trabalhabrasil.png",
    description:
      "Trabalha Brasil é um dos maiores sites de vagas de emprego do país, com milhões de vagas e mais de 60 mil empresas contratando. Atuei como desenvolvedor back-end (BNE/TBR, 2024 a 2026): reestruturei módulos legados com Clean Architecture e DDD, implementei CQRS com MediatR em módulo de alto tráfego, cache híbrido (Memory Cache/Redis), cache HTTP com ETag, filas com RabbitMQ para envio de e-mails, integração com gateways de pagamento para assinaturas, otimizações no Solr e hardening contra o OWASP Top 10.",
    link: "https://www.trabalhabrasil.com.br",
    technologies: [
      "C#",
      "Dotnet",
      "ASP.NET MVC",
      "Entity Framework",
      "Solr",
      "Redis",
      "RabbitMQ",
      "Hangfire",
      "CQRS",
      "DDD",
      "Serilog",
    ],
  },
  {
    title: "Total Equipamentos",
    image: "/media/images/totalequipamentos.png",
    description:
      "Site da Total Equipamentos, locadora de máquinas e equipamentos para obra em Curitiba e no litoral do Paraná. Reúne a apresentação da empresa, um catálogo da frota com filtro por categoria e um simulador de locação: o cliente escolhe o equipamento, informa retirada e devolução, vê o total estimado na hora e fecha o orçamento pelo WhatsApp.",
    link: "https://totalequipamentos.com",
    technologies: ["Next.js", "React", "TypeScript", "SEO"],
  },
  {
    title: "Radio Gym",
    image: "/media/images/radio-efficiency.png",
    video: "/media/videos/radiogym.webm",
    description:
      "Radio Gym é um sistema de streaming de áudios, com um painel web para tocar músicas automaticamente dentro da academia, sincronizando com o sistema de gerenciamento e permitindo controle em todas as unidades da Efficiency Gym. O sistema também pode exibir anúncios publicitários entre as músicas, permitindo monetização e informativos educativos. Resultou na sincronização em todas as unidades da Efficiency Gym, em uma melhora na experiência dos alunos e facilidade no trabalho dos funcionários.",
    link: "https://radio.efficiencygym.com.br",
    technologies: ["Python", "Flask", "Bucket S3", "JavaScript", "Websocket", "Nginx", "Cloudflare"],
  },
  {
    title: "Web Whats",
    image: "/media/images/webwhats.png",
    video: "/media/videos/webwhats.webm",
    description:
      "Web Whats é um sistema de gerenciamento de mensagens para WhatsApp com processamento inteligente usando regras, atuando como um assistente virtual para os novos clientes da Efficiency Gym, com correspondência fuzzy e um sistema avançado de RAG (Retrieval Augmented Generation) com DeepSeek. Houve uma melhora do atendimento online aos clientes, sendo mais eficiente e rápido.",
    link: "https://github.com/Matheus-Pedro/webwhats",
    technologies: [
      "TypeScript",
      "Redis",
      "PostgreSQL",
      "Docker",
      "DeepSeek",
      "LLM",
      "RAG",
      "Fuzzy Matching",
      "Meta for Developers",
      "Nginx",
      "Cloudflare",
    ],
  },
  {
    title: "Efficommerce",
    image: "/media/images/efficommerce.png",
    video: "/media/videos/efficommerce.webm",
    description:
      "Efficommerce é um sistema de e-commerce desenvolvido para a Efficiency Gym, permitindo aos clientes comprarem produtos da empresa e de parceiros. Até a data atual não foi oficialmente lançado, mas já está sendo testado e utilizado internamente pela empresa. Sua API foi desenvolvida em Dotnet 9 e seu frontend em Next.js. Resultou em algumas parcerias e futuros projetos com a Efficiency Gym.",
    link: "https://github.com/Matheus-Pedro/efficommerce",
    technologies: ["C#", "Dotnet", "PostgreSQL", "Docker", "Next.js", "Tailwind CSS", "Stripe", "AWS", "Nginx", "Cloudflare"],
  },
  {
    title: "Orvall",
    image: "/media/images/orvall.png",
    video: "/media/videos/orvall.webm",
    description:
      "O Orvall é o meu projeto de TCC, um sistema para captura de dados meteorológicos e previsão do tempo realizada por Machine Learning, com um painel web para visualização dos dados e da previsão, e um painel para o usuário cadastrar-se e receber alertas via WhatsApp sobre fenômenos meteorológicos raros em sua região. Focado em agricultores, o sistema foi desenvolvido para capturar dados de forma automática e eficiente. Teve participação em vários editais relacionados a ODS, incluindo eventos no IFES e em Brasília.",
    link: "https://orvall.com.br",
    technologies: [
      "C#",
      "Dotnet",
      "C++",
      "ESP32",
      "Python",
      "PostgreSQL",
      "Docker",
      "Next.js",
      "Tailwind CSS",
      "Ubuntu",
      "Nginx",
      "Cloudflare",
    ],
  },
  {
    title: "Writecode",
    image: "/media/images/writecode.png",
    description:
      "Writecode é um typing trainer voltado pra prática de código, permitindo treinar velocidade e precisão de digitação com trechos reais de código em 10 linguagens diferentes (C#, Python, JavaScript, TypeScript, Go, Rust, Ruby, PHP, C e Java). Os trechos podem vir de repositórios populares do GitHub, de um repositório específico escolhido pelo usuário, ou ser gerados por IA. Conta com métricas de performance em tempo real (PPM/CPM, precisão e contagem de erros) e feedback visual caractere a caractere.",
    link: "https://github.com/Matheus-Pedro/writecode",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "GitHub API", "OpenAI"],
  },
  {
    title: "AssistAi",
    image: "/media/images/assistai.png",
    description:
      "AssistAi é um sistema de processamento de vídeo automatizado com integração de IA local, focado em transcrição, análise e geração de conteúdo. Extrai áudio e cortes de vídeos com FFmpeg, transcreve com Whisper, detecta cenas relevantes com OpenCV, e roda modelos de IA localmente via LM Studio e Ollama, eliminando dependência de serviços pagos. Todo o processamento pesado roda em jobs assíncronos em background, sem travar a API.",
    link: "",
    technologies: ["Dotnet", "Clean Architecture", "CQRS", "FFmpeg", "OpenCV", "Whisper", "Hangfire", "PostgreSQL", "Docker", "MinIO"],
  },
  {
    title: "Voice Assistant",
    image: "/media/images/voiceassistant.png",
    description:
      "Assistente de voz pessoal com pipeline completo de captura de áudio, transcrição, geração de resposta por IA e síntese de fala com voz clonada, rodando em tempo real. Usa Whisper para transcrição, a API da DeepSeek como modelo de linguagem, e OmniVoice para clonagem de voz, mantendo a mesma identidade vocal entre sessões. Inferência dos modelos roda localmente em GPU.",
    link: "",
    technologies: ["Python", "Whisper", "OmniVoice", "DeepSeek", "CUDA"],
  },
  {
    title: "Minecraft Server",
    image: "/media/images/minecraftserver.png",
    description:
      "Infraestrutura self-hosted para servidores de Minecraft com Docker Compose, rodando várias instâncias lado a lado, do Vanilla mais recente a modpacks Forge 1.20.1 com mais de 200 mods, cada uma com sua memória, porta, RCON e dados persistentes em volume. Inclui exposição pública via ngrok e um bot do Discord em Python que publica o endereço do servidor, responde ao status e avisa o canal quando o endereço muda.",
    link: "",
    technologies: ["Docker", "Docker Compose", "Linux", "Java", "Forge", "Python", "discord.py", "ngrok", "RCON"],
  },
];
