import React from "react";
import BadgePrimary from "../../../components/Badge/BadgePrimary";

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
    <section className="w-1/3 border-r border-primary-800 flex flex-col gap-8">
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
    </section>
  )
}

export default Sidebar;
