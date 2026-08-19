import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Manuala — Documentá tus procesos y capacitá a tu equipo con IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          backgroundColor: "#f8c94a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            alignItems: "center",
            padding: "10px 20px",
            borderRadius: 999,
            backgroundColor: "rgba(255,255,255,0.4)",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: "#1c1b18",
          }}
        >
          Procesos documentados con IA
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: -2,
            color: "#1c1b18",
          }}
        >
          manuala
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            maxWidth: 820,
            fontSize: 34,
            lineHeight: 1.35,
            fontWeight: 500,
            color: "#1c1b18",
          }}
        >
          Documentá una vez, dejá de explicar mil — SOPs, capacitación y control de cumplimiento con IA.
        </div>
      </div>
    ),
    { ...size }
  );
}
