import type { NextConfig } from "next";

// matheus-pedro.github.io é um site de usuário do GitHub Pages, então é
// servido da raiz do domínio (sem basePath) a partir de um export estático.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
