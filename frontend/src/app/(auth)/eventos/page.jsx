import Events from "@/components/blocks/events";
import SimplePageHeading from "@/components/blocks/page-headings";

export default function Eventos() {
  return (
    <>
      <div className="pt-12">
        <SimplePageHeading
          title="Participe dos Eventos e Atividades da Laurem"
          description="Fique por dentro de nossos workshops, consultorias e eventos exclusivos voltados para desenvolvimento profissional, inovação e networking. Conecte-se com especialistas, descubra novas oportunidades e transforme sua carreira com a Laurem."
        />
      </div>

      <Events />
    </>
  );
}
