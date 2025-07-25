
import Articles from "@/components/Articles";
import { apiServer } from "@/lib/api-server.server";
import HeroBlog from "@/components/blocks/hero-blog";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function BlogSection({ searchParams }) {
  const params = await searchParams;
  const currentPage = parseInt(params?.page || "1");

  // Busca os artigos
  const articles = await apiServer.public.get(`articles?page=${currentPage}`);

  return (
    <section className="pt-14 md:pt-0">
     <HeroBlog />
    
      <div className="container mx-auto space-y-6 px-4 md:space-y-8 md:px-6 2xl:max-w-[1400px]">
        <h1 className="text-4xl font-extrabold text-center mb-8 md:text-5xl">
          Tech Insights & Trends
        </h1>
        <Articles initialArticles={articles} currentPage={currentPage} />
      </div>
    </section>
  );
}
