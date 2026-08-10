export interface Project {
  title: string;
  image: string;
  video: string;
  description: string;
  link: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "Xys Bio",
    image: "/media/images/xysbio.png",
    video: "/media/videos/xysbio.webm",
    description:
      "Xys Bio é um SaaS de portfólios digitais personalizáveis que une design moderno e alta performance para elevar a presença online de profissionais, marcas, gamers e streamers. Atualmente em fase beta, o sistema está sendo testado e recebendo feedbacks. O backend foi migrado de Java/Spring Boot para .NET 10 com Clean Architecture, e o frontend reescrito em Next.js 14.",
    link: "https://xys.bio/",
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
    title: "Radio Gym",
    image: "/media/images/radiogym.png",
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
    video: "/media/videos/writecode.webm",
    description:
      "Writecode é um typing trainer voltado pra prática de código, permitindo treinar velocidade e precisão de digitação com trechos reais de código em 10 linguagens diferentes (C#, Python, JavaScript, TypeScript, Go, Rust, Ruby, PHP, C e Java). Os trechos podem vir de repositórios populares do GitHub, de um repositório específico escolhido pelo usuário, ou ser gerados por IA. Conta com métricas de performance em tempo real (PPM/CPM, precisão e contagem de erros) e feedback visual caractere a caractere.",
    link: "https://github.com/Matheus-Pedro/writecode",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "GitHub API", "OpenAI"],
  },
  {
    title: "AssistAi",
    image: "/media/images/assistai.png",
    video: "/media/videos/assistai.webm",
    description:
      "AssistAi é um sistema de processamento de vídeo automatizado com integração de IA local, focado em transcrição, análise e geração de conteúdo. Extrai áudio e cortes de vídeos com FFmpeg, transcreve com Whisper, detecta cenas relevantes com OpenCV, e roda modelos de IA localmente via LM Studio e Ollama, eliminando dependência de serviços pagos. Todo o processamento pesado roda em jobs assíncronos em background, sem travar a API.",
    link: "",
    technologies: ["Dotnet", "Clean Architecture", "CQRS", "FFmpeg", "OpenCV", "Whisper", "Hangfire", "PostgreSQL", "Docker", "MinIO"],
  },
  {
    title: "Voice Assistant",
    image: "/media/images/voiceassistant.png",
    video: "/media/videos/voiceassistant.webm",
    description:
      "Assistente de voz pessoal com pipeline completo de captura de áudio, transcrição, geração de resposta por IA e síntese de fala com voz clonada, rodando em tempo real. Usa Whisper para transcrição, a API da DeepSeek como modelo de linguagem, e OmniVoice para clonagem de voz, mantendo a mesma identidade vocal entre sessões. Inferência dos modelos roda localmente em GPU.",
    link: "",
    technologies: ["Python", "Whisper", "OmniVoice", "DeepSeek", "CUDA"],
  },
];
