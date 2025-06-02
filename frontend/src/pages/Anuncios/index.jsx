import React from "react";
import Sidebar from "./__partials__/Sidebar";

const Anuncios = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="w-[1024px] flex justify-end flex-col items-end">
        <div className="w-2/3">
          <h1 className="text-xl text-primary-800 font-semibold">Anúncios</h1>
        </div>
        <div className="w-full">
          <Sidebar />
        </div>
      </div>
    </section>
  )
}

export default Anuncios;