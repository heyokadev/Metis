import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    tag: "Ansia",
    title: "Riconoscere i primi segnali di un attacco di panico",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1200&auto=format&fit=crop",
  },
  {
    tag: "Coppia",
    title: "Comunicare senza litigare: una guida pratica",
    image:
      "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=1200&auto=format&fit=crop",
  },
  {
    tag: "Genitorialità",
    title: "Accompagnare un adolescente in un momento di crisi",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200&auto=format&fit=crop",
  },
];

export function Articles() {
  return (
    <section id="risorse" className="border-b border-zinc-200 py-24">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-zinc-500">Risorse</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
              Letture per capire meglio quello che provi
            </h2>
          </div>
          <a
            href="#risorse"
            className="inline-flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-zinc-950"
          >
            Vedi tutti gli articoli
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.title}
              href="#risorse"
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors hover:border-zinc-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  {article.tag}
                </span>
                <h3 className="mt-3 flex items-start justify-between gap-2 text-lg font-bold text-zinc-950">
                  {article.title}
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-950" />
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
