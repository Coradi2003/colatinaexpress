import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-6">
        <Link to="/">
          <img src={logo} alt="Colatina Express Encomendas" className="h-14 w-auto hidden" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/quem-somos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Quem Somos</Link>
          <Link to="/nossa-missao" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Nossa Missão</Link>
          <Link to="/area-de-atuacao" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cobertura</Link>
          <Link
            to="/solicitar-coleta"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-fire px-5 py-2.5 text-sm font-display tracking-wide text-primary-foreground transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            SOLICITAR COLETA
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              <Link to="/quem-somos" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">Quem Somos</Link>
              <Link to="/nossa-missao" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">Nossa Missão</Link>
              <Link to="/area-de-atuacao" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">Cobertura</Link>
              <Link
                to="/solicitar-coleta"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-fire px-5 py-3 font-display tracking-wide text-primary-foreground"
              >
                SOLICITAR COLETA
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
