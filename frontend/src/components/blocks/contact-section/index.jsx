import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BrainCircuit, MessageSquare, Wrench } from "lucide-react";
import Link from "next/link";

export default function ContactSection({
  title = "Nos Contate",
  description = "Estamos abertos a dúvidas, críticas e oportunidades de colaborações. Nos conte como ajudar!",
  phone = "+55 (11) 98069-7346",
  email = "gustavo.paiva.gp1@gmail.com",
  web = { label: "laurem.com.br", url: "https://laurem.com.br" },
}) {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
              <div className="flex items-center justify-center">
                <img
                  src="/img/app-launch.svg"
                  alt=""
                  className="max-h-[30vh]"
                />
              </div>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>

              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Telefone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Web: </span>
                  <a href={web.url} target="_blank" className="underline">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-lg border border-primary/25 p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">Primeiro Nome</Label>
                <Input
                  className={"border border-primary/25"}
                  type="text"
                  id="firstname"
                  placeholder="Escreva seu primeiro nome"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Último Nome</Label>
                <Input
                  className={"border border-primary/25"}
                  type="text"
                  id="lastname"
                  placeholder="Escreva seu último nome"
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                className={"border border-primary/25"}
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Assunto</Label>
              <Input
                className={"border border-primary/25"}
                type="text"
                id="subject"
                placeholder="Assunto"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                className={"border border-primary/25"}
                placeholder="Escreva sua mensagem aqui"
                id="message"
              />
            </div>
            <Button className="w-full">Enviar</Button>
          </div>
        </div>

        <div className="mt-12 grid items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <Link
            href={"/base-conhecimento"}
            className="group hover:bg-muted flex h-full flex-col rounded-lg p-4 text-center sm:p-6"
          >
            <BrainCircuit className="text-muted-foreground mx-auto size-9" />
            <div className="mt-5">
              <h3 className="text-lg font-semibold">Conhecimentos</h3>
              <p className="text-muted-foreground mt-1">
                Estamos aqui para ajudar com qualquer dúvida ou código
              </p>
              <p className="text-primary mt-5 inline-flex items-center gap-x-1 font-medium">
                Contato de suporte
                <svg
                  className="size-4 transition ease-in-out group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </Link>

          <Link
            href={"/faq"}
            className="group hover:bg-muted flex h-full flex-col rounded-lg p-4 text-center sm:p-6"
          >
            <MessageSquare className="text-muted-foreground mx-auto size-9" />
            <div className="mt-5">
              <h3 className="text-lg font-semibold">FAQ</h3>
              <p className="text-muted-foreground mt-1">
                Pesquise em nosso FAQ por resppostas para suas perguntas
              </p>
              <p className="text-primary mt-5 inline-flex items-center gap-x-1 font-medium">
                Visitar FAQ
                <svg
                  className="size-4 transition ease-in-out group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </Link>

          <Link
            href={"/trabalho"}
            className="group hover:bg-muted flex h-full flex-col rounded-lg p-4 text-center sm:p-6"
          >
            <Wrench className="text-muted-foreground mx-auto size-9" />
            <div className="mt-5">
              <h3 className="text-lg font-semibold">Desenvolver</h3>
              <p className="text-muted-foreground mt-1">
                Dê uma olahda em nosso guia de como começar
              </p>
              <p className="text-primary mt-5 inline-flex items-center gap-x-1 font-medium">
                Acessar guias
                <svg
                  className="size-4 transition ease-in-out group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
