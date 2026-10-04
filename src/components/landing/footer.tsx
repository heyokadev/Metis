import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const columns = [
  {
    title: "Centro",
    links: ["Chi siamo", "Il team", "Contatti", "FAQ"],
  },
  {
    title: "Percorsi",
    links: ["Individuale", "Coppia", "Famiglia", "Adolescenti"],
  },
  {
    title: "Aree di intervento",
    links: ["Ansia e stress", "Umore e depressione", "Trauma", "Genitorialità"],
  },
  {
    title: "Risorse",
    links: ["Blog", "Domande frequenti", "Privacy policy", "Note legali"],
  },
];

const social = ["Instagram", "LinkedIn", "Facebook"];

export function Footer() {
  return (
    <footer className="bg-background py-16">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="#top" className="flex items-center">
              <Image
                src="/logo/metis-logo-black.png"
                alt="Metis — Scuola di Psicoterapia Cognitivo Comportamentale"
                width={3585}
                height={1382}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-500">
              Percorsi di psicologia e psicoterapia su misura, per persone,
              coppie e famiglie.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold text-zinc-950">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-zinc-200" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Metis Psicologia. Tutti i diritti
            riservati.
          </p>
          <div className="flex items-center gap-6">
            {social.map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-zinc-500 hover:text-zinc-950"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
