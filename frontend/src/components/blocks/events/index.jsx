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
    title: "Soberania Digital e Software Livre no Brasil",
    event: "Fórum de Tecnologia Pública",
    role: "Palestrante Principal",
    date: "10 de junho de 2024",
    location: "Brasília, DF",
    summary:
      "Debatemos o papel do software livre na construção de uma infraestrutura digital soberana e sustentável para instituições públicas brasileiras.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    link: "/eventos/detalhar/1",
  },
  {
    id: 2,
    title: "Produção e Licenciamento de Software Aberto",
    event: "Open Source Brasil",
    role: "Instrutor de Workshop",
    date: "22 de agosto de 2024",
    location: "Recife, PE",
    summary:
      "Workshop focado em licenciamento de software livre, com orientações práticas para projetos de código aberto em conformidade com legislações brasileiras.",
    image:
      "https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=2070&auto=format&fit=crop",
    link: "/eventos/detalhar/2",
  },
  {
    id: 3,
    title: "A Nova Experiência do Desenvolvedor",
    event: "DevExperience Conf",
    role: "Palestrante Convidado",
    date: "3 de maio de 2024",
    location: "Curitiba, PR",
    summary:
      "Compartilhamos práticas modernas de DX (Developer Experience) com foco em ferramentas, automação de ambientes e simplificação do onboarding técnico.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    link: "/eventos/detalhar/3",
  },
  {
    id: 4,
    title: "Experiência do Usuário em Sistemas Governamentais",
    event: "UXGov Summit",
    role: "Moderador de Painel",
    date: "18 de abril de 2024",
    location: "Belo Horizonte, MG",
    summary:
      "Os desafios de criar experiências digitais acessíveis e eficientes para cidadãos em portais públicos e serviços online.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2112&auto=format&fit=crop",
    link: "/eventos/detalhar/4",
  },
  {
    id: 5,
    title: "Desenvolvimento de Software com Impacto Social",
    event: "Code For Change",
    role: "Líder do Workshop",
    date: "25 de março de 2024",
    location: "Porto Alegre, RS",
    summary:
      "Ensinamos práticas de desenvolvimento orientadas a impacto, com ferramentas open-source e foco em acessibilidade, ética e inclusão digital.",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop",
    link: "/eventos/detalhar/5",
  },
  {
    id: 6,
    title: "Mercado da Informação e Autonomia Tecnológica",
    event: "Tech Políticas Latam",
    role: "Palestrante",
    date: "9 de fevereiro de 2024",
    location: "São Paulo, SP",
    summary:
      "Foram apresentadas reflexões sobre como empresas brasileiras podem proteger seus dados e competir globalmente por meio de soluções próprias e abertas.",
    image:
      "https://images.unsplash.com/photo-1635321101901-7ac6eec3d371?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/eventos/detalhar/6",
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
                    // href={`${event.link}/${event.id}`}
                    href={`#`}
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
