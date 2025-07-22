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
        <ul className="bg-primary/90 p-4 rounded min-h-[50vh]">
          <li>
            <Button asChild variant={"secondary"}>
              <Link href={"/admin/editor"}>Criar artigos</Link>
            </Button>
          </li>
        </ul>
      </main>
    </>
  );
}
