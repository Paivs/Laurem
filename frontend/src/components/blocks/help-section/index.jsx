import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  BrainCircuit,
  MessageSquare,
  Wrench,
  HelpCircle,
  Mail,
  Phone,
  Globe,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { Faq3 } from "../faq-section";

export default function HelpPage() {
  // Recursos úteis
  const resources = [
    {
      title: "Aprofunde-se",
      description: "Entenda a proposta da Laurem...",
      icon: <HelpCircle className="size-6" />,
      link: "/sobre",
    },
    {
      title: "Tutoriais em Vídeo",
      description: "Aprenda com nossos cursos passo a passo",
      icon: <MessageSquare className="size-6" />,
      link: "/cursos",
    },
    {
      title: "Comunidade",
      description: "Conecte-se com outros usuários",
      icon: <BrainCircuit className="size-6" />,
      link: "/comunidade",
    },
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Central de Ajuda
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para suas perguntas ou entre em contato com nosso
            time de suporte
          </p>
        </div>

        {/* Barra de pesquisa */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            <Input
              placeholder="Pesquise por perguntas, tópicos ou palavras-chave..."
              className="pl-12 pr-6 py-6 text-lg border-2 border-primary/25 focus-visible:ring-primary"
            />
            <HelpCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 size-6 text-muted-foreground" />
          </div>
        </div>

        {/* Seção de Recursos */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Wrench className="size-6" /> Recursos Úteis
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="group hover:bg-muted flex flex-col rounded-lg p-6 border transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{resource.icon}</div>
                  <h3 className="text-lg font-semibold">{resource.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {resource.description}
                </p>
                <span className="text-primary mt-auto inline-flex items-center gap-1 font-medium">
                  Acessar
                  <svg
                    className="size-4 transition-transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <Faq3 />

        {/* Seção de Contato */}
        <div className="border-t pt-16">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="lg:w-1/2 flex flex-col gap-2 items-center justify-center">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Mail className="size-6" /> Entre em Contato
              </h2>
              <p className="text-muted-foreground mb-8">
                Não encontrou o que procurava? Nosso time de suporte está pronto
                para ajudar.
              </p>
            </div>

            <Link href={"/contato"}>
                <Button className={"text-xl font-bold p-4"}>Acessar página de contato</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
