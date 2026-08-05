import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BenefitList from "@/components/BenefitList";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Manuala AI — Manuala",
  description: "Preguntale a tus procesos en lenguaje natural. Manuala AI busca en tus SOPs reales y responde con memoria de la conversación.",
};

const BENEFITS = [
  {
    title: "Busca en tus SOPs reales, no inventa",
    body: "Cada respuesta se arma buscando en el contenido real de tus procesos publicados, no en una idea genérica de cómo debería funcionar tu empresa.",
  },
  {
    title: "Con memoria de la conversación",
    body: "Podés seguir preguntando sobre lo mismo sin repetir contexto — cada conversación queda guardada con su propio historial.",
  },
  {
    title: "Reglas propias de tu empresa",
    body: "Definís reglas y datos particulares tuyos (Key Definitions) que se inyectan en cada respuesta, así el asistente contesta con tu forma de trabajar, no con supuestos genéricos.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Producto"
        title="Preguntale a tus procesos, no busques en carpetas"
        subtitle="Manuala AI responde en base a tus SOPs reales, con memoria de la conversación y tus propias reglas de negocio."
        illustration="/illustrations/page-chat.svg"
      />
      <BenefitList items={BENEFITS} />
      <CtaBanner
        title="Dejá de repetir la misma explicación"
        subtitle="Con Manuala AI, tu equipo pregunta y encuentra la respuesta sola."
      />
    </main>
  );
}
