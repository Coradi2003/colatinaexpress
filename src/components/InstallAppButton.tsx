import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Smartphone, CheckCircle } from "lucide-react";

function InstallAppButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream);

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => setInstalled(true));
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") setInstalled(true);
      setDeferredPrompt(null);
    }
  };

  // Only show button if there's something to do (iOS or deferred prompt)
  const shouldShow = isIOS || deferredPrompt;

  if (!shouldShow && !installed) return null;

  if (installed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center gap-2 text-xs font-semibold py-2 text-emerald-400"
      >
        <CheckCircle className="h-4 w-4" />
        App instalado!
      </motion.div>
    );
  }

  return (
    <div className="space-y-3">
      <motion.button
        onClick={handleInstall}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="group flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-white/20 transition-all"
      >
        <Download className="h-4 w-4 text-orange-400" />
        <span>Instalar App</span>
        <Smartphone className="h-4 w-4 text-orange-400 group-hover:rotate-6 transition-transform" />
      </motion.button>

      <AnimatePresence>
        {showIOSGuide && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="rounded-xl border border-white/20 bg-black/60 backdrop-blur-md p-4 space-y-3 text-left max-w-[220px]"
          >
            <h4 className="text-xs font-bold text-white text-center">
              📱 Instalar no iPhone
            </h4>
            <div className="space-y-2">
              {[
                "Toque no ⬆️ compartilhar no Safari",
                'Toque em "Adicionar à Tela de Início"',
                'Confirme tocando em "Adicionar"',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-700 text-[9px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-[10px] text-white/80 leading-tight">{step}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full rounded-lg border border-white/20 py-1.5 text-[10px] font-medium text-white/70 hover:text-white transition"
            >
              Fechar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default InstallAppButton;
