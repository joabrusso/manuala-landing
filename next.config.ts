import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Todas las paginas menos los assets internos de Next.
        source: "/((?!_next).*)",
        headers: [
          {
            // RFC 8288: apunta a los dos recursos de discovery que ya
            // publicamos (llms.txt no es una relacion IANA registrada,
            // pero es la convencion que estan adoptando los answer
            // engines -- sitemap si esta en el registro de IANA).
            key: "Link",
            value: '</llms.txt>; rel="llms-txt", </sitemap.xml>; rel="sitemap"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
