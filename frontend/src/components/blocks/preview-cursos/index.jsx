import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon } from "lucide-react";

export default function PreviewCursos() {
  // Dados do curso em destaque
  const featuredCourse = {
    id: "1",
    title: "Desenvolvimento Web Moderno com React e Next.js",
    description:
      "Aprenda a construir aplicações web modernas utilizando React, Next.js e as melhores práticas do mercado. Este curso abrange desde conceitos fundamentais até técnicas avançadas para criar experiências de usuário ricas e performáticas.",
    date: "Início: 15/04/2024",
    duration: "80 horas",
    category: "Desenvolvimento Web",
    imageUrl:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "desenvolvimento-web-moderno",
  };

  // Lista de cursos
  const courses = [
    {
      id: "2",
      title: "Inteligência Artificial para Iniciantes",
      description:
        "Introdução aos conceitos fundamentais de IA e machine learning com Python.",
      date: "Início: 28/03/2024",
      duration: "60 horas",
      category: "Inteligência Artificial",
      imageUrl:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "inteligencia-artificial-iniciantes",
    },
    {
      id: "3",
      title: "DevOps: Do Básico ao Avançado",
      description:
        "Aprenda a implementar pipelines de CI/CD, containers e infraestrutura como código.",
      date: "Início: 12/03/2024",
      duration: "100 horas",
      category: "DevOps",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "devops-basico-avancado",
    },
    {
      id: "4",
      title: "UX/UI Design para Desenvolvedores",
      description:
        "Princípios de design para criar interfaces intuitivas e agradáveis para os usuários.",
      date: "Início: 24/02/2024",
      duration: "40 horas",
      category: "Design",
      imageUrl:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "ux-ui-design-devs",
    },
  ];

  const title = "Nossos Cursos de Tecnologia";
  const description =
    "Aprenda ferramentas do software livre, acessíveis e modernas com os melhores instrutores.";

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            <p className="text-muted-foreground max-w-[700px]">{description}</p>
          </div>

          <div className="grid w-full gap-8 pt-4 lg:grid-cols-3">
            {/* Curso em destaque */}
            <Card className="col-span-full flex flex-col overflow-hidden pt-0 lg:col-span-2">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={featuredCourse.imageUrl}
                  alt={featuredCourse.title}
                  className="object-cover transition-transform hover:scale-105 w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                />
              </div>
              <CardHeader className="flex-1">
                <div className="text-muted-foreground mb-2 flex items-center gap-2 text-sm">
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="h-3 w-3" />
                    {featuredCourse.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <ClockIcon className="h-3 w-3" />
                    {featuredCourse.duration}
                  </span>
                  <span>•</span>
                  <span>{featuredCourse.category}</span>
                </div>
                <CardTitle className="mb-2 text-2xl">
                  {featuredCourse.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {featuredCourse.description}
                </CardDescription>
                <Button asChild variant="default" className="mt-4 w-fit">
                  <Link href="#">
                    Saiba Mais
                    <span className="sr-only">
                      Sobre {featuredCourse.title}
                    </span>
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            {/* Lista de cursos */}
            <div className="col-span-full space-y-4 lg:col-span-1">
              <h3 className="border-b pb-2 text-lg font-medium">
                Próximos Cursos
              </h3>
              <div className="space-y-6">
                {courses.map((course) => (
                  <div key={course.id} className="group">
                    <div className="flex items-start gap-4">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <img
                          src={course.imageUrl}
                          alt={course.title}
                          className="object-cover w-full h-full"
                          sizes="64px"
                        />
                      </div>
                      <div className="space-y-1">
                        <h4 className="group-hover:text-primary line-clamp-2 font-medium transition-colors">
                          <Link href="#" className="hover:underline">
                            {course.title}
                          </Link>
                        </h4>
                        <div className="text-muted-foreground flex flex-wrap items-center gap-x-1 text-xs">
                          <span>{course.date}</span>
                          <span>•</span>
                          <span>{course.duration}</span>
                          <span>•</span>
                          <span>{course.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="#">Ver Todos os Cursos</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
