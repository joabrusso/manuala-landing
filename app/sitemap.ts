import type { MetadataRoute } from "next";
import { SITE_URL, PRODUCT_LINKS, SOLUTION_LINKS } from "@/lib/nav";
import { CATEGORIES, getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/precios",
    "/contacto",
    "/blog",
    ...PRODUCT_LINKS.map((l) => l.href),
    ...SOLUTION_LINKS.map((l) => l.href),
    ...CATEGORIES.map((c) => `/blog/categoria/${c.slug}`),
  ];

  const staticEntries = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const postEntries = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticEntries, ...postEntries];
}
