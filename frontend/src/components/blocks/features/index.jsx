import { Card, CardContent } from "@/components/ui/card";
import {
  RocketIcon,
  ShieldCheckIcon,
  ZapIcon,
  BarChartIcon,
} from "lucide-react";

const features = [
  {
    icon: RocketIcon,
    title: "Alta Performance",
    description:
      "Otimizado para velocidade e eficiência, garantindo que sua aplicação funcione perfeitamente.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Segurança Integrada",
    description: "Recursos de segurança nativos para proteger seus dados e usuários.",
  },
  {
    icon: ZapIcon,
    title: "Integração Fácil",
    description: "Simples de integrar com suas ferramentas e fluxos de trabalho existentes.",
  },
  {
    icon: BarChartIcon,
    title: "Análises",
    description: "Métricas detalhadas para acompanhar seu progresso e resultados.",
  },
];

export default function Features() {
  return (
    <section
      className="container mx-auto space-y-8 px-4 py-24 md:px-6 2xl:max-w-[1400px]">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">
          Recursos que aumentam sua produtividade
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Tudo que você precisa para trabalhar com eficiência e eficácia.
          Desenvolvido por especialistas, projetado para o sucesso.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="p-0">
            <CardContent className="space-y-2 p-6">
              <feature.icon className="text-primary h-12 w-12" />
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}