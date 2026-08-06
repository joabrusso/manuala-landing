import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BenefitList from "@/components/BenefitList";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Extensión de Chrome — Manuala",
  description:
    "La extensión de Chrome de Manuala graba tus clicks en cualquier web app y arma el SOP solo, con las capturas reales de cada paso.",
};

const BENEFITS = [
  {
    title: "Ves cómo se arma en vivo",
    body: "Un panel al costado de la pantalla muestra cada paso capturado en tiempo real, mientras hacés el proceso normalmente.",
  },
  {
    title: "Funciona en cualquier web app",
    body: "No hace falta ninguna integración: activás la grabación en la pestaña donde trabajás — CRM, ERP, planillas, lo que sea — y listo.",
  },
  {
    title: "Nunca guarda lo que tipeás",
    body: "Solo registra que completaste un campo y su nombre, nunca el valor. Los campos de contraseña u otros datos sensibles se ignoran directo.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Producto"
        title="Documentá haciendo click, no escribiendo"
        subtitle="La extensión de Chrome de Manuala graba lo que hacés en cualquier web app y arma el SOP con las capturas reales de cada paso."
        illustration="/illustrations/page-extension.svg"
      />
      <BenefitList items={BENEFITS} />
      <CtaBanner
        title="Dejá de escribir el proceso a mano"
        subtitle="Grabalo mientras lo hacés, la IA arma el resto."
      />
    </main>
  );
}
