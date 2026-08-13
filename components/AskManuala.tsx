"use client";

import { useEffect, useState } from "react";

const DocIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" className="h-3.5 w-3.5">
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="M9 12h6M9 16h4" strokeLinecap="round" />
  </svg>
);

const ChatIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" className="h-3.5 w-3.5">
    <path d="M4 5.5h16v11H9l-5 4z" />
  </svg>
);

type Qa = {
  q: string;
  a: string;
  cite: { title: string; meta: string } | null;
};

const QA: Qa[] = [
  {
    q: "¿Cómo se hace el cierre de caja?",
    a: "Entrás a Caja, elegís el turno del día y confirmás el cierre. Si cerró con una diferencia mayor a $500, antes tenés que avisarle al encargado de turno y adjuntar el ticket.",
    cite: { title: "Cierre de caja", meta: "3 pasos · con capturas" },
  },
  {
    q: "¿Quién tiene procesos vencidos?",
    a: "Lucía Gómez tiene «Atención de reclamos» vencido desde ayer. Mica Fonseca y Tomás Reyes están al día con los tres que les tocan.",
    cite: { title: "Panel de cumplimiento", meta: "actualizado hace 2 minutos" },
  },
  {
    q: "¿Cuánto es una diferencia tolerable?",
    a: "Hasta $500. Por encima de eso el cierre necesita autorización del encargado de turno.",
    cite: { title: "Definiciones del negocio", meta: "regla cargada por el dueño" },
  },
  {
    q: "¿Cómo se carga un cliente nuevo?",
    a: "Todavía no hay ningún proceso publicado sobre eso, así que prefiero no inventarlo. Puedo avisarle al dueño para que lo documente.",
    cite: null,
  },
];

export default function AskManuala() {
  const [active, setActive] = useState(0);
  const [thinking, setThinking] = useState(true);

  useEffect(() => {
    setThinking(true);
    const t = setTimeout(() => setThinking(false), 850);
    return () => clearTimeout(t);
  }, [active]);

  const item = QA[active];

  return (
    // text-ink explícito: la sección que la contiene es oscura y define
    // text-paper-0, que se heredaba y dejaba la respuesta blanca sobre blanco.
    <div className="mt-9 rounded-[20px] bg-paper-0 p-[22px] text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
      <div className="flex flex-wrap gap-2.5">
        {QA.map((qa, i) => (
          <button
            key={qa.q}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`cursor-pointer rounded-full border px-4 py-2.5 text-sm transition-colors ${
              i === active
                ? "border-mustard bg-mustard font-bold text-ink"
                : "border-ink/10 bg-paper text-ink hover:border-mustard hover:bg-mustard-soft"
            }`}
          >
            {qa.q}
          </button>
        ))}
      </div>

      <div className="mt-[18px] grid gap-3">
        <div className="justify-self-end rounded-[15px] rounded-br-[5px] bg-mustard px-4 py-2.5 font-semibold text-ink sm:max-w-[76%]">
          {item.q}
        </div>

        <div className="justify-self-start rounded-[15px] rounded-bl-[5px] border border-ink/[0.07] bg-paper px-4 py-3.5 sm:max-w-[88%]">
          {thinking ? (
            <span className="inline-flex gap-1.5" aria-label="Escribiendo">
              {[0, 1, 2].map((i) => (
                <i
                  key={i}
                  className="ask-dot h-[7px] w-[7px] rounded-full bg-ink-faint"
                  style={{ animationDelay: `${i * 0.18}s` }}
                />
              ))}
            </span>
          ) : (
            <>
              <p>{item.a}</p>
              <div className="mt-3 flex items-center gap-2.5 rounded-[10px] border border-ink/10 bg-paper-0 px-3 py-2.5">
                <span
                  className={`flex h-[26px] w-[26px] flex-none items-center justify-center rounded-lg ${
                    item.cite ? "bg-mustard-soft text-mustard-ink" : "bg-coral-soft text-coral"
                  }`}
                >
                  {item.cite ? DocIcon : ChatIcon}
                </span>
                <div>
                  <b className="font-heading block text-[12.5px]">
                    {item.cite ? item.cite.title : "Sin proceso documentado"}
                  </b>
                  {/* ink-muted en vez de ink-faint: a 11.5px el faint queda en 3.6:1 */}
                  <small className="text-[11.5px] text-ink-muted">
                    {item.cite ? item.cite.meta : "Manuala no completa lo que no está escrito"}
                  </small>
                </div>
                {item.cite && (
                  <em className="ml-auto flex-none text-[10.5px] font-bold tracking-wide text-mustard-ink not-italic">
                    VER PROCESO
                  </em>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
