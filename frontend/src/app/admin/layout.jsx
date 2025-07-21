import NavBar from "@/components/blocks/navbar";
import Footer from "@/components/blocks/footers";
import BackToTop from "@/components/BackToTop";

export default function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <BackToTop/>
      <Footer />
    </>
  );
}
