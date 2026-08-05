import Link from "next/link";
import { APP_URL, PRODUCT_LINKS, SOLUTION_LINKS } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper-0">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-4">
          <div>
            <span className="font-heading text-lg font-extrabold">Manuala</span>
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
                <a href="mailto:hola@manuala.app" className="hover:underline">
                  Hablar con nosotros
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
