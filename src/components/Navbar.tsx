import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border">
            <Image src="/logo.png" alt="Instituto Piaget" fill className="object-cover" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Instituto Piaget</div>
            <div className="text-xs text-gray-500">Enfoque Montessori</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#niveles" className="hover:opacity-70">Niveles</a>
          <a href="#community" className="hover:opacity-70">Comunidad</a>
          <a href="#testimonials" className="hover:opacity-70">Reseñas</a>
          <a href="#ubicacion" className="hover:opacity-70">Ubicación</a>
          <a href="#contacto" className="hover:opacity-70">Contacto</a>
        </nav>

        <a
          href="#contacto"
          className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-black text-white"
        >
          Contáctanos
        </a>
      </div>
    </header>
  );
}
