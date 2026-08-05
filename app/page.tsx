const APP_URL = "https://use.manuala.app";

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

export default function LandingPage() {
  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-mustard">
        <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-white/25" />
        <div className="pointer-events-none absolute bottom-0 left-[8%] h-32 w-32 rounded-full bg-ink/5" />

        <div className="relative mx-auto max-w-6xl px-6 pt-8 pb-20 sm:pt-10 sm:pb-28">
          <nav className="mb-14 flex items-center justify-between">
            <span className="font-heading text-lg font-extrabold">Manuala</span>
            <div className="hidden items-center gap-8 text-sm font-semibold sm:flex">
              <a href="#producto" className="hover:underline">
                Producto
              </a>
              <a href="#como-funciona" className="hover:underline">
                Cómo funciona
              </a>
              <a href={APP_URL} className="hover:underline">
                Iniciar sesión
              </a>
            </div>
            <a
              href={APP_URL}
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink-muted"
            >
              Empezar gratis
            </a>
          </nav>

          <div className="flex flex-wrap items-center gap-12 lg:flex-nowrap">
            <div className="max-w-xl">
              <p className="mb-4 inline-block rounded-full bg-white/40 px-3 py-1 text-xs font-bold tracking-wide uppercase">
                Para pymes de retail y logística
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
          <h2 className="font-heading max-w-md text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            El know-how de tu equipo, en un solo lugar
          </h2>
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

      {/* ---------- Caso de éxito (split, mostaza pálido) ---------- */}
      <section className="bg-mustard-soft py-20 sm:py-28">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-10 px-6">
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
          <div className="text-right">
            <div className="font-heading text-6xl font-extrabold text-ink">50%</div>
            <div className="text-sm text-mustard-ink">menos tiempo de onboarding</div>
          </div>
        </div>
      </section>

      {/* ---------- CTA final (banner mostaza) ---------- */}
      <section className="bg-paper-0 px-6 py-20 sm:py-28">
        <div className="relative mx-auto flex max-w-6xl flex-wrap items-center gap-10 overflow-hidden rounded-[2.5rem] bg-mustard px-8 py-14 sm:px-14">
          <img
            src="/illustrations/cta-highfive.svg"
            alt=""
            className="mx-auto hidden w-full max-w-xs shrink-0 sm:block lg:max-w-sm"
          />
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Empezá a documentar hoy
            </h2>
            <p className="mt-3 text-ink/80">Sin tarjeta de crédito. Tu primer proceso, listo en minutos.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href={APP_URL}
                className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-ink-muted"
              >
                Empezar gratis
              </a>
              <a
                href="mailto:hola@manuala.app"
                className="rounded-full border-2 border-ink px-7 py-3.5 text-sm font-semibold hover:bg-ink/5"
              >
                Hablar con nosotros
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 py-10 text-center text-sm text-ink-faint">
        <p>© {new Date().getFullYear()} Manuala</p>
      </footer>
    </main>
  );
}
