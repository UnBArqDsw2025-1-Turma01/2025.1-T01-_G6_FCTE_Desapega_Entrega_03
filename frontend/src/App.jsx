import React from "react";
import Layout from "./components/layout/index/";
import UserPopover from "./components/Layout/UserPopover";
import { DropdownBuilder } from "./components/Layout/DropdownBuilder";

export default function App() {
  return (
    <Layout>
      {/* Frase grandona antes do carrossel */}
      <section className="text-center py-16 bg-white">
        <h1 className="text-5xl font-bold text-gray-800">
          DESAPEGOS DA <span className="text-orange-500">UNB</span> <br /> EM UM SÓ LUGAR
        </h1>
        <h2 className="mt-4 text-xl font-light text-gray-500 tracking-wide">
          <strong>A comunidade da UnB em movimento</strong>
        </h2>
      </section>
    </Layout>
  );
}
