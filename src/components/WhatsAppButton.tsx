import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5527997357959"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(120,60%,45%)] animate-pulse-glow transition-transform hover:scale-110"
    >
      <MessageCircle className="h-8 w-8 fill-foreground stroke-foreground" />
    </a>
  );
};

export default WhatsAppButton;
