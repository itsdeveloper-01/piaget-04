"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
};

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const safeSlides = useMemo(() => (slides?.length ? slides : []), [slides]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (safeSlides.length <= 1) return;
    const t = setInterval(() => setIdx((v) => (v + 1) % safeSlides.length), 5000);
    return () => clearInterval(t);
  }, [safeSlides.length]);

  if (!safeSlides.length) return null;
  const s = safeSlides[idx];

  return (
    <section className="relative" id="top">
      <div className="relative h-[70vh] min-h-[520px] w-full">
        <Image src={s.image} alt={s.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 via-brand-blue/20 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-6xl px-4 pb-10">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white">{s.title}</h1>
            <p className="mt-3 text-base md:text-lg text-white/90">{s.subtitle}</p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={s.ctaLink}
                className="rounded-full bg-white text-black px-5 py-3 text-sm font-semibold"
              >
                {s.ctaText}
              </a>
              <button
                onClick={() => setIdx((v) => (v + 1) % safeSlides.length)}
                className="rounded-full border border-white/50 text-white px-5 py-3 text-sm font-semibold"
                aria-label="Siguiente slide"
              >
                Siguiente
              </button>
            </div>

            <div className="mt-5 flex gap-2">
              {safeSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 w-2 rounded-full ${i === idx ? "bg-white" : "bg-white/40"}`}
                  aria-label={`Ir al slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
