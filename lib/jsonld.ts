import { CONTACT_EMAIL, SITE_URL } from "@/lib/nav";

export const DESCRIPTION =
  "Documentá los procesos de tu negocio con IA y capacitá a tu equipo: grabá la pantalla, subí un documento o contale a la IA. Prueba gratis, sin tarjeta.";

// Fecha del último cambio de contenido relevante para SEO (title, description,
// FAQ). Actualizar a mano cuando se toque alguno de esos textos.
export const CONTENT_LAST_MODIFIED = "2026-08-31";

const organizationJsonLd = {
  "@type": "Organization",
  name: "Manuala",
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
  description: DESCRIPTION,
  sameAs: ["https://www.linkedin.com/company/manuala/"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: CONTACT_EMAIL,
  },
};

const softwareApplicationJsonLd = {
  "@type": "SoftwareApplication",
  name: "Manuala",
  description: DESCRIPTION,
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  dateModified: CONTENT_LAST_MODIFIED,
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      priceCurrency: "USD",
      price: "59",
      description: "Hasta 10 usuarios, 30 créditos de IA por mes",
    },
    {
      "@type": "Offer",
      name: "Growth",
      priceCurrency: "USD",
      price: "129",
      description: "Hasta 30 usuarios, 150 créditos de IA por mes",
    },
    {
      "@type": "Offer",
      name: "Scale",
      priceCurrency: "USD",
      price: "249",
      description: "Hasta 100 usuarios, créditos de IA ilimitados",
    },
  ],
};

// Fuente única para el FAQ: de acá sale tanto el JSON-LD como el bloque
// visible en la página (antes estaban duplicados y el schema no tenía
// contenido visible que lo respalde -- Google marca eso como mala práctica).
export const FAQ_ITEMS = [
  {
    question: "¿Cuál es la alternativa a Trainual para equipos en LatAm?",
    answer:
      "Manuala es una alternativa a Trainual pensada para equipos en LatAm: documentás SOPs, capacitás a tu equipo y controlás el cumplimiento, con un asistente de IA que responde en base a tus propios procesos.",
  },
  {
    question: "¿Cómo genero un SOP sin redactarlo a mano?",
    answer:
      "Manuala acepta tres formas de entrada: grabación de pantalla, un documento (PDF o Word), o contarle el proceso a la IA por chat. Elegís una, y Manuala arma el instructivo estructurado automáticamente.",
  },
  {
    question: "¿Cuánto cuesta Manuala?",
    answer:
      "Starter $59/mes (10 usuarios), Growth $129/mes (30 usuarios), Scale $249/mes (100 usuarios). Sin contrato, empezás gratis sin tarjeta de crédito.",
  },
] as const;

const faqJsonLd = {
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationJsonLd, softwareApplicationJsonLd, faqJsonLd],
};
