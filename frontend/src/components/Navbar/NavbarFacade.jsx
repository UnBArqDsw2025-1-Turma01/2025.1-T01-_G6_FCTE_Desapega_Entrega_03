import React from "react";
import HomeNavbar from "./HomeNavbar";
import LoggedNavbar from "./LoggedNavbar";

const NavbarFacade = ({ logged }) => {
  return logged ? <LoggedNavbar /> : <HomeNavbar />;
};

export default NavbarFacade;
