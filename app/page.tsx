import CtaBanner from "@/components/CtaBanner";
import Blob from "@/components/Blob";
import Spark from "@/components/Spark";
import FeatureIcon from "@/components/FeatureIcon";
import { APP_URL } from "@/lib/nav";

const FEATURES = [
  {
    tone: "coral",
    tag: "Captura",
    illustration: "/illustrations/feature-record.svg",
    title: "Capturá el proceso",
    body: "Grabás la pantalla haciendo el proceso una vez; la IA arma los pasos, con las capturas reales incluidas.",
  },
  {
    tone: "berry",
    tag: "Asignación",
    illustration: "/illustrations/feature-assign.svg",
    title: "Asigná en un clic",
    body: "Por rol o por persona, con vencimiento y un quiz de comprensión si hace falta confirmar que quedó claro.",
  },
  {
    tone: "mustard",
    tag: "Trazabilidad",
    illustration: "/illustrations/feature-track.svg",
    title: "Seguí el cumplimiento",
    body: "Progreso real por empleado, no una carpeta compartida en Drive que nadie termina de leer.",
  },
] as const;

const STEPS = [
  { title: "Grabás o subís", body: "La pantalla haciendo el proceso, o un Word / Excel / PDF que ya tengas." },
  { title: "La IA arma los pasos", body: "Con las capturas del proceso ya insertadas donde corresponden." },
  { title: "Asignás", body: "A un rol completo o a una persona puntual, con fecha de vencimiento." },
  { title: "Controlás", body: "Quién lo leyó, quién lo completó y quién aprobó el quiz." },
] as const;

const toneClasses: Record<string, string> = {
  coral: "bg-coral-soft text-coral",
  berry: "bg-berry-soft text-berry",
  mustard: "bg-mustard-soft text-mustard-ink",
};

const MORE_FEATURES = [
  {
    icon: "template",
    tone: "coral",
    title: "Plantillas por industria",
    body: "Empezá con plantillas ya armadas para tu rubro, no una hoja en blanco.",
  },
  {
    icon: "branch",
    tone: "berry",
    title: "Pasos condicionales",
    body: '"Si pasó X, hacé Y": procesos que se adaptan según la respuesta.',
  },
  {
    icon: "quiz",
    tone: "mustard",
    title: "Quizzes con IA",
    body: "Generá un quiz de comprensión en segundos para confirmar que quedó claro.",
  },
  {
    icon: "calendar",
    tone: "coral",
    title: "Vencimientos",
    body: "Ponele fecha límite a cada SOP; el calendario avisa antes de que venza.",
  },
  {
    icon: "link",
    tone: "berry",
    title: "Compartí con un link",
    body: "Un SOP puntual con URL pública, sin pedirle login a nadie.",
  },
  {
    icon: "upload",
    tone: "mustard",
    title: "Subí lo que ya tenés",
    body: "Grabación de pantalla, Word, Excel o PDF — no hace falta empezar de cero.",
  },
  {
    icon: "extension",
    tone: "coral",
    title: "Capturá con la extensión",
    body: "Grabá tus clicks en cualquier web app — CRM, ERP, lo que uses — y Manuala arma el SOP solo, con las capturas de cada paso.",
  },
] as const;

