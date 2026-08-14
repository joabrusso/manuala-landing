import type { ReactNode } from "react";
import { APP_URL } from "@/lib/nav";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  illustration,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  illustration?: string;
}) {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-12 px-6 lg:flex-nowrap">
        <div className="max-w-xl">
          <p className="mb-4 inline-block rounded-full bg-mustard-soft px-3 py-1 text-xs font-bold tracking-wide text-mustard-ink uppercase">
            {eyebrow}
          </p>
          <h1 className="font-heading text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink/80">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={APP_URL}
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white hover:bg-ink-muted"
            >
              Empezar gratis
            </a>
          </div>
        </div>
        {illustration && <img src={illustration} alt="" className="ml-auto hidden w-full max-w-sm shrink-0 lg:block" />}
      </div>
    </section>
  );
}
