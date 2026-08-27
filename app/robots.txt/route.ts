import { SITE_URL } from "@/lib/nav";

// Route Handler en vez de la convención tipada app/robots.ts: necesitamos
// emitir la línea Content-Signal (contentsignals.org) y grupos por bot de
// IA, que el tipo MetadataRoute.Robots de Next no contempla.

// Crawlers de IA más comunes (entrenamiento y/o búsqueda). Se los declara
// explícitamente además del wildcard para dejar la intención clara -- el
// sitio es 100% público, no hay nada que restringirles.
const AI_USER_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "CCBot",
  "Applebot-Extended",
  "Amazonbot",
  "cohere-ai",
];

export async function GET() {
  const aiBlocks = AI_USER_AGENTS.map((agent) => `User-agent: ${agent}\nAllow: /`).join("\n\n");

  const body = `User-agent: *
Allow: /
Content-Signal: search=yes, ai-input=yes, ai-train=no

${aiBlocks}

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
