import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useCallback } from "react";
import Link from "next/link";

export default function HeroShowcases() {
  const scrollToEvents = useCallback(() => {
    if (typeof window === "undefined") return;
    setTimeout(() => {
      const el = document.getElementById("events");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        console.log("Scroll suave para #events");
      } else {
        window.location.hash = "#events";
        console.log("Fallback: hash #events setado");
      }
    }, 50);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.12, delay: 0.25 }}
      viewport={{ once: true }}
      className="relative overflow-hidden h-screen flex items-center justify-center"
    >
      {/* Background gradient accent */}
      <div className="bg-primary/10 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-primary/5 absolute -right-32 -bottom-32 h-96 w-96 rounded-full blur-3xl" />
      <div className="relative container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-5 md:gap-12 md:py-20 lg:py-24 xl:gap-16 2xl:max-w-[1400px]">
        {/* Text column - takes 3/5 on desktop, full on mobile */}
        <div className="flex flex-col justify-center md:col-span-3 md:pr-6 xl:pr-12">
          <div className="space-y-6 md:space-y-8">
            {/* Label with dots */}
            <div className="hidden sm:flex items-center space-x-3">
              <h1 className="text-primary text-sm font-semibold tracking-wider uppercase hidden">
                LAUREM
              </h1>
            </div>

            {/* Main heading with multi-line approach */}
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight md:text-4xl lg:text-5xl text-center lg:text-left">
              <span className="text-primary">
                Eventos Laurem e de Parceiros:
              </span>{" "}
              <span className="text-foreground">
                experiências únicas para todos
              </span>
            </h1>

            {/* Description text */}
            <p className="text-muted-foreground max-w-xl text-lg">
              Participe dos eventos exclusivos promovidos pela Laurem e descubra
              também oportunidades em eventos de parceiros e terceiros. Uma
              agenda completa para seu desenvolvimento, networking e inovação.
            </p>

            {/* Featured clients section */}
            <div className="pt-2">
              <p className="mb-3 text-sm font-medium text-center md:text-left underline text-muted-foreground">
                NOSSOS DIFERENCIAIS
              </p>
              <div className="flex flex-wrap items-center gap-6 justify-center md:justify-normal">
                <div className="text-muted-foreground/70 hover:text-foreground font-semibold transition-colors">
                  DIVULGAÇÃO DIGITAL
                </div>
                <div className="text-muted-foreground/70 hover:text-foreground font-semibold transition-colors">
                  EXPERIÊNCIA DO USUÁRIO
                </div>
                <div className="text-muted-foreground/70 hover:text-foreground font-semibold transition-colors">
                  EVENTOS PRÓPRIOS E DE TERCEIROS
                </div>
              </div>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group cursor-pointer"
                onClick={scrollToEvents}
                type="button"
              >
                Ver agenda completa
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button variant="outline" size="lg" className="group" asChild>
                <Link href="/eventos/agendar">
                  Quero um evento Laurem
                  <ExternalLink className="ml-2 h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Image column - takes 2/5 on desktop, full on mobile */}
        <div className="relative hidden md:flex aspect-[4/5] w-full items-center md:col-span-2 md:aspect-auto md:h-[600px]">
          {/* Decorative element */}
          <div className="border-primary/20 bg-background/50 absolute -top-6 -right-6 h-20 w-20 rounded-md border backdrop-blur-sm"></div>

          {/* Main image with frame */}
          <div className="border-muted/30 bg-muted/10 relative z-10 h-full w-full">
            <Image
              src="https://illustrations.popsy.co/red/man-riding-a-rocket.svg"
              alt="Ilustração de evento"
              fill
              className="object-center"
              priority
            />
            {/* Gradient overlay */}
          </div>

          {/* Decorative element */}
          <div className="border-primary/10 bg-background/50 absolute -bottom-6 -left-6 h-24 w-24 rounded-full border backdrop-blur-sm"></div>
        </div>
      </div>
    </motion.div>
  );
}
