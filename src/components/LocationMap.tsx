export default function LocationMap({
  title,
  googleMapsEmbedUrl,
}: {
  title: string;
  googleMapsEmbedUrl: string;
}) {
  return (
    <section id="ubicacion" className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>

      <div className="mt-6 overflow-hidden rounded-2xl border bg-white">
        <div className="aspect-video w-full">
          <iframe
            src={googleMapsEmbedUrl}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Mapa"
          />
        </div>
      </div>
    </section>
  );
}
