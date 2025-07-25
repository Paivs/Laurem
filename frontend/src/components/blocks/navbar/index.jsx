"use client";

import { useId, useEffect, useState } from "react";
import {
  ChevronDown,
  Contact,
  HouseIcon,
  InboxIcon,
  ListPlus,
  MicVocal,
  Newspaper,
  Option,
  PenBox,
  SearchIcon,
  Server,
  SquaresUnite,
  TicketSlash,
  ZapIcon,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Logo from "@/components/blocks/navbar/navbar-components/logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();
  const id = useId();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Atualize o array de links para não ter active hardcoded
  const navigationLinks = [
    { href: "/projetos", label: "Projetos", icon: PenBox },
    { href: "/servicos", label: "Serviços", icon: Server },
    { href: "/eventos", label: "Eventos", icon: MicVocal },
    { href: "/blog", label: "Blog", icon: Newspaper },
  ];

  const moreOptions = [
    { href: "/contato", label: "Contatos" },
    { href: "/vendas", label: "Vendas" },
    { href: "/sobre", label: "Sobre" },
    // { href: "/cursos", label: "Aprenda conosco" },
    { href: "/auth/login", label: "Admin" },
  ];

  const stacks = [
    { href: "/stacks#web", label: "Sistemas WEB" },
    { href: "/stacks#mobile", label: "Aplicativos Mobiles" },
    { href: "/stacks#infra", label: "Infra e DevOps" },
    { href: "/stacks#cyber", label: "Cibersegurança" },
  ];

  // Função para verificar se o link está ativo
  const isActive = (href) => {
    // Verifica se é a página inicial
    if (href === "/") {
      return pathname === href;
    }
    // Para outras páginas, verifica se o pathname começa com o href
    return pathname.startsWith(href);
  };

  // Efeito para calcular o progresso do scroll
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <header className="border-b md:px-8 fixed top w-screen z-50 bg-background">
      <div className="flex h-16 items-center justify-between gap-4 max-w-[calc(100vw-2rem)] md:max-w-[calc(100vw-6rem)]">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>
          </div>
        </div>
        {/* Middle area */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList className="gap-2">
            {navigationLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    active={isActive(link.href)}
                    href={link.href}
                    className={`text-foreground hover:text-primary flex-row items-center gap-2 py-1.5 text-lg font-medium ${
                      isActive(link.href) ? "text-primary" : ""
                    }`}
                  >
                    <Icon
                      size={16}
                      className={
                        isActive(link.href)
                          ? "text-primary"
                          : "text-muted-foreground/80"
                      }
                      aria-hidden="true"
                    />
                    <span>{link.label}</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <NavigationMenuItem
                  className={`text-foreground hover:text-primary flex-row items-center gap-2 py-1.5 text-lg font-medium`}
                >
                  <Button
                    variant={"ghost"}
                    className={`text-foreground hover:text-primary flex-row p-2 items-center gap-2 py-1.5 text-lg font-medium`}
                  >
                    <SquaresUnite
                      size={16}
                      className="text-muted-foreground/80"
                      aria-hidden={"true"}
                    />
                    Stacks
                    <ChevronDown size={16} aria-hidden="true" />
                  </Button>
                </NavigationMenuItem>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {stacks.map((item, index) => {
                  return (
                    <div key={index}>
                      {item.label == "Admin" && <DropdownMenuSeparator />}

                      <DropdownMenuItem asChild>
                        <Link href={item.href} className="w-full h-full">
                          {" "}
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <NavigationMenuItem
                  className={`text-foreground hover:text-primary flex-row items-center gap-2 py-1.5 text-lg font-medium`}
                >
                  <Button
                    variant={"ghost"}
                    className={`text-foreground hover:text-primary flex-row p-2 items-center gap-2 py-1.5 text-lg font-medium`}
                  >
                    <ListPlus
                      size={16}
                      className="text-muted-foreground/80"
                      aria-hidden={"true"}
                    />
                    Outros
                    <ChevronDown size={16} aria-hidden="true" />
                  </Button>
                </NavigationMenuItem>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {moreOptions.map((item, index) => {
                  return (
                    <div key={index}>
                      {item.label == "Admin" && <DropdownMenuSeparator />}

                      <DropdownMenuItem asChild>
                        <Link href={item.href} className="w-full h-full">
                          {" "}
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu trigger */}
        <Sheet>
          <SheetTrigger asChild className="mx-2">
            <Button
              className="group size-8 lg:hidden"
              variant="ghost"
              size="icon"
            >
              <svg
                className="pointer-events-none"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12L20 12"
                  className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                />
                <path
                  d="M4 12H20"
                  className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                />
                <path
                  d="M4 12H20"
                  className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent align="start" className="p-1 lg:hidden">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Navegue pelas páginas do site</SheetDescription>
            </SheetHeader>
            <NavigationMenu className="max-w-none *:w-full h-fit flex items-start">
              <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                {navigationLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        className="flex-row items-center gap-2 py-1.5"
                        active={link.active}
                      >
                        <Icon
                          size={16}
                          className="text-muted-foreground/80"
                          aria-hidden="true"
                        />
                        <span>{link.label}</span>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <NavigationMenuItem
                      className={`text-foreground hover:text-primary flex-row items-center gap-2 font-medium`}
                    >
                      <Button
                        variant={"ghost"}
                        className={`text-foreground hover:text-primary flex-row p-2 items-center gap-2 font-medium`}
                      >
                        <SquaresUnite
                          size={16}
                          className="text-muted-foreground/80"
                          aria-hidden={"true"}
                        />
                        Stacks
                        <ChevronDown size={16} aria-hidden="true" />
                      </Button>
                    </NavigationMenuItem>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {stacks.map((item, index) => {
                      return (
                        <div key={index}>
                          {item.label == "Admin" && <DropdownMenuSeparator />}

                          <DropdownMenuItem asChild>
                            <Link href={item.href} className="w-full h-full">
                              {" "}
                              {item.label}
                            </Link>
                          </DropdownMenuItem>
                        </div>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <NavigationMenuItem
                      className={`text-foreground hover:text-primary flex-row items-center gap-2 font-medium`}
                    >
                      <Button
                        variant={"ghost"}
                        className={`text-foreground hover:text-primary flex-row p-2 items-center gap-2 font-medium`}
                      >
                        <ListPlus
                          size={16}
                          className="text-muted-foreground/80"
                          aria-hidden={"true"}
                        />
                        Outros
                        <ChevronDown size={16} aria-hidden="true" />
                      </Button>
                    </NavigationMenuItem>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {moreOptions.map((item, index) => {
                      return (
                        <div key={index}>
                          {item.label == "Admin" && <DropdownMenuSeparator />}

                          <DropdownMenuItem asChild>
                            <Link href={item.href} className="w-full h-full">
                              {" "}
                              {item.label}
                            </Link>
                          </DropdownMenuItem>
                        </div>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1">
        <Progress
          value={scrollProgress}
          className="h-full rounded-none bg-primary/20 [&>div]:bg-primary"
        />
      </div>
    </header>
  );
}
