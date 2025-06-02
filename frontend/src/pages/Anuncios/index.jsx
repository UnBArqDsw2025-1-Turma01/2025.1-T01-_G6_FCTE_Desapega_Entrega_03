import React from "react";
import Sidebar from "./__partials__/Sidebar";
import AnunciosList from "./__partials__/AnunciosList";

const Anuncios = () => {
  return (
    <page className="w-full flex justify-center min-h-screen pb-10">
      <div className="w-[1024px] flex flex-col items-end">
        <div className="w-2/3 py-6">
          <h1 className="text-xl text-primary-800 font-semibold">Resultados para: </h1>
        </div>
        <div className="w-full flex">
          <Sidebar />
          <AnunciosList />
        </div>
      </div>
    </page>
  )
}

export default Anuncios;