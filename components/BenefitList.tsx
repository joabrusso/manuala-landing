export default function BenefitList({
  eyebrow,
  title,
  items,
}: {
  eyebrow?: string;
  title?: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="bg-paper-0 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        {(eyebrow || title) && (
          <div className="mb-10">
            {eyebrow && <p className="mb-2 text-xs font-bold tracking-wide text-mustard-ink uppercase">{eyebrow}</p>}
            {title && (
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">{title}</h2>
            )}
          </div>
        )}
        <ul className="space-y-8">
          {items.map((item) => (
            <li key={item.title} className="flex gap-4">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mustard text-xs font-bold text-ink">
                ✓
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-ink-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
