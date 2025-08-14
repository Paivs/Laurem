import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function HeroShowcases() {
  return (
    <motion.section
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
              {/* <span className="bg-primary h-1.5 w-1.5 rounded-full"></span> */}
              <h1 className="text-primary text-sm font-semibold tracking-wider uppercase">
                LAUREM - Software, Soluções e Serviços
              </h1>
            </div>

            {/* Main heading with multi-line approach */}
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-center  lg:text-left">
              <span className="">Tecnologia que serve você, </span>
              <span className="text-primary mt-1">não o contrário.</span>
            </h1>

            {/* Description text */}
            <p className="text-muted-foreground max-w-xl text-lg">
              Tenha autonomia para escolher, personalizar e aproveitar
              soluções digitais feitas sob medida para você. Na Laurem, você
              adapta as ferramentas às suas necessidades e
              objetivos.
            </p>

            <div className="md:hidden border-muted/30 bg-muted/10 relative z-10 h-[300px] w-full overflow-hidden rounded-2xl border shadow-xl">
              <Image
                src="/img/home_section_1.avif"
                alt="Designer's workspace with contemporary design elements"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Featured clients section */}
            <section className="pt-2">
              <p className="text-muted-foreground mb-3 text-sm font-medium text-center md:text-left underline">
                GUIADOS POR
              </p>
              <ul className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                {[
                  "LIBERDADE",
                  "AUTONOMIA",
                  "USABILIDADE",
                  "RESPEITO",
                  "ÉTICA",
                  "MODERNIDADE",
                ].map((valor) => (
                  <li
                    key={valor}
                    className="text-muted-foreground/70 hover:text-foreground text-sm md:text-base font-semibold transition-colors"
                  >
                    {valor}
                  </li>
                ))}
              </ul>
            </section>

            {/* Call to action buttons */}
            <nav className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href={"/servicos"}>
                  Ver soluções
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="group">
                <Link href={"/contato"}>
                  Entrar em contato
                  <ExternalLink className="ml-2 h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
                </Link>
              </Button>
            </nav>
          </div>
        </div>

        {/* Image column - takes 2/5 on desktop, full on mobile */}
        <div className="relative hidden md:flex aspect-[4/5] w-full items-center md:col-span-2 md:aspect-auto md:h-[600px]">
          {/* Decorative element */}
          <div className="border-primary/20 bg-background/50 absolute -top-6 -right-6 h-20 w-20 rounded-md border backdrop-blur-sm"></div>

          {/* Main image with frame */}
          <div className="border-muted/30 bg-muted/10 relative z-10 h-full w-full overflow-hidden rounded-2xl border shadow-xl hidden md:block">
            <Image
              src="/img/home_section_1.avif"
              alt="Designer's workspace with contemporary design elements"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          {/* Decorative element */}
          <div className="border-primary/10 bg-background/50 absolute -bottom-6 -left-6 h-24 w-24 rounded-full border backdrop-blur-sm"></div>
        </div>
      </div>
    </motion.section>
  );
}
