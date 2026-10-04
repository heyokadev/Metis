import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="contatti" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2400&auto=format&fit=crop"
          alt="Ambiente sereno"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Fare il primo passo è già parte del percorso
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-lg text-zinc-500">
          Scrivici per fissare un primo colloquio conoscitivo, in presenza o
          online. Ti risponderemo entro 48 ore lavorative.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            render={<a href="mailto:info@metispsicologia.it" />}
            size="lg"
            className="rounded-full bg-white px-8 text-black hover:bg-zinc-200"
          >
            Scrivici ora
          </Button>
          <Button
            render={<a href="tel:+390000000000" />}
            size="lg"
            variant="outline"
            className="rounded-full border-white/20 bg-transparent px-8 text-white hover:bg-white/10"
          >
            Chiamaci
          </Button>
        </div>

        <p className="mt-10 text-xs text-zinc-500">
          Se ti trovi in una situazione di emergenza, contatta il 112 o il
          più vicino pronto soccorso.
        </p>
      </div>
    </section>
  );
}
