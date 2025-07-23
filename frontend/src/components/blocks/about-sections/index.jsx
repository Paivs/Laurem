"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart,
  ArrowUpRightIcon,
  Globe,
  Heart,
  Key,
  Lightbulb,
  ShieldCheck,
  Users,
  Users2,
  Users2Icon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Company values data
const companyValues = [
  {
    id: "soberania-digital-autonomia",
    name: "Soberania e Autonomia",
    icon: Key,
    description:
      "Acreditamos que você deve ter o controle total sobre seus dados e ferramentas. Nossas soluções são projetadas para libertá-lo de ecossistemas fechados e dependências de grandes corporações (Big Techs), permitindo que você hospede, modifique e utilize o software como quiser.",
    color: "text-red-600", // Cor do logo da LAUREM
    principles: [
      "Softwares que respeitam a liberdade do usuário",
      "Evitar a dependência de Big Techs",
      "Priorizar hospedagem própria ou de confiança (self-host)",
      "Modelos de negócio sem mensalidades obrigatórias",
    ],
    testimonial: {
      quote:
        "A LAUREM acredita que o autônomo merece liberdade. Nossos produtos são feitos para você controlar, editar, e, se quiser, hospedar. Sem mensalidades obrigatórias.",
      author: "Maria Souza",
      role: "Profissional Autônoma",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800",
    },
    image:
      "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?q=80&w=800",
  },
  {
    id: "etica-privacidade",
    name: "Ética e Privacidade",
    icon: ShieldCheck,
    description:
      "Nossa tecnologia é construída com base no respeito ao usuário. Isso significa total privacidade dos seus dados, transparência em nossas práticas e um compromisso de que a tecnologia deve servir a você, e não o contrário.",
    color: "text-blue-600",
    principles: [
      "Promover o uso ético de tecnologia",
      "Garantir privacidade e controle total dos dados",
      "Adotar criptografia e práticas de segurança robustas",
      "Transparência total no código e nas operações",
    ],
    testimonial: {
      quote:
        "Saber que meus dados e os dos meus clientes estão seguros e sob meu controle total, sem agendas ocultas, é o que me dá tranquilidade para focar no meu trabalho.",
      author: "João Alves",
      role: "Contador",
      image:
        "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=800",
    },
    image:
      "https://images.unsplash.com/photo-1551818255-e6e10975846a?q=80&w=800",
  },
  {
    id: "usabilidade-simplicidade",
    name: "Usabilidade",
    icon: Lightbulb,
    description:
      "Criamos ferramentas poderosas que são intuitivas e fáceis de usar. Focamos em funcionalidades essenciais que resolvem problemas reais, sem complexidade desnecessária, para que você possa se concentrar no que realmente importa: seu trabalho.",
    color: "text-yellow-500",
    principles: [
      "Interfaces claras e objetivas",
      "Funcionalidades base gratuitas e úteis de verdade",
      "Soluções leves e de fácil implantação (até offline)",
      "Design focado na simplicidade e na experiência do usuário",
    ],
    testimonial: {
      quote:
        "Finalmente um sistema que entende a minha rotina. É simples, direto ao ponto e funciona offline. Me economiza horas toda semana.",
      author: "Carlos Lima",
      role: "Pequeno Comerciante",
      image:
        "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=800",
    },
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800",
  },
  {
    id: "comunidade-codigo-aberto",
    name: "Colaboração e Código Aberto",
    icon: Users2,
    description:
      "Acreditamos que a colaboração nos fortalece. Nossos projetos são de código aberto para incentivar a contribuição, o feedback e a criação conjunta. A comunidade é o coração da LAUREM, onde todos podem aprender, compartilhar e crescer juntos.",
    color: "text-green-600",
    principles: [
      "Desenvolvimento transparente e de código aberto",
      "Incentivar o feedback e a contribuição dos usuários",
      "Construir um ecossistema de ajuda mútua (fóruns, suporte)",
      "Modelos de sustentabilidade baseados em apoio comunitário (crowdfunding)",
    ],
    testimonial: {
      quote:
        "Fazer parte da comunidade LAUREM é mais do que usar um software. É poder sugerir melhorias, ajudar outros usuários e ver o projeto crescer com a nossa cara.",
      author: "Beatriz Costa",
      role: "Desenvolvedora e Usuária",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
    },
    image:
      "https://images.unsplash.com/photo-1531482615713-2c657695c282?q=80&w=800",
  },
];
export default function AboutSectionCompanyValues() {
  const [activeValue, setActiveValue] = useState(companyValues[0].id);

  // Get active value object
  const currentValue =
    companyValues.find((value) => value.id === activeValue) || companyValues[0];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
               <Tabs
          value={activeValue}
          onValueChange={setActiveValue}
          className="space-y-8"
        >
          {/* Value selection - Tabs for md+ screens, Dropdown for smaller screens */}
          <div className="mb-8 flex justify-center">
            {/* Dropdown for small screens */}
            <div className="w-full md:hidden">
              <Select value={activeValue} onValueChange={setActiveValue}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a value" />
                </SelectTrigger>
                <SelectContent>
                  {companyValues.map((value) => (
                    <SelectItem key={value.id} value={value.id}>
                      <div className="flex items-center gap-2">
                        <value.icon className={cn("h-4 w-4", value.color)} />
                        <span>{value.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Tabs for medium screens and above */}
            <TabsList className="hidden h-auto bg-transparent p-1 md:flex">
              {companyValues.map((value) => (
                <TabsTrigger
                  key={value.id}
                  value={value.id}
                  className={cn(
                    "data-[state=active]:bg-muted gap-2",
                    "data-[state=active]:border-border border border-transparent"
                  )}
                >
                  <value.icon className={cn("h-4 w-4", value.color)} />
                  <span>{value.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Value content */}
          <div className="grid items-center gap-8 md:grid-cols-12">
            {/* Left column: Value details */}
            <div className="space-y-6 md:col-span-6">
              <div className="mb-4 flex items-center gap-4">
                <div className={cn("rounded-xl p-2.5", "bg-muted")}>
                  <currentValue.icon
                    className={cn("h-7 w-7", currentValue.color)}
                  />
                </div>
                <h3 className="text-2xl font-bold">{currentValue.name}</h3>
              </div>

              <p className="text-muted-foreground text-lg">
                {currentValue.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-medium">Princípios:</h4>
                <ul className="space-y-2">
                  {currentValue.principles.map((principle, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowUpRightIcon
                        className={cn("mt-0.5 h-5 w-5", currentValue.color)}
                      />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {currentValue.testimonial && (
                <Card className="bg-muted/30 mt-6 p-0">
                  <CardContent className="p-6">
                    <div className="mb-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                        <img
                          src={currentValue.testimonial.image}
                          alt={currentValue.testimonial.author}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {currentValue.testimonial.author}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {currentValue.testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      &quot;{currentValue.testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right column: Value image */}
            <div className="md:col-span-6">
              {currentValue.image ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={currentValue.image}
                    alt={`Illustration of our ${currentValue.name} value`}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <div
                      className={cn(
                        "inline-block rounded-lg px-3 py-1 text-sm text-white",
                        "bg-black/30 backdrop-blur-sm"
                      )}
                    >
                      {currentValue.name}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-muted flex aspect-[4/3] items-center justify-center rounded-xl">
                  <currentValue.icon
                    className={cn(
                      "h-24 w-24",
                      currentValue.color,
                      "opacity-25"
                    )}
                  />
                </div>
              )}
            </div>
          </div>
        </Tabs>

        {/* Call-to-action */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
            Esses valores guam cada aspecto do nosso trabalho. Quer ser parte
            desse time que vive o lúdico?
          </p>
          <Button asChild size="lg">
            <Link href="/trabalho">Entre para o time</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
