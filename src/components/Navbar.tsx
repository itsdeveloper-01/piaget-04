"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const NAV_ITEMS = [
  { label: "Niveles", href: "#niveles" },
  { label: "Comunidad", href: "#community" },
  { label: "Reseñas", href: "#testimonials" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = useMemo(() => NAV_ITEMS, []);

  // ESC para cerrar
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Bloquea scroll del body cuando esté abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-brand-blue/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        {/* Logo + (texto solo en desktop) */}
        <a href="#top" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Instituto Piaget"
            width={220}
            height={70}
            className="h-10 w-auto object-contain"
            priority
          />

          {/* ✅ Oculto en móvil/tablet para que no se vea "Instituto..." */}
          <div className="hidden lg:block leading-tight min-w-0">
            <div className="text-sm font-semibold text-brand-blue truncate">Instituto Piaget</div>
          </div>
        </a>

        {/* ✅ Menú horizontal SOLO en desktop */}
        <nav className="hidden lg:flex items-center gap-6 text-sm text-slate-700">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="hover:text-brand-blue">
              {it.label}
            </a>
          ))}
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-2">
          {/* CTA compacto en móvil */}
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-brand-blue text-white hover:bg-brand-green transition"
            onClick={() => setOpen(false)}
          >
            Contáctanos
          </a>

          {/* Hamburguesa (mobile/tablet) */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-full border border-brand-blue/15 bg-white px-3 py-2 shadow-sm"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-1 block h-[2px] w-5 bg-brand-blue transition ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 block h-[2px] w-5 bg-brand-blue transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-[2px] w-5 bg-brand-blue transition ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile overlay + drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <aside
          id="mobile-menu"
          className={`absolute right-0 top-0 h-dvh w-[88%] max-w-sm bg-white shadow-2xl border-l border-brand-blue/10
          transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Header del drawer con marca */}
          <div className="relative overflow-hidden border-b border-brand-blue/10">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-green to-brand-yellow opacity-90" />
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative px-4 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/90 p-2 shadow">
                  <Image src="/logo.png" alt="Logo" width={120} height={40} className="h-8 w-auto object-contain" />
                </div>
                <div className="text-white">
                  <div className="text-sm font-semibold">Instituto Piaget</div>
                  <div className="text-xs text-white/90">Menú</div>
                </div>
              </div>

              <button
                className="rounded-full bg-white/90 px-3 py-2 text-sm font-semibold shadow"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="px-4 py-5">
            <div className="text-xs font-semibold text-slate-500">SECCIONES</div>

            <div className="mt-3 flex flex-col gap-2">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="group rounded-2xl border border-brand-blue/10 bg-white px-4 py-4 shadow-sm
                             hover:border-brand-blue/30 hover:shadow transition"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-800 group-hover:text-brand-blue">
                      {it.label}
                    </div>
                    <span className="text-brand-blue/60 group-hover:text-brand-blue">›</span>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA grande */}
            <div className="mt-6 rounded-2xl border border-brand-blue/10 bg-brand-gray p-4">
              <div className="text-xs font-semibold text-slate-600">CONTACTO RÁPIDO</div>

              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-3 block rounded-2xl bg-brand-green text-white px-4 py-4 text-sm font-semibold text-center hover:opacity-95 transition"
              >
                WhatsApp / Correo
              </a>

              <p className="mt-3 text-xs text-slate-600">
                Respuesta más rápida por WhatsApp.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
