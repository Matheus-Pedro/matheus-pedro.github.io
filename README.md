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
- `public/media/` — imagens e vídeos dos projetos
- `cv/` — fonte do currículo em HTML (`curriculo.html` em PT, `resume-en.html` em EN)
- `scripts/build-cv.mjs` — gera os PDFs do currículo

## Deploy

Automático via `.github/workflows/deploy.yml` a cada push em `main`. No repositório, em **Settings → Pages**, a fonte precisa estar configurada como **GitHub Actions** (não "Deploy from a branch").

## Currículo

O currículo é editado em `cv/curriculo.html` (e `cv/resume-en.html`). O PDF **não** é versionado: `scripts/build-cv.mjs` imprime os HTMLs com o Chrome headless em `public/media/curriculum/` antes de todo `npm run dev` e `npm run build` — inclusive no workflow de deploy. Então basta editar o HTML e dar push em `main` que o PDF do site é atualizado.

Para gerar só os PDFs: `npm run cv`. O script acha o Chrome sozinho (Linux, macOS, Windows e o Chrome do Windows a partir do WSL); se precisar, defina `CHROME_PATH`.

