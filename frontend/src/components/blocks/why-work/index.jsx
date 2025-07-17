"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Dados de projetos de exemplo
const projects = [
  {
    id: 1,
    title: "Redesign de Loja Virtual",
    description:
      "Transformamos uma loja online desatualizada em uma experiência de compra moderna e intuitiva com navegação melhorada e responsividade mobile.",
    before: {
      image:
        "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop",
      caption: "Layout poluído com experiência mobile ruim",
    },
    after: {
      image:
        "https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=2069&auto=format&fit=crop",
      caption: "Design limpo e responsivo com navegação intuitiva",
    },
    impact:
      "Taxa de conversão aumentou 45% e taxa de rejeição mobile diminuiu 30%",
  },
  {
    id: 2,
    title: "Atualização de Identidade Visual",
    description:
      "Revitalizamos uma identidade visual desatualizada com tipografia moderna, paleta de cores e elementos visuais, mantendo o reconhecimento da marca.",
    before: {
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      caption: "Identidade visual antiga sem consistência",
    },
    after: {
      image:
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2070&auto=format&fit=crop",
      caption: "Sistema de identidade coeso e moderno com elementos consistentes",
    },
    impact: "Reconhecimento da marca melhorou 60% em pesquisas com clientes",
  },
  {
    id: 3,
    title: "Otimização de UX para App",
    description:
      "Redesenhamos um fluxo complexo para reduzir atritos e melhorar as taxas de conclusão de tarefas em um aplicativo mobile.",
    before: {
      image:
        "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?q=80&w=2076&auto=format&fit=crop",
      caption: "Fluxo complexo exigindo muitas etapas",
    },
    after: {
      image:
        "https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=2070&auto=format&fit=crop",
      caption: "Interface simplificada com interações intuitivas",
    },
    impact:
      "Tempo de conclusão de tarefas reduziu 40% e satisfação do usuário aumentou 65%",
  },
];

export default function WhyWork() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 2xl:max-w-[1400px]">
        {/* Cabeçalho da seção */}
        <div className="mb-12 text-center md:mb-16">
          <Badge className="mb-4" variant="outline">
            Transformações
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            O Impacto do nosso Trabalho
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Veja a diferença que nossa colaboração pode fazer através desses projetos antes e depois
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Carrossel Antes/Depois */}
          <Carousel
            className="w-full"
            opts={{
              loop: true,
            }}
            setApi={(api) => {
              api?.on("select", () => {
                setActiveProject(api.selectedScrollSnap());
              });
            }}>
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <div className="p-1">
                    <div className="bg-card overflow-hidden rounded-xl border">
                      <div className="flex flex-col md:flex-row">
                        {/* Antes */}
                        <div className="relative md:w-1/2">
                          <div className="absolute top-2 left-2 z-10">
                            <Badge variant="secondary">Antes</Badge>
                          </div>
                          <div className="relative aspect-video">
                            <Image
                              src={project.before.image}
                              alt={`${project.title} antes`}
                              fill
                              className="object-cover" />
                          </div>
                          <div className="border-primary/10 bg-muted/50 p-2 text-center text-xs">
                            {project.before.caption}
                          </div>
                        </div>

                        {/* Depois */}
                        <div className="relative md:w-1/2">
                          <div className="absolute top-2 left-2 z-10">
                            <Badge>Depois</Badge>
                          </div>
                          <div className="relative aspect-video">
                            <Image
                              src={project.after.image}
                              alt={`${project.title} depois`}
                              fill
                              className="object-cover" />
                          </div>
                          <div className="border-primary/10 bg-muted/50 p-2 text-center text-xs">
                            {project.after.caption}
                          </div>
                        </div>
                      </div>

                      {/* Informações do Projeto */}
                      <div className="p-6">
                        <h3 className="mb-2 text-2xl font-semibold">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        <div className="bg-primary/10 mb-4 rounded-lg p-3">
                          <h4 className="mb-1 font-medium">
                            Impacto Mensurável:
                          </h4>
                          <p className="text-sm">{project.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex items-center justify-center gap-2">
              <CarouselPrevious className="relative inset-0 translate-y-0" />
              {projects.map((_, i) => (
                <Button
                  key={i}
                  variant={activeProject === i ? "default" : "outline"}
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => setActiveProject(i)}>
                  {i + 1}
                </Button>
              ))}
              <CarouselNext className="relative inset-0 translate-y-0" />
            </div>
          </Carousel>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="#" className="inline-flex items-center gap-2">
                <span>Ver todos os projetos</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}