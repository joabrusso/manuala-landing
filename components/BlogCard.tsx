import Link from "next/link";
import { categoryLabel, type PostMeta } from "@/lib/blog";

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-2xl border border-ink/10 bg-paper-0 p-6 transition-shadow hover:shadow-[0_8px_24px_rgba(28,27,24,0.08)]"
    >
      <div className="flex items-center gap-3 text-xs font-semibold text-ink-muted">
        <span className="rounded-full bg-mustard-soft px-2.5 py-1 text-mustard-ink uppercase tracking-wide">
          {categoryLabel(post.category)}
        </span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>
      <h2 className="mt-3 font-heading text-xl font-bold text-ink">{post.title}</h2>
      <p className="mt-2 text-sm text-ink/75">{post.description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-ink underline underline-offset-4">
        Leer artículo →
      </span>
    </Link>
  );
}
