// import CardPrimaryConcrete from './CardPrimaryConcrete';
// import CardSecundaryConcrete from './CardSecundaryConcrete';
// import CardTerciaryConcrete from './CardTerciaryConcrete';

// export function createCardByType(type) {
//   switch (type) {
//     case 'venda':
//       return <CardPrimaryConcrete />;
//     case 'troca':
//       return <CardSecundaryConcrete />;
//     case 'doacao':
//       return <CardTerciaryConcrete />;
//     default:
//       return null;
//   }
// }
import React from 'react';
import CardPrimaryConcrete from './CardPrimaryConcrete';
import CardSecundaryConcrete from './CardSecundaryConcrete';
import CardTerciaryConcrete from './CardTerciaryConcrete';

export class CardFactory {
  
  static create(type, props) {
    let card;
    switch (type) {
      case 'venda':
        card = new CardPrimaryConcrete();
        break;
      case 'troca':
        card = new CardSecundaryConcrete();
        break;
      case 'doacao':
        card = new CardTerciaryConcrete();
        break;
      default:
        return null;
    }
    return card.createCard(props);
  }
}
export default CardFactory;
