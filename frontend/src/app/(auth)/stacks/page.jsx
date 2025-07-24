"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Server,
  Shield,
  ChevronRight,
  Zap,
  ShieldAlert,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function WebStack() {
  return (
    <section id="web" className="mb-20 scroll-mt-24">
      <Card className="border-border bg-gradient-to-br from-background to-muted/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
        <CardHeader className="pb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Code size={24} />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Tecnologias Web
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nossa equipe utiliza tecnologias modernas para construir aplicações
            web robustas, rápidas e escaláveis. Frameworks como React e Next.js
            permitem criar interfaces reativas e performáticas. A combinação com
            Tailwind CSS e Shadcn garante flexibilidade no design e
            produtividade no desenvolvimento.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "React",
              "Next.js",
              "Tailwind CSS",
              "Shadcn",
              "Node.js",
              "Spring Boot",
              "Go Gin",
              "TypeScript",
              "PostgreSQL",
            ].map((tech, index) => (
              <div
                key={tech}
                className="group flex items-center gap-2 p-3 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:bg-muted/50"
              >
                <ChevronRight
                  size={16}
                  className="text-primary group-hover:translate-x-1 transition-transform duration-300"
                />
                <span className="font-medium text-sm text-foreground">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function MobileStack() {
  return (
    <section id="mobile" className="mb-20 scroll-mt-24">
      <Card className="border-border bg-gradient-to-br from-background to-muted/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
        <CardHeader className="pb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-secondary/20 text-secondary-foreground">
              <Smartphone size={24} />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Tecnologias Mobile
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            No desenvolvimento mobile, focamos em ferramentas que oferecem alta
            performance e experiência nativa, tanto para iOS quanto Android.
            Usamos soluções cross-platform para acelerar o time to market.
          </p>
          <div className="flex flex-wrap gap-3">
            {["React Native", "Expo"].map((tech, index) => (
              <Badge
                key={tech}
                className="px-4 py-2 text-sm hover:bg-secondary/80 hover:text-primary transition-all text-secondary font-bold duration-300 hover:scale-105 shadow-sm hover:shadow-lg"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function InfraStack() {
  return (
    <section id="infra" className="mb-20 scroll-mt-24">
      <Card className="border-border bg-gradient-to-br from-background to-muted/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
        <CardHeader className="pb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-accent/20 text-accent-foreground">
              <Server size={24} />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Infraestrutura & DevOps
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Para garantir estabilidade, segurança e escalabilidade, adotamos
            infraestrutura em nuvem, automação e monitoramento contínuo. Temos
            preferência por hosting nacional para garantir soberania e
            disponibilidade, no entanto, o cliente tem sempre razão :)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Docker",
              "Nginx",
              "Kubernetes",
              "Coolify",
              "Linux",
              "Prometheus",
              "Grafana",
              "Zabbix",
            ].map((tech, index) => (
              <div
                key={tech}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border hover:border-primary transition-all duration-300 hover:shadow-md group hover:bg-muted/50"
              >
                <div className="w-6 h-6 rounded-full bg-primary text-secondary flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
                <span className="font-medium group-hover:text-accent-foreground transition-colors duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function CyberStack() {
  return (
    <section id="cyber" className="mb-20 scroll-mt-24">
      <Card className="border-border bg-gradient-to-br from-background to-muted/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
        <CardHeader className="pb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-destructive/10 text-destructive">
              <Shield size={24} />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Cibersegurança
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A proteção dos dados e sistemas é essencial. Utilizamos as melhores
            práticas e ferramentas para identificar, mitigar vulnerabilidades e
            blindar os sistemas.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "OWASP",
              "Metasploit",
              "Wireshark",
              "Kali Linux",
              "Snort",
              "Firewalls",
              "Penetration Testing",
            ].map((tech, index) => (
              <div
                key={tech}
                className="group flex items-center gap-2 p-3 rounded-lg bg-muted/30 border border-border hover:border-destructive/50 transition-all duration-300 hover:shadow-md hover:bg-muted/50"
              >
                <div className="w-2 h-2 rounded-full bg-destructive group-hover:scale-125 transition-transform duration-300"></div>
                <span className="font-medium text-sm group-hover:text-destructive transition-colors duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default function TechnologiesPage() {
  return (
    <>
      <motion.div
        className="mx-auto flex max-w-7xl px-4 flex-col justify-between gap-10 lg:flex-row lg:gap-20 items-center pt-16"
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
              Soluções Especializadas
            </h1>
            <p className="mt-6 max-w-3xl text-lg sm:text-xl text-muted-foreground">
              Conheça as tecnologias de ponta que utilizamos para criar soluções
              inovadoras e robustas. Caso queira entender melhor, contate-nos!
            </p>

            {/* Botões */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/vendas">
                  Contatar vendas <ChevronRight className="ml-2 h-5 w-5" />
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
            src="/img/creative-work.svg"
            alt="Ilustração criativa"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto drop-shadow-xl"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      <main className="max-w-7xl mx-auto px-4 flex gap-12">
        {/* Sidebar */}
        <nav
          className="sticky top-24 hidden md:flex flex-col gap-4 w-64 shrink-0 h-fit"
          aria-label="Seções"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-br from-muted/40 to-card border border-border shadow-xl backdrop-blur-sm">
            <h3 className="text-xs font-bold text-muted-foreground mb-6 uppercase tracking-widest">
              Tecnologias
            </h3>

            {[
              { id: "web", label: "Web", icon: Code },
              { id: "mobile", label: "Mobile", icon: Smartphone },
              { id: "infra", label: "Infraestrutura", icon: Server },
              { id: "cyber", label: "Cibersegurança", icon: ShieldAlert },
            ].map(({ id, label, icon: Icon }) => (
              <Link
                key={id}
                href={`#${id}`}
                className="group relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/30"
              >
                <span className="absolute left-0 top-0 h-full w-2 rounded-l-xl bg-primary scale-y-100 origin-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <Icon
                  size={18}
                  className="group-hover:rotate-[8deg] group-hover:text-primary transition-transform duration-400"
                />
                <span>{label}</span>
                <ChevronRight
                  size={16}
                  className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                />
              </Link>
            ))}
          </div>
        </nav>

        {/* Content */}
        <article className="flex-1 space-y-16">
          <WebStack />
          <MobileStack />
          <InfraStack />
          <CyberStack />
        </article>
      </main>
    </>
  );
}
