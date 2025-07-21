"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogArticlePage() {
  const params = useParams();
  const { id } = params;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/articles/${id}`);

        if (!response.ok) {
          throw new Error("Artigo não encontrado");
        }

        const data = await response.json();
        setPost(data);
        toast.success("Artigo carregado com sucesso");
      } catch (err) {
        setError(err.message);
        toast.error("Erro ao carregar o artigo", {
          description: err.message,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  function formatarData(dataString) {
    return new Date(dataString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  if (loading) {
    return (
      <div className="container mx-auto max-w-2xl px-4 md:px-0 py-12 md:py-20 lg:py-24">
        <div className="mb-6 flex items-center gap-2">
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-10 w-full mb-4" />
        <Skeleton className="w-full h-64 md:h-96 mb-8 rounded-lg" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
        <p className="text-muted-foreground mb-6">{error}</p>
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
        <div className="flex flex-row gap-2 flex-wrap">
          {post.tags.map((tag, idx) => {
            <Badge key={idx} className="bg-primary hover:bg-primary/90">
              {tag}
            </Badge>;
          })}
        </div>
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.imgLink}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <article className="prose prose-lg max-w-none mb-8">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
        <Link
          href="/blog"
          className="text-primary underline inline-flex items-center hover:text-primary/80 transition-colors"
        >
          ← Voltar para o blog
        </Link>
      </div>
    </section>
  );
}
