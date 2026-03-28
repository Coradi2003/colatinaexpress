import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  "Colatina", "Linhares", "São Mateus", "João Neiva",
  "Ibiraçu", "Aracruz", "Vitória", "Serra",
  "Vila Velha", "Cariacica", "Guarapari",
  "Cachoeiro de Itapemirim", "Marataízes",
];

const CoverageSection = () => {
  return (
    <section id="cobertura" className="py-24 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(0_80%_45%/0.08),transparent_60%)]" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl tracking-tight mb-4">
            <span className="text-foreground">ÁREA DE</span>{" "}
            <span className="text-gradient-gold">ATUAÇÃO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
            Atuamos em diversas cidades do estado do Espírito Santo, oferecendo soluções ágeis, seguras e eficientes para o transporte de encomendas. Nossa cobertura abrange de norte a sul, garantindo praticidade e confiança para nossos clientes.
          </p>
        </motion.div>

        {/* Route highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 mx-auto max-w-md rounded-xl border border-secondary/30 bg-secondary/5 p-6 text-center"
        >
          <p className="font-display text-2xl text-secondary tracking-wide">COLATINA ⟷ VITÓRIA</p>
          <p className="text-muted-foreground mt-1">Veículos de segunda a sábado</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {cities.map((city, i) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/40 hover:bg-card/80"
            >
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span className="font-medium text-foreground text-sm">{city}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
