import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BenefitList from "@/components/BenefitList";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Documentación con IA — Manuala",
  description: "Grabá la pantalla o subí un documento que ya tengas. La IA arma el SOP paso a paso, con las capturas reales incluidas.",
};

const BENEFITS = [
  {
    title: "Grabás una vez, no escribís nada",
    body: "Grabás la pantalla haciendo el proceso como lo harías normalmente. Manuala extrae los frames relevantes y arma los pasos con las capturas reales ya insertadas donde corresponden.",
  },
  {
    title: "O subís lo que ya tenés",
    body: "Un Word, un Excel o un PDF con el procedimiento escrito. La IA lo lee y lo convierte en un SOP con la misma estructura clara, sin que tengas que grabar nada de nuevo.",
  },
  {
    title: "Revisás antes de publicar",
    body: "El SOP generado queda como borrador editable — vos decidís qué pasos ajustar, agregar una portada y recién ahí lo publicás para que el equipo lo vea.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Producto"
        title="De la pantalla al SOP, sin escribir nada"
        subtitle="Grabás el proceso o subís un documento que ya tenés. Manuala arma los pasos con la IA, capturas incluidas."
        illustration="/illustrations/feature-record.svg"
      />
      <BenefitList items={BENEFITS} />
      <CtaBanner
        title="Probá con tu primer proceso"
        subtitle="Grabá una pantalla o subí un documento — en minutos tenés el SOP armado."
      />
    </main>
  );
}
