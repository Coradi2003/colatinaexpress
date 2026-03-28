import Navbar from "@/components/Navbar";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";

const NossaMissao = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <MissionSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NossaMissao;
