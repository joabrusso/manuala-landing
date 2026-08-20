import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BenefitList from "@/components/BenefitList";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Documentación para Logística — Manuala",
  description:
    "Software de documentación de procesos para depósitos y centros de distribución: picking, empaque y recepción de mercadería, con seguimiento en tiempo real.",
};

const BENEFITS = [
  {
    title: "Un proceso, no la memoria de cada operador",
    body: "Documentás cómo se arma un pedido o se recibe mercadería una sola vez, y queda igual para el turno mañana, tarde y noche — no depende de quién esté ese día.",
  },
  {
    title: "Funciona aunque el wifi del depósito falle",
    body: "El modo offline guarda lo que el operador va completando y lo sincroniza solo cuando vuelve la conexión, sin perder el progreso a mitad de un proceso.",
  },
  {
    title: "Sabés en qué paso quedó cada uno",
    body: "El panel en vivo del encargado muestra quién está ejecutando qué proceso ahora mismo, sin tener que caminar el depósito preguntando.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Logística y distribución"
        title="Menos «así no era como me explicaron»"
        subtitle="Picking, empaque, recepción de mercadería: procesos claros para cada operador, con evidencia de que se siguieron los pasos."
      />
      <BenefitList items={BENEFITS} />
      <CtaBanner
        title="Documentá tu próxima recepción de mercadería"
        subtitle="El primero te lleva diez minutos. Sin tarjeta de crédito."
      />
    </main>
  );
}
