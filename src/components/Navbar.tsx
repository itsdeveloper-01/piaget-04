"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Niveles", href: "#niveles" },
  { label: "Comunidad", href: "#community" },
  { label: "Reseñas", href: "#testimonials" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Cierra el menú al presionar ESC (accesibilidad)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Evita scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-brand-gray/90 backdrop-blur border-b border-brand-blue/20">
      <div className="hover:text-brand-blue mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        {/* Logo + nombre */}
        <a href="#top" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Instituto Piaget"
            width={220}
            height={70}
            className="h-10 w-auto object-contain"
            priority
          />
          <div className="leading-tight min-w-0">
            <div className="text-sm font-semibold text-brand-blue truncate">Instituto Piaget</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm text-slate-700">
          {NAV_ITEMS.map((it) => (
            <a key={it.href} href={it.href} className="hover:text-brand-blue">
              {it.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* CTA (visible en todos, compacto en móvil) */}
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-brand-blue text-white hover:bg-brand-green transition"
            onClick={() => setOpen(false)}
          >
            Contáctanos
          </a>

          {/* Hamburger (mobile/tablet) */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-full border bg-white px-3 py-2 shadow-sm"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {/* Icono hamburguesa / X */}
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-1 block h-[2px] w-5 bg-slate-900 transition ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 block h-[2px] w-5 bg-slate-900 transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-[2px] w-5 bg-slate-900 transition ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile overlay + drawer */}
      {open && (
        <div className="lg:hidden">
          {/* Overlay */}
          <button
            aria-label="Cerrar menú"
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div
            id="mobile-menu"
            className="fixed right-0 top-0 z-50 h-dvh w-[86%] max-w-sm bg-white shadow-xl border-l"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <div className="text-sm font-semibold text-brand-blue">Menú</div>
              <button
                className="rounded-full border bg-white px-3 py-2"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            <div className="px-4 py-4">
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((it) => (
                  <a
                    key={it.href}
                    href={it.href}
                    className="rounded-2xl px-4 py-4 text-sm font-semibold bg-brand-gray hover:bg-white border"
                    onClick={() => setOpen(false)}
                  >
                    {it.label}
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border p-4 bg-white">
                <div className="text-xs text-slate-500">Acceso rápido</div>
                <a
                  href="#contacto"
                  className="mt-3 block rounded-2xl bg-brand-green text-white px-4 py-4 text-sm font-semibold text-center hover:opacity-90"
                  onClick={() => setOpen(false)}
                >
                  WhatsApp / Correo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
