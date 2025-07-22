
import ModernHero from "@/components/blocks/modern-hero";
import SimplePageHeading from "@/components/blocks/page-headings";
import FeatureDev from "@/components/blocks/service-02";
import Cta from "@/components/blocks/cta/cta";

export default function ServicosPage() {
  return (
    <main>
      <ModernHero />
      <SimplePageHeading title="Conheça nossos serviços" description="Desenvolvimento de software, hospedagem, implementação, manutenção e suporte. Operamos com backups e práticas de segurança" />
      <FeatureDev />
      <Cta />
    </main>
  );
} 
