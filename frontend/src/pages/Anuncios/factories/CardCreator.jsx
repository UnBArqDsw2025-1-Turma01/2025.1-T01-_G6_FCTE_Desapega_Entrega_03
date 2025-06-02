import React from 'react';

class CardCreator extends React.Component {
  createCard() {
    throw new Error("Subclasse precisa implementar createCard()");
  }

  render() {
    return this.createCard();
  }
}

export default CardCreator;
