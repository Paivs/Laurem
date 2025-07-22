"use client";

import { Button } from "@/components/ui/button";
import { Check, ChevronRight, FileText } from "lucide-react";
import Link from "next/link";

export default function ModernHero() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20 items-center">
          <div className="mx-auto flex max-w-xl flex-col justify-between gap-10">
            <div>
              <h1 className="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary">
                Construa interfaces
                <br />
                melhores com
                <br />
                componentes modernos
              </h1>
              <p className="mt-6 max-w-3xl text-lg sm:text-xl text-muted-foreground">
                Uma biblioteca de componentes profissionais para criar aplicações bonitas, responsivas e alinhadas à sua marca.
              </p>
              <ul className="mt-8 space-y-3 text-base sm:text-lg text-muted-foreground">
                <li className="flex items-center">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Componentes personalizáveis para qualquer design system</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Suporte a dark mode nativo</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Feito com TypeScript e totalmente acessível</span>
                </li>
              </ul>
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="#">
                    Começar <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="#">
                    Ver documentação <FileText className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          {/* Ilustração à direita */}
          <div className="flex justify-center md:justify-end items-center w-full h-full">
            <img
              src="https://illustrations.popsy.co/red/creative-work.svg"
              alt="Ilustração criativa"
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto drop-shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 