import React from "react";
import Footer from "../Footer";
import NavbarLayout from "../Navbar/NavbarLayout";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarLayout logged={false} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
