import Careers from "@/components/blocks/careers";
import SimplePageHeading from "@/components/blocks/page-headings";
import WhyWork from "@/components/blocks/why-work";

export default function Trabalho() {
  return (
    <>
      <div className="pt-12">
        <SimplePageHeading
          title="Venha desenvolver conosco!"
          description="Descubra nossa seleção escolhida a dedo das principais oportunidades de emprego de empresas líderes. Essas posições oferecem salários competitivos, grandes benefícios e um crescimento empolgante na carreira."
        />
      </div>
      <Careers />
      <WhyWork />
    </>
  );
}
