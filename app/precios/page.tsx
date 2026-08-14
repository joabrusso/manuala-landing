import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PricingCard from "@/components/PricingCard";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Precios — Manuala",
  description: "Elegí el plan según el tamaño de tu equipo. Empezá gratis, sin tarjeta de crédito.",
};

const CORE_FEATURES = [
  { label: "Pasos condicionales", included: true },
  { label: "Links entre SOPs", included: true },
  { label: "Knowledge graph", included: true },
  { label: "Administradores por categoría", included: true },
  { label: "Grabador de pantalla (usa créditos)", included: true },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Precios"
        title="Un plan para cada tamaño de equipo"
        subtitle="Todos los planes incluyen el asistente de IA, pasos condicionales y knowledge graph. Empezá gratis, sin tarjeta de crédito."
      />

      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <PricingCard
              name="Starter"
              price="$59"
              seatsIncluded="10"
              extraSeatPrice="$8"
              ctaLabel="Empezar gratis"
              ctaHref="https://use.manuala.app"
              groups={[
                {
                  label: "Inteligencia artificial",
                  items: [
                    { label: "30 créditos de IA por mes (SOPs, quizzes, grabación → SOP)", included: true },
                    { label: "Asistente de IA sin límite de créditos", included: true },
                  ],
                },
                { label: "Funciones incluidas", items: CORE_FEATURES },
                {
                  label: "Avanzado",
                  items: [
                    { label: "Acceso a la API", included: false },
                    { label: "SSO", included: false },
                    { label: "Historial de versiones", included: false },
                  ],
                },
                { label: "Soporte", items: [{ label: "Soporte por email", included: true }] },
              ]}
            />

            <PricingCard
              name="Growth"
              price="$129"
              seatsIncluded="30"
              extraSeatPrice="$6"
              ctaLabel="Empezar gratis"
              ctaHref="https://use.manuala.app"
              highlighted
              groups={[
                {
                  label: "Inteligencia artificial",
                  items: [
                    { label: "150 créditos de IA por mes (SOPs, quizzes, grabación → SOP)", included: true },
                    { label: "Asistente de IA sin límite de créditos", included: true },
                  ],
                },
                { label: "Funciones incluidas", items: CORE_FEATURES },
                {
                  label: "Avanzado",
                  items: [
                    { label: "Acceso a la API", included: false },
                    { label: "SSO", included: false },
                    { label: "Historial de versiones", included: false },
                  ],
                },
                { label: "Soporte", items: [{ label: "Soporte por email", included: true }] },
              ]}
            />

            <PricingCard
              name="Scale"
              price="$249"
              seatsIncluded="100"
              extraSeatPrice="$4"
              ctaLabel="Hablar con nosotros"
              ctaHref="mailto:info@manuala.app"
              groups={[
                {
                  label: "Inteligencia artificial",
                  items: [
                    { label: "Créditos de IA ilimitados (SOPs, quizzes, grabación → SOP)", included: true },
                    { label: "Asistente de IA sin límite de créditos", included: true },
                  ],
                },
                { label: "Funciones incluidas", items: CORE_FEATURES },
                {
                  label: "Avanzado",
                  items: [
                    { label: "Acceso a la API", included: true },
                    { label: "SSO", included: true },
                    { label: "Historial de versiones", included: true },
                  ],
                },
                { label: "Soporte", items: [{ label: "Soporte prioritario", included: true }] },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBanner
        title="¿No sabés qué plan elegir?"
        subtitle="Contanos cuántos son en tu equipo y te ayudamos a encontrar el plan que te conviene."
      />
    </main>
  );
}
