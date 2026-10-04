import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    index: "01",
    title: "Ascolto",
    description:
      "Un primo colloquio conoscitivo, senza impegno, per capire di cosa hai bisogno e se c'è la giusta sintonia con il professionista.",
  },
  {
    index: "02",
    title: "Valutazione",
    description:
      "Insieme definiamo obiettivi chiari e la cornice più adatta: percorso individuale, di coppia o familiare.",
  },
  {
    index: "03",
    title: "Percorso",
    description:
      "Sedute regolari, con un metodo strutturato ma flessibile, che si adatta ai tuoi tempi e ai tuoi progressi.",
  },
  {
    index: "04",
    title: "Crescita",
    description:
      "Verifichiamo insieme i risultati raggiunti e ridefiniamo gli obiettivi, fino a quando il percorso ha ancora valore per te.",
  },
];

export function Approach() {
  return (
    <section id="approccio" className="border-b border-zinc-200 py-24">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-zinc-500">Come lavoriamo</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
            Un metodo pensato per accompagnarti, un passo alla volta
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Non un protocollo standard, ma un percorso costruito insieme a
            te, con la supervisione costante di un professionista.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card
              key={step.index}
              className="border-zinc-200 bg-white shadow-none"
            >
              <CardContent className="pt-2">
                <span className="text-sm font-mono font-semibold text-zinc-400">
                  {step.index}
                </span>
                <h3 className="mt-4 text-lg font-bold text-zinc-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
