import Link from "next/link";
import {
  ArrowRight,
  Code,
  Palette,
  LineChart,
  Globe,
  MessageSquare,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Dados de serviços de exemplo
const services = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    description: "Sites e aplicações web modernos e responsivos",
    icon: <Code className="h-5 w-5" />,
    link: "#",
  },
  {
    id: 2,
    title: "Design UI/UX",
    description: "Design centrado no usuário que encanta e converte",
    icon: <Palette className="h-5 w-5" />,
    link: "#",
  },
  {
    id: 3,
    title: "Marketing Digital",
    description: "Estratégias baseadas em dados que impulsionam o crescimento",
    icon: <LineChart className="h-5 w-5" />,
    link: "#",
  },
  {
    id: 4,
    title: "Otimização SEO",
    description: "Melhore o ranking e a visibilidade orgânica",
    icon: <Globe className="h-5 w-5" />,
    link: "#",
  },
  {
    id: 5,
    title: "Criação de Conteúdo",
    description: "Conteúdo envolvente que ressoa com seu público",
    icon: <MessageSquare className="h-5 w-5" />,
    link: "#",
  },
  {
    id: 6,
    title: "Otimização de Performance",
    description: "Acelere seus produtos digitais para melhores resultados",
    icon: <Zap className="h-5 w-5" />,
    link: "#",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-background py-28 ">
      <div className="container mx-auto px-4 2xl:max-w-[1400px]">
        {/* Cabeçalho da seção */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Junte-se aos Nossos Projetos Inovadores!
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Especializados em entregar soluções modernas e de código aberto
            fornecendo liberdade, autonomia e modernidade
          </p>
        </div>

        {/* Lista de serviços - Layout horizontal para telas maiores, vertical para dispositivos móveis */}
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.link}
                className="group hover:border-primary/20 hover:bg-muted/50 flex items-center gap-4 rounded-lg border border-transparent p-3 transition-all duration-300"
              >
                <div className="bg-primary/10 rounded-full p-3">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <div>
                  <h3 className="font-medium">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
