import React from "react";
import BadgePrimary from "../../../components/Badge/BadgePrimary";
import RangeDePreco from "../../../components/Range/RangeDePreco";

// Estratégia de cálculo para o componente RangeDePreco
const rangeStrategy = {
  calculate: (min, max, trackWidth) => {
    const minPos = (min / 200) * trackWidth;
    const maxPos = (max / 200) * trackWidth;
    return { minPos, maxPos };
  }
};

const categories = [
  "Eletrônicos",
  "Roupas",
  "Livros",
  "Móveis",
  "Papelaria",
  "Esporte"
];

const negociationType = [
  "Venda",
  "Troca",
  "Doação"
];

const location = [
  "FCTE",
  "Darcy Ribeiro",
  "Outro"
];

const Sidebar = () => {
  return (
    <section className="w-1/3  flex flex-col gap-8">
      <div className="w-full flex flex-col gap-2.5">
        <h3 className="text-lg text-primary-800 font-semibold">Categorias</h3>
        <div className="flex flex-row gap-2 flex-wrap w-full">
          {categories.map((category) => (
            <BadgePrimary key={category} text={category} onClick={() => {}} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-2.5">
        <h3 className="text-lg text-primary-800 font-semibold">Tipo de negociação</h3>
        <div className="flex flex-row gap-2 flex-wrap w-full">
          {negociationType.map((type) => (
            <BadgePrimary key={type} text={type} onClick={() => {}} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-2.5">
        <h3 className="text-lg text-primary-800 font-semibold">Local da negociação</h3>
        <div className="flex flex-row gap-2 flex-wrap w-full">
          {location.map((location) => (
            <BadgePrimary key={location} text={location} onClick={() => {}} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-2.5">
        <h3 className="text-lg text-primary-800 font-semibold">Preço</h3>
        <div className="flex flex-row gap-2 flex-wrap w-full">
          <RangeDePreco 
            strategy={rangeStrategy} 
            onRangeChange={(min, max) => console.log(`Preço: R$${min} - R$${max}`)} 
          />
        </div>
      </div>

    </section>
  )
}

export default Sidebar;
