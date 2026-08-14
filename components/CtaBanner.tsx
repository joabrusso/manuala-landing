import { APP_URL, CONTACT_EMAIL } from "@/lib/nav";
import Spark from "@/components/Spark";

export default function CtaBanner({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-paper-0 px-6 py-20 sm:py-28">
      <div className="relative mx-auto flex max-w-6xl flex-wrap items-center gap-10 overflow-hidden rounded-[2.5rem] bg-mustard px-8 py-14 sm:px-14">
        <Spark className="pointer-events-none absolute top-8 right-10 h-7 w-7 rotate-12 text-ink/70" />
        <img
          src="/illustrations/cta-highfive.svg"
          alt=""
          className="mx-auto hidden w-full max-w-xs shrink-0 sm:block lg:max-w-sm"
        />
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">{title}</h2>
          <p className="mt-3 text-ink/80">{subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href={APP_URL}
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-ink-muted"
            >
              Empezar gratis
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-full border-2 border-ink px-7 py-3.5 text-sm font-semibold hover:bg-ink/5"
            >
              Hablar con nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
