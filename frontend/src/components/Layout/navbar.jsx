import React from "react";
import logo from "../../assets/Logo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md">
      {/* Logo à esquerda */}
      <img src={logo} alt="Logo" className="h-16 w-auto" />

      {/* Botões à direita */}
      <div className="space-x-4">
        <button className="px-4 py-1.5 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition">
          Login
        </button>
        <button className="px-4 py-1.5 bg-transparent border border-orange-500 text-orange-500 rounded-xl hover:bg-orange-100 transition">
          Cadastre-se
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
