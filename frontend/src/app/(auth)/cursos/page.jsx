import Events from "@/components/blocks/events";
import SimplePageHeading from "@/components/blocks/page-headings";
import PreviewCursos from "@/components/blocks/preview-cursos";
import ServicesOverview from "@/components/blocks/services-overview";
import Testimonials from "@/components/blocks/testimonials/base";

export default function Projetos() {
  return (
    <main className="overflow-hidden relative">
      <div className="bg-primary/10 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-primary/5 absolute -right-32 -bottom-32 h-96 w-96 rounded-full blur-3xl" />
      <div className="pt-12 ">
        <SimplePageHeading
          title="Aprenda com a Laurem"
          description="Aqui não existem mensalidades ou limitações. Buscamos democratizar o conhecimento ao povo brasileiro... Assista todo o conteúdo e colabore com a comunidade. Somente em comunidade avançamos!"
        />
      </div>

      <PreviewCursos />

      <section className="flex flex-col md:flex-row gap-4 items-center justify-between mx-auto container px-4">
        <Testimonials />
        <iframe
          src="https://www.youtube.com/embed/yup8gIXxWDU?si=_4cXNRU90dbKqSO9"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-80"
        ></iframe>
      </section>
    </main>
  );
}
