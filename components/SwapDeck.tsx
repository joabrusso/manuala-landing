"use client";

import { useEffect, useState } from "react";

const CARD_MS = 5600; // lo que dura cada tarjeta antes de pasar sola
const REVEAL_MS = 700; // cuánto tarda en transformarse al llegar

const Icon = {
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round">
      <path d="M4 5.5h16v11H9l-5 4z" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round">
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 16h4" strokeLinecap="round" />
    </svg>
  ),
  sheet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1">
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17M9 9.5V20M3.5 15h17" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.6a3.2 3.2 0 0 1 0 4.8M17.5 14.4A5.5 5.5 0 0 1 20.5 19" />
    </svg>
  ),
  quiz: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.4 9.3a2.7 2.7 0 0 1 5.2.9c0 1.8-2.6 2.2-2.6 3.8" />
      <path d="M12 17.4h.01" />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1">
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.8" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.8" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.8" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.8" />
    </svg>
  ),
};

function Row({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="font-heading flex h-5 w-5 flex-none items-center justify-center rounded-full bg-mustard text-[10px] font-extrabold text-ink">
        {n}
      </span>
      <span className="text-[12.5px] font-semibold text-ink">{children}</span>
    </div>
  );
}

function Bar({ pct, tone = "mustard" }: { pct: number; tone?: "mustard" | "success" }) {
  return (
    <div className="h-[7px] overflow-hidden rounded-full bg-ink/[0.07]">
      <div
        className={`h-full rounded-full ${tone === "success" ? "bg-success" : "bg-mustard"}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function Kv({ label, value, tone }: { label: string; value: string; tone?: "success" | "faint" }) {
  return (
    <div className="flex items-center justify-between gap-2.5">
      <b className="font-heading text-xs font-bold">{label}</b>
      <span className={`text-[11.5px] font-bold ${tone === "success" ? "text-success" : "text-ink-faint"}`}>{value}</span>
    </div>
  );
}

function Shot() {
  return (
    <div className="flex items-center gap-2 rounded-md border border-ink/10 px-2 py-1.5">
      <span className="h-[19px] w-[25px] flex-none rounded-[3px] bg-mustard-soft" />
      <div className="flex-1">
        <Bar pct={100} />
      </div>
    </div>
  );
}

function MiniStep({ children, off }: { children: React.ReactNode; off?: boolean }) {
  return (
    <div className={`flex items-center gap-1.5 rounded px-1 py-1 text-[8px] text-ink ${off ? "bg-ink/[0.07]" : "bg-mustard-soft"}`}>
      <span className={`h-2 w-2 flex-none rounded-full ${off ? "bg-ink-faint" : "bg-coral"}`} />
      {children}
    </div>
  );
}

type Card = {
  said: string;
  who: string;
  scraps: React.ReactNode;
  tone: string;
  icon: keyof typeof Icon;
  title: string;
  desc: string;
  demo: React.ReactNode;
};

const Scrap = ({
  top,
  left,
  rot,
  children,
  note,
}: {
  top: number;
  left: number;
  rot: number;
  children: React.ReactNode;
  note?: boolean;
}) => (
  <div
    className={
      note
        ? "absolute max-w-[190px] rounded border border-ink/15 bg-[#f0eee7] px-2.5 py-2 text-xs leading-[1.32] text-[#6f6b61] shadow-[0_2px_5px_rgba(28,27,24,.09)]"
        : "absolute flex items-center gap-2 rounded-lg border border-ink/15 bg-[#f0eee7] px-2.5 py-2 text-xs text-[#6f6b61] shadow-[0_2px_5px_rgba(28,27,24,.09)]"
    }
    style={{ top, left, transform: `rotate(${rot}deg)` }}
  >
    {children}
  </div>
);

const ico = "h-3.5 w-3.5 flex-none";

const CARDS: Card[] = [
  {
    said: "Se lo explico a cada uno que entra.",
    who: "Todos los meses, de cero",
    scraps: (
      <>
        <Scrap top={4} left={0} rot={-1.6}>
          <span className={ico}>{Icon.clock}</span>
          <span>
            La misma explicación · <b className="font-semibold text-[#4d4941]">40 min</b>
          </span>
        </Scrap>
        <Scrap top={66} left={22} rot={1.4} note>
          mostrarle lo de la caja al chico nuevo
        </Scrap>
        <Scrap top={150} left={6} rot={-0.8}>
          <span className={ico}>{Icon.chat}</span>
          <span>&ldquo;¿y esto cómo era?&rdquo;</span>
        </Scrap>
      </>
    ),
    tone: "bg-mustard-soft text-mustard-ink",
    icon: "people",
    title: "Cada persona que entra recibe su recorrido",
    desc: "Los procesos de su puesto le llegan asignados el primer día, con fecha límite.",
    demo: (
      <div className="grid gap-2">
        <Kv label="Lucía Gómez" value="Onboarding · 1ª semana" />
        <div>
          <div className="mb-1">
            <Kv label="Cierre de caja" value="Completado" tone="success" />
          </div>
          <Bar pct={100} />
        </div>
        <div>
          <div className="mb-1">
            <Kv label="Alta de cliente" value="2 de 3" />
          </div>
          <Bar pct={66} />
        </div>
      </div>
    ),
  },
  {
    said: "Está en un Word en el Drive, creo.",
    who: "Última edición: hace 8 meses",
    scraps: (
      <>
        <Scrap top={0} left={8} rot={1.2}>
          <span className={ico}>{Icon.doc}</span>
          <span className="font-semibold text-[#4d4941]">Manual v3 FINAL (1).docx</span>
        </Scrap>
        <Scrap top={56} left={0} rot={-1.5}>
          <span className={ico}>{Icon.sheet}</span>
          <span>Copia de Procesos_2024.xlsx</span>
        </Scrap>
        <Scrap top={112} left={18} rot={0.9}>
          <span className={ico}>{Icon.doc}</span>
          <span>instructivo_caja_NUEVO.pdf</span>
        </Scrap>
        <Scrap top={168} left={2} rot={-1.1}>
          <span className={ico}>{Icon.doc}</span>
          <span>manual_viejo_NO_USAR.doc</span>
        </Scrap>
      </>
    ),
    tone: "bg-berry-soft text-berry",
    icon: "doc",
    title: "Uno solo, con capturas del sistema real",
    desc: "Cada paso muestra la pantalla exacta y qué botón tocar.",
    demo: (
      <div className="grid gap-2">
        <Row n={2}>Elegís el turno</Row>
        <Shot />
        <Row n={3}>Confirmás el cierre</Row>
        <Shot />
      </div>
    ),
  },
  {
    said: "No sé si lo leyeron.",
    who: "Lo mandaste y nadie contestó",
    scraps: (
      <>
        <Scrap top={10} left={2} rot={1.3}>
          <span className={ico}>{Icon.chat}</span>
          <span>
            &ldquo;¿lo vieron?&rdquo; · <b className="font-semibold text-[#4d4941]">sin respuesta</b>
          </span>
        </Scrap>
        <Scrap top={72} left={20} rot={-1.5} note>
          preguntar el lunes a los del turno tarde
        </Scrap>
        <Scrap top={158} left={0} rot={0.8}>
          <span className={ico}>{Icon.chat}</span>
          <span>✓✓ visto por 3 de 6</span>
        </Scrap>
      </>
    ),
    tone: "bg-mustard-soft text-mustard-ink",
    icon: "quiz",
    title: "Ves quién lo leyó y quién lo entendió",
    desc: "Abrir el documento no es lo mismo que aprobar el quiz.",
    demo: (
      <div className="grid gap-2">
        <Kv label="Lo leyeron" value="6 de 6" tone="success" />
        <Bar pct={100} tone="success" />
        <div className="mt-1">
          <Kv label="Aprobaron el quiz" value="4 de 6" />
        </div>
        <Bar pct={66} />
      </div>
    ),
  },
  {
    said: "Se hace distinto según quién esté.",
    who: "Turno mañana vs. turno tarde",
    scraps: (
      <>
        <Scrap top={6} left={0} rot={-1.2} note>
          el de la mañana lo hace al revés pero igual sale
        </Scrap>
        <Scrap top={84} left={22} rot={1.4}>
          <span className={ico}>{Icon.chat}</span>
          <span>&ldquo;yo lo hago así hace años&rdquo;</span>
        </Scrap>
        <Scrap top={142} left={4} rot={0.7} note>
          ojo que Marce lo hace con el otro sistema
        </Scrap>
      </>
    ),
    tone: "bg-berry-soft text-berry",
    icon: "grid",
    title: "Uno solo, y se sigue mientras se trabaja",
    desc: "Es web: la misma cuenta abre en la compu del mostrador y en el celular.",
    demo: (
      <div className="flex items-end gap-2.5">
        <div className="min-w-0 flex-1 overflow-hidden rounded-md border border-ink/10">
          <div className="flex h-3.5 items-center gap-[3px] bg-ink px-1.5">
            <i className="block h-1 w-1 rounded-full bg-white/40" />
            <i className="block h-1 w-1 rounded-full bg-white/40" />
            <i className="block h-1 w-1 rounded-full bg-white/40" />
          </div>
          <div className="grid gap-1 p-1.5">
            <MiniStep>Entrás a Caja</MiniStep>
            <MiniStep>Elegís el turno</MiniStep>
            <MiniStep off>Confirmás</MiniStep>
          </div>
        </div>
        <div className="w-[54px] flex-none rounded-[9px] bg-ink p-[3px]">
          <div className="grid gap-1 rounded-md bg-paper-0 px-1 py-1.5">
            <MiniStep>Caja</MiniStep>
            <MiniStep>Turno</MiniStep>
            <MiniStep off>Cerrar</MiniStep>
          </div>
        </div>
      </div>
    ),
  },
];

export default function SwapDeck() {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setRevealed(true);
      return;
    }
    setRevealed(false);
    const t = setTimeout(() => setRevealed(true), REVEAL_MS);
    return () => clearTimeout(t);
  }, [active, reduced]);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    onVis();
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mb-3 text-xs font-bold tracking-[0.09em] text-ink/60 uppercase">
        Lo que pasa todas las semanas
      </div>

      <div className="deck">
        {CARDS.map((c, i) => {
          const rel = (i - active + CARDS.length) % CARDS.length;
          const pos = rel === 0 ? "0" : rel <= 2 ? String(rel) : rel === CARDS.length - 1 ? "out" : "3";
          return (
            <article
              key={c.said}
              className={`deck-card ${rel === 0 && revealed ? "is-done" : ""}`}
              data-pos={pos}
              aria-hidden={rel !== 0}
            >
              <p className="text-[19px] leading-[1.32] font-medium text-[#4d4941]">&ldquo;{c.said}&rdquo;</p>
              <div className="mt-[7px] text-xs font-semibold text-ink-faint">{c.who}</div>

              <div className="deck-stage">
                <div className="deck-scraps">{c.scraps}</div>
                <div className="deck-after">
                  <div className="mb-2.5 flex items-center gap-2.5">
                    <span className={`flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[9px] ${c.tone}`}>
                      <span className="h-[15px] w-[15px]">{Icon[c.icon]}</span>
                    </span>
                    <span className="font-heading text-[15.5px] leading-tight font-extrabold">{c.title}</span>
                  </div>
                  <p className="mb-3 text-[13px] text-ink-muted">{c.desc}</p>
                  {c.demo}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-[18px] flex items-center gap-[7px]">
        {CARDS.map((c, i) => (
          <button
            key={c.said}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Ver: ${c.said}`}
            className="prog"
          >
            <span className="prog-track">
              <span
                key={i === active ? `run-${active}` : `idle-${i}`}
                className="prog-fill"
                data-state={i < active ? "done" : i === active && !reduced ? "run" : "idle"}
                style={{
                  animationDuration: `${CARD_MS}ms`,
                  animationPlayState: paused ? "paused" : "running",
                }}
                onAnimationEnd={() => {
                  if (i === active) setActive((a) => (a + 1) % CARDS.length);
                }}
              />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
