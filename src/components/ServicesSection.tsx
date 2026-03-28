import { motion } from "framer-motion";
import { Package, Truck, Clock, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "COLETA NA PORTA",
    description: "Buscamos sua encomenda no endereço que você indicar. Sem complicação.",
  },
  {
    icon: Truck,
    title: "ENTREGA EXPRESSA",
    description: "Entregamos no mesmo dia, de segunda a sábado, com total agilidade.",
  },
  {
    icon: Clock,
    title: "RAPIDEZ GARANTIDA",
    description: "Veículos saindo diariamente de Colatina para Vitória e vice-versa.",
  },
  {
    icon: ShieldCheck,
    title: "SEGURANÇA TOTAL",
    description: "Sua encomenda protegida do início ao fim com rastreamento completo.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-fire opacity-40" />

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl tracking-tight mb-4">
            <span className="text-gradient-fire">NOSSOS</span>{" "}
            <span className="text-foreground">SERVIÇOS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Tudo o que você precisa para enviar suas encomendas com tranquilidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-fire"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-fire">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-fire transition-all duration-500 group-hover:w-full rounded-b-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
