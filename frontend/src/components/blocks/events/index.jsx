import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

// Dados de eventos de exemplo
const events = [
  {
    id: 1,
    title: "Design Responsivo em 2024",
    event: "FrontEnd Summit",
    role: "Palestrante Principal",
    date: "15 de março de 2024",
    location: "San Francisco, CA",
    summary:
      "Discutimos as tendências emergentes em design responsivo e como a IA está mudando a forma como construímos interfaces adaptáveis.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    link: "/eventos/detalhar/",
  },
  {
    id: 2,
    title: "Workshop de UX: Técnicas de Pesquisa com Usuários",
    event: "DesignMatters Conference",
    role: "Líder do Workshop",
    date: "28 de janeiro de 2024",
    location: "Evento Virtual",
    summary:
      "Workshop prático ensinando métodos de pesquisa com usuários que podem ser implementados com qualquer orçamento.",
    image:
      "https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=2070&auto=format&fit=crop",
    link: "/eventos/detalhar/",
  },
  {
    id: 3,
    title: "Construindo Aplicações Web Acessíveis",
    event: "A11y Summit",
    role: "Moderador de Painel",
    date: "12 de novembro de 2023",
    location: "Chicago, IL",
    summary:
      "Liderei uma discussão sobre as melhores práticas para construir produtos digitais acessíveis do zero.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2112&auto=format&fit=crop",
    link: "/eventos/detalhar/",
  },
  {
    id: 4,
    title: "De Freelancer a Proprietário de Agência",
    event: "Freelance Business Forum",
    role: "Palestrante Convidado",
    date: "5 de outubro de 2023",
    location: "Austin, TX",
    summary:
      "Compartilhei minha jornada e conselhos práticos para freelancers que desejam expandir seus negócios e construir uma equipe.",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop",
    link: "/eventos/detalhar/",
  },
  {
    id: 5,
    title: "Design Systems em Escala",
    event: "DesignOps Global",
    role: "Líder do Workshop",
    date: "18 de setembro de 2023",
    location: "Berlim, Alemanha",
    summary:
      "Workshop de um dia sobre como criar, implementar e manter sistemas de design para grandes organizações.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    link: "/eventos/detalhar/",
  },
  {
    id: 6,
    title: "Design de Sites Focados em Conversão",
    event: "Marketing Innovation Summit",
    role: "Palestrante",
    date: "22 de julho de 2023",
    location: "Nova York, NY",
    summary:
      "Apresentei estratégias para criar sites que equilibram uma experiência do usuário excepcional com metas de conversão de negócios.",
    image:
      "https://images.unsplash.com/photo-1540304453527-62f979142a17?q=80&w=2070&auto=format&fit=crop",
    link: "/eventos/detalhar/",
  },
];

export default function Events() {
  return (
    <section className="bg-background py-16 md:py-24" id="events">
      <div className="container mx-auto px-4 2xl:max-w-[1400px]">
        {/* Cabeçalho da seção */}
        <div className="mb-12 text-center md:mb-16">
          <Badge className="mb-4" variant="outline">
            Palestras & Workshops
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Palestras e Workshops
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Eu sou palestrante regular em conferências e lidero workshops sobre
            design, desenvolvimento e estratégia digital
          </p>
        </div>

        {/* Grid de eventos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card
              key={event.id}
              className="flex flex-col overflow-hidden pt-0 transition-all duration-300 hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  fill={"true"}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <Badge className="absolute bottom-4 left-4" variant="secondary">
                  {event.role}
                </Badge>
              </div>

              <CardHeader>
                <h3 className="line-clamp-2 text-xl font-semibold">
                  {event.title}
                </h3>
                <p className="text-primary font-medium">{event.event}</p>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="mb-4 flex flex-col space-y-2">
                  <div className="text-muted-foreground flex items-center text-sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="text-muted-foreground flex items-center text-sm">
                    <MapPin className="mr-2 h-4 w-4" />
                    {event.location}
                  </div>
                </div>
                <p className="text-muted-foreground line-clamp-3 text-sm">
                  {event.summary}
                </p>
              </CardContent>

              <CardFooter className="pt-0">
                <Button variant="ghost" asChild className="group">
                  <Link
                    href={`${event.link}/${event.id}`}
                    className="text-primary flex items-center"
                  >
                    <span className="mr-2">Detalhes do evento</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
