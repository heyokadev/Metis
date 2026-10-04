import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Metis Psicologia — Uno spazio per ascoltarti davvero",
  description:
    "Centro di psicologia e psicoterapia: percorsi personalizzati per persone, coppie e famiglie, in presenza o online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${hankenGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background">{children}</body>
    </html>
  );
}
