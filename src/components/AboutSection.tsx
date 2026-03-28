import { motion } from "framer-motion";
import aboutImage from "@/assets/about-team.png";

const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-7xl tracking-tight mb-6 lg:mb-8 text-center lg:text-left">
              <span className="text-gradient-fire">QUEM</span>{" "}
              <span className="text-foreground">SOMOS</span>
            </h2>
            
            <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
              <p>
                Somos uma empresa especializada no transporte de pequenas e médias encomendas, 
                oferecendo agilidade, segurança e compromisso em cada entrega.
              </p>
              <p>
                Contamos com uma equipe de profissionais altamente capacitados e experientes no setor, 
                preparados para atender com eficiência e responsabilidade, garantindo que sua 
                encomenda chegue ao destino com rapidez e total cuidado.
              </p>
              <p>
                Nosso objetivo é facilitar o seu dia a dia, proporcionando um serviço confiável 
                e de qualidade, sempre priorizando a satisfação dos nossos clientes.
              </p>
            </div>
            
            <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start">
              <div className="h-1.5 w-24 bg-gradient-fire rounded-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -inset-4 bg-gradient-fire opacity-10 blur-2xl rounded-full lg:opacity-20" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-fire group aspect-[4/3] lg:aspect-auto">
              <img
                src={aboutImage}
                alt="Equipe Colatina Express"
                className="w-full h-full lg:h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:from-background/60" />
            </div>
            
            {/* Decorative elements - hidden on small mobile to avoid clutter */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 h-32 w-32 bg-gradient-fire opacity-10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
