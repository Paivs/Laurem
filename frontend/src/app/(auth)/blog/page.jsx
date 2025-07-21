"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "lucide-react";

// Exportar blogPosts para uso em outras páginas
export const blogPosts = [
  {
    id: 1,
    title: "AI Revolution: How Artificial Intelligence is Transforming Our World",
    category: "Inteligência Artificial",
    date: "Maio 10, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    excerpt:
      "Descubra como a IA está revolucionando setores como saúde, finanças e educação, e o que esperar para o futuro.",
  },
  {
    id: 2,
    title: "Quantum Computing: O Futuro da Computação Já Começou",
    category: "Computação Quântica",
    date: "Maio 2, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    excerpt:
      "Entenda como computadores quânticos prometem resolver problemas impossíveis para máquinas tradicionais.",
  },
  {
    id: 3,
    title: "5G e Além: A Nova Era da Conectividade Global",
    category: "Redes",
    date: "Abril 25, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    excerpt:
      "Como o 5G está mudando a forma como vivemos, trabalhamos e nos conectamos — e o que vem depois.",
  },
  {
    id: 4,
    title: "Blockchain Além das Criptomoedas: Aplicações Inovadoras",
    category: "Blockchain",
    date: "Abril 18, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    excerpt:
      "Descubra usos surpreendentes do blockchain em áreas como logística, saúde e identidade digital.",
  },
  {
    id: 5,
    title: "Cibersegurança em 2024: Novas Ameaças e Como se Proteger",
    category: "Cibersegurança",
    date: "Abril 10, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    excerpt:
      "Veja as tendências mais recentes em ataques digitais e as melhores práticas para proteger seus dados.",
  },
  {
    id: 6,
    title: "Realidade Aumentada e Virtual: O Futuro da Experiência Digital",
    category: "AR/VR",
    date: "Abril 3, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    excerpt:
      "Como AR e VR estão mudando o entretenimento, a educação e o varejo, criando novas formas de interação.",
  },
  {
    id: 7,
    title: "Edge Computing: Processamento de Dados na Ponta",
    category: "Edge Computing",
    date: "Março 27, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Entenda como o edge computing está tornando dispositivos mais inteligentes e reduzindo a latência.",
  },
  {
    id: 8,
    title: "Internet das Coisas: O Mundo Cada Vez Mais Conectado",
    category: "IoT",
    date: "Março 20, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt:
      "De casas inteligentes a cidades conectadas, veja como a IoT está mudando nosso cotidiano.",
  },
  {
    id: 9,
    title: "Desenvolvimento Low-Code/No-Code: Democratizando a Tecnologia",
    category: "Desenvolvimento",
    date: "Março 13, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Como plataformas low-code e no-code estão permitindo que qualquer pessoa crie soluções digitais.",
  },
  {
    id: 10,
    title: "Sustentabilidade Tech: Inovações para um Mundo Mais Verde",
    category: "Sustentabilidade",
    date: "Março 6, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Conheça tecnologias que estão ajudando empresas e pessoas a reduzirem seu impacto ambiental.",
  },
  {
    id: 11,
    title: "Automação Inteligente: Robôs e Algoritmos no Dia a Dia",
    category: "Automação",
    date: "Fevereiro 28, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Veja como a automação está otimizando processos em empresas e facilitando tarefas cotidianas.",
  },
  {
    id: 12,
    title: "Open Source: O Poder da Colaboração Global",
    category: "Open Source",
    date: "Fevereiro 21, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Como projetos open source estão acelerando a inovação e mudando o cenário tecnológico.",
  },
  {
    id: 13,
    title: "Privacidade Digital: Seus Dados Estão Seguros?",
    category: "Privacidade",
    date: "Fevereiro 14, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Entenda os desafios e soluções para proteger sua privacidade na era digital.",
  },
  {
    id: 14,
    title: "Carreiras Tech: As Profissões Mais Quentes de 2024",
    category: "Carreira",
    date: "Fevereiro 7, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Descubra quais áreas estão em alta e como se preparar para o mercado de tecnologia.",
  },
  {
    id: 15,
    title: "Design de Experiência: O Usuário no Centro de Tudo",
    category: "UX/UI",
    date: "Janeiro 31, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Saiba como o design centrado no usuário está revolucionando produtos digitais.",
  },
];

export default function BlogSection() {
  const [visibleCount, setVisibleCount] = useState(6);
  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, blogPosts.length));
  };

  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="container mx-auto space-y-6 px-4 md:space-y-8 md:px-6 2xl:max-w-[1400px]">
        {/* Título principal do topo */}
        <h1 className="text-4xl font-extrabold text-center mb-8 md:text-5xl">Tech Insights & Trends</h1>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-md space-y-1">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Últimos Artigos de Tecnologia
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Fique por dentro das tendências, novidades e inovações do universo tech
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, visibleCount).map((post) => (
            <Card key={post.id} className="flex h-full flex-col overflow-hidden p-0 shadow-sm transition-shadow hover:shadow-md">
              <div className="relative h-40 overflow-hidden sm:h-48 md:h-52">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="object-cover transition-transform duration-300 hover:scale-105 h-full w-full"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary hover:bg-primary/90">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="flex-grow">
                <div className="text-muted-foreground mb-2 flex items-center text-xs sm:mb-3 sm:text-sm">
                  <CalendarIcon className="mr-1 h-3 w-3" />
                  <span>{post.date}</span>
                </div>
                <h3 className="mb-2 line-clamp-2 text-base font-semibold sm:text-lg">
                  {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 text-xs sm:line-clamp-3 sm:text-sm">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="pb-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-sm"
                  asChild
                >
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex items-center justify-center"
                  >
                    Ler Mais
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {visibleCount < blogPosts.length && (
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="w-full max-w-sm" onClick={handleShowMore}>
              Browse All Articles
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
