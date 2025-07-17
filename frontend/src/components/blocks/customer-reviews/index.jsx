import { Star } from "lucide-react";

export default function CustomerReview() {
  return (
    <div
      className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          O que nossos clientes dizem
        </h2>

        <div className="rounded-lg p-8 md:p-12">
          <div className="mb-6 flex justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <blockquote className="mb-6 text-xl leading-relaxed font-medium md:text-2xl">
            Qualidade excepcional do produto e atendimento ao cliente. As entregas superaram minhas expectativas. Com certeza vou retornar a trabalhar aqui!
          </blockquote>

          <footer className="text-muted-foreground">
            <div className="text-foreground font-semibold">Juliana Barros</div>
            <div>Cliente verificada • Colaborou conosco há 2 meses</div>
          </footer>
        </div>
      </div>
    </div>
  );
}
