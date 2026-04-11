import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Detecta se é um bot
const isBot = () => {
  const botPattern = /bot|crawler|spider|crawling|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator|whatsapp|telegram/i;
  return botPattern.test(navigator.userAgent);
};

// Registrar Service Worker apenas em produção, fora de iframe e não sendo bot
if ("serviceWorker" in navigator && !isBot()) {
  const isInIframe = (() => {
    try { return window.self !== window.top; } catch { return true; }
  })();
  const isPreview =
    window.location.hostname.includes("id-preview--") ||
    window.location.hostname.includes("lovableproject.com");

  if (!isInIframe && !isPreview) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").then((reg) => {
        console.log("SW registrado:", reg.scope);
        
        // Limita atualizações do SW
        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                console.log("Nova versão do SW disponível");
              }
            });
          }
        });
      }).catch((err) => {
        console.log("SW erro:", err);
      });
    });
  }
}
