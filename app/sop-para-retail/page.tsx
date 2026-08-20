import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BenefitList from "@/components/BenefitList";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Documentación para Retail — Manuala",
  description:
    "Software de documentación de procesos para tiendas: capacitá vendedores nuevos rápido y que todas las sucursales trabajen igual, con evidencia de que se cumplió.",
};

const BENEFITS = [
  {
    title: "Vendedores nuevos, operativos más rápido",
    body: "Apenas alguien entra a un rol (cajero, vendedor de piso), ya tiene disponibles los SOPs que le corresponden, con quiz de comprensión antes de soltarlo solo en el piso.",
  },
  {
    title: "El mismo proceso en todas las sucursales",
    body: "Un cambio en el SOP se ve reflejado en todas las sucursales al instante — no hace falta mandar un mensaje a cada encargado esperando que lo reenvíe.",
  },
  {
    title: "Evidencia de que se hizo, no solo que se leyó",
    body: "En los pasos que lo necesitan (cómo quedó armada una vidriera, un control de stock) pedís evidencia fotográfica, no solo un botón de \"completado\".",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Retail y comercio"
        title="Que cada sucursal haga las cosas igual"
        subtitle="Aperturas de caja, atención al cliente, reposición: documentá cómo se hace una vez y que todas las sucursales lo sigan igual, sin depender de que alguien nuevo pregunte."
      />
      <BenefitList items={BENEFITS} />
      <CtaBanner
        title="Empezá con el proceso de tu próxima apertura"
        subtitle="El primero te lleva diez minutos. Sin tarjeta de crédito."
      />
    </main>
  );
}
