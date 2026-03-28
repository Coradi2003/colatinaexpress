import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-van.jpg";
import logoImage from "@/assets/logo.png";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Van de entregas Colatina Express"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Speed lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[2px] bg-gradient-fire animate-speed-line"
            style={{
              top: `${20 + i * 15}%`,
              width: `${60 + i * 10}px`,
              animationDelay: `${i * 0.4}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      {/* Pulsing Logo */}
      <motion.div
        className="absolute right-[5%] lg:right-[15%] top-[45%] lg:top-[50%] -translate-y-1/2 z-20 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
          src={logoImage}
          alt="Logo Colatina Express"
          className="w-32 md:w-48 lg:w-64 h-auto drop-shadow-[0_0_30px_rgba(255,165,0,0.3)]"
        />
      </motion.div>

      <div className="container relative z-10 px-6 py-20 lg:py-0">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2"
          >
            <Zap className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Entrega no mesmo dia</span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-6">
            <span className="text-gradient-fire">COLATINA</span>
            <br />
            <span className="text-foreground">EXPRESS</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 font-body">
            Coletamos e entregamos suas encomendas <strong className="text-foreground">no mesmo dia</strong>. 
            Segurança e rapidez por todo o Espírito Santo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5527997357959"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-fire px-8 py-4 text-lg font-display tracking-wide text-primary-foreground transition-all hover:scale-105 shadow-fire"
            >
              SOLICITAR COLETA
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#cobertura"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card/50 px-8 py-4 text-lg font-display tracking-wide text-foreground backdrop-blur-sm transition-all hover:bg-card"
            >
              VER COBERTURA
            </a>
          </div>

          <div className="mt-12 flex gap-8">
            {[
              { value: "10+", label: "Cidades" },
              { value: "6x", label: "Por semana" },
              { value: "24h", label: "Rapidez" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.15 }}
              >
                <div className="text-3xl font-display text-gradient-gold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
