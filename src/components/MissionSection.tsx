import { motion } from "framer-motion";
import vanImage from "@/assets/van.png";

const MissionSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-dark relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-fire opacity-40" />

      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-fire opacity-10 blur-2xl rounded-full lg:opacity-20" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-fire group aspect-[4/3] lg:aspect-auto">
              <img
                src={vanImage}
                alt="Nossa Missão - Colatina Express"
                className="w-full h-full lg:h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:from-background/60" />
            </div>
            
            {/* Decorative elements */}
            <div className="hidden sm:block absolute -top-6 -left-6 h-32 w-32 bg-gradient-fire opacity-10 blur-3xl rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-2"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-7xl tracking-tight mb-6 lg:mb-8 text-center lg:text-left">
              <span className="text-gradient-fire">NOSSA</span>{" "}
              <span className="text-foreground">MISSÃO</span>
            </h2>
            
            <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
              <p>
                Nossa missão é otimizar o dia a dia dos nossos clientes, oferecendo soluções ágeis, seguras e eficientes para o envio de encomendas. 
              </p>
              <p>
                Trabalhamos com excelência para garantir rapidez, confiabilidade e tranquilidade em cada entrega realizada.
              </p>
            </div>
            
            <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start">
              <div className="h-1.5 w-24 bg-gradient-fire rounded-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;
