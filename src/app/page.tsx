import Abilities from "@/components/abilities/Abilities";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Presentation from "@/components/Presentation/Presentation";
import Projects from "@/components/Projects/Projects";
import ScrollToTopBtn from "@/components/ScrollToTopBtn/ScrollToTopBtn";
import "./globals.scss"
import Experiences from "@/components/experiences/Experiences";
import ServicesBox from "@/components/services/ServicesBox";

export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Abilities />
      <Projects />
      <Experiences />
      <ServicesBox />
      <ScrollToTopBtn />
      <Footer />
    </>
  );
}
