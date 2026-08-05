import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BenefitList from "@/components/BenefitList";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Cumplimiento — Soluciones — Manuala",
  description: "Progreso real por empleado: quién leyó, quién completó y quién aprobó el quiz de cada SOP.",
};

const BENEFITS = [
  {
    title: "Progreso real, no una suposición",
    body: "Sabés exactamente quién leyó el SOP, quién lo completó y quién aprobó el quiz — no una carpeta compartida donde nadie sabe si alguien la abrió.",
  },
  {
    title: "Vencimientos a la vista",
    body: "El calendario de cada empleado marca en rojo lo que está por vencer, así el seguimiento no depende de acordarse de preguntar.",
  },
  {
    title: "Historial por SOP y por persona",
    body: "Para una auditoría o simplemente para saber en qué está cada quien, tenés el historial completo sin tener que ir a buscarlo a mano.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Soluciones"
        title="Sabé quién hizo qué, sin perseguir a nadie"
        subtitle="Progreso real por empleado: quién leyó, quién completó y quién aprobó el quiz de cada proceso."
        illustration="/illustrations/feature-track.svg"
      />
      <BenefitList items={BENEFITS} />
      <CtaBanner
        title="Controlá el cumplimiento sin perseguir a nadie"
        subtitle="Vencimientos, progreso y quiz — todo en un solo lugar por empleado."
      />
    </main>
  );
}
