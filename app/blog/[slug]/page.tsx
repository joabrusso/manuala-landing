import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import CtaBanner from "@/components/CtaBanner";
import { categoryLabel, getAllPosts, getPostBySlug } from "@/lib/blog";
import { SITE_URL } from "@/lib/nav";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Manuala" },
    mainEntityOfPage: url,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <div className="flex items-center gap-3 text-xs font-semibold text-ink-muted">
          <span className="rounded-full bg-mustard-soft px-2.5 py-1 text-mustard-ink uppercase tracking-wide">
            {categoryLabel(post.category)}
          </span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        <h1 className="mt-4 font-heading text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg text-ink/80">{post.description}</p>

        <div className="prose-manuala mt-10">
          <MDXRemote source={post.content} />
        </div>
      </article>

      <CtaBanner
        title="Dejá de explicar el mismo proceso mil veces"
        subtitle="Grabá tu pantalla haciéndolo una vez y Manuala arma el instructivo por vos."
      />
    </main>
  );
}
