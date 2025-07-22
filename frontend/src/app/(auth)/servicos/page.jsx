import SimplePageHeading from "@/components/blocks/page-headings";
import FeatureDev from "@/components/blocks/service-02";

export default function Servicos() {
  return (
    <>
      <SimplePageHeading title="Conheça nossos serviços" description="Desenvolvimento de software, hospedagem, implementação, manutenção e suporte. Operamos com backups e práticas de segurança" />
      <FeatureDev />
    </>
  );
}
