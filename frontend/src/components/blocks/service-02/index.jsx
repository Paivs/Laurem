import { Separator } from "@/components/ui/separator";

const ServicesSection = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 text-center">
          <p className="font-medium">+100 projetos entregues</p>
          <h2 className="text-4xl font-medium md:text-5xl">
            Transformamos ideias em realidade digital
          </h2>
        </div>
        <div className="mt-20">
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <div className="bg-primary/10 flex h-24 w-24 items-center justify-center rounded-xl sm:h-40 sm:w-40">
                <svg
                  className="text-primary h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="flex h-full flex-col justify-between gap-10">
                <div>
                  <h3 className="mb-4 text-xl font-semibold">
                    Desenvolvimento Colaborativo
                  </h3>
                  <p className="sm:text-lg">
                    Projetos open-source desenvolvidos em parceria, onde sua
                    equipe participa ativamente do processo com custo zero de
                    desenvolvimento.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-primary">Benefícios:</p>
                    <ul className="text-muted-foreground list-inside list-disc space-y-1">
                      <li>Licença MIT/GPL para ampla distribuição</li>
                      <li>Visibilidade global no nosso marketplace</li>
                      <li>Contribuição de desenvolvedores internacionais</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  0$
                </p>
                <p className="font-semibold text-primary">
                  Investimento inicial
                </p>
                <p className="text-muted-foreground">
                  Custo zero para startups
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  3.8x
                </p>
                <p className="font-semibold text-primary">Alcance de mercado</p>
                <p className="text-muted-foreground">Projetos open-source</p>
              </div>
            </div>
          </div>
          <Separator className="my-20" />
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <div className="bg-primary/10 flex h-24 w-24 items-center justify-center rounded-xl sm:h-40 sm:w-40">
                <svg
                  className="text-primary h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="flex h-full flex-col justify-between gap-10">
                <div>
                  <h3 className="mb-4 text-xl font-semibold">
                    Soluções Exclusivas
                  </h3>
                  <p className="sm:text-lg">
                    Sistemas proprietários desenvolvidos sob medida para seu
                    negócio, com código-fonte 100% seu e pacotes de evolução
                    contínua.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-primary">Vantagens:</p>
                    <ul className="text-muted-foreground list-inside list-disc space-y-1">
                      <li>Garantia de aprovação por funcionalidade</li>
                      <li>Revisões semanais com ajustes ilimitados</li>
                      <li>Diagnóstico técnico gratuito inicial</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  4.2x
                </p>
                <p className="font-semibold text-primary">Retorno (ROI)</p>
                <p className="text-muted-foreground">
                  Média dos primeiros 12 meses
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  72%
                </p>
                <p className="font-semibold text-primary">Economia de tempo</p>
                <p className="text-muted-foreground">
                  No lançamento ao mercado
                </p>
              </div>
            </div>
          </div>
          <Separator className="my-20" />
          <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
            <div className="flex flex-col gap-10 border-border sm:flex-row lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
              <div className="bg-primary/10 flex h-24 w-24 items-center justify-center rounded-xl sm:h-40 sm:w-40">
                <svg
                  className="text-primary h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <div className="flex h-full flex-col justify-between gap-10">
                <div>
                  <h3 className="mb-4 text-xl font-semibold">
                    Modernização de Sistemas
                  </h3>
                  <p className="sm:text-lg">
                    Transformamos sistemas legados em soluções de alto
                    desempenho, com arquitetura moderna e redução de até 70% nos
                    custos de manutenção.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-primary">Resultados:</p>
                    <ul className="text-muted-foreground list-inside list-disc space-y-1">
                      <li>Até 10x mais transações por hora</li>
                      <li>Migração segura sem perda de dados</li>
                      <li>Treinamento da equipe na nova stack</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 self-center lg:flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  10x
                </p>
                <p className="font-semibold text-primary">Performance</p>
                <p className="text-muted-foreground">
                  Aumento em processamento
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-4xl font-medium text-primary sm:text-5xl">
                  70%
                </p>
                <p className="font-semibold text-primary">Redução de custos</p>
                <p className="text-muted-foreground">Manutenção anual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
