import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import QuemSomos from "./pages/QuemSomos.tsx";
import NossaMissao from "./pages/NossaMissao.tsx";
import AreaDeAtuacao from "./pages/AreaDeAtuacao.tsx";
import SolicitarColeta from "./pages/SolicitarColeta.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 1000,
      staleTime: 5 * 60 * 1000, // 5 minutos
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/nossa-missao" element={<NossaMissao />} />
          <Route path="/area-de-atuacao" element={<AreaDeAtuacao />} />
          <Route path="/solicitar-coleta" element={<SolicitarColeta />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
