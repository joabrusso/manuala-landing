import Blob from "@/components/Blob";
import CtaBanner from "@/components/CtaBanner";
import FeatureIcon from "@/components/FeatureIcon";
import SwapDeck from "@/components/SwapDeck";
import AskManuala from "@/components/AskManuala";
import { APP_URL } from "@/lib/nav";

const WAYS = [
  {
    icon: "upload",
    tone: "coral",
    title: "Grabás la pantalla",
    body: "Hacés el proceso como cualquier día. Manuala separa los pasos y mete las capturas donde van.",
  },
  {
    icon: "link",
    tone: "berry",
    title: "Extensión de Chrome",
    body: "Sobre el sistema que ya usás, registra qué botón tocaste. Nunca guarda lo que escribís.",
  },
  {
    icon: "template",
    tone: "mustard",
    title: "Lo que ya tenés escrito",
    body: "Subís ese Word, Excel o PDF y queda convertido en un proceso navegable.",
  },
] as const;

const MORE = [
  {
    icon: "branch",
    tone: "berry",
    title: "Pasos condicionales",
    body: "«Si pasó esto, hacé aquello»: se adapta según lo que responde quien lo sigue.",
  },
  {
    icon: "quiz",
    tone: "coral",
    title: "Quizzes con IA",
    body: "Preguntas generadas sobre el propio proceso, para confirmar que se entendió.",
  },
  {
    icon: "calendar",
    tone: "mustard",
    title: "Vencimientos",
    body: "Cada asignación tiene plazo y aparece en el calendario de las dos partes.",
  },
  {
    icon: "template",
    tone: "berry",
    title: "Plantillas por industria",
    body: "Empezás desde algo armado para tu rubro, no desde una hoja en blanco.",
  },
  {
    icon: "link",
    tone: "mustard",
    title: "Link público",
    body: "Compartís un proceso con alguien de afuera, sin que se cree una cuenta.",
  },
  {
    icon: "upload",
    tone: "coral",
    title: "Definiciones del negocio",
    body: "Tus reglas propias — montos, responsables, plazos — usadas al responder.",
  },
] as const;

const toneClasses: Record<string, string> = {
  coral: "bg-coral-soft text-coral",
  berry: "bg-berry-soft text-berry",
  mustard: "bg-mustard-soft text-mustard-ink",
};

export default function LandingPage() {
  return (
    <main>
      {/* ---------- Hero con el mazo de comparaciones ---------- */}
      <section className="relative overflow-hidden bg-mustard">
        <Blob className="pointer-events-none absolute -top-40 right-[32%] h-[380px] w-[380px] text-white/25" />
        <Blob className="pointer-events-none absolute -bottom-24 left-[3%] h-[200px] w-[200px] rotate-45 text-ink/5" />

        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-20 sm:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_468px]">
            <div>
              <h1 className="font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[56px]">
                Documentá{" "}
                <span className="inline-block -rotate-2 rounded-lg bg-ink px-2 text-mustard">una vez</span> dejá de
                explicar mil.
              </h1>
              <p className="mt-5 max-w-md text-lg text-ink/80">
                Grabás cómo se hace algo una sola vez. Manuala lo convierte en un instructivo con capturas, se lo asigna
                a quien corresponde y te muestra quién lo cumplió.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={APP_URL}
                  className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-ink-muted"
                >
                  Empezar gratis
                </a>
                <a
                  href="#entra"
                  className="rounded-full border-2 border-ink px-7 py-3.5 text-sm font-semibold hover:bg-ink/5"
                >
                  Ver cómo se arma
                </a>
              </div>
            </div>

            <SwapDeck />
          </div>
        </div>
      </section>

      {/* ---------- Manuala AI ---------- */}
      <section className="bg-ink py-20 text-paper-0 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold tracking-wide text-mustard uppercase">Manuala AI</p>
          <h2 className="font-heading mt-3 max-w-[22ch] text-3xl font-extrabold tracking-tight text-balance sm:text-[38px]">
            Cuando igual preguntan, no te preguntan a vos
          </h2>
          <p className="mt-3.5 max-w-[52ch] text-white/60">
            Responde con los procesos que tu equipo publicó y muestra de dónde sacó cada respuesta.
          </p>

          <AskManuala />

          <p className="mt-3.5 text-sm text-white/50">
            Si algo no está documentado lo dice, en vez de completarlo por su cuenta.
          </p>
        </div>
      </section>

      {/* ---------- Cómo entra el contenido ---------- */}
      <section id="entra" className="bg-paper-0 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-11 md:grid-cols-[1fr_260px]">
            <div>
              {/* El coral sobre blanco da 3,1:1 y esto es texto chico: va en
                  ink-muted, y el color de la seccion queda en los iconos. */}
              <p className="text-xs font-bold tracking-wide text-ink-muted uppercase">Sin escribir</p>
              <h2 className="font-heading mt-3 max-w-[20ch] text-3xl font-extrabold tracking-tight text-balance sm:text-[38px]">
                Nada de esto lo redactás vos
              </h2>
              <p className="mt-3.5 max-w-[48ch] text-ink-muted">
                Si documentar cuesta una tarde, no lo vas a hacer nunca. Manuala parte de algo que ya tenés o que ya
                estás haciendo.
              </p>
            </div>
            <img src="/illustrations/feature-record.svg" alt="" className="w-full max-w-[260px]" />
          </div>

          <div className="mt-11 grid gap-4 sm:grid-cols-3">
            {WAYS.map((w) => (
              <div key={w.title} className="rounded-2xl border border-ink/10 bg-paper p-6">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${toneClasses[w.tone]}`}>
                  <FeatureIcon name={w.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-heading mt-4 text-[17px] font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Lo que aparece después ---------- */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-11 md:grid-cols-[1fr_260px]">
            <div>
              <p className="text-xs font-bold tracking-wide text-ink-muted uppercase">Además</p>
              <h2 className="font-heading mt-3 max-w-[20ch] text-3xl font-extrabold tracking-tight text-balance sm:text-[38px]">
                Lo que aparece cuando el proceso ya existe
              </h2>
              <p className="mt-3.5 max-w-[48ch] text-ink-muted">
                Una vez que está escrito, deja de ser un documento y empieza a funcionar solo.
              </p>
            </div>
            <img src="/illustrations/feature-assign.svg" alt="" className="w-full max-w-[260px]" />
          </div>

          <div className="mt-11 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {MORE.map((m) => (
              <div key={m.title} className="flex gap-3.5">
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] ${toneClasses[m.tone]}`}>
                  <FeatureIcon name={m.icon} className="h-[17px] w-[17px]" />
                </div>
                <div>
                  <h3 className="font-heading text-[15.5px] font-bold">{m.title}</h3>
                  <p className="mt-1 text-[13.5px] text-ink-muted">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Empezá con un proceso"
        subtitle="El primero te lleva diez minutos. Sin tarjeta de crédito, y sin escribir una palabra."
      />
    </main>
  );
}
