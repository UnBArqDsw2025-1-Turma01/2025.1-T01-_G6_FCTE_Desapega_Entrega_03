import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

// Comando de navegação reutilizável
class NavigateCommand {
  constructor(navigate, path, enabled = true) {
    this.navigate = navigate;
    this.path = path;
    this.enabled = enabled; // controlar se executa navegação ou não
  }

  execute() {
    if (this.enabled) {
      this.navigate(this.path);
    } else {
      console.log(`Comando de navegação para ${this.path} desabilitado.`);
    }
  }
}

const HomeNavbar = () => {
  const navigate = useNavigate();

  // login não navega, só simula com log
  const loginCommand = new NavigateCommand(navigate, "/login", false);
  const cadastroCommand = new NavigateCommand(navigate, "/cadastro");

  return (
    <div className="flex gap-4">
      <Button variant="outline" onClick={() => loginCommand.execute()}>
        login
      </Button>
      <Button variant="primary" onClick={() => cadastroCommand.execute()}>
        cadastro
      </Button>
    </div>
  );
};

export default HomeNavbar;
