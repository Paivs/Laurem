"use client";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CalendarIcon,
  ClockIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  Instagram,
  Smartphone,
} from "lucide-react";
import React from "react";
import { calculateReadingTime } from "./readingTime";

function BlogSingle1({
  // Header section
  coverImage,
  title,

  // Author section
  author,
  date,
  readTime,
  tags = [],

  // Content section (markdown string)
  content,

  // Sidebar section
  shareTitle = "Compartilhar artigo",
  relatedArticlesTitle = "Artigos Relacionados",
  relatedArticles = [],
  newsletterTitle = "Fique Atualizado",
  newsletterDescription = "Assine nossa newsletter para receber mais insights.",
  newsletterButtonText = "Assinar Newsletter",
  articleUrl,
  shareText,
}) {
  const readingTime = calculateReadingTime(content, { language: "pt" });

  const currentUrl =
    articleUrl || (typeof window !== "undefined" ? window.location.href : "");
  const defaultShareText = `Confira este artigo: "${title}"`;
  const textToShare = shareText || defaultShareText;

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}&text=${encodeURIComponent(textToShare)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      currentUrl
    )}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      `${textToShare} ${currentUrl}`
    )}`,
  };

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative mb-12 h-[600px] overflow-hidden">
          <img
            src={coverImage}
            alt="Imagem de capa do post"
            width={1200}
            height={600}
            className="h-full w-full rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end rounded-lg bg-gradient-to-r from-black/70 to-black/30 p-8 text-white">
            <h1 className="mb-4 text-5xl font-bold leading-tight">{title}</h1>
            <div className="mb-4 flex items-center space-x-4">
              <Avatar className="size-12 ring-2 ring-primary ring-offset-2 ring-offset-background">
                <AvatarImage src={author?.avatarSrc} alt={author?.name} />
                <AvatarFallback>{author?.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xl font-semibold">{author?.name}</p>
                <p className="text-sm opacity-75">{author?.role}</p>
              </div>
            </div>
            <div className="mb-4 flex items-center text-sm">
              <CalendarIcon className="mr-2 size-5" />
              <time dateTime={date} className="mr-4">
                {date}
              </time>
              <ClockIcon className="mr-2 size-5" />
              <span>{readingTime.formattedTime}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8 lg:col-span-9">
            <article className="prose prose-lg max-w-none dark:prose-invert">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-semibold mb-4 mt-8">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-semibold mb-3 mt-6">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-xl font-semibold mb-2 mt-4">
                      {children}
                    </h4>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 text-lg leading-relaxed">{children}</p>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
                      {children}
                    </blockquote>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-4 space-y-2">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => <li className="text-lg">{children}</li>,
                  code: ({ children }) => (
                    <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                      {children}
                    </pre>
                  ),
                  table: ({ children }) => (
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border-collapse border border-border">
                        {children}
                      </table>
                    </div>
                  ),
                  th: ({ children }) => (
                    <th className="border border-border bg-muted p-3 text-left font-semibold">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="border border-border p-3">{children}</td>
                  ),
                  a: ({ href, children }) => (
                    <Link
                      href={href || "#"}
                      className="text-primary hover:underline"
                    >
                      {children}
                    </Link>
                  ),
                  img: ({ src, alt }) => (
                    <div className="my-6">
                      <Image
                        src={src || ""}
                        alt={alt || ""}
                        width={800}
                        height={400}
                        className="rounded-lg w-full h-auto"
                      />
                    </div>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </article>
          </div>

          <aside className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-20 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{shareTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" asChild>
                      <Link href={shareUrls.linkedin}>
                        <LinkedinIcon className="size-4" />
                        <span className="sr-only">
                          Compartilhar no Linkedin
                        </span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href={shareUrls.whatsapp}>
                        <TwitterIcon className="size-4" />
                        <span className="sr-only">Compartilhar no X</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href={shareUrls.whatsapp}>
                        <svg
                          fill="#000000"
                          version="1.1"
                          id="Capa_1"
                          width="800px"
                          height="800px"
                          viewBox="0 0 30.667 30.667"
                        >
                          <g>
                            <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017   c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382   c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076   c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427   c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437   c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536   c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609   c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611   c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787   c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739   C23.307,19.268,23.307,18.533,23.214,18.38z" />
                          </g>
                        </svg>

                        <span className="sr-only">
                          Compartilhar no WhatsApp
                        </span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {author && (
                <Card>
                  <CardHeader>
                    <CardTitle>Sobre o Autor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <Avatar className="size-10 ring-2 ring-primary ring-offset-2 ring-offset-background">
                        <AvatarImage src={author.avatarSrc} alt={author.name} />
                        <AvatarFallback>{author.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{author.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {author.role}
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <p className="text-sm">{author.bio}</p>
                  </CardContent>
                </Card>
              )}

              {relatedArticles.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>{relatedArticlesTitle}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {relatedArticles.map((article, index) => (
                        <li key={index}>
                          <Link
                            href={article.href}
                            className="text-sm hover:underline"
                          >
                            {article.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>{newsletterTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm">{newsletterDescription}</p>
                  <Button className="w-full">{newsletterButtonText}</Button>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export { BlogSingle1 };
