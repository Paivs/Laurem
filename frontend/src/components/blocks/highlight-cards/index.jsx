import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function HighlightCards() {
  const projects = [
    {
      title: "Liszt - Gestão Completa para Terapeutas",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Sistema completo de gestão clínica desenvolvido especialmente para psicólogos e terapeutas, incluindo agendamento online, prontuário eletrônico seguro, teleconsulta integrada e gestão financeira. Adquira liberdade e autonomia com nossas soluções!",
      client: "Clínica Bem Estar",
      role: "UX Designer & Desenvolvedor Front-end",
      technologies: [
        "ReactJS",
        "Node.js",
        "Figma",
        "Prontuário Eletrônico",
        "LGPD",
      ],
      year: "2025",
      link: "#",
    },
    {
      title: "Neuman - Gestão Jurídica Inteligente",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Plataforma de gestão jurídica completa para escritórios de advocacia, com controle de processos automatizado, prazos processuais inteligentes, integração com tribunais e relatórios personalizados. Reduza em 60% o tempo gasto com tarefas administrativas.",
      client: "Silva & Associados",
      role: "Product Owner & Especialista em Direito Digital",
      technologies: [
        "Java",
        "Processo Judicial Eletrônico",
        "BI",
        "Prazos Processuais",
        "Cloud Computing",
      ],
      year: "2022",
      link: "#",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Projetos
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Uma seleta coleção de nossos projetos de impacto, demonstrando
            alcance e profundidade para todos os nossos clientes.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card overflow-hidden rounded-xl border shadow-sm transition-all hover:shadow-md"
            >
              <div className="grid md:grid-cols-3">
                {/* Project Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-auto md:h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6 md:col-span-2 md:p-8">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    {project.title}
                  </h3>

                  <div className="text-muted-foreground mb-4 flex flex-col flex-wrap gap-x-4 text-sm md:flex-row">
                    <span>{project.client}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{project.year}</span>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <Button asChild variant="outline" size="sm">
                    <Link href={project.link}>
                      Ver <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
