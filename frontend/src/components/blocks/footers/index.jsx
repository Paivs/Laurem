import { Logo, LogoImage, LogoText } from "@/components/shadcnblocks/logo";
import Subscribe from "../subscribe";

export default function Footer2({
  logo = {
    src: "/img/logo.png",
    alt: "Logo da empresa Laurem",
    title: "laurem.com.br",
    url: "https://www.laurem.com.br",
  },

  tagline = "Criamos soluções digitais acessíveis e éticas para quem vive do próprio trabalho.",

  menuItems = [
    {
      title: "Produtos",
      links: [
        { text: "Liszt - Para terapeutas", url: "/projetos/#liszt" },
        { text: "Neuman - Para advogados", url: "/projetos/#neuman" },
        { text: "Planos e Preços", url: "/vendas" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { text: "Sobre", url: "/sobre" },
        { text: "Blog", url: "/blog" },
        { text: "Trabalhe conosco", url: "/trabalho" },
        { text: "Contato", url: "/contato" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { text: "Eventos", url: "/eventos" },
        { text: "Aprendizado", url: "/cursos" },
        { text: "Vendas", url: "/vendas" },
        { text: "Ajuda", url: "/ajuda" },
        { text: "Admin", url: "/auth/login" },
      ],
    },
    {
      title: "Redes",
      links: [
        { text: "Instagram", url: "https://instagram.com/" },
        { text: "LinkedIn", url: "https://linkedin.com/" },
      ],
    },
  ],

  copyright = "© 2025 Laurem. Todos os direitos reservados.",

  bottomLinks = [
    { text: "Termos e condições", url: "/termos" },
    { text: "Política de privacidade", url: "/termos" },
  ],
}) {
  return (
    <section className="pb-4 pt-16">
      <div className="max-w-[calc(100vw-2rem)] md:max-w-[calc(100vw-5rem)] mx-auto px-4 border-t pt-8">
        <footer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Logo url="https://shadcnblocks.com">
                  <LogoImage
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10"
                  />
                  <LogoText className="text-xl">{logo.title}</LogoText>
                </Logo>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            <Subscribe />
            <div className="grid md:col-span-2 md:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-8">
              {menuItems.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="text-muted-foreground space-y-4">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="hover:text-primary font-medium"
                      >
                        <a href={link.url}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="text-muted-foreground mt-16 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}

export { Footer2 };
