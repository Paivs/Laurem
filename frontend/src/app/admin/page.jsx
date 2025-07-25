import SimplePageHeading from "@/components/blocks/page-headings";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardAdmin() {
  return (
    <>
      <SimplePageHeading
        title="Página administrativa"
        description="Olá! Aqui você pode fazer o seguinte:"
      />
      <main className="container mx-auto px-4">
        <ul className="bg-primary/90 p-4 rounded min-h-[50vh] flex flex-col md:flex-row gap-2">
          <li>
            <Button asChild variant={"secondary"}>
              <Link href={"/admin/editor"}>Artigos</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant={"secondary"}>
              <Link href={"/admin/contatos"}>Contatos</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant={"secondary"}>
              <Link href={"/admin/vendas"}>Vendas</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant={"secondary"}>
              <Link href={"/admin/eventos"}>Eventos</Link>
            </Button>
          </li>
        </ul>
      </main>
    </>
  );
}
