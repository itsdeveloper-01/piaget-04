import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          {/* Logo: respeta tamaño/aspecto real (sin recortar) */}
          <Image
            src="/logo.png"
            alt="Instituto Piaget"
            width={180}
            height={60}
            className="h-10 w-auto object-contain"
            priority
          />

          {/* Quitamos el texto secundario "Enfoque Montessori" */}
          <div className="leading-tight">
            <div className="text-sm font-semibold text-brand-blue">Instituto Piaget</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#niveles" className="hover:text-brand-blue">Niveles</a>
          <a href="#community" className="hover:text-brand-blue">Comunidad</a>
          <a href="#testimonials" className="hover:text-brand-blue">Reseñas</a>
          <a href="#ubicacion" className="hover:text-brand-blue">Ubicación</a>
          <a href="#contacto" className="hover:text-brand-blue">Contacto</a>
        </nav>

        {/* CTA con paleta */}
        <a
          href="#contacto"
          className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-brand-blue text-white hover:bg-brand-green transition"
        >
          Contáctanos
        </a>
      </div>
    </header>
  );
}
