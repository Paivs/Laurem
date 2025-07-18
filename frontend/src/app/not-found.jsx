"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import NavBar from "@/components/blocks/navbar";
import Footer2 from "@/components/blocks/footers";

export default function NotFound() {
  const router = useRouter();

  return (
    <>
    <NavBar/>
    <main className=" h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="flex flex-col items-center gap-4 max-w-md">
        <AlertTriangle className="w-12 h-12 text-primary" />
        <h2 className="text-3xl font-bold text-foreground">
          Opa! Página não encontrada
        </h2>
        <p className="text-muted-foreground">
          Parece que você se perdeu no caminho ou tentou acessar algo que não
          existe.
        </p>
        <Button variant="outline" onClick={() => router.back()}>
          Voltar à página anterior
        </Button>
      </div>
    </main>
    <Footer2/>
    </>
  );
}
