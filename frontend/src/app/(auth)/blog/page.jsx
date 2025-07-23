import Articles from "@/components/Articles";
import { apiServer } from "@/lib/api-server";

export default async function BlogSection({ searchParams }) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1");

  // Busca os artigos com tratamento de erro
  const articles = await apiServer.public.get(`articles?page=${currentPage}`);
  console.log(articles);
  

  return (
    <section className="py-12 md:py-20 lg:py-24">
  <div className="container mx-auto space-y-6 px-4 md:space-y-8 md:px-6 2xl:max-w-[1400px]">
    {/* Título Principal Aprimorado */}
    <div className="text-center mb-12 space-y-4">
      <h1 className="text-4xl font-extrabold py-2 tracking-tight md:text-5xl lg:text-6xl text-primary ">
        Tecnologia e outros
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:text-xl">
        Explore perspectivas disruptivas do cenário digital
      </p>
    </div>

    <Articles initialArticles={articles} currentPage={currentPage} />
  </div>
</section>
  );
}
