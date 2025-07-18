import AboutSection from "@/components/blocks/about-section";
import AboutSectionCompanyValues from "@/components/blocks/about-sections";
import SimplePageHeading from "@/components/blocks/page-headings";

export default function Contact() {
  return (
    <>
      <div className="pt-12">
        <SimplePageHeading
          title="O que guia nossas decisões"
          description="Fique por dentro de nossos workshops, consultorias e eventos exclusivos voltados para desenvolvimento profissional, inovação e networking. Conecte-se com especialistas, descubra novas oportunidades e transforme sua carreira com a Laurem."
        />
      </div>

      <AboutSectionCompanyValues/>

      {/* <AboutSection /> */}
    </>
  );
}
