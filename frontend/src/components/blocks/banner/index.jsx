import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function CTABanner() {
  return (
    <div className="bg-primary w-full py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, delay: 0.25 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-primary-foreground text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Pronto para transformar o mundo ao seu redor?
        </h2>

        <p className="text-primary-foreground/90 mx-auto mt-3 max-w-2xl text-lg">
          Vamos trabalhar para criar algo excepcional juntos 
        </p>

        <Button
          asChild
          size="lg"
          variant="secondary"
          className="group mt-8 font-medium"
        >
          <Link href="/contato">
            Contatar
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
