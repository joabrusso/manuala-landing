import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import { CATEGORIES, categoryLabel, getPostsByCategory } from "@/lib/blog";

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const label = categoryLabel(category);
  return {
    title: `Blog — ${label}`,
    description: `Artículos de Manuala sobre ${label.toLowerCase()}.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!CATEGORIES.some((c) => c.slug === category)) notFound();

  const posts = getPostsByCategory(category);
  const label = categoryLabel(category);

  return (
    <main>
      <PageHero eyebrow="Blog" title={label} subtitle={`Todo lo que escribimos sobre ${label.toLowerCase()}.`} />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        {posts.length === 0 ? (
          <p className="text-ink-muted">Todavía no hay artículos en esta categoría — muy pronto.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
