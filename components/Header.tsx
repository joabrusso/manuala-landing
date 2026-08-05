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

export default function Header() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const navRef = useRef<HTMLElement>(null);

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
