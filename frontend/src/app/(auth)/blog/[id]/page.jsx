"use client";

import { blogPosts } from '../page';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function BlogArticlePage() {
  const params = useParams();
  const { id } = params;
  const post = blogPosts.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
        <Link href="/blog" className="text-primary underline">Voltar para o blog</Link>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-2xl px-4 md:px-0">
        <div className="mb-6 flex items-center gap-2">
          <Badge className="bg-primary hover:bg-primary/90">{post.category}</Badge>
          <span className="flex items-center text-muted-foreground text-xs">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {post.date}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{post.title}</h1>
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
        </div>
        <article className="prose prose-lg max-w-none mb-8">
          <p>{post.excerpt}</p>
          {/* Aqui você pode adicionar mais conteúdo real do artigo se desejar */}
        </article>
        <Link href="/blog" className="text-primary underline">← Voltar para o blog</Link>
      </div>
    </section>
  );
} 