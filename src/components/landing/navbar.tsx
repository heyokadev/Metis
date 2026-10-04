import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Percorsi", href: "#percorsi" },
  { label: "Aree di intervento", href: "#aree" },
  { label: "Come lavoriamo", href: "#approccio" },
  { label: "Risorse", href: "#risorse" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-background/90 backdrop-blur-md">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="#top" className="flex items-center">
          <Image
            src="/logo/metis-logo-black-wordmark.png"
            alt="Metis"
            width={3286}
            height={1154}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            render={<a href="tel:+390000000000" />}
            variant="ghost"
            className="hidden text-sm font-medium text-zinc-600 hover:text-zinc-950 sm:inline-flex"
          >
            Contattaci
          </Button>
          <Button
            render={<a href="#contatti" />}
            className="rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Prenota un colloquio
          </Button>
        </div>
      </div>
    </header>
  );
}
