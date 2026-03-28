import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={warehouseImage}
          alt="Centro de distribuição"
          className="h-full w-full object-cover"
          loading="lazy"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl sm:text-6xl tracking-tight mb-6">
            <span className="text-foreground">PRECISA ENVIAR</span>
            <br />
            <span className="text-gradient-fire">UMA ENCOMENDA?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Não quebre a cabeça! Solicite sua coleta agora mesmo pelo WhatsApp e receba no mesmo dia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5527997357959"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-gradient-fire px-10 py-5 text-xl font-display tracking-wider text-primary-foreground transition-transform hover:scale-105 shadow-fire"
            >
              SOLICITAR COLETA
              <ArrowRight className="h-6 w-6" />
            </a>
            <a
              href="tel:+5527997357959"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-8 py-5 text-xl font-display tracking-wide text-foreground backdrop-blur-sm transition-all hover:bg-card"
            >
              <Phone className="h-5 w-5 text-secondary" />
              (27) 99735-7959
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
