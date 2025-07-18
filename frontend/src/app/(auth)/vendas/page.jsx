import SimplePageHeading from "@/components/blocks/page-headings";
import SalesSection from "@/components/blocks/sales-section";

export default function Vendas() {
  return (
    <>
      <main className="overflow-hidden relative">
        <div className="bg-primary/10 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute -right-32 -bottom-32 h-96 w-96 rounded-full blur-3xl" />
        <div className="pt-12 ">
          <SimplePageHeading
            title="Soluções & Serviços Laurem"
            description="Transforme seu negócio com nossas soluções especializadas. Oferecemos consultoria, produtos e serviços sob medida para impulsionar seus resultados."
            className="max-w-3xl text-center mx-auto"
          />
        </div>
        <SalesSection />
      </main>
    </>
  );
}
