import Link from "next/link";
import Logo from "@/components/Logo";
import { APP_URL, CONTACT_EMAIL, PRODUCT_LINKS, SOLUTION_LINKS } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper-0">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-4">
          <div>
            <Logo className="text-2xl" />
            <p className="mt-3 max-w-[220px] text-sm text-ink-muted">
              Documentá procesos con IA y controlá que tu equipo los cumpla.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-wide text-ink-faint uppercase">Producto</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {PRODUCT_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-wide text-ink-faint uppercase">Soluciones</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {SOLUTION_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-wide text-ink-faint uppercase">Empresa</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={APP_URL} className="hover:underline">
                  Iniciar sesión
                </a>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:underline">
                  Contacto
                </Link>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-ink/10 pt-6 text-sm text-ink-faint">© {new Date().getFullYear()} Manuala</div>
      </div>
    </footer>
  );
}
