import { HeroSection } from "@/components/homepage/hero-section";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";


export default function Home() {
  return (
    <>
    <Header />
    <div className="relative w-full flex flex-col items-center min-h-screen">
      <HeroSection />
    </div>
    <Footer />
    </>
  );
}
