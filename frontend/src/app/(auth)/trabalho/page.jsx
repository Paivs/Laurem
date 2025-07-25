"use client";
import Careers from "@/components/blocks/careers";

import { Button } from "@/components/ui/button";
import { Check, ChevronRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Trabalho() {
  return (
    <>
      <section className="py-32">
        <div className="container mx-auto">
          <motion.div
            className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Texto principal */}
            <motion.div
              className="mx-auto flex max-w-xl flex-col justify-between gap-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h1 className="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-5xl lg:text-5xl text-primary">
                  Junte-se à equipe da Laurem
                </h1>
                <p className="mt-6 max-w-3xl text-lg sm:text-xl text-muted-foreground">
                  Faça parte de uma software house que valoriza inovação,
                  colaboração e desenvolvimento contínuo. Venha construir
                  soluções modernas, focadas em software livre, código aberto,
                  experiência do usuário e soberania digital.
                </p>

                {/* Botões */}
                <motion.div
                  className="mt-10 flex flex-col sm:flex-row items-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button size="lg" asChild className="w-full sm:w-auto">
                    <Link href="/trabalho#vagas">
                      Nossos Projetos <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <Link href="/contato">
                      Fale Conosco <MessageSquare className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Ilustração com animação */}
            <motion.div
              className="flex justify-center md:justify-end items-center w-full h-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="/img/paper-plane.svg"
                alt="Ilustração criativa"
                className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto drop-shadow-xl"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div id="vagas">
        <Careers />
      </div>
      {/* <WhyWork /> */}
    </>
  );
}
