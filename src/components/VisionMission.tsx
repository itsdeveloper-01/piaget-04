import ReactMarkdown from "react-markdown";

export default function VisionMission({
  headlineTop,
  headlineBottom,
  body,
}: {
  headlineTop: string;
  headlineBottom: string;
  body: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <div className="text-3xl md:text-5xl font-bold leading-tight">
            <div>{headlineTop}</div>
            <div>{headlineBottom}</div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
