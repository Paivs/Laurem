"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, MapPin, BookOpen } from "lucide-react";
import Link from "next/link";
import { api } from "@/lib/api";

// Esquema de validação com Zod
const formSchema = z.object({
  nomeCompleto: z
    .string()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),

  email: z.string().email({ message: "E-mail inválido" }),

  telefone: z
    .string()
    .min(11, { message: "O telefone deve ter pelo menos 11 dígitos" }),

  empresa: z.string().optional(),

  servico: z.enum(["consultoria", "workshop", "palestra", "visita", "outro"], {
    required_error: "Selecione um tipo de serviço",
    invalid_type_error:
      "Tipo de serviço inválido. Opções válidas: consultoria, workshop, palestra, visita ou outro.",
  }),

  data: z.string().min(1, { message: "Selecione uma data" }),

  horario: z.string().min(1, { message: "Selecione um horário" }),

  participantes: z.preprocess(
    (val) => {
      if (typeof val === "string") return Number(val);
      return val;
    },
    z
      .number({
        invalid_type_error: "Número de participantes inválido",
        required_error: "Informe o número de participantes",
      })
      .min(1, { message: "Informe ao menos 1 participante" })
  ),

  mensagem: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" }),

  termos: z.literal(true, {
    errorMap: () => ({ message: "Você deve aceitar os termos de uso" }),
  }),
});

export default function AgendamentoSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeCompleto: "",
      email: "",
      telefone: "",
      empresa: "",
      servico: "consultoria",
      data: "",
      horario: "",
      participantes: 1, // valor inicial numérico
      mensagem: "",
      termos: false,
    },
  });
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await api.post("events", data);
      toast.success("Evento requisitado com sucesso!");
      setSuccessMessage(
        "Recebemos seu pedido... assim que possível retornamos seu contato"
      );
      reset();
    } catch (error) {
      console.log(error);
      
      toast.error("Falha ao enviar. Tente novamente mais tarde.");
    }
  };

  const onError = (errors) => {
    // Concatenando todos os erros com quebras de linha visíveis
    const errorMessages = Object.values(errors)
      .map((error) => `• ${error.message}`) // Adiciona bullet points
      .join("\n"); // Usa quebra de linha real

    // Usando description para melhor formatação
    // toast.error("Por favor, corrija os seguintes erros:", {
    //   description: (
    //     <div className="whitespace-pre-line">
    //       {" "}
    //       {/* Isso preserva quebras de linha */}
    //       {errorMessages}
    //     </div>
    //   ),
    //   duration: 10000, // 10 segundos para ler todos os erros
    // });
  };

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
            Agende uma Consultoria, Workshop, Palestra ou Visita
          </h1>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário abaixo para solicitar nossos serviços
            especializados. Nossa equipe entrará em contato para confirmar os
            detalhes.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-xl bg-card border border-primary/20 p-8 shadow-sm">
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nomeCompleto">
                  <User className="inline mr-2 h-4 w-4" />
                  Nome Completo
                </Label>
                <Input
                  id="nomeCompleto"
                  placeholder="Seu nome completo"
                  {...register("nomeCompleto")}
                />
                {errors.nomeCompleto && (
                  <p className="text-sm text-red-500">
                    {errors.nomeCompleto.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  <BookOpen className="inline mr-2 h-4 w-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="telefone">
                  <Clock className="inline mr-2 h-4 w-4" />
                  Telefone
                </Label>
                <Input
                  id="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  {...register("telefone")}
                />
                {errors.telefone && (
                  <p className="text-sm text-red-500">
                    {errors.telefone.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="empresa">
                  <MapPin className="inline mr-2 h-4 w-4" />
                  Empresa/Instituição
                </Label>
                <Input
                  id="empresa"
                  placeholder="Nome da sua empresa"
                  {...register("empresa")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="servico">Tipo de Serviço</Label>
              <select
                id="servico"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                {...register("servico")}
              >
                <option value="">Selecione uma opção</option>
                <option value="consultoria">Consultoria Especializada</option>
                <option value="workshop">Workshop</option>
                <option value="palestra">Palestra</option>
                <option value="visita">Visita Técnica</option>
                <option value="outro">Outro</option>
              </select>
              {errors.servico && (
                <p className="text-sm text-red-500">{errors.servico.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="data">
                  <Calendar className="inline mr-2 h-4 w-4" />
                  Data Preferencial
                </Label>
                <Input id="data" type="date" {...register("data")} />
                {errors.data && (
                  <p className="text-sm text-red-500">{errors.data.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="horario">
                  <Clock className="inline mr-2 h-4 w-4" />
                  Horário Preferencial
                </Label>
                <Input id="horario" type="time" {...register("horario")} />
                {errors.horario && (
                  <p className="text-sm text-red-500">
                    {errors.horario.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="participantes">
                Número Aproximado de Participantes
              </Label>
              <Input
                id="participantes"
                type="number"
                min="1"
                placeholder="Ex: 25"
                {...register("participantes", { valueAsNumber: true })}
              />
              {errors.participantes && (
                <p className="text-sm text-red-500">
                  {errors.participantes.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensagem">Detalhes Adicionais</Label>
              <Textarea
                id="mensagem"
                placeholder="Descreva brevemente seus objetivos, tema de interesse, necessidades específicas..."
                rows={5}
                {...register("mensagem")}
              />
              {errors.mensagem && (
                <p className="text-sm text-red-500">
                  {errors.mensagem.message}
                </p>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                id="termos"
                {...register("termos")}
                className="h-4 w-4 rounded border-primary text-primary focus:ring-primary"
              />
              <Label htmlFor="termos" className="text-sm">
                Concordo com os Termos de Serviço e Política de Privacidade
              </Label>
            </div>
            {errors.termos && (
              <>
                {errors.termos.message?.toString() ==
                "Invalid input: expected true" ? (
                  <p className="text-sm text-red-500">
                    Você deve concordar com os termos
                  </p>
                ) : (
                  <p className="text-sm text-red-500">
                    {errors.termos.message?.toString()}
                  </p>
                )}
              </>
            )}

            <Button type="submit" className="w-full py-6 text-lg">
              Solicitar Agendamento
            </Button>

            <span className="font-bold text-green-700">{successMessage}</span>
          </form>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Dúvidas sobre agendamentos?
          </h3>
          <p className="text-muted-foreground mb-6">
            Entre em contato diretamente com nossa equipe de atendimento
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="mailto:contato@laurem.com.br">
              <Button variant="outline" className="gap-2">
                <BookOpen className="h-4 w-4" />
                contato@laurem.com.br
              </Button>
            </Link>
            <Link href="tel:+5511980697346">
              <Button variant="outline" className="gap-2">
                <Clock className="h-4 w-4" />
                (11) 98069-7346
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
