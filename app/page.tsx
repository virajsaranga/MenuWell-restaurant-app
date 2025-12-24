import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import MenuGrid from "../components/MenuGrid";
import ChefsSpecial from "../components/ChefsSpecial";

export default function Home() {
  return (
    <main>
      <Hero />
      <Carousel />
      <MenuGrid />
      <ChefsSpecial />
    </main>
  );
}
