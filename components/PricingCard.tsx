type FeatureGroup = {
  label: string;
  items: { label: string; included: boolean }[];
};

export default function PricingCard({
  name,
  price,
  seatsIncluded,
  extraSeatPrice,
  groups,
  ctaLabel,
  ctaHref,
  highlighted,
}: {
  name: string;
  price: string;
  seatsIncluded: string;
  extraSeatPrice: string;
  groups: FeatureGroup[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl p-8 ${
        highlighted
          ? "border-2 border-mustard bg-paper-0 shadow-[0_1px_2px_rgba(28,27,24,0.04),0_16px_40px_rgba(28,27,24,0.1)]"
          : "border border-ink/10 bg-paper-0 shadow-[0_1px_2px_rgba(28,27,24,0.04),0_8px_24px_rgba(28,27,24,0.05)]"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-mustard px-3 py-1 text-xs font-bold tracking-wide text-ink uppercase">
          Más elegido
        </span>
      )}

      <h3 className="font-heading text-lg font-bold">{name}</h3>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="font-heading text-4xl font-extrabold tracking-tight">{price}</span>
        <span className="text-sm text-ink-muted">/mes</span>
      </div>

      <div className="mt-4 text-sm text-ink-muted">
        {seatsIncluded} empleados incluidos
        <br />
        {extraSeatPrice} por empleado adicional
      </div>

      <a
        href={ctaHref}
        className={`mt-6 rounded-full px-6 py-3 text-center text-sm font-semibold ${
          highlighted ? "bg-ink text-white hover:bg-ink-muted" : "border-2 border-ink text-ink hover:bg-ink/5"
        }`}
      >
        {ctaLabel}
      </a>

      <div className="mt-8 space-y-6 border-t border-ink/10 pt-6">
        {groups.map((group) => (
          <div key={group.label}>
            {/* ink-muted, no ink-faint: a este tamaño el faint da 3,6:1, por debajo de WCAG AA */}
            <h4 className="text-xs font-bold tracking-wide text-ink-muted uppercase">{group.label}</h4>
            <ul className="mt-3 space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item.label}
                  className={`flex items-start gap-2.5 text-sm ${item.included ? "text-ink" : "text-ink-muted"}`}
                >
                  <span
                    className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                      item.included ? "bg-mustard-soft text-mustard-ink" : "bg-ink/5 text-ink-muted"
                    }`}
                  >
                    {item.included ? "✓" : "✕"}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
