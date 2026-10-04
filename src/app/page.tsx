import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Approach } from "@/components/landing/approach";
import { Specialties } from "@/components/landing/specialties";
import { Highlight } from "@/components/landing/highlight";
import { Articles } from "@/components/landing/articles";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Approach />
        <Specialties />
        <Highlight />
        <Articles />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
