import React from "react";
import Logo from "../../assets/Logo.png";
import HomeNavbar from "./HomeNavbar";
import LoggedNavbar from "./LoggedNavbar";
import { useNavigate } from "react-router-dom";

// Composite container que engloba a navbar escolhida
const NavbarComposite = ({ children }) => {
  return <>{children}</>;
};

const NavbarLayout = ({ logged = false, className = "" }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <div className="flex items-center justify-between w-[1024px] h-32 border-b border-primary-800">
        <img
          src={Logo}
          onClick={handleLogoClick}
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
