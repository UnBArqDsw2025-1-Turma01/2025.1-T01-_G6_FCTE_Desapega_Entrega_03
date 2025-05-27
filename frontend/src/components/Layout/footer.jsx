import React from "react";
import Logo from "../../assets/Logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-[#075985] text-white px-8 py-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between max-w-7xl mx-auto">
        {/* Logo e texto abaixo */}
        <div className="flex flex-col">
          <img src={Logo} alt="Logo" className="w-40 mb-3" />
          <p className="text-sm text-white/80 max-w-xs">
            O Repassei é o cantinho da UnB onde estudantes trocam, vendem e acham tesouros escondidos. De livro a bikes, aqui tudo encontra um novo lar com carinho universitário. 
          </p>
        </div>
      </div>

      <hr className="my-6 border-white/40" />

      <div className="text-left text-xs text-white/70 max-w-7xl mx-auto">
        © 2025 Repassei. Todos os direitos reservados. Desenvolvido com carinho para a comunidade da UnB.
      </div>
    </footer>
  );
};

export default Footer;
