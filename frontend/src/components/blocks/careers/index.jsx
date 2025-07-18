"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  BriefcaseIcon,
  BuildingIcon,
  MapPinIcon,
  DollarSignIcon,
  StarIcon,
  BookmarkIcon,
  TrendingUpIcon,
  BarChartIcon,
  UsersIcon,
  CalendarIcon,
} from "lucide-react";

export default function Vagas() {
  // Dados de exemplo para vagas
  const vagas = [
    {
      id: "senior-frontend-engineer",
      titulo: "Engenheiro Frontend Sênior",
      departamento: "Engenharia",
      empresa: "Laurem",
      logoEmpresa: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      localizacao: "São Paulo - SP SP",
      tipoLocal: "remoto",
      tipoEmprego: "tempo-integral",
      nivelExperiencia: "sênior",

      salario: "R$ 1300,00",
      descricao:
        "Liderar o desenvolvimento do nosso produto principal usando React, TypeScript e tecnologias web modernas. Junte-se a uma equipe talentosa trabalhando em soluções inovadoras.",
      destaque: true,
      tipoDestaque: "competitivo",
      beneficios: [
        "Horário flexível",
        "Opção remota",
        "Plano de saúde",
        "Previdência privada",
        "Orçamento para aprendizagem",
      ],
    },
    {
      id: "product-manager",
      titulo: "Gerente de Produto",
      departamento: "Produto",
      empresa: "Laurem",
      logoEmpresa:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      localizacao: "São Paulo - SP, RJ",
      tipoLocal: "remoto",
      tipoEmprego: "tempo-integral",
      nivelExperiencia: "sênior",

      salario: "R$ 1200,00",
      descricao:
        "Definir a visão e estratégia do produto para nossa plataforma SaaS. Colaborar com equipes multifuncionais para entregar experiências excepcionais aos usuários.",
      destaque: true,
      tipoDestaque: "novo",
      beneficios: [
        "Férias ilimitadas",
        "Benefícios de saúde",
        "Opção remota",
        "Participação nos lucros",
        "Refeições no local",
      ],
    },
    {
      id: "senior-data-scientist",
      titulo: "Cientista de Dados Sênior",
      departamento: "Ciência de Dados",
      empresa: "Laurem",
      logoEmpresa: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
      localizacao: "São Paulo - SP: ",
      tipoLocal: "remoto",
      tipoEmprego: "tempo-integral",
      nivelExperiencia: "sênior",

      salario: "R$ 1400,00",
      descricao:
        "Aplicar técnicas de machine learning e estatística para resolver problemas complexos de negócios. Trabalhar com grandes conjuntos de dados para extrair insights e impulsionar a tomada de decisões.",
      destaque: true,
      tipoDestaque: "em-alta",
      beneficios: [
        "Cultura remota-first",
        "Horário flexível",
        "Retiros trimestrais",
        "Auxílio saúde & bem-estar",
        "Orçamento para home office",
      ],
    },
    {
      id: "software-architect",
      titulo: "Arquiteto de Software",
      departamento: "Engenharia",
      empresa: "Laurem",
      logoEmpresa: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
      localizacao: "São Paulo - SP MG",
      tipoLocal: "remoto",
      tipoEmprego: "tempo-integral",
      nivelExperiencia: "lider",

      salario: "R$ 1600,00",
      descricao:
        "Projetar e liderar o desenvolvimento de aplicações escaláveis e nativas na nuvem. Dirigir decisões técnicas e mentorar engenheiros juniores nas melhores práticas.",
      destaque: true,
      tipoDestaque: "competitivo",
      beneficios: [
        "Salário competitivo",
        "Participação nos lucros",
        "Previdência privada",
        "Plano de saúde completo",
        "Orçamento para desenvolvimento profissional",
      ],
    },
    {
      id: "ux-design-lead",
      titulo: "Líder de UX Design",
      departamento: "Design",
      empresa: "Laurem",
      logoEmpresa: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
      localizacao: "São Paulo - SP RS",
      tipoLocal: "remoto",
      tipoEmprego: "tempo-integral",
      nivelExperiencia: "lider",

      salario: "R$ 1300,00",
      descricao:
        "Liderar uma equipe de designers para criar experiências de usuário intuitivas e envolventes. Colaborar com equipes de produto e engenharia para entregar produtos coesos.",
      destaque: true,
      tipoDestaque: "popular",
      beneficios: [
        "Ambiente de estúdio criativo",
        "Ferramentas de design atualizadas",
        "Plano de saúde",
        "Assinatura de academia",
        "Vestuário casual",
      ],
    },
    {
      id: "backend-engineer",
      titulo: "Engenheiro Backend",
      departamento: "Engenharia",
      empresa: "Laurem",
      logoEmpresa: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg",
      localizacao: "São Paulo - SP",
      tipoLocal: "remoto",
      tipoEmprego: "tempo-integral",
      nivelExperiencia: "pleno",

      salario: "R$ 1150.000",
      descricao:
        "Desenvolver serviços e APIs backend escaláveis usando tecnologias modernas. Colaborar com equipes frontend para integrar interfaces de usuário.",
      destaque: true,
      tipoDestaque: "novo",
      beneficios: [
        "Horário flexível",
        "Opção remota",
        "Plano de saúde",
        "Programa de bem-estar",
        "Desenvolvimento profissional",
      ],
    },
  ];

  // Formatar tipo de localização para exibição
  const formatarTipoLocal = (tipo) => {
    switch (tipo) {
      case "remoto":
        return "Remoto";
      case "híbrido":
        return "Híbrido";
      case "presencial":
        return "Presencial";
      default:
        return tipo;
    }
  };

  // Formatar tipo de emprego para exibição
  const formatarTipoEmprego = (tipo) => {
    switch (tipo) {
      case "tempo-integral":
        return "Tempo integral";
      case "meio-periodo":
        return "Meio período";
      case "contrato":
        return "Contrato";
      case "estagio":
        return "Estágio";
      default:
        return tipo;
    }
  };

  // Obter ícone e cor para o destaque
  const getDetalhesDestaque = (destaque) => {
    switch (destaque) {
      case "novo":
        return {
          icone: <StarIcon className="h-4 w-4" />,
          rotulo: "Novo",
          cor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
        };
      case "em-alta":
        return {
          icone: <TrendingUpIcon className="h-4 w-4" />,
          rotulo: "Em alta",
          cor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
        };
      case "competitivo":
        return {
          icone: <BarChartIcon className="h-4 w-4" />,
          rotulo: "Competitivo",
          cor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
        };
      case "popular":
        return {
          icone: <UsersIcon className="h-4 w-4" />,
          rotulo: "Popular",
          cor: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
        };
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {vagas.map((vaga) => {
            const detalhesDestaque = vaga.destaque
              ? getDetalhesDestaque(vaga.tipoDestaque)
              : null;

            return (
              <CarouselItem
                key={vaga.id}
                className="pl-2 sm:basis-1/2 md:pl-4 lg:basis-1/3"
              >
                <Card className="flex h-full flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="bg-card relative flex h-12 w-12 items-center justify-center rounded-md border">
                        <div className="absolute flex h-full w-full items-center justify-center">
                          {vaga.logoEmpresa ? (
                            <Image
                              src={vaga.logoEmpresa}
                              alt={vaga.empresa}
                              width={48}
                              height={48}
                              className="h-12 w-12 object-contain"
                            />
                          ) : (
                            <BuildingIcon className="text-muted-foreground h-6 w-6" />
                          )}
                        </div>
                      </div>
                      {detalhesDestaque && (
                        <Badge
                          variant="secondary"
                          className={`flex items-center gap-1 ${detalhesDestaque.cor}`}
                        >
                          {detalhesDestaque.icone}
                          {detalhesDestaque.rotulo}
                        </Badge>
                      )}
                    </div>
                    <div className="mt-3">
                      <CardTitle>{vaga.titulo}</CardTitle>
                      <div className="mt-1 flex items-center gap-1">
                        <BuildingIcon className="text-muted-foreground h-3.5 w-3.5" />
                        <CardDescription className="!mt-0">
                          {vaga.empresa}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-grow flex-col gap-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="text-muted-foreground h-4 w-4" />
                        <span className="text-sm">{vaga.localizacao}</span>
                        <Badge variant="outline" className="ml-auto text-xs">
                          {formatarTipoLocal(vaga.tipoLocal)}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <BriefcaseIcon className="text-muted-foreground h-4 w-4" />
                        <span className="text-sm">{vaga.departamento}</span>
                        <Badge variant="outline" className="ml-auto text-xs">
                          {formatarTipoEmprego(vaga.tipoEmprego)}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSignIcon className="text-muted-foreground h-4 w-4" />
                        <span className="text-sm">{vaga.salario}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mt-2 text-sm">
                      {vaga.descricao}
                    </p>

                    <div className="mt-auto">
                      <p className="text-muted-foreground mb-1.5 text-xs font-medium">
                        Benefícios:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {vaga.beneficios.slice(0, 3).map((beneficio, index) => (
                          <Badge
                            variant="secondary"
                            key={index}
                            className="text-xs"
                          >
                            {beneficio}
                          </Badge>
                        ))}
                        {vaga.beneficios.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{vaga.beneficios.length - 3} mais
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="w-1/2">
                      <BookmarkIcon className="mr-1 h-4 w-4" />
                      Salvar
                    </Button>
                    <Button size="sm" className="w-1/2">
                      Candidatar-se
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="mt-8 flex justify-center">
          <CarouselPrevious className="relative static mr-2 lg:absolute" />
          <CarouselNext className="relative static ml-2 lg:absolute" />
        </div>
      </Carousel>
      <div className="mt-12 text-center">
        <Button asChild variant="default" size="lg" className="px-8">
          <Link href="/vagas">Ver Todas as Vagas</Link>
        </Button>
      </div>
    </div>
  );
}
