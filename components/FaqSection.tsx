import { FAQ_ITEMS } from "@/lib/jsonld";

/**
 * <details>/<summary> nativo: el contenido queda en el HTML servido (visible
 * para crawlers y answer engines que no ejecutan JS), sin depender de JS
 * para expandir/colapsar. Las preguntas son las mismas que en el JSON-LD
 * FAQPage (lib/jsonld.ts) -- una sola fuente para que el schema tenga
 * contenido visible que lo respalde.
 */
export default function FaqSection() {
  return (
    <section className="bg-paper-0 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs font-bold tracking-wide text-ink-muted uppercase">Preguntas frecuentes</p>
        <h2 className="font-heading mt-3 max-w-[20ch] text-3xl font-extrabold tracking-tight text-balance sm:text-[38px]">
          Lo que suelen preguntar antes de arrancar
        </h2>

        <div className="mt-8 divide-y divide-ink/10">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-[17px] font-bold">
                {item.question}
                <span aria-hidden className="shrink-0 text-ink-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
