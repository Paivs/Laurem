import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  DollarSign,
  Headphones,
  ClipboardCheck,
} from "lucide-react";
import Link from "next/link";

export default function SalesSection({
  title = "Solicite um Orçamento",
  description = "Entre em contato para soluções personalizadas. Nossa equipe comercial está pronta para ajudar!",
  phone = "+55 (11) 98069-7346",
  email = "comercial@laurem.com.br",
  web = { label: "laurem.com.br", url: "https://laurem.com.br" },
}) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 lg:flex-row lg:gap-20">
          {/* Left Column - Info */}
          <div className="mx-auto flex max-w-md flex-col gap-8">
            <div className="text-center lg:text-left">
              <h1 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                {title}
              </h1>
              <p className="text-lg text-gray-600">{description}</p>

              <div className="mt-8">
                <img
                  src="/img/sales-consultation.svg"
                  alt="Atendimento Comercial"
                  className="mx-auto max-h-[25vh]"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-center text-xl font-semibold text-gray-800 lg:text-left">
                Canais Comerciais
              </h3>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <Headphones className="mt-1 h-5 w-5 " />
                  <div>
                    <span className="font-medium">Telefone Comercial:</span>
                    <p className="text-gray-900">{phone}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="mt-1 h-5 w-5" />
                  <div>
                    <span className="font-medium">Email Comercial: </span>
                    <br />
                    <a href={`mailto:${email}`} className=" hover:underline">
                      {email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase className="mt-1 h-5 w-5 " />
                  <div>
                    <span className="font-medium">Horário Comercial:</span>
                    <p>Seg-Sex: 9h às 18h</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="mx-auto w-full max-w-2xl">
            <div className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Formulário Comercial
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name" className="mb-2 block font-medium">
                      Nome Completo*
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      required
                      className="border-gray-300 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="mb-2 block font-medium">
                      Empresa
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Nome da empresa"
                      className="border-gray-300 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="email" className="mb-2 block font-medium">
                      Email*
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="border-gray-300 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2 block font-medium">
                      Telefone*
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      required
                      className="border-gray-300 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="mb-2 block font-medium">
                    Assunto*
                  </Label>
                  <select
                    id="subject"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  >
                    <option value="">Selecione...</option>
                    <option value="budget">Solicitação de Orçamento</option>
                    <option value="partnership">Parceria Comercial</option>
                    <option value="product">Dúvida sobre Produtos</option>
                    <option value="other">Outro Assunto</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 block font-medium">
                    Mensagem*
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Descreva sua necessidade..."
                    required
                    className="border-gray-300 focus:ring-primary"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-gray-300 text-secondary focus:ring-primary"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Concordo com a política de privacidade e receber
                    comunicações comerciais
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary py-3 text-lg font-medium"
                >
                  Enviar Solicitação
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Services Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon={<ClipboardCheck className="h-8 w-8" />}
            title="Orçamento Rápido"
            description="Resposta em até 24h para solicitações de orçamento"
            linkText="Ver condições"
            href="/orcamento"
          />
          <ServiceCard
            icon={<Briefcase className="h-8 w-8" />}
            title="Atendimento Corporativo"
            description="Soluções personalizadas para empresas"
            linkText="Fale com nosso time"
            href="/empresas"
          />
          <ServiceCard
            icon={<DollarSign className="h-8 w-8" />}
            title="Condições Especiais"
            description="Descontos para grandes pedidos e clientes recorrentes"
            linkText="Conhecer vantagens"
            href="/vantagens"
          />
          <ServiceCard
            icon={<Headphones className="h-8 w-8" />}
            title="Suporte Comercial"
            description="Tire dúvidas sobre produtos e serviços"
            linkText="Contato direto"
            href="/suporte"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, linkText, href }) {
  return (
    <Link
      href={href}
      className="group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:ring-2 hover:ring-primary"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-secondary">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <span className="inline-flex items-center font-medium text-foreground group-hover:underline">
        {linkText}
        <svg
          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </Link>
  );
}
