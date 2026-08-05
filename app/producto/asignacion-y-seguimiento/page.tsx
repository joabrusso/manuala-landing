import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BenefitList from "@/components/BenefitList";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Asignación y seguimiento — Manuala",
  description: "Asigná cada SOP por rol o por persona, con vencimiento y un quiz de comprensión si hace falta confirmar que quedó claro.",
};

const BENEFITS = [
  {
    title: "Por rol completo o por persona puntual",
    body: "Asigná un SOP a todos los que ocupan un rol, o a una sola persona si es algo puntual. No hace falta repetir la asignación cada vez que entra alguien nuevo al rol.",
  },
  {
    title: "Con fecha de vencimiento",
    body: "Cada asignación puede tener un vencimiento propio. El calendario del empleado marca en rojo lo que está por vencer, así nadie se entera tarde.",
  },
  {
    title: "Quiz de comprensión, cuando hace falta",
    body: "Para los procesos donde no alcanza con que lo hayan leído, sumás un quiz corto que confirma que lo entendieron antes de darlo por completado.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Producto"
        title="Asigná el SOP correcto, a la persona correcta"
        subtitle="Por rol o por persona, con vencimiento y un quiz de comprensión si hace falta confirmar que quedó claro."
        illustration="/illustrations/feature-assign.svg"
      />
      <BenefitList items={BENEFITS} />
      <CtaBanner
        title="Dejá de perseguir a la gente para que lea el SOP"
        subtitle="Asigná, poné una fecha límite y Manuala se encarga del resto."
      />
    </main>
  );
}
