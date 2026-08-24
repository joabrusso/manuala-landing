import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import BlogCard from "@/components/BlogCard";
import { CATEGORIES, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Procesos, capacitación de equipos y cumplimiento operativo — notas prácticas para retail, logística y equipos que crecen.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Procesos, capacitación y cumplimiento"
        subtitle="Notas prácticas para dejar de repetir lo mismo cien veces y que tu equipo sepa qué hacer sin preguntarte a vos."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/blog/categoria/${c.slug}`}
              className="rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink hover:bg-paper"
            >
              {c.label}
            </Link>
          ))}
        </div>

        {posts.length === 0 ? (
          <p className="mt-12 text-ink-muted">Todavía no hay artículos publicados — muy pronto.</p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
