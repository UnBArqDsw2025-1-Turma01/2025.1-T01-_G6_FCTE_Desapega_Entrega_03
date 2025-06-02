import React from "react";
import Logo from "../../assets/Logo.png";
import LoggedNavbar from "./LoggedNavbar";
import HomeNavbar from "./HomeNavbar";

const NavbarLayout = ({
  logged = false
}) => {
  return (
    <div className="h-32 flex items-center justify-between">
      <img src={Logo} alt="" className="w-40" />
      {logged ? <LoggedNavbar /> : <HomeNavbar />}
    </div>
  );
};

export default NavbarLayout;
