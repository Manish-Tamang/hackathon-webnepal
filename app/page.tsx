import { HeroSection } from "@/components/homepage/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center min-h-screen">
      <HeroSection />
    </div>
  );
}
