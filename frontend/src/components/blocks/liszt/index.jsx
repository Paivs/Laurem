"use client";
import {
  Rocket,
  Lightbulb,
  Users,
  ArrowRight,
  Zap,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { CallToAction1 } from "../cta/cta-project";

// Keep complex objects separate for reusability
const defaultFeatures = [
  {
    icon: Rocket,
    title: "Sessões e agenda",
    link: "https://liszt.laurem.com.br/",
    description:
      "Gerencie sua agenda com opções de visualização avançadas para seu dia, semana ou mês. Totalmente integrada com a conta do cliente, uma experiência moderna",
  },
  {
    icon: Lightbulb,
    title: "Geração de conteúdo",
    description:
      "Pacientes preenchem diário de sonhos e emoções. Este conteúdo pode ser usado em consulta ou, simplemente, um bom hábito.",
  },
  {
    icon: Users,
    title: "Administre seus pacientes",
    description:
      "Acompanhe o progresso, histórico de sessões e suas informações incluindo contatos de emergência.",
  },
];

function Liszt({
  // Hero section - inline defaults for simple strings
  badgeText = "Conheça o Liszt",
  titleHighlight = "Liszt",
  title = ", Gerenciador de Psicoterapia",
  description = "Uma plataforma completa para terapia online. Funcionalidades realmente utéis, combinando cuidado humano com excelência técnica",

  // Vision section
  visionImageSrc = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200",
  visionImageAlt = "Colaboração em time",
  visionBadge = "VALORES",
  visionText = "Liszt é uma plataforma que disponibiliza as ferramentas essenciais para o terapeuta realizar seu trabalho. Fornecemos, através de tecnologias de código aberto, modernidade e usabilidade!",

  // Mission section
  missionImageSrc = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200",
  missionImageAlt = "Colaboração em time",
  missionBadge = "MISSÃO",
  missionText = "Viabilizar a autonomia para profissionais com tecnologia de código aberto",

  // Approach section
  approachBadge = "ABORDAGEM",
  approachTitle = "Necessidades de profissionais reais",
  approachDescription = "Um projeto aberto como o Liszt é fruto de vivência e colaboração de profissionais reais. Seu feedback é importante, uma ideia, crítica ou conselho é sempre bem vindo. Veja algumas funcções já implementadas:",
  features = defaultFeatures,
}) {
  return (
    <>
      <section className="max-w-7xl px-4 mx-auto bg-background py-16 md:py-24">
        <div className="flex flex-col gap-16 md:gap-24">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Badge variant="outline" className="w-max">
              {badgeText}
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <h1 className="text-pretty text-4xl font-bold tracking-tight lg:text-6xl">
              <span className="relative text-primary">{titleHighlight}</span>
              {title}
            </h1>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="group flex flex-col justify-between gap-6 rounded-lg bg-muted p-6 shadow-sm transition-all duration-300 hover:shadow-md md:p-8">
              <div className="overflow-hidden rounded-md">
                <img
                  src={visionImageSrc}
                  alt={visionImageAlt}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <Badge variant="outline" className="font-medium">
                  {visionBadge}
                </Badge>
                <p className="text-xl font-medium">{visionText}</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-sm">
              <img
                src={missionImageSrc}
                alt={missionImageAlt}
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
                <div className="p-6 text-white md:p-8">
                  <Badge
                    variant="outline"
                    className="mb-3 border-white/20 bg-white/10 text-white"
                  >
                    {missionBadge}
                  </Badge>
                  <p className="text-xl font-medium">{missionText}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 md:gap-12">
            <div className="max-w-2xl">
              <Badge variant="outline">
                {approachBadge}{" "}
                <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Badge>
              <h2 className="mb-3 mt-6 text-3xl font-bold md:text-4xl">
                {approachTitle}
              </h2>
              <p className="text-muted-foreground">{approachDescription}</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 md:gap-10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col rounded-lg border border-border p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-sm"
                >
                  <Link href={"https://liszt.laurem.com.br"}>
                    <div className="mb-4 flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 transition-all group-hover:bg-primary/20">
                      <item.icon className="size-5 text-primary md:size-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                    <p className="mb-4 text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-auto flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      <span>{item.learnMoreText}</span>
                      <ArrowRight className="ml-1 size-4" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction1
        icon={ZapIcon}
        title="Funcionalidades realmente utéis, ganhe liberdade e autonomia"
        description="Liszt é uma plataforma que disponibiliza as ferramentas essenciais para o terapeuta realizar seu trabalho. Fornecemos, através de tecnologias de código aberto, modernidade e usabilidade!"
        buttonText="Acessar"
        link="https://liszt.laurem.com.br/"
        features={[
          "Gerencimento de sessões",
          "Cadastro e controle total dos seus pacientes",
          "Independência de Google, Microsoft ou outra bigh tech",
          "Disponibildiade 24/7",
          "Tecnologia nacional desenvolvida para e com o brasileiro",
        ]}
      />
    </>
  );
}

export default Liszt;
