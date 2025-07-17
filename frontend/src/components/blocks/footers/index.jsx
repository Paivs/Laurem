import { Logo, LogoImage, LogoText } from "@/components/shadcnblocks/logo";

export default function Footer2({
  logo = {
    src: "/img/logo.svg",
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
        { text: "Planos e Preços", url: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { text: "Sobre", url: "/#sobre" },
        { text: "Blog", url: "/blog" },
        { text: "Trabalhe conosco", url: "/trabalho" },
        { text: "Contato", url: "/contato" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { text: "Capacitação e Consultoria", url: "/consultoria" },
        { text: "Vendas", url: "/vendas" },
        { text: "Ajuda", url: "/ajuda" },
      ],
    },
    {
      title: "Redes",
      links: [
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
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
    <section className="py-32">
      <div className="container mx-auto px-2">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
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
          <div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
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
