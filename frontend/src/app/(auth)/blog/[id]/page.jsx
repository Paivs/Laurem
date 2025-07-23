import { blogPosts } from "../page";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowBigLeft, CalendarIcon, Quote } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { apiServer } from "@/lib/api-server";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Button } from "@/components/ui/button";

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
      <section className="relative py-20 lg:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-0 z-50">
          <div className="mb-6 flex items-center gap-2">
            <Badge className="bg-white text-primary font-bold hover:bg-primary/90">
              {post.category}
            </Badge>
            <span className="flex items-center text-white text-xs">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {formatarData(post.updatedAt)}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl text-white font-extrabold mb-4">
            {post.title}
          </h1>
          {post.tags.map((tag, idx) => {
            <Badge key={idx} className="bg-primary hover:bg-primary/90">
              {tag}
            </Badge>;
          })}
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <img
              src={post.imgLink}
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>
          <article className="mb-8">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {post.content}
            </ReactMarkdown>
            {/* Aqui você pode adicionar mais conteúdo real do artigo se desejar */}
          </article>

          <div className="rounded border border-border bg-primary text-secondary p-4 my-2">
            <div className="flex flex-row gap-2 items-center justify-start">
              <Quote />
              <p className="italic">
                Soluções digitais devem resolver problemas reais, facilitar a
                vida e tornar a tecnologia acessível. O propósito humano guia
                sempre foi ampliar nossa independência.
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
      </section>
    </>
  );
}
