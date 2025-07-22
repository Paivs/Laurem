import { blogPosts } from "../page";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { apiServer } from "@/lib/api-server";

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
    <section className="py-12 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-2xl px-4 md:px-0">
        <div className="mb-6 flex items-center gap-2">
          <Badge className="bg-primary hover:bg-primary/90">
            {post.category}
          </Badge>
          <span className="flex items-center text-muted-foreground text-xs">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {formatarData(post.updatedAt)}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          {post.title}
        </h1>
        {post.tags.map((tag, idx) => {
          <Badge key={idx} className="bg-primary hover:bg-primary/90">
            {tag}
          </Badge>;
        })}
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.imgLink}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <article className="prose prose-lg max-w-none mb-8">
          <ReactMarkdown>{post.content}</ReactMarkdown>
          {/* Aqui você pode adicionar mais conteúdo real do artigo se desejar */}
        </article>
        <Link href="/blog" className="text-primary underline">
          ← Voltar para o blog
        </Link>
      </div>
    </section>
  );
}
