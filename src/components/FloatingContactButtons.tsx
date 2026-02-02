export default function FloatingContactButtons({
  whatsappNumber,
  email,
}: {
  whatsappNumber: string;
  email: string;
}) {
  const waLink = `https://wa.me/${whatsappNumber}`;
  const mailLink = `mailto:${email}`;

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-black text-white px-4 py-3 text-sm font-semibold shadow-lg"
        aria-label="Contactar por WhatsApp"
      >
        WhatsApp
      </a>
      <a
        href={mailLink}
        className="rounded-full bg-white border px-4 py-3 text-sm font-semibold shadow-lg"
        aria-label="Contactar por correo"
      >
        Correo
      </a>
    </div>
  );
}
