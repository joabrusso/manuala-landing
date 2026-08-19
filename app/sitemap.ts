import type { MetadataRoute } from "next";
import { SITE_URL, PRODUCT_LINKS, SOLUTION_LINKS } from "@/lib/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/precios",
    "/contacto",
    ...PRODUCT_LINKS.map((l) => l.href),
    ...SOLUTION_LINKS.map((l) => l.href),
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