export default function LandingPage() {
  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-mustard">
        <Blob className="pointer-events-none absolute -top-20 -right-10 h-72 w-72 text-white/25" />
        <Blob className="pointer-events-none absolute -bottom-10 left-[6%] h-40 w-40 rotate-45 text-ink/5" />

        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-20 sm:pb-28">
          <div className="flex flex-wrap items-center gap-12 lg:flex-nowrap">
            <div className="max-w-xl">
              <p className="mb-4 inline-block rounded-full bg-white/40 px-3 py-1 text-xs font-bold tracking-wide uppercase">
                Procesos documentados con IA
              </p>
              <h1 className="font-heading text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Documentá{" "}
                <span className="inline-block -rotate-2 rounded-lg bg-ink px-2 text-mustard">una vez</span>, dejá de
                explicar mil.
              </h1>
              <p className="mt-6 max-w-md text-lg text-ink/80">
                Grabá la pantalla, subí un Word o contale el proceso a la IA — Manuala arma el SOP, lo asigna a tu
                equipo y controla que lo cumplan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={APP_URL}
                  className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-ink-muted"
                >
                  Empezar gratis
                </a>
                <a
                  href="#como-funciona"
                  className="rounded-full border-2 border-ink px-7 py-3.5 text-sm font-semibold hover:bg-ink/5"
                >
                  Ver cómo funciona
                </a>
              </div>
            </div>
            <img
              src="/illustrations/hero-process.svg"
              alt=""
              className="ml-auto hidden w-full max-w-md shrink-0 lg:block"
            />
          </div>
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section id="producto" className="bg-paper-0 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative inline-block">
            <Spark className="pointer-events-none absolute -top-5 -left-8 h-6 w-6 -rotate-12 text-coral" />
            <h2 className="font-heading max-w-md text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              El know-how de tu equipo, en un solo lugar
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="overflow-hidden rounded-3xl border border-ink/10 shadow-[0_1px_2px_rgba(28,27,24,0.04),0_8px_24px_rgba(28,27,24,0.05)]"
              >
                <div className="flex h-40 items-center justify-center bg-paper">
                  <img src={f.illustration} alt="" className="h-32 w-auto" />
                </div>
                <div className="p-7">
                  <span
                    className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase ${toneClasses[f.tone]}`}
                  >
                    {f.tag}
                  </span>
                  <h3 className="font-heading mt-3 text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{f.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {MORE_FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${toneClasses[f.tone]}`}
                >
                  <FeatureIcon name={f.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Cómo funciona (oscura, split) ---------- */}
      <section id="como-funciona" className="bg-ink py-20 text-paper-0 sm:py-28">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6 lg:flex-nowrap">
          <div className="max-w-md">
            <p className="mb-3 text-xs font-bold tracking-wide text-mustard uppercase">Cómo funciona</p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              De la pantalla al proceso documentado, en minutos
            </h2>
            <ul className="mt-8 space-y-5">
              {STEPS.map((s) => (
                <li key={s.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mustard text-xs font-bold text-ink">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-0.5 text-sm text-white/60">{s.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-md rounded-3xl bg-paper-0 p-8 lg:mx-0">
            <img src="/illustrations/how-it-works.svg" alt="" className="w-full" />
          </div>
        </div>
      </section>

      {/* ---------- Manuala AI ---------- */}
      <section className="bg-paper-0 py-20 sm:py-28">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6 lg:flex-nowrap lg:flex-row-reverse">
          <div className="max-w-md">
            <p className="mb-3 text-xs font-bold tracking-wide text-mustard-ink uppercase">Manuala AI</p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Preguntale a tus procesos, no busques en carpetas
            </h2>
            <p className="mt-4 text-ink-muted">
              Un chat con IA que responde en base a tus SOPs reales — no inventa, busca en lo que ya publicaste. Con
              memoria de la conversación y tus propias reglas de negocio.
            </p>
            <a
              href="/producto/chat"
              className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-ink-muted"
            >
              Conocé Manuala AI
            </a>
          </div>
          <img
            src="/illustrations/page-chat.svg"
            alt=""
            className="mx-auto hidden w-full max-w-md shrink-0 lg:block"
          />
        </div>
      </section>

      {/* ---------- Caso de éxito (split, mostaza pálido) ---------- */}
      <section className="bg-mustard-soft py-20 sm:py-28">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-14 px-6">
          <div className="max-w-md">
            <h2 className="font-heading text-2xl font-extrabold text-balance sm:text-3xl">
              Menos &quot;preguntale a Fernanda&quot;
            </h2>
            <p className="mt-3 text-mustard-ink">
              Los equipos que pasan sus procesos a Manuala reducen a la mitad el tiempo que les toma poner a punto a
              alguien nuevo.
            </p>
            <a
              href={APP_URL}
              className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-ink-muted"
            >
              Empezar gratis
            </a>
          </div>
          <div className="flex w-56 flex-col items-center gap-2 rounded-3xl bg-paper-0 px-8 py-10 text-center shadow-[0_1px_2px_rgba(28,27,24,0.04),0_8px_24px_rgba(28,27,24,0.05)]">
            <img src="/illustrations/growth-stat.svg" alt="" className="h-28 w-auto" />
            <div className="font-heading mt-2 text-5xl font-extrabold text-ink">50%</div>
            <div className="text-sm text-ink-muted">menos tiempo de onboarding</div>
          </div>
        </div>
      </section>

      <CtaBanner title="Empezá a documentar hoy" subtitle="Sin tarjeta de crédito. Tu primer proceso, listo en minutos." />
    </main>
  );
}
