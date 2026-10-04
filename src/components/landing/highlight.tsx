import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const points = [
  "Primo colloquio conoscitivo, in presenza o online",
  "Frequenza e durata del percorso definite insieme a te",
  "Massima riservatezza, nel rispetto del codice deontologico",
];

export function Highlight() {
  return (
    <section id="percorsi" className="border-b border-zinc-200 py-24">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 overflow-hidden rounded-3xl border border-zinc-200 bg-white lg:grid-cols-2">
          <div className="relative h-72 lg:h-full lg:min-h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1600&auto=format&fit=crop"
              alt="Studio del centro Metis Psicologia"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 sm:p-12">
            <Badge
              variant="outline"
              className="rounded-full border-zinc-300 text-xs font-medium text-zinc-600"
            >
              Percorso individuale
            </Badge>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
              Come iniziamo a lavorare insieme
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              Ogni percorso comincia da un colloquio in cui raccontarti senza
              fretta. Da lì, costruiamo insieme obiettivi realistici e un
              ritmo di incontri sostenibile, che rivediamo periodicamente in
              base a come procede il tuo percorso.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-zinc-700"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-950/50" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
