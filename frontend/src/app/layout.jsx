import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/blocks/navbar";
import Footer from "@/components/blocks/footers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Laurem",
  description: "Criamos soluções digitais acessíveis e éticas para quem vive do próprio trabalho.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
