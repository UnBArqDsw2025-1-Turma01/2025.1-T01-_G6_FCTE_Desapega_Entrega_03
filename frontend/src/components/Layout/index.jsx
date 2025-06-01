import React from "react";
import Footer from "../Footer";
import NavbarLayout from "../Navbar/NavbarLayout";
import { Outlet } from "react-router-dom";

const Layout = ({ logged }) => {
  return (
    <div>
      <NavbarLayout logged={logged} />
      <main><Outlet /></main>
      <Footer />
    </div>
  );
};

export default Layout;
