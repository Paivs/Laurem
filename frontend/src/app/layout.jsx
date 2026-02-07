import { Toaster } from "sonner";
import "./globals.css";

import { Nunito, Montserrat } from "next/font/google";
import Script from "next/script";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--display-family",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--text-family",
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
        {process.env.NODE_ENV != "development" && (
          <Script
            defer
            src="https://analytics.gustavo-paiva.dev.br/script.js"
            data-website-id="0a9e2a90-4f19-463c-aec2-5ac1d6b82cc9"
          />
        )}
        <Toaster richColors position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
