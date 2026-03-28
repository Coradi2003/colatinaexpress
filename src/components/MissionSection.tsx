import { motion } from "framer-motion";
import { Target } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-dark relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-fire opacity-40" />

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-fire shadow-fire">
            <Target className="h-8 w-8 text-primary-foreground" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-8">
            <span className="text-gradient-fire">NOSSA</span>{" "}
            <span className="text-foreground">MISSÃO</span>
          </h2>
          
          <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-12 shadow-xl">
            <div className="absolute -inset-1 bg-gradient-fire opacity-10 blur-xl rounded-2xl" />
            <p className="relative text-lg md:text-2xl text-muted-foreground leading-relaxed md:leading-loose font-light">
              "Nossa missão é otimizar o dia a dia dos nossos clientes, oferecendo soluções ágeis, seguras e eficientes para o envio de encomendas. Trabalhamos com excelência para garantir rapidez, confiabilidade e tranquilidade em cada entrega realizada."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
