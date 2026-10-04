import Image from "next/image";

const specialties = [
  {
    name: "Ansia e stress",
    description:
      "Strumenti concreti per riconoscere e gestire pensieri intrusivi, attacchi di panico e stress cronico.",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Umore e depressione",
    description:
      "Un supporto strutturato per attraversare fasi di calo dell'umore, demotivazione e stanchezza emotiva.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Coppia e famiglia",
    description:
      "Percorsi dedicati alla comunicazione, ai conflitti ricorrenti e alle transizioni della vita familiare.",
    image:
      "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Adolescenti",
    description:
      "Uno spazio protetto per ragazze e ragazzi, in dialogo con le famiglie quando è utile e concordato.",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Trauma ed eventi difficili",
    description:
      "Un accompagnamento graduale per rielaborare esperienze difficili, lutti e momenti di crisi.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },
];

export function Specialties() {
  return (
    <section id="aree" className="border-b border-zinc-200 py-24">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-zinc-500">
            Aree di intervento
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
            Un supporto specifico per ogni fase della vita
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item) => (
            <div
              key={item.name}
              className="group relative isolate flex h-80 flex-col justify-end overflow-hidden rounded-2xl border border-zinc-200 p-6"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="-z-10 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/60 to-black/10" />
              <h3 className="text-lg font-semibold text-white">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
