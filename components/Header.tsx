import Link from "next/link";
import Logo from "@/components/Logo";
import { APP_URL, PRODUCT_LINKS, SOLUTION_LINKS } from "@/lib/nav";

function NavDropdown({ label, items }: { label: string; items: typeof PRODUCT_LINKS | typeof SOLUTION_LINKS }) {
  return (
    <details className="group relative">
      <summary className="flex cursor-pointer list-none items-center gap-1 hover:underline [&::-webkit-details-marker]:hidden">
        {label}
        <span aria-hidden className="text-xs text-ink-faint">
          ▾
        </span>
      </summary>
      <div className="absolute top-full left-1/2 z-20 mt-3 w-72 -translate-x-1/2 rounded-2xl border border-ink/10 bg-paper-0 p-2 shadow-[0_8px_24px_rgba(28,27,24,0.12)]">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2.5 hover:bg-paper">
            <div className="text-sm font-semibold text-ink">{item.label}</div>
            <div className="mt-0.5 text-xs font-normal text-ink-muted">{item.desc}</div>
          </Link>
        ))}
      </div>
    </details>
  );
}

export default function Header() {
  return (
    <header className="border-b border-ink/10 bg-paper-0">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/">
          <Logo className="text-3xl" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold sm:flex">
          <NavDropdown label="Producto" items={PRODUCT_LINKS} />
          <NavDropdown label="Soluciones" items={SOLUTION_LINKS} />
          <a href={APP_URL} className="hover:underline">
            Iniciar sesión
          </a>
        </nav>
        <a
          href={APP_URL}
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink-muted"
        >
          Empezar gratis
        </a>
      </div>
    </header>
  );
}
