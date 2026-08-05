import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manuala — Documentá tus procesos con IA",
  description:
    "Grabá la pantalla, subí un documento o contale el proceso a la IA. Manuala arma el SOP, lo asigna a tu equipo y controla que lo cumplan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
