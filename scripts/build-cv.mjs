// Gera os PDFs do currículo a partir dos HTMLs em cv/ usando o Chrome headless.
// Roda antes de `next dev` e `next build` (predev/prebuild), então editar
// cv/curriculo.html e dar push em main já publica o PDF atualizado no site.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "media", "curriculum");

const DOCUMENTS = [
  { source: "cv/curriculo.html", output: "MatheusCaprioliCV.pdf" },
  { source: "cv/resume-en.html", output: "MatheusCaprioliResume-en.pdf" },
];

const isCI = Boolean(process.env.CI);
const isWSL = process.platform === "linux" && existsSync("/proc/sys/fs/binfmt_misc/WSLInterop");

function which(cmd) {
  try {
    return execFileSync("sh", ["-c", `command -v ${cmd}`], { encoding: "utf8" }).trim() || null;
  } catch {
    return null;
  }
}

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;

  if (process.platform === "win32") {
    return [
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
      "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    ].find(existsSync);
  }

  if (process.platform === "darwin") {
    return "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  }

  for (const cmd of ["google-chrome", "google-chrome-stable", "chromium", "chromium-browser"]) {
    const found = which(cmd);
    if (found) return found;
  }

  // No WSL, usa o Chrome/Edge instalado no Windows.
  if (isWSL) {
    return [
      "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe",
      "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
      "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    ].find(existsSync);
  }

  return undefined;
}

// Um .exe do Windows rodando via WSL só entende caminhos do Windows.
function toChromePath(path, chrome) {
  if (isWSL && chrome.endsWith(".exe")) {
    return execFileSync("wslpath", ["-w", path], { encoding: "utf8" }).trim();
  }
  return path;
}

function toChromeUrl(path, chrome) {
  const p = toChromePath(path, chrome);
  return p === path ? pathToFileURL(path).href : "file:///" + p.replace(/\\/g, "/");
}

const chrome = findChrome();
if (!chrome || !existsSync(chrome)) {
  const msg = "[cv] Chrome não encontrado (defina CHROME_PATH). PDFs do currículo não foram gerados.";
  if (isCI) {
    console.error(msg);
    process.exit(1);
  }
  console.warn(msg);
  process.exit(0);
}

mkdirSync(outDir, { recursive: true });

for (const doc of DOCUMENTS) {
  const source = join(root, doc.source);
  const output = join(outDir, doc.output);
  const args = [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--run-all-compositor-stages-before-draw",
    `--print-to-pdf=${toChromePath(output, chrome)}`,
    toChromeUrl(source, chrome),
  ];
  if (process.platform === "linux" && !isWSL) args.unshift("--no-sandbox");

  execFileSync(chrome, args, { stdio: "ignore" });

  if (!existsSync(output) || statSync(output).size === 0) {
    console.error(`[cv] Falha ao gerar ${doc.output}`);
    process.exit(1);
  }
  console.log(`[cv] ${doc.source} -> public/media/curriculum/${doc.output}`);
}
