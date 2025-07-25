import { blogPosts } from "../page";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowBigLeft, CalendarIcon, Quote } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { apiServer } from "@/lib/api-server.server";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Button } from "@/components/ui/button";
import { BlogSingle1 } from "@/components/blocks/article";

export default async function BlogArticlePage({ params }) {
  const searchParams = await params;
  const { id } = searchParams;

  const fetchArticles = async (id) => {
    return await apiServer.public.get(`articles/${id}`);
  };

  function formatarData(dataString) {
    return new Date(dataString).toLocaleDateString("pt-BR");
  }

  const post = await fetchArticles(id);

  if (!post) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
        <Link href="/blog" className="text-primary underline">
          Voltar para o blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="w-full absolute min-h-56 bg-primary z-0"></div>
      <BlogSingle1
        articleUrl={`https://laurem.com.br/blog/${id}`}
        shareText={post.description}
        coverImage={post.imgLink}
        title={post.title}
        author={{
          name: "Gustavo Paiva",
          avatarSrc: "/img/paiva.jpeg",
          initials: "JS",
          role: "Desenvolvedor Fullstack",
          bio: "Desenvolvedor, Analista e Instrutor de Formação Profissional",
        }}
        date={formatarData(post.updatedAt)}
        tags={post.tags}
        content={post.content}
        relatedArticles={[]}
      />
      <div className="mx-auto max-w-7xl px-4 md:px-0 z-50">
        <div className="rounded border border-border bg-primary text-secondary p-4 my-2">
          <div className="flex flex-row gap-2 items-center justify-start">
            <Quote />
            <p className="italic">
              Soluções digitais devem resolver problemas reais, facilitar a vida
              e tornar a tecnologia acessível. O propósito humano sempre foi
              ampliar nossa independência.
            </p>
          </div>
          <div className="flex flex-col mt-2">
            <span className="text-base text-muted-secondary">- Laurem</span>
          </div>
        </div>

        <Button asChild>
          <Link href="/blog" className="">
            <ArrowBigLeft /> Voltar para o blog
          </Link>
        </Button>
      </div>
    </>
  );
}
