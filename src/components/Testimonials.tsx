export default function Testimonials({
  title,
  items,
}: {
  title: string;
  items: { name: string; text: string }[];
}) {
  return (
    <section id="testimonials" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <article key={i} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="font-semibold">{t.name}</div>
              <div className="mt-2 text-sm text-gray-600">{t.text}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
