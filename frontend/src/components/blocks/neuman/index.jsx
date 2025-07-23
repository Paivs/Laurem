"use client";
import { Rocket, Lightbulb, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

// Keep complex objects separate for reusability
const defaultFeatures = [
  {
    icon: Rocket,
    title: "Versionamento de documentos",
    link: "https://neuman.laurem.com.br/",
    description:
      "Controle total sobre as versões dos seus documentos, permitindo restaurar, comparar e colaborar com segurança.",
  },
  {
    icon: Lightbulb,
    title: "Gerenciamento de acessos",
    description:
      "Compartilhe documentos com diferentes níveis de permissão, garantindo controle e privacidade na colaboração.",
  },
  {
    icon: Users,
    title: "Integração completa",
    description:
      "Infraestrutura moderna com Node.js, Next.js, Postgres e deploy automatizado com Docker e Coolify.",
  },
];

function Neuman({
  // Hero section
  badgeText = "Conheça o Neuman",
  titleHighlight = "Neuman",
  title = ", gerenciador de documentos para advodagos",
  description = "Uma plataforma de versionamento, gerenciamento e compartilhamento de documentos. Ideal para times modernos que valorizam controle e colaboração.",

  // Vision section
  visionImageSrc = "https://images.unsplash.com/photo-1543664644-1658107bb4bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  visionImageAlt = "Trabalho em equipe com tecnologia",
  visionBadge = "VISÃO",
  visionText = "Facilitar o trabalho em equipe através de uma plataforma robusta e moderna, com versionamento inteligente e controle de acesso refinado, impulsionado por tecnologias open source.",

  // Mission section
  missionImageSrc = "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200",
  missionImageAlt = "Código e infraestrutura",
  missionBadge = "MISSÃO",
  missionText = "Empoderar profissionais e organizações com uma ferramenta de código aberto para controle total de seus documentos e fluxos de trabalho.",

  // Approach section
  approachBadge = "ABORDAGEM",
  approachTitle = "Construído com tecnologias modernas",
  approachDescription = "Neuman usa uma stack tecnológica de ponta com um visual elegante e acessível. O projeto é livre, colaborativo e focado nas necessidades reais dos usuários.",
  features = defaultFeatures,
}) {
  return (
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
              <Image
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
            <Image
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
                <Link href={"https://Neuman.laurem.com.br"}>
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
  );
}

export default Neuman;
