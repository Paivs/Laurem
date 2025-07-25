"use client";
import Events from "@/components/blocks/events";
import SimplePageHeading from "@/components/blocks/page-headings";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroEvents from "@/components/blocks/hero-events";
import Cta from "@/components/blocks/cta/cta";

export default function Eventos() {
  return (
    <>
      <section className="md:pt-0">
        <HeroEvents />
      </section>
      <div className="pt-12">
        <SimplePageHeading
          title="Participe dos Eventos e Atividades da Laurem"
          description="Fique por dentro de nossos workshops, consultorias e eventos exclusivos voltados para desenvolvimento profissional, inovação e networking. Conecte-se com especialistas, descubra novas oportunidades e transforme sua carreira com a Laurem."
        />
      </div>

      <div className="text-center my-4 max-w-7xl px-4 mx-auto text-wrap">
        <Button asChild>
          <Link
            href="/eventos/agendar"
            className="bg-primary hover:bg-primary/90 md:text-xl text-background text-wrap font-bold py-6 px-8 rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            Quero agendar um <br className="md:hidden" /> evento personalizado!
          </Link>
        </Button>
      </div>

      <Events />
      <Cta />
    </>
  );
}
