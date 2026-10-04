import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="border-b border-zinc-200 bg-background">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:grid-cols-12 lg:gap-6">
          <h1 className="order-1 text-balance text-6xl font-black leading-[0.95] tracking-tight text-zinc-950 sm:text-7xl lg:col-span-6 lg:text-8xl">
            Il tuo spazio
            <br />
            per stare bene
          </h1>

          <div className="order-2 lg:col-span-4 lg:col-start-9 lg:flex lg:items-end">
            <div className="border-l-2 border-zinc-950 pl-6">
              <p className="text-lg leading-8 text-zinc-600 sm:text-xl">
                Dall&apos;ascolto alla crescita: Metis trasforma il disagio in
                un percorso concreto, costruito insieme a psicologi e
                psicoterapeuti iscritti all&apos;Albo.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mb-4 overflow-hidden rounded-2xl bg-zinc-900">
          <video
            className="aspect-video w-full object-cover"
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-x-4 bottom-4 flex flex-col items-start gap-3 rounded-xl bg-zinc-100/95 px-5 py-4 sm:inset-x-6 sm:bottom-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-zinc-800 sm:text-base">
              Scopri come Metis accompagna le persone verso il benessere.
            </p>
            <Button
              render={<a href="#percorsi" />}
              size="sm"
              className="rounded-full bg-zinc-950 px-5 text-xs font-semibold text-white hover:bg-zinc-800 sm:text-sm"
            >
              Scopri di più
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-zinc-200 pt-10 pb-16 sm:flex-row sm:justify-center">
          <Button
            render={<a href="#contatti" />}
            size="lg"
            className="rounded-full bg-zinc-950 px-8 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Prenota un primo colloquio
          </Button>
          <Button
            render={<a href="#percorsi" />}
            size="lg"
            variant="outline"
            className="rounded-full border-zinc-300 bg-transparent px-8 text-sm font-semibold text-zinc-950 hover:bg-zinc-100"
          >
            Scopri i percorsi
          </Button>
        </div>
      </div>
    </section>
  );
}
