import { Separator } from "@/components/ui/separator";
import { Users, ShieldCheck, CalendarSync } from "lucide-react";
// import { UserGroupIcon } from "@heroicons/react/24/outline";


const ServicesSection = () => {
  const servicos = [
    {
      title: "Desenvolvimento Colaborativo",
      description: "Projetos open-source desenvolvidos em parceria, onde sua equipe participa ativamente do processo com custo zero de desenvolvimento.",
      icon: <Users />,
      benefits: [
        "Licença MIT/GPL para ampla distribuição",
        "Visibilidade global no nosso marketplace",
        "Contribuição de desenvolvedores internacionais",
      ],
      investment: "0$",
      textInvestment1: "Investimento inicial",
      textInvestment2: "Custo zero para startups",
      marketReach: "3.8x",
      textMarketReach1: "Alcance de mercado",
      textMarketReach2: "Projetos open-source",

    },
    {
      title: "Soluções Exclusivas",
      description: "Sistemas proprietários desenvolvidos sob medida para seu negócio, com código-fonte 100% seu e pacotes de evolução contínua.",
      icon: <ShieldCheck />,
      benefits: [
        "Garantia de aprovação por funcionalidade",
        "Revisões semanais com ajustes ilimitados",
        "Contribuição de desenvolvedores internacionais",
      ],
      investment: "4.2x",
      textInvestment1: "Retorno (ROI)",
      textInvestment2: "Média dos primeiros 12 meses",
      marketReach: "72%",
      textMarketReach1: "Economia de tempo",
      textMarketReach2: "No lançamento ao mercado",
    },
    {
      title: "Modernização de Sistemas",
      description: "Transformamos sistemas legados em soluções de alto desempenho, com arquitetura moderna e redução de até 70% nos custos de manutenção.",
      icon: <CalendarSync />,
      benefits: [
        "Até 10x mais transações por hora",
        "Migração segura sem perda de dados",
        "Treinamento da equipe na nova stack",
      ],
      investment: "10x",
      textInvestment1: "Performance",
      textInvestment2: "Aumento em processamento",
      marketReach: "70%",
      textMarketReach1: "Redução de custos",
      textMarketReach2: "Manutenção anual",
    }
  ]
  return (
    <section className="py-15">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-6 text-center">
          <p className="font-medium">+100 projetos entregues</p>
          <h2 className="text-4xl font-medium md:text-5xl">
            Transformamos ideias em realidade digital
          </h2>
        </div>
        <div className="mt-20">

          {servicos.map((servico) => (
            <>
              <div className="grid gap-16 lg:grid-cols-3 xl:gap-24"></div>
              <div className="flex flex-col gap-10  sm:flex-row lg:col-span-2 lg:pr-16 xl:pr-24">
                <div className="bg-primary/10 flex h-24 w-24 items-center justify-center rounded-xl sm:h-40 sm:w-50">
                  <svg
                    className="text-primary h-12 w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {servico.icon}
                  </svg>
                </div>
                <div className="flex h-full flex-col justify-between gap-10">
                  <div>
                    <h3 className="mb-4 text-xl font-semibold">
                      {servico.title}
                    </h3>
                    <p className="sm:text-lg">
                      {servico.description}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-primary">Benefícios:</p>
                      <ul className="text-muted-foreground list-inside list-disc space-y-1">
                        {servico.benefits.map((beneficio) => (
                          <li key={beneficio}>{beneficio}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:border-r"></div>
                <div className="flex gap-10 self-center lg:flex-col">
                  <div className="flex flex-col gap-2">
                    <p className="text-4xl font-medium text-primary sm:text-5xl">
                      {servico.investment}
                    </p>
                    <p className="font-semibold text-primary">
                      {servico.textInvestment1}
                    </p>
                    <p className="text-muted-foreground">
                      {servico.textInvestment2}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-4xl font-medium text-primary sm:text-5xl">
                      {servico.marketReach}
                    </p>
                    <p className="font-semibold text-primary">
                      {servico.textMarketReach1}
                    </p>
                    <p className="text-muted-foreground">
                      {servico.textMarketReach2}
                    </p>
                  </div>

                </div>
              </div>
              <Separator className="my-10" />

            </>
          ))}

        </div>
      </div>

    </section >
  );
};

export default ServicesSection;
