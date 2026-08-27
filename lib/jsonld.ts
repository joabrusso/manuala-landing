import { CONTACT_EMAIL, SITE_URL } from "@/lib/nav";

export const DESCRIPTION =
  "Grabá la pantalla, subí un documento o contale el proceso a la IA: Manuala arma el instructivo, lo asigna a tu equipo y controla que lo cumplan. Documentación de procesos y capacitación de empleados en una sola plataforma. Prueba gratis, sin tarjeta.";

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

const faqJsonLd = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es la alternativa a Trainual para equipos en LatAm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manuala es una alternativa a Trainual pensada para equipos en LatAm: documentás SOPs, capacitás a tu equipo y controlás el cumplimiento, con un asistente de IA que responde en base a tus propios procesos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo genero un SOP sin redactarlo a mano?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manuala acepta tres formas de entrada: grabación de pantalla, un documento (PDF o Word), o contarle el proceso a la IA por chat. Elegís una, y Manuala arma el instructivo estructurado automáticamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta Manuala?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Starter $59/mes (10 usuarios), Growth $129/mes (30 usuarios), Scale $249/mes (100 usuarios). Sin contrato, empezás gratis sin tarjeta de crédito.",
      },
    },
  ],
};

export const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationJsonLd, softwareApplicationJsonLd, faqJsonLd],
};
