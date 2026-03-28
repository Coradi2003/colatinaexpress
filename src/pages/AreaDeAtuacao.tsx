import Navbar from "@/components/Navbar";
import CoverageSection from "@/components/CoverageSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";

const AreaDeAtuacao = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <CoverageSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AreaDeAtuacao;
