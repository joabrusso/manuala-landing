import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

// Mismo criterio que SOLUTION_LINKS en lib/nav.ts -- alineado a los pilares
// de contenido que ya existen en la landing (/soluciones/*, /sop-*), para
// no inventar una taxonomía nueva sin relación con el resto del sitio.
export const CATEGORIES = [
  { slug: "onboarding", label: "Onboarding" },
  { slug: "estandarizacion", label: "Estandarización de procesos" },
  { slug: "cumplimiento", label: "Cumplimiento" },
  { slug: "retail", label: "Retail y comercio" },
  { slug: "logistica", label: "Logística y distribución" },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export function categoryLabel(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO (YYYY-MM-DD)
  category: CategorySlug;
  author: string;
}

export interface Post extends PostMeta {
  content: string; // MDX sin compilar
}

function readPostFile(fileName: string): Post {
  const slug = fileName.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    category: data.category,
    author: data.author ?? "Equipo Manuala",
    content,
  };
}

/** Todos los posts, más nuevo primero. Devuelve [] si content/blog todavía no tiene nada. */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(readPostFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return readPostFile(`${slug}.mdx`);
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((p) => p.category === category);
}
