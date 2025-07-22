export default function cta() {
  return (
    <section className="py-20 bg-muted/40 border-t border-border">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">Pronto para transformar seu negócio?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Entre em contato com nossa equipe e descubra como podemos ajudar você a alcançar resultados extraordinários com soluções digitais sob medida.
        </p>
        <a href="/contato">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition">
            Fale conosco
          </button>
        </a>
      </div>
    </section>
  )
}