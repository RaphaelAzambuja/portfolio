import Abilities from "@/components/abilities/Abilities";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Presentation from "@/components/Presentation/Presentation";
import Projects from "@/components/Projects/Projects";
import ScrollToTopBtn from "@/components/ScrollToTopBtn/ScrollToTopBtn";
import "./globals.scss"

export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Abilities />
      <Projects />
      <ScrollToTopBtn />
      <Footer />
    </>
  );
}
