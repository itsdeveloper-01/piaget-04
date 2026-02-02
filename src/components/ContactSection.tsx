import ReactMarkdown from "react-markdown";

export default function ContactSection({
  title,
  body,
  whatsappNumber,
  email,
}: {
  title: string;
  body: string;
  whatsappNumber: string;
  email: string;
}) {
  const waLink = `https://wa.me/${whatsappNumber}`;
  const mailLink = `mailto:${email}`;

  return (
    <section id="contacto" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>

        <div className="mt-4 prose prose-gray max-w-none">
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-black text-white px-5 py-4 text-sm font-semibold text-center"
          >
            WhatsApp
          </a>
          <a
            href={mailLink}
            className="rounded-2xl border bg-white px-5 py-4 text-sm font-semibold text-center"
          >
            Correo
          </a>
        </div>
      </div>
    </section>
  );
}
