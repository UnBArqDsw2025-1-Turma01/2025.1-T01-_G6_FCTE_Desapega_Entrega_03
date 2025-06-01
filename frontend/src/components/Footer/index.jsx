import React from "react";
import Logo from "../../assets/Logo.png"; 
import { ArrowUpIcon } from "@heroicons/react/24/solid";
const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary-800 text-white py-6 flex justify-center">
      <div className="min-w-[1024px]">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mx-auto">
          {/* Logo e texto abaixo */}
          <div className="flex flex-col">
            <img src={Logo} alt="Logo" className="w-40 mb-3" />
            <p className="text-sm text-white/80 max-w-xs">
              O Repassei é o cantinho da UnB onde estudantes trocam, vendem e acham tesouros escondidos. De livro a bikes, aqui tudo encontra um novo lar com carinho universitário. 
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-white my-4" />

        <div className="flex items-center justify-between">
          <div className="text-left text-xs text-white/70">
            © 2025 Repassei. Todos os direitos reservados. Desenvolvido com carinho para a comunidade da UnB.
          </div>
          <div 
            onClick={scrollToTop}
            className="h-12 w-12 cursor-pointer bg-secondary-600 rounded-full flex items-center justify-center hover:bg-secondary-700 transition-colors">
            <ArrowUpIcon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
