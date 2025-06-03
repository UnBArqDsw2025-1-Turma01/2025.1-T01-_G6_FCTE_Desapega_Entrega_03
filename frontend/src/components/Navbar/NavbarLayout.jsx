import React from "react";
import Logo from "../../assets/Logo.png";
import HomeNavbar from "./HomeNavbar";
import LoggedNavbar from "./LoggedNavbar";
import { useNavigate } from "react-router-dom";

// Composite container que engloba a navbar escolhida
const NavbarComposite = ({ children }) => {
  return <>{children}</>;
};

// Comando que encapsula a ação de navegação
class NavigateCommand {
  constructor(navigate, path) {
    this.navigate = navigate;
    this.path = path;
  }

  execute() {
    this.navigate(this.path);
  }
}

const NavbarLayout = ({ logged = false, className = "" }) => {
  const navigate = useNavigate();

  // Instanciamos o comando
  const logoClickCommand = new NavigateCommand(navigate, "/");

  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <div className="flex items-center justify-between w-[1024px] h-32 border-b border-primary-800">
        <img
          src={Logo}
          onClick={() => logoClickCommand.execute()}
          alt="Logo"
          className="w-40 cursor-pointer"
        />
        <NavbarComposite>
          {logged ? <LoggedNavbar /> : <HomeNavbar />}
        </NavbarComposite>
      </div>
    </div>
  );
};

export default NavbarLayout;
