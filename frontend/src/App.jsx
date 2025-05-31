import React from "react";
import Layout from "./components/Layout";
import UserPopover from "./components/Layout/UserPopover";
import { DropdownBuilder } from "./components/Layout/DropdownBuilder";

import CardFactory from './pages/anuncios/factories/CardFactory';
import { PowerIcon } from "@heroicons/react/24/solid";




export default function App() {
    const cardVenda = CardFactory.create('venda'); // está com o valor padrão
    const cardTroca = CardFactory.create('troca', {
    title: 'Notebook',
    user: 'Lucas',
    local: 'FGA'
  });

    const cardDoacao = CardFactory.create('doacao', {
    title: 'Notebook',
    user: 'Rogério Ceni',
    local: 'Fortaleza, CE'
  });


  return (
    <Layout>
      {/* Frase grandona antes do carrossel */}
      <section className="text-center py-16 bg-white">
        <h1 className="text-5xl font-bold text-gray-800">
          DESAPEGOS DA <span className="text-orange-500">UNB</span> <br /> EM UM SÓ LUGAR
        </h1>
        <div className="flex justify-center p-[20px]">
        {cardVenda}
        {cardTroca}
        {cardDoacao}
      </div>
        <h2 className="mt-4 text-xl font-light text-gray-500 tracking-wide">
          <strong>A comunidade da UnB em movimento</strong>
        </h2>
      </section>
    </Layout>
  );
}
