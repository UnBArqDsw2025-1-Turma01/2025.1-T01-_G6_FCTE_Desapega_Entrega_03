import React from "react";
import CardPrimary from "../../../components/Card/CardPrimary";
import CardSecundary from "../../../components/Card/CardSecundary";
import CardTerciary from "../../../components/Card/CardTerciary";

export function vendaCardStrategy(props) {
  return React.createElement(CardPrimary, props);
}

export function trocaCardStrategy(props) {
  return React.createElement(CardSecundary, props);
}

export function doacaoCardStrategy(props) {
  return React.createElement(CardTerciary, props);
}

export const cardStrategies = {
  venda: vendaCardStrategy,
  troca: trocaCardStrategy,
  doacao: doacaoCardStrategy,
};

export const getCardStrategy = (type) => {
  const strategy = cardStrategies[type];
  if (!strategy) {
    console.warn(`Estratégia para o tipo '${type}' não encontrada. Usando estratégia padrão.`);
    return cardStrategies.venda; // Estratégia padrão
  }
  return strategy;
};

export const useCardStrategy = () => {
  const renderCard = (type, props) => {
    const strategy = getCardStrategy(type);
    return strategy(props);
  };

  return { renderCard };
};
