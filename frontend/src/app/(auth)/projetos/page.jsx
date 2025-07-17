import Events from "@/components/blocks/events";
import SimplePageHeading from "@/components/blocks/page-headings";
import ServicesOverview from "@/components/blocks/services-overview";

export default function Projetos() {
  return (
    <>
      <div className="pt-12">
        <SimplePageHeading
          title="Junte-se aos Nossos Projetos Inovadores!"
          description="Explore as oportunidades de colaborar em projetos desafiadores e inovadores que impactam diretamente o futuro da tecnologia. Se você tem paixão por criar soluções de impacto, venha fazer parte da nossa equipe!"
        />
      </div>

      <ServicesOverview/>

      
    </>
  );
}
