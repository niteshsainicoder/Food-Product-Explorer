import HeroSection from "./Components/HeroSection"
import PageLoading from "./Components/Loading";
import { Nav } from "./Components/Nav"
import Product from "./Components/Product";
export default function Home() {
  return (
    < div className="min-h-[1200px] w-full scroll-smooth select-none transform-gpu relative">
      <PageLoading />
      <Nav />
      <HeroSection />
      <Product />
      <h1>food product website</h1>
    </div>
  );
}
