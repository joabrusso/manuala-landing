import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

// Sin `runtime = "edge"` a propósito: getPostBySlug usa node:fs/node:path
// para leer el .mdx, y el runtime edge no soporta esos built-ins de Node.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return [{ id: slug, alt: post?.title ?? "Manuala" }];
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "Manuala";

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
          Blog de Manuala
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            maxWidth: 980,
            fontSize: 58,
            lineHeight: 1.2,
            fontWeight: 800,
            letterSpacing: -1,
            color: "#1c1b18",
          }}
        >
          {title}
        </div>
      </div>
    ),
    { ...size }
  );
}
