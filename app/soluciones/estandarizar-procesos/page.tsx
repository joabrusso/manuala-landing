import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BenefitList from "@/components/BenefitList";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Estandarizar procesos — Soluciones — Manuala",
  description: "Un solo lugar con la versión vigente de cada proceso, en vez de versiones sueltas en Drive, WhatsApp o la cabeza de alguien.",
};

const BENEFITS = [
  {
    title: "Una sola versión vigente",
    body: "Cada proceso tiene un único SOP publicado. Se acabaron las versiones sueltas en Drive, PDFs viejos dando vueltas o el clásico \"preguntale a Fernanda\".",
  },
  {
    title: "Estados claros para cada SOP",
    body: "Publicado, borrador o archivado — se distingue de un vistazo cuál es la versión que tu equipo tiene que seguir hoy, y cuál quedó vieja.",
  },
  {
    title: "Organizados por rol, fáciles de encontrar",
    body: "Cada SOP vive donde tiene que vivir: dentro del rol que le corresponde, con portada y orden, para que encontrarlo no dependa de acordarse el nombre exacto del archivo.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Soluciones"
        title="Que todos hagan las cosas de la misma forma"
        subtitle="Un solo lugar con la versión vigente de cada proceso, no versiones sueltas repartidas entre Drive, WhatsApp y la memoria de alguien."
        illustration="/illustrations/page-guidelines.svg"
      />
      <BenefitList items={BENEFITS} />
      <CtaBanner
        title="Ordená el conocimiento de tu equipo"
        subtitle="Un lugar, una versión, sin ambigüedad sobre cómo se hacen las cosas."
      />
    </main>
  );
}
