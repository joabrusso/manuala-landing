import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contacto — Manuala",
  description: "Escribinos y te contestamos. También podés mandarnos un mail directo a info@manuala.app.",
};

export default function Page() {
  return (
    <main>
      {/* Texto y formulario lado a lado, no apilados -- todo a la vista sin
          scrollear. No reusa PageHero porque ese componente reserva el lado
          derecho para una ilustración, y acá ese lugar lo ocupa el form. */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="max-w-xl">
              <p className="mb-4 inline-block rounded-full bg-mustard-soft px-3 py-1 text-xs font-bold tracking-wide text-mustard-ink uppercase">
                Contacto
              </p>
              <h1 className="font-heading text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl">
                Escribinos, te contestamos
              </h1>
              <p className="mt-6 max-w-md text-lg text-ink/80">
                ¿Tenés dudas sobre un plan o querés ver cómo se implementaría en tu equipo? Contanos y te respondemos.
              </p>
              <p className="mt-4 text-sm text-ink-muted">
                También podés escribirnos directo a{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-ink underline">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
