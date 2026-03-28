import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-6">
        <a href="/">
          <img src={logo} alt="Colatina Express Encomendas" className="h-14 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#cobertura" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cobertura</a>
          <a
            href="https://wa.me/5527997357959"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-fire px-5 py-2.5 text-sm font-display tracking-wide text-primary-foreground transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            SOLICITAR COLETA
          </a>
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
              <a href="#cobertura" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">Cobertura</a>
              <a
                href="https://wa.me/5527997357959"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-fire px-5 py-3 font-display tracking-wide text-primary-foreground"
              >
                SOLICITAR COLETA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
