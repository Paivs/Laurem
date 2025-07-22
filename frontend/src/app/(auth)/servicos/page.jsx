import ModernHero from "@/components/blocks/modern-hero";

export default function ServicosPage() {
  return (
    <main>
      <ModernHero />

      <section className="container py-12 md:py-20 lg:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nossos Serviços
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Oferecemos uma gama de soluções para impulsionar o seu sucesso.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Consultoria Estratégica</h3>
            <p className="text-muted-foreground">
              Ajudamos sua empresa a traçar o melhor caminho para o crescimento
              com estratégias personalizadas e inovadoras.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">
              Desenvolvimento de Software
            </h3>
            <p className="text-muted-foreground">
              Criamos soluções de software robustas e escaláveis, feitas sob
              medida para atender às suas necessidades.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Marketing Digital</h3>
            <p className="text-muted-foreground">
              Expandimos sua presença online, conectando sua marca ao público
              certo e gerando resultados mensuráveis.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 