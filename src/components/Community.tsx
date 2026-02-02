export default function Community({
  title,
  items,
}: {
  title: string;
  items: { source: "facebook" | "instagram"; author: string; text: string }[];
}) {
  return (
    <section id="community" className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      <p className="mt-2 text-sm text-gray-500">
        (Por ahora trabajeromos con cards administrables; luego lo podemos conecr servicios y asi XD.)
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <article key={i} className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-xs text-gray-500">{p.source}</div>
            <div className="mt-2 font-semibold">{p.author}</div>
            <div className="mt-2 text-sm text-gray-600">{p.text}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
