import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BenefitList from "@/components/BenefitList";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Onboarding — Soluciones — Manuala",
  description: "Que la gente nueva arranque sola: SOPs asignados por rol, con vencimiento y quiz de comprensión.",
};

const BENEFITS = [
  {
    title: "Los SOPs del rol, asignados solos",
    body: "Cuando alguien nuevo entra a un rol, ya tiene disponibles todos los procesos que le corresponden — no dependés de que alguien se acuerde de mandárselos.",
  },
  {
    title: "Un orden claro, con vencimientos",
    body: "Cada SOP puede tener su propio plazo, así la persona nueva sabe qué tiene que leer primero y para cuándo, en vez de recibir todo junto sin prioridad.",
  },
  {
    title: "Confirmás que entendió, no solo que abrió el link",
    body: "El quiz de comprensión te dice si la persona nueva realmente entendió el proceso, no solo que pasó por la pantalla.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Soluciones"
        title="Que la gente nueva arranque sola"
        subtitle="Asigná automáticamente los procesos de cada rol a quien se suma al equipo, con vencimiento y quiz de comprensión."
        illustration="/illustrations/page-onboarding.svg"
      />
      <BenefitList items={BENEFITS} />
      <CtaBanner
        title="Menos tiempo explicando, más tiempo trabajando"
        subtitle="El próximo que entre a tu equipo, que arranque con los SOPs ya asignados."
      />
    </main>
  );
}
