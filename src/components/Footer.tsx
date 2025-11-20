const Footer = () => {
  return (
    <footer className="bg-black px-6 md:px-20 py-16">
      <div className="max-w-content mx-auto text-center">
        {/* Logo */}
        <div className="text-[#FF5C00] font-black text-2xl tracking-wider-xl mb-8">
          TOTAL ADS 360º
        </div>

        {/* Copyright */}
        <p className="text-sm text-[rgba(243,239,224,0.5)] mb-4">
          © 2024 Total Ads 360º - Todos os direitos reservados
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 text-sm text-[rgba(243,239,224,0.5)]">
          <a
            href="https://politicas.pauloberto.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF5C00] transition-colors"
          >
            Termos de Uso e Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
