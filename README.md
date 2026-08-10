# matheus-pedro.github.io

Portfólio pessoal, construído com Next.js (App Router, export estático) + Tailwind CSS v4 + shadcn/ui + Framer Motion. Publicado no GitHub Pages a partir de `main` via GitHub Actions.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Build

```bash
npm run build
```

Gera o site estático em `out/` (o mesmo que o workflow de deploy publica no Pages).

## Estrutura

- `app/` — páginas (App Router)
- `components/` — seções e componentes de UI (`components/ui` = base shadcn/ui)
- `lib/data/` — conteúdo do site (projetos, skills, depoimentos) em TypeScript
- `public/media/` — imagens, vídeos e o PDF do currículo

## Deploy

Automático via `.github/workflows/deploy.yml` a cada push em `main`. No repositório, em **Settings → Pages**, a fonte precisa estar configurada como **GitHub Actions** (não "Deploy from a branch").

## Pendências conhecidas

Os projetos **Writecode**, **AssistAi** e **Voice Assistant** ainda não têm imagem/vídeo de demonstração — os caminhos já estão referenciados em `lib/data/projects.ts` (`public/media/images/writecode.png` etc.), só falta adicionar os arquivos.
