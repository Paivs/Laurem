import "./globals.css";

import { Nunito, Montserrat } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--display-family',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--text-family',
});

export const metadata = {
  title: "Laurem",
  description:
    "Criamos soluções digitais acessíveis e éticas para quem vive do próprio trabalho.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.variable} ${montserrat.variable} font-sans`}>
        {/* Ou para usar Cormorant: */}
        {/* <body className={`${cormorant.variable} font-serif`}> */}
        {children}
      </body>
    </html>
  );
}
