import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contacto — Manuala",
  description: "Escribinos y te contestamos. También podés mandarnos un mail directo a info@manuala.app.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Contacto"
        title="Escribinos, te contestamos"
        subtitle={`¿Tenés dudas sobre un plan o querés ver cómo se implementaría en tu equipo? Contanos y te respondemos. También podés escribirnos directo a ${CONTACT_EMAIL}.`}
      />

      <section className="bg-paper-0 py-16 sm:py-20">
        <div className="mx-auto max-w-lg px-6">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
