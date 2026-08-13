"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { APP_URL, PRODUCT_LINKS, SOLUTION_LINKS } from "@/lib/nav";

type MenuKey = "producto" | "soluciones";

function NavDropdown({
  menuKey,
  label,
  items,
  open,
  onToggle,
  onClose,
}: {
  menuKey: MenuKey;
  label: string;
  items: typeof PRODUCT_LINKS | typeof SOLUTION_LINKS;
  open: boolean;
  onToggle: (key: MenuKey) => void;
  onClose: () => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => onToggle(menuKey)}
        aria-expanded={open}
        className="flex cursor-pointer items-center gap-1 hover:underline"
      >
        {label}
        <span aria-hidden className={`text-xs text-ink-faint transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>
      {open && (
        <div className="absolute top-full left-1/2 z-20 mt-3 w-72 -translate-x-1/2 rounded-2xl border border-ink/10 bg-paper-0 p-2 shadow-[0_8px_24px_rgba(28,27,24,0.12)]">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block rounded-xl px-3 py-2.5 hover:bg-paper"
            >
              <div className="text-sm font-semibold text-ink">{item.label}</div>
              <div className="mt-0.5 text-xs font-normal text-ink-muted">{item.desc}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileGroup({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: typeof PRODUCT_LINKS | typeof SOLUTION_LINKS;
  onNavigate: () => void;
}) {
  return (
    <div>
      <h2 className="px-3 text-xs font-bold tracking-wide text-ink-muted uppercase">{title}</h2>
      <div className="mt-1">
        {items.map((item) => (
          <Link key={item.href} href={item.href} onClick={onNavigate} className="block rounded-xl px-3 py-2.5 hover:bg-paper">
            <div className="text-sm font-semibold text-ink">{item.label}</div>
            <div className="mt-0.5 text-xs text-ink-muted">{item.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // Cierra con Escape y devuelve el foco al botón que lo abrió.
  useEffect(() => {
    if (!mobileOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        burgerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  // Si la ventana pasa a tamaño desktop, el panel ya no corresponde.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const onChange = () => mq.matches && setMobileOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!openMenu) return;

    function handlePointerDown(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(null);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenu]);

  return (
    <header className="border-b border-ink/10 bg-paper-0">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" onClick={() => setOpenMenu(null)}>
          <Logo className="text-3xl" />
        </Link>
        <nav ref={navRef} className="hidden items-center gap-8 text-sm font-semibold sm:flex">
          <NavDropdown
            menuKey="producto"
            label="Producto"
            items={PRODUCT_LINKS}
            open={openMenu === "producto"}
            onToggle={(key) => setOpenMenu((current) => (current === key ? null : key))}
            onClose={() => setOpenMenu(null)}
          />
          <NavDropdown
            menuKey="soluciones"
            label="Soluciones"
            items={SOLUTION_LINKS}
            open={openMenu === "soluciones"}
            onToggle={(key) => setOpenMenu((current) => (current === key ? null : key))}
            onClose={() => setOpenMenu(null)}
          />
          <a href={APP_URL} className="hover:underline">
            Iniciar sesión
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={APP_URL}
            className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white hover:bg-ink-muted sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Empezar gratis
          </a>

          {/* Por debajo de sm la navegación se oculta, así que acá está su reemplazo */}
          <button
            ref={burgerRef}
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ink/15 text-ink hover:bg-paper sm:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
              {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="menu-mobile" className="border-t border-ink/10 sm:hidden">
          <nav className="mx-auto max-w-6xl space-y-5 px-3 py-5">
            <MobileGroup title="Producto" items={PRODUCT_LINKS} onNavigate={() => setMobileOpen(false)} />
            <MobileGroup title="Soluciones" items={SOLUTION_LINKS} onNavigate={() => setMobileOpen(false)} />
            <div className="border-t border-ink/10 pt-4">
              <a href={APP_URL} className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-ink hover:bg-paper">
                Iniciar sesión
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
