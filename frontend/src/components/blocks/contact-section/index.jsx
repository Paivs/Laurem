"use client";

import React, { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, AtSign, Globe } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { api } from "@/lib/api";

const ContactSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(2, "Assunto obrigatório"),
  message: z.string().min(5, "Mensagem muito curta"),
});

export default function ContactSection({
  title = "Nos Contate",
  description = "Estamos abertos a dúvidas, críticas e oportunidades de colaborações. Nos conte como ajudar!",
  phone = "+55 (11) 98069-7346",
  email = "gustavo.paiva.gp1@gmail.com",
  web = { label: "laurem.com.br", url: "https://laurem.com.br" },
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" }); // Limpa erro ao digitar
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = ContactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};

      result.error.issues.forEach((err) => {
        const field = err.path[0];
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem.");
      }

      toast.success("Mensagem enviada com sucesso!");
      setSuccessMessage(
        "Recebemos sua mensagem... assim que possível retornamos seu contato"
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      toast.error("Falha ao enviar. Tente novamente mais tarde.");
    }
  }

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-2">
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
                Nossos Contatos
              </h3>
              <ul className="ml-0 list-disc">
                <li className="flex items-center gap-2">
                  <Phone className="text-muted-foreground size-5" />
                  <span className="font-bold">Telefone: </span>
                  {phone}
                </li>
                <li className="flex items-center gap-2">
                  <AtSign className="text-muted-foreground size-5" />
                  <span className="font-bold">Email: </span>
                  <Link href={`mailto:${email}`}>{email}</Link>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="text-muted-foreground size-5" />
                  <span className="font-bold">Web: </span>
                  <Link href={web.url} target="_blank">
                    {web.label}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-full md:w-[32rem] flex-col gap-6 rounded-lg border border-primary/25 p-10"
          >
            <div className="grid w-full gap-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input
                className="border border-primary/25"
                type="text"
                id="name"
                placeholder="Escreva seu nome"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                className="border border-primary/25"
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="subject">Assunto</Label>
              <Input
                className="border border-primary/25"
                type="text"
                id="subject"
                placeholder="Assunto"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                className="border border-primary/25"
                id="message"
                placeholder="Escreva sua mensagem aqui"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <Button className="w-full" type="submit">
              Enviar
            </Button>
            {successMessage && (
              <p className="text-green-600 text-center">{successMessage}</p>
            )}
          </form>
        </div>
      </div>

      {/* <div className="mt-12 grid items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
        </div> */}
    </section>
  );
}
