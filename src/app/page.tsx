import AbilitiesBox from "@/components/AbilitiesBox/AbilitiesBox";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Presentation from "@/components/Presentation/Presentation";

export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <AbilitiesBox />
      <Footer />
    </>
  );
}
