export default function LevelsPath({
  title,
  items,
  achievementsTitle,
  achievementsBody,
}: {
  title: string;
  items: { name: string; desc: string }[];
  achievementsTitle: string;
  achievementsBody: string;
}) {
  return (
    <section id="niveles" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>

        <div className="mt-10 space-y-6">
          {items.map((it, i) => {
            const reverse = i % 2 === 1;
            return (
              <div key={it.name} className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} gap-4 md:gap-8`}>
                <div className="md:w-1/2">
                  <div className="rounded-2xl border bg-white p-5 shadow-sm">
                    <div className="text-lg font-semibold">{it.name}</div>
                    <div className="mt-2 text-sm text-gray-600">{it.desc}</div>
                  </div>
                </div>

                <div className="md:w-1/2 flex items-center">
                  <div className="h-10 w-full md:h-full md:w-full rounded-2xl bg-gradient-to-r from-gray-200 to-gray-100" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border bg-white p-6">
          <div className="text-lg font-semibold">{achievementsTitle}</div>
          <div className="mt-2 text-sm text-gray-600">{achievementsBody}</div>
        </div>
      </div>
    </section>
  );
}
