import { motion } from "framer-motion";
import { Download, Smartphone } from "lucide-react";

function InstallAppButton() {
  return (
    <div className="space-y-3">
      <motion.a
        href="https://express-colatina-flow.lovable.app/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="group flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-white/20 transition-all cursor-pointer"
      >
        <Download className="h-4 w-4 text-orange-400" />
        <span>Instalar App</span>
        <Smartphone className="h-4 w-4 text-orange-400 group-hover:rotate-6 transition-transform" />
      </motion.a>
    </div>
  );
}

export default InstallAppButton;
