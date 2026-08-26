import { SITE_URL, PRODUCT_LINKS, SOLUTION_LINKS } from "@/lib/nav";
import { DESCRIPTION } from "@/lib/jsonld";

// Convención llms.txt (https://llmstxt.org): un resumen en markdown pensado
// para que un asistente de IA entienda de qué trata el sitio sin tener que
// scrapear y adivinar a partir del HTML.

export async function GET() {
  const productLines = PRODUCT_LINKS.map((l) => `- [${l.label}](${SITE_URL}${l.href}): ${l.desc}`).join("\n");
  const solutionLines = SOLUTION_LINKS.map((l) => `- [${l.label}](${SITE_URL}${l.href}): ${l.desc}`).join("\n");

  const body = `# Manuala

> ${DESCRIPTION}

## Producto

${productLines}

## Soluciones por caso de uso

${solutionLines}

## Precios y contacto

- [Precios](${SITE_URL}/precios)
- [Contacto](${SITE_URL}/contacto)

## Empezar

- [Probar gratis](${SITE_URL}/precios)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
