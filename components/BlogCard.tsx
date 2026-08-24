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
      className="flex h-full flex-col rounded-2xl border border-ink/10 bg-paper-0 p-6 transition-shadow hover:shadow-[0_8px_24px_rgba(28,27,24,0.08)]"
    >
      <span className="inline-block w-fit rounded-full bg-mustard-soft px-2.5 py-1 text-xs font-semibold tracking-wide text-mustard-ink uppercase">
        {categoryLabel(post.category)}
      </span>
      <h2 className="mt-3 font-heading text-xl font-bold text-ink">{post.title}</h2>
      <p className="mt-2 text-sm text-ink/75">{post.description}</p>
      <div className="mt-4 flex flex-1 items-end justify-between gap-3">
        <span className="text-sm font-semibold text-ink underline underline-offset-4">Leer artículo →</span>
        <time dateTime={post.date} className="shrink-0 text-xs text-ink-faint">
          {formatDate(post.date)}
        </time>
      </div>
    </Link>
  );
}
