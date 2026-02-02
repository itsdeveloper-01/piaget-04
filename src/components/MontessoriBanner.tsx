import ReactMarkdown from "react-markdown";

export default function MontessoriBanner({
  title,
  body,
  ctaText,
  ctaLink,
}: {
  title: string;
  body: string;
  ctaText: string;
  ctaLink: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-700" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,white,transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-2xl text-white">
          <h2 className="text-2xl md:text-3xl font-bold">
            {title /* :contentReference[oaicite:2]{index=2} */}
          </h2>
          <div className="mt-4 text-white/90 leading-relaxed">
            <ReactMarkdown>{body}</ReactMarkdown>
          </div>
          <div className="mt-7">
            <a
              href={ctaLink}
              className="inline-flex rounded-full bg-white text-black px-5 py-3 text-sm font-semibold"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
