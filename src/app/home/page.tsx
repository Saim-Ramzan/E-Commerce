'use client'
import HeroSection from "@/component/HeroSection";
import FeatureCards from "@/component/FeatureCards";
import ShoppingItem from "@/component/ShoppingItem";

export default function Home() {

  
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <HeroSection />
     <FeatureCards />
     <ShoppingItem />
    </main>
  );
}
