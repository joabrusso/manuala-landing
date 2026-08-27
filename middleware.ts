import { NextResponse, type NextRequest } from "next/server";
import { NodeHtmlMarkdown } from "node-html-markdown";

// Markdown para agentes (developers.cloudflare.com/fundamentals/reference/markdown-for-agents):
// si un cliente pide Accept: text/markdown, le devolvemos el contenido de
// <main> convertido a markdown en vez del HTML completo. El resto de los
// visitantes (navegadores, crawlers normales) no pasan por acá.
export const config = {
  matcher: ["/((?!api/|_next/|_vercel|opengraph-image|.*\\..*).*)"],
};

export async function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  if (!accept.includes("text/markdown")) {
    return NextResponse.next();
  }

  // Self-fetch de la misma URL pidiendo HTML explicitamente -- evita
  // volver a entrar a esta rama (sin esto, loop infinito).
  const htmlResponse = await fetch(request.url, {
    headers: { accept: "text/html" },
  });

  if (!htmlResponse.ok) {
    return NextResponse.next();
  }

  const html = await htmlResponse.text();
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/);

  const contentHtml = mainMatch ? mainMatch[1] : html;
  const title = titleMatch ? titleMatch[1].replace(/\s*\|\s*Manuala\s*$/, "") : "Manuala";
  const body = NodeHtmlMarkdown.translate(contentHtml);

  return new NextResponse(`# ${title}\n\n${body}\n`, {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
}
