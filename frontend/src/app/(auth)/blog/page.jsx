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
        <h1 className="text-4xl font-extrabold text-center mb-8 md:text-5xl">
          Tech Insights & Trends
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-md space-y-1">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Últimos Artigos de Tecnologia
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Fique por dentro das tendências, novidades e inovações do universo
              tech
            </p>
          </div>
        </div>

        <Articles initialArticles={articles} currentPage={currentPage} />
      </div>
    </section>
  );
}
