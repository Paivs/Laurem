import Events from "@/components/blocks/events";
import SimplePageHeading from "@/components/blocks/page-headings";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Eventos() {
  return (
    <>
      <div className="pt-12">
        <SimplePageHeading
          title="Participe dos Eventos e Atividades da Laurem"
          description="Fique por dentro de nossos workshops, consultorias e eventos exclusivos voltados para desenvolvimento profissional, inovação e networking. Conecte-se com especialistas, descubra novas oportunidades e transforme sua carreira com a Laurem."
        />
      </div>

      <div className="text-center my-4">
        <Link href="/eventos/agendar">
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-6 px-8 text-lg rounded-lg transition-all hover:scale-105 shadow-lg">
            Quero agendar um evento personalizado!
          </Button>
        </Link>
      </div>

      <Events />
    </>
  );
}
