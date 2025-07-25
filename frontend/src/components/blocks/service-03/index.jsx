"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <FeatureCard
            icon={<Zap className="size-6" />}
            title="Sites Estáticos"
            description="Alta performance, SEO otimizado e carregamento instantâneo para apresentar seu negócio com agilidade e elegância."
            animation={{
              y: [0, -6, 0],
              x: [0, 2, 0],
              duration: 2,
            }}
          />
          <FeatureCard
            icon={<Settings2 className="size-6" />}
            title="Sistemas Fullstack"
            description="Aplicações completas, com front-end e back-end integrados, seguras e escaláveis desde o primeiro deploy."
            animation={{
              y: [0, 4, 0],
              x: [0, -3, 0],
              duration: 2.5,
            }}
          />
          <FeatureCard
            icon={<Sparkles className="size-6" />}
            title="Integração com IA"
            description="Funcionalidades inteligentes que automatizam processos e melhoram a experiência do usuário com tecnologia de ponta."
            animation={{
              y: [0, -3, 3, 0],
              x: [0, 1, -1, 0],
              duration: 3,
            }}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, animation }) {
  return (
    <Card className="group border-0 shadow-none">
      <CardHeader className="pb-3">
        <CardDecorator animation={animation}>{icon}</CardDecorator>
        <h3 className="mt-6 text-lg font-semibold text-foreground">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function CardDecorator({ children, animation }) {
  return (
    <div className="relative mx-auto size-36 duration-200 [--color-border:theme(colors.border)] group-hover:[--color-border:theme(colors.primary)]">
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      {/* Soft radial light */}
      <div
        aria-hidden
        className="bg-radial to-background absolute inset-0 from-primary/10 to-75%"
      />
      {/* Animated Icon */}
      <motion.div
        animate={{ y: animation.y, x: animation.x }}
        transition={{
          duration: animation.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t bg-primary text-secondary"
      >
        {children}
      </motion.div>
    </div>
  );
}
