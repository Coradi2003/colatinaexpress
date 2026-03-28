import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Package, Ruler, Weight, BadgeDollarSign, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const SolicitarColeta = () => {
  const [formData, setFormData] = useState({
    tipo: "Palete",
    medida: "",
    peso: "",
    valor: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mensagem = `Olá, Colatina Express! Gostaria de solicitar uma coleta.\n\n*Detalhes da Encomenda*\n📦 *Tipo*: ${formData.tipo}\n📏 *Medida*: ${formData.medida}\n⚖️ *Peso*: ${formData.peso}\n💰 *Valor NFe*: ${formData.valor}\n\nAguardo retorno para combinar envio.`;
    
    const encoded = encodeURIComponent(mensagem);
    window.open(`https://wa.me/5527997357959?text=${encoded}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-fire opacity-40 blur-sm" />
        <div className="absolute top-20 right-10 h-64 w-64 bg-gradient-fire opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-20 left-10 h-64 w-64 bg-gradient-gold opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

        <div className="container px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-5xl tracking-tight mb-4 text-foreground">
              SOLICITAR <span className="text-gradient-fire">COLETA</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Preencha os dados da sua encomenda abaixo para agilizarmos seu atendimento via WhatsApp.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto relative group"
          >
            <div className="absolute -inset-1 bg-gradient-fire opacity-20 blur-xl rounded-2xl transition-opacity group-hover:opacity-30" />
            
            <div className="relative border border-border bg-card/60 backdrop-blur-md rounded-2xl p-8 sm:p-10 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Tipo de Mercadoria */}
                <div className="space-y-2">
                  <label htmlFor="tipo" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Package className="h-4 w-4 text-secondary" />
                    Tipo de Mercadoria
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    required
                    value={formData.tipo}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground transition-all hover:border-secondary focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary appearance-none"
                  >
                    <option value="Palete">Palete</option>
                    <option value="Volume">Volume</option>
                    <option value="Caixas">Caixas</option>
                    <option value="Embalagem">Embalagem</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>

                {/* Medida */}
                <div className="space-y-2">
                  <label htmlFor="medida" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Ruler className="h-4 w-4 text-secondary" />
                    Medida (Ex: 1m x 1m x 1m)
                  </label>
                  <input
                    type="text"
                    id="medida"
                    name="medida"
                    required
                    placeholder="Dimensões da carga"
                    value={formData.medida}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground transition-all hover:border-secondary focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary placeholder:text-muted-foreground/50"
                  />
                </div>

                {/* Peso e Valor em 2 colunas no desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Peso */}
                  <div className="space-y-2">
                    <label htmlFor="peso" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Weight className="h-4 w-4 text-secondary" />
                      Peso Estimado
                    </label>
                    <input
                      type="text"
                      id="peso"
                      name="peso"
                      required
                      placeholder="Ex: 50kg"
                      value={formData.peso}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground transition-all hover:border-secondary focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary placeholder:text-muted-foreground/50"
                    />
                  </div>

                  {/* Valor */}
                  <div className="space-y-2">
                    <label htmlFor="valor" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <BadgeDollarSign className="h-4 w-4 text-secondary" />
                      Valor Declarado (NFe)
                    </label>
                    <input
                      type="text"
                      id="valor"
                      name="valor"
                      required
                      placeholder="Ex: R$ 1.500,00"
                      value={formData.valor}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground transition-all hover:border-secondary focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-fire px-8 py-4 text-lg font-display tracking-wide text-primary-foreground transition-transform hover:scale-[1.02] shadow-fire"
                >
                  ENVIAR SOLICITAÇÃO VIA WHATSAPP
                  <Send className="h-5 w-5" />
                </button>

              </form>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SolicitarColeta;
