const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h3 className="text-3xl font-display">
            <span className="text-gradient-fire">COLATINA</span>{" "}
            <span className="text-foreground">EXPRESS</span>
          </h3>
          <p className="text-sm text-muted-foreground">Encomendas • Segurança e Rapidez</p>
          <p className="text-sm text-muted-foreground">
            Disk Coleta: <a href="tel:+5527997357959" className="text-secondary hover:underline">(27) 99735-7959</a>
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © {new Date().getFullYear()} Colatina Express Encomendas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
