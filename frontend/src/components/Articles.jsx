"use client";

import { useState } from "react";
import BlogPagination from "./BlogPagination";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Articles({ initialArticles }) {
  const [articles, setArticles] = useState(initialArticles);

  function formatarData(dataString) {
    return new Date(dataString).toLocaleDateString("pt-BR");
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(articles.data) &&
          articles.data.map((post) => (
            <Card
              key={post._id}
              className="flex h-full flex-col overflow-hidden p-0 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-40 overflow-hidden sm:h-48 md:h-52">
                <img
                  src={post.imgLink}
                  alt={post.title}
                  className="object-cover transition-transform duration-300 hover:scale-105 h-full w-full"
                />
                <div className="absolute top-3 left-3 flex flex-row gap-2 flex-wrap">
                  <Badge className="bg-primary hover:bg-primary/90">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="flex-grow">
                <div className="text-muted-foreground mb-2 flex items-center text-xs sm:mb-3 sm:text-sm">
                  <CalendarIcon className="mr-1 h-3 w-3" />
                  <span>{formatarData(post.updatedAt)}</span>
                </div>
                <div className="flex flex-row gap-2">
                  {post.tags.map((data, idx) => {
                    return (
                      <Badge
                        key={idx}
                        className="bg-primary hover:bg-primary/90"
                      >
                        {data}
                      </Badge>
                    );
                  })}
                </div>
                <h3 className="mb-2 line-clamp-2 text-base font-semibold sm:text-lg">
                  {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 text-xs sm:line-clamp-3 sm:text-sm">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="pb-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-sm"
                  asChild
                >
                  <Link
                    href={`/blog/${post._id}`}
                    className="flex items-center justify-center"
                  >
                    Ler Mais
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>

      <BlogPagination articles={articles} setArticles={setArticles} />
    </>
  );
}
